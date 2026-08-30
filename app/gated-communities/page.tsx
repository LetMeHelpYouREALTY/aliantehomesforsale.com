import { pageMetadata } from '../../lib/seo/page-metadata';
import EnhancedFeaturedProperties from '../components/EnhancedFeaturedProperties';
import EnhancedHero from '../components/EnhancedHero';
import GatedCommunitiesContent from '../components/GatedCommunitiesContent';
import HomesCTA from '../components/HomesCTA';
import NeighborhoodCards from '../components/NeighborhoodCards';

export const metadata = pageMetadata('/gated-communities', {
  title: 'Gated communities in Aliante, North Las Vegas',
  description:
    'The Prominence, Club Aliante pockets, and other controlled-access streets in 89084. Confirm HOA and gate rules before you offer.',
});

export default function GatedCommunities() {
  return (
    <main>
      <EnhancedHero
        title="Gated communities in Aliante, North Las Vegas"
        subtitle="The Prominence, Club Aliante pockets, and other controlled-access streets. Confirm HOA and gate rules before you offer."
      />
      <GatedCommunitiesContent />
      <NeighborhoodCards />
      <EnhancedFeaturedProperties />
      <HomesCTA />
    </main>
  );
}
