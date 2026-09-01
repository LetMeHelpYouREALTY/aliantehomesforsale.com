import type { Metadata } from 'next';
import { pageHero } from '../../lib/content/site-images';
import ContextualLinks from '../components/ContextualLinks';
import HomesCTA from '../components/HomesCTA';
import HomesForSaleHero from '../components/HomesForSaleHero';
import HomesMarketSnapshot from '../components/HomesMarketSnapshot';
import MarketReportContent from '../components/MarketReportContent';

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
        image={pageHero('/market-report')}
      />
      <MarketReportContent />
      <HomesMarketSnapshot />
      <div className="px-4">
        <ContextualLinks variant="market" />
      </div>
      <HomesCTA
        heading="Read live Aliante MLS before you offer"
        subheading="Village comps change through the day. I will not quote a stale median. Call (702) 707-7273."
        secondaryHref="/homes-for-sale"
        secondaryLabel="Browse MLS listings"
        calendlyEvent="consultation"
        calendlyLabel="Schedule a market review"
      />
    </main>
  );
}
