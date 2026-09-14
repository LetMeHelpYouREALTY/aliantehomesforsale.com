import { pageHero } from '../../lib/content/site-images';
import { pageMetadata } from '../../lib/seo-utils';
import ContactHero from '../components/ContactHero';
import EnhancedContactForm from '../components/EnhancedContactForm';
import HomesCTA from '../components/HomesCTA';
import HomesMarketSnapshot from '../components/HomesMarketSnapshot';
import MortgageCalculatorContent from '../components/MortgageCalculatorContent';
import MortgagePaymentEstimator from '../components/MortgagePaymentEstimator';
import PageFAQ from '../components/PageFAQ';

export const metadata = pageMetadata({
  title: 'Aliante Mortgage Payment Estimate | North Las Vegas 89084',
  description:
    'Estimate principal and interest for an Aliante home using the rate your lender quoted. Confirm taxes, insurance, and HOA separately. Call (702) 707-7273.',
  path: '/mortgage-calculator',
});

export default function MortgageCalculator() {
  return (
    <main>
      <ContactHero
        title="Aliante Mortgage Payment Calculator | North Las Vegas 89084"
        subtitle="Estimate a payment, then confirm rates with a lender. I am your realtor, not your loan officer."
        image={pageHero('/mortgage-calculator')}
      />
      <MortgagePaymentEstimator />
      <MortgageCalculatorContent />
      <EnhancedContactForm event="consultation" />
      <HomesMarketSnapshot />
      <PageFAQ path="/mortgage-calculator" title="Mortgage estimate FAQ" />
      <HomesCTA />
    </main>
  );
}
