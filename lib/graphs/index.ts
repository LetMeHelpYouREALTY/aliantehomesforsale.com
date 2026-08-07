import { buildAgentGraph } from './agent-graph';
import { buildContentGraph } from './content-graph';
import { buildKnowledgeGraph } from './knowledge-graph';

export type JsonLdGraph = {
  '@context': 'https://schema.org';
  '@graph': Record<string, unknown>[];
};

/**
 * Combined knowledge + content + agent graphs for Aliante SEO / AEO / GEO.
 * Emitted once sitewide as JSON-LD @graph.
 */
export function buildAlianteEntityGraph(): JsonLdGraph {
  return {
    '@context': 'https://schema.org',
    '@graph': [...buildKnowledgeGraph(), ...buildAgentGraph(), ...buildContentGraph()],
  };
}

export { buildAgentGraph, buildContentGraph, buildKnowledgeGraph };
export { graphIds } from './ids';
