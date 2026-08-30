import type { Metadata } from 'next';
import EnhancedFeaturedProperties from '../../components/EnhancedFeaturedProperties';
import NeighborhoodCards from '../../components/NeighborhoodCards';
import NeighborhoodDetailContent from '../../components/NeighborhoodDetailContent';
import NeighborhoodsCTA from '../../components/NeighborhoodsCTA';
import NeighborhoodsHero from '../../components/NeighborhoodsHero';

export const metadata: Metadata = {
  title: 'The Paseos Aliante Homes For Sale',
  description:
    'The Paseos gated community in Aliante with resort-style amenities and a range of home sizes. North Las Vegas 89084.',
  alternates: { canonical: 'https://www.aliantehomesforsale.com/neighborhoods/paseos' },
};

export default function Paseos() {
  return (
    <main>
      <NeighborhoodsHero />
      <EnhancedFeaturedProperties />
      <NeighborhoodDetailContent />
      <NeighborhoodCards />
      <NeighborhoodsCTA />
    </main>
  );
}
