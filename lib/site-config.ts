/**
 * Single source of truth for site identity and NAP (Name, Address, Phone).
 * Used for metadata, schema (Organization, LocalBusiness, RealEstateAgent), and GEO/AEO consistency.
 * Keep in sync with Google Business Profile.
 */
export const siteConfig = {
  siteUrl: 'https://www.aliantehomesforsale.com',
  siteName: 'Aliante Las Vegas | Homes by Dr. Jan Duffy',
  defaultTitle: 'Aliante North Las Vegas Real Estate & Homes For Sale | 286+ MLS Listings',
  defaultDescription:
    'Browse 286+ Aliante homes for sale in North Las Vegas, NV. Updated every 15 minutes from MLS. Gated communities, Sun City Aliante 55+, new construction. Call (702) 707-7273 for expert local guidance.',
  agentName: 'Dr. Jan Duffy',
  agentLicense: 'S.0197614.LLC',
  brokerage: 'Berkshire Hathaway HomeServices Nevada Properties',
  foundedYear: 2018,
  areaName: 'Aliante',
  region: 'North Las Vegas, NV',
  areaServed: 'Aliante, North Las Vegas, Nevada',
  /** Hyperlocal neighborhoods served, used for schema areaServed/knowsAbout (GEO/AEO). */
  neighborhoods: [
    { name: 'The Prominence', slug: 'prominence' },
    { name: 'Desert Willows', slug: 'desert-willows' },
    { name: 'Club Aliante', slug: 'club-aliante' },
    { name: 'The Paseos', slug: 'paseos' },
    { name: 'Villages at Tule Springs', slug: 'tule-springs' },
    { name: 'Sun City Aliante', slug: 'sun-city' },
  ],
  /** Core realtor services, hyperlocal to Aliante — used for schema hasOfferCatalog (AEO). */
  services: [
    {
      name: 'Buyer Representation',
      description:
        'Free buyer agency for Aliante home purchases, including new construction builder negotiations, resale homes, and gated communities.',
    },
    {
      name: 'Listing & Seller Representation',
      description:
        'Pricing strategy, staging guidance, and marketing to sell Aliante homes fast and for top dollar.',
    },
    {
      name: 'New Construction Representation',
      description:
        'Independent buyer advocacy with Aliante builders (Lennar, D.R. Horton, Tri Pointe, Del Webb, Toll Brothers, Richmond American) at no cost to the buyer.',
    },
    {
      name: '55+ Active Adult Community Specialist',
      description:
        'Specialized guidance for Sun City Aliante and other 55+ active adult communities in North Las Vegas.',
    },
    {
      name: 'Home Valuation & Comparative Market Analysis',
      description:
        'Free, data-backed CMA reports for Aliante homeowners considering a sale.',
    },
    {
      name: 'Investment Property Analysis',
      description:
        'Rental yield, appreciation, and market timing analysis for investors targeting Aliante and North Las Vegas.',
    },
  ],
  phone: '(702) 707-7273',
  email: 'DrDuffy@AlianteHomesForSale.com',
  address: {
    streetAddress: '2590 Nature Park Drive, Suite 275',
    addressLocality: 'North Las Vegas',
    addressRegion: 'NV',
    postalCode: '89084',
    addressCountry: 'US',
  },
  geo: {
    latitude: 36.1699,
    longitude: -115.1398,
  },
  searchUrlTemplate: 'https://www.aliantehomesforsale.com/search?q={search_term_string}',

  /** Simplifying the Market (KCM) blog feed for Latest News section. English feed. */
  kcmFeedUrl:
    process.env.KCM_FEED_URL ||
    'https://www.simplifyingthemarket.com/feed?a=956758-ef2edda2f940e018328655620ea05f18',
} as const;
