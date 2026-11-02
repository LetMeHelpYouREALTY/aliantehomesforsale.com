import { pageHero } from '../../lib/content/site-images';
import { pageMetadata } from '../../lib/seo-utils';
import BuilderComparison from '../components/BuilderComparison';
import ConstructionProcess from '../components/ConstructionProcess';
import HowToSchema from '../components/HowToSchema';
import NewConstructionCTA from '../components/NewConstructionCTA';
import NewConstructionFAQ from '../components/NewConstructionFAQ';
import NewConstructionHero from '../components/NewConstructionHero';
import QuickMoveInHomes from '../components/QuickMoveInHomes';
import TopBuilders from '../components/TopBuilders';
import WhyNewConstruction from '../components/WhyNewConstruction';
import WhyWorkWithUs from '../components/WhyWorkWithUs';

export const metadata = pageMetadata({
  title: 'New-Construction Buyer Agency in Aliante | North Las Vegas 89084',
  description:
    'Independent new-construction buyer’s agent in Aliante and Tule Springs. Lennar, D.R. Horton, Del Webb. Confirm live incentives. Call (702) 500-1332.',
  path: '/new-construction',
  keywords:
    'north las vegas home builders, new construction Aliante, Aliante new homes, Lennar Aliante, DR Horton Tule Springs',
});

export default function NewConstruction() {
  const newConstructionSteps = [
    { name: 'Get Pre-Approved Before Visiting Model Homes', text: 'Obtain mortgage pre-approval before touring builders. Strengthens negotiating position and unlocks exclusive incentives. Most Aliante builders offer preferred lender incentives worth $5,000-$15,000.', url: 'https://www.aliantehomesforsale.com/mortgage-calculator' },
    { name: 'Contact Buyer Agent BEFORE Visiting Sales Office', text: 'Call (702) 500-1332 BEFORE your first builder visit. If you register directly without representation, you forfeit your right to buyer agent representation forever on that property. Buyer representation is 100% free.', url: 'https://www.aliantehomesforsale.com/contact' },
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
      <HowToSchema
        name="How to Buy New Construction in Aliante, North Las Vegas"
        description="Expert guide to buying new construction homes in Aliante from Lennar, D.R. Horton, Del Webb, Tri Pointe. Maximize incentives and avoid costly mistakes with professional buyer representation."
        steps={newConstructionSteps}
        totalTime="P120D"
        estimatedCost={{ currency: 'USD', value: '350000-1600000' }}
        supply={['Mortgage pre-approval letter', 'Government ID', 'Proof of funds for down payment', 'Buyer agent agreement', 'Inspector contact']}
      />
      <main className="new-construction-page">
        <NewConstructionHero
          title="New-Construction Buyer Agency in Aliante, North Las Vegas 89084"
          subtitle="Independent representation with Lennar, D.R. Horton, Del Webb, and nearby Tule Springs builders. Call (702) 500-1332."
          filterHeading="Filter Aliante and Tule Springs new construction"
          image={pageHero('/new-construction')}
        />
        <TopBuilders />
        <WhyNewConstruction />
        <ConstructionProcess />
        <QuickMoveInHomes />
        <BuilderComparison
          heading="Lennar, D.R. Horton, and Del Webb near Aliante 89084"
          subheading="Independent buyer agency. Confirm live inventory and incentive sheets."
        />
        <WhyWorkWithUs />
        <NewConstructionFAQ />
        <NewConstructionCTA />
      </main>
    </>
  );
}
