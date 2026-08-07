import type { Metadata } from 'next';
import AlianteFAQ from '../components/AlianteFAQ';
import HomesCTA from '../components/HomesCTA';
import HomesForSaleHero from '../components/HomesForSaleHero';
import HomesMarketSnapshot from '../components/HomesMarketSnapshot';
import HomesSearchTips from '../components/HomesSearchTips';
import PropertyCategories from '../components/PropertyCategories';
import RealScoutSearchSection from '../components/RealScoutSearchSection';

export const metadata: Metadata = {
  title: 'Aliante Homes For Sale | North Las Vegas NV 89084 MLS Listings',
  description:
    'Browse Aliante homes for sale in North Las Vegas, NV 89084. MLS listings updated about every 15 minutes. Gated communities, Sun City 55+, golf course homes, new construction. Call (702) 707-7273.',
  keywords:
    'Aliante homes for sale, North Las Vegas homes, 89084 homes for sale, Aliante real estate, gated community Las Vegas, Sun City Aliante',
  alternates: {
    canonical: 'https://www.aliantehomesforsale.com/homes-for-sale',
  },
};

export default function HomesForSale() {
  return (
    <>
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
