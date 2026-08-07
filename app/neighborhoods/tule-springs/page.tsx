import type { Metadata } from 'next';
import BuilderDetailContent from '../../components/BuilderDetailContent';
import NeighborhoodCards from '../../components/NeighborhoodCards';
import NeighborhoodsCTA from '../../components/NeighborhoodsCTA';
import NewConstructionHero from '../../components/NewConstructionHero';
import TopBuilders from '../../components/TopBuilders';

export const metadata: Metadata = {
  title: 'Villages at Tule Springs - New Master-Planned Community',
  description:
    'Villages at Tule Springs master-planned community. New construction, parks, trails. $450K-$750K.',
  alternates: { canonical: 'https://www.aliantehomesforsale.com/neighborhoods/tule-springs' },
};

export default function TuleSprings() {
  return (
    <main>
      <NewConstructionHero />
      <TopBuilders />
      <BuilderDetailContent />
      <NeighborhoodCards />
      <NeighborhoodsCTA />
    </main>
  );
}
