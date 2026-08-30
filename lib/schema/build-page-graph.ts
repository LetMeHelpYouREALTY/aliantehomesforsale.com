import { lifestyleCategories } from '../content/aliante-content';
import { absoluteImageUrl, pageOgImage } from '../content/site-images';
import { graphIds } from '../graphs/ids';
import { siteConfig } from '../site-config';
import {
  aboutRefs,
  absoluteUrl,
  agentRef,
  alianteRef,
  geoCoordinates,
  localBusinessRef,
  mentionsRefs,
  postalAddress,
  publisherRef,
  speakableSpec,
  webpageId,
} from './helpers';
import type { JsonLdNode, PageDefinition, PageKind } from './types';

const SCHOOLS = [
  { name: 'Leavitt Elementary School', type: 'ElementarySchool' },
  { name: 'Kit Carson Elementary School', type: 'ElementarySchool' },
  { name: 'Homer Elementary School', type: 'ElementarySchool' },
  { name: 'Brinley Middle School', type: 'MiddleSchool' },
  { name: 'Centennial High School', type: 'HighSchool' },
  { name: 'Legacy High School', type: 'HighSchool' },
] as const;

function sectionNodes(def: PageDefinition, pageUrl: string): JsonLdNode[] {
  return def.sections.map((section) => ({
    '@type': 'WebPageElement',
    '@id': `${pageUrl}#${section.id}`,
    name: section.name,
    ...(section.description ? { description: section.description } : {}),
    isPartOf: { '@id': webpageId(def.path) },
    about: alianteRef(),
    speakable: speakableSpec(),
  }));
}

function faqNode(def: PageDefinition, pageUrl: string): JsonLdNode | null {
  if (!def.faqs || def.faqs.length === 0 || def.faqPlacement === 'none') {
    return null;
  }
  return {
    '@type': 'FAQPage',
    '@id': `${pageUrl}#faq-schema`,
    url: pageUrl,
    isPartOf: { '@id': webpageId(def.path) },
    about: alianteRef(),
    mainEntity: def.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
        author: agentRef(),
      },
    })),
  };
}

