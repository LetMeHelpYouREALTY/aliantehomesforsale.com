import { graphIds } from '../../lib/graphs/ids';
import { type SiteNeighborhood, siteConfig } from '../../lib/site-config';

interface NeighborhoodPlaceSchemaProps {
  slug: SiteNeighborhood['slug'];
  /** Must be copy that is visible on the page. */
  description: string;
  containedInPlaceId?: string;
}

/**
 * Reuses the sitewide neighborhood Place @id so this block merges with
 * EntityGraphSchema instead of declaring a second entity.
 */
export default function NeighborhoodPlaceSchema({
  slug,
  description,
  containedInPlaceId = graphIds.aliantePlace,
}: NeighborhoodPlaceSchemaProps) {
  const neighborhood = siteConfig.neighborhoods.find((n) => n.slug === slug);
  if (!neighborhood) return null;
  const path =
    'path' in neighborhood && typeof neighborhood.path === 'string'
      ? neighborhood.path
      : `/neighborhoods/${neighborhood.slug}`;

  const placeSchema = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    '@id': graphIds.neighborhood(neighborhood.slug),
    name: neighborhood.name,
    description,
    url: `${siteConfig.siteUrl}${path}`,
    containedInPlace: { '@id': containedInPlaceId },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(placeSchema) }}
    />
  );
}
