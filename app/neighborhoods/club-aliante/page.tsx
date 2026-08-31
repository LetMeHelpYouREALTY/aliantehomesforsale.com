import type { Metadata } from 'next';
import { pageHero } from '../../../lib/content/site-images';
import GolfHomesContent from '../../components/GolfHomesContent';
import NeighborhoodCards from '../../components/NeighborhoodCards';
import NeighborhoodsCTA from '../../components/NeighborhoodsCTA';
import NeighborhoodsHero from '../../components/NeighborhoodsHero';

export const metadata: Metadata = {
  title: 'Club Aliante Homes for Sale | Golf Course Real Estate, North Las Vegas',
  description:
    'Club Aliante homes for sale in North Las Vegas 89084. Golf-course lots, clubhouse, and Aliante Golf Club. Independent realtor Dr. Jan Duffy. Call (702) 707-7273. Confirm live MLS prices before you offer.',
  keywords:
    'club aliante, club aliante homes for sale, club aliante north las vegas, aliante golf club, golf homes aliante',
  alternates: { canonical: 'https://www.aliantehomesforsale.com/neighborhoods/club-aliante' },
};

export default function ClubAliante() {
  return (
    <main>
      <NeighborhoodsHero
        title="Club Aliante Homes for Sale | Golf Course Real Estate, North Las Vegas"
        subtitle="Fairway homes in ZIP 89084 next to Aliante Golf Club. Call (702) 707-7273 to tour live listings."
        image={pageHero('/neighborhoods/club-aliante')}
      />
      <GolfHomesContent />
      <NeighborhoodCards />
      <NeighborhoodsCTA />
    </main>
  );
}
