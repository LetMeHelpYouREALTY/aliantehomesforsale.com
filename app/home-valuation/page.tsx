import type { Metadata } from 'next';
import ContactHero from '../components/ContactHero';
import HomeValuationContent from '../components/HomeValuationContent';
import EnhancedContactForm from '../components/EnhancedContactForm';
import AboutExpertise from '../components/AboutExpertise';
import AboutCTA from '../components/AboutCTA';
import StructuredData from '../components/StructuredData';

export const metadata: Metadata = {
  title: 'Free Home Valuation Aliante - What\'s Your Home Worth?',
  description: 'Get a free, accurate home valuation for your Aliante property. CMA analysis from local experts.',
  alternates: {
    canonical: 'https://www.aliantehomesforsale.com/home-valuation',
  },
  openGraph: {
    title: 'Free Home Valuation Aliante - What\'s Your Home Worth?',
    description: 'Get a free, accurate home valuation for your Aliante property. CMA analysis from local experts.',
    url: 'https://www.aliantehomesforsale.com/home-valuation',
    type: 'article',
    modifiedTime: new Date().toISOString(),
  },
};

export default function HomeValuation() {
  return (
    <>
      <StructuredData
        type="Article"
        article={{
          headline: 'Free Home Valuation Service for Aliante Properties',
          description: 'Get an accurate, professional home valuation for your Aliante property. Comprehensive market analysis from experienced local real estate experts.',
          url: 'https://www.aliantehomesforsale.com/home-valuation',
          datePublished: '2018-01-01T00:00:00Z',
          dateModified: new Date().toISOString(),
          authorName: 'Dr. Jan Duffy',
        }}
      />
      <main>
        <ContactHero />
        <HomeValuationContent />
        <section className="py-16 px-4 bg-white">
          <div className="container">
            <EnhancedContactForm />
          </div>
        </section>
        <AboutExpertise />
        <AboutCTA />
      </main>
    </>
  );
}
