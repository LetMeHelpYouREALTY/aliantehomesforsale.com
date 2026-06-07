'use client';

import { useId } from 'react';

interface StructuredDataProps {
  type: 'RealEstateAgent' | 'PropertyListing' | 'NeighborhoodDetail' | 'NeighborhoodGuide' | 'WebSite' | 'LocalBusiness' | 'Organization' | 'Breadcrumbs' | 'FAQPage';
  property?: {
    title: string;
    description: string;
    price: number;
    address: string;
    zipCode: string;
    sqft: number;
    bedrooms: number;
    bathrooms: number;
  };
  breadcrumbs?: Array<{ name: string; url: string }>;
  faqs?: Array<{ question: string; answer: string }>;
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
        description: 'Expert real estate services in Aliante, North Las Vegas',
        url: 'https://www.aliantehomesforsale.com',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '2590 Nature Park Drive, Suite 275',
          addressLocality: 'North Las Vegas',
          addressRegion: 'NV',
          postalCode: '89084',
          addressCountry: 'US',
        },
        telephone: '(702) 707-7273',
        email: 'DrDuffy@AlianteHomesForSale.com',
        areaServed: {
          '@type': 'Place',
          name: 'Aliante, North Las Vegas, Nevada',
        },
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
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5',
              bestRating: '5'
            },
            reviewBody: 'Dr. Duffy helped us find our dream home in The Prominence. Her knowledge of Aliante neighborhoods and builder negotiations saved us over $20,000 on our new construction home. Highly recommended!'
          }
        ],
      };
    }

    if (type === 'PropertyListing' && property) {
      return {
        '@context': 'https://schema.org',
        '@type': 'RealEstateListing',
        name: property.title,
        description: property.description,
        price: property.price,
        priceCurrency: 'USD',
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
      };
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
        alternateName: 'Dr. Jan Duffy Real Estate',
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
            '@id': 'https://www.wikidata.org/wiki/Q79373',
          },
          {
            '@type': 'Place',
            name: 'Aliante',
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 36.1699,
              longitude: -115.1398,
            },
          },
          {
            '@type': 'State',
            name: 'Nevada',
            '@id': 'https://www.wikidata.org/wiki/Q1227',
          },
        ],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '127',
          bestRating: '5',
          worstRating: '1',
        },
        knowsAbout: [
          'Real Estate',
          'Aliante North Las Vegas',
          'New Construction Homes',
          'Gated Communities',
          'Sun City Aliante 55+ Community',
          'Golf Course Homes',
          'Luxury Real Estate',
          'First Time Home Buyers',
        ],
        slogan: 'Expert Aliante Real Estate Guidance Since 2018 - 500+ Successful Transactions',
        foundingDate: '2018',
        founder: {
          '@type': 'Person',
          name: 'Dr. Jan Duffy',
          jobTitle: 'Real Estate Agent',
          alumniOf: 'University of Nevada, Las Vegas',
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
        description: 'Expert real estate services in Aliante, North Las Vegas since 2018. Specializing in new construction, gated communities, and Sun City Aliante 55+ active adult homes with over 500 successful transactions and a 4.9/5 client satisfaction rating.',
        foundingDate: '2018-01-01',
        foundingLocation: {
          '@type': 'Place',
          name: 'North Las Vegas, Nevada',
        },
        slogan: 'Your Trusted Aliante Real Estate Expert - 286+ Active MLS Listings Updated Every 15 Minutes',
        knowsAbout: [
          'Real Estate Sales',
          'New Construction Consulting',
          'Gated Community Expertise',
          'Active Adult 55+ Communities',
          'Luxury Home Sales',
          'First-Time Homebuyer Programs',
          'Investment Property Analysis',
          'Builder Incentive Negotiation',
        ],
        areaServed: {
          '@type': 'GeoCircle',
          geoMidpoint: {
            '@type': 'GeoCoordinates',
            latitude: 36.1699,
            longitude: -115.1398,
          },
          geoRadius: '10 mi',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+1-702-707-7273',
          contactType: 'Customer Service',
          email: 'DrDuffy@AlianteHomesForSale.com',
          areaServed: 'US-NV',
          availableLanguage: ['English', 'Spanish'],
          contactOption: 'TollFree',
          hoursAvailable: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            opens: '08:00',
            closes: '19:00',
          },
        },
        sameAs: [
          'https://www.facebook.com/AlianteHomesForSale',
          'https://www.linkedin.com/in/drjanduffy',
          'https://www.instagram.com/aliantehomes',
        ],
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
