import type { Metadata } from 'next';
import BuilderDetailContent from '../../components/BuilderDetailContent';
import ConstructionProcess from '../../components/ConstructionProcess';
import NewConstructionCTA from '../../components/NewConstructionCTA';
import NewConstructionHero from '../../components/NewConstructionHero';
import TopBuilders from '../../components/TopBuilders';

export const metadata: Metadata = {
  title: 'Richmond American near Aliante | North Las Vegas 89084',
  description:
    'Richmond American Homes near Aliante, North Las Vegas. Independent buyer’s agent. Confirm live inventory and whether a community is inside ZIP 89084. Call (702) 707-7273.',
  keywords: 'richmond american aliante, richmond american north las vegas',
  alternates: { canonical: 'https://www.aliantehomesforsale.com/builders/richmond-american' },
};

export default function RichmondAmerican() {
  return (
    <main>
      <NewConstructionHero
        title="Richmond American near Aliante | North Las Vegas 89084"
        subtitle="Confirm whether the community is inside Aliante ZIP 89084 before you tour. Call (702) 707-7273."
        filterHeading="Richmond American near Aliante"
      />
      <TopBuilders />
      <ConstructionProcess />
      <BuilderDetailContent />
      <NewConstructionCTA />
    </main>
  );
}
