import { pageHero } from '../../lib/content/site-images';
import { pageMetadata } from '../../lib/seo-utils';
import CommunityAmenities from '../components/CommunityAmenities';
import EnhancedHero from '../components/EnhancedHero';
import GolfHomesContent from '../components/GolfHomesContent';
import HomesCTA from '../components/HomesCTA';
import NeighborhoodCards from '../components/NeighborhoodCards';
import PageFAQ from '../components/PageFAQ';

export const metadata = pageMetadata({
  title: 'Club Aliante Golf Homes for Sale | North Las Vegas 89084 Realtor',
  description:
    'Fairway-lot playbook for homes next to Aliante Golf Club in North Las Vegas 89084. Lot position, errant balls, membership vs deed. Call (702) 707-7273.',
  path: '/golf-homes',
});

export default function GolfHomes() {
  return (
    <main>
      <EnhancedHero
        title="Club Aliante Golf Homes for Sale | North Las Vegas 89084"
        subtitle="Fairway lots next to Aliante Golf Club. I represent you on the purchase. Call (702) 707-7273."
        image={pageHero('/golf-homes')}
      />
      <GolfHomesContent />
      <NeighborhoodCards />
      <CommunityAmenities />
      <PageFAQ path="/golf-homes" title="Golf-course lot FAQ" />
      <HomesCTA />
    </main>
  );
}
