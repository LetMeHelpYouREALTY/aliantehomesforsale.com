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
  title: 'Desert Willows Aliante | Homes for Sale North Las Vegas 89084',
  description:
    'Desert Willows is an open-access Aliante village in North Las Vegas 89084 with parks and community pools. Confirm live MLS listings. Call (702) 500-1332.',
  path: '/neighborhoods/desert-willows',
  keywords: 'desert willows aliante, desert willows north las vegas 89084',
});

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
        <NeighborhoodsHero
          title="Desert Willows Aliante | Homes for Sale North Las Vegas 89084"
          subtitle="Open-access village inside the Aliante master plan. Confirm live MLS. Call (702) 500-1332."
          image={pageHero('/neighborhoods/desert-willows')}
        />
        <EnhancedFeaturedProperties />
        <CommunityAmenities />
        <NeighborhoodDetailContent village="desert-willows" />
        <NeighborhoodCards />
        <PageFAQ path="/neighborhoods/desert-willows" title="Desert Willows FAQ" />
        <NeighborhoodsCTA />
      </main>
    </>
  );
}
