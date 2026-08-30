import { pageHero } from '../../lib/content/site-images';
import { pageMetadata } from '../../lib/seo/page-metadata';
import AlianteFAQ from '../components/AlianteFAQ';
import HomesCTA from '../components/HomesCTA';
import HomesForSaleHero from '../components/HomesForSaleHero';
import HomesMarketSnapshot from '../components/HomesMarketSnapshot';
import HomesSearchTips from '../components/HomesSearchTips';
import PropertyCategories from '../components/PropertyCategories';
import RealScoutSearchSection from '../components/RealScoutSearchSection';

export const metadata = pageMetadata('/homes-for-sale', {
  title: 'Aliante homes for sale | North Las Vegas 89084 MLS',
  description:
    'Browse live MLS listings in Aliante, North Las Vegas 89084. Gated communities, Sun City 55+, golf-course homes, and new construction. Updates about every 15 minutes.',
});

export default function HomesForSale() {
  return (
    <main className="homes-for-sale-page">
      <HomesForSaleHero
        title="Aliante homes for sale in North Las Vegas 89084"
        subtitle="Live MLS via RealScout. Listings refresh about every 15 minutes. Call (702) 707-7273 for a showing."
        image={pageHero('/homes-for-sale')}
      />
      <RealScoutSearchSection />
      <PropertyCategories />
      <HomesMarketSnapshot />
      <HomesSearchTips />
      <AlianteFAQ />
      <HomesCTA />
    </main>
  );
}
