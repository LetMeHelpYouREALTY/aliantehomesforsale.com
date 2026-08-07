import type { Metadata } from 'next';
import BuilderDetailContent from '../../components/BuilderDetailContent';
import ConstructionProcess from '../../components/ConstructionProcess';
import NewConstructionCTA from '../../components/NewConstructionCTA';
import NewConstructionHero from '../../components/NewConstructionHero';
import TopBuilders from '../../components/TopBuilders';

export const metadata: Metadata = {
  title: 'Richmond American Homes - Quality New Construction',
  description:
    'Richmond American Homes near Aliante. Quality construction with customization options. 12+ homes available.',
  alternates: { canonical: 'https://www.aliantehomesforsale.com/builders/richmond-american' },
};

export default function RichmondAmerican() {
  return (
    <main>
      <NewConstructionHero />
      <TopBuilders />
      <ConstructionProcess />
      <BuilderDetailContent />
      <NewConstructionCTA />
    </main>
  );
}
