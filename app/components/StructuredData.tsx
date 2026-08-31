'use client';

import { useId } from 'react';
import { siteConfig } from '../../lib/site-config';

interface StructuredDataProps {
  type:
    | 'RealEstateAgent'
    | 'PropertyListing'
    | 'NeighborhoodDetail'
    | 'NeighborhoodGuide'
    | 'WebSite'
    | 'LocalBusiness'
    | 'Organization'
    | 'Breadcrumbs'
    | 'FAQPage';
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

export default function StructuredData({
  type,
  property,
  breadcrumbs,
  faqs,
  customData,
}: StructuredDataProps) {
  const scriptId = useId();

  const getSchemaData = () => {
    if (type === 'RealEstateAgent') {
      return {
        '@context': 'https://schema.org',
        '@type': 'RealEstateAgent',
        name: siteConfig.siteName,
        description: `Hyperlocal real estate services in ${siteConfig.areaName}, ${siteConfig.region} — buyer representation, listing services, new construction, and 55+ community specialist.`,
        url: siteConfig.siteUrl,
        founder: {
          '@type': 'Person',
          name: siteConfig.agentName,
        },
        foundingDate: String(siteConfig.foundedYear),
        address: {
          '@type': 'PostalAddress',
          streetAddress: siteConfig.address.streetAddress,
          addressLocality: siteConfig.address.addressLocality,
          addressRegion: siteConfig.address.addressRegion,
          postalCode: siteConfig.address.postalCode,
          addressCountry: siteConfig.address.addressCountry,
        },
        telephone: siteConfig.phoneTel,
        email: siteConfig.email,
        areaServed: [
          { '@type': 'Place', name: siteConfig.areaServed },
          ...siteConfig.neighborhoods.map((n) => ({ '@type': 'Place', name: n.name })),
        ],
        knowsAbout: [
          'Aliante real estate',
          'North Las Vegas 89084 homes for sale',
          'New construction homes',
          'Gated community real estate',
          '55+ active adult communities',
          'Sun City Aliante',
          'Buyer representation',
          'Home valuation and CMA',
          'Investment property analysis',
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: `${siteConfig.areaName} Real Estate Services`,
          itemListElement: siteConfig.services.map((service, index) => ({
            '@type': 'Offer',
            position: index + 1,
            itemOffered: {
              '@type': 'Service',
              name: service.name,
              description: service.description,
              areaServed: { '@type': 'Place', name: siteConfig.areaServed },
            },
          })),
        },
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
        description:
          'Guide to Aliante neighborhoods: The Prominence, Desert Willows, Club Aliante, The Paseos, and Sun City Aliante in North Las Vegas 89084.',
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
                description: 'Gated village in Aliante with private streets and shared amenities',
                url: 'https://www.aliantehomesforsale.com/neighborhoods/prominence',
              },
            },
            {
              '@type': 'ListItem',
              position: 2,
              item: {
                '@type': 'Place',
                name: 'Desert Willows',
                description: 'Open-access village with parks and community pools',
                url: 'https://www.aliantehomesforsale.com/neighborhoods/desert-willows',
              },
            },
            {
              '@type': 'ListItem',
              position: 3,
              item: {
                '@type': 'Place',
                name: 'Club Aliante',
                description: 'Golf-course lots next to Aliante Golf Club',
                url: 'https://www.aliantehomesforsale.com/neighborhoods/club-aliante',
              },
            },
            {
              '@type': 'ListItem',
              position: 4,
              item: {
                '@type': 'Place',
                name: 'The Paseos',
                description: 'Open-access village with parks, trails, and shared recreation',
                url: 'https://www.aliantehomesforsale.com/neighborhoods/paseos',
              },
            },
            {
              '@type': 'ListItem',
              position: 5,
              item: {
                '@type': 'Place',
                name: 'Sun City Aliante',
                description: 'Del Webb 55+ village inside ZIP 89084',
                url: 'https://www.aliantehomesforsale.com/sun-city-aliante',
              },
            },
            {
              '@type': 'ListItem',
              position: 6,
              item: {
                '@type': 'Place',
                name: 'Villages at Tule Springs',
                description: 'New construction east of Aliante near Floyd Lamb Park',
                url: 'https://www.aliantehomesforsale.com/neighborhoods/tule-springs',
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
        name: siteConfig.siteName,
        url: siteConfig.siteUrl,
        description: `Aliante and North Las Vegas ${siteConfig.zipCode} real estate with Dr. Jan Duffy since ${siteConfig.foundedYear}`,
        inLanguage: 'en-US',
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['h1', 'h2', '.speakable'],
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: siteConfig.searchUrlTemplate,
          'query-input': 'required name=search_term_string',
        },
        publisher: {
          '@type': 'RealEstateAgent',
          name: siteConfig.siteName,
          address: {
            '@type': 'PostalAddress',
            streetAddress: siteConfig.address.streetAddress,
            addressLocality: siteConfig.address.addressLocality,
            addressRegion: siteConfig.address.addressRegion,
            postalCode: siteConfig.address.postalCode,
            addressCountry: siteConfig.address.addressCountry,
          },
        },
      };
    }

    if (type === 'NeighborhoodDetail') {
      return {
        '@context': 'https://schema.org',
        '@type': 'Place',
        name: 'Aliante Neighborhoods',
        description:
          'Aliante neighborhoods in North Las Vegas 89084: gated villages, golf-course lots, open-access streets, and Sun City Aliante 55+.',
        url: 'https://www.aliantehomesforsale.com/neighborhoods',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'North Las Vegas',
          addressRegion: 'NV',
          postalCode: '89084',
          addressCountry: 'US',
        },
        containsPlace: [
          {
            '@type': 'Place',
            name: 'The Prominence',
            description: 'Gated village in Aliante, North Las Vegas 89084',
            url: 'https://www.aliantehomesforsale.com/neighborhoods/prominence',
          },
          {
            '@type': 'Place',
            name: 'Desert Willows',
            description: 'Open-access village in Aliante',
            url: 'https://www.aliantehomesforsale.com/neighborhoods/desert-willows',
          },
          {
            '@type': 'Place',
            name: 'Club Aliante',
            description: 'Golf course community in Aliante',
            url: 'https://www.aliantehomesforsale.com/neighborhoods/club-aliante',
          },
          {
            '@type': 'Place',
            name: 'The Paseos',
            description: 'Open-access village in Aliante',
            url: 'https://www.aliantehomesforsale.com/neighborhoods/paseos',
          },
          {
            '@type': 'Place',
            name: 'Sun City Aliante',
            description: 'Del Webb 55+ village inside ZIP 89084',
            url: 'https://www.aliantehomesforsale.com/sun-city-aliante',
          },
          {
            '@type': 'Place',
            name: 'Villages at Tule Springs',
            description: 'New construction east of Aliante near Floyd Lamb Park',
            url: 'https://www.aliantehomesforsale.com/neighborhoods/tule-springs',
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
        '@id': `${siteConfig.siteUrl}/#organization`,
        name: siteConfig.siteName,
        image: `${siteConfig.siteUrl}${siteConfig.agentImage}`,
        url: siteConfig.siteUrl,
        telephone: siteConfig.phoneTel,
        email: siteConfig.email,
        address: {
          '@type': 'PostalAddress',
          streetAddress: siteConfig.address.streetAddress,
          addressLocality: siteConfig.address.addressLocality,
          addressRegion: siteConfig.address.addressRegion,
          postalCode: siteConfig.address.postalCode,
          addressCountry: siteConfig.address.addressCountry,
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
          },
          {
            '@type': 'Place',
            name: 'Aliante',
          },
          ...siteConfig.neighborhoods.map((n) => ({ '@type': 'Place', name: n.name })),
        ],
      };
    }

    if (type === 'Organization') {
      return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        '@id': `${siteConfig.siteUrl}/#organization`,
        name: siteConfig.siteName,
        url: siteConfig.siteUrl,
        logo: {
          '@type': 'ImageObject',
          url: `${siteConfig.siteUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
        },
        description: `Hyperlocal real estate services in ${siteConfig.areaName}, ${siteConfig.region} since ${siteConfig.foundedYear}`,
        foundingDate: String(siteConfig.foundedYear),
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: siteConfig.phoneTel,
          contactType: 'Customer Service',
          areaServed: 'US-NV',
          availableLanguage: ['English'],
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
    <script type="application/ld+json" id={scriptId} suppressHydrationWarning>
      {scriptContent}
    </script>
  );
}
