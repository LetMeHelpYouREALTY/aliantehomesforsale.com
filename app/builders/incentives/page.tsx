import type { Metadata } from 'next';
import BuilderComparison from '../../components/BuilderComparison';
import BuilderIncentivesInfo from '../../components/BuilderIncentivesInfo';
import NewConstructionCTA from '../../components/NewConstructionCTA';
import NewConstructionHero from '../../components/NewConstructionHero';
import TopBuilders from '../../components/TopBuilders';

export const metadata: Metadata = {
  title: 'Builder Incentives Tracker - Up to $25K Savings',
  description:
    'Current builder incentives in Aliante. Up to $25K in closing costs, upgrades, and rate buydowns.',
  alternates: { canonical: 'https://www.aliantehomesforsale.com/builders/incentives' },
};

export default function Incentives() {
  return (
    <main>
      <NewConstructionHero />
      <BuilderComparison />
      <TopBuilders />
      <BuilderIncentivesInfo />
      <NewConstructionCTA />
    </main>
  );
}
