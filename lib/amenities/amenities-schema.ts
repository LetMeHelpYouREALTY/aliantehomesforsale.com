import { graphIds } from '../graphs/ids';
import { generateBreadcrumbs } from '../seo-utils';
import { siteConfig } from '../site-config';
import { alianteCommunityMap } from './community-map-config';
import { curatedAmenities, formatCuratedAddress } from './curated-amenities';

const amenitiesPath = '/amenities';
const amenitiesUrl = `${siteConfig.siteUrl}${amenitiesPath}`;

export function buildAmenitiesPageSchema() {
  const breadcrumb = generateBreadcrumbs([
    { name: 'Home', url: siteConfig.siteUrl },
    { name: 'Nearby Amenities', url: amenitiesUrl },
  ]);

  const communityPlace = {
    '@type': 'Place',
    '@id': `${amenitiesUrl}#aliante-place`,
    name: `Aliante, ${alianteCommunityMap.city}`,
    description:
      'Master-planned community in North Las Vegas, Nevada ZIP 89084 — gated villages, Club Aliante golf, Sun City Aliante 55+, and Tule Springs new construction.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: alianteCommunityMap.center.streetAddress,
      addressLocality: alianteCommunityMap.city,
      addressRegion: alianteCommunityMap.state,
      postalCode: alianteCommunityMap.zip,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: alianteCommunityMap.center.latitude,
      longitude: alianteCommunityMap.center.longitude,
    },
  };

  const itemList = {
    '@type': 'ItemList',
    name: `Featured places near ${alianteCommunityMap.communityName}`,
    itemListElement: curatedAmenities.map((place, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': place.schemaType,
        name: place.name,
        address: {
          '@type': 'PostalAddress',
          streetAddress: place.streetAddress,
          addressLocality: place.addressLocality,
          addressRegion: place.addressRegion,
          postalCode: place.postalCode,
          addressCountry: 'US',
        },
      },
    })),
  };

  const agent = {
    '@type': 'RealEstateAgent',
    '@id': graphIds.agent,
    name: siteConfig.agentName,
    url: siteConfig.siteUrl,
    telephone: siteConfig.phoneTel,
    email: siteConfig.email,
    image: `${siteConfig.siteUrl}${siteConfig.agentImage}`,
    worksFor: { '@id': graphIds.brokerage },
    areaServed: {
      '@type': 'Place',
      name: siteConfig.areaServed,
    },
    knowsAbout: siteConfig.knowsAbout,
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [breadcrumb, communityPlace, itemList, agent],
  };
}

export function amenitiesPlainTextSummary(): string {
  return curatedAmenities.map((p) => `${p.name}, ${formatCuratedAddress(p)}`).join('; ');
}
