import type { Metadata } from 'next';
import { pageHero } from '../../../lib/content/site-images';
import NewConstructionCTA from '../../components/NewConstructionCTA';
import NewConstructionHero from '../../components/NewConstructionHero';
import RichmondAmericanContent from '../../components/RichmondAmericanContent';

export const metadata: Metadata = {
  title: 'Richmond American | Confirm ZIP vs Aliante 89084',
  description:
    'Richmond American Homes — confirm whether the community is inside Aliante ZIP 89084 before you tour. Independent buyer’s agent. Call (702) 707-7273.',
  keywords: 'richmond american aliante, richmond american north las vegas',
  alternates: { canonical: 'https://www.aliantehomesforsale.com/builders/richmond-american' },
};

export default function RichmondAmerican() {
  return (
    <main>
      <NewConstructionHero
        title="Richmond American | Confirm ZIP vs Aliante 89084"
        subtitle="Confirm whether the community is inside Aliante ZIP 89084 before you tour. Call (702) 707-7273."
        filterHeading="Richmond American — confirm ZIP vs 89084"
        image={pageHero('/builders/richmond-american')}
      />
      <RichmondAmericanContent />
      <NewConstructionCTA />
    </main>
  );
}
