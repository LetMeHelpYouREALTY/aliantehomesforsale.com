import type { Metadata } from 'next';
import { pageHero } from '../../../lib/content/site-images';
import BuilderDetailContent from '../../components/BuilderDetailContent';
import NewConstructionCTA from '../../components/NewConstructionCTA';
import NewConstructionHero from '../../components/NewConstructionHero';
import QuickMoveInHomes from '../../components/QuickMoveInHomes';
import TopBuilders from '../../components/TopBuilders';
import WhyNewConstruction from '../../components/WhyNewConstruction';

export const metadata: Metadata = {
  title: 'Lennar Homes in Aliante | Buyer Agency, North Las Vegas 89084',
  description:
    'Lennar new construction in Aliante, North Las Vegas 89084. Independent buyer’s agent. Confirm live inventory and incentives. Call (702) 707-7273.',
  keywords: 'lennar aliante, lennar north las vegas, lennar homes 89084',
  alternates: { canonical: 'https://www.aliantehomesforsale.com/builders/lennar' },
};

export default function Lennar() {
  return (
    <main>
      <NewConstructionHero
        title="Lennar Homes in Aliante | Buyer Agency, North Las Vegas 89084"
        subtitle="I represent you on the Lennar contract in ZIP 89084. Confirm live inventory. Call (702) 707-7273."
        filterHeading="Lennar communities near Aliante 89084"
        image={pageHero('/builders/lennar')}
      />
      <TopBuilders />
      <WhyNewConstruction />
      <BuilderDetailContent />
      <QuickMoveInHomes />
      <NewConstructionCTA />
    </main>
  );
}
