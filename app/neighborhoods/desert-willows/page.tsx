import type { Metadata } from 'next';
import { pageHero } from '../../../lib/content/site-images';
import NeighborhoodCards from '../../components/NeighborhoodCards';
import NeighborhoodDetailContent from '../../components/NeighborhoodDetailContent';
import NeighborhoodsCTA from '../../components/NeighborhoodsCTA';
import NeighborhoodsHero from '../../components/NeighborhoodsHero';

export const metadata: Metadata = {
  title: 'Desert Willows Aliante | Homes for Sale North Las Vegas 89084',
  description:
    'Desert Willows homes in Aliante, North Las Vegas 89084. Parks nearby. Confirm live MLS listings. Call (702) 707-7273.',
  keywords: 'desert willows aliante, desert willows north las vegas 89084',
  alternates: { canonical: 'https://www.aliantehomesforsale.com/neighborhoods/desert-willows' },
};

export default function DesertWillows() {
  return (
    <main>
      <NeighborhoodsHero
        title="Desert Willows Aliante | Homes for Sale North Las Vegas 89084"
        subtitle="Open-access village inside the Aliante master plan. Confirm live MLS. Call (702) 707-7273."
        image={pageHero('/neighborhoods/desert-willows')}
      />
      <NeighborhoodDetailContent
        heading="Buying in Desert Willows, Aliante 89084"
        intro="Desert Willows is an open-access village with single- and two-story homes, parks nearby, and everyday access along Aliante Parkway."
      />
      <NeighborhoodCards />
      <NeighborhoodsCTA />
    </main>
  );
}
