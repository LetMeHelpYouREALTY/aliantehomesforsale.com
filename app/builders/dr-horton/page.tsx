import type { Metadata } from 'next';
import { pageHero } from '../../../lib/content/site-images';
import HortonContent from '../../components/HortonContent';
import NewConstructionCTA from '../../components/NewConstructionCTA';
import NewConstructionHero from '../../components/NewConstructionHero';
import TopBuilders from '../../components/TopBuilders';

export const metadata: Metadata = {
  title: 'D.R. Horton at Tule Springs | Buyer Agency East of Aliante',
  description:
    'D.R. Horton new construction at Villages at Tule Springs, east of Aliante ZIP 89084. Independent buyer’s agent. Confirm live inventory. Call (702) 707-7273.',
  keywords: 'dr horton tule springs, dr horton aliante, dr horton north las vegas',
  alternates: { canonical: 'https://www.aliantehomesforsale.com/builders/dr-horton' },
};

export default function DrHorton() {
  return (
    <main>
      <NewConstructionHero
        title="D.R. Horton at Tule Springs | Buyer Agency East of Aliante"
        subtitle="Compare Tule Springs new homes with Aliante resale. Tule Springs is not ZIP 89084. Call (702) 707-7273."
        filterHeading="D.R. Horton at Tule Springs — not ZIP 89084"
        image={pageHero('/builders/dr-horton')}
      />
      <HortonContent />
      <TopBuilders />
      <NewConstructionCTA />
    </main>
  );
}
