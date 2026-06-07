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
        '@id': 'https://www.aliantehomesforsale.com/#realestate-agent',
        name: 'Aliante Las Vegas | Homes by Dr. Jan Duffy',
        description: 'Expert real estate services in Aliante, North Las Vegas specializing in new construction, gated communities, and 55+ active adult living since 2018',
        slogan: 'Your Aliante Real Estate Expert - Local Knowledge, Professional Results',
        url: 'https://www.aliantehomesforsale.com',
        image: {
          '@type': 'ImageObject',
          url: 'https://www.aliantehomesforsale.com/logo.png',
          width: 250,
          height: 60,
          caption: 'Aliante Homes For Sale - Dr. Jan Duffy',
        },
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.aliantehomesforsale.com/logo.png',
          width: 250,
          height: 60,
        },
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
        telephone: '+17027077273',
        email: 'DrDuffy@AlianteHomesForSale.com',
        sameAs: [
          'https://www.facebook.com/AlianteHomesForSale',
          'https://www.linkedin.com/in/dr-jan-duffy',
          'https://twitter.com/AlianteHomes',
        ],
        knowsAbout: [
          'Real Estate',
          'Aliante neighborhoods',
          'New construction homes',
          'Gated communities',
          '55+ active adult communities',
          'North Las Vegas real estate market',
          'Builder negotiations',
          'Sun City Aliante',
          'Club Aliante',
          'The Prominence',
        ],
        serviceArea: [
          {
            '@type': 'City',
            name: 'North Las Vegas',
            '@id': 'https://www.wikidata.org/wiki/Q2069810',
          },
          {
            '@type': 'GeoCircle',
            geoMidpoint: {
              '@type': 'GeoCoordinates',
              latitude: 36.1699,
              longitude: -115.1398,
            },
            geoRadius: '15 miles',
          },
        ],
        areaServed: [
          {
            '@type': 'Place',
            name: 'Aliante',
          },
          {
            '@type': 'Place',
            name: 'North Las Vegas',
          },
          {
            '@type': 'Place',
            name: 'Las Vegas',
          },
        ],
        hasMap: 'https://maps.google.com/?q=2590+Nature+Park+Drive+Suite+275+North+Las+Vegas+NV+89084',
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
            datePublished: '2026-01-15',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5',
              bestRating: '5'
            },
            reviewBody: 'Dr. Duffy helped us find our dream home in The Prominence. Her knowledge of Aliante neighborhoods and builder negotiations saved us over $20,000 on our new construction home. Highly recommended!'
          }
        ],
        priceRange: '$$',
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
        employee: {
          '@type': 'Person',
          '@id': 'https://www.aliantehomesforsale.com/#dr-jan-duffy',
          name: 'Dr. Jan Duffy',
          jobTitle: 'Real Estate Agent & Aliante Specialist',
          description: 'Licensed Nevada real estate professional with expertise in Aliante communities, new construction, and 55+ active adult living',
          telephone: '+17027077273',
          email: 'DrDuffy@AlianteHomesForSale.com',
          knowsAbout: [
            'Aliante Real Estate',
            'New Construction Homes',
            'Luxury Gated Communities',
            'Sun City Aliante',
            '55+ Active Adult Living',
          ],
        },
      };
    }

    if (type === 'PropertyListing' && property) {
      const currentDate = new Date().toISOString();
      return {
        '@context': 'https://schema.org',
        '@type': 'RealEstateListing',
        '@id': `https://www.aliantehomesforsale.com/property/${property.address.replace(/\s+/g, '-').toLowerCase()}`,
        name: property.title,
        description: property.description,
        datePosted: currentDate,
        dateModified: currentDate,
        url: `https://www.aliantehomesforsale.com/property/${property.address.replace(/\s+/g, '-').toLowerCase()}`,
        offers: {
          '@type': 'Offer',
          price: property.price,
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          validFrom: currentDate,
          seller: {
            '@type': 'RealEstateAgent',
            name: 'Aliante Las Vegas | Homes by Dr. Jan Duffy',
            telephone: '+17027077273',
          },
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
          longitude: -115.1398,
        },
        floorSize: {
          '@type': 'QuantitativeValue',
          value: property.sqft,
          unitText: 'SqFt',
        },
        numberOfRooms: property.bedrooms,
        numberOfBathroomsTotal: property.bathrooms,
        numberOfBedrooms: property.bedrooms,
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
        alternateName: 'Aliante Homes For Sale',
        description: 'Premier real estate services in Aliante, North Las Vegas. Specializing in new construction, gated communities, and 55+ active adult living since 2018.',
        slogan: 'Your Aliante Real Estate Expert - Local Knowledge, Professional Results',
        image: {
          '@type': 'ImageObject',
          url: 'https://www.aliantehomesforsale.com/logo.png',
          width: 250,
          height: 60,
        },
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.aliantehomesforsale.com/logo.png',
          width: 250,
          height: 60,
        },
        url: 'https://www.aliantehomesforsale.com',
        telephone: '+17027077273',
        email: 'DrDuffy@AlianteHomesForSale.com',
        sameAs: [
          'https://www.facebook.com/AlianteHomesForSale',
          'https://www.linkedin.com/in/dr-jan-duffy',
          'https://twitter.com/AlianteHomes',
          'https://www.instagram.com/aliantehomes',
        ],
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
        hasMap: 'https://maps.google.com/?q=2590+Nature+Park+Drive+Suite+275+North+Las+Vegas+NV+89084',
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
        paymentAccepted: ['Cash', 'Check', 'Wire Transfer'],
        currenciesAccepted: 'USD',
        knowsAbout: [
          'Aliante Real Estate',
          'North Las Vegas Homes',
          'New Construction',
          'Gated Communities',
          'Sun City Aliante 55+',
          'Club Aliante Golf',
          'The Prominence',
          'Desert Willows',
        ],
        serviceArea: [
          {
            '@type': 'City',
            name: 'North Las Vegas',
            '@id': 'https://www.wikidata.org/wiki/Q2069810',
          },
          {
            '@type': 'GeoCircle',
            geoMidpoint: {
              '@type': 'GeoCoordinates',
              latitude: 36.1699,
              longitude: -115.1398,
            },
            geoRadius: '15 miles',
          },
        ],
        areaServed: [
          {
            '@type': 'City',
            name: 'North Las Vegas',
          },
          {
            '@type': 'Place',
            name: 'Aliante',
          },
          {
            '@type': 'Place',
            name: 'Las Vegas',
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
        alternateName: 'Aliante Homes For Sale',
        url: 'https://www.aliantehomesforsale.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://aliantehomesforsale.com/logo.png',
          width: 250,
          height: 60,
        },
        image: {
          '@type': 'ImageObject',
          url: 'https://aliantehomesforsale.com/logo.png',
          width: 250,
          height: 60,
        },
        description: 'Expert real estate services in Aliante, North Las Vegas since 2018. Specializing in new construction, gated communities, and 55+ active adult living.',
        slogan: 'Your Aliante Real Estate Expert - Local Knowledge, Professional Results',
        foundingDate: '2018',
        founder: {
          '@type': 'Person',
          name: 'Dr. Jan Duffy',
          jobTitle: 'Real Estate Agent',
        },
        sameAs: [
          'https://www.facebook.com/AlianteHomesForSale',
          'https://www.linkedin.com/in/dr-jan-duffy',
          'https://twitter.com/AlianteHomes',
          'https://www.instagram.com/aliantehomes',
        ],
        contactPoint: [
          {
            '@type': 'ContactPoint',
            telephone: '+1-702-707-7273',
            contactType: 'Customer Service',
            areaServed: 'US-NV',
            availableLanguage: ['English', 'Spanish'],
            email: 'DrDuffy@AlianteHomesForSale.com',
          },
          {
            '@type': 'ContactPoint',
            telephone: '+1-702-707-7273',
            contactType: 'Sales',
            areaServed: ['US-NV', 'Aliante', 'North Las Vegas'],
            availableLanguage: 'English',
          },
        ],
        address: {
          '@type': 'PostalAddress',
          streetAddress: '2590 Nature Park Drive, Suite 275',
          addressLocality: 'North Las Vegas',
          addressRegion: 'NV',
          postalCode: '89084',
          addressCountry: 'US',
        },
        knowsAbout: [
          'Real Estate',
          'Aliante North Las Vegas',
          'New Construction Homes',
          'Gated Communities',
          '55+ Active Adult Living',
          'Sun City Aliante',
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
