import type { Metadata } from 'next';
import { pageHero } from '../../../lib/content/site-images';
import NeighborhoodCards from '../../components/NeighborhoodCards';
import NeighborhoodDetailContent from '../../components/NeighborhoodDetailContent';
import NeighborhoodsCTA from '../../components/NeighborhoodsCTA';
import NeighborhoodsHero from '../../components/NeighborhoodsHero';

export const metadata: Metadata = {
  title: 'The Paseos Aliante | Homes for Sale North Las Vegas 89084',
  description:
    'The Paseos homes in Aliante, North Las Vegas 89084. Confirm live MLS listings. Call (702) 707-7273.',
  keywords: 'the paseos aliante, paseos north las vegas 89084',
  alternates: { canonical: 'https://www.aliantehomesforsale.com/neighborhoods/paseos' },
};

export default function Paseos() {
  return (
    <main>
      <NeighborhoodsHero
        title="The Paseos Aliante | Homes for Sale North Las Vegas 89084"
        subtitle="Open-access village inside the Aliante master plan. Confirm live MLS. Call (702) 707-7273."
        image={pageHero('/neighborhoods/paseos')}
      />
      <NeighborhoodDetailContent
        heading="Buying in The Paseos, Aliante 89084"
        intro="The Paseos in Aliante ZIP 89084 is an open-access village (not gated), with parks and green space. It is not The Paseos in Summerlin. Confirm housing type on live MLS."
        access="open"
      />
      <NeighborhoodCards />
      <NeighborhoodsCTA
        heading="Tour The Paseos in Aliante 89084"
        subheading="Open-access streets, master HOA, and village CC&Rs. Call (702) 707-7273."
      />
    </main>
  );
}
