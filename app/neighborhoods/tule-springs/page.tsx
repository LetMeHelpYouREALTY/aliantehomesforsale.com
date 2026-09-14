import { pageHero } from '../../../lib/content/site-images';
import { pageMetadata } from '../../../lib/seo-utils';
import ContextualLinks from '../../components/ContextualLinks';
import NeighborhoodCards from '../../components/NeighborhoodCards';
import NeighborhoodDetailContent from '../../components/NeighborhoodDetailContent';
import NeighborhoodsCTA from '../../components/NeighborhoodsCTA';
import NeighborhoodsHero from '../../components/NeighborhoodsHero';
import PageFAQ from '../../components/PageFAQ';

export const metadata = pageMetadata({
  title: 'Villages at Tule Springs Homes | North Las Vegas New Construction',
  description:
    'Villages at Tule Springs sits east of Aliante 89084. D.R. Horton new construction versus Aliante resale. Call (702) 707-7273. Confirm live inventory and prices.',
  path: '/neighborhoods/tule-springs',
  keywords:
    'tule springs las vegas, villages at tule springs, dr horton tule springs, north las vegas new construction',
});

export default function TuleSprings() {
  return (
    <main>
      <NeighborhoodsHero
        title="Villages at Tule Springs | North Las Vegas New Construction"
        subtitle="East of Aliante. Compare Tule Springs new homes with Aliante resale. Call (702) 707-7273."
        image={pageHero('/neighborhoods/tule-springs')}
      />
      <NeighborhoodDetailContent village="tule-springs" />
      <div className="px-4">
        <ContextualLinks variant="builders" />
      </div>
      <NeighborhoodCards />
      <PageFAQ path="/neighborhoods/tule-springs" title="Tule Springs FAQ" />
      <NeighborhoodsCTA />
    </main>
  );
}