function howToNode(def: PageDefinition, pageUrl: string): JsonLdNode | null {
  if (!def.howTo) {
    return null;
  }
  return {
    '@type': 'HowTo',
    '@id': `${pageUrl}#howto`,
    name: def.howTo.name,
    description: def.howTo.description,
    url: pageUrl,
    inLanguage: 'en-US',
    areaServed: alianteRef(),
    author: agentRef(),
    step: def.howTo.steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

function extraNodes(def: PageDefinition, pageUrl: string): JsonLdNode[] {
  const nodes: JsonLdNode[] = [];
  const kind: PageKind = def.kind;

  switch (kind) {
    case 'home':
    case 'listings':
    case 'collection':
    case 'neighborhood-hub':
    case 'builder-hub':
    case 'neighborhood-compare':
    case 'search':
    case 'incentives':
      nodes.push(buildCollectionList(def, pageUrl, kind));
      break;
    case 'neighborhood':
      if (def.neighborhoodSlug) {
        nodes.push({
          '@type': 'Place',
          '@id': graphIds.neighborhood(def.neighborhoodSlug),
          name: def.name,
          description: def.description,
          url: pageUrl,
          containedInPlace: alianteRef(),
          address: {
            '@type': 'PostalAddress',
            addressLocality: siteConfig.address.addressLocality,
            addressRegion: siteConfig.address.addressRegion,
            postalCode: siteConfig.zipCode,
            addressCountry: 'US',
          },
          geo: geoCoordinates(),
        });
      }
      break;
    case 'builder':
      if (def.builderSlug) {
        nodes.push({
          '@type': 'Organization',
          '@id': graphIds.builder(def.builderSlug),
          name: def.name,
          description: def.description,
          url: pageUrl,
          areaServed: alianteRef(),
        });
        nodes.push({
          '@type': 'Offer',
          '@id': `${pageUrl}#offer`,
          name: `${def.name} new construction in Aliante`,
          description: def.description,
          areaServed: alianteRef(),
          seller: { '@id': graphIds.builder(def.builderSlug) },
          offeredBy: localBusinessRef(),
        });
      }
      break;
    case 'dataset':
      nodes.push({
        '@type': 'Dataset',
        '@id': `${pageUrl}#dataset`,
        name: 'Aliante MLS market snapshot',
        description:
          'Live MLS-connected inventory, pricing context, and days-on-market for Aliante, North Las Vegas 89084. Widget figures refresh about every 15 minutes.',
        url: pageUrl,
        creator: agentRef(),
        publisher: publisherRef(),
        spatialCoverage: alianteRef(),
        variableMeasured: ['Inventory', 'List price context', 'Days on market'],
      });
      break;
    case 'service':
      if (def.serviceSlug) {
        nodes.push({
          '@type': 'Service',
          '@id': graphIds.service(def.serviceSlug),
          name: def.name,
          description: def.description,
          url: pageUrl,
          provider: agentRef(),
          areaServed: alianteRef(),
          serviceType: 'RealEstate',
        });
      }
      break;
    case 'calculator':
      nodes.push({
        '@type': 'WebApplication',
        '@id': `${pageUrl}#app`,
        name: def.name,
        description: def.description,
        url: pageUrl,
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'All',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
        provider: localBusinessRef(),
        areaServed: alianteRef(),
      });
      break;
    case 'schools':
      nodes.push({
        '@type': 'ItemList',
        '@id': `${pageUrl}#schools`,
        name: 'Schools serving Aliante addresses',
        description:
          'Named schools mentioned on this page. Attendance boundaries must be verified with Clark County School District for a specific parcel.',
        numberOfItems: SCHOOLS.length,
        itemListElement: SCHOOLS.map((school, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: {
            '@type': ['EducationalOrganization', school.type],
            '@id': `${pageUrl}#school-${school.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
            name: school.name,
            areaServed: alianteRef(),
          },
        })),
      });
      break;
    case 'about':
      nodes.push({
        '@type': ['Person', 'RealEstateAgent'],
        '@id': graphIds.agent,
        name: siteConfig.agentName,
        url: pageUrl,
        telephone: siteConfig.phoneTel,
        email: siteConfig.email,
        jobTitle: 'Real Estate Agent',
        worksFor: publisherRef(),
      });
      break;
    case 'contact':
      nodes.push({
        '@type': ['LocalBusiness', 'RealEstateAgent'],
        '@id': graphIds.localBusiness,
        name: siteConfig.siteName,
        url: pageUrl,
        telephone: siteConfig.phoneTel,
        email: siteConfig.email,
        image: absoluteImageUrl(pageOgImage('/contact')),
        address: postalAddress(),
        geo: geoCoordinates(),
        hasMap: siteConfig.maps.placeUrl,
        priceRange: '$$',
      });
      break;
    case 'howto':
    case 'legal':
      break;
    default: {
      const _exhaustive: never = kind;
      return _exhaustive;
    }
  }

  return nodes;
}

function mainEntity(def: PageDefinition, pageUrl: string): JsonLdNode {
  if (def.neighborhoodSlug) {
    return { '@id': graphIds.neighborhood(def.neighborhoodSlug) };
  }
  if (def.builderSlug) {
    return { '@id': graphIds.builder(def.builderSlug) };
  }
  if (def.serviceSlug) {
    return { '@id': graphIds.service(def.serviceSlug) };
  }
  if (def.kind === 'about') {
    return { '@id': graphIds.agent };
  }
  if (def.kind === 'contact') {
    return { '@id': graphIds.localBusiness };
  }
  if (def.kind === 'dataset') {
    return { '@id': `${pageUrl}#dataset` };
  }
  if (def.kind === 'calculator') {
    return { '@id': `${pageUrl}#app` };
  }
  if (def.kind === 'schools') {
    return { '@id': `${pageUrl}#schools` };
  }
  if (def.howTo) {
    return { '@id': `${pageUrl}#howto` };
  }
  if (def.kind === 'legal') {
    return localBusinessRef();
  }
  return { '@id': `${pageUrl}#itemlist` };
}

function neighborhoodListItems() {
  return siteConfig.neighborhoods.map((neighborhood, index) => {
    const path =
      'path' in neighborhood && typeof neighborhood.path === 'string'
        ? neighborhood.path
        : `/neighborhoods/${neighborhood.slug}`;
    return {
      '@type': 'ListItem',
      position: index + 1,
      name: neighborhood.name,
      url: `${siteConfig.siteUrl}${path}`,
      item: { '@id': graphIds.neighborhood(neighborhood.slug) },
    };
  });
}

function builderListItems() {
  return siteConfig.builders.map((builder, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: builder.name,
    url: `${siteConfig.siteUrl}/builders/${builder.slug}`,
    item: { '@id': graphIds.builder(builder.slug) },
  }));
}

function buildCollectionList(def: PageDefinition, pageUrl: string, kind: PageKind): JsonLdNode {
  const useBuilders =
    kind === 'builder-hub' || def.path === '/new-construction' || kind === 'incentives';
  const useNeighborhoods =
    kind === 'neighborhood-hub' ||
    kind === 'neighborhood-compare' ||
    def.path === '/gated-communities' ||
    def.path === '/golf-homes' ||
    def.path === '/sun-city-aliante';
  const useLifestyle = kind === 'home' || kind === 'listings' || kind === 'search';

  const itemListElement = useBuilders
    ? builderListItems()
    : useNeighborhoods
      ? neighborhoodListItems()
      : useLifestyle
        ? lifestyleCategories.map((category, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: category.title,
            url: `${siteConfig.siteUrl}${category.href}`,
            item: {
              '@type': 'WebPage',
              '@id': graphIds.hubPage(category.href),
              name: category.title,
            },
          }))
        : siteConfig.hubPages.map((hub, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: hub.name,
            url: `${siteConfig.siteUrl}${hub.path}`,
            item: { '@id': graphIds.hubPage(hub.path) },
          }));

  return {
    '@type': 'ItemList',
    '@id': `${pageUrl}#itemlist`,
    name: def.name,
    numberOfItems: itemListElement.length,
    itemListElement,
  };
}

export function buildPageGraph(def: PageDefinition): JsonLdNode {
  const pageUrl = absoluteUrl(def.path);
  const faq = faqNode(def, pageUrl);
  const howTo = howToNode(def, pageUrl);
  const extras = extraNodes(def, pageUrl);
  const parts = [
    ...def.sections.map((section) => ({ '@id': `${pageUrl}#${section.id}` })),
    ...(faq ? [{ '@id': `${pageUrl}#faq-schema` }] : []),
    ...(howTo ? [{ '@id': `${pageUrl}#howto` }] : []),
  ];

  const webPage: JsonLdNode = {
    '@type': def.pageTypes.length === 1 ? def.pageTypes[0] : def.pageTypes,
    '@id': webpageId(def.path),
    url: pageUrl,
    name: def.name,
    headline: def.name,
    description: def.description,
    inLanguage: 'en-US',
    isPartOf: { '@id': graphIds.website },
    about: aboutRefs(def),
    mentions: mentionsRefs(def),
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: absoluteImageUrl(pageOgImage(def.path)),
      width: def.path === '/' ? 1200 : 1920,
      height: def.path === '/' ? 630 : 1080,
    },
    thumbnailUrl: absoluteImageUrl(pageOgImage(def.path)),
    publisher: publisherRef(),
    author: agentRef(),
    copyrightHolder: publisherRef(),
    speakable: speakableSpec(),
    breadcrumb: { '@id': `${pageUrl}#breadcrumb` },
    mainEntity: mainEntity(def, pageUrl),
    hasPart: parts,
    spatialCoverage: alianteRef(),
    contentLocation: alianteRef(),
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [
      webPage,
      ...sectionNodes(def, pageUrl),
      ...(howTo ? [howTo] : []),
      ...(faq ? [faq] : []),
      ...extras,
    ],
  };
}
