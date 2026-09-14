import { pageHero } from '../../lib/content/site-images';
import { pageMetadata } from '../../lib/seo-utils';
import AboutExpertise from '../components/AboutExpertise';
import EnhancedContactForm from '../components/EnhancedContactForm';
import HomesCTA from '../components/HomesCTA';
import HomesForSaleHero from '../components/HomesForSaleHero';
import HomesMarketSnapshot from '../components/HomesMarketSnapshot';
import InvestmentAnalysisContent from '../components/InvestmentAnalysisContent';
import PageFAQ from '../components/PageFAQ';

export const metadata = pageMetadata({
  title: 'Investment Analysis for Aliante Rentals | North Las Vegas 89084',
  description:
    'Buy-and-hold analysis for Aliante, North Las Vegas 89084. I sell the home; HOA and rental management is a different company. Call (702) 707-7273.',
  path: '/investment-analysis',
});

export default function InvestmentAnalysis() {
  return (
    <main>
      <HomesForSaleHero
        title="Investment Analysis for Aliante Rentals | North Las Vegas 89084"
        subtitle="Address-level cash-flow review in ZIP 89084. Call (702) 707-7273. I do not manage leases."
        image={pageHero('/investment-analysis')}
      />
      <HomesMarketSnapshot />
      <InvestmentAnalysisContent />
      <AboutExpertise />
      <EnhancedContactForm event="appointment" />
      <PageFAQ path="/investment-analysis" title="Aliante investment FAQ" />
      <HomesCTA />
    </main>
  );
}
