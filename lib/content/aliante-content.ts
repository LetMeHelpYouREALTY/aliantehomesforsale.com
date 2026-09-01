/**
 * Typed content objects for Aliante UX + SEO (no fabricated listings or ratings).
 * Keep market figures soft / dated — live MLS numbers come from RealScout widgets.
 */

export type LifestyleCategory = {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
  alt: string;
  highlights: string[];
};

export type MarketSnapshotItem = {
  id: string;
  label: string;
  value: string;
  note: string;
};

export type CredentialItem = {
  id: string;
  title: string;
  description: string;
};

export type BuyerPath = {
  id: string;
  step: number;
  title: string;
  description: string;
  href: string;
};

/** Homepage “Explore homes by lifestyle” — replaces fake MLS cards */
export const lifestyleCategories: LifestyleCategory[] = [
  {
    id: 'gated',
    title: 'Gated Communities',
    description: 'Controlled-access neighborhoods with private amenities across Aliante.',
    href: '/gated-communities',
    image: '/images/gated.jpg',
    alt: 'Gated community homes in Aliante North Las Vegas',
    highlights: ['Controlled entry', 'Community pools & parks', 'Resale inventory'],
  },
  {
    id: 'golf',
    title: 'Golf-Course Homes',
    description: 'Homes near Club Aliante and fairway living in North Las Vegas 89084.',
    href: '/golf-homes',
    image: '/images/golf.jpg',
    alt: 'Golf course homes near Club Aliante',
    highlights: ['Near Aliante Golf Club', 'Fairway & mountain views', 'Confirm HOA and lot type'],
  },
  {
    id: 'new-construction',
    title: 'New Construction',
    description:
      'Compare Lennar and Del Webb in 89084 with Horton at Tule Springs. Toll and Tri Pointe are not inside 89084.',
    href: '/new-construction',
    image: '/images/builders.jpg',
    alt: 'New construction homes in Aliante North Las Vegas',
    highlights: ['Builder incentives', 'Modern floor plans', 'Independent buyer representation'],
  },
  {
    id: 'sun-city',
    title: 'Sun City Aliante 55+',
    description: 'Del Webb active-adult living with golf, clubs, and low-maintenance homes.',
    href: '/sun-city-aliante',
    image: '/images/sun-city.jpg',
    alt: 'Sun City Aliante 55+ active adult community',
    highlights: ['55+ Del Webb community', 'Golf & fitness clubs', 'Confirm floor plan on listing'],
  },
];

/** Soft market narrative — no fake “live” MLS counts */
export const marketSnapshot: MarketSnapshotItem[] = [
  {
    id: 'inventory',
    label: 'MLS inventory',
    value: 'Live feed',
    note: 'Aliante listings refresh about every 15 minutes via MLS / RealScout.',
  },
  {
    id: 'focus',
    label: 'Service focus',
    value: '89084 focus',
    note: 'Hyperlocal to Aliante & North Las Vegas — not the entire Las Vegas valley.',
  },
  {
    id: 'builders',
    label: 'Builder map',
    value: 'Compare',
    note: 'Lennar and Del Webb in 89084; Horton in Tule Springs; Tri Pointe, Toll, and Richmond are not inside Aliante.',
  },
  {
    id: 'experience',
    label: 'Local since',
    value: '2018',
    note: 'Dr. Jan Duffy has specialized in Aliante transactions since 2018.',
  },
];

export const agentCredentials: CredentialItem[] = [
  {
    id: 'license',
    title: 'Nevada License S.0197614.LLC',
    description:
      'Dr. Jan Duffy is a licensed Nevada real estate professional with Berkshire Hathaway HomeServices Nevada Properties, focused on Aliante and North Las Vegas 89084.',
  },
  {
    id: 'hyperlocal',
    title: 'Aliante specialist since 2018',
    description:
      'Aliante closings since 2018 across gated villages, new construction, Club Aliante golf homes, and Sun City Aliante 55+. Call for current references.',
  },
  {
    id: 'builders',
    title: 'Builder negotiation advocate',
    description:
      'Independent buyer representation with Lennar and Del Webb in 89084, Horton at Tule Springs, and other builders you will actually tour. Confirm the fee in writing before you tour.',
  },
];

