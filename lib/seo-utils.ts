import type { Metadata } from 'next';
import { siteConfig } from './site-config';

const SITE_URL = siteConfig.siteUrl;
const SITE_NAME = siteConfig.siteName;
const DEFAULT_TITLE = siteConfig.defaultTitle;
const DEFAULT_DESCRIPTION = siteConfig.defaultDescription;

interface SEOConfig {
  title?: string;
  description?: string;
  keywords?: string[];
  path?: string;
  image?: string;
  noindex?: boolean;
  type?: 'website' | 'article' | 'profile';
}

export function generateMetadata(config: SEOConfig = {}): Metadata {
  const {
    title = DEFAULT_TITLE,
    description = DEFAULT_DESCRIPTION,
    keywords = [],
    path = '',
    image = null,
    noindex = false,
    type = 'website',
  } = config;

  const url = `${SITE_URL}${path}`;

  const defaultKeywords = [
    'Aliante homes for sale',
    'Las Vegas real estate',
    'North Las Vegas homes',
    'Aliante real estate',
    'Nevada homes',
  ];

  const allKeywords = [...defaultKeywords, ...keywords].join(', ');

  const openGraphConfig: any = {
    title,
    description,
    url,
    siteName: SITE_NAME,
    locale: 'en_US',
    type,
  };

  if (image) {
    const fullImageUrl = image.startsWith('http') ? image : `${SITE_URL}${image}`;
    openGraphConfig.images = [
      {
        url: fullImageUrl,
        width: 1200,
        height: 630,
        alt: title,
      },
    ];
  }

  const twitterConfig: any = {
    card: image ? 'summary_large_image' : 'summary',
    title,
    description,
    creator: '@aliantehomes',
  };

  if (image) {
    const fullImageUrl = image.startsWith('http') ? image : `${SITE_URL}${image}`;
    twitterConfig.images = [fullImageUrl];
  }

  return {
    title,
    description,
    keywords: allKeywords,
    authors: [{ name: 'Aliante Real Estate' }],
    creator: 'Aliante Real Estate',
    publisher: 'Aliante Real Estate',
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
    },
    openGraph: openGraphConfig,
    twitter: twitterConfig,
    robots: {
      index: !noindex,
      follow: !noindex,
      googleBot: {
        index: !noindex,
        follow: !noindex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    other: {
      'geo.region': 'US-NV',
      'geo.placename': 'Aliante, North Las Vegas',
      'geo.position': '36.1699;-115.1398',
      ICBM: '36.1699, -115.1398',
    },
  };
}

// Neighborhood-specific SEO data
export const neighborhoodSEO = {
  prominence: {
    title: 'The Prominence Homes For Sale - Luxury Gated Community Aliante',
    description:
      "Explore luxury homes in The Prominence, Aliante's premier gated community. Large estates, premium amenities, golf course access. Expert local guidance.",
    keywords: [
      'The Prominence',
      'luxury homes Aliante',
      'gated community Las Vegas',
      'premium real estate',
    ],
  },
  'desert-willows': {
    title: 'Desert Willows Homes For Sale - Family-Friendly Neighborhood Aliante',
    description:
      'Find your perfect family home in Desert Willows, Aliante. Top-rated schools, parks, community pools. Affordable prices from $300k.',
    keywords: [
      'Desert Willows',
      'family homes Aliante',
      'good schools Las Vegas',
      'affordable homes',
    ],
  },
  'club-aliante': {
    title: 'Club Aliante Homes For Sale - Golf Course Community Las Vegas',
    description:
      'Golf course living in Club Aliante. Championship golf access, resort-style amenities, guard-gated security. Homes from $400k.',
    keywords: ['Club Aliante', 'golf course homes', 'resort living Las Vegas', 'golf community'],
  },
  paseos: {
    title: 'The Paseos Homes For Sale - First-Time Buyers Aliante',
    description:
      'Affordable homes in The Paseos, perfect for first-time buyers. Community parks, low HOA fees, excellent value. Starting at $280k.',
    keywords: ['The Paseos', 'first-time buyer homes', 'affordable Aliante', 'low HOA'],
  },
};

// Page-specific SEO data
export const pageSEO = {
  'homes-for-sale': {
    title: 'Homes For Sale in Aliante - Updated Every 15 Minutes | MLS Listings',
    description:
      '286+ verified MLS listings in Aliante, North Las Vegas. Updated every 15 minutes. Search by price, beds, baths. Expert buyer representation. Call (702) 707-7273',
    keywords: [
      'Aliante homes for sale',
      'MLS listings Aliante',
      'real-time listings',
      'verified properties',
    ],
  },
  'new-construction': {
    title: 'New Construction Homes Aliante - Builder Incentives & Floor Plans',
    description:
      'New construction homes in Aliante from Lennar, DR Horton, Tri Pointe. Special builder incentives up to $25k. Pre-construction pricing available.',
    keywords: ['new construction Aliante', 'builder incentives', 'Lennar homes', 'DR Horton'],
  },
  'home-valuation': {
    title: 'Free Home Valuation Aliante - Instant Property Value Estimate',
    description:
      'Get your free home valuation in Aliante. Instant estimate powered by MLS data. Professional CMA included. Sell your home for top dollar.',
    keywords: ['home valuation Aliante', 'property value estimate', 'CMA', 'sell my home'],
  },
  contact: {
    title: 'Contact Aliante Real Estate - Call (702) 707-7273',
    description:
      'Contact our local Aliante real estate experts. Office: 2590 Nature Park Drive, Suite 275. Open 7 days a week. Free buyer consultation.',
    keywords: ['contact Aliante realtor', 'real estate agent', 'buyer consultation'],
  },
  search: {
    title: 'Search Aliante Homes - Advanced Property Search Tool',
    description:
      'Advanced property search for Aliante homes. Filter by price, beds, baths, neighborhoods, school districts. Save searches, get instant alerts.',
    keywords: ['property search Aliante', 'home search tool', 'MLS search', 'real estate search'],
  },
};

// Generate breadcrumb structured data
export function generateBreadcrumbs(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// Generate FAQ structured data
export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

// Generate LocalBusiness structured data
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    '@id': `${SITE_URL}/#organization`,
    name: 'Aliante Las Vegas | Homes by Dr. Jan Duffy',
    image: `${SITE_URL}/logo.png`,
    url: SITE_URL,
    telephone: siteConfig.phoneTel,
    email: siteConfig.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '2590 Nature Park Drive, Suite 275',
      addressLocality: 'North Las Vegas',
      addressRegion: 'NV',
      postalCode: '89084',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '19:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday', 'Sunday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    priceRange: '$$',
    areaServed: [
      {
        '@type': 'City',
        name: 'North Las Vegas',
        '@id': 'https://www.wikidata.org/wiki/Q79346',
      },
      {
        '@type': 'Place',
        name: 'Aliante',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Real Estate Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Buyer Representation',
            description: 'Professional buyer representation for home purchases',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Seller Representation',
            description: 'Expert listing and marketing services',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Home Valuation',
            description: 'Free comparative market analysis',
          },
        },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
      bestRating: '5',
      worstRating: '1',
    },
    sameAs: [
      'https://www.facebook.com/aliantehomes',
      'https://www.instagram.com/aliantehomes',
      'https://www.linkedin.com/company/aliantehomes',
    ],
  };
}

// Generate Organization structured data
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: 'Aliante Las Vegas | Homes by Dr. Jan Duffy',
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/logo.png`,
      width: 250,
      height: 60,
    },
    description: 'Expert real estate services in Aliante, North Las Vegas since 2018',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteConfig.phoneTel,
      contactType: 'Customer Service',
      areaServed: 'US-NV',
      availableLanguage: ['English', 'Spanish'],
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '2590 Nature Park Drive, Suite 275',
      addressLocality: 'North Las Vegas',
      addressRegion: 'NV',
      postalCode: '89084',
      addressCountry: 'US',
    },
  };
}
