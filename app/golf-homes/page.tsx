import type { Metadata } from 'next';
import { pageHero } from '../../lib/content/site-images';
import EnhancedHero from '../components/EnhancedHero';
import GolfHomesContent from '../components/GolfHomesContent';
import HomesCTA from '../components/HomesCTA';
import NeighborhoodCards from '../components/NeighborhoodCards';

export const metadata: Metadata = {
  title: 'Club Aliante Golf Homes for Sale | North Las Vegas 89084 Realtor',
  description:
    'Golf-course homes in Club Aliante next to Aliante Golf Club in North Las Vegas 89084. Call (702) 707-7273. Confirm live MLS prices before you offer.',
  alternates: {
    canonical: 'https://www.aliantehomesforsale.com/golf-homes',
  },
};

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
      <HomesCTA
        heading="Tour Club Aliante golf-course homes in ZIP 89084"
        subheading="Fairway vs green, par-5 vs par-3. Confirm live MLS. Call (702) 707-7273."
        secondaryHref="/homes-for-sale"
        secondaryLabel="Browse MLS listings"
        calendlyEvent="showing"
        calendlyLabel="Schedule a golf-home showing"
      />
    </main>
  );
}
