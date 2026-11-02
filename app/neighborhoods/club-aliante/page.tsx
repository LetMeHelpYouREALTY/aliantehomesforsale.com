import { pageHero } from '../../../lib/content/site-images';
import { pageMetadata } from '../../../lib/seo-utils';
import CommunityAmenities from '../../components/CommunityAmenities';
import EnhancedFeaturedProperties from '../../components/EnhancedFeaturedProperties';
import NeighborhoodCards from '../../components/NeighborhoodCards';
import NeighborhoodDetailContent from '../../components/NeighborhoodDetailContent';
import NeighborhoodPlaceSchema from '../../components/NeighborhoodPlaceSchema';
import NeighborhoodsCTA from '../../components/NeighborhoodsCTA';
import NeighborhoodsHero from '../../components/NeighborhoodsHero';
import PageFAQ from '../../components/PageFAQ';

export const metadata = pageMetadata({
  title: 'Club Aliante Homes for Sale | Gated Golf Village, North Las Vegas',
  description:
    'Club Aliante is the gated village along Aliante Golf Club in North Las Vegas 89084. Fairway and interior lots. Independent realtor Dr. Jan Duffy. Call (702) 500-1332.',
  path: '/neighborhoods/club-aliante',
  keywords:
    'club aliante, club aliante homes for sale, club aliante north las vegas, aliante golf club, golf homes aliante',
});

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
        <NeighborhoodsHero
          title="Club Aliante Homes for Sale | Gated Golf Village, North Las Vegas"
          subtitle="Gated village next to Aliante Golf Club in ZIP 89084. Call (702) 500-1332 to tour live listings."
          image={pageHero('/neighborhoods/club-aliante')}
        />
        <NeighborhoodDetailContent village="club-aliante" />
        <CommunityAmenities />
        <EnhancedFeaturedProperties />
        <NeighborhoodCards />
        <PageFAQ path="/neighborhoods/club-aliante" title="Club Aliante village FAQ" />
        <NeighborhoodsCTA />
      </main>
    </>
  );
}
