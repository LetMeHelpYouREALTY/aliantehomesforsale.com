import { pageHero } from '../../lib/content/site-images';
import { pageMetadata } from '../../lib/seo/page-metadata';
import AboutCTA from '../components/AboutCTA';
import AboutExpertise from '../components/AboutExpertise';
import AboutHero from '../components/AboutHero';
import ConstructionProcess from '../components/ConstructionProcess';
import ContextualLinks from '../components/ContextualLinks';
import SellerChecklistContent from '../components/SellerChecklistContent';

export const metadata = pageMetadata('/seller-checklist', {
  title: 'Aliante home selling checklist',
  description:
    'CMA, repairs, MLS photos, and negotiation for Aliante 89084 sellers with Dr. Jan Duffy.',
});

export default function SellerChecklist() {
  return (
    <main>
      <AboutHero
        title="Aliante home selling checklist"
        subtitle="CMA, repairs, MLS photos, and negotiation for 89084 sellers."
        image={pageHero('/seller-checklist')}
      />
      <SellerChecklistContent />
      <div className="px-4">
        <ContextualLinks variant="selling" />
      </div>
      <ConstructionProcess />
      <AboutExpertise />
      <AboutCTA />
    </main>
  );
}
