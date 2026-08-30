import type { Metadata } from 'next';
import CommunityAmenities from '../../components/CommunityAmenities';
import EnhancedFeaturedProperties from '../../components/EnhancedFeaturedProperties';
import NeighborhoodCards from '../../components/NeighborhoodCards';
import NeighborhoodDetailContent from '../../components/NeighborhoodDetailContent';
import NeighborhoodsCTA from '../../components/NeighborhoodsCTA';
import NeighborhoodsHero from '../../components/NeighborhoodsHero';

export const metadata: Metadata = {
  title: 'Desert Willows Aliante Homes For Sale',
  description:
    'Desert Willows homes in Aliante, North Las Vegas 89084. Parks, community pools, and a mix of floor plans.',
  alternates: { canonical: 'https://www.aliantehomesforsale.com/neighborhoods/desert-willows' },
};

export default function DesertWillows() {
  return (
    <main>
      <NeighborhoodsHero />
      <EnhancedFeaturedProperties />
      <CommunityAmenities />
      <NeighborhoodDetailContent />
      <NeighborhoodCards />
      <NeighborhoodsCTA />
    </main>
  );
}
