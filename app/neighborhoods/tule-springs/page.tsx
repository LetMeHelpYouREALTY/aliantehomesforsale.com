import type { Metadata } from 'next';
import NeighborhoodsHero from '../../components/NeighborhoodsHero';
import NewConstructionHero from '../../components/NewConstructionHero';
import TopBuilders from '../../components/TopBuilders';
import BuilderDetailContent from '../../components/BuilderDetailContent';
import NeighborhoodCards from '../../components/NeighborhoodCards';
import NeighborhoodsCTA from '../../components/NeighborhoodsCTA';
import NeighborhoodPlaceSchema from '../../components/NeighborhoodPlaceSchema';

export const metadata: Metadata = {
  title: 'Villages at Tule Springs - New Master-Planned Community',
  description: 'Villages at Tule Springs master-planned community. New construction, parks, trails. $450K-$750K.',
  alternates: { canonical: 'https://www.aliantehomesforsale.com/neighborhoods/tule-springs' },
};

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
        <NewConstructionHero />
        <TopBuilders />
        <BuilderDetailContent />
        <NeighborhoodCards />
        <NeighborhoodsCTA />
      </main>
    </>
  );
}
