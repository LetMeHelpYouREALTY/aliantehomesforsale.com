import { neighborhoodCopy, uniquePageCopy } from '../../lib/content/unique-pages';
import { pageMetadata } from '../../lib/seo/page-metadata';
import CommunityAmenities from '../components/CommunityAmenities';
import ContextualLinks from '../components/ContextualLinks';
import NeighborhoodCards from '../components/NeighborhoodCards';
import NeighborhoodComparison from '../components/NeighborhoodComparison';
import NeighborhoodDetailContent from '../components/NeighborhoodDetailContent';
import NeighborhoodsCTA from '../components/NeighborhoodsCTA';
import NeighborhoodsHero from '../components/NeighborhoodsHero';

const copy = uniquePageCopy(neighborhoodCopy, 'hub');

export const metadata = pageMetadata('/neighborhoods', {
  title: copy.h1,
  description: copy.subtitle,
});

export default function Neighborhoods() {
  return (
    <main className="neighborhoods-page">
      <NeighborhoodsHero title={copy.h1} subtitle={copy.subtitle} />
      <NeighborhoodCards />
      <NeighborhoodDetailContent slug="hub" />
      <div className="px-4">
        <ContextualLinks variant="neighborhoods" />
      </div>
      <CommunityAmenities />
      <NeighborhoodComparison />
      <NeighborhoodsCTA />
    </main>
  );
}
