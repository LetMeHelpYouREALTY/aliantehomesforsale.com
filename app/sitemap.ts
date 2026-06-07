import type { MetadataRoute } from 'next';

/**
 * Dynamic Sitemap Generator - 2026 SEO/AEO Best Practices
 *
 * Critical for:
 * - Traditional SEO: Google, Bing indexing
 * - AEO (Answer Engine Optimization): AI crawler discovery
 * - Freshness signals: 83% of AI citations from pages updated within 12 months
 *
 * Best Practices Applied:
 * - Priority scale: 1.0 (homepage) to 0.3 (legal pages)
 * - Change frequency: daily (listings) to yearly (legal)
 * - LastModified dates: Fresh content signals for AI engines
 *
 * Sources:
 * - https://www.frase.io/blog/what-is-answer-engine-optimization
 * - https://www.searchscaleai.com/blog/local-seo-guide-rank-google-maps-2026/
 */

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.aliantehomesforsale.com';
  const currentDate = new Date();

  // Stagger dates slightly for realism (content not all updated same day)
  const recentDate = new Date(currentDate);
  recentDate.setDate(recentDate.getDate() - 2);

  const weeklyDate = new Date(currentDate);
  weeklyDate.setDate(weeklyDate.getDate() - 7);

  const monthlyDate = new Date(currentDate);
  monthlyDate.setMonth(monthlyDate.getMonth() - 1);
  
  // Core pages - highest priority, updated frequently
  const corePages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/homes-for-sale`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/search`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/new-construction`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];

  // Builder pages - high priority
  const builderPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/builders`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/builders/lennar`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/builders/dr-horton`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/builders/tri-pointe`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/builders/del-webb`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/builders/toll-brothers`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/builders/richmond-american`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/builders/incentives`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];

  // Neighborhood pages - high priority for local SEO/GEO
  const neighborhoodPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/neighborhoods`,
      lastModified: recentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/neighborhoods/prominence`,
      lastModified: weeklyDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/neighborhoods/desert-willows`,
      lastModified: weeklyDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/neighborhoods/club-aliante`,
      lastModified: weeklyDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/neighborhoods/paseos`,
      lastModified: weeklyDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/neighborhoods/sun-city`,
      lastModified: weeklyDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/neighborhoods/tule-springs`,
      lastModified: weeklyDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/neighborhoods/compare`,
      lastModified: monthlyDate,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
  ];

  // Property type pages
  const propertyPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/gated-communities`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/golf-homes`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/sun-city-aliante`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
  ];

  // Resource pages
  const resourcePages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/market-report`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/buyer-guide`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/seller-checklist`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/home-valuation`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/mortgage-calculator`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/investment-analysis`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/schools`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ];

  // Company pages
  const companyPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  // Legal pages
  const legalPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/accessibility`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/fair-housing`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  return [
    ...corePages,
    ...builderPages,
    ...neighborhoodPages,
    ...propertyPages,
    ...resourcePages,
    ...companyPages,
    ...legalPages,
  ];
}

