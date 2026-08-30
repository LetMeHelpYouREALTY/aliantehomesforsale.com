import { pageHero } from '../../lib/content/site-images';
import { pageMetadata } from '../../lib/seo/page-metadata';
import AboutCTA from '../components/AboutCTA';
import AboutExpertise from '../components/AboutExpertise';
import ContactHero from '../components/ContactHero';
import EnhancedContactForm from '../components/EnhancedContactForm';
import HomeValuationContent from '../components/HomeValuationContent';

export const metadata = pageMetadata('/home-valuation', {
  title: 'Free Aliante home valuation (CMA)',
  description:
    'Request a comparative market analysis for an Aliante, North Las Vegas 89084 address. Not an appraisal.',
});

export default function HomeValuation() {
  return (
    <main>
      <ContactHero
        title="Free Aliante home valuation (CMA)"
        subtitle="Not an appraisal. Request a comparative market analysis for a 89084 address."
        image={pageHero('/home-valuation')}
      />
      <HomeValuationContent />
      <section className="py-16 px-4 bg-white">
        <div className="container">
          <EnhancedContactForm />
        </div>
      </section>
      <AboutExpertise />
      <AboutCTA />
    </main>
  );
}
