import { graphIds } from '../../lib/graphs/ids';
import { siteConfig } from '../../lib/site-config';

/**
 * Aliante Place node (also included in EntityGraphSchema @graph).
 * Kept for backward compatibility with existing layout wiring.
 */
export default function LocationSchema() {
  const locationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    '@id': graphIds.aliantePlace,
    name: 'Aliante',
    description:
      'Master-planned community in North Las Vegas, Nevada featuring gated villages, Aliante Golf Club, and Sun City Aliante 55+ living.',
    url: `${siteConfig.siteUrl}/neighborhoods`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'North Las Vegas',
      addressRegion: 'NV',
      postalCode: siteConfig.zipCode,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    containedInPlace: {
      '@type': 'City',
      '@id': graphIds.northLasVegas,
      name: 'North Las Vegas',
      sameAs: graphIds.northLasVegas,
    },
    containsPlace: siteConfig.neighborhoods.map((n) => ({
      '@type': 'Place',
      '@id': graphIds.neighborhood(n.slug),
      name: n.name,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
    />
  );
}
