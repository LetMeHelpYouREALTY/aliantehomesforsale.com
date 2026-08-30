import { pageHero } from '../../lib/content/site-images';
import { pageMetadata } from '../../lib/seo/page-metadata';
import BuilderComparison from '../components/BuilderComparison';
import ConstructionProcess from '../components/ConstructionProcess';
import NewConstructionCTA from '../components/NewConstructionCTA';
import NewConstructionFAQ from '../components/NewConstructionFAQ';
import NewConstructionHero from '../components/NewConstructionHero';
import QuickMoveInHomes from '../components/QuickMoveInHomes';
import TopBuilders from '../components/TopBuilders';
import WhyNewConstruction from '../components/WhyNewConstruction';
import WhyWorkWithUs from '../components/WhyWorkWithUs';

export const metadata = pageMetadata('/new-construction', {
  title: 'New construction homes in Aliante, North Las Vegas',
  description:
    'Lennar, D.R. Horton, Tri Pointe, Del Webb, Toll Brothers, and Richmond American with independent buyer representation. Call (702) 707-7273.',
});

export default function NewConstruction() {
  return (
    <main className="new-construction-page">
      <NewConstructionHero
        title="New construction homes in Aliante"
        subtitle="Independent buyer representation with Aliante-area builders. Incentives and lot premiums change—ask for this month’s sheet."
        image={pageHero('/new-construction')}
      />
      <TopBuilders />
      <WhyNewConstruction />
      <ConstructionProcess />
      <QuickMoveInHomes />
      <BuilderComparison />
      <WhyWorkWithUs />
      <NewConstructionFAQ />
      <NewConstructionCTA />
    </main>
  );
}
