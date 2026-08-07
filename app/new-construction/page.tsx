import type { Metadata } from 'next';
import NewConstructionHero from '../components/NewConstructionHero';
import TopBuilders from '../components/TopBuilders';
import WhyNewConstruction from '../components/WhyNewConstruction';
import ConstructionProcess from '../components/ConstructionProcess';
import QuickMoveInHomes from '../components/QuickMoveInHomes';
import BuilderComparison from '../components/BuilderComparison';
import WhyWorkWithUs from '../components/WhyWorkWithUs';
import NewConstructionFAQ from '../components/NewConstructionFAQ';
import NewConstructionCTA from '../components/NewConstructionCTA';

export const metadata: Metadata = {
  title: 'New Construction Homes Aliante North Las Vegas | Top Builders + Incentives',
  description:
    '95+ new construction homes in Aliante. Lennar, D.R. Horton, Tri Pointe, Del Webb. Up to $25K in builder incentives. Expert buyer representation at no cost. Call (702) 707-7273.',
  keywords:
    'new construction Aliante, Aliante new homes, new construction North Las Vegas, Lennar Aliante, DR Horton Tule Springs, new home builders Aliante',
  alternates: {
    canonical: 'https://www.aliantehomesforsale.com/new-construction',
  },
  openGraph: {
    title: 'New Construction Homes Aliante | Top Builders + Up to $25K Incentives',
    description:
      '95+ new homes from Lennar, D.R. Horton, Tri Pointe, Del Webb. Builder incentives up to $25,000. Expert guidance.',
    url: 'https://www.aliantehomesforsale.com/new-construction',
    type: 'website',
  },
};

export default function NewConstruction() {
  return (
    <>
      <main className="new-construction-page">
        <NewConstructionHero />
        <TopBuilders />
        <WhyNewConstruction />
        <ConstructionProcess />
        <QuickMoveInHomes />
        <BuilderComparison />
        <WhyWorkWithUs />
        <NewConstructionFAQ />
        <NewConstructionCTA />
      </main>
    </>
  );
}
