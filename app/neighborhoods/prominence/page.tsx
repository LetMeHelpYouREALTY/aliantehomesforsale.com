import { neighborhoodCopy, uniquePageCopy } from '../../../lib/content/unique-pages';
import { pageMetadata } from '../../../lib/seo/page-metadata';
import CommunityAmenities from '../../components/CommunityAmenities';
import EnhancedFeaturedProperties from '../../components/EnhancedFeaturedProperties';
import NeighborhoodCards from '../../components/NeighborhoodCards';
import NeighborhoodDetailContent from '../../components/NeighborhoodDetailContent';
import NeighborhoodsCTA from '../../components/NeighborhoodsCTA';
import NeighborhoodsHero from '../../components/NeighborhoodsHero';

const copy = uniquePageCopy(neighborhoodCopy, 'prominence');

export const metadata = pageMetadata('/neighborhoods/prominence', {
  title: copy.h1,
  description: copy.subtitle,
});

export default function Prominence() {
  return (
    <main>
      <NeighborhoodsHero title={copy.h1} subtitle={copy.subtitle} image={copy.image} />
      <EnhancedFeaturedProperties />
      <NeighborhoodDetailContent slug="prominence" />
      <CommunityAmenities />
      <NeighborhoodCards />
      <NeighborhoodsCTA />
    </main>
  );
}
