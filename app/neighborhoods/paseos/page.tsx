import { pageHero } from '../../../lib/content/site-images';
import { pageMetadata } from '../../../lib/seo-utils';
import EnhancedFeaturedProperties from '../../components/EnhancedFeaturedProperties';
import NeighborhoodCards from '../../components/NeighborhoodCards';
import NeighborhoodDetailContent from '../../components/NeighborhoodDetailContent';
import NeighborhoodPlaceSchema from '../../components/NeighborhoodPlaceSchema';
import NeighborhoodsCTA from '../../components/NeighborhoodsCTA';
import NeighborhoodsHero from '../../components/NeighborhoodsHero';
import PageFAQ from '../../components/PageFAQ';

export const metadata = pageMetadata({
  title: 'The Paseos Aliante | Homes for Sale North Las Vegas 89084',
  description:
    'The Paseos is an open-access Aliante village in North Las Vegas 89084 with parks and trails. Confirm live MLS listings. Call (702) 500-1332.',
  path: '/neighborhoods/paseos',
  keywords: 'the paseos aliante, paseos north las vegas 89084',
});

export default function Paseos() {
  return (
    <>
      <NeighborhoodPlaceSchema
        name="The Paseos"
        description="The Paseos offers affordable, quality homes perfect for first-time buyers and families looking to enter the Aliante housing market with great value."
        priceRange="$300,000 - $500,000"
        latitude="36.2656"
        longitude="-115.2189"
        features={[
          'Affordable home prices',
          'First-time buyer friendly',
          'Quality construction',
          'Community parks',
          'Low HOA fees',
          'Family-oriented neighborhood',
        ]}
        builders={['KB Home', 'Beazer Homes', 'D.R. Horton']}
        homeTypes={['Single-family homes', 'Starter homes', 'Townhomes']}
        specialFeatures={['Lowest entry price point in Aliante', 'FHA/VA financing friendly', 'Move-in ready homes']}
      />
      <main>
        <NeighborhoodsHero
          title="The Paseos Aliante | Homes for Sale North Las Vegas 89084"
          subtitle="Open-access village inside the Aliante master plan. Confirm live MLS. Call (702) 500-1332."
          image={pageHero('/neighborhoods/paseos')}
        />
        <EnhancedFeaturedProperties />
        <NeighborhoodDetailContent village="paseos" />
        <NeighborhoodCards />
        <PageFAQ path="/neighborhoods/paseos" title="The Paseos FAQ" />
        <NeighborhoodsCTA />
      </main>
    </>
  );
}
