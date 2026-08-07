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
    description: 'Controlled-access neighborhoods with resort-style amenities across Aliante.',
    href: '/gated-communities',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&q=80',
    alt: 'Gated community homes in Aliante North Las Vegas',
    highlights: ['24/7 gated entry', 'Community pools & parks', 'Resale + new construction'],
  },
  {
    id: 'golf',
    title: 'Golf-Course Homes',
    description: 'Homes near Club Aliante and fairway living in North Las Vegas 89084.',
    href: '/golf-homes',
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=600&fit=crop&q=80',
    alt: 'Golf course homes near Club Aliante',
    highlights: ['Club Aliante access', 'Fairway & mountain views', 'Lock-and-leave options'],
  },
  {
    id: 'new-construction',
    title: 'New Construction',
    description: 'Compare Lennar, D.R. Horton, Tri Pointe, Del Webb, Toll Brothers & more.',
    href: '/new-construction',
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cd00?w=800&h=600&fit=crop&q=80',
    alt: 'New construction homes in Aliante North Las Vegas',
    highlights: ['Builder incentives', 'Modern floor plans', 'Independent buyer advocacy'],
  },
  {
    id: 'sun-city',
    title: 'Sun City Aliante 55+',
    description: 'Del Webb active-adult living with golf, clubs, and low-maintenance homes.',
    href: '/sun-city-aliante',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop&q=80',
    alt: 'Sun City Aliante 55+ active adult community',
    highlights: ['55+ Del Webb community', 'Golf & fitness clubs', 'Single-story plans'],
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
    value: '89084 only',
    note: 'Hyperlocal to Aliante & North Las Vegas — not the entire Las Vegas valley.',
  },
  {
    id: 'builders',
    label: 'Active builders',
    value: '6+',
    note: 'Lennar, D.R. Horton, Tri Pointe, Del Webb, Toll Brothers, Richmond American.',
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
      'Hundreds of Aliante closings across gated communities, new construction, Club Aliante golf homes, and Sun City Aliante 55+.',
  },
  {
    id: 'builders',
    title: 'Builder negotiation advocate',
    description:
      'Independent buyer representation with major Aliante builders — incentives, upgrades, and contract terms at no cost to the buyer.',
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
    title: 'Get local guidance',
    description: 'Work with Dr. Jan Duffy on offers, inspections, and closing.',
    href: '/contact',
  },
];

export const marketAsOfLabel = 'Market tools update from MLS; figures on widgets are live.';
