import type { Metadata } from 'next';
import ContextualLinks from '../components/ContextualLinks';
import HomesCTA from '../components/HomesCTA';
import HomesForSaleHero from '../components/HomesForSaleHero';
import HomesMarketSnapshot from '../components/HomesMarketSnapshot';
import MarketReportContent from '../components/MarketReportContent';
import PropertyCategories from '../components/PropertyCategories';

export const metadata: Metadata = {
  title: 'Aliante Market Report | ZIP 89084 MLS Trends, North Las Vegas',
  description:
    'Aliante, North Las Vegas 89084 market tools from live MLS. Confirm current medians on the widgets. Call (702) 707-7273.',
  alternates: {
    canonical: 'https://www.aliantehomesforsale.com/market-report',
  },
};

export default function MarketReport() {
  return (
    <main>
      <HomesForSaleHero
        title="Aliante Market Report | ZIP 89084 MLS Trends, North Las Vegas"
        subtitle="Use live widgets for current medians. I will not quote a stale average in a heading. Call (702) 707-7273."
      />
      <HomesMarketSnapshot />
      <MarketReportContent />
      <div className="px-4">
        <ContextualLinks variant="market" />
      </div>
      <PropertyCategories />
      <HomesCTA />
    </main>
  );
}
