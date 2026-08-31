import type { Metadata } from 'next';
import CommunityAmenities from '../components/CommunityAmenities';
import GolfHomesContent from '../components/GolfHomesContent';
import HomesCTA from '../components/HomesCTA';
import NeighborhoodCards from '../components/NeighborhoodCards';
import NeighborhoodsHero from '../components/NeighborhoodsHero';

export const metadata: Metadata = {
  title: 'Club Aliante Golf Homes for Sale | North Las Vegas 89084 Realtor',
  description:
    'Golf-course homes near Club Aliante and Aliante Golf Club in North Las Vegas 89084. Call (702) 707-7273. Confirm live MLS prices before you offer.',
  alternates: {
    canonical: 'https://www.aliantehomesforsale.com/golf-homes',
  },
};

export default function GolfHomes() {
  return (
    <main>
      <NeighborhoodsHero
        title="Club Aliante Golf Homes for Sale | North Las Vegas 89084"
        subtitle="Fairway lots next to Aliante Golf Club. I represent you on the purchase. Call (702) 707-7273."
      />
      <GolfHomesContent />
      <NeighborhoodCards />
      <CommunityAmenities />
      <HomesCTA />
    </main>
  );
}
