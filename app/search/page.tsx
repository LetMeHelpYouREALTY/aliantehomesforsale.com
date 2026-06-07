import type { Metadata } from 'next';
import HomesForSaleHero from '../components/HomesForSaleHero';
import AdvancedSearchForm from '../components/AdvancedSearchForm';
import SearchPageContent from '../components/SearchPageContent';
import PropertyCategories from '../components/PropertyCategories';
import HomesSearchTips from '../components/HomesSearchTips';
import HomesCTA from '../components/HomesCTA';

export const metadata: Metadata = {
  title: 'Search Aliante Homes - Advanced MLS Property Search Tool',
  description: 'Search 286+ Aliante homes for sale with advanced MLS filters. Find properties by neighborhood, price, bedrooms, bathrooms, and amenities. Updated every 15 minutes from Greater Las Vegas MLS. Search gated communities, 55+ active adult, golf homes, and new construction in North Las Vegas, NV 89084.',
  keywords: 'Aliante home search, MLS search North Las Vegas, property search 89084, advanced home search, Aliante gated communities, Sun City Aliante homes, golf course properties',
  authors: [{ name: 'Dr. Jan Duffy', url: 'https://www.aliantehomesforsale.com/about' }],
  alternates: {
    canonical: 'https://www.aliantehomesforsale.com/search',
  },
  openGraph: {
    title: 'Search Aliante Homes - Advanced MLS Search',
    description: 'Search 286+ Aliante homes with advanced filters. Updated every 15 minutes.',
    url: 'https://www.aliantehomesforsale.com/search',
    type: 'website',
  },
  other: {
    'article:modified_time': new Date().toISOString(),
    'geo.region': 'US-NV',
    'geo.placename': 'Aliante, North Las Vegas',
  },
};

export default function Search() {
  return (
    <main>
      <HomesForSaleHero />
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <AdvancedSearchForm />
        </div>
      </section>
      <SearchPageContent />
      <PropertyCategories />
      <HomesSearchTips />
      <HomesCTA />
    </main>
  );
}
