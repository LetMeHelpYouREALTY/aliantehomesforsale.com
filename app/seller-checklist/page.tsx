import { pageHero } from '../../lib/content/site-images';
import { pageMetadata } from '../../lib/seo-utils';
import AboutCTA from '../components/AboutCTA';
import AboutExpertise from '../components/AboutExpertise';
import AboutHero from '../components/AboutHero';
import ConstructionProcess from '../components/ConstructionProcess';
import ContextualLinks from '../components/ContextualLinks';
import PageFAQ from '../components/PageFAQ';
import SellerChecklistContent from '../components/SellerChecklistContent';

export const metadata = pageMetadata({
  title: 'Sell Your Aliante Home | Listing Agent, North Las Vegas 89084',
  description:
    'Listing agent for Aliante, North Las Vegas 89084. Neighborhood comps, MLS marketing, and offer negotiation. Call (702) 707-7273.',
  path: '/seller-checklist',
});

export default function SellerChecklist() {
  return (
    <main>
      <AboutHero
        title="Sell Your Aliante Home | Listing Agent, North Las Vegas 89084"
        subtitle="Club Aliante, gated villages, and Sun City Aliante listings. Call (702) 707-7273 for a CMA."
        image={pageHero('/seller-checklist')}
      />
      <SellerChecklistContent />
      <div className="px-4">
        <ContextualLinks variant="selling" />
      </div>
      <ConstructionProcess />
      <AboutExpertise />
      <PageFAQ path="/seller-checklist" title="Selling an Aliante home FAQ" />
      <AboutCTA />
    </main>
  );
}
