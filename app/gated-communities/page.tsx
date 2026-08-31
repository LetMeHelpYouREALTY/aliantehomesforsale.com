import type { Metadata } from 'next';
import { pageHero } from '../../lib/content/site-images';
import EnhancedHero from '../components/EnhancedHero';
import GatedCommunitiesContent from '../components/GatedCommunitiesContent';
import HomesCTA from '../components/HomesCTA';
import NeighborhoodCards from '../components/NeighborhoodCards';

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
      <EnhancedHero
        title="Gated Communities in Las Vegas | Aliante Homes for Sale, 89084"
        subtitle="Controlled-access villages inside the Aliante master plan. Call (702) 707-7273 to tour current listings."
        image={pageHero('/gated-communities')}
      />
      <GatedCommunitiesContent />
      <NeighborhoodCards />
      <HomesCTA
        heading="Tour gated Aliante villages in North Las Vegas 89084"
        subheading="Club Aliante, The Prominence, and other controlled-access streets. Call (702) 707-7273."
        secondaryHref="/homes-for-sale"
        secondaryLabel="Browse MLS listings"
        calendlyEvent="showing"
        calendlyLabel="Schedule a gated-village showing"
      />
    </main>
  );
}
