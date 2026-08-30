import type { Metadata } from 'next';
import { siteConfig } from './site-config';

const SITE_URL = siteConfig.siteUrl;
const SITE_NAME = siteConfig.siteName;
const DEFAULT_TITLE = siteConfig.defaultTitle;
const DEFAULT_DESCRIPTION = siteConfig.defaultDescription;

interface SEOConfig {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noindex?: boolean;
  type?: 'website' | 'article' | 'profile';
}

export function generateMetadata(config: SEOConfig = {}): Metadata {
  const {
    title = DEFAULT_TITLE,
    description = DEFAULT_DESCRIPTION,
    path = '',
    image = null,
    noindex = false,
    type = 'website',
  } = config;

  const url = `${SITE_URL}${path}`;

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
      'geo.placename': `${siteConfig.areaName}, ${siteConfig.region}`,
      'geo.position': `${siteConfig.geo.latitude};${siteConfig.geo.longitude}`,
      ICBM: `${siteConfig.geo.latitude}, ${siteConfig.geo.longitude}`,
    },
  };
}

// Neighborhood-specific SEO data
export const neighborhoodSEO = {
  prominence: {
    title: 'The Prominence Homes For Sale - Luxury Gated Community Aliante',
    description:
      "Explore luxury homes in The Prominence, Aliante's gated community. Large lots, premium amenities, and golf-course access. Confirm HOA and inventory on live MLS.",
  },
  'desert-willows': {
    title: 'Desert Willows Aliante Homes For Sale',
    description:
      'Find homes in Desert Willows, Aliante. Parks, community pools, and a mix of single- and two-story floor plans in North Las Vegas 89084.',
  },
  'club-aliante': {
    title: 'Club Aliante Homes For Sale - Golf Course Community Las Vegas',
    description:
      'Golf course living in Club Aliante. Championship golf access, resort-style amenities, and gated streets. Confirm membership fees separately from HOA.',
  },
  paseos: {
    title: 'The Paseos Homes For Sale - Aliante North Las Vegas',
    description:
      'Gated homes in The Paseos, Aliante. Community parks, HOA amenities, and a range of floor plans. Browse live MLS for current list prices.',
  },
};

// Page-specific SEO data
export const pageSEO = {
  'homes-for-sale': {
    title: 'Homes For Sale in Aliante - Updated Every 15 Minutes | MLS Listings',
    description:
      'Browse live MLS listings in Aliante, North Las Vegas 89084. Updated about every 15 minutes. Search by price, beds, and baths. Call (702) 707-7273.',
  },
  'new-construction': {
    title: 'New Construction Homes Aliante - Builder Incentives & Floor Plans',
    description:
      'New construction in Aliante from Lennar, D.R. Horton, and Tri Pointe with independent buyer representation. Ask for this month’s incentive sheet.',
  },
  'home-valuation': {
    title: 'Free Home Valuation Aliante - Instant Property Value Estimate',
    description:
      'Request a comparative market analysis for an Aliante, North Las Vegas 89084 property. Not an appraisal.',
  },
  contact: {
    title: 'Contact Aliante Real Estate - Call (702) 707-7273',
    description:
      'Contact Dr. Jan Duffy. Office: 2590 Nature Park Drive, Suite 275, North Las Vegas, NV 89084. Call (702) 707-7273.',
  },
  search: {
    title: 'Search Aliante Homes - Advanced Property Search Tool',
    description:
      'Advanced MLS search for Aliante homes. Filter by price, beds, baths, and neighborhood. Save searches and get listing alerts.',
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
