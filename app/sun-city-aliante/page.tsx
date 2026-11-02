import { pageHero } from '../../lib/content/site-images';
import { pageMetadata } from '../../lib/seo-utils';
import CommunityAmenities from '../components/CommunityAmenities';
import EnhancedFeaturedProperties from '../components/EnhancedFeaturedProperties';
import NeighborhoodCards from '../components/NeighborhoodCards';
import NeighborhoodPlaceSchema from '../components/NeighborhoodPlaceSchema';
import NeighborhoodsCTA from '../components/NeighborhoodsCTA';
import NeighborhoodsHero from '../components/NeighborhoodsHero';
import PageFAQ from '../components/PageFAQ';
import SunCityContent from '../components/SunCityContent';

export const metadata = pageMetadata({
  title: 'Sun City Aliante Homes for Sale | 55+ North Las Vegas 89084',
  description:
    'Sun City Aliante homes for sale in North Las Vegas. Del Webb 55+ inside ZIP 89084 — not Ardiente (89081), not Del Webb Summerlin or Mesquite. Call (702) 500-1332.',
  path: '/sun-city-aliante',
  keywords:
    'sun city aliante, sun city aliante homes for sale, sun city aliante north las vegas, del webb sun city aliante, 55+ homes aliante',
});

export default function SunCityAliante() {
  return (
    <>
      <NeighborhoodPlaceSchema
        name="Sun City Aliante"
        description="Sun City Aliante is a premier 55+ active adult community offering resort-style amenities, golf, fitness centers, and endless social activities for an active retirement lifestyle."
        priceRange="$380,000 - $650,000"
        latitude="36.2811"
        longitude="-115.2173"
        features={[
          '55+ age-restricted community',
          'Resort-style amenities and pools',
          'Mountain Shadows Golf Club access',
          'Fitness centers and classes',
          'Social clubs and activities',
          'Low-maintenance homes',
          'Security and gated sections',
        ]}
        builders={['Del Webb (Pulte)', 'Sun City builders']}
        homeTypes={['Single-story ranch homes', 'Low-maintenance villas', 'Active adult cottages']}
        specialFeatures={['Age-restricted 55+', 'Full-time activities director', 'Multiple clubhouses', 'Bocce ball and pickleball courts']}
      />
      <main>
        <NeighborhoodsHero
          title="Sun City Aliante Homes for Sale | 55+ North Las Vegas 89084"
          subtitle="Del Webb’s 55+ community inside Aliante. Ardiente is a different 55+ community in ZIP 89081. Call (702) 500-1332."
          image={pageHero('/sun-city-aliante')}
        />
        <SunCityContent />
        <CommunityAmenities />
        <EnhancedFeaturedProperties />
        <NeighborhoodCards />
        <PageFAQ path="/sun-city-aliante" title="Sun City Aliante FAQ" />
        <NeighborhoodsCTA />
      </main>
    </>
  );
}
