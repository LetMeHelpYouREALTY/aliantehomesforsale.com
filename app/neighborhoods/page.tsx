import type { Metadata } from 'next';
import CommunityAmenities from '../components/CommunityAmenities';
import ContextualLinks from '../components/ContextualLinks';
import NeighborhoodCards from '../components/NeighborhoodCards';
import NeighborhoodComparison from '../components/NeighborhoodComparison';
import NeighborhoodsCTA from '../components/NeighborhoodsCTA';
import NeighborhoodsHero from '../components/NeighborhoodsHero';

export const metadata: Metadata = {
  title: 'Aliante Neighborhoods Guide | North Las Vegas Communities',
  description:
    'Explore Aliante neighborhoods: The Prominence, Desert Willows, Club Aliante, The Paseos, Tule Springs, and Sun City Aliante. Amenities, HOAs, and housing mix — not school-quality claims.',
  alternates: {
    canonical: 'https://www.aliantehomesforsale.com/neighborhoods',
  },
};

export default function Neighborhoods() {
  return (
    <main className="neighborhoods-page">
      <NeighborhoodsHero />
      <NeighborhoodCards />
      <div className="px-4">
        <ContextualLinks variant="neighborhoods" />
      </div>
      <CommunityAmenities />
      <NeighborhoodComparison />
      <NeighborhoodsCTA />
    </main>
  );
}
