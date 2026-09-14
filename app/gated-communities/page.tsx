import { pageHero } from '../../lib/content/site-images';
import { pageMetadata } from '../../lib/seo-utils';
import EnhancedFeaturedProperties from '../components/EnhancedFeaturedProperties';
import EnhancedHero from '../components/EnhancedHero';
import GatedCommunitiesContent from '../components/GatedCommunitiesContent';
import HomesCTA from '../components/HomesCTA';
import NeighborhoodCards from '../components/NeighborhoodCards';
import PageFAQ from '../components/PageFAQ';

export const metadata = pageMetadata({
  title: 'Gated Communities in Las Vegas | Aliante North Las Vegas Homes',
  description:
    'Gated communities in Las Vegas inside Aliante 89084: Club Aliante, The Prominence, Courts at Aliante, Terrasini, and more. Call (702) 707-7273 for live MLS homes for sale.',
  path: '/gated-communities',
  keywords:
    'gated community las vegas, gated communities in las vegas, gated communities las vegas nv, aliante gated',
});

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
      <EnhancedFeaturedProperties />
      <PageFAQ path="/gated-communities" title="Aliante gated communities FAQ" />
      <HomesCTA />
    </main>
  );
}
