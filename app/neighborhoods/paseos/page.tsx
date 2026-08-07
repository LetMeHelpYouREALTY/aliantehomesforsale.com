import type { Metadata } from 'next';
import EnhancedFeaturedProperties from '../../components/EnhancedFeaturedProperties';
import NeighborhoodCards from '../../components/NeighborhoodCards';
import NeighborhoodDetailContent from '../../components/NeighborhoodDetailContent';
import NeighborhoodsCTA from '../../components/NeighborhoodsCTA';
import NeighborhoodsHero from '../../components/NeighborhoodsHero';

export const metadata: Metadata = {
  title: 'The Paseos Aliante - Affordable Family Homes',
  description:
    'The Paseos affordable homes in Aliante. Quality homes for first-time buyers and families. $300K-$500K.',
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
