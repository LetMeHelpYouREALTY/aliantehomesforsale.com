import type { AmenityCategoryId } from './community-map-config';

export type CuratedAmenity = {
  id: string;
  name: string;
  category: AmenityCategoryId;
  schemaType:
    | 'Restaurant'
    | 'Park'
    | 'GolfCourse'
    | 'Hospital'
    | 'Pharmacy'
    | 'GroceryStore'
    | 'ShoppingCenter'
    | 'School'
    | 'SportsActivityLocation'
    | 'Place';
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  description: string;
  driveNote: string;
};

/** Verified names and street addresses — no invented ratings or distances */
export const curatedAmenities: CuratedAmenity[] = [
  {
    id: 'aliante-casino',
    name: 'Aliante Casino + Hotel',
    category: 'restaurants',
    schemaType: 'Restaurant',
    streetAddress: '7300 Aliante Pkwy',
    addressLocality: 'North Las Vegas',
    addressRegion: 'NV',
    postalCode: '89084',
    description:
      'Resort casino with multiple restaurants, entertainment, and a spa along Aliante Parkway in the master plan.',
    driveNote: 'On Aliante Parkway — confirm drive time from the street you will buy.',
  },
  {
    id: 'smiths-aliante',
    name: "Smith's Food and Drug",
    category: 'grocery',
    schemaType: 'GroceryStore',
    streetAddress: '6855 N Aliante Pkwy',
    addressLocality: 'North Las Vegas',
    addressRegion: 'NV',
    postalCode: '89084',
    description:
      'Full-service grocery in the Aliante Market Mall corridor — produce, deli, pharmacy counter, and everyday household goods.',
    driveNote: 'On Aliante Parkway near Nature Discovery Park.',
  },
  {
    id: 'aliante-golf',
    name: 'Aliante Golf Club',
    category: 'golf',
    schemaType: 'GolfCourse',
    streetAddress: '7300 Aliante Pkwy',
    addressLocality: 'North Las Vegas',
    addressRegion: 'NV',
    postalCode: '89084',
    description:
      'Public 18-hole course and clubhouse serving Club Aliante fairway lots and surrounding Aliante villages.',
    driveNote: 'Shared campus with Aliante Casino + Hotel on Aliante Parkway.',
  },
  {
    id: 'nature-discovery-park',
    name: 'Aliante Nature Discovery Park',
    category: 'parks',
    schemaType: 'Park',
    streetAddress: '2627 Nature Park Dr',
    addressLocality: 'North Las Vegas',
    addressRegion: 'NV',
    postalCode: '89084',
    description:
      'City of North Las Vegas park with a lake, splash pad, playgrounds, sports courts, and walking paths in the center of Aliante.',
    driveNote: 'Central park in the Aliante master plan.',
  },
  {
    id: 'floyd-lamb',
    name: 'Floyd Lamb Park at Tule Springs',
    category: 'parks',
    schemaType: 'Park',
    streetAddress: '9200 Tule Springs Rd',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89131',
    description:
      'Regional park with lakes, trails, and picnic areas east of Aliante near Tule Springs new construction.',
    driveNote: 'East of Aliante — confirm drive time from your listing.',
  },
  {
    id: 'craig-ranch',
    name: 'Craig Ranch Regional Park',
    category: 'parks',
    schemaType: 'Park',
    streetAddress: '628 W Craig Rd',
    addressLocality: 'North Las Vegas',
    addressRegion: 'NV',
    postalCode: '89032',
    description:
      'Large North Las Vegas regional park with sports fields, trails, and event space near the 215 Beltway.',
    driveNote: 'South of Aliante along Craig Road — approximate drive time varies by village.',
  },
  {
    id: 'centennial-hills-hospital',
    name: 'Centennial Hills Hospital Medical Center',
    category: 'healthcare',
    schemaType: 'Hospital',
    streetAddress: '6900 N Pecos Rd',
    addressLocality: 'North Las Vegas',
    addressRegion: 'NV',
    postalCode: '89084',
    description:
      'Acute-care hospital serving northwest Las Vegas valley communities including Aliante and Centennial Hills.',
    driveNote: 'Southwest of central Aliante — confirm drive time from your address.',
  },
  {
    id: 'centennial-hills-shopping',
    name: 'Centennial Hills retail corridor',
    category: 'shopping',
    schemaType: 'ShoppingCenter',
    streetAddress: 'Centennial Center Blvd',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89149',
    description:
      'Big-box retail, restaurants, and services along the Centennial corridor west of Aliante.',
    driveNote: 'West of Aliante — confirm drive time from the lot you will tour.',
  },
  {
    id: 'brinley-middle',
    name: 'J. Harold Brinley Middle School',
    category: 'schools',
    schemaType: 'School',
    streetAddress: '2422 Maverick St',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89108',
    description:
      'CCSD middle school campus named on this site for parts of the Aliante area — confirm the current attendance map for your lot.',
    driveNote: 'Confirm CCSD feeder pattern for the street you will buy.',
  },
  {
    id: 'centennial-high',
    name: 'Centennial High School',
    category: 'schools',
    schemaType: 'School',
    streetAddress: '10200 Centennial Pkwy',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89149',
    description:
      'CCSD high school campus referenced for parts of northwest Las Vegas — confirm whether Legacy or Centennial serves your address.',
    driveNote: 'Confirm CCSD boundaries before you offer.',
  },
];

export function curatedAmenitiesForCategory(category: AmenityCategoryId): CuratedAmenity[] {
  return curatedAmenities.filter((place) => place.category === category);
}

export function formatCuratedAddress(place: CuratedAmenity): string {
  return `${place.streetAddress}, ${place.addressLocality}, ${place.addressRegion} ${place.postalCode}`;
}
