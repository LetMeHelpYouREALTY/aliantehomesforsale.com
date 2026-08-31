import type { Metadata } from 'next';
import { pageHero } from '../../lib/content/site-images';
import AboutHero from '../components/AboutHero';
import BuyerGuideContent from '../components/BuyerGuideContent';
import ContactWhyChoose from '../components/ContactWhyChoose';
import ContextualLinks from '../components/ContextualLinks';
import HomesCTA from '../components/HomesCTA';
import HomesSearchTips from '../components/HomesSearchTips';

export const metadata: Metadata = {
  title: 'Buyer Representation in Aliante | North Las Vegas 89084 Realtor',
  description:
    'Independent buyer’s agent in Aliante, North Las Vegas 89084. Club Aliante, gated villages, Sun City Aliante, Tule Springs. Call (702) 707-7273.',
  alternates: {
    canonical: 'https://www.aliantehomesforsale.com/buyer-guide',
  },
};

export default function BuyerGuide() {
  return (
    <main>
      <AboutHero
        title="Buyer Representation in Aliante, North Las Vegas 89084"
        subtitle="I represent you on Club Aliante, gated villages, Sun City Aliante, and Tule Springs new construction. Call (702) 707-7273."
        image={pageHero('/buyer-guide')}
      />
      <BuyerGuideContent />
      <div className="px-4">
        <ContextualLinks variant="buying" />
      </div>
      <HomesSearchTips />
      <ContactWhyChoose />
      <HomesCTA
        heading="Buyer representation in Aliante, North Las Vegas 89084"
        subheading="I represent you on Club Aliante, gated villages, and Sun City Aliante. Call (702) 707-7273."
        secondaryHref="/homes-for-sale"
        secondaryLabel="Search live MLS"
        calendlyEvent="showing"
        calendlyLabel="Schedule a buyer consultation"
      />
    </main>
  );
}
