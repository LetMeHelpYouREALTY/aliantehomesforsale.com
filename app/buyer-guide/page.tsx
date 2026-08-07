import type { Metadata } from 'next';
import AboutHero from '../components/AboutHero';
import BuyerGuideContent from '../components/BuyerGuideContent';
import ConstructionProcess from '../components/ConstructionProcess';
import ContactWhyChoose from '../components/ContactWhyChoose';
import ContextualLinks from '../components/ContextualLinks';
import HomesCTA from '../components/HomesCTA';
import HomesSearchTips from '../components/HomesSearchTips';

export const metadata: Metadata = {
  title: 'First-Time Home Buyer Guide Aliante - Expert Tips',
  description:
    'Complete guide for first-time home buyers in Aliante. Step-by-step process, expert tips, and local market insights.',
  alternates: {
    canonical: 'https://www.aliantehomesforsale.com/buyer-guide',
  },
};

export default function BuyerGuide() {
  return (
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
  );
}
