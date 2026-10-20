import type { Metadata } from 'next';
import AboutHero from '../components/AboutHero';
import SellerChecklistContent from '../components/SellerChecklistContent';
import ContextualLinks from '../components/ContextualLinks';
import ConstructionProcess from '../components/ConstructionProcess';
import AboutExpertise from '../components/AboutExpertise';
import AboutCTA from '../components/AboutCTA';
import HowToSchema from '../components/HowToSchema';

export const metadata: Metadata = {
  title: 'Home Selling Checklist Aliante - Maximize Your Sale Price',
  description: 'Complete checklist for selling your Aliante home. Expert guidance to maximize sale price and minimize time on market.',
  alternates: {
    canonical: 'https://www.aliantehomesforsale.com/seller-checklist',
  },
};

export default function SellerChecklist() {
  const sellingSteps = [
    { name: 'Request a Comparative Market Analysis (CMA)', text: 'Call Dr. Jan Duffy at (702) 707-7273 for a free CMA. I analyze recent sales of similar homes in your Aliante neighborhood to determine optimal listing price.', url: 'https://www.aliantehomesforsale.com/home-valuation' },
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
    <main>
      <HowToSchema
        name="How to Sell Your Home in Aliante, North Las Vegas"
        description="Step-by-step guide to selling your home in Aliante, North Las Vegas 89084. Maximize sale price with expert local representation."
        steps={sellingSteps}
        totalTime="P30D"
        estimatedCost={{ currency: 'USD', value: '10000-35000' }}
        supply={['Property deed', 'Mortgage statements', 'HOA documents', 'Home warranty info', 'Improvement records', 'Utility bills']}
      />
      <AboutHero />
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
