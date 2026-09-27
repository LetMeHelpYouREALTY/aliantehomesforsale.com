'use client';

import Link from 'next/link';
import { useCallback, useEffect, useId, useRef, useState } from 'react';
import {
  type AmenityCategoryId,
  alianteCommunityMap,
  amenityCategories,
  communityFallbackEmbedUrl,
  directionsUrlForCoordinates,
  getGoogleMapsApiKey,
  getGoogleMapsMapId,
} from '../../../lib/amenities/community-map-config';
import { loadGoogleMapsScript } from '../../../lib/amenities/load-google-maps';
import AmenityStaticList from './AmenityStaticList';

type MapPlaceResult = {
  id: string;
  name: string;
  address: string;
  rating?: number;
  lat: number;
  lng: number;
  mapsUrl: string;
};

type CommunityAmenityMapProps = {
  variant?: 'section' | 'full';
  showAmenitiesPageLink?: boolean;
};

const MAP_MIN_HEIGHT = 380;

export default function CommunityAmenityMap({
  variant = 'section',
  showAmenitiesPageLink = true,
}: CommunityAmenityMapProps) {
  const apiKey = getGoogleMapsApiKey();
  const mapId = getGoogleMapsMapId();
  const [activeCategory, setActiveCategory] = useState<AmenityCategoryId>('restaurants');
  const [inView, setInView] = useState(false);
  const [mapFailed, setMapFailed] = useState(!apiKey);
  const [places, setPlaces] = useState<MapPlaceResult[]>([]);
  const [loadingPlaces, setLoadingPlaces] = useState(false);
  const [mapReady, setMapReady] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<unknown>(null);
  const markersRef = useRef<unknown[]>([]);
  const infoWindowRef = useRef<unknown>(null);
  const categoryTabsId = useId();

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '120px', threshold: 0.1 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const clearMarkers = useCallback(() => {
    const win = window as Window & {
      google?: { maps: { event: { clearInstanceListeners: (i: unknown) => void } } };
    };
    for (const marker of markersRef.current) {
      if (marker && typeof marker === 'object' && 'map' in marker) {
        (marker as { map: null }).map = null;
      }
      win.google?.maps?.event?.clearInstanceListeners(marker);
    }
    markersRef.current = [];
  }, []);

  const renderMarkers = useCallback(
    async (results: MapPlaceResult[]) => {
      const win = window as Window & {
        google?: {
          maps: {
            Marker: new (
              opts: Record<string, unknown>
            ) => {
              map: unknown;
              addListener: (e: string, h: () => void) => void;
            };
            InfoWindow: new () => {
              setContent: (html: string) => void;
              open: (o: { map: unknown; anchor?: unknown }) => void;
            };
            LatLngBounds: new () => { extend: (p: { lat: number; lng: number }) => void };
          };
        };
      };
      const map = mapInstanceRef.current;
      if (!map || !win.google?.maps) return;

      clearMarkers();
      const bounds = new win.google.maps.LatLngBounds();
      const center = {
        lat: alianteCommunityMap.center.latitude,
        lng: alianteCommunityMap.center.longitude,
      };
      bounds.extend(center);

      const communityMarker = new win.google.maps.Marker({
        map,
        position: center,
        title: alianteCommunityMap.communityMarkerTitle,
        zIndex: 1000,
      });
      markersRef.current.push(communityMarker);

      if (!infoWindowRef.current) {
        infoWindowRef.current = new win.google.maps.InfoWindow();
      }
      const infoWindow = infoWindowRef.current as {
        setContent: (html: string) => void;
        open: (o: { map: unknown; anchor?: unknown }) => void;
      };

      communityMarker.addListener('click', () => {
        infoWindow.setContent(
          `<div style="max-width:220px"><strong>${alianteCommunityMap.communityMarkerTitle}</strong><br/>${alianteCommunityMap.center.fullAddress}</div>`
        );
        infoWindow.open({ map, anchor: communityMarker });
      });

      for (const place of results) {
        bounds.extend({ lat: place.lat, lng: place.lng });
        const marker = new win.google.maps.Marker({
          map,
          position: { lat: place.lat, lng: place.lng },
          title: place.name,
        });
        marker.addListener('click', () => {
          const ratingLine =
            place.rating !== undefined ? `<br/>Rating: ${place.rating.toFixed(1)}` : '';
          infoWindow.setContent(
            `<div style="max-width:240px"><strong>${place.name}</strong>${ratingLine}<br/>${place.address}<br/><a href="${place.mapsUrl}" target="_blank" rel="noopener">Directions</a></div>`
          );
          infoWindow.open({ map, anchor: marker });
        });
        markersRef.current.push(marker);
      }

      (map as { fitBounds: (b: unknown, p?: number) => void }).fitBounds(bounds, 48);
    },
    [clearMarkers]
  );

  const initMap = useCallback(async () => {
    if (!apiKey || !mapRef.current || mapInstanceRef.current) return;
    try {
      await loadGoogleMapsScript(apiKey);
      const win = window as Window & {
        google?: {
          maps: {
            importLibrary: (n: string) => Promise<unknown>;
            Map: new (el: HTMLElement, o: Record<string, unknown>) => unknown;
          };
        };
      };
      if (!win.google?.maps) {
        setMapFailed(true);
        return;
      }

      const mapsLibrary = (await win.google.maps.importLibrary('maps')) as {
        Map: new (el: HTMLElement, o: Record<string, unknown>) => unknown;
      };
      const GoogleMapConstructor = mapsLibrary.Map;

      const center = {
        lat: alianteCommunityMap.center.latitude,
        lng: alianteCommunityMap.center.longitude,
      };

      const options: Record<string, unknown> = {
        center,
        zoom: alianteCommunityMap.defaultZoom,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: true,
      };
      if (mapId) {
        options.mapId = mapId;
      }

      mapInstanceRef.current = new GoogleMapConstructor(mapRef.current, options);
      setMapReady(true);
    } catch {
      setMapFailed(true);
    }
  }, [apiKey, mapId]);

  const fetchPlaces = useCallback(
    async (categoryId: AmenityCategoryId) => {
      if (!apiKey || mapFailed || !mapInstanceRef.current) return;
      setLoadingPlaces(true);
      try {
        await loadGoogleMapsScript(apiKey);
        const win = window as Window & {
          google?: { maps: { importLibrary: (n: string) => Promise<unknown> } };
        };
        if (!win.google?.maps) {
          setMapFailed(true);
          return;
        }

        const category = amenityCategories.find((c) => c.id === categoryId);
        const primaryTypes = category?.primaryTypes ?? ['restaurant'];
        const center = {
          lat: alianteCommunityMap.center.latitude,
          lng: alianteCommunityMap.center.longitude,
        };

        const placesLib = (await win.google.maps.importLibrary('places')) as {
          Place: {
            searchNearby: (req: Record<string, unknown>) => Promise<{ places: PlaceApiResult[] }>;
          };
        };

        const request = {
          fields: ['displayName', 'location', 'formattedAddress', 'rating', 'googleMapsURI'],
          locationRestriction: {
            center,
            radius: alianteCommunityMap.searchRadiusMeters,
          },
          includedPrimaryTypes: primaryTypes.slice(0, 5),
          maxResultCount: 15,
        };

        const { places: nearby } = await placesLib.Place.searchNearby(request);
        const mapped: MapPlaceResult[] = nearby
          .map((p, index) => placeToResult(p, index))
          .filter((p): p is MapPlaceResult => p !== null);

        setPlaces(mapped);
        await renderMarkers(mapped);
      } catch {
        setPlaces([]);
        await renderMarkers([]);
      } finally {
        setLoadingPlaces(false);
      }
    },
    [apiKey, mapFailed, renderMarkers]
  );

  useEffect(() => {
    if (!inView || mapFailed || !apiKey) return;
    void initMap();
  }, [inView, mapFailed, apiKey, initMap]);

  useEffect(() => {
    if (!mapReady || mapFailed || !apiKey) return;
    void fetchPlaces(activeCategory);
  }, [activeCategory, mapReady, mapFailed, apiKey, fetchPlaces]);

  const showFallback = mapFailed || !apiKey;
  const isFull = variant === 'full';

  return (
    <div ref={containerRef}>
      <div className="flex flex-wrap gap-2 mb-4" role="tablist" aria-labelledby={categoryTabsId}>
        <span id={categoryTabsId} className="sr-only">
          Filter amenities on the map
        </span>
        {amenityCategories.map((cat) => {
          const selected = cat.id === activeCategory;
          return (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-label={cat.ariaLabel}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 rounded-full text-sm font-semibold border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2c5aa0] ${
                selected
                  ? 'bg-[#2c5aa0] text-white border-[#2c5aa0]'
                  : 'bg-white text-[#1a365d] border-gray-200 hover:border-[#2c5aa0]'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      <div
        className={`grid grid-cols-1 ${isFull ? 'lg:grid-cols-2' : 'lg:grid-cols-2'} gap-8 items-start`}
      >
        <div
          className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-gray-100"
          style={{ minHeight: MAP_MIN_HEIGHT, height: isFull ? 480 : MAP_MIN_HEIGHT }}
          aria-label="Interactive map of amenities near Aliante"
        >
          {showFallback ? (
            <iframe
              title="Map of Aliante, North Las Vegas"
              src={communityFallbackEmbedUrl()}
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          ) : (
            <div ref={mapRef} className="absolute inset-0 w-full h-full" />
          )}
          {loadingPlaces && !showFallback && (
            <p className="absolute bottom-3 left-3 text-xs font-medium bg-white/90 px-2 py-1 rounded">
              Loading places…
            </p>
          )}
        </div>

        <div>
          {showFallback ? (
            <AmenityStaticList
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
              showCategoryFilters={false}
              compact={!isFull}
            />
          ) : (
            <ul className="space-y-3" aria-live="polite">
              {places.length === 0 && !loadingPlaces && (
                <li className="text-sm text-gray-600 rounded-xl bg-white border p-4">
                  Select a category to load nearby places, or{' '}
                  <a
                    href={directionsUrlForCoordinates(
                      alianteCommunityMap.center.latitude,
                      alianteCommunityMap.center.longitude
                    )}
                    className="text-blue-600 font-semibold hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    open Aliante in Google Maps
                  </a>
                  .
                </li>
              )}
              {places.map((place) => (
                <li
                  key={place.id}
                  className="rounded-xl bg-white border border-gray-100 p-4 shadow-sm"
                >
                  <p className="font-bold text-lg" style={{ color: '#2c5aa0' }}>
                    {place.name}
                  </p>
                  {place.rating !== undefined && (
                    <p className="text-sm text-gray-600">Rating: {place.rating.toFixed(1)}</p>
                  )}
                  <p className="text-sm text-gray-600 mt-1">{place.address}</p>
                  <a
                    href={place.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex mt-3 px-4 py-2 rounded-lg text-sm font-semibold text-white"
                    style={{ backgroundColor: '#ed8936' }}
                  >
                    Directions
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {showAmenitiesPageLink && variant === 'section' && (
        <p className="mt-6 text-center text-sm text-gray-600">
          <Link href="/amenities" className="font-semibold text-[#2c5aa0] hover:underline">
            See the full Nearby Amenities guide for Aliante →
          </Link>
        </p>
      )}
    </div>
  );
}

type PlaceApiResult = {
  id?: string;
  displayName?: string | { text?: string };
  formattedAddress?: string;
  rating?: number;
  googleMapsURI?: string;
  location?: { lat: () => number; lng: () => number } | { lat: number; lng: number };
};

function placeToResult(place: PlaceApiResult, index: number): MapPlaceResult | null {
  const name =
    typeof place.displayName === 'string'
      ? place.displayName
      : (place.displayName?.text ?? 'Place');
  const address = place.formattedAddress ?? '';
  const loc = place.location;
  if (!loc) return null;
  const lat = typeof loc.lat === 'function' ? loc.lat() : loc.lat;
  const lng = typeof loc.lng === 'function' ? loc.lng() : loc.lng;
  const mapsUrl = place.googleMapsURI ?? directionsUrlForCoordinates(lat, lng);
  const result: MapPlaceResult = {
    id: place.id ?? `place-${index}`,
    name,
    address,
    lat,
    lng,
    mapsUrl,
  };
  if (place.rating !== undefined) {
    result.rating = place.rating;
  }
  return result;
}
