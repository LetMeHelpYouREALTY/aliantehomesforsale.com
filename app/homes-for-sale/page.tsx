import type { Metadata } from 'next';
import RealScoutAdvancedSearch from '../components/RealScoutAdvancedSearch';
import StructuredData from '../components/StructuredData';
import HomesForSaleHero from '../components/HomesForSaleHero';
import PropertyCategories from '../components/PropertyCategories';
import HomesMarketSnapshot from '../components/HomesMarketSnapshot';
import HomesSearchTips from '../components/HomesSearchTips';
import AlianteFAQ from '../components/AlianteFAQ';
import HomesCTA from '../components/HomesCTA';

export const metadata: Metadata = {
  title: 'Aliante Homes For Sale North Las Vegas NV - 286+ MLS Listings Updated Daily',
  description: 'Browse 286+ Aliante homes for sale in North Las Vegas, NV 89084. Updated every 15 minutes from Greater Las Vegas MLS. Search gated communities, Sun City Aliante 55+ active adult, Club Aliante golf course homes, The Prominence luxury estates, and new construction. Expert local guidance since 2018. Call (702) 707-7273.',
  keywords: 'Aliante homes for sale, North Las Vegas homes, 89084 homes for sale, Aliante real estate, gated community Las Vegas, Sun City Aliante 55+, Club Aliante golf homes, The Prominence luxury homes, new construction Aliante, MLS listings North Las Vegas',
  authors: [{ name: 'Dr. Jan Duffy', url: 'https://www.aliantehomesforsale.com/about' }],
  alternates: {
    canonical: 'https://www.aliantehomesforsale.com/homes-for-sale',
  },
  openGraph: {
    title: 'Aliante Homes For Sale - 286+ MLS Listings',
    description: 'Find your dream home in Aliante, North Las Vegas. Updated every 15 minutes from MLS.',
    url: 'https://www.aliantehomesforsale.com/homes-for-sale',
    type: 'website',
  },
  other: {
    'article:published_time': '2024-01-01T08:00:00Z',
    'article:modified_time': new Date().toISOString(),
    'geo.region': 'US-NV',
    'geo.placename': 'Aliante, North Las Vegas',
    'geo.position': '36.1699;-115.1398',
  },
};

export default function HomesForSale() {
  return (
    <>
      <StructuredData type="PropertyListing" />
      
      <main className="homes-for-sale-page">
        {/* Hero Section */}
        <HomesForSaleHero />

        {/* Advanced Search Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#1a365d' }}>
                Find Your Perfect Aliante Home
              </h2>
              <p className="text-lg text-gray-600">
                Search 286+ active listings updated live from MLS
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
              <RealScoutAdvancedSearch />
            </div>
          </div>
        </section>

        {/* Property Categories */}
        <PropertyCategories />

        {/* Market Snapshot */}
        <HomesMarketSnapshot />

        {/* Search Tips */}
        <HomesSearchTips />

        {/* FAQ Section */}
        <AlianteFAQ />

        {/* CTA Section */}
        <HomesCTA />
      </main>
    </>
  );
}
