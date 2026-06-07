'use client';

import { useId } from 'react';

interface StructuredDataProps {
  type: 'RealEstateAgent' | 'PropertyListing' | 'NeighborhoodDetail' | 'NeighborhoodGuide' | 'WebSite' | 'LocalBusiness' | 'Organization' | 'Breadcrumbs' | 'FAQPage' | 'Person';
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
        '@id': 'https://www.aliantehomesforsale.com/#realestate-agent',
        name: 'Aliante Las Vegas | Homes by Dr. Jan Duffy',
        alternateName: 'Dr. Jan Duffy Real Estate',
        description: 'Expert real estate services in Aliante, North Las Vegas specializing in new construction, gated communities, and 55+ active adult homes since 2018',
        slogan: 'Your Aliante Real Estate Expert - 500+ Successful Transactions',
        url: 'https://www.aliantehomesforsale.com',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '2590 Nature Park Drive, Suite 275',
          addressLocality: 'North Las Vegas',
          addressRegion: 'NV',
          postalCode: '89084',
          addressCountry: 'US',
        },
        telephone: '+17027077273',
        email: 'DrDuffy@AlianteHomesForSale.com',
        image: {
          '@type': 'ImageObject',
          url: 'https://www.aliantehomesforsale.com/logo.png',
          width: '250',
          height: '60',
        },
        knowsAbout: [
          'Real Estate',
          'New Construction Homes',
          'Aliante North Las Vegas',
          'Gated Communities',
          'Active Adult 55+ Communities',
          'Builder Negotiations',
          'MLS Listings',
          'Property Investment',
          'First-Time Home Buyers',
          'Luxury Real Estate'
        ],
        areaServed: [
          {
            '@type': 'City',
            name: 'North Las Vegas',
            '@id': 'https://en.wikipedia.org/wiki/North_Las_Vegas,_Nevada',
          },
          {
            '@type': 'Place',
            name: 'Aliante',
            geo: {
              '@type': 'GeoCircle',
              geoMidpoint: {
                '@type': 'GeoCoordinates',
                latitude: '36.1699',
                longitude: '-115.1398',
              },
              geoRadius: '5000',
            },
          },
          {
            '@type': 'Place',
            name: 'Las Vegas Valley',
          },
          {
            '@type': 'PostalCode',
            name: '89084',
          },
        ],
        serviceArea: {
          '@type': 'GeoCircle',
          geoMidpoint: {
            '@type': 'GeoCoordinates',
            latitude: '36.1699',
            longitude: '-115.1398',
          },
          geoRadius: '8000',
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Real Estate Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Buyer Representation',
                description: 'Free professional buyer representation for home purchases in Aliante',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'New Construction Specialist',
                description: 'Expert guidance for new construction home purchases with builder negotiations',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Home Valuation',
                description: 'Comprehensive property valuation services',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'MLS Search Access',
                description: 'Real-time MLS listings updated every 15 minutes',
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
            datePublished: '2025-10-15',
          }
        ],
        foundingDate: '2018',
        priceRange: '$$',
        sameAs: [
          'https://www.facebook.com/AlianteHomesForSale',
          'https://www.linkedin.com/in/drjanduffy',
          'https://www.instagram.com/aliantehomesforsale',
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
        '@type': 'LocalBusiness',
        '@id': 'https://www.aliantehomesforsale.com/#local-business',
        name: 'Aliante Las Vegas | Homes by Dr. Jan Duffy',
        image: {
          '@type': 'ImageObject',
          url: 'https://www.aliantehomesforsale.com/logo.png',
          width: '250',
          height: '60',
        },
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
          latitude: '36.1699',
          longitude: '-115.1398',
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
        paymentAccepted: 'Cash, Check, Credit Card, Wire Transfer',
        currenciesAccepted: 'USD',
        areaServed: [
          {
            '@type': 'City',
            name: 'North Las Vegas',
            '@id': 'https://en.wikipedia.org/wiki/North_Las_Vegas,_Nevada',
          },
          {
            '@type': 'Place',
            name: 'Aliante',
            geo: {
              '@type': 'GeoCoordinates',
              latitude: '36.1699',
              longitude: '-115.1398',
            },
          },
          {
            '@type': 'PostalCode',
            name: '89084',
          },
        ],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '127',
          bestRating: '5',
          worstRating: '1',
        },
        hasMap: 'https://maps.google.com/?q=36.1699,-115.1398',
        isAccessibleForFree: true,
        publicAccess: true,
      };
    }

    if (type === 'Person') {
      return {
        '@context': 'https://schema.org',
        '@type': 'Person',
        '@id': 'https://www.aliantehomesforsale.com/#person',
        name: 'Dr. Jan Duffy',
        givenName: 'Jan',
        familyName: 'Duffy',
        honorificPrefix: 'Dr.',
        jobTitle: 'Real Estate Agent & Aliante Specialist',
        description: 'Award-winning real estate agent specializing in Aliante, North Las Vegas with 500+ successful transactions since 2018. D.R. Horton #1 Premiere Agent.',
        url: 'https://www.aliantehomesforsale.com/about',
        email: 'DrDuffy@AlianteHomesForSale.com',
        telephone: '+17027077273',
        image: {
          '@type': 'ImageObject',
          url: 'https://www.aliantehomesforsale.com/dr-jan-duffy.jpg',
          width: '400',
          height: '400',
        },
        worksFor: {
          '@type': 'Organization',
          name: 'Aliante Las Vegas | Homes by Dr. Jan Duffy',
          '@id': 'https://www.aliantehomesforsale.com/#organization',
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: '2590 Nature Park Drive, Suite 275',
          addressLocality: 'North Las Vegas',
          addressRegion: 'NV',
          postalCode: '89084',
          addressCountry: 'US',
        },
        knowsAbout: [
          'Real Estate Sales',
          'New Construction',
          'Builder Negotiations',
          'Aliante North Las Vegas',
          'Gated Communities',
          '55+ Active Adult Communities',
          'First-Time Home Buyers',
          'Luxury Real Estate',
          'Investment Properties',
          'MLS Systems',
        ],
        hasOccupation: {
          '@type': 'Occupation',
          name: 'Real Estate Agent',
          occupationalCategory: '41-9022.00',
          educationRequirements: 'Nevada Real Estate License',
          experienceRequirements: '6+ years in Aliante real estate',
        },
        award: [
          'D.R. Horton #1 Premiere Agent',
          '4.9/5 Client Satisfaction Rating',
          '500+ Successful Transactions',
        ],
        sameAs: [
          'https://www.facebook.com/AlianteHomesForSale',
          'https://www.linkedin.com/in/drjanduffy',
          'https://www.instagram.com/aliantehomesforsale',
        ],
        alumniOf: {
          '@type': 'EducationalOrganization',
          name: 'Nevada Real Estate Division',
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
          url: 'https://www.aliantehomesforsale.com/logo.png',
          width: '250',
          height: '60',
        },
        description: 'Expert real estate services in Aliante, North Las Vegas since 2018',
        foundingDate: '2018',
        founder: {
          '@type': 'Person',
          name: 'Dr. Jan Duffy',
          '@id': 'https://www.aliantehomesforsale.com/#person',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+1-702-707-7273',
          contactType: 'Customer Service',
          areaServed: 'US-NV',
          availableLanguage: ['English', 'Spanish'],
          email: 'DrDuffy@AlianteHomesForSale.com',
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: '2590 Nature Park Drive, Suite 275',
          addressLocality: 'North Las Vegas',
          addressRegion: 'NV',
          postalCode: '89084',
          addressCountry: 'US',
        },
        sameAs: [
          'https://www.facebook.com/AlianteHomesForSale',
          'https://www.linkedin.com/in/drjanduffy',
          'https://www.instagram.com/aliantehomesforsale',
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
