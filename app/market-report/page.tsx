import { pageHero } from '../../lib/content/site-images';
import { pageMetadata } from '../../lib/seo-utils';
import ContextualLinks from '../components/ContextualLinks';
import HomesCTA from '../components/HomesCTA';
import HomesForSaleHero from '../components/HomesForSaleHero';
import HomesMarketSnapshot from '../components/HomesMarketSnapshot';
import MarketReportContent from '../components/MarketReportContent';
import PageFAQ from '../components/PageFAQ';
import PropertyCategories from '../components/PropertyCategories';

export const metadata = pageMetadata({
  title: 'Aliante Market Report | ZIP 89084 MLS Trends, North Las Vegas',
  description:
    'Aliante, North Las Vegas 89084 market tools from live MLS. Confirm current medians on the widgets. Call (702) 707-7273.',
  path: '/market-report',
});

export default function MarketReport() {
  return (
    <main>
      <HomesForSaleHero
        title="Aliante Market Report | ZIP 89084 MLS Trends, North Las Vegas"
        subtitle="Use live widgets for current medians. I will not quote a stale average in a heading. Call (702) 707-7273."
        image={pageHero('/market-report')}
      />
      <HomesMarketSnapshot />
      <MarketReportContent />
      <div className="px-4">
        <ContextualLinks variant="market" />
      </div>
      <PropertyCategories />
      <PageFAQ path="/market-report" title="Aliante market report FAQ" />
      <HomesCTA />
    </main>
  );
}
