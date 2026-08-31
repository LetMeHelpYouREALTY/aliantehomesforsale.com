import type { Metadata } from 'next';
import BuilderComparison from '../components/BuilderComparison';
import ConstructionProcess from '../components/ConstructionProcess';
import NewConstructionCTA from '../components/NewConstructionCTA';
import NewConstructionFAQ from '../components/NewConstructionFAQ';
import NewConstructionHero from '../components/NewConstructionHero';
import QuickMoveInHomes from '../components/QuickMoveInHomes';
import TopBuilders from '../components/TopBuilders';
import WhyNewConstruction from '../components/WhyNewConstruction';
import WhyWorkWithUs from '../components/WhyWorkWithUs';

export const metadata: Metadata = {
  title: 'New-Construction Buyer Agency in Aliante | North Las Vegas 89084',
  description:
    'Independent new-construction buyer’s agent in Aliante and Tule Springs. Lennar, D.R. Horton, Del Webb. Confirm live incentives. Call (702) 707-7273.',
  keywords:
    'north las vegas home builders, new construction Aliante, Aliante new homes, Lennar Aliante, DR Horton Tule Springs',
  alternates: {
    canonical: 'https://www.aliantehomesforsale.com/new-construction',
  },
  openGraph: {
    title: 'New-Construction Buyer Agency in Aliante | North Las Vegas 89084',
    description:
      'Independent buyer representation with Aliante and Tule Springs builders. Call (702) 707-7273.',
    url: 'https://www.aliantehomesforsale.com/new-construction',
    type: 'website',
  },
};

export default function NewConstruction() {
  return (
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
  );
}
