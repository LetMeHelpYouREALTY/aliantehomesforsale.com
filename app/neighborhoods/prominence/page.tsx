import type { Metadata } from 'next';
import NeighborhoodsHero from '../../components/NeighborhoodsHero';
import NeighborhoodCards from '../../components/NeighborhoodCards';
import CommunityAmenities from '../../components/CommunityAmenities';
import NeighborhoodDetailContent from '../../components/NeighborhoodDetailContent';
import EnhancedFeaturedProperties from '../../components/EnhancedFeaturedProperties';
import NeighborhoodsCTA from '../../components/NeighborhoodsCTA';
import NeighborhoodPlaceSchema from '../../components/NeighborhoodPlaceSchema';

export const metadata: Metadata = {
  title: 'The Prominence Aliante - Luxury Gated Community',
  description: 'The Prominence luxury gated community in Aliante. Golf course views, premium amenities. $600K-$1.2M+.',
  alternates: { canonical: 'https://www.aliantehomesforsale.com/neighborhoods/prominence' },
};

export default function Prominence() {
  return (
    <>
      <NeighborhoodPlaceSchema
        name="The Prominence"
        description="The Prominence is Aliante's premier luxury gated community featuring golf course views, premium amenities, and exclusive living."
        priceRange="$600,000 - $1,200,000+"
        latitude="36.2764"
        longitude="-115.2108"
        features={[
          'Gated community with 24/7 security',
          'Golf course views and access',
          'Premium lot sizes',
          'Luxury custom homes',
          'Resort-style amenities',
          'Walking distance to Aliante Golf Club',
        ]}
        builders={['Custom builders', 'Luxury home builders']}
        homeTypes={['Single-family luxury homes', 'Golf course estates', 'Custom builds']}
        specialFeatures={['Guard-gated entrance', 'Championship golf course proximity', 'Premium lot premiums']}
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
