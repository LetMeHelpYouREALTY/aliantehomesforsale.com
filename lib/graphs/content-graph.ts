import { buyerPathSteps } from '../content/aliante-content';
import { absoluteImageUrl, pageOgImage } from '../content/site-images';
import { pageCatalog } from '../schema/page-catalog';
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

  const extraWebPages = pageCatalog
    .filter(
      (page) => page.path !== '/' && !siteConfig.hubPages.some((hub) => hub.path === page.path)
    )
    .map((page) => ({
      '@type': page.pageTypes[0],
      '@id': graphIds.hubPage(page.path),
      name: page.name,
      url: `${siteConfig.siteUrl}${page.path}`,
      description: page.description,
      isPartOf: { '@id': graphIds.website },
      about: { '@id': graphIds.aliantePlace },
      primaryImageOfPage: absoluteImageUrl(pageOgImage(page.path)),
      inLanguage: 'en-US',
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['h1', 'h2', '.speakable'],
      },
    }));

  const homePage = {
    '@type': 'WebPage',
    '@id': graphIds.hubPage('/'),
    name: siteConfig.defaultTitle,
    url: siteConfig.siteUrl,
    description: siteConfig.defaultDescription,
    isPartOf: { '@id': graphIds.website },
    about: { '@id': graphIds.aliantePlace },
    primaryImageOfPage: absoluteImageUrl(pageOgImage('/')),
    inLanguage: 'en-US',
  };

  const hubPages = siteConfig.hubPages.map((hub) => ({
    '@type': 'WebPage',
    '@id': graphIds.hubPage(hub.path),
    name: hub.name,
    url: `${siteConfig.siteUrl}${hub.path}`,
    isPartOf: { '@id': graphIds.website },
    about: { '@id': graphIds.aliantePlace },
    primaryImageOfPage: absoluteImageUrl(pageOgImage(hub.path)),
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
      { '@id': graphIds.hubPage('/') },
      ...siteConfig.hubPages.map((hub) => ({ '@id': graphIds.hubPage(hub.path) })),
      ...extraWebPages.map((page) => ({ '@id': page['@id'] })),
      { '@id': `${siteConfig.siteUrl}/neighborhoods#itemlist` },
      { '@id': `${siteConfig.siteUrl}/#services-itemlist` },
      { '@id': `${siteConfig.siteUrl}/builders#itemlist` },
      { '@id': `${siteConfig.siteUrl}/buyer-guide#howto` },
    ],
  };

  return [
    website,
    homePage,
    ...hubPages,
    ...extraWebPages,
    neighborhoodList,
    servicesList,
    buildersList,
    buyerHowTo,
    contentCollection,
  ];
}
