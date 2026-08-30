import { neighborhoodCopy, uniquePageCopy } from '../../../lib/content/unique-pages';
import { pageMetadata } from '../../../lib/seo/page-metadata';
import CommunityAmenities from '../../components/CommunityAmenities';
import EnhancedFeaturedProperties from '../../components/EnhancedFeaturedProperties';
import GolfHomesContent from '../../components/GolfHomesContent';
import NeighborhoodCards from '../../components/NeighborhoodCards';
import NeighborhoodDetailContent from '../../components/NeighborhoodDetailContent';
import NeighborhoodsCTA from '../../components/NeighborhoodsCTA';
import NeighborhoodsHero from '../../components/NeighborhoodsHero';

const copy = uniquePageCopy(neighborhoodCopy, 'club-aliante');

export const metadata = pageMetadata('/neighborhoods/club-aliante', {
  title: copy.h1,
  description: copy.subtitle,
});

export default function ClubAliante() {
  return (
    <main>
      <NeighborhoodsHero title={copy.h1} subtitle={copy.subtitle} />
      <NeighborhoodDetailContent slug="club-aliante" />
      <GolfHomesContent />
      <CommunityAmenities />
      <EnhancedFeaturedProperties />
      <NeighborhoodCards />
      <NeighborhoodsCTA />
    </main>
  );
}
