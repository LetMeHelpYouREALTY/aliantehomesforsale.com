import { pageHero } from '../../../lib/content/site-images';
import { pageMetadata } from '../../../lib/seo-utils';
import CommunityAmenities from '../../components/CommunityAmenities';
import EnhancedFeaturedProperties from '../../components/EnhancedFeaturedProperties';
import NeighborhoodCards from '../../components/NeighborhoodCards';
import NeighborhoodDetailContent from '../../components/NeighborhoodDetailContent';
import NeighborhoodsCTA from '../../components/NeighborhoodsCTA';
import NeighborhoodsHero from '../../components/NeighborhoodsHero';
import PageFAQ from '../../components/PageFAQ';

export const metadata = pageMetadata({
  title: 'Desert Willows Aliante | Homes for Sale North Las Vegas 89084',
  description:
    'Desert Willows is an open-access Aliante village in North Las Vegas 89084 with parks and community pools. Confirm live MLS listings. Call (702) 707-7273.',
  path: '/neighborhoods/desert-willows',
  keywords: 'desert willows aliante, desert willows north las vegas 89084',
});

export default function DesertWillows() {
  return (
    <main>
      <NeighborhoodsHero
        title="Desert Willows Aliante | Homes for Sale North Las Vegas 89084"
        subtitle="Open-access village inside the Aliante master plan. Confirm live MLS. Call (702) 707-7273."
        image={pageHero('/neighborhoods/desert-willows')}
      />
      <EnhancedFeaturedProperties />
      <CommunityAmenities />
      <NeighborhoodDetailContent village="desert-willows" />
      <NeighborhoodCards />
      <PageFAQ path="/neighborhoods/desert-willows" title="Desert Willows FAQ" />
      <NeighborhoodsCTA />
    </main>
  );
}
