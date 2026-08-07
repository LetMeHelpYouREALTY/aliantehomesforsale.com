import { buyerPathSteps } from '../content/aliante-content';
import { siteConfig } from '../site-config';
import { graphIds } from './ids';

/** Content graph: WebSite, hub WebPages, ItemLists, HowTo for AEO/GEO */
export function buildContentGraph() {
  const website = {
    '@type': 'WebSite',
    '@id': graphIds.website,
    name: siteConfig.siteName,
    url: siteConfig.siteUrl,
    inLanguage: 'en-US',
    description: siteConfig.defaultDescription,
    publisher: { '@id': graphIds.organization },
    about: { '@id': graphIds.aliantePlace },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', 'h2', '.speakable'],
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: siteConfig.searchUrlTemplate,
      'query-input': 'required name=search_term_string',
    },
  };

  const hubPages = siteConfig.hubPages.map((hub) => ({
    '@type': 'WebPage',
    '@id': graphIds.hubPage(hub.path),
    name: hub.name,
    url: `${siteConfig.siteUrl}${hub.path}`,
    isPartOf: { '@id': graphIds.website },
    about: { '@id': graphIds.aliantePlace },
    primaryImageOfPage: `${siteConfig.siteUrl}/og-image.jpg`,
    inLanguage: 'en-US',
  }));

  const neighborhoodList = {
    '@type': 'ItemList',
    '@id': `${siteConfig.siteUrl}/neighborhoods#itemlist`,
    name: 'Aliante Neighborhoods Guide',
    itemListOrder: 'https://schema.org/ItemListOrderAscending',
    numberOfItems: siteConfig.neighborhoods.length,
    itemListElement: siteConfig.neighborhoods.map((n, index) => {
      const path = 'path' in n && typeof n.path === 'string' ? n.path : `/neighborhoods/${n.slug}`;
      return {
        '@type': 'ListItem',
        position: index + 1,
        name: n.name,
        url: `${siteConfig.siteUrl}${path}`,
        item: { '@id': graphIds.neighborhood(n.slug) },
      };
    }),
  };

  const servicesList = {
    '@type': 'ItemList',
    '@id': `${siteConfig.siteUrl}/#services-itemlist`,
    name: 'Aliante Realtor Services',
    numberOfItems: siteConfig.services.length,
    itemListElement: siteConfig.services.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: service.name,
      url: `${siteConfig.siteUrl}${service.url}`,
      item: { '@id': graphIds.service(service.slug) },
    })),
  };

  const buildersList = {
    '@type': 'ItemList',
    '@id': `${siteConfig.siteUrl}/builders#itemlist`,
    name: 'Aliante New Construction Builders',
    numberOfItems: siteConfig.builders.length,
    itemListElement: siteConfig.builders.map((builder, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: builder.name,
      url: `${siteConfig.siteUrl}/builders/${builder.slug}`,
      item: { '@id': graphIds.builder(builder.slug) },
    })),
  };

  const buyerHowTo = {
    '@type': 'HowTo',
    '@id': `${siteConfig.siteUrl}/buyer-guide#howto`,
    name: 'How to buy a home in Aliante, North Las Vegas',
    description:
      'Three steps to search MLS listings, tour Aliante communities, and close with a hyperlocal agent.',
    totalTime: 'P30D',
    supply: [],
    tool: [],
    step: buyerPathSteps.map((step) => ({
      '@type': 'HowToStep',
      position: step.step,
      name: step.title,
      text: step.description,
      url: `${siteConfig.siteUrl}${step.href}`,
    })),
  };

  const contentCollection = {
    '@type': 'CollectionPage',
    '@id': graphIds.contentGraph,
    name: 'Aliante Homes content graph',
    url: siteConfig.siteUrl,
    hasPart: [
      { '@id': graphIds.website },
      ...siteConfig.hubPages.map((hub) => ({ '@id': graphIds.hubPage(hub.path) })),
      { '@id': `${siteConfig.siteUrl}/neighborhoods#itemlist` },
      { '@id': `${siteConfig.siteUrl}/#services-itemlist` },
      { '@id': `${siteConfig.siteUrl}/builders#itemlist` },
      { '@id': `${siteConfig.siteUrl}/buyer-guide#howto` },
    ],
  };

  return [
    website,
    ...hubPages,
    neighborhoodList,
    servicesList,
    buildersList,
    buyerHowTo,
    contentCollection,
  ];
}
