import type { Metadata } from 'next';
import { pageOgImage } from '../content/site-images';
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
  const og = pageOgImage(path);
  const isHomeOg = og.src === '/og-image.jpg';
  const resolvedTitle = typeof title === 'string' ? title : siteConfig.defaultTitle;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl(path),
    },
    openGraph: {
      title: resolvedTitle,
      description,
      url: canonicalUrl(path),
      siteName: siteConfig.siteName,
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: og.src,
          width: isHomeOg ? 1200 : 1920,
          height: isHomeOg ? 630 : 1080,
          alt: og.alt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: resolvedTitle,
      description,
      images: [og.src],
    },
    ...(overrides.robots ? { robots: overrides.robots } : {}),
  };
}
