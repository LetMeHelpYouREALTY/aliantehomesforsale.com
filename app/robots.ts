import type { MetadataRoute } from 'next';
import { siteConfig } from '../lib/site-config';

/**
 * robots.txt for Google / crawlers.
 * Do NOT disallow /_next/ — Google needs /_next/static and /_next/image to render pages.
 * /index is a Next.js alias of /; it 308s to / and will show in GSC as “Page with redirect”.
 * Inspect https://www.aliantehomesforsale.com/ — do not validate the /index exclusion.
 * @see https://developers.google.com/search/docs/crawling-indexing/robots/intro
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
