import type { Metadata } from 'next';
import { pageHero } from '../../../lib/content/site-images';
import BuilderComparison from '../../components/BuilderComparison';
import BuilderIncentivesInfo from '../../components/BuilderIncentivesInfo';
import NewConstructionCTA from '../../components/NewConstructionCTA';
import NewConstructionHero from '../../components/NewConstructionHero';

export const metadata: Metadata = {
  title: 'Builder Incentives near Aliante | Lennar, Horton, Del Webb',
  description:
    'Independent buyer’s agent for Lennar and Del Webb incentives in Aliante 89084 and D.R. Horton at Tule Springs. Confirm live offers. Call (702) 707-7273.',
  keywords:
    'builder incentives aliante, lennar incentives north las vegas, dr horton tule springs incentives, del webb sun city aliante',
  alternates: { canonical: 'https://www.aliantehomesforsale.com/builders/incentives' },
};

export default function Incentives() {
  return (
    <main>
      <NewConstructionHero
        title="Builder Incentives near Aliante | Lennar, Horton, Del Webb"
        subtitle="I confirm today’s closing-cost, rate-buydown, and upgrade offers with you. I will not publish a stale dollar amount. Call (702) 707-7273."
        filterHeading="Which builder is offering credits — confirm ZIP"
        image={pageHero('/builders/incentives')}
      />
      <BuilderIncentivesInfo
        heading="How I confirm builder incentives relative to Aliante 89084"
        subheading="Lennar and Del Webb in 89084; Horton at Tule Springs. Offers change by community and week."
      />
      <BuilderComparison
        heading="Where each builder sits relative to Aliante ZIP 89084"
        subheading="Confirm today’s sheet. I will not publish a stale dollar amount."
      />
      <NewConstructionCTA />
    </main>
  );
}
