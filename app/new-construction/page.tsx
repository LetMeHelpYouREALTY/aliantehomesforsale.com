import type { Metadata } from 'next';
import { pageHero } from '../../lib/content/site-images';
import ConstructionProcess from '../components/ConstructionProcess';
import NewConstructionCTA from '../components/NewConstructionCTA';
import NewConstructionFAQ from '../components/NewConstructionFAQ';
import NewConstructionHero from '../components/NewConstructionHero';
import TopBuilders from '../components/TopBuilders';
import WhyNewConstruction from '../components/WhyNewConstruction';
import WhyWorkWithUs from '../components/WhyWorkWithUs';

export const metadata: Metadata = {
  title: 'New-Construction Buyer Agency in Aliante | North Las Vegas 89084',
  description:
    'Independent new-construction buyer’s agent in Aliante 89084 and Tule Springs. Lennar and Del Webb in 89084; D.R. Horton east of Aliante. Confirm live incentives. Call (702) 707-7273.',
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
      <NewConstructionHero
        title="New-Construction Buyer Agency in Aliante, North Las Vegas 89084"
        subtitle="Independent representation with Lennar and Del Webb in 89084, D.R. Horton at Tule Springs, and other builders you will actually tour. Call (702) 707-7273."
        filterHeading="Jump to a builder — confirm ZIP relative to 89084"
        image={pageHero('/new-construction')}
      />
      <TopBuilders />
      <WhyNewConstruction />
      <ConstructionProcess />
      <WhyWorkWithUs />
      <NewConstructionFAQ />
      <NewConstructionCTA />
    </main>
  );
}
