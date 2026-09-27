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
import { searchCategory } from '../../../lib/amenities/search-nearby';
import { loadGoogleMaps, mapsAuthFailed } from '../../../lib/google-maps-loader';
import AmenityStaticList from './AmenityStaticList';

type MapPlaceResult = {
  id: string;
  name: string;
  address: string;
  lat: number;
  lng: number;
  mapsUrl: string;
};

type CommunityAmenityMapProps = {
  variant?: 'section' | 'full';
  showAmenitiesPageLink?: boolean;
};

const MAP_MIN_HEIGHT = 380;

function buildInfoContent(
  name: string,
  detailLines: string[],
  link?: { href: string; label: string }
): HTMLElement {
  const wrap = document.createElement('div');
  wrap.style.maxWidth = '240px';
  const title = document.createElement('strong');
  title.textContent = name;
  wrap.appendChild(title);
  for (const line of detailLines) {
    wrap.appendChild(document.createElement('br'));
    const span = document.createElement('span');
    span.textContent = line;
    wrap.appendChild(span);
  }
  if (link) {
    wrap.appendChild(document.createElement('br'));
    const a = document.createElement('a');
    a.href = link.href;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.textContent = link.label;
    wrap.appendChild(a);
  }
  return wrap;
}

export default function CommunityAmenityMap({
  variant = 'section',
  showAmenitiesPageLink = true,
}: CommunityAmenityMapProps) {
  const apiKey = getGoogleMapsApiKey();
  const mapId = getGoogleMapsMapId();
  const [activeCategory, setActiveCategory] = useState<AmenityCategoryId>('restaurants');
  const [inView, setInView] = useState(false);
  const [mapFailed, setMapFailed] = useState(!apiKey || mapsAuthFailed);
  const [places, setPlaces] = useState<MapPlaceResult[]>([]);
  const [loadingPlaces, setLoadingPlaces] = useState(false);
  const [mapReady, setMapReady] = useState(false);
  const [listUsesCurated, setListUsesCurated] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);
  const markersRef = useRef<google.maps.Marker[]>([]);
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null);
  const categoryTabsId = useId();

  const enterFallback = useCallback(() => {
    setMapFailed(true);
    setMapReady(false);
    setPlaces([]);
    setListUsesCurated(false);
    mapInstanceRef.current = null;
    for (const marker of markersRef.current) {
      marker.setMap(null);
    }
    markersRef.current = [];
    if (infoWindowRef.current) {
      infoWindowRef.current.close();
    }
  }, []);

  useEffect(() => {
    if (mapsAuthFailed) {
      enterFallback();
    }
    const onAuthFailure = () => enterFallback();
    window.addEventListener('gmaps:auth-failure', onAuthFailure);
    return () => window.removeEventListener('gmaps:auth-failure', onAuthFailure);
  }, [enterFallback]);

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
    for (const marker of markersRef.current) {
      marker.setMap(null);
      google.maps.event.clearInstanceListeners(marker);
    }
    markersRef.current = [];
  }, []);

  const renderMarkers = useCallback(
    async (results: MapPlaceResult[]) => {
      const map = mapInstanceRef.current;
      if (!map) return;

      clearMarkers();
      const bounds = new google.maps.LatLngBounds();
      const center = {
        lat: alianteCommunityMap.center.latitude,
        lng: alianteCommunityMap.center.longitude,
      };
      bounds.extend(center);

      const communityMarker = new google.maps.Marker({
        map,
        position: center,
        title: alianteCommunityMap.communityMarkerTitle,
        zIndex: 1000,
      });
      markersRef.current.push(communityMarker);

      if (!infoWindowRef.current) {
        infoWindowRef.current = new google.maps.InfoWindow();
      }
      const infoWindow = infoWindowRef.current;

      const openCommunityInfo = () => {
        infoWindow.setContent(
          buildInfoContent(alianteCommunityMap.communityMarkerTitle, [
            alianteCommunityMap.center.fullAddress,
          ])
        );
        infoWindow.open({ map, anchor: communityMarker });
      };
      communityMarker.addListener('click', openCommunityInfo);

      for (const place of results) {
        bounds.extend({ lat: place.lat, lng: place.lng });
        const marker = new google.maps.Marker({
          map,
          position: { lat: place.lat, lng: place.lng },
          title: place.name,
        });
        marker.addListener('click', () => {
          infoWindow.setContent(
            buildInfoContent(place.name, [place.address], {
              href: place.mapsUrl,
              label: 'Directions',
            })
          );
          infoWindow.open({ map, anchor: marker });
        });
        markersRef.current.push(marker);
      }

      map.fitBounds(bounds, 48);
    },
    [clearMarkers]
  );

  const initMap = useCallback(async () => {
    if (!apiKey || !mapRef.current || mapInstanceRef.current || mapsAuthFailed) return;
    try {
      await loadGoogleMaps(apiKey);
      const center = {
        lat: alianteCommunityMap.center.latitude,
        lng: alianteCommunityMap.center.longitude,
      };

      const options: google.maps.MapOptions = {
        center,
        zoom: alianteCommunityMap.defaultZoom,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: true,
      };
      if (mapId) {
        options.mapId = mapId;
      }

      mapInstanceRef.current = new google.maps.Map(mapRef.current, options);
      setMapReady(true);
    } catch {
      enterFallback();
    }
  }, [apiKey, mapId, enterFallback]);

  const fetchPlaces = useCallback(
    async (categoryId: AmenityCategoryId) => {
      if (!apiKey || mapFailed || !mapInstanceRef.current) return;
      setLoadingPlaces(true);
      setListUsesCurated(false);
      try {
        await loadGoogleMaps(apiKey);
        const category = amenityCategories.find((c) => c.id === categoryId);
        const primaryTypes = category?.primaryTypes ?? ['restaurant'];
        const center = {
          lat: alianteCommunityMap.center.latitude,
          lng: alianteCommunityMap.center.longitude,
        };

        const nearby = await searchCategory(
          center,
          categoryId,
          primaryTypes,
          alianteCommunityMap.searchRadiusMeters
        );

        const mapped: MapPlaceResult[] = nearby
          .map((p, index) => placeToResult(p, index))
          .filter((p): p is MapPlaceResult => p !== null);

        setPlaces(mapped);
        await renderMarkers(mapped);
      } catch {
        setPlaces([]);
        setListUsesCurated(true);
        await renderMarkers([]);
      } finally {
        setLoadingPlaces(false);
      }
    },
    [apiKey, mapFailed, renderMarkers]
  );

  useEffect(() => {
    if (!inView || mapFailed || !apiKey || mapsAuthFailed) return;
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
          {showFallback || listUsesCurated ? (
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

function placeToResult(place: google.maps.places.Place, index: number): MapPlaceResult | null {
  const name = place.displayName ?? 'Place';
  const address = place.formattedAddress ?? '';
  const loc = place.location;
  if (!loc) return null;
  const json = loc.toJSON();
  const lat = json.lat;
  const lng = json.lng;
  const mapsUrl =
    place.googleMapsURI ?? directionsUrlForCoordinates(lat, lng);
  return {
    id: place.id ?? `place-${index}`,
    name,
    address,
    lat,
    lng,
    mapsUrl,
  };
}
