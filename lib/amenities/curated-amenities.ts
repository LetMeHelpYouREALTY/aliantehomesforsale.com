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
  /** Official primary source used to verify name and address */
  sourceUrl: string;
};

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
    sourceUrl: 'https://aliante.boydgaming.com/contact-us',
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
    sourceUrl:
      'https://www.smithsfoodanddrug.com/stores/grocery/nv/north-las-vegas/6855-aliante-pkwy-no-las-vegas-nv/706/00338',
  },
  {
    id: 'aliante-golf',
    name: 'Aliante Golf Club',
    category: 'golf',
    schemaType: 'GolfCourse',
    streetAddress: '3100 W Elkhorn Rd',
    addressLocality: 'North Las Vegas',
    addressRegion: 'NV',
    postalCode: '89084',
    description:
      'Public 18-hole course and clubhouse serving Club Aliante fairway lots and surrounding Aliante villages.',
    driveNote: 'West Elkhorn Road off Aliante Parkway — confirm drive time from your village.',
    sourceUrl: 'https://www.aliantegolf.com/book-tee-times/',
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
    sourceUrl:
      'https://www.cityofnorthlasvegas.com/Home/Components/FacilityDirectory/FacilityDirectory/73/777',
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
      'Clark County regional park (about 680 acres) with lakes, trails, and picnic areas east of Aliante near Tule Springs.',
    driveNote: 'East of Aliante — confirm drive time from your listing.',
    sourceUrl: 'https://www.clarkcountynv.gov/government/departments/parks___recreation/parks/floyd_lamb_park.php',
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
      'City of North Las Vegas regional park (about 170 acres) with sports fields, skate park, playgrounds, and event space near the 215 Beltway.',
    driveNote: 'South of Aliante along Craig Road — approximate drive time varies by village.',
    sourceUrl:
      'https://www.cityofnorthlasvegas.com/things-to-do/parks-and-recreation/parks/craig-ranch-regional-park',
  },
  {
    id: 'centennial-hills-hospital',
    name: 'Centennial Hills Hospital Medical Center',
    category: 'healthcare',
    schemaType: 'Hospital',
    streetAddress: '6900 N Durango Dr',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89149',
    description:
      'Acute-care hospital serving northwest Las Vegas valley communities including Aliante and Centennial Hills.',
    driveNote: 'West of central Aliante — confirm drive time from your address.',
    sourceUrl: 'https://www.centennialhillshospital.com/about',
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
    sourceUrl: 'https://www.brinleyms.com/apps/contact/',
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
    sourceUrl: 'https://www.centennialhighschool.org/apps/contact/',
  },
];

export function curatedAmenitiesForCategory(category: AmenityCategoryId): CuratedAmenity[] {
  return curatedAmenities.filter((place) => place.category === category);
}

export function formatCuratedAddress(place: CuratedAmenity): string {
  return `${place.streetAddress}, ${place.addressLocality}, ${place.addressRegion} ${place.postalCode}`;
}
