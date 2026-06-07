import type { Metadata } from 'next';
import AboutHero from '../components/AboutHero';
import BuyerGuideContent from '../components/BuyerGuideContent';
import ConstructualLinks from '../components/ContextualLinks';
import ConstructionProcess from '../components/ConstructionProcess';
import HomesSearchTips from '../components/HomesSearchTips';
import ContactWhyChoose from '../components/ContactWhyChoose';
import HomesCTA from '../components/HomesCTA';
import StructuredData from '../components/StructuredData';

export const metadata: Metadata = {
  title: 'First-Time Home Buyer Guide Aliante - Expert Tips',
  description: 'Complete guide for first-time home buyers in Aliante. Step-by-step process, expert tips, and local market insights.',
  alternates: {
    canonical: 'https://www.aliantehomesforsale.com/buyer-guide',
  },
  openGraph: {
    title: 'First-Time Home Buyer Guide Aliante - Expert Tips',
    description: 'Complete guide for first-time home buyers in Aliante. Step-by-step process, expert tips, and local market insights.',
    url: 'https://www.aliantehomesforsale.com/buyer-guide',
    type: 'article',
    publishedTime: '2018-01-01T00:00:00Z',
    modifiedTime: new Date().toISOString(),
    authors: ['Dr. Jan Duffy'],
  },
};

export default function BuyerGuide() {
  return (
    <>
      <StructuredData
        type="Article"
        article={{
          headline: 'First-Time Home Buyer Guide for Aliante, North Las Vegas',
          description: 'Complete step-by-step guide for first-time home buyers in Aliante, North Las Vegas. Learn the home buying process, financing options, and local market insights.',
          url: 'https://www.aliantehomesforsale.com/buyer-guide',
          datePublished: '2018-01-01T00:00:00Z',
          dateModified: new Date().toISOString(),
          authorName: 'Dr. Jan Duffy',
        }}
      />
      <main>
        <AboutHero />
        <BuyerGuideContent />
        <div className="px-4">
          <ContextualLinks variant="buying" />
        </div>
        <HomesSearchTips />
        <ConstructionProcess />
        <ContactWhyChoose />
        <HomesCTA />
      </main>
    </>
  );
}
