import { buildAlianteEntityGraph } from '../../lib/graphs';

/**
 * Sitewide knowledge + content + agent JSON-LD @graph for SEO / AEO / GEO.
 */
export default function EntityGraphSchema() {
  const graph = buildAlianteEntityGraph();

  return (
    <script
      type="application/ld+json"
      // Stable id so React doesn't remount on navigation
      id="aliante-entity-graph"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
