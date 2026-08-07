import type { Metadata } from 'next';
import EnhancedFeaturedProperties from '../components/EnhancedFeaturedProperties';
import EnhancedHero from '../components/EnhancedHero';
import GatedCommunitiesContent from '../components/GatedCommunitiesContent';
import HomesCTA from '../components/HomesCTA';
import NeighborhoodCards from '../components/NeighborhoodCards';

export const metadata: Metadata = {
  title: 'Gated Communities in Aliante - 24/7 Security & Luxury',
  description:
    'Explore gated communities in Aliante with 24/7 security, resort amenities. The Prominence, Club Aliante, and more premium communities.',
  alternates: {
    canonical: 'https://www.aliantehomesforsale.com/gated-communities',
  },
};

export default function GatedCommunities() {
  return (
    <main>
      <EnhancedHero />
      <GatedCommunitiesContent />
      <NeighborhoodCards />
      <EnhancedFeaturedProperties />
      <HomesCTA />
    </main>
  );
}
