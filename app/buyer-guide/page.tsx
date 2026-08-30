import { pageHero } from '../../lib/content/site-images';
import { pageMetadata } from '../../lib/seo/page-metadata';
import AboutHero from '../components/AboutHero';
import BuyerGuideContent from '../components/BuyerGuideContent';
import ConstructionProcess from '../components/ConstructionProcess';
import ContactWhyChoose from '../components/ContactWhyChoose';
import ContextualLinks from '../components/ContextualLinks';
import HomesCTA from '../components/HomesCTA';
import HomesSearchTips from '../components/HomesSearchTips';

export const metadata = pageMetadata('/buyer-guide', {
  title: 'Aliante home buyer guide',
  description:
    'Pre-approval, live MLS, tours, and closing in Aliante, North Las Vegas 89084, with Dr. Jan Duffy.',
});

export default function BuyerGuide() {
  return (
    <main>
      <AboutHero
        title="Aliante home buyer guide"
        subtitle="Pre-approval, live MLS, tours, and closing in North Las Vegas 89084."
        image={pageHero('/buyer-guide')}
      />
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
