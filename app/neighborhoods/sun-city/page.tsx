import { neighborhoodCopy, uniquePageCopy } from '../../../lib/content/unique-pages';
import { pageMetadata } from '../../../lib/seo/page-metadata';
import CommunityAmenities from '../../components/CommunityAmenities';
import EnhancedFeaturedProperties from '../../components/EnhancedFeaturedProperties';
import NeighborhoodCards from '../../components/NeighborhoodCards';
import NeighborhoodDetailContent from '../../components/NeighborhoodDetailContent';
import NeighborhoodsCTA from '../../components/NeighborhoodsCTA';
import NeighborhoodsHero from '../../components/NeighborhoodsHero';
import SunCityContent from '../../components/SunCityContent';

const copy = uniquePageCopy(neighborhoodCopy, 'sun-city');

export const metadata = pageMetadata('/sun-city-aliante', {
  title: copy.h1,
  description: copy.subtitle,
  robots: { index: false, follow: true },
});

export default function SunCity() {
  return (
    <main>
      <NeighborhoodsHero title={copy.h1} subtitle={copy.subtitle} />
      <NeighborhoodDetailContent slug="sun-city" />
      <SunCityContent />
      <CommunityAmenities />
      <EnhancedFeaturedProperties />
      <NeighborhoodCards />
      <NeighborhoodsCTA />
    </main>
  );
}
