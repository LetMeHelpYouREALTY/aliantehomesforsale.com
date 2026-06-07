import type { Metadata } from 'next';
import NewConstructionHero from '../components/NewConstructionHero';
import BuildersIntro from '../components/BuildersIntro';
import TopBuilders from '../components/TopBuilders';
import BuilderAdvantages from '../components/BuilderAdvantages';
import ContextualLinks from '../components/ContextualLinks';
import BuilderComparison from '../components/BuilderComparison';
import BuilderIncentivesInfo from '../components/BuilderIncentivesInfo';
import NewConstructionCTA from '../components/NewConstructionCTA';
import StructuredData from '../components/StructuredData';

export const metadata: Metadata = {
  title: 'New Construction Builders in Aliante - Compare All Builders',
  description: 'Compare all new construction builders in Aliante: Lennar, D.R. Horton, Tri Pointe, Del Webb. Incentives, floor plans, and expert guidance.',
  alternates: {
    canonical: 'https://www.aliantehomesforsale.com/builders',
  },
  openGraph: {
    title: 'New Construction Builders in Aliante - Compare All Builders',
    description: 'Compare all new construction builders in Aliante: Lennar, D.R. Horton, Tri Pointe, Del Webb. Incentives, floor plans, and expert guidance.',
    url: 'https://www.aliantehomesforsale.com/builders',
    type: 'article',
    modifiedTime: new Date().toISOString(),
  },
};

export default function Builders() {
  return (
    <>
      <StructuredData
        type="Article"
        article={{
          headline: 'New Construction Builders in Aliante - Complete Guide',
          description: 'Comprehensive guide to all new construction home builders in Aliante, North Las Vegas. Compare Lennar, D.R. Horton, Tri Pointe, Del Webb, Toll Brothers, and Richmond American. Current incentives, floor plans, pricing, and expert builder negotiation tips.',
          url: 'https://www.aliantehomesforsale.com/builders',
          datePublished: '2018-01-01T00:00:00Z',
          dateModified: new Date().toISOString(),
          authorName: 'Dr. Jan Duffy',
        }}
      />
      <main className="builders-page">
        <NewConstructionHero />
        <BuildersIntro />
        <TopBuilders />
        <div className="px-4">
          <ContextualLinks variant="builders" />
        </div>
        <BuilderAdvantages />
        <BuilderComparison />
        <BuilderIncentivesInfo />
        <NewConstructionCTA />
      </main>
    </>
  );
}
