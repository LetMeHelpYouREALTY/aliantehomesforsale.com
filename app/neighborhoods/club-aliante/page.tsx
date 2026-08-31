import type { Metadata } from 'next';
import { pageHero } from '../../../lib/content/site-images';
import NeighborhoodCards from '../../components/NeighborhoodCards';
import NeighborhoodDetailContent from '../../components/NeighborhoodDetailContent';
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
      <NeighborhoodDetailContent
        heading="Buying in Club Aliante, ZIP 89084"
        intro="Club Aliante is the guard-gated village along Aliante Golf Club fairways. Confirm live MLS prices, lot position, and HOA rules — I will not publish a stale range."
        lotCopy="In Club Aliante I walk fairway vs interior lots, par-5 vs par-3 frontage, and errant-ball exposure with you. This is not The Prominence — golf-course lots sit next to the city-owned Aliante Golf Club (Gary Panks). Confirm HOA dues, guest procedures, and live comps before you offer."
        access="gated"
      />
      <NeighborhoodCards />
      <NeighborhoodsCTA
        heading="Tour Club Aliante golf-course lots in 89084"
        subheading="Fairway homes next to Aliante Golf Club. Call (702) 707-7273."
      />
    </main>
  );
}
