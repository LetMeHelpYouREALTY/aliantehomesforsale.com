import { pageHero } from '../../../lib/content/site-images';
import { pageMetadata } from '../../../lib/seo-utils';
import ContextualLinks from '../../components/ContextualLinks';
import NeighborhoodCards from '../../components/NeighborhoodCards';
import NeighborhoodDetailContent from '../../components/NeighborhoodDetailContent';
import NeighborhoodPlaceSchema from '../../components/NeighborhoodPlaceSchema';
import NeighborhoodsCTA from '../../components/NeighborhoodsCTA';
import NeighborhoodsHero from '../../components/NeighborhoodsHero';
import PageFAQ from '../../components/PageFAQ';

export const metadata = pageMetadata({
  title: 'Villages at Tule Springs Homes | North Las Vegas New Construction',
  description:
    'Villages at Tule Springs sits east of Aliante 89084. D.R. Horton new construction versus Aliante resale. Call (702) 500-1332. Confirm live inventory and prices.',
  path: '/neighborhoods/tule-springs',
  keywords:
    'tule springs las vegas, villages at tule springs, dr horton tule springs, north las vegas new construction',
});

export default function TuleSprings() {
  return (
    <>
      <NeighborhoodPlaceSchema
        name="Villages at Tule Springs"
        description="Villages at Tule Springs is a new master-planned community featuring brand-new construction homes, extensive parks, trails, and modern amenities."
        priceRange="$450,000 - $750,000"
        latitude="36.2845"
        longitude="-115.2234"
        features={[
          'Brand-new master-planned community',
          'New construction homes',
          'Extensive parks and trails',
          'Modern amenities',
          'Planned community centers',
          'Energy-efficient new builds',
        ]}
        builders={['Lennar', 'D.R. Horton', 'Tri Pointe Homes', 'Richmond American']}
        homeTypes={['New construction single-family', 'Modern floor plans', 'Energy-efficient homes']}
        specialFeatures={['Brand-new homes only', 'Builder incentives available', 'Latest smart home features', '10-year structural warranties']}
      />
      <main>
        <NeighborhoodsHero
          title="Villages at Tule Springs | North Las Vegas New Construction"
          subtitle="East of Aliante. Compare Tule Springs new homes with Aliante resale. Call (702) 500-1332."
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
    </>
  );
}
