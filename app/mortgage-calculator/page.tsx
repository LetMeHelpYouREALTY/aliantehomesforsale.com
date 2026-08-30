import { pageMetadata } from '../../lib/seo/page-metadata';
import ContactHero from '../components/ContactHero';
import EnhancedContactForm from '../components/EnhancedContactForm';
import HomesCTA from '../components/HomesCTA';
import HomesMarketSnapshot from '../components/HomesMarketSnapshot';
import MortgageCalculatorContent from '../components/MortgageCalculatorContent';

export const metadata = pageMetadata('/mortgage-calculator', {
  title: 'Aliante mortgage payment calculator',
  description:
    'Estimate principal and interest for Aliante homes. Not a rate lock. Add HOA dues on top of PITI.',
});

export default function MortgageCalculator() {
  return (
    <main>
      <ContactHero
        title="Aliante mortgage payment calculator"
        subtitle="Estimate principal and interest. Not a rate lock. Add HOA dues on top of PITI."
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
