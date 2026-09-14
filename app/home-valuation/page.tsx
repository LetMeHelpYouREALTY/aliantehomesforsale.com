import { pageHero } from '../../lib/content/site-images';
import { pageMetadata } from '../../lib/seo-utils';
import AboutCTA from '../components/AboutCTA';
import AboutExpertise from '../components/AboutExpertise';
import ContactHero from '../components/ContactHero';
import EnhancedContactForm from '../components/EnhancedContactForm';
import HomeValuationContent from '../components/HomeValuationContent';
import PageFAQ from '../components/PageFAQ';

export const metadata = pageMetadata({
  title: 'What’s My Aliante Home Worth? | CMA in North Las Vegas 89084',
  description:
    'Comparative market analysis for Aliante, North Las Vegas 89084. Club Aliante, gated, and Sun City comps — not a valley average. Call (702) 707-7273.',
  path: '/home-valuation',
});

export default function HomeValuation() {
  return (
    <main>
      <ContactHero
        title="What’s My Aliante Home Worth? | CMA in North Las Vegas 89084"
        subtitle="Neighborhood comps for Club Aliante, gated villages, and Sun City Aliante. Call (702) 707-7273."
        image={pageHero('/home-valuation')}
      />
      <HomeValuationContent />
      <EnhancedContactForm event="appointment" />
      <AboutExpertise />
      <PageFAQ path="/home-valuation" title="Aliante home valuation FAQ" />
      <AboutCTA />
    </main>
  );
}
