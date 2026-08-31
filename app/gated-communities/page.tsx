import type { Metadata } from 'next';
import EnhancedFeaturedProperties from '../components/EnhancedFeaturedProperties';
import GatedCommunitiesContent from '../components/GatedCommunitiesContent';
import HomesCTA from '../components/HomesCTA';
import NeighborhoodCards from '../components/NeighborhoodCards';
import NeighborhoodsHero from '../components/NeighborhoodsHero';

export const metadata: Metadata = {
  title: 'Gated Communities in Las Vegas | Aliante North Las Vegas Homes',
  description:
    'Gated communities in Las Vegas inside Aliante 89084: Club Aliante, The Prominence, Courts at Aliante, Terrasini, and more. Call (702) 707-7273 for live MLS homes for sale.',
  keywords:
    'gated community las vegas, gated communities in las vegas, gated communities las vegas nv, aliante gated',
  alternates: {
    canonical: 'https://www.aliantehomesforsale.com/gated-communities',
  },
};

export default function GatedCommunities() {
  return (
    <main>
      <NeighborhoodsHero
        title="Gated Communities in Las Vegas | Aliante Homes for Sale, 89084"
        subtitle="Controlled-access villages inside the Aliante master plan. Call (702) 707-7273 to tour current listings."
      />
      <GatedCommunitiesContent />
      <NeighborhoodCards />
      <EnhancedFeaturedProperties />
      <HomesCTA />
    </main>
  );
}
