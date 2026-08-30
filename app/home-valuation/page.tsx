import type { Metadata } from 'next';
import AboutCTA from '../components/AboutCTA';
import AboutExpertise from '../components/AboutExpertise';
import ContactHero from '../components/ContactHero';
import EnhancedContactForm from '../components/EnhancedContactForm';
import HomeValuationContent from '../components/HomeValuationContent';

export const metadata: Metadata = {
  title: "Free Home Valuation Aliante - What's Your Home Worth?",
  description:
    'Get a free, accurate home valuation for your Aliante property. CMA analysis from local experts.',
  alternates: {
    canonical: 'https://www.aliantehomesforsale.com/home-valuation',
  },
};

export default function HomeValuation() {
  return (
    <main>
      <ContactHero />
      <HomeValuationContent />
      <section className="py-16 px-4 bg-white">
        <div className="container">
          <EnhancedContactForm event="appointment" />
        </div>
      </section>
      <AboutExpertise />
      <AboutCTA />
    </main>
  );
}
