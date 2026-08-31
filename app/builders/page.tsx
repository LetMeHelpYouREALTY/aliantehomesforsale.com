import type { Metadata } from 'next';
import BuilderAdvantages from '../components/BuilderAdvantages';
import BuilderComparison from '../components/BuilderComparison';
import BuilderIncentivesInfo from '../components/BuilderIncentivesInfo';
import BuildersIntro from '../components/BuildersIntro';
import ContextualLinks from '../components/ContextualLinks';
import NewConstructionCTA from '../components/NewConstructionCTA';
import NewConstructionHero from '../components/NewConstructionHero';
import TopBuilders from '../components/TopBuilders';

export const metadata: Metadata = {
  title: 'Aliante Builders | Lennar, D.R. Horton, Del Webb — 89084',
  description:
    'Compare Lennar, D.R. Horton, and Del Webb near Aliante, North Las Vegas 89084. Independent buyer’s agent. Confirm live incentives. Call (702) 707-7273.',
  keywords: 'aliante builders, lennar aliante, dr horton tule springs, del webb sun city aliante',
  alternates: {
    canonical: 'https://www.aliantehomesforsale.com/builders',
  },
};

export default function Builders() {
  return (
    <main className="builders-page">
      <NewConstructionHero
        title="Aliante Builders | Lennar, D.R. Horton, Del Webb — 89084"
        subtitle="Independent buyer representation in Aliante and nearby Tule Springs. Call (702) 707-7273."
        filterHeading="Compare Aliante and Tule Springs builders"
      />
      <BuildersIntro />
      <TopBuilders />
      <div className="px-4">
        <ContextualLinks variant="builders" />
      </div>
      <BuilderAdvantages />
      <BuilderComparison
        heading="Where each builder sits relative to Aliante ZIP 89084"
        subheading="Lennar and Del Webb inside Aliante. D.R. Horton in nearby Tule Springs."
        showBuildersCta={false}
      />
      <BuilderIncentivesInfo
        heading="Builder credits when you buy in Aliante 89084"
        subheading="I confirm live Lennar, D.R. Horton, and Del Webb sheets before you write."
      />
      <NewConstructionCTA />
    </main>
  );
}
