import type { Metadata } from 'next';
import NeighborhoodCards from '../../components/NeighborhoodCards';
import NeighborhoodsCTA from '../../components/NeighborhoodsCTA';
import NeighborhoodsHero from '../../components/NeighborhoodsHero';
import ContextualLinks from '../../components/ContextualLinks';

export const metadata: Metadata = {
  title: 'Villages at Tule Springs Homes | North Las Vegas New Construction',
  description:
    'Villages at Tule Springs in North Las Vegas — new construction near Aliante 89084. D.R. Horton and other builders. Call (702) 707-7273. Confirm live inventory and prices.',
  keywords:
    'tule springs las vegas, villages at tule springs, dr horton tule springs, north las vegas new construction',
  alternates: { canonical: 'https://www.aliantehomesforsale.com/neighborhoods/tule-springs' },
};

export default function TuleSprings() {
  return (
    <main>
      <NeighborhoodsHero
        title="Villages at Tule Springs | North Las Vegas New Construction"
        subtitle="East of Aliante. Compare Tule Springs new homes with Aliante resale. Call (702) 707-7273."
      />
      <div className="px-4">
        <ContextualLinks variant="builders" />
      </div>
      <NeighborhoodCards />
      <NeighborhoodsCTA />
    </main>
  );
}
