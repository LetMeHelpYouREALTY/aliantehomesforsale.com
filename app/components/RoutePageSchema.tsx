'use client';

import { usePathname } from 'next/navigation';
import { buildWebPageJsonLd } from '../../lib/page-seo';

/**
 * Per-route WebPage + ScheduleAction JSON-LD.
 * Google (2026): structured data is for rich results and must match visible page content;
 * it is not a special AEO/GEO requirement.
 * @see https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
 */
export default function RoutePageSchema() {
  const pathname = usePathname() || '/';
  const data = buildWebPageJsonLd(pathname);

  return (
    <script
      type="application/ld+json"
      id="aliante-page-schema"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
