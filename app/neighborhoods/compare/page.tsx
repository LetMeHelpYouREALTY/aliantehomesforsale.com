import type { Metadata } from 'next';
import { pageHero } from '../../../lib/content/site-images';
import NeighborhoodCards from '../../components/NeighborhoodCards';
import NeighborhoodComparison from '../../components/NeighborhoodComparison';
import NeighborhoodDetailContent from '../../components/NeighborhoodDetailContent';
import NeighborhoodsCTA from '../../components/NeighborhoodsCTA';
import NeighborhoodsHero from '../../components/NeighborhoodsHero';

export const metadata: Metadata = {
  title: 'Compare Aliante Neighborhoods | Club Aliante, Sun City, Prominence',
  description:
    'Compare Club Aliante, The Prominence, Desert Willows, The Paseos, and Sun City Aliante in North Las Vegas 89084. Confirm live MLS prices. Call (702) 707-7273.',
  keywords:
    'compare aliante neighborhoods, club aliante vs prominence, sun city aliante vs ardiente',
  alternates: { canonical: 'https://www.aliantehomesforsale.com/neighborhoods/compare' },
};

export default function Compare() {
  return (
    <main>
      <NeighborhoodsHero
        title="Compare Aliante Neighborhoods | Club Aliante, Sun City, Prominence"
        subtitle="Side-by-side villages in ZIP 89084. Confirm live MLS prices before you offer. Call (702) 707-7273."
        image={pageHero('/neighborhoods/compare')}
      />
      <NeighborhoodComparison
        heading="Side-by-side: Club Aliante, Prominence, Desert Willows, The Paseos, Sun City Aliante"
        subheading="Prices and inventory change. Confirm current listings on live MLS."
        showCompareCta={false}
      />
      <NeighborhoodDetailContent
        heading="How I compare Aliante villages in ZIP 89084"
        variant="compare"
      />
      <NeighborhoodCards />
      <NeighborhoodsCTA
        heading="Compare Aliante villages with a 89084 realtor"
        subheading="Gated vs open-access, fairway vs interior, Sun City 55+ vs all-ages streets."
      />
    </main>
  );
}
