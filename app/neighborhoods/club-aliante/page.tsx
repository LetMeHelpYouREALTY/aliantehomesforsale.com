import type { Metadata } from 'next';
import NeighborhoodsHero from '../../components/NeighborhoodsHero';
import CommunityAmenities from '../../components/CommunityAmenities';
import GolfHomesContent from '../../components/GolfHomesContent';
import EnhancedFeaturedProperties from '../../components/EnhancedFeaturedProperties';
import NeighborhoodCards from '../../components/NeighborhoodCards';
import NeighborhoodsCTA from '../../components/NeighborhoodsCTA';
import NeighborhoodPlaceSchema from '../../components/NeighborhoodPlaceSchema';

export const metadata: Metadata = {
  title: 'Club Aliante Golf Course Homes - Premier Golf Living',
  description: 'Club Aliante golf course homes. Championship golf, clubhouse amenities, stunning views. $500K-$900K.',
  alternates: { canonical: 'https://www.aliantehomesforsale.com/neighborhoods/club-aliante' },
};

export default function ClubAliante() {
  return (
    <>
      <NeighborhoodPlaceSchema
        name="Club Aliante"
        description="Club Aliante offers premier golf course living with homes surrounding the championship 18-hole Aliante Golf Club and world-class clubhouse amenities."
        priceRange="$500,000 - $900,000"
        latitude="36.2722"
        longitude="-115.2145"
        features={[
          'Championship 18-hole golf course',
          'Golf course views and access',
          'Resort-style clubhouse',
          'Fine dining at club restaurant',
          'Pro shop and golf instruction',
          'Premium lot premiums for course views',
        ]}
        builders={['Toll Brothers', 'Tri Pointe Homes', 'Custom builders']}
        homeTypes={['Golf course homes', 'Single-family estates', 'Premium view lots']}
        specialFeatures={['Direct golf course access', 'Club membership opportunities', 'Tournament-quality course']}
      />
      <main>
        <NeighborhoodsHero />
        <CommunityAmenities />
        <GolfHomesContent />
        <EnhancedFeaturedProperties />
        <NeighborhoodCards />
        <NeighborhoodsCTA />
      </main>
    </>
  );
}
