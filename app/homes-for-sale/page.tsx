import type { Metadata } from 'next';
import StructuredData from '../components/StructuredData';
import HomesForSaleHero from '../components/HomesForSaleHero';
import RealScoutSearchSection from '../components/RealScoutSearchSection';
import PropertyCategories from '../components/PropertyCategories';
import HomesMarketSnapshot from '../components/HomesMarketSnapshot';
import HomesSearchTips from '../components/HomesSearchTips';
import AlianteFAQ from '../components/AlianteFAQ';
import HomesCTA from '../components/HomesCTA';

export const metadata: Metadata = {
  title: 'Aliante Homes For Sale North Las Vegas NV - 286+ MLS Listings',
  description:
    'Browse 286+ Aliante homes for sale in North Las Vegas, NV. Updated every 15 minutes from Greater Las Vegas MLS. Gated communities, Sun City 55+, golf course homes, new construction. Call (702) 707-7273.',
  keywords:
    'Aliante homes for sale, North Las Vegas homes, 89084 homes for sale, Aliante real estate, gated community Las Vegas, Sun City Aliante',
  alternates: {
    canonical: 'https://www.aliantehomesforsale.com/homes-for-sale',
  },
};

export default function HomesForSale() {
  return (
    <>
      <StructuredData type="PropertyListing" />

      <main className="homes-for-sale-page">
        {/* Hero Section */}
        <HomesForSaleHero />

        {/* RealScout search: right below hero (primary lead-gen) */}
        <RealScoutSearchSection />

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
