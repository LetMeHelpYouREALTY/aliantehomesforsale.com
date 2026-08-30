import AboutExpertise from '../components/AboutExpertise';
import EnhancedContactForm from '../components/EnhancedContactForm';
import HomesCTA from '../components/HomesCTA';
import HomesForSaleHero from '../components/HomesForSaleHero';
import HomesMarketSnapshot from '../components/HomesMarketSnapshot';
import InvestmentAnalysisContent from '../components/InvestmentAnalysisContent';
import { pageMetadata } from '../../lib/seo/page-metadata';

export const metadata = pageMetadata('/investment-analysis', {
  title: 'Aliante investment property analysis',
  description:
    'Rental rules, HOA caps, and 89084 comps for investors. Not tax or investment advice.',
});

export default function InvestmentAnalysis() {
  return (
    <main>
      <HomesForSaleHero
        title="Aliante investment property analysis"
        subtitle="Model HOA dues, lease minimums, and sold comps with Dr. Jan Duffy before you underwrite."
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
