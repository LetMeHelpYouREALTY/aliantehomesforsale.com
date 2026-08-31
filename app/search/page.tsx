import type { Metadata } from 'next';
import { pageHero } from '../../lib/content/site-images';
import HomesCTA from '../components/HomesCTA';
import HomesForSaleHero from '../components/HomesForSaleHero';
import HomesSearchTips from '../components/HomesSearchTips';
import PropertyCategories from '../components/PropertyCategories';
import RealScoutSearchSection from '../components/RealScoutSearchSection';
import SearchPageContent from '../components/SearchPageContent';

export const metadata: Metadata = {
  title: 'Search Aliante MLS | Realtor Filters, North Las Vegas 89084',
  description:
    'Search Aliante homes for sale with MLS filters. ZIP 89084. Updated about every 15 minutes. Call (702) 707-7273.',
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
        image={pageHero('/search')}
      />
      <RealScoutSearchSection />
      <SearchPageContent />
      <PropertyCategories />
      <HomesSearchTips />
      <HomesCTA
        heading="Search Aliante MLS with a 89084 realtor"
        subheading="Filter Club Aliante, gated villages, and Sun City Aliante. Listings update about every 15 minutes."
        secondaryHref="/homes-for-sale"
        secondaryLabel="Browse MLS listings"
        calendlyEvent="showing"
        calendlyLabel="Schedule a showing"
      />
    </main>
  );
}
