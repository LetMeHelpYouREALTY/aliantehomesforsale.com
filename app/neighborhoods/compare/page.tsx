import { neighborhoodCopy, uniquePageCopy } from '../../../lib/content/unique-pages';
import { pageMetadata } from '../../../lib/seo/page-metadata';
import NeighborhoodCards from '../../components/NeighborhoodCards';
import NeighborhoodComparison from '../../components/NeighborhoodComparison';
import NeighborhoodDetailContent from '../../components/NeighborhoodDetailContent';
import NeighborhoodsCTA from '../../components/NeighborhoodsCTA';
import NeighborhoodsHero from '../../components/NeighborhoodsHero';

const copy = uniquePageCopy(neighborhoodCopy, 'compare');

export const metadata = pageMetadata('/neighborhoods/compare', {
  title: copy.h1,
  description: copy.subtitle,
});

export default function Compare() {
  return (
    <main>
      <NeighborhoodsHero title={copy.h1} subtitle={copy.subtitle} />
      <NeighborhoodComparison />
      <NeighborhoodDetailContent slug="compare" />
      <NeighborhoodCards />
      <NeighborhoodsCTA />
    </main>
  );
}
