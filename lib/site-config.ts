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
  areaName: 'Aliante',
  region: 'North Las Vegas, NV',
  areaServed: 'Aliante, North Las Vegas, Nevada',
  phone: '(702) 707-7273',
  /** E.164 for tel: links and schema telephone */
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
    latitude: 36.1699,
    longitude: -115.1398,
  },
  searchUrlTemplate: 'https://www.aliantehomesforsale.com/search?q={search_term_string}',

  /** Simplifying the Market (KCM) blog feed for Latest News section. English feed. */
  kcmFeedUrl:
    process.env.KCM_FEED_URL ||
    'https://www.simplifyingthemarket.com/feed?a=956758-ef2edda2f940e018328655620ea05f18',
} as const;
