import type { Metadata } from 'next';
import { getPageDefinition } from '../schema';
import { siteConfig } from '../site-config';

/** Absolute canonical URL for a site path. */
export function canonicalUrl(path: string): string {
  if (path === '/') {
    return siteConfig.siteUrl;
  }
  return `${siteConfig.siteUrl}${path}`;
}

/**
 * Unique title, description, and canonical per Google's SEO starter guide.
 * Does not emit keywords meta — Google does not use it.
 * @see https://developers.google.com/search/docs/fundamentals/seo-starter-guide
 */
export function pageMetadata(
  path: string,
  overrides: Partial<Pick<Metadata, 'title' | 'description' | 'robots'>> = {}
): Metadata {
  const def = getPageDefinition(path);
  const title = overrides.title ?? def?.name ?? siteConfig.defaultTitle;
  const description = overrides.description ?? def?.description ?? siteConfig.defaultDescription;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl(path),
    },
    openGraph: {
      title: typeof title === 'string' ? title : siteConfig.defaultTitle,
      description,
      url: canonicalUrl(path),
      siteName: siteConfig.siteName,
      locale: 'en_US',
      type: 'website',
    },
    ...(overrides.robots ? { robots: overrides.robots } : {}),
  };
}
