import { siteConfig } from './site-config';

/** Calendar date of last meaningful content change — not the request time. */
export const sitemapLastmod = '2026-09-01';

export type SitemapChangefreq = 'daily' | 'weekly' | 'monthly' | 'yearly';

export type SitemapEntry = {
  path: string;
  changefreq: SitemapChangefreq;
  priority: number;
};

/**
 * Canonical public URLs for /sitemap.xml.
 * Omits /neighborhoods/sun-city (308 → /sun-city-aliante, noindex stub).
 */
export function sitemapEntries(): SitemapEntry[] {
  const builders: SitemapEntry[] = [
    { path: '/builders', changefreq: 'weekly', priority: 0.8 },
    ...siteConfig.builders.map((builder) => ({
      path: `/builders/${builder.slug}`,
      changefreq: 'weekly' as const,
      priority: 0.7,
    })),
    { path: '/builders/incentives', changefreq: 'weekly', priority: 0.8 },
  ];

  const villages: SitemapEntry[] = siteConfig.neighborhoods
    .filter((neighborhood) => neighborhood.slug !== 'sun-city')
    .map((neighborhood) => ({
      path: `/neighborhoods/${neighborhood.slug}`,
      changefreq: 'weekly' as const,
      priority: 0.7,
    }));

  return [
    { path: '', changefreq: 'daily', priority: 1 },
    { path: '/homes-for-sale', changefreq: 'daily', priority: 0.9 },
    { path: '/search', changefreq: 'daily', priority: 0.9 },
    { path: '/new-construction', changefreq: 'weekly', priority: 0.9 },
    ...builders,
    { path: '/neighborhoods', changefreq: 'weekly', priority: 0.8 },
    ...villages,
    { path: '/neighborhoods/compare', changefreq: 'weekly', priority: 0.6 },
    { path: '/gated-communities', changefreq: 'weekly', priority: 0.7 },
    { path: '/golf-homes', changefreq: 'weekly', priority: 0.7 },
    { path: '/sun-city-aliante', changefreq: 'weekly', priority: 0.7 },
    { path: '/market-report', changefreq: 'daily', priority: 0.8 },
    { path: '/home-valuation', changefreq: 'weekly', priority: 0.8 },
    { path: '/buyer-guide', changefreq: 'monthly', priority: 0.6 },
    { path: '/seller-checklist', changefreq: 'monthly', priority: 0.6 },
    { path: '/property-management', changefreq: 'monthly', priority: 0.7 },
    { path: '/mortgage-calculator', changefreq: 'monthly', priority: 0.6 },
    { path: '/investment-analysis', changefreq: 'monthly', priority: 0.6 },
    { path: '/schools', changefreq: 'monthly', priority: 0.6 },
    { path: '/about', changefreq: 'monthly', priority: 0.7 },
    { path: '/contact', changefreq: 'monthly', priority: 0.8 },
    { path: '/privacy-policy', changefreq: 'yearly', priority: 0.3 },
    { path: '/terms-of-service', changefreq: 'yearly', priority: 0.3 },
    { path: '/accessibility', changefreq: 'yearly', priority: 0.3 },
    { path: '/fair-housing', changefreq: 'yearly', priority: 0.3 },
  ];
}

function formatPriority(priority: number): string {
  return priority.toFixed(1);
}

export function sitemapXml(): string {
  const stylesheet = '/sitemap.xsl';
  const urls = sitemapEntries()
    .map((entry) => {
      const loc = `${siteConfig.siteUrl}${entry.path}`;
      return `  <url>
    <loc>${loc}</loc>
    <lastmod>${sitemapLastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${formatPriority(entry.priority)}</priority>
  </url>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="${stylesheet}"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}
