import { pageMetadata } from '../../lib/seo/page-metadata';
import CommunityAmenities from '../components/CommunityAmenities';
import EnhancedHero from '../components/EnhancedHero';
import GolfHomesContent from '../components/GolfHomesContent';
import HomesCTA from '../components/HomesCTA';
import NeighborhoodCards from '../components/NeighborhoodCards';

export const metadata = pageMetadata('/golf-homes', {
  title: 'Golf-course homes near Club Aliante',
  description:
    'Fairway, lake, and interior lots in Aliante 89084. Golf membership is separate from HOA. Browse live MLS.',
});

export default function GolfHomes() {
  return (
    <main>
      <EnhancedHero
        title="Golf-course homes near Club Aliante"
        subtitle="Fairway, lake, and interior lots in 89084. Membership is separate from HOA—ask for the fee sheet."
      />
      <GolfHomesContent />
      <NeighborhoodCards />
      <CommunityAmenities />
      <HomesCTA />
    </main>
  );
}
