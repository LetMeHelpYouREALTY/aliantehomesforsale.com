import { neighborhoodCopy, uniquePageCopy } from '../../../lib/content/unique-pages';
import { pageMetadata } from '../../../lib/seo/page-metadata';
import NeighborhoodCards from '../../components/NeighborhoodCards';
import NeighborhoodDetailContent from '../../components/NeighborhoodDetailContent';
import NeighborhoodsCTA from '../../components/NeighborhoodsCTA';
import NeighborhoodsHero from '../../components/NeighborhoodsHero';

const copy = uniquePageCopy(neighborhoodCopy, 'tule-springs');

export const metadata = pageMetadata('/neighborhoods/tule-springs', {
  title: copy.h1,
  description: copy.subtitle,
});

export default function TuleSprings() {
  return (
    <main>
      <NeighborhoodsHero title={copy.h1} subtitle={copy.subtitle} />
      <NeighborhoodDetailContent slug="tule-springs" />
      <NeighborhoodCards />
      <NeighborhoodsCTA />
    </main>
  );
}
