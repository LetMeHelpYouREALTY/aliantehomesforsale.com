import type { Metadata } from 'next';
import CommunityAmenities from '../../components/CommunityAmenities';
import NewConstructionCTA from '../../components/NewConstructionCTA';
import NewConstructionHero from '../../components/NewConstructionHero';
import SunCityContent from '../../components/SunCityContent';
import TopBuilders from '../../components/TopBuilders';

export const metadata: Metadata = {
  title: 'Del Webb Sun City Aliante - Active Adult 55+ Homes',
  description:
    'Del Webb homes in Sun City Aliante. Active adult 55+ community. Resort amenities, golf courses. 25+ homes available.',
  alternates: { canonical: 'https://www.aliantehomesforsale.com/builders/del-webb' },
};

export default function DelWebb() {
  return (
    <main>
      <NewConstructionHero />
      <TopBuilders />
      <SunCityContent />
      <CommunityAmenities />
      <NewConstructionCTA />
    </main>
  );
}
