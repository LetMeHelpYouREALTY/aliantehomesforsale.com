import type { Metadata } from 'next';
import { pageHero } from '../../../lib/content/site-images';
import BuilderComparison from '../../components/BuilderComparison';
import BuilderIncentivesInfo from '../../components/BuilderIncentivesInfo';
import NewConstructionCTA from '../../components/NewConstructionCTA';
import NewConstructionHero from '../../components/NewConstructionHero';
import TopBuilders from '../../components/TopBuilders';

export const metadata: Metadata = {
  title: 'Builder Incentives in Aliante | North Las Vegas 89084',
  description:
    'Independent buyer’s agent for current Lennar, D.R. Horton, and Del Webb incentives in Aliante, North Las Vegas 89084. Confirm live offers. Call (702) 707-7273.',
  keywords:
    'builder incentives aliante, lennar incentives north las vegas, dr horton tule springs incentives, del webb sun city aliante',
  alternates: { canonical: 'https://www.aliantehomesforsale.com/builders/incentives' },
};

export default function Incentives() {
  return (
    <main>
      <NewConstructionHero
        title="Builder Incentives in Aliante | North Las Vegas 89084"
        subtitle="I confirm today’s closing-cost, rate-buydown, and upgrade offers with you. I will not publish a stale dollar amount. Call (702) 707-7273."
        filterHeading="Which Aliante builder is offering credits now"
        image={pageHero('/builders/incentives')}
      />
      <BuilderIncentivesInfo
        heading="How I confirm builder incentives in Aliante 89084"
        subheading="Lennar, D.R. Horton, and Del Webb offers change by community and week."
      />
      <BuilderComparison
        heading="Where each builder sits relative to Aliante ZIP 89084"
        subheading="Confirm today’s sheet. I will not publish a stale dollar amount."
      />
      <TopBuilders />
      <NewConstructionCTA />
    </main>
  );
}
