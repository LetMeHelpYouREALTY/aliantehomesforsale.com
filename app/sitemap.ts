import type { MetadataRoute } from 'next';
import type { PageKind } from '../lib/schema';
import { pageCatalog } from '../lib/schema';
import { siteConfig } from '../lib/site-config';

/** Duplicate of /sun-city-aliante; noindex + canonical, omit from sitemap. */
const SITEMAP_OMIT = new Set(['/neighborhoods/sun-city']);

function sitemapMeta(kind: PageKind): {
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]['changeFrequency']>;
  priority: number;
} {
  switch (kind) {
    case 'home':
      return { changeFrequency: 'daily', priority: 1 };
    case 'listings':
    case 'search':
      return { changeFrequency: 'daily', priority: 0.9 };
    case 'dataset':
      return { changeFrequency: 'daily', priority: 0.8 };
    case 'collection':
    case 'neighborhood-hub':
    case 'builder-hub':
    case 'incentives':
    case 'contact':
      return { changeFrequency: 'weekly', priority: 0.8 };
    case 'neighborhood':
    case 'neighborhood-compare':
    case 'builder':
    case 'about':
      return { changeFrequency: 'weekly', priority: 0.7 };
    case 'howto':
    case 'service':
    case 'calculator':
    case 'schools':
      return { changeFrequency: 'monthly', priority: 0.6 };
    case 'legal':
      return { changeFrequency: 'yearly', priority: 0.3 };
    default: {
      const _exhaustive: never = kind;
      return _exhaustive;
    }
  }
}

function sitemapUrl(path: string): string {
  if (path === '/') {
    return siteConfig.siteUrl;
  }
  return `${siteConfig.siteUrl}${path}`;
}

/**
 * Sitemap from the page catalog so Google gets one URL per piece of content.
 * @see https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return pageCatalog
    .filter((page) => !SITEMAP_OMIT.has(page.path))
    .map((page) => {
      const { changeFrequency, priority } = sitemapMeta(page.kind);
      return {
        url: sitemapUrl(page.path),
        lastModified,
        changeFrequency,
        priority,
      };
    });
}
