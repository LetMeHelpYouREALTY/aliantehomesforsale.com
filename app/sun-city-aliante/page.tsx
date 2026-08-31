import type { Metadata } from 'next';
import CommunityAmenities from '../components/CommunityAmenities';
import EnhancedFeaturedProperties from '../components/EnhancedFeaturedProperties';
import NeighborhoodCards from '../components/NeighborhoodCards';
import NeighborhoodsCTA from '../components/NeighborhoodsCTA';
import NeighborhoodsHero from '../components/NeighborhoodsHero';
import SunCityContent from '../components/SunCityContent';

export const metadata: Metadata = {
  title: 'Sun City Aliante Homes for Sale | 55+ North Las Vegas 89084',
  description:
    'Sun City Aliante homes for sale in North Las Vegas. Del Webb 55+ inside ZIP 89084 — not Ardiente (89081), not Del Webb Summerlin or Mesquite. Call (702) 707-7273.',
  keywords:
    'sun city aliante, sun city aliante homes for sale, sun city aliante north las vegas, del webb sun city aliante, 55+ homes aliante',
  alternates: {
    canonical: 'https://www.aliantehomesforsale.com/sun-city-aliante',
  },
};

export default function SunCityAliante() {
  return (
    <main>
      <NeighborhoodsHero
        title="Sun City Aliante Homes for Sale | 55+ North Las Vegas 89084"
        subtitle="Del Webb’s 55+ community inside Aliante. Ardiente is a different 55+ community in ZIP 89081. Call (702) 707-7273."
      />
      <SunCityContent />
      <CommunityAmenities />
      <EnhancedFeaturedProperties />
      <NeighborhoodCards />
      <NeighborhoodsCTA />
    </main>
  );
}
