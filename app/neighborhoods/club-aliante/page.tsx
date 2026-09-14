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
  title: 'Club Aliante Homes for Sale | Gated Golf Village, North Las Vegas',
  description:
    'Club Aliante is the gated village along Aliante Golf Club in North Las Vegas 89084. Fairway and interior lots. Independent realtor Dr. Jan Duffy. Call (702) 707-7273.',
  path: '/neighborhoods/club-aliante',
  keywords:
    'club aliante, club aliante homes for sale, club aliante north las vegas, aliante golf club, golf homes aliante',
});

export default function ClubAliante() {
  return (
    <main>
      <NeighborhoodsHero
        title="Club Aliante Homes for Sale | Gated Golf Village, North Las Vegas"
        subtitle="Gated village next to Aliante Golf Club in ZIP 89084. Call (702) 707-7273 to tour live listings."
        image={pageHero('/neighborhoods/club-aliante')}
      />
      <NeighborhoodDetailContent village="club-aliante" />
      <CommunityAmenities />
      <EnhancedFeaturedProperties />
      <NeighborhoodCards />
      <PageFAQ path="/neighborhoods/club-aliante" title="Club Aliante village FAQ" />
      <NeighborhoodsCTA />
    </main>
  );
}
