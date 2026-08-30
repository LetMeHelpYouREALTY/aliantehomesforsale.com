import { pageHero } from '../../lib/content/site-images';
import { pageMetadata } from '../../lib/seo/page-metadata';
import ContextualLinks from '../components/ContextualLinks';
import HomesCTA from '../components/HomesCTA';
import HomesForSaleHero from '../components/HomesForSaleHero';
import HomesMarketSnapshot from '../components/HomesMarketSnapshot';
import MarketReportContent from '../components/MarketReportContent';
import PropertyCategories from '../components/PropertyCategories';

export const metadata = pageMetadata('/market-report', {
  title: 'Aliante market report | live MLS snapshot',
  description:
    'Aliante, North Las Vegas 89084 market context from MLS-connected widgets. Inventory and days on market refresh about every 15 minutes.',
});

export default function MarketReport() {
  return (
    <main>
      <HomesForSaleHero
        title="Aliante market report for 89084"
        subtitle="Widget figures are live from MLS. Narrative copy is a guide, not a CMA."
        image={pageHero('/market-report')}
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
