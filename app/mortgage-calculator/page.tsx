import type { Metadata } from 'next';
import { pageHero } from '../../lib/content/site-images';
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
      <ContactHero
        title="Aliante Mortgage Payment Calculator | North Las Vegas 89084"
        subtitle="Estimate a payment, then confirm rates with a lender. I am your realtor, not your loan officer."
        image={pageHero('/mortgage-calculator')}
      />
      <MortgageCalculatorContent />
      <section className="py-16 px-4 bg-white">
        <div className="container">
          <EnhancedContactForm />
        </div>
      </section>
      <HomesMarketSnapshot />
      <HomesCTA />
    </main>
  );
}
