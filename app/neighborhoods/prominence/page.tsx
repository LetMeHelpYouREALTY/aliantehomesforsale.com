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
  title: 'The Prominence Aliante | Gated Homes North Las Vegas 89084',
  description:
    'The Prominence gated village in Aliante, North Las Vegas 89084. Private streets and controlled entry. Confirm live MLS listings. Call (702) 707-7273.',
  path: '/neighborhoods/prominence',
  keywords: 'the prominence aliante, gated homes aliante, prominence north las vegas 89084',
});

export default function Prominence() {
  return (
    <main>
      <NeighborhoodsHero
        title="The Prominence Aliante | Gated Homes North Las Vegas 89084"
        subtitle="Controlled-access village inside the Aliante master plan. Confirm live MLS. Call (702) 707-7273."
        image={pageHero('/neighborhoods/prominence')}
      />
      <EnhancedFeaturedProperties />
      <CommunityAmenities />
      <NeighborhoodDetailContent village="prominence" />
      <NeighborhoodCards />
      <PageFAQ path="/neighborhoods/prominence" title="The Prominence FAQ" />
      <NeighborhoodsCTA />
    </main>
  );
}
