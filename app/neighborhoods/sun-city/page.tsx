import type { Metadata } from 'next';
import CommunityAmenities from '../../components/CommunityAmenities';
import EnhancedFeaturedProperties from '../../components/EnhancedFeaturedProperties';
import NeighborhoodCards from '../../components/NeighborhoodCards';
import NeighborhoodsCTA from '../../components/NeighborhoodsCTA';
import NeighborhoodsHero from '../../components/NeighborhoodsHero';
import SunCityContent from '../../components/SunCityContent';

export const metadata: Metadata = {
  title: 'Sun City Aliante 55+ - Active Adult Community',
  description:
    'Sun City Aliante active adult 55+ community. Resort amenities, golf, social activities. $380K-$650K.',
  // URL 301s to /sun-city-aliante via next.config.ts; canonical matches destination
  alternates: { canonical: 'https://www.aliantehomesforsale.com/sun-city-aliante' },
  robots: { index: false, follow: true },
};

export default function SunCity() {
  return (
    <main>
      <NeighborhoodsHero />
      <CommunityAmenities />
      <SunCityContent />
      <EnhancedFeaturedProperties />
      <NeighborhoodCards />
      <NeighborhoodsCTA />
    </main>
  );
}
