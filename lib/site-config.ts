/**
 * Single source of truth for site identity and NAP (Name, Address, Phone).
 * Used for metadata, schema (Organization, LocalBusiness, RealEstateAgent), and GEO/AEO consistency.
 * Keep in sync with Google Business Profile.
 */
export const siteConfig = {
  siteUrl: 'https://www.aliantehomesforsale.com',
  siteName: 'Aliante Las Vegas | Homes by Dr. Jan Duffy',
  defaultTitle: 'Aliante North Las Vegas Real Estate & Homes For Sale | MLS Listings',
  defaultDescription:
    'Browse Aliante homes for sale in North Las Vegas, NV 89084. MLS listings updated about every 15 minutes. Gated communities, Sun City Aliante 55+, new construction. Call (702) 707-7273.',
  agentName: 'Dr. Jan Duffy',
  agentLicense: 'S.0197614.LLC',
  brokerage: 'Berkshire Hathaway HomeServices Nevada Properties',
  foundedYear: 2018,
  areaName: 'Aliante',
  region: 'North Las Vegas, NV',
  areaServed: 'Aliante, North Las Vegas, Nevada',
  zipCode: '89084',
  /** Hyperlocal neighborhoods — knowledge graph Place nodes */
  neighborhoods: [
    {
      name: 'The Prominence',
      slug: 'prominence',
      summary: 'Luxury gated homes in Aliante with premium finishes and amenities.',
    },
    {
      name: 'Desert Willows',
      slug: 'desert-willows',
      summary: 'Single- and two-story homes with parks and everyday convenience.',
    },
    {
      name: 'Club Aliante',
      slug: 'club-aliante',
      summary: 'Golf-course living near the Club Aliante clubhouse and fairways.',
    },
    {
      name: 'The Paseos',
      slug: 'paseos',
      summary: 'Gated community living with resort-style amenities in Aliante.',
    },
    {
      name: 'Villages at Tule Springs',
      slug: 'tule-springs',
      summary: 'New construction near Floyd Lamb Park and Tule Springs.',
    },
    {
      name: 'Sun City Aliante',
      slug: 'sun-city',
      path: '/sun-city-aliante',
      summary: 'Del Webb 55+ active adult community with golf, clubs, and low maintenance.',
    },
  ],
  /** Core realtor services — agent graph OfferCatalog */
  services: [
    {
      slug: 'buyer-representation',
      name: 'Buyer Representation',
      description:
        'Free buyer agency for Aliante home purchases, including new construction builder negotiations, resale homes, and gated communities.',
      url: '/buyer-guide',
    },
    {
      slug: 'seller-representation',
      name: 'Listing & Seller Representation',
      description:
        'Pricing strategy, staging guidance, and marketing to sell Aliante homes fast and for top dollar.',
      url: '/seller-checklist',
    },
    {
      slug: 'new-construction',
      name: 'New Construction Representation',
      description:
        'Independent buyer advocacy with Aliante builders (Lennar, D.R. Horton, Tri Pointe, Del Webb, Toll Brothers, Richmond American) at no cost to the buyer.',
      url: '/new-construction',
    },
    {
      slug: '55-plus',
      name: '55+ Active Adult Community Specialist',
      description:
        'Specialized guidance for Sun City Aliante and other 55+ active adult communities in North Las Vegas.',
      url: '/sun-city-aliante',
    },
    {
      slug: 'home-valuation',
      name: 'Home Valuation & Comparative Market Analysis',
      description: 'Free, data-backed CMA reports for Aliante homeowners considering a sale.',
      url: '/home-valuation',
    },
    {
      slug: 'investment-analysis',
      name: 'Investment Property Analysis',
      description:
        'Rental yield, appreciation, and market timing analysis for investors targeting Aliante and North Las Vegas.',
      url: '/investment-analysis',
    },
  ],
  builders: [
    { name: 'Lennar', slug: 'lennar' },
    { name: 'D.R. Horton', slug: 'dr-horton' },
    { name: 'Tri Pointe Homes', slug: 'tri-pointe' },
    { name: 'Del Webb', slug: 'del-webb' },
    { name: 'Toll Brothers', slug: 'toll-brothers' },
    { name: 'Richmond American Homes', slug: 'richmond-american' },
  ],
  /** Content-graph hub pages for AEO/GEO internal linking */
  hubPages: [
    { name: 'Homes for Sale', path: '/homes-for-sale' },
    { name: 'Neighborhoods', path: '/neighborhoods' },
    { name: 'New Construction', path: '/new-construction' },
    { name: 'Sun City Aliante', path: '/sun-city-aliante' },
    { name: 'Market Report', path: '/market-report' },
    { name: 'Home Valuation', path: '/home-valuation' },
    { name: 'Buyer Guide', path: '/buyer-guide' },
    { name: 'About', path: '/about' },
    { name: 'Contact & Directions', path: '/contact' },
  ],
  knowsAbout: [
    'Aliante real estate',
    'North Las Vegas 89084 homes for sale',
    'New construction homes',
    'Gated community real estate',
    '55+ active adult communities',
    'Sun City Aliante',
    'Club Aliante golf homes',
    'Buyer representation',
    'Home valuation and CMA',
    'Investment property analysis',
    'Lennar homes Aliante',
    'D.R. Horton Tule Springs',
  ],
  /** Verified / brand profiles only — empty slots omitted from schema */
  sameAs: [
    'https://www.aliantehomesforsale.com',
  ] as string[],
  phone: '(702) 707-7273',
  phoneTel: '+17027077273',
  email: 'DrDuffy@AlianteHomesForSale.com',
  address: {
    streetAddress: '2590 Nature Park Drive, Suite 275',
    addressLocality: 'North Las Vegas',
    addressRegion: 'NV',
    postalCode: '89084',
    addressCountry: 'US',
  },
  geo: {
    latitude: 36.28946,
    longitude: -115.17756,
  },
  maps: {
    embedUrl:
      'https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1s2590+Nature+Park+Drive+Suite+275,+North+Las+Vegas,+NV+89084!6i15',
    directionsUrl:
      'https://www.google.com/maps/dir/?api=1&destination=2590+Nature+Park+Drive+Suite+275,+North+Las+Vegas,+NV+89084',
    placeUrl:
      'https://www.google.com/maps/search/?api=1&query=2590+Nature+Park+Drive+Suite+275,+North+Las+Vegas,+NV+89084',
  },
  hours: {
    weekday: 'Mon–Fri: 8:00 AM – 7:00 PM',
    weekend: 'Sat–Sun: 9:00 AM – 6:00 PM',
  },
  searchUrlTemplate: 'https://www.aliantehomesforsale.com/search?q={search_term_string}',
  kcmFeedUrl:
    process.env.KCM_FEED_URL ||
    'https://www.simplifyingthemarket.com/feed?a=956758-ef2edda2f940e018328655620ea05f18',
} as const;

export type SiteNeighborhood = (typeof siteConfig.neighborhoods)[number];
export type SiteService = (typeof siteConfig.services)[number];
