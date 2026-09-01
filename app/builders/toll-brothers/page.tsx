import type { Metadata } from 'next';
import { pageHero } from '../../../lib/content/site-images';
import NewConstructionCTA from '../../components/NewConstructionCTA';
import NewConstructionHero from '../../components/NewConstructionHero';
import TollBrothersContent from '../../components/TollBrothersContent';

export const metadata: Metadata = {
  title: 'Toll Brothers at Elkhorn Grove | Las Vegas 89131, not 89084',
  description:
    'Toll Brothers is not currently building inside Aliante ZIP 89084. Elkhorn Grove is at 5819 Kings Bluff Ave, Las Vegas NV 89131 — not an Aliante address. Call (702) 707-7273.',
  keywords: 'toll brothers aliante, toll brothers elkhorn grove, toll brothers north las vegas',
  alternates: { canonical: 'https://www.aliantehomesforsale.com/builders/toll-brothers' },
};

export default function TollBrothers() {
  return (
    <main>
      <NewConstructionHero
        title="Toll Brothers at Elkhorn Grove | Las Vegas 89131, not 89084"
        subtitle="Not currently building inside Aliante ZIP 89084. Confirm live inventory at Elkhorn Grove. Call (702) 707-7273."
        filterHeading="Toll Brothers vs Aliante 89084 builders"
        image={pageHero('/builders/toll-brothers')}
      />
      <TollBrothersContent />
      <NewConstructionCTA />
    </main>
  );
}
