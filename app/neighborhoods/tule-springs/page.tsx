import type { Metadata } from 'next';
import { pageHero } from '../../../lib/content/site-images';
import ContextualLinks from '../../components/ContextualLinks';
import NeighborhoodCards from '../../components/NeighborhoodCards';
import NeighborhoodsCTA from '../../components/NeighborhoodsCTA';
import NeighborhoodsHero from '../../components/NeighborhoodsHero';
import TuleSpringsContent from '../../components/TuleSpringsContent';

export const metadata: Metadata = {
  title: 'Villages at Tule Springs Homes | North Las Vegas New Construction',
  description:
    'Villages at Tule Springs in North Las Vegas — new construction east of Aliante ZIP 89084. D.R. Horton. Call (702) 707-7273. Confirm live inventory and prices.',
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
        image={pageHero('/neighborhoods/tule-springs')}
      />
      <TuleSpringsContent />
      <div className="px-4">
        <ContextualLinks variant="builders" />
      </div>
      <NeighborhoodCards />
      <NeighborhoodsCTA
        heading="Compare Tule Springs with Aliante resale"
        subheading="East of ZIP 89084. Confirm live inventory before you tour."
      />
    </main>
  );
}
