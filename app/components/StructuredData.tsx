'use client';

import { useId } from 'react';

interface StructuredDataProps {
  type: 'RealEstateAgent' | 'PropertyListing' | 'NeighborhoodDetail' | 'NeighborhoodGuide' | 'WebSite' | 'LocalBusiness' | 'Organization' | 'Breadcrumbs' | 'FAQPage' | 'Person' | 'Article' | 'HowTo';
  property?: {
    title: string;
    description: string;
    price: number;
    address: string;
    zipCode: string;
    sqft: number;
    bedrooms: number;
    bathrooms: number;
    datePosted?: string;
    availability?: 'InStock' | 'OutOfStock' | 'PreOrder';
    mlsNumber?: string;
    yearBuilt?: number;
    propertyType?: string;
  };
  breadcrumbs?: Array<{ name: string; url: string }>;
  faqs?: Array<{ question: string; answer: string }>;
  article?: {
    title: string;
    description: string;
    datePublished: string;
    dateModified: string;
    url: string;
  };
  howTo?: {
    name: string;
    description: string;
    steps: Array<{ name: string; text: string }>;
  };
  customData?: Record<string, unknown>;
}

export default function StructuredData({ type, property, breadcrumbs, faqs, article, howTo, customData }: StructuredDataProps) {
  const scriptId = useId();
  
  const getSchemaData = () => {
    if (type === 'RealEstateAgent') {
      return {
        '@context': 'https://schema.org',
        '@type': 'RealEstateAgent',
        '@id': 'https://www.aliantehomesforsale.com/#realestateagent',
        name: 'Aliante Las Vegas | Homes by Dr. Jan Duffy',
        description: 'Expert real estate services in Aliante, North Las Vegas since 2018. Specializing in luxury gated communities, 55+ active adult, and new construction homes.',
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
        areaServed: [
          {
            '@type': 'City',
            name: 'North Las Vegas',
            sameAs: 'https://en.wikipedia.org/wiki/North_Las_Vegas,_Nevada'
          },
          {
            '@type': 'Place',
            name: 'Aliante',
            containedInPlace: {
              '@type': 'City',
              name: 'North Las Vegas',
              addressRegion: 'NV'
            }
          },
          {
            '@type': 'Place',
            name: 'The Prominence',
            description: 'Luxury gated community in Aliante'
          },
          {
            '@type': 'Place',
            name: 'Sun City Aliante',
            description: '55+ active adult community'
          },
          {
            '@type': 'Place',
            name: 'Club Aliante',
            description: 'Golf course community'
          },
          {
            '@type': 'Place',
            name: 'Desert Willows',
            description: 'Family-friendly neighborhood'
          }
        ],
        serviceArea: {
          '@type': 'GeoCircle',
          geoMidpoint: {
            '@type': 'GeoCoordinates',
            latitude: 36.1699,
            longitude: -115.1398
          },
          geoRadius: '15 mi'
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
            reviewBody: 'Dr. Duffy helped us find our dream home in The Prominence. Her knowledge of Aliante neighborhoods and builder negotiations saved us over $20,000 on our new construction home. Highly recommended!',
            datePublished: '2026-05-15'
          }
        ],
        knowsAbout: [
          'Luxury Real Estate',
          'New Construction Homes',
          '55+ Active Adult Communities',
          'Gated Communities',
          'Golf Course Properties',
          'Builder Negotiations',
          'MLS Property Search',
          'Home Valuation'
        ],
        slogan: '286+ MLS listings updated every 15 minutes'
      };
    }

    if (type === 'PropertyListing' && property) {
      return {
        '@context': 'https://schema.org',
        '@type': 'RealEstateListing',
        '@id': `https://www.aliantehomesforsale.com/listing/${property.mlsNumber || 'property'}`,
        name: property.title,
        description: property.description,
        url: `https://www.aliantehomesforsale.com/listing/${property.mlsNumber || 'property'}`,
        datePosted: property.datePosted || new Date().toISOString(),
        validThrough: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString(),
        offers: {
          '@type': 'Offer',
          price: property.price,
          priceCurrency: 'USD',
          availability: property.availability || 'https://schema.org/InStock',
          validFrom: property.datePosted || new Date().toISOString(),
          seller: {
            '@type': 'RealEstateAgent',
            name: 'Aliante Las Vegas | Homes by Dr. Jan Duffy',
            telephone: '(702) 707-7273'
          }
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: property.address,
          addressLocality: 'North Las Vegas',
          addressRegion: 'NV',
          postalCode: property.zipCode,
          addressCountry: 'US',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 36.1699,
          longitude: -115.1398
        },
        floorSize: {
          '@type': 'QuantitativeValue',
          value: property.sqft,
          unitCode: 'FTK',
          unitText: 'sq ft',
        },
        numberOfRooms: property.bedrooms,
        numberOfBedrooms: property.bedrooms,
        numberOfBathroomsTotal: property.bathrooms,
        propertyType: property.propertyType || 'Single Family Residence',
        yearBuilt: property.yearBuilt,
        additionalProperty: [
          {
            '@type': 'PropertyValue',
            name: 'MLS Number',
            value: property.mlsNumber || 'Contact for MLS#'
          },
          {
            '@type': 'PropertyValue',
            name: 'Data Source',
            value: 'Greater Las Vegas MLS - Updated every 15 minutes'
          }
        ]
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
        datePublished: new Date().toISOString(),
        dateModified: new Date().toISOString(),
      };
    }

    if (type === 'Person') {
      return {
        '@context': 'https://schema.org',
        '@type': 'Person',
        '@id': 'https://www.aliantehomesforsale.com/#person',
        name: 'Dr. Jan Duffy',
        jobTitle: 'Real Estate Agent & Aliante Specialist',
        description: 'Licensed real estate professional specializing in Aliante, North Las Vegas since 2018. Expert in luxury gated communities, 55+ active adult homes, and new construction properties.',
        url: 'https://www.aliantehomesforsale.com/about',
        email: 'DrDuffy@AlianteHomesForSale.com',
        telephone: '(702) 707-7273',
        image: 'https://www.aliantehomesforsale.com/dr-jan-duffy.jpg',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '2590 Nature Park Drive, Suite 275',
          addressLocality: 'North Las Vegas',
          addressRegion: 'NV',
          postalCode: '89084',
          addressCountry: 'US'
        },
        knowsAbout: [
          'Real Estate',
          'Luxury Homes',
          'New Construction',
          'Gated Communities',
          '55+ Active Adult Communities',
          'Golf Course Properties',
          'Property Valuation',
          'Builder Negotiations',
          'MLS Search',
          'North Las Vegas Real Estate Market'
        ],
        hasCredential: [
          {
            '@type': 'EducationalOccupationalCredential',
            credentialCategory: 'Professional License',
            name: 'Nevada Real Estate License'
          }
        ],
        workLocation: {
          '@type': 'Place',
          name: 'Aliante, North Las Vegas',
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 36.1699,
            longitude: -115.1398
          }
        },
        memberOf: {
          '@type': 'Organization',
          name: 'Greater Las Vegas Association of Realtors'
        },
        award: [
          'Local Market Expert - Aliante Specialist since 2018',
          '127+ Five-Star Client Reviews'
        ]
      };
    }

    if (type === 'Article' && article) {
      return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: article.title,
        description: article.description,
        url: article.url,
        datePublished: article.datePublished,
        dateModified: article.dateModified,
        author: {
          '@type': 'Person',
          name: 'Dr. Jan Duffy',
          url: 'https://www.aliantehomesforsale.com/about',
          jobTitle: 'Real Estate Agent & Aliante Specialist'
        },
        publisher: {
          '@type': 'Organization',
          name: 'Aliante Las Vegas | Homes by Dr. Jan Duffy',
          logo: {
            '@type': 'ImageObject',
            url: 'https://www.aliantehomesforsale.com/logo.png',
            width: 250,
            height: 60
          }
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': article.url
        },
        articleSection: 'Real Estate',
        keywords: 'Aliante homes, North Las Vegas real estate, home buying guide'
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
          url: `https://www.aliantehomesforsale.com#step${index + 1}`
        })),
        totalTime: 'PT30M',
        tool: [
          {
            '@type': 'HowToTool',
            name: 'MLS Property Search'
          },
          {
            '@type': 'HowToTool',
            name: 'Professional Real Estate Agent'
          }
        ]
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
