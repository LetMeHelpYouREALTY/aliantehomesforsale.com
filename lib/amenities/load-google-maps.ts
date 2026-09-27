type GoogleMapsWindow = Window & {
  google?: {
    maps: {
      importLibrary: (name: string) => Promise<unknown>;
      Map: new (el: HTMLElement, opts: Record<string, unknown>) => GoogleMap;
      InfoWindow: new (opts?: Record<string, unknown>) => GoogleInfoWindow;
      Marker: new (opts: Record<string, unknown>) => GoogleMarker;
      LatLng: new (lat: number, lng: number) => GoogleLatLng;
      LatLngBounds: new () => GoogleLatLngBounds;
      event: { clearInstanceListeners: (instance: unknown) => void };
    };
  };
};

type GoogleMap = {
  setCenter: (center: { lat: number; lng: number }) => void;
  fitBounds: (bounds: GoogleLatLngBounds, padding?: number) => void;
};

type GoogleInfoWindow = {
  setContent: (content: string) => void;
  open: (opts: { map: GoogleMap; anchor?: GoogleMarker }) => void;
  close: () => void;
};

type GoogleMarker = {
  map: GoogleMap | null;
  position: GoogleLatLng | { lat: number; lng: number };
  addListener: (event: string, handler: () => void) => void;
};

type GoogleLatLng = { lat: () => number; lng: () => number };
type GoogleLatLngBounds = { extend: (latLng: { lat: number; lng: number }) => void };

let loadPromise: Promise<void> | null = null;

export function loadGoogleMapsScript(apiKey: string): Promise<void> {
  if (typeof window === 'undefined') {
    return Promise.reject(new Error('Google Maps can only load in the browser'));
  }

  const win = window as GoogleMapsWindow;
  if (win.google?.maps?.importLibrary) {
    return Promise.resolve();
  }

  if (loadPromise) return loadPromise;

  loadPromise = new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>('script[data-google-maps-loader]');
    if (existing) {
      existing.addEventListener('load', () => resolve());
      existing.addEventListener('error', () => reject(new Error('Google Maps script failed')));
      return;
    }

    const script = document.createElement('script');
    script.dataset.googleMapsLoader = 'true';
    script.async = true;
    script.defer = true;
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(apiKey)}&libraries=places&loading=async`;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Google Maps script failed'));
    document.head.appendChild(script);
  });

  return loadPromise;
}

export type { GoogleMapsWindow, GoogleMap, GoogleInfoWindow, GoogleMarker };
