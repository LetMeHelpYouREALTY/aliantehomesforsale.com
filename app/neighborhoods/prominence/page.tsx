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
  title: 'The Prominence Aliante | Gated Homes North Las Vegas 89084',
  description:
    'The Prominence gated village in Aliante, North Las Vegas 89084. Private streets and controlled entry. Confirm live MLS listings. Call (702) 500-1332.',
  path: '/neighborhoods/prominence',
  keywords: 'the prominence aliante, gated homes aliante, prominence north las vegas 89084',
});

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
        <NeighborhoodsHero
          title="The Prominence Aliante | Gated Homes North Las Vegas 89084"
          subtitle="Controlled-access village inside the Aliante master plan. Confirm live MLS. Call (702) 500-1332."
          image={pageHero('/neighborhoods/prominence')}
        />
        <EnhancedFeaturedProperties />
        <CommunityAmenities />
        <NeighborhoodDetailContent village="prominence" />
        <NeighborhoodCards />
        <PageFAQ path="/neighborhoods/prominence" title="The Prominence FAQ" />
        <NeighborhoodsCTA />
      </main>
    </>
  );
}
