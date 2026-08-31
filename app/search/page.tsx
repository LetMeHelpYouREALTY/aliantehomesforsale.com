import type { Metadata } from 'next';
import AdvancedSearchForm from '../components/AdvancedSearchForm';
import HomesCTA from '../components/HomesCTA';
import HomesForSaleHero from '../components/HomesForSaleHero';
import HomesSearchTips from '../components/HomesSearchTips';
import PropertyCategories from '../components/PropertyCategories';
import SearchPageContent from '../components/SearchPageContent';

export const metadata: Metadata = {
  title: 'Search Aliante MLS | Realtor Filters, North Las Vegas 89084',
  description: 'Search Aliante homes for sale with MLS filters. ZIP 89084. Updated about every 15 minutes. Call (702) 707-7273.',
  alternates: {
    canonical: 'https://www.aliantehomesforsale.com/search',
  },
};

export default function Search() {
  return (
    <main>
      <HomesForSaleHero
        title="Search Aliante MLS | Realtor Filters for North Las Vegas 89084"
        subtitle="Filter Club Aliante, gated villages, and Sun City Aliante. Listings update about every 15 minutes."
      />
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
