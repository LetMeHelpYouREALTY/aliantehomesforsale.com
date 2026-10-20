import type { Metadata } from 'next';
import StructuredData from '../components/StructuredData';
import NewConstructionHero from '../components/NewConstructionHero';
import TopBuilders from '../components/TopBuilders';
import WhyNewConstruction from '../components/WhyNewConstruction';
import ConstructionProcess from '../components/ConstructionProcess';
import QuickMoveInHomes from '../components/QuickMoveInHomes';
import BuilderComparison from '../components/BuilderComparison';
import WhyWorkWithUs from '../components/WhyWorkWithUs';
import NewConstructionFAQ from '../components/NewConstructionFAQ';
import NewConstructionCTA from '../components/NewConstructionCTA';
import HowToSchema from '../components/HowToSchema';

export const metadata: Metadata = {
  title: 'New Construction Homes Aliante North Las Vegas | Top Builders + Incentives',
  description: '95+ new construction homes in Aliante. Lennar, D.R. Horton, Tri Pointe, Del Webb. Up to $25K in builder incentives. Expert buyer representation at no cost. Call (702) 707-7273.',
  keywords: 'new construction Aliante, Aliante new homes, new construction North Las Vegas, Lennar Aliante, DR Horton Tule Springs, new home builders Aliante',
  alternates: {
    canonical: 'https://www.aliantehomesforsale.com/new-construction',
  },
  openGraph: {
    title: 'New Construction Homes Aliante | Top Builders + Up to $25K Incentives',
    description: '95+ new homes from Lennar, D.R. Horton, Tri Pointe, Del Webb. Builder incentives up to $25,000. Expert guidance.',
    url: 'https://www.aliantehomesforsale.com/new-construction',
    type: 'website',
  },
};

export default function NewConstruction() {
  const newConstructionSteps = [
    { name: 'Get Pre-Approved Before Visiting Model Homes', text: 'Obtain mortgage pre-approval before touring builders. Strengthens negotiating position and unlocks exclusive incentives. Most Aliante builders offer preferred lender incentives worth $5,000-$15,000.', url: 'https://www.aliantehomesforsale.com/mortgage-calculator' },
    { name: 'Contact Buyer Agent BEFORE Visiting Sales Office', text: 'Call (702) 707-7273 BEFORE your first builder visit. If you register directly without representation, you forfeit your right to buyer agent representation forever on that property. Buyer representation is 100% free.', url: 'https://www.aliantehomesforsale.com/contact' },
    { name: 'Tour Model Homes with Your Agent', text: 'Visit model homes with your buyer agent. Compare floor plans, lot premiums, HOA fees, and upgrades across Lennar, D.R. Horton, Tri Pointe, Toll Brothers, Richmond American, and Del Webb.', url: 'https://www.aliantehomesforsale.com/builders' },
    { name: 'Review Current Builder Incentives', text: 'Analyze live incentive sheets. Current offers include up to $25,000 in closing costs, free upgrades, rate buy-downs, and preferred lender bonuses. Incentives change weekly.', url: 'https://www.aliantehomesforsale.com/builders/incentives' },
    { name: 'Select Lot and Floor Plan', text: 'Choose home site considering lot size, position (corner, cul-de-sac, view), orientation, proximity to amenities, and noise factors. Premium lots cost $10,000-$50,000 more but increase resale value.' },
    { name: 'Negotiate Purchase Agreement', text: 'Your agent negotiates price, incentives, upgrades, timeline, and contingencies. Never sign builder contract without representation - contracts favor builders. Secure all verbal promises in writing.' },
    { name: 'Design Center Appointment and Upgrades', text: 'Select finishes, flooring, countertops, cabinets, appliances, and structural options. Bring your agent to avoid upselling. Focus on high-ROI upgrades: kitchen, bathrooms, flooring.' },
    { name: 'Monitor Construction Progress', text: 'Conduct inspections at foundation, framing, pre-drywall (crucial), and final walk-through. Hire independent inspector. New construction is not defect-free - professional oversight protects investment.' },
    { name: 'Secure Insurance and HOA Documents', text: 'Obtain insurance quotes 30 days before closing. Review HOA CC&Rs and budget. Aliante HOAs range $50-$200/month. Your lender requires insurance proof and HOA documentation.' },
    { name: 'Final Walk-Through and Close Escrow', text: 'Final walk-through 24-48 hours before closing. Verify all contracted upgrades, appliances function, punch-list completed. Review settlement statement, sign documents, receive keys and warranties!' },
  ];

  return (
    <>
      <StructuredData type="WebSite" />
      <HowToSchema
        name="How to Buy New Construction in Aliante, North Las Vegas"
        description="Expert guide to buying new construction homes in Aliante from Lennar, D.R. Horton, Del Webb, Tri Pointe. Maximize incentives and avoid costly mistakes with professional buyer representation."
        steps={newConstructionSteps}
        totalTime="P120D"
        estimatedCost={{ currency: 'USD', value: '350000-1600000' }}
        supply={['Mortgage pre-approval letter', 'Government ID', 'Proof of funds for down payment', 'Buyer agent agreement', 'Inspector contact']}
      />

      <main className="new-construction-page">
        <NewConstructionHero />
        <TopBuilders />
        <WhyNewConstruction />
        <ConstructionProcess />
        <QuickMoveInHomes />
        <BuilderComparison />
        <WhyWorkWithUs />
        <NewConstructionFAQ />
        <NewConstructionCTA />
      </main>
    </>
  );
}
