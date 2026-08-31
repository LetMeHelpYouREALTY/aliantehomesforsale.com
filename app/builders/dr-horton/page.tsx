import type { Metadata } from 'next';
import { pageHero } from '../../../lib/content/site-images';
import HortonContent from '../../components/HortonContent';
import NewConstructionCTA from '../../components/NewConstructionCTA';
import NewConstructionHero from '../../components/NewConstructionHero';
import TopBuilders from '../../components/TopBuilders';

export const metadata: Metadata = {
  title: 'D.R. Horton near Aliante | Tule Springs Buyer Agency 89084',
  description:
    'D.R. Horton new construction near Aliante in Villages at Tule Springs, North Las Vegas. Independent buyer’s agent. Confirm live inventory. Call (702) 707-7273.',
  keywords: 'dr horton tule springs, dr horton aliante, dr horton north las vegas',
  alternates: { canonical: 'https://www.aliantehomesforsale.com/builders/dr-horton' },
};

export default function DrHorton() {
  return (
    <main>
      <NewConstructionHero
        title="D.R. Horton near Aliante | Tule Springs Buyer Agency 89084"
        subtitle="Compare Tule Springs new homes with Aliante resale. Confirm live inventory. Call (702) 707-7273."
        filterHeading="D.R. Horton near Aliante and Tule Springs"
        image={pageHero('/builders/dr-horton')}
      />
      <HortonContent />
      <TopBuilders />
      <NewConstructionCTA />
    </main>
  );
}
