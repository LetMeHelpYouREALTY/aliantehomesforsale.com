import type { MetadataRoute } from 'next';

/**
 * Robots.txt Configuration - 2026 SEO/AEO Best Practices
 *
 * Optimized for Answer Engine Optimization (AEO) and traditional SEO:
 * - AI crawlers: ChatGPT, Claude, Perplexity, Google AI (for AEO)
 * - Search engines: Google, Bing, DuckDuckGo
 * - Social media: Facebook, Twitter, LinkedIn crawlers
 *
 * Research: 83% of AI citations come from pages updated in last 12 months
 * Source: https://cxl.com/blog/answer-engine-optimization-aeo-the-comprehensive-guide/
 */

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.aliantehomesforsale.com';

  return {
    rules: [
      {
        // Default rule for all crawlers
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
          '/private/',
          '*.json$',
        ],
      },
      {
        // AI Crawlers for AEO (Answer Engine Optimization)
        // Critical for ChatGPT, Claude, Perplexity citations
        userAgent: [
          'GPTBot',          // OpenAI ChatGPT
          'ChatGPT-User',    // OpenAI ChatGPT user agent
          'CCBot',           // Common Crawl (used by many AI engines)
          'anthropic-ai',    // Anthropic Claude
          'Claude-Web',      // Claude web crawler
          'PerplexityBot',   // Perplexity AI
          'Google-Extended', // Google Bard/Gemini AI
        ],
        allow: '/',
        crawlDelay: 1, // Respectful crawl rate for AI bots
      },
      {
        // Googlebot - Primary search engine
        userAgent: 'Googlebot',
        allow: '/',
      },
      {
        // Googlebot-Image - Image search
        userAgent: 'Googlebot-Image',
        allow: '/',
      },
      {
        // Bingbot - Microsoft Bing search
        userAgent: 'Bingbot',
        allow: '/',
      },
      {
        // Social media crawlers for Open Graph
        userAgent: [
          'facebookexternalhit', // Facebook
          'Twitterbot',          // Twitter/X
          'LinkedInBot',         // LinkedIn
        ],
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}

