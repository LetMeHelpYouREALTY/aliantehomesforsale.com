import type { Metadata } from 'next';
import { pageHero } from '../../lib/content/site-images';
import AboutCTA from '../components/AboutCTA';
import AboutHero from '../components/AboutHero';
import ContextualLinks from '../components/ContextualLinks';
import SellerChecklistContent from '../components/SellerChecklistContent';

export const metadata: Metadata = {
  title: 'Sell Your Aliante Home | Listing Agent, North Las Vegas 89084',
  description:
    'Listing agent for Aliante, North Las Vegas 89084. Neighborhood comps, MLS marketing, and offer negotiation. Call (702) 707-7273.',
  alternates: {
    canonical: 'https://www.aliantehomesforsale.com/seller-checklist',
  },
};

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
      <AboutCTA
        heading="List your Aliante home with an 89084 realtor"
        subheading="Neighborhood comps, MLS photos, and offer review. Call (702) 707-7273."
        secondaryHref="/home-valuation"
        secondaryLabel="Request a CMA"
        calendlyEvent="listing"
        calendlyLabel="Schedule a listing consultation"
      />
    </main>
  );
}
