import type { Metadata } from 'next';
import ContactHero from '../components/ContactHero';
import EnhancedContactForm from '../components/EnhancedContactForm';
import HomesCTA from '../components/HomesCTA';
import HomesMarketSnapshot from '../components/HomesMarketSnapshot';
import MortgageCalculatorContent from '../components/MortgageCalculatorContent';

export const metadata: Metadata = {
  title: 'Mortgage Calculator Aliante - Estimate Your Payment',
  description:
    'Calculate your mortgage payment for Aliante homes. Current rates, payment estimates, and lender recommendations.',
  alternates: {
    canonical: 'https://www.aliantehomesforsale.com/mortgage-calculator',
  },
};

export default function MortgageCalculator() {
  return (
    <main>
      <ContactHero />
      <MortgageCalculatorContent />
      <section className="py-16 px-4 bg-white">
        <div className="container">
          <EnhancedContactForm event="consultation" />
        </div>
      </section>
      <HomesMarketSnapshot />
      <HomesCTA />
    </main>
  );
}
