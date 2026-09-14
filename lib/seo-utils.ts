import type { Metadata } from 'next';
import { pageOgImage } from './content/site-images';
import { absoluteMediaUrl } from './media';
import { siteConfig } from './site-config';

const SITE_URL = siteConfig.siteUrl;
const SITE_NAME = siteConfig.siteName;
const DEFAULT_TITLE = siteConfig.defaultTitle;
const DEFAULT_DESCRIPTION = siteConfig.defaultDescription;

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string;
  image?: string;
  noindex?: boolean;
};

function absoluteUrl(path: string): string {
  if (path === '/' || path === '') return SITE_URL;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

function absoluteImage(image: string): string {
  return absoluteMediaUrl(image, SITE_URL);
}

/**
 * Per-route metadata with canonical, Open Graph, and Twitter cards.
 * Based on Next.js 15 App Router metadata merging — set this on every page
 * so inner routes do not inherit the homepage canonical or default OG title.
 * Default share image is the H1 photo for that path (homepage uses /og-image.jpg).
 */
export function pageMetadata({
  title,
  description,
  path,
  keywords,
  image,
  noindex = false,
}: PageMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteImage(image ?? pageOgImage(path).src);

  return {
    title,
    description,
    ...(keywords ? { keywords } : {}),
    authors: [{ name: siteConfig.agentName }],
    creator: siteConfig.agentName,
    publisher: siteConfig.brokerage,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
    robots: noindex
      ? { index: false, follow: true }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
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

interface SEOConfig {
  title?: string;
  description?: string;
  keywords?: string[];
  path?: string;
  image?: string;
  noindex?: boolean;
  type?: 'website' | 'article' | 'profile';
}

/** @deprecated Prefer pageMetadata() for App Router pages. */
export function generateMetadata(config: SEOConfig = {}): Metadata {
  const title = config.title ?? DEFAULT_TITLE;
  const description = config.description ?? DEFAULT_DESCRIPTION;
  const path = config.path || '/';
  const keywords = [...(config.keywords ?? [])].join(', ');

  const meta: PageMetadataInput = {
    title,
    description,
    path,
    image: config.image ?? pageOgImage(path).src,
  };
  if (keywords) meta.keywords = keywords;
  if (config.noindex) meta.noindex = true;
  return pageMetadata(meta);
}

// Neighborhood-specific SEO data
export const neighborhoodSEO = {
  prominence: {
    title: 'The Prominence Aliante | Gated Homes North Las Vegas 89084',
    description:
      'Gated village in The Prominence, Aliante, North Las Vegas 89084. Confirm live MLS listings. Call (702) 707-7273.',
    keywords: [
      'The Prominence',
      'gated homes Aliante',
      'gated community North Las Vegas',
      'Aliante 89084',
    ],
  },
  'desert-willows': {
    title: 'Desert Willows Homes For Sale - Aliante, North Las Vegas 89084',
    description:
      'Homes in Desert Willows, Aliante. Parks, community pools, and named CCSD campuses nearby. Confirm live MLS prices. Call (702) 707-7273.',
    keywords: [
      'Desert Willows',
      'Aliante homes North Las Vegas',
      '89084 homes for sale',
      'open-access Aliante village',
    ],
  },
  'club-aliante': {
    title: 'Club Aliante Homes For Sale - Golf Course Community Las Vegas',
    description:
      'Golf-course lots in Club Aliante, North Las Vegas 89084. Confirm live MLS prices. Call (702) 707-7273.',
    keywords: [
      'Club Aliante',
      'golf course homes Aliante',
      'Aliante Golf Club',
      'North Las Vegas 89084',
    ],
  },
  paseos: {
    title: 'The Paseos Homes For Sale - Aliante, North Las Vegas 89084',
    description:
      'The Paseos is an open-access village in Aliante, North Las Vegas 89084. Confirm live MLS listings. Call (702) 707-7273.',
    keywords: ['The Paseos', 'open-access Aliante', 'Aliante homes North Las Vegas', '89084'],
  },
};

// Page-specific SEO data
export const pageSEO = {
  'homes-for-sale': {
    title: 'Homes For Sale in Aliante - Updated Every 15 Minutes | MLS Listings',
    description:
      'MLS listings in Aliante, North Las Vegas 89084. Updated about every 15 minutes. Search by price, beds, baths. Expert buyer representation. Call (702) 707-7273',
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
      'New construction in Aliante and nearby Tule Springs. Lennar, D.R. Horton, Del Webb. Confirm live incentives. Call (702) 707-7273.',
    keywords: ['new construction Aliante', 'builder incentives', 'Lennar homes', 'DR Horton'],
  },
  'home-valuation': {
    title: 'What’s My Aliante Home Worth? | CMA in North Las Vegas 89084',
    description:
      'Comparative market analysis for Aliante, North Las Vegas 89084. Neighborhood comps — not a valley average. Call (702) 707-7273.',
    keywords: ['home valuation Aliante', 'property value estimate', 'CMA', 'sell my home'],
  },
  contact: {
    title: 'Contact Aliante Real Estate - Call (702) 707-7273',
    description:
      'Contact Dr. Jan Duffy in Aliante, North Las Vegas 89084. Office: 2590 Nature Park Drive, Suite 275. Call (702) 707-7273.',
    keywords: ['contact Aliante realtor', 'real estate agent', 'buyer consultation'],
  },
  search: {
    title: 'Search Aliante Homes - Advanced Property Search Tool',
    description:
      'Search Aliante homes in North Las Vegas 89084. Filter by price, beds, baths, and village. Call (702) 707-7273.',
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
    image: absoluteMediaUrl('/og-image.jpg', SITE_URL),
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
            description: 'Comparative market analysis using village comps',
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
      url: absoluteMediaUrl('/og-image.jpg', SITE_URL),
      width: 1200,
      height: 630,
    },
    description: 'Expert real estate services in Aliante, North Las Vegas since 2018',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteConfig.phoneTel,
      contactType: 'Customer Service',
      areaServed: 'US-NV',
      availableLanguage: ['English'],
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
