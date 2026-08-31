/**
 * Single source of truth for site identity and NAP (Name, Address, Phone).
 * Used for metadata, schema (Organization, LocalBusiness, RealEstateAgent), and GEO/AEO consistency.
 * Keep in sync with Google Business Profile.
 */
export const siteConfig = {
  siteUrl: 'https://www.aliantehomesforsale.com',
  siteName: 'Aliante Las Vegas | Homes by Dr. Jan Duffy',
  defaultTitle: 'Aliante Real Estate | Homes for Sale in North Las Vegas 89084',
  defaultDescription:
    'Aliante real estate and homes for sale in North Las Vegas, NV 89084. MLS updated about every 15 minutes. Club Aliante, Sun City Aliante 55+, gated communities. Call (702) 707-7273.',
  agentName: 'Dr. Jan Duffy',
  /** Official circular portrait used for favicon, nav, footer, and agent sections. */
  agentImage: '/images/dr-jan-duffy.png',
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
      summary: 'Gated homes in Aliante with private streets and shared amenities.',
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
      summary: 'Open-access village with parks, trails, and shared recreation in Aliante.',
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
      name: 'Buyer representation in Aliante 89084',
      description:
        'Independent buyer’s agent for Club Aliante, gated villages, Sun City Aliante, and Tule Springs new construction — at no extra cost to you.',
      url: '/buyer-guide',
    },
    {
      slug: 'seller-representation',
      name: 'List your Aliante home, North Las Vegas',
      description:
        'Listing agent for ZIP 89084: pricing from neighborhood comps, MLS marketing, and offer negotiation through closing.',
      url: '/seller-checklist',
    },
    {
      slug: 'new-construction',
      name: 'New-construction buyer agency, Aliante & Tule Springs',
      description:
        'I represent you — not Lennar, D.R. Horton, or Del Webb — on incentives, options, and walk-throughs in North Las Vegas.',
      url: '/new-construction',
    },
    {
      slug: '55-plus',
      name: '55+ realtor for Sun City Aliante',
      description:
        'Del Webb 55+ inside Aliante 89084. Ardiente is a different community in 89081 — I will tell you which address is which.',
      url: '/sun-city-aliante',
    },
    {
      slug: 'home-valuation',
      name: 'Home valuation / CMA in ZIP 89084',
      description:
        'Aliante-specific comparative market analysis. I do not use a valley-wide average for Club Aliante or Sun City comps.',
      url: '/home-valuation',
    },
    {
      slug: 'investment-analysis',
      name: 'Investment analysis for Aliante rentals',
      description:
        'Buy-and-hold review for North Las Vegas 89084 addresses. I sell the property; HOA/rental management is a different company.',
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
  sameAs: ['https://www.aliantehomesforsale.com', 'https://calendly.com/drjanduffy'] as string[],
  /**
   * Live Calendly event types (verified 2026-08-31).
   * Used for inline embeds, the sitewide badge, and ScheduleAction schema.
   */
  calendly: {
    profile: 'https://calendly.com/drjanduffy',
    scriptSrc: 'https://assets.calendly.com/assets/external/widget.js',
    styleSrc: 'https://assets.calendly.com/assets/external/widget.css',
    events: {
      consultation: {
        url: 'https://calendly.com/drjanduffy/15min',
        label: '15-minute consultation',
        heading: 'Schedule a 15-minute conversation',
        description:
          'Pick a time to talk Aliante homes, new construction, or your next move with Dr. Jan Duffy.',
      },
      appointment: {
        url: 'https://calendly.com/drjanduffy/appointment',
        label: 'Appointment',
        heading: 'Book an appointment with Dr. Jan Duffy',
        description:
          'Reserve a working session for a home valuation, builder strategy, or listing plan.',
      },
      showing: {
        url: 'https://calendly.com/drjanduffy/showing',
        label: 'Private showing',
        heading: 'Schedule a private showing',
        description: 'Tour Aliante listings in person — no signup required.',
      },
      listing: {
        url: 'https://calendly.com/drjanduffy/listing-consultation',
        label: 'Listing consultation',
        heading: 'Schedule a listing consultation',
        description:
          'Talk through your Aliante property, timing, and a neighborhood-level pricing plan.',
      },
    },
  },
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
    /** GBP “Show what’s nearby” — attractions/businesses near the office */
    nearbyEmbedUrl:
      'https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1sthings+to+do+near+2590+Nature+Park+Drive+North+Las+Vegas+NV!6i13',
    nearbySearchUrl:
      'https://www.google.com/maps/search/?api=1&query=things+to+do+near+2590+Nature+Park+Drive+North+Las+Vegas+NV+89084',
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
