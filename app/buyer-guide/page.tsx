import type { Metadata } from 'next';
import AboutHero from '../components/AboutHero';
import BuyerGuideContent from '../components/BuyerGuideContent';
import ConstructualLinks from '../components/ContextualLinks';
import ConstructionProcess from '../components/ConstructionProcess';
import HomesSearchTips from '../components/HomesSearchTips';
import ContactWhyChoose from '../components/ContactWhyChoose';
import HomesCTA from '../components/HomesCTA';
import HowToSchema from '../components/HowToSchema';

export const metadata: Metadata = {
  title: 'First-Time Home Buyer Guide Aliante - Expert Tips',
  description: 'Complete guide for first-time home buyers in Aliante. Step-by-step process, expert tips, and local market insights.',
  alternates: {
    canonical: 'https://www.aliantehomesforsale.com/buyer-guide',
  },
};

export default function BuyerGuide() {
  const buyingSteps = [
    {
      name: 'Get Pre-Qualified for a Mortgage',
      text: 'Contact a lender to determine your budget and get pre-qualified. This shows sellers you are a serious buyer and helps you understand what you can afford in Aliante neighborhoods. Pre-qualification typically takes 24-48 hours and is free.',
      url: 'https://www.aliantehomesforsale.com/mortgage-calculator',
    },
    {
      name: 'Choose Your Aliante Neighborhood',
      text: 'Decide which Aliante community fits your lifestyle: The Prominence for luxury gated living, Desert Willows for families, Club Aliante for golf enthusiasts, Sun City Aliante for 55+ active adults, or The Paseos for affordability.',
      url: 'https://www.aliantehomesforsale.com/neighborhoods',
    },
    {
      name: 'Contact Dr. Jan Duffy for Free Buyer Representation',
      text: 'Call (702) 707-7273 for free buyer representation. As your agent, I negotiate on your behalf, access exclusive builder incentives, and guide you through the entire process at no cost to you.',
      url: 'https://www.aliantehomesforsale.com/contact',
    },
    {
      name: 'Search MLS Listings and New Construction',
      text: 'Browse current inventory on our MLS-connected platform, updated every 15 minutes. View resale homes and new construction from Lennar, D.R. Horton, Tri Pointe, Del Webb, and other top builders.',
      url: 'https://www.aliantehomesforsale.com/homes-for-sale',
    },
    {
      name: 'Tour Properties and Compare Options',
      text: 'Visit shortlisted homes with expert guidance. For new construction, tour model homes and discuss floor plans, upgrades, and current builder incentives worth up to $25,000.',
    },
    {
      name: 'Make an Offer and Negotiate Terms',
      text: 'Submit a competitive offer based on current market analysis. I negotiate price, closing costs, contingencies, and timelines on your behalf, leveraging builder relationships for maximum incentives.',
    },
    {
      name: 'Complete Home Inspection and Due Diligence',
      text: 'Hire a professional home inspector to evaluate property condition. Review inspection reports, HOA documents, and title reports. For new construction, conduct inspections at multiple build stages.',
    },
    {
      name: 'Finalize Mortgage and Clear Contingencies',
      text: 'Work with your lender to complete the loan application, appraisal, and underwriting. Address any inspection issues through negotiations. This process typically takes 30-45 days.',
    },
    {
      name: 'Close Escrow and Receive Keys',
      text: 'Review and sign closing documents. Complete final walk-through to verify property condition. Once funding is confirmed and deed is recorded, you receive keys to your new Aliante home!',
    },
  ];

  return (
    <main>
      <HowToSchema
        name="How to Buy a Home in Aliante, North Las Vegas"
        description="Complete step-by-step guide to buying a home in Aliante, North Las Vegas 89084. From pre-qualification through closing, learn the entire home buying process with expert local guidance."
        steps={buyingSteps}
        totalTime="P45D"
        estimatedCost={{ currency: 'USD', value: '300000-1200000' }}
        supply={[
          'Pre-qualification letter from lender',
          'Government-issued ID',
          'Proof of income and assets',
          'Down payment funds (typically 3-20%)',
          'Homeowners insurance quote',
        ]}
      />
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
