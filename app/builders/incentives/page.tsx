import { pageHero } from '../../../lib/content/site-images';
import { pageMetadata } from '../../../lib/seo-utils';
import BuilderComparison from '../../components/BuilderComparison';
import BuilderIncentivesInfo from '../../components/BuilderIncentivesInfo';
import NewConstructionCTA from '../../components/NewConstructionCTA';
import NewConstructionHero from '../../components/NewConstructionHero';
import PageFAQ from '../../components/PageFAQ';
import TopBuilders from '../../components/TopBuilders';

export const metadata = pageMetadata({
  title: 'Builder Incentives in Aliante | North Las Vegas 89084',
  description:
    'Independent buyer’s agent for current Lennar, D.R. Horton, and Del Webb incentives in Aliante, North Las Vegas 89084. Confirm live offers. Call (702) 707-7273.',
  path: '/builders/incentives',
  keywords:
    'builder incentives aliante, lennar incentives north las vegas, dr horton tule springs incentives, del webb sun city aliante',
});

export default function Incentives() {
  return (
    <main>
      <NewConstructionHero
        title="Builder Incentives in Aliante | North Las Vegas 89084"
        subtitle="I confirm today’s closing-cost, rate-buydown, and upgrade offers with you. I will not publish a stale dollar amount. Call (702) 707-7273."
        filterHeading="Which Aliante builder is offering credits now"
        image={pageHero('/builders/incentives')}
      />
      <BuilderComparison
        heading="Which Aliante builder still has a live credit"
        subheading="I confirm today’s sheet. I will not publish a stale dollar amount."
      />
      <TopBuilders />
      <BuilderIncentivesInfo
        heading="How I confirm builder incentives in Aliante 89084"
        subheading="Lennar, D.R. Horton, and Del Webb offers change by community and week."
      />
      <PageFAQ path="/builders/incentives" title="Builder incentive FAQ" />
      <NewConstructionCTA />
    </main>
  );
}
