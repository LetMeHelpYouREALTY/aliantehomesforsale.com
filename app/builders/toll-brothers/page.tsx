import type { Metadata } from 'next';
import { pageHero } from '../../../lib/content/site-images';
import NewConstructionCTA from '../../components/NewConstructionCTA';
import NewConstructionHero from '../../components/NewConstructionHero';
import TollBrothersContent from '../../components/TollBrothersContent';

export const metadata: Metadata = {
  title: 'Toll Brothers near Aliante | Elkhorn Grove, Las Vegas 89131',
  description:
    'Toll Brothers is not currently building inside Aliante ZIP 89084. Closest community: Elkhorn Grove, 5819 Kings Bluff Ave, Las Vegas NV 89131. Call (702) 707-7273.',
  keywords: 'toll brothers aliante, toll brothers elkhorn grove, toll brothers north las vegas',
  alternates: { canonical: 'https://www.aliantehomesforsale.com/builders/toll-brothers' },
};

export default function TollBrothers() {
  return (
    <main>
      <NewConstructionHero
        title="Toll Brothers near Aliante | Elkhorn Grove, Las Vegas 89131"
        subtitle="Not currently building inside Aliante ZIP 89084. Confirm live inventory at Elkhorn Grove. Call (702) 707-7273."
        filterHeading="Toll Brothers vs Aliante 89084 builders"
        image={pageHero('/builders/toll-brothers')}
      />
      <TollBrothersContent />
      <NewConstructionCTA />
    </main>
  );
}
