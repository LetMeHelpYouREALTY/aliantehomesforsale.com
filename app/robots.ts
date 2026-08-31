import type { MetadataRoute } from 'next';
import { siteConfig } from '../lib/site-config';

/**
 * robots.txt for Google / crawlers.
 * Do NOT disallow /_next/ — Google needs /_next/static and /_next/image to render pages.
 * @see https://developers.google.com/search/docs/crawling-indexing/robots/intro
 * Canonical host is www. Apex and HTTP URLs 308 to www and will appear in Search Console
 * as “Page with redirect” — that is expected; those URLs must not be indexed.
 * Inspect https://www.aliantehomesforsale.com/ instead of validating the redirect sources.
 * @see https://support.google.com/webmasters/answer/7440203
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteConfig.siteUrl;

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      {
        userAgent: 'Googlebot-Image',
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
