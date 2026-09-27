/**
 * Hyperlocal map anchor for the Aliante master plan (North Las Vegas 89084).
 * Center: Aliante Nature Discovery Park — City of North Las Vegas facility directory.
 * @see https://www.cityofnorthlasvegas.com/Home/Components/FacilityDirectory/FacilityDirectory/73/777
 */
export const alianteCommunityMap = {
  communityName: 'Aliante',
  city: 'North Las Vegas',
  state: 'NV',
  zip: '89084',
  center: {
    latitude: 36.2866,
    longitude: -115.1763,
    label: 'Aliante Nature Discovery Park',
    streetAddress: '2627 Nature Park Dr',
    fullAddress: '2627 Nature Park Dr, North Las Vegas, NV 89084',
  },
  /** Community marker title on the interactive map */
  communityMarkerTitle: 'Aliante, North Las Vegas',
  searchRadiusMeters: 8000,
  defaultZoom: 13,
  fallbackEmbedZoom: 14,
} as const;

export type AmenityCategoryId =
  | 'restaurants'
  | 'cafes'
  | 'grocery'
  | 'parks'
  | 'golf'
  | 'healthcare'
  | 'pharmacies'
  | 'shopping'
  | 'parking'
  | 'fitness'
  | 'schools';

export type AmenityCategoryConfig = {
  id: AmenityCategoryId;
  label: string;
  /** Google Places (New) primary types for searchNearby */
  primaryTypes: string[];
  ariaLabel: string;
};

/** Master-planned suburban community — schools included; golf & parks prominent after daily needs */
export const amenityCategories: AmenityCategoryConfig[] = [
  {
    id: 'restaurants',
    label: 'Restaurants',
    primaryTypes: ['restaurant'],
    ariaLabel: 'Show restaurants near Aliante',
  },
  {
    id: 'cafes',
    label: 'Cafes',
    primaryTypes: ['cafe', 'coffee_shop'],
    ariaLabel: 'Show cafes near Aliante',
  },
  {
    id: 'grocery',
    label: 'Grocery',
    primaryTypes: ['supermarket', 'grocery_store'],
    ariaLabel: 'Show grocery stores near Aliante',
  },
  {
    id: 'parks',
    label: 'Parks',
    primaryTypes: ['park'],
    ariaLabel: 'Show parks near Aliante',
  },
  {
    id: 'golf',
    label: 'Golf',
    primaryTypes: ['golf_course'],
    ariaLabel: 'Show golf courses near Aliante',
  },
  {
    id: 'healthcare',
    label: 'Healthcare',
    primaryTypes: ['hospital', 'doctor'],
    ariaLabel: 'Show healthcare near Aliante',
  },
  {
    id: 'pharmacies',
    label: 'Pharmacies',
    primaryTypes: ['pharmacy', 'drugstore'],
    ariaLabel: 'Show pharmacies near Aliante',
  },
  {
    id: 'shopping',
    label: 'Shopping',
    primaryTypes: ['shopping_mall', 'department_store'],
    ariaLabel: 'Show shopping near Aliante',
  },
  {
    id: 'parking',
    label: 'Parking',
    primaryTypes: ['parking'],
    ariaLabel: 'Show parking near Aliante',
  },
  {
    id: 'fitness',
    label: 'Fitness',
    primaryTypes: ['gym', 'fitness_center'],
    ariaLabel: 'Show fitness centers near Aliante',
  },
  {
    id: 'schools',
    label: 'Schools',
    primaryTypes: ['school', 'primary_school', 'secondary_school'],
    ariaLabel: 'Show schools near Aliante',
  },
];

export function getGoogleMapsApiKey(): string | undefined {
  const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY?.trim();
  return key || undefined;
}

export function getGoogleMapsMapId(): string | undefined {
  const id = process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID?.trim();
  return id || undefined;
}

export function communityFallbackEmbedUrl(): string {
  const { latitude, longitude } = alianteCommunityMap.center;
  const { fallbackEmbedZoom } = alianteCommunityMap;
  return `https://www.google.com/maps?q=${latitude},${longitude}&z=${fallbackEmbedZoom}&output=embed`;
}

export function directionsUrlForCoordinates(lat: number, lng: number): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
}

export function directionsUrlForAddress(address: string): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
}
