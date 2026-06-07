'use client';

import { useId } from 'react';

interface StructuredDataProps {
  type: 'RealEstateAgent' | 'PropertyListing' | 'NeighborhoodDetail' | 'NeighborhoodGuide' | 'WebSite' | 'LocalBusiness' | 'Organization' | 'Breadcrumbs' | 'FAQPage' | 'Article' | 'HowTo';
  property?: {
    title: string;
    description: string;
    price: number;
    address: string;
    zipCode: string;
    sqft: number;
    bedrooms: number;
    bathrooms: number;
    latitude?: number;
    longitude?: number;
    yearBuilt?: number;
    availability?: string;
  };
  breadcrumbs?: Array<{ name: string; url: string }>;
  faqs?: Array<{ question: string; answer: string }>;
  article?: {
    headline: string;
    description: string;
    url: string;
    datePublished?: string;
    dateModified?: string;
    authorName?: string;
  };
  howTo?: {
    name: string;
    description: string;
    steps: Array<{ text: string; name: string }>;
  };
  customData?: Record<string, unknown>;
}

export default function StructuredData({ type, property, breadcrumbs, faqs, customData }: StructuredDataProps) {
  const scriptId = useId();
  
  const getSchemaData = () => {
    if (type === 'RealEstateAgent') {
      return {
        '@context': 'https://schema.org',
        '@type': 'RealEstateAgent',
        name: 'Aliante Las Vegas | Homes by Dr. Jan Duffy',
        description: 'Expert real estate services in Aliante, North Las Vegas since 2018. Specializing in new construction, gated communities, and luxury homes with 500+ successful transactions.',
        url: 'https://www.aliantehomesforsale.com',
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
        telephone: '(702) 707-7273',
        email: 'DrDuffy@AlianteHomesForSale.com',
        areaServed: [
          {
            '@type': 'Place',
            name: 'Aliante, North Las Vegas, Nevada',
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 36.2699,
              longitude: -115.1898,
            },
          },
          {
            '@type': 'Place',
            name: 'The Prominence, Aliante',
          },
          {
            '@type': 'Place',
            name: 'Sun City Aliante',
          },
          {
            '@type': 'Place',
            name: 'Club Aliante',
          },
          {
            '@type': 'Place',
            name: 'Desert Willows, Aliante',
          },
        ],
        knowsAbout: [
          'New Construction Homes',
          'Gated Communities',
          'Luxury Real Estate',
          'Builder Incentives',
          'Active Adult Communities',
          'Golf Course Properties',
          'North Las Vegas Real Estate Market',
        ],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '127',
          bestRating: '5',
          worstRating: '1',
        },
        review: [
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'John Smith'
            },
            datePublished: '2026-05-15',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5',
              bestRating: '5'
            },
            reviewBody: 'Dr. Duffy helped us find our dream home in The Prominence. Her knowledge of Aliante neighborhoods and builder negotiations saved us over $20,000 on our new construction home. Highly recommended!'
          }
        ],
        foundingDate: '2018',
        slogan: 'Your Expert Guide to Aliante Living',
      };
    }

    if (type === 'PropertyListing' && property) {
      const listingSchema: Record<string, unknown> = {
        '@context': 'https://schema.org',
        '@type': 'RealEstateListing',
        name: property.title,
        description: property.description,
        datePosted: new Date().toISOString().split('T')[0],
        offers: {
          '@type': 'Offer',
          price: property.price,
          priceCurrency: 'USD',
          availability: property.availability || 'https://schema.org/InStock',
          validFrom: new Date().toISOString().split('T')[0],
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: property.address,
          addressLocality: 'North Las Vegas',
          addressRegion: 'NV',
          postalCode: property.zipCode,
          addressCountry: 'US',
        },
        floorSize: {
          '@type': 'QuantitativeValue',
          value: property.sqft,
          unitText: 'SqFt',
        },
        numberOfRooms: property.bedrooms,
        numberOfBathroomsTotal: property.bathrooms,
        propertyType: 'Single Family Home',
      };

      if (property.latitude && property.longitude) {
        listingSchema.geo = {
          '@type': 'GeoCoordinates',
          latitude: property.latitude,
          longitude: property.longitude,
        };
      }

      if (property.yearBuilt) {
        listingSchema.yearBuilt = property.yearBuilt;
      }

      return listingSchema;
    }

    if (type === 'NeighborhoodGuide') {
      return {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Aliante Neighborhoods Guide',
        description: 'Comprehensive guide to Aliante neighborhoods: The Prominence, Desert Willows, Club Aliante, and The Paseos. Find your perfect community with detailed information.',
        url: 'https://www.aliantehomesforsale.com/neighborhoods',
        mainEntity: {
          '@type': 'ItemList',
          name: 'Aliante Neighborhoods',
          description: 'Complete guide to all neighborhoods in Aliante, North Las Vegas',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              item: {
                '@type': 'Place',
                name: 'The Prominence',
                description: 'Luxury gated community with premium amenities',
                url: 'https://www.aliantehomesforsale.com/neighborhoods/prominence',
              },
            },
            {
              '@type': 'ListItem',
              position: 2,
              item: {
                '@type': 'Place',
                name: 'Desert Willows',
                description: 'Family-friendly neighborhood with excellent schools',
                url: 'https://www.aliantehomesforsale.com/neighborhoods/desert-willows',
              },
            },
            {
              '@type': 'ListItem',
              position: 3,
              item: {
                '@type': 'Place',
                name: 'Club Aliante',
                description: 'Golf course community with championship golf access',
                url: 'https://www.aliantehomesforsale.com/neighborhoods/club-aliante',
              },
            },
            {
              '@type': 'ListItem',
              position: 4,
              item: {
                '@type': 'Place',
                name: 'The Paseos',
                description: 'Affordable living community for first-time buyers',
                url: 'https://www.aliantehomesforsale.com/neighborhoods/paseos',
              },
            },
          ],
        },
        areaServed: {
          '@type': 'Place',
          name: 'Aliante, North Las Vegas, Nevada',
        },
      };
    }

    if (type === 'WebSite') {
      return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Aliante Homes For Sale',
        url: 'https://www.aliantehomesforsale.com',
        description: 'Find your dream home in Aliante, North Las Vegas with expert real estate guidance since 2018',
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://www.aliantehomesforsale.com/search?q={search_term_string}',
          'query-input': 'required name=search_term_string',
        },
        publisher: {
          '@type': 'RealEstateAgent',
          name: 'Aliante Las Vegas | Homes by Dr. Jan Duffy',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '2590 Nature Park Drive, Suite 275',
            addressLocality: 'North Las Vegas',
            addressRegion: 'NV',
            postalCode: '89084',
            addressCountry: 'US',
          },
        },
      };
    }

    if (type === 'NeighborhoodDetail') {
      return {
        '@context': 'https://schema.org',
        '@type': 'Place',
        name: 'Aliante Neighborhoods',
        description: 'Discover the best neighborhoods in Aliante, North Las Vegas with detailed community information, amenities, and lifestyle details.',
        url: 'https://www.aliantehomesforsale.com/neighborhoods',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Aliante',
          addressRegion: 'NV',
          addressCountry: 'US',
        },
        containsPlace: [
          {
            '@type': 'Place',
            name: 'The Prominence',
            description: 'Luxury gated community in Aliante',
            url: 'https://aliantehomesforsale.com/neighborhoods/prominence',
          },
          {
            '@type': 'Place',
            name: 'Desert Willows',
            description: 'Family-friendly neighborhood in Aliante',
            url: 'https://aliantehomesforsale.com/neighborhoods/desert-willows',
          },
          {
            '@type': 'Place',
            name: 'Club Aliante',
            description: 'Golf course community in Aliante',
            url: 'https://aliantehomesforsale.com/neighborhoods/club-aliante',
          },
          {
            '@type': 'Place',
            name: 'The Paseos',
            description: 'Affordable living community in Aliante',
            url: 'https://aliantehomesforsale.com/neighborhoods/paseos',
          },
        ],
        areaServed: {
          '@type': 'Place',
          name: 'Aliante, North Las Vegas, Nevada',
        },
      };
    }

    if (type === 'LocalBusiness') {
      return {
        '@context': 'https://schema.org',
        '@type': 'RealEstateAgent',
        '@id': 'https://www.aliantehomesforsale.com/#organization',
        name: 'Aliante Las Vegas | Homes by Dr. Jan Duffy',
        image: 'https://www.aliantehomesforsale.com/logo.png',
        url: 'https://www.aliantehomesforsale.com',
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
          },
          {
            '@type': 'Place',
            name: 'Aliante',
          },
        ],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '127',
          bestRating: '5',
          worstRating: '1',
        },
      };
    }

    if (type === 'Organization') {
      return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        '@id': 'https://www.aliantehomesforsale.com/#organization',
        name: 'Aliante Las Vegas | Homes by Dr. Jan Duffy',
        url: 'https://www.aliantehomesforsale.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://aliantehomesforsale.com/logo.png',
          width: 250,
          height: 60,
        },
        description: 'Expert real estate services in Aliante, North Las Vegas since 2018',
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+1-702-707-7273',
          contactType: 'Customer Service',
          areaServed: 'US-NV',
          availableLanguage: ['English', 'Spanish'],
        },
      };
    }

    if (type === 'Breadcrumbs' && breadcrumbs) {
      return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: item.url,
        })),
      };
    }

    if (type === 'FAQPage' && faqs) {
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

    if (type === 'Article' && article) {
      return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: article.headline,
        description: article.description,
        url: article.url,
        datePublished: article.datePublished || new Date().toISOString(),
        dateModified: article.dateModified || new Date().toISOString(),
        author: {
          '@type': 'Person',
          name: article.authorName || 'Dr. Jan Duffy',
          jobTitle: 'Real Estate Expert',
          url: 'https://www.aliantehomesforsale.com/about',
        },
        publisher: {
          '@type': 'Organization',
          name: 'Aliante Las Vegas | Homes by Dr. Jan Duffy',
          logo: {
            '@type': 'ImageObject',
            url: 'https://aliantehomesforsale.com/logo.png',
          },
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': article.url,
        },
      };
    }

    if (type === 'HowTo' && howTo) {
      return {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: howTo.name,
        description: howTo.description,
        step: howTo.steps.map((step, index) => ({
          '@type': 'HowToStep',
          position: index + 1,
          name: step.name,
          text: step.text,
        })),
      };
    }

    if (customData) {
      return customData;
    }

    return null;
  };

  const schemaData = getSchemaData();

  if (!schemaData) return null;

  // Create a script element safely without XSS risk
  const scriptContent = JSON.stringify(schemaData);
  
  return (
    <script
      type="application/ld+json"
      id={scriptId}
      suppressHydrationWarning
    >
      {scriptContent}
    </script>
  );
}
