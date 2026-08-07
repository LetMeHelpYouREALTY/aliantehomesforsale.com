import type { Metadata } from 'next';
import NeighborhoodCards from '../../components/NeighborhoodCards';
import NeighborhoodComparison from '../../components/NeighborhoodComparison';
import NeighborhoodDetailContent from '../../components/NeighborhoodDetailContent';
import NeighborhoodsCTA from '../../components/NeighborhoodsCTA';
import NeighborhoodsHero from '../../components/NeighborhoodsHero';

export const metadata: Metadata = {
  title: 'Compare Aliante Neighborhoods - Side by Side Analysis',
  description:
    'Compare all Aliante neighborhoods side by side. Prices, amenities, schools, and features.',
  alternates: { canonical: 'https://www.aliantehomesforsale.com/neighborhoods/compare' },
};

export default function Compare() {
  return (
    <main>
      <NeighborhoodsHero />
      <NeighborhoodComparison />
      <NeighborhoodDetailContent />
      <NeighborhoodCards />
      <NeighborhoodsCTA />
    </main>
  );
}
