import type { Metadata } from 'next';
import BuilderDetailContent from '../../components/BuilderDetailContent';
import NewConstructionCTA from '../../components/NewConstructionCTA';
import NewConstructionHero from '../../components/NewConstructionHero';
import TopBuilders from '../../components/TopBuilders';
import WhyNewConstruction from '../../components/WhyNewConstruction';

export const metadata: Metadata = {
  title: 'Toll Brothers Luxury Homes - Ultra-Luxury New Construction',
  description:
    'Toll Brothers luxury homes near Aliante. Fortune 500 builder. $575K-$1.6M. Premium materials and design.',
  alternates: { canonical: 'https://www.aliantehomesforsale.com/builders/toll-brothers' },
};

export default function TollBrothers() {
  return (
    <main>
      <NewConstructionHero />
      <TopBuilders />
      <WhyNewConstruction />
      <BuilderDetailContent />
      <NewConstructionCTA />
    </main>
  );
}
