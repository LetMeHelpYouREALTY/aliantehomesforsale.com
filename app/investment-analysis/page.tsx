import type { Metadata } from 'next';
import AboutExpertise from '../components/AboutExpertise';
import EnhancedContactForm from '../components/EnhancedContactForm';
import HomesCTA from '../components/HomesCTA';
import HomesForSaleHero from '../components/HomesForSaleHero';
import HomesMarketSnapshot from '../components/HomesMarketSnapshot';
import InvestmentAnalysisContent from '../components/InvestmentAnalysisContent';

export const metadata: Metadata = {
  title: 'Investment Analysis for Aliante Rentals | North Las Vegas 89084',
  description:
    'Buy-and-hold analysis for Aliante, North Las Vegas 89084. I sell the home; HOA and rental management is a different company. Call (702) 707-7273.',
  alternates: {
    canonical: 'https://www.aliantehomesforsale.com/investment-analysis',
  },
};

export default function InvestmentAnalysis() {
  return (
    <main>
      <HomesForSaleHero
        title="Investment Analysis for Aliante Rentals | North Las Vegas 89084"
        subtitle="Address-level cash-flow review in ZIP 89084. Call (702) 707-7273. I do not manage leases."
      />
      <HomesMarketSnapshot />
      <InvestmentAnalysisContent />
      <AboutExpertise />
      <section className="py-16 px-4 bg-white">
        <div className="container">
          <EnhancedContactForm />
        </div>
      </section>
      <HomesCTA />
    </main>
  );
}
