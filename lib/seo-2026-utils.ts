/**
 * SEO/GEO/AEO Utilities for 2026 Best Practices
 *
 * Based on latest search engine optimization guidelines:
 * - Search Everywhere Optimization (beyond just Google)
 * - Answer Engine Optimization (AEO) for AI citations
 * - Geographic Engine Optimization (GEO) for local search
 * - Schema.org v30.0 structured data
 * - E-E-A-T signals (Experience, Expertise, Authoritativeness, Trustworthiness)
 */

export interface GeoLocation {
  name: string;
  latitude: number;
  longitude: number;
  radius?: number;
  neighborhoods?: string[];
  landmarks?: string[];
}

export interface ContentFreshness {
  datePublished: string;
  dateModified: string;
  updateFrequency?: 'hourly' | 'daily' | 'weekly' | 'monthly';
}

export const ALIANTE_GEO_LOCATIONS: Record<string, GeoLocation> = {
  aliante: {
    name: 'Aliante, North Las Vegas',
    latitude: 36.2699,
    longitude: -115.1898,
    radius: 5,
    neighborhoods: [
      'The Prominence',
      'Desert Willows',
      'Club Aliante',
      'The Paseos',
      'Sun City Aliante',
      'Nature Park',
    ],
    landmarks: [
      'Aliante Casino',
      'Nature Park',
      'Club Aliante Golf Course',
      'Aliante Parkway',
      'Centennial Hills Hospital',
    ],
  },
  prominence: {
    name: 'The Prominence',
    latitude: 36.2812,
    longitude: -115.1923,
    neighborhoods: ['The Prominence at Aliante'],
  },
  sunCity: {
    name: 'Sun City Aliante',
    latitude: 36.2745,
    longitude: -115.2134,
    neighborhoods: ['Sun City Aliante 55+'],
  },
  clubAliante: {
    name: 'Club Aliante',
    latitude: 36.2658,
    longitude: -115.1756,
    landmarks: ['Club Aliante Golf Course'],
  },
  desertWillows: {
    name: 'Desert Willows',
    latitude: 36.2689,
    longitude: -115.1945,
  },
};

export function generateHyperlocalKeywords(location: string, propertyType?: string): string[] {
  const geoData = ALIANTE_GEO_LOCATIONS[location];
  if (!geoData) return [];

  const keywords: string[] = [
    `homes near ${geoData.name}`,
    `real estate near ${geoData.name}`,
    `${geoData.name} homes for sale`,
  ];

  if (geoData.landmarks) {
    geoData.landmarks.forEach(landmark => {
      keywords.push(`homes near ${landmark}`);
      keywords.push(`properties near ${landmark}`);
    });
  }

  if (geoData.neighborhoods) {
    geoData.neighborhoods.forEach(neighborhood => {
      keywords.push(`${neighborhood} homes`);
      keywords.push(`homes in ${neighborhood}`);
    });
  }

  if (propertyType) {
    keywords.push(`${propertyType} in ${geoData.name}`);
    keywords.push(`${propertyType} near ${geoData.name}`);
  }

  keywords.push(`89084 homes for sale`);
  keywords.push(`North Las Vegas real estate`);

  return keywords;
}

export function generateAEOStructuredAnswer(
  question: string,
  answer: string,
  lastUpdated?: Date
): {
  '@context': string;
  '@type': string;
  name: string;
  acceptedAnswer: {
    '@type': string;
    text: string;
    dateCreated: string;
    upvoteCount?: number;
  };
} {
  const updateDate = lastUpdated || new Date();

  return {
    '@context': 'https://schema.org',
    '@type': 'Question',
    name: question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: answer,
      dateCreated: updateDate.toISOString(),
      upvoteCount: 1,
    },
  };
}

export function generateFreshnessSignals(): ContentFreshness {
  const now = new Date();
  const published = new Date('2018-01-01');

  return {
    datePublished: published.toISOString(),
    dateModified: now.toISOString(),
    updateFrequency: 'daily',
  };
}

export function generateLocalBusinessSchema(options?: {
  includeReviews?: boolean;
  includeOpeningHours?: boolean;
}): Record<string, unknown> {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    '@id': 'https://www.aliantehomesforsale.com/#organization',
    name: 'Aliante Las Vegas | Homes by Dr. Jan Duffy',
    url: 'https://www.aliantehomesforsale.com',
    logo: 'https://www.aliantehomesforsale.com/logo.png',
    telephone: '+17027077273',
    email: 'DrDuffy@AlianteHomesForSale.com',
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
      latitude: 36.1699,
      longitude: -115.1398,
    },
    areaServed: Object.values(ALIANTE_GEO_LOCATIONS).map(loc => ({
      '@type': 'City',
      name: loc.name,
      geo: {
        '@type': 'GeoCoordinates',
        latitude: loc.latitude,
        longitude: loc.longitude,
      },
    })),
  };

  if (options?.includeOpeningHours) {
    schema.openingHoursSpecification = [
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
    ];
  }

  if (options?.includeReviews) {
    schema.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
      bestRating: '5',
      worstRating: '1',
    };
  }

  return schema;
}

export function generateBreadcrumbSchema(
  breadcrumbs: Array<{ name: string; url: string }>
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://www.aliantehomesforsale.com${item.url}`,
    })),
  };
}

export function sanitizeForAI(content: string): string {
  return content
    .replace(/<[^>]*>/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

export function generateMetaDescription(
  content: string,
  maxLength = 155
): string {
  const sanitized = sanitizeForAI(content);
  if (sanitized.length <= maxLength) return sanitized;

  return `${sanitized.substring(0, maxLength - 3)}...`;
}

export const E_E_A_T_SIGNALS = {
  experience: {
    yearsInBusiness: 8,
    transactionsCompleted: 500,
    specializations: [
      'New Construction',
      'Gated Communities',
      'Luxury Real Estate',
      'Builder Negotiations',
      'Active Adult Communities',
    ],
  },
  expertise: {
    certifications: ['D.R. Horton Premiere Agent #1'],
    areasCovered: Object.keys(ALIANTE_GEO_LOCATIONS),
    marketKnowledge: 'Aliante & North Las Vegas Real Estate Market',
  },
  authoritativeness: {
    rating: 4.9,
    reviews: 127,
    mediaAppearances: [],
    industryRecognition: ['D.R. Horton Premiere Agent'],
  },
  trustworthiness: {
    verifiedReviews: true,
    businessLicense: 'Nevada Real Estate License',
    contactVerification: {
      phone: '+17027077273',
      email: 'DrDuffy@AlianteHomesForSale.com',
      office: '2590 Nature Park Drive, Suite 275, North Las Vegas, NV 89084',
    },
  },
};
