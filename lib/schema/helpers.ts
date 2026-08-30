import { graphIds } from '../graphs/ids';
import { siteConfig } from '../site-config';
import type { JsonLdNode, PageDefinition } from './types';

export function absoluteUrl(path: string): string {
  if (path === '/') {
    return siteConfig.siteUrl;
  }
  return `${siteConfig.siteUrl}${path}`;
}

export function webpageId(path: string): string {
  return graphIds.hubPage(path);
}

export function postalAddress(): JsonLdNode {
  return {
    '@type': 'PostalAddress',
    streetAddress: siteConfig.address.streetAddress,
    addressLocality: siteConfig.address.addressLocality,
    addressRegion: siteConfig.address.addressRegion,
    postalCode: siteConfig.address.postalCode,
    addressCountry: siteConfig.address.addressCountry,
  };
}

export function geoCoordinates(): JsonLdNode {
  return {
    '@type': 'GeoCoordinates',
    latitude: siteConfig.geo.latitude,
    longitude: siteConfig.geo.longitude,
  };
}

export function speakableSpec(): JsonLdNode {
  return {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2', '.speakable'],
    xpath: ['/html/head/title', '/html/body//h1', '/html/body//h2'],
  };
}

export function publisherRef(): JsonLdNode {
  return { '@id': graphIds.organization };
}

export function agentRef(): JsonLdNode {
  return { '@id': graphIds.agent };
}

export function alianteRef(): JsonLdNode {
  return { '@id': graphIds.aliantePlace };
}

export function localBusinessRef(): JsonLdNode {
  return { '@id': graphIds.localBusiness };
}

export function aboutRefs(def: PageDefinition): JsonLdNode[] {
  const about: JsonLdNode[] = [alianteRef(), localBusinessRef()];
  if (def.neighborhoodSlug) {
    about.push({ '@id': graphIds.neighborhood(def.neighborhoodSlug) });
  }
  if (def.builderSlug) {
    about.push({ '@id': graphIds.builder(def.builderSlug) });
  }
  if (def.serviceSlug) {
    about.push({ '@id': graphIds.service(def.serviceSlug) });
  }
  return about;
}

export function mentionsRefs(def: PageDefinition): JsonLdNode[] {
  const mentions: JsonLdNode[] = [agentRef()];
  if (def.kind === 'home' || def.kind === 'neighborhood-hub' || def.kind === 'listings') {
    for (const n of siteConfig.neighborhoods) {
      mentions.push({ '@id': graphIds.neighborhood(n.slug) });
    }
  }
  if (def.kind === 'builder-hub' || def.kind === 'listings' || def.path === '/new-construction') {
    for (const b of siteConfig.builders) {
      mentions.push({ '@id': graphIds.builder(b.slug) });
    }
  }
  return mentions;
}

export function normalizePathname(pathname: string): string {
  if (!pathname || pathname === '') {
    return '/';
  }
  if (pathname.length > 1 && pathname.endsWith('/')) {
    return pathname.slice(0, -1);
  }
  return pathname;
}
