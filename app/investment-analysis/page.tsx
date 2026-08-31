import type { Metadata } from 'next';
import AboutExpertise from '../components/AboutExpertise';
import EnhancedContactForm from '../components/EnhancedContactForm';
import HomesCTA from '../components/HomesCTA';
import HomesForSaleHero from '../components/HomesForSaleHero';
import HomesMarketSnapshot from '../components/HomesMarketSnapshot';
import InvestmentAnalysisContent from '../components/InvestmentAnalysisContent';

export const metadata: Metadata = {
  title: 'Investment Property Analysis Aliante - ROI Calculator',
  description:
    'Investment property analysis for Aliante real estate. ROI calculations, rental market data, and expert guidance.',
  alternates: {
    canonical: 'https://www.aliantehomesforsale.com/investment-analysis',
  },
};

export default function InvestmentAnalysis() {
  return (
    <main>
      <HomesForSaleHero />
      <HomesMarketSnapshot />
      <InvestmentAnalysisContent />
      <AboutExpertise />
      <section className="py-16 px-4 bg-white">
        <div className="container">
          <EnhancedContactForm event="appointment" />
        </div>
      </section>
      <HomesCTA />
    </main>
  );
}
