import type { Metadata } from 'next';
import NeighborhoodsHero from '../../components/NeighborhoodsHero';
import CommunityAmenities from '../../components/CommunityAmenities';
import SunCityContent from '../../components/SunCityContent';
import EnhancedFeaturedProperties from '../../components/EnhancedFeaturedProperties';
import NeighborhoodCards from '../../components/NeighborhoodCards';
import NeighborhoodsCTA from '../../components/NeighborhoodsCTA';
import NeighborhoodPlaceSchema from '../../components/NeighborhoodPlaceSchema';

export const metadata: Metadata = {
  title: 'Sun City Aliante 55+ - Active Adult Community',
  description: 'Sun City Aliante active adult 55+ community. Resort amenities, golf, social activities. $380K-$650K.',
  alternates: { canonical: 'https://www.aliantehomesforsale.com/neighborhoods/sun-city' },
};

export default function SunCity() {
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
        <NeighborhoodsHero />
        <CommunityAmenities />
        <SunCityContent />
        <EnhancedFeaturedProperties />
        <NeighborhoodCards />
        <NeighborhoodsCTA />
      </main>
    </>
  );
}
