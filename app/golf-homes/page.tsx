import type { Metadata } from 'next';
import CommunityAmenities from '../components/CommunityAmenities';
import EnhancedHero from '../components/EnhancedHero';
import GolfHomesContent from '../components/GolfHomesContent';
import HomesCTA from '../components/HomesCTA';
import NeighborhoodCards from '../components/NeighborhoodCards';

export const metadata: Metadata = {
  title: 'Golf Course Homes Aliante - Club Aliante Properties',
  description:
    'Golf course homes in Aliante with stunning fairway views. Club Aliante Golf Course access. Browse 32+ available properties.',
  alternates: {
    canonical: 'https://www.aliantehomesforsale.com/golf-homes',
  },
};

export default function GolfHomes() {
  return (
    <main>
      <EnhancedHero />
      <GolfHomesContent />
      <NeighborhoodCards />
      <CommunityAmenities />
      <HomesCTA />
    </main>
  );
}
