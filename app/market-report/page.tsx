import type { Metadata } from 'next';
import HomesForSaleHero from '../components/HomesForSaleHero';
import HomesMarketSnapshot from '../components/HomesMarketSnapshot';
import MarketReportContent from '../components/MarketReportContent';
import ContextualLinks from '../components/ContextualLinks';
import PropertyCategories from '../components/PropertyCategories';
import HomesCTA from '../components/HomesCTA';
import StructuredData from '../components/StructuredData';

export const metadata: Metadata = {
  title: 'Aliante Market Report - Real-Time MLS Data & Trends',
  description: 'Live Aliante market data updated every 15 minutes. Median prices, inventory levels, days on market, and market trends.',
  alternates: {
    canonical: 'https://www.aliantehomesforsale.com/market-report',
  },
  openGraph: {
    title: 'Aliante Market Report - Real-Time MLS Data & Trends',
    description: 'Live Aliante market data updated every 15 minutes. Median prices, inventory levels, days on market, and market trends.',
    url: 'https://www.aliantehomesforsale.com/market-report',
    type: 'article',
    modifiedTime: new Date().toISOString(),
  },
};

export default function MarketReport() {
  return (
    <>
      <StructuredData
        type="Article"
        article={{
          headline: 'Aliante Real Estate Market Report - Live MLS Data',
          description: 'Current Aliante real estate market statistics updated every 15 minutes from MLS. Median home prices, inventory levels, days on market, and market trends for North Las Vegas.',
          url: 'https://www.aliantehomesforsale.com/market-report',
          datePublished: '2018-01-01T00:00:00Z',
          dateModified: new Date().toISOString(),
          authorName: 'Dr. Jan Duffy',
        }}
      />
      <main>
        <HomesForSaleHero />
        <HomesMarketSnapshot />
        <MarketReportContent />
        <div className="px-4">
          <ContextualLinks variant="market" />
        </div>
        <PropertyCategories />
        <HomesCTA />
      </main>
    </>
  );
}
