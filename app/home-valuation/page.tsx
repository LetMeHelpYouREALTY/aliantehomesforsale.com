import type { Metadata } from 'next';
import { pageHero } from '../../lib/content/site-images';
import AboutCTA from '../components/AboutCTA';
import AboutExpertise from '../components/AboutExpertise';
import ContactHero from '../components/ContactHero';
import EnhancedContactForm from '../components/EnhancedContactForm';
import HomeValuationContent from '../components/HomeValuationContent';

export const metadata: Metadata = {
  title: 'What’s My Aliante Home Worth? | CMA in North Las Vegas 89084',
  description:
    'Free comparative market analysis for Aliante, North Las Vegas 89084. Club Aliante, gated, and Sun City comps — not a valley average. Call (702) 707-7273.',
  alternates: {
    canonical: 'https://www.aliantehomesforsale.com/home-valuation',
  },
};

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
      <AboutCTA />
    </main>
  );
}
