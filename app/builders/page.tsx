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
  title: 'New Construction Builders in Aliante - Compare All Builders',
  description:
    'Compare all new construction builders in Aliante: Lennar, D.R. Horton, Tri Pointe, Del Webb. Incentives, floor plans, and expert guidance.',
  alternates: {
    canonical: 'https://www.aliantehomesforsale.com/builders',
  },
};

export default function Builders() {
  return (
    <main className="builders-page">
      <NewConstructionHero />
      <BuildersIntro />
      <TopBuilders />
      <div className="px-4">
        <ContextualLinks variant="builders" />
      </div>
      <BuilderAdvantages />
      <BuilderComparison />
      <BuilderIncentivesInfo />
      <NewConstructionCTA />
    </main>
  );
}
