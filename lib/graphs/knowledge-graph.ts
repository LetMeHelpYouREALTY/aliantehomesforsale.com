import { nearbyPlaceSearchUrl, nearbyPlaces } from '../content/aliante-content';
import { siteConfig } from '../site-config';
import { graphIds } from './ids';

/** Knowledge graph: Organization, LocalBusiness, Places, Services, OfferCatalog */
export function buildKnowledgeGraph() {
  const postalAddress = {
    '@type': 'PostalAddress',
    streetAddress: siteConfig.address.streetAddress,
    addressLocality: siteConfig.address.addressLocality,
    addressRegion: siteConfig.address.addressRegion,
    postalCode: siteConfig.address.postalCode,
    addressCountry: siteConfig.address.addressCountry,
  };

  const organization = {
    '@type': 'Organization',
    '@id': graphIds.organization,
    name: siteConfig.siteName,
    url: siteConfig.siteUrl,
    logo: {
      '@type': 'ImageObject',
      url: `${siteConfig.siteUrl}${siteConfig.logo}`,
      width: 512,
      height: 512,
    },
    description: `Hyperlocal real estate services in ${siteConfig.areaName}, ${siteConfig.region} since ${siteConfig.foundedYear}`,
    foundingDate: String(siteConfig.foundedYear),
    email: siteConfig.email,
    telephone: siteConfig.phoneTel,
    address: postalAddress,
    parentOrganization: { '@id': graphIds.brokerage },
    employee: { '@id': graphIds.agent },
    founder: { '@id': graphIds.agent },
    areaServed: [{ '@id': graphIds.aliantePlace }, { '@id': graphIds.northLasVegas }],
    hasOfferCatalog: { '@id': graphIds.offerCatalog },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteConfig.phoneTel,
      contactType: 'customer service',
      areaServed: 'US-NV',
      availableLanguage: ['English', 'Spanish'],
    },
    ...(siteConfig.sameAs.length > 0 ? { sameAs: [...siteConfig.sameAs] } : {}),
  };

  const localBusiness = {
    '@type': ['LocalBusiness', 'RealEstateAgent'],
    '@id': graphIds.localBusiness,
    name: siteConfig.siteName,
    url: siteConfig.siteUrl,
    image: `${siteConfig.siteUrl}${siteConfig.agentImage}`,
    hasMap: siteConfig.maps.placeUrl,
    potentialAction: {
      '@type': 'ScheduleAction',
      name: siteConfig.calendly.events.consultation.heading,
      target: {
        '@type': 'EntryPoint',
        urlTemplate: siteConfig.calendly.events.consultation.url,
        actionPlatform: [
          'https://schema.org/DesktopWebPlatform',
          'https://schema.org/MobileWebPlatform',
        ],
      },
    },
    telephone: siteConfig.phoneTel,
    email: siteConfig.email,
    address: postalAddress,
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
    parentOrganization: { '@id': graphIds.organization },
    employee: { '@id': graphIds.agent },
    areaServed: [
      { '@id': graphIds.aliantePlace },
      ...siteConfig.neighborhoods.map((n) => ({ '@id': graphIds.neighborhood(n.slug) })),
    ],
  };

  const aliantePlace = {
    '@type': 'Place',
    '@id': graphIds.aliantePlace,
    name: 'Aliante',
    description:
      'Master-planned community in North Las Vegas, Nevada (89084) with gated neighborhoods, golf, and Sun City Aliante 55+ living.',
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
      '@id': graphIds.neighborhood(n.slug),
    })),
  };

  const neighborhoodPlaces = siteConfig.neighborhoods.map((n) => {
    const path = 'path' in n && typeof n.path === 'string' ? n.path : `/neighborhoods/${n.slug}`;
    return {
      '@type': 'Place',
      '@id': graphIds.neighborhood(n.slug),
      name: n.name,
      description: n.summary,
      url: `${siteConfig.siteUrl}${path}`,
      containedInPlace: { '@id': graphIds.aliantePlace },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'North Las Vegas',
        addressRegion: 'NV',
        postalCode: siteConfig.zipCode,
        addressCountry: 'US',
      },
    };
  });

  const services = siteConfig.services.map((service) => ({
    '@type': 'Service',
    '@id': graphIds.service(service.slug),
    name: service.name,
    description: service.description,
    url: `${siteConfig.siteUrl}${service.url}`,
    provider: { '@id': graphIds.agent },
    areaServed: { '@id': graphIds.aliantePlace },
    serviceType: 'RealEstate',
  }));

  const offerCatalog = {
    '@type': 'OfferCatalog',
    '@id': graphIds.offerCatalog,
    name: `${siteConfig.areaName} Real Estate Services`,
    itemListElement: siteConfig.services.map((service, index) => ({
      '@type': 'Offer',
      position: index + 1,
      itemOffered: { '@id': graphIds.service(service.slug) },
    })),
  };

  const builders = siteConfig.builders.map((builder) => ({
    '@type': 'Organization',
    '@id': graphIds.builder(builder.slug),
    name: builder.name,
    url: `${siteConfig.siteUrl}/builders/${builder.slug}`,
    areaServed: { '@id': graphIds.aliantePlace },
  }));

  const nearbyAttractions = nearbyPlaces.map((place) => ({
    '@type': 'TouristAttraction',
    '@id': graphIds.nearbyPlace(place.id),
    name: place.name,
    description: place.description,
    url: nearbyPlaceSearchUrl(place.mapsQuery),
    touristType: place.category,
    containedInPlace: { '@id': graphIds.aliantePlace },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'North Las Vegas',
      addressRegion: 'NV',
      postalCode: siteConfig.zipCode,
      addressCountry: 'US',
    },
  }));

  const nearbyItemList = {
    '@type': 'ItemList',
    '@id': `${siteConfig.siteUrl}/contact#nearby-itemlist`,
    name: "What's nearby Aliante Corporate Center",
    numberOfItems: nearbyPlaces.length,
    itemListElement: nearbyPlaces.map((place, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: place.name,
      url: nearbyPlaceSearchUrl(place.mapsQuery),
      item: { '@id': graphIds.nearbyPlace(place.id) },
    })),
  };

  return [
    organization,
    localBusiness,
    aliantePlace,
    ...neighborhoodPlaces,
    ...services,
    offerCatalog,
    ...builders,
    ...nearbyAttractions,
    nearbyItemList,
  ];
}