export const buyerPathSteps: BuyerPath[] = [
  {
    id: 'search',
    step: 1,
    title: 'Search live MLS',
    description: 'Browse Aliante homes updated about every 15 minutes.',
    href: '/homes-for-sale',
  },
  {
    id: 'tour',
    step: 2,
    title: 'Tour communities',
    description: 'Compare gated, golf, 55+, and new-construction neighborhoods.',
    href: '/neighborhoods',
  },
  {
    id: 'guide',
    step: 3,
    title: 'Write and close',
    description: 'Work with Dr. Jan Duffy on offers, inspections, and closing in ZIP 89084.',
    href: '/contact',
  },
];

export const marketAsOfLabel = 'Market tools update from MLS; figures on widgets are live.';

export type NearbyPlace = {
  id: string;
  name: string;
  category: string;
  description: string;
  /** Google Maps search / directions query */
  mapsQuery: string;
  driveNote: string;
};

/** Local attractions & businesses near Aliante Corporate Center (GBP “what’s nearby”) */
export const nearbyPlaces: NearbyPlace[] = [
  {
    id: 'aliante-casino',
    name: 'Aliante Casino + Hotel',
    category: 'Entertainment & dining',
    description: 'Resort casino with restaurants, shows, and a spa on Aliante Parkway.',
    mapsQuery: 'Aliante Casino + Hotel, North Las Vegas, NV',
    driveNote: 'Nearby on Aliante Parkway — confirm drive time from the address you will buy.',
  },
  {
    id: 'aliante-golf',
    name: 'Aliante Golf Club',
    category: 'Golf',
    description:
      'Public 18-hole course and clubhouse serving Club Aliante and surrounding neighborhoods.',
    mapsQuery: 'Aliante Golf Club, North Las Vegas, NV',
    driveNote: 'Nearby on Aliante Parkway — confirm drive time from the address you will buy.',
  },
  {
    id: 'nature-discovery-park',
    name: 'Aliante Nature Discovery Park',
    category: 'Parks & outdoors',
    description:
      'Walking paths, playgrounds, and open green space in the heart of the Aliante master plan.',
    mapsQuery: 'Aliante Nature Discovery Park, North Las Vegas, NV',
    driveNote: 'Nearby on Aliante Parkway — confirm drive time from the address you will buy.',
  },
  {
    id: 'floyd-lamb',
    name: 'Floyd Lamb Park at Tule Springs',
    category: 'Parks & outdoors',
    description:
      'Large regional park with lakes, trails, and picnic areas near Tule Springs new construction.',
    mapsQuery: 'Floyd Lamb Park at Tule Springs, Las Vegas, NV',
    driveNote: 'East of Aliante — confirm drive time from the address you will buy.',
  },
  {
    id: 'craig-ranch',
    name: 'Craig Ranch Regional Park',
    category: 'Parks & recreation',
    description:
      'Sports fields, trails, and event space serving North Las Vegas near the 215 Beltway.',
    mapsQuery: 'Craig Ranch Regional Park, North Las Vegas, NV',
    driveNote: 'South of Aliante along the 215 — confirm drive time from that street.',
  },
  {
    id: 'centennial-hills',
    name: 'Centennial Hills shopping',
    category: 'Shopping & services',
    description:
      'Grocery, retail, and everyday services along the Centennial corridor west of Aliante.',
    mapsQuery: 'Centennial Hills shopping, Las Vegas, NV',
    driveNote:
      'West of Aliante along the Centennial corridor — confirm drive time from that street.',
  },
];

export function nearbyPlaceDirectionsUrl(mapsQuery: string): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(mapsQuery)}`;
}

export function nearbyPlaceSearchUrl(mapsQuery: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapsQuery)}`;
}
