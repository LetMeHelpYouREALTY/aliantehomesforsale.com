import { pageHero } from '../../lib/content/site-images';
import { pageMetadata } from '../../lib/seo/page-metadata';
import AdvancedSearchForm from '../components/AdvancedSearchForm';
import HomesCTA from '../components/HomesCTA';
import HomesForSaleHero from '../components/HomesForSaleHero';
import HomesSearchTips from '../components/HomesSearchTips';
import PropertyCategories from '../components/PropertyCategories';
import SearchPageContent from '../components/SearchPageContent';

export const metadata = pageMetadata('/search', {
  title: 'Search Aliante MLS listings',
  description:
    'Filter Aliante homes by price, beds, baths, and property type. MLS results refresh about every 15 minutes.',
});

export default function Search() {
  return (
    <main>
      <HomesForSaleHero
        title="Search Aliante MLS listings"
        subtitle="Use filters below. Results come from live MLS, not a static inventory count."
        image={pageHero('/search')}
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
