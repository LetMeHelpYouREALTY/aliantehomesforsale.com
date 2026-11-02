'use client';

import { useId } from 'react';

interface NeighborhoodPlaceSchemaProps {
  name: string;
  description: string;
  priceRange: string;
  latitude: string;
  longitude: string;
  features: string[];
  builders?: string[];
  homeTypes?: string[];
  specialFeatures?: string[];
}

export default function NeighborhoodPlaceSchema({
  name,
  description,
  priceRange,
  latitude,
  longitude,
  features,
  builders,
  homeTypes,
  specialFeatures,
}: NeighborhoodPlaceSchemaProps) {
  const scriptId = useId();

  const placeSchema = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    '@id': `https://www.aliantehomesforsale.com/neighborhoods/${name.toLowerCase().replace(/\s+/g, '-')}#place`,
    name: `${name} - Aliante, North Las Vegas`,
    description,
    geo: {
      '@type': 'GeoCoordinates',
      latitude,
      longitude,
    },
    containedInPlace: {
      '@type': 'Place',
      name: 'Aliante',
      '@id': 'https://www.aliantehomesforsale.com/#aliante-location',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'North Las Vegas',
      addressRegion: 'NV',
      postalCode: '89084',
      addressCountry: 'US',
    },
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Price Range',
        value: priceRange,
      },
      ...features.map((feature) => ({
        '@type': 'PropertyValue',
        name: 'Feature',
        value: feature,
      })),
      ...(builders
        ? builders.map((builder) => ({
            '@type': 'PropertyValue',
            name: 'Builder',
            value: builder,
          }))
        : []),
      ...(homeTypes
        ? homeTypes.map((type) => ({
            '@type': 'PropertyValue',
            name: 'Home Type',
            value: type,
          }))
        : []),
      ...(specialFeatures
        ? specialFeatures.map((feature) => ({
            '@type': 'PropertyValue',
            name: 'Special Feature',
            value: feature,
          }))
        : []),
    ],
    // AEO 2026: Add expertise and freshness signals
    provider: {
      '@type': 'Person',
      name: 'Dr. Jan Duffy',
      url: 'https://www.aliantehomesforsale.com/about',
    },
    dateModified: new Date().toISOString(),
  };

  return (
    <script
      type="application/ld+json"
      id={scriptId}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(placeSchema) }}
    />
  );
}
