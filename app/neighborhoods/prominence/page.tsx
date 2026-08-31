import type { Metadata } from 'next';
import { pageHero } from '../../../lib/content/site-images';
import NeighborhoodCards from '../../components/NeighborhoodCards';
import NeighborhoodDetailContent from '../../components/NeighborhoodDetailContent';
import NeighborhoodsCTA from '../../components/NeighborhoodsCTA';
import NeighborhoodsHero from '../../components/NeighborhoodsHero';

export const metadata: Metadata = {
  title: 'The Prominence Aliante | Gated Homes North Las Vegas 89084',
  description:
    'The Prominence gated village in Aliante, North Las Vegas 89084. Confirm live MLS listings. Call (702) 707-7273.',
  keywords: 'the prominence aliante, gated homes aliante, prominence north las vegas 89084',
  alternates: { canonical: 'https://www.aliantehomesforsale.com/neighborhoods/prominence' },
};

export default function Prominence() {
  return (
    <main>
      <NeighborhoodsHero
        title="The Prominence Aliante | Gated Homes North Las Vegas 89084"
        subtitle="Controlled-access village inside the Aliante master plan. Confirm live MLS. Call (702) 707-7273."
        image={pageHero('/neighborhoods/prominence')}
      />
      <NeighborhoodDetailContent
        heading="Buying in The Prominence, Aliante 89084"
        intro="The Prominence is a gated village with controlled entry, private streets, and shared amenities. Confirm live MLS prices, finishes, and lot size — I will not publish a stale range."
      />
      <NeighborhoodCards />
      <NeighborhoodsCTA />
    </main>
  );
}
