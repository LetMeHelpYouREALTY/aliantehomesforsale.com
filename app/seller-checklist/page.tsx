import { pageHero } from '../../lib/content/site-images';
import { pageMetadata } from '../../lib/seo-utils';
import AboutCTA from '../components/AboutCTA';
import AboutExpertise from '../components/AboutExpertise';
import AboutHero from '../components/AboutHero';
import ConstructionProcess from '../components/ConstructionProcess';
import ContextualLinks from '../components/ContextualLinks';
import HowToSchema from '../components/HowToSchema';
import PageFAQ from '../components/PageFAQ';
import SellerChecklistContent from '../components/SellerChecklistContent';

export const metadata = pageMetadata({
  title: 'Sell Your Aliante Home | Listing Agent, North Las Vegas 89084',
  description:
    'Listing agent for Aliante, North Las Vegas 89084. Neighborhood comps, MLS marketing, and offer negotiation. Call (702) 500-1332.',
  path: '/seller-checklist',
});

export default function SellerChecklist() {
  const sellingSteps = [
    { name: 'Request a Comparative Market Analysis (CMA)', text: 'Call Dr. Jan Duffy at (702) 500-1332 for a free CMA. I analyze recent sales of similar homes in your Aliante neighborhood to determine optimal listing price.', url: 'https://www.aliantehomesforsale.com/home-valuation' },
    { name: 'Prepare Your Home for Sale', text: 'Complete minor repairs, deep clean, declutter, and enhance curb appeal. Highlight community amenities. Professional staging can increase sale price by 5-10%.' },
    { name: 'Review and Sign Listing Agreement', text: 'Sign the listing agreement outlining commission (typically 5-6%), duration, and marketing plan. I provide full MLS exposure, professional photography, virtual tours, and social media marketing.', url: 'https://www.aliantehomesforsale.com/contact' },
    { name: 'Professional Photos and MLS Listing', text: 'Professional photographer captures your home. I create compelling MLS listing highlighting Aliante amenities and upgrades. Listing goes live within 24-48 hours across all major platforms.' },
    { name: 'Market Your Property Aggressively', text: 'Maximum exposure through MLS syndication to Zillow, Realtor.com, Redfin; targeted social media; email to 500+ buyer database; builder network; open houses; and yard signage.' },
    { name: 'Show Your Home to Qualified Buyers', text: 'Coordinate showings with pre-approved buyers. First 2 weeks generate most activity, so maximize availability during this critical period.' },
    { name: 'Review and Negotiate Offers', text: 'Evaluate offers based on price, terms, contingencies, qualifications, and timeline. I negotiate for highest price and best terms. Multiple offers are common in Aliante.' },
    { name: 'Navigate Inspections and Appraisal', text: 'Buyer conducts inspection and lender orders appraisal. Address items through negotiation. Handle any appraisal gaps through renegotiation.' },
    { name: 'Prepare for Closing', text: 'Complete agreed repairs, schedule final walk-through, prepare to vacate, cancel utilities, forward mail. Review closing disclosure 3 days before closing.' },
    { name: 'Close Escrow and Receive Proceeds', text: 'Sign documents at title company. Once buyer funds and deed records, escrow releases proceeds via wire or check, typically same business day.' },
  ];

  return (
    <>
      <HowToSchema
        name="How to Sell Your Home in Aliante, North Las Vegas"
        description="Step-by-step guide to selling your home in Aliante, North Las Vegas 89084. Maximize sale price with expert local representation."
        steps={sellingSteps}
        totalTime="P30D"
        estimatedCost={{ currency: 'USD', value: '10000-35000' }}
        supply={['Property deed', 'Mortgage statements', 'HOA documents', 'Home warranty info', 'Improvement records', 'Utility bills']}
      />
      <main>
        <AboutHero
          title="Sell Your Aliante Home | Listing Agent, North Las Vegas 89084"
          subtitle="Club Aliante, gated villages, and Sun City Aliante listings. Call (702) 500-1332 for a CMA."
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
    </>
  );
}
