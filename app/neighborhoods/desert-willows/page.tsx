import type { Metadata } from 'next';
import NeighborhoodsHero from '../../components/NeighborhoodsHero';
import NeighborhoodCards from '../../components/NeighborhoodCards';
import CommunityAmenities from '../../components/CommunityAmenities';
import NeighborhoodDetailContent from '../../components/NeighborhoodDetailContent';
import EnhancedFeaturedProperties from '../../components/EnhancedFeaturedProperties';
import NeighborhoodsCTA from '../../components/NeighborhoodsCTA';
import NeighborhoodPlaceSchema from '../../components/NeighborhoodPlaceSchema';

export const metadata: Metadata = {
  title: 'Desert Willows Aliante - Family Community',
  description: 'Desert Willows family neighborhood in Aliante. Top schools, parks, family amenities. $400K-$700K.',
  alternates: { canonical: 'https://www.aliantehomesforsale.com/neighborhoods/desert-willows' },
};

export default function DesertWillows() {
  return (
    <>
      <NeighborhoodPlaceSchema
        name="Desert Willows"
        description="Desert Willows is a family-friendly neighborhood in Aliante featuring top-rated schools, parks, and community amenities perfect for growing families."
        priceRange="$400,000 - $700,000"
        latitude="36.2695"
        longitude="-115.2156"
        features={[
          'Highly-rated schools nearby',
          'Multiple parks and playgrounds',
          'Family-oriented community',
          'Low HOA fees',
          'Sidewalks and bike paths',
          'Community events and activities',
        ]}
        builders={['Lennar', 'D.R. Horton', 'Richmond American']}
        homeTypes={['Single-family homes', 'Two-story family homes', 'Starter homes']}
        specialFeatures={['Walk to elementary school', 'Community pools', 'Tot lots and splash pads']}
      />
      <main>
        <NeighborhoodsHero />
        <EnhancedFeaturedProperties />
        <CommunityAmenities />
        <NeighborhoodDetailContent />
        <NeighborhoodCards />
        <NeighborhoodsCTA />
      </main>
    </>
  );
}
