import type { Metadata } from 'next';
import NeighborhoodsHero from '../../components/NeighborhoodsHero';
import NeighborhoodCards from '../../components/NeighborhoodCards';
import NeighborhoodDetailContent from '../../components/NeighborhoodDetailContent';
import EnhancedFeaturedProperties from '../../components/EnhancedFeaturedProperties';
import NeighborhoodsCTA from '../../components/NeighborhoodsCTA';
import NeighborhoodPlaceSchema from '../../components/NeighborhoodPlaceSchema';

export const metadata: Metadata = {
  title: 'The Paseos Aliante - Affordable Family Homes',
  description: 'The Paseos affordable homes in Aliante. Quality homes for first-time buyers and families. $300K-$500K.',
  alternates: { canonical: 'https://www.aliantehomesforsale.com/neighborhoods/paseos' },
};

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
        <NeighborhoodsHero />
        <EnhancedFeaturedProperties />
        <NeighborhoodDetailContent />
        <NeighborhoodCards />
        <NeighborhoodsCTA />
      </main>
    </>
  );
}
