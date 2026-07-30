/**
 * Fetch and parse Simplifying the Market (KCM) RSS feed for the blog section.
 * Extracts title, link, plain-text excerpt, and first image URL per item.
 * Images are from files.keepingcurrentmatters.com — ensure CSP img-src allows that host.
 */

import { siteConfig } from './site-config';

export type KcmFeedItem = {
  title: string;
  link: string;
  description: string;
  image?: string;
};

const CACHE_MAX_AGE = 3600; // 1 hour

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 160);
}

function extractFirstImageUrl(html: string): string | undefined {
  const imgMatch = html.match(/<img[^>]+src=["']([^"']+)["']/i);
  return imgMatch?.[1]?.trim();
}

export async function getKcmFeedItems(limit = 3): Promise<KcmFeedItem[]> {
  const url = siteConfig.kcmFeedUrl;
  const res = await fetch(url, {
    next: { revalidate: CACHE_MAX_AGE },
    headers: { Accept: 'application/rss+xml, application/xml, text/xml' },
  });
  if (!res.ok) return [];
  const xml = await res.text();

  const items: KcmFeedItem[] = [];
  const itemRegex = /<item>([\s\S]*?)<\/item>/gi;
  let match: RegExpExecArray | null;
  while ((match = itemRegex.exec(xml)) !== null && items.length < limit) {
    const block = match[1] ?? '';
    const titleMatch = block.match(/<title>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/title>/i);
    const linkMatch = block.match(/<link>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/link>/i);
    const descMatch = block.match(
      /<description>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/description>/i
    );
    const contentMatch = block.match(
      /<content:encoded>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/content:encoded>/i
    );
    const rawDesc = descMatch?.[1] ?? '';
    const rawContent = contentMatch?.[1] ?? '';
    const image = extractFirstImageUrl(rawDesc) || extractFirstImageUrl(rawContent);
    const textForExcerpt = rawDesc || rawContent;
    const item: KcmFeedItem = {
      title: titleMatch?.[1]?.replace(/<[^>]+>/g, '').trim() ?? 'Untitled',
      link: linkMatch?.[1]?.trim() ?? '',
      description: stripHtml(textForExcerpt),
    };
    if (image) item.image = image;
    items.push(item);
  }
  return items;
}
