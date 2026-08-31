import type { Metadata } from 'next';
import { pageHero } from '../../lib/content/site-images';
import BuilderAdvantages from '../components/BuilderAdvantages';
import BuilderComparison from '../components/BuilderComparison';
import BuilderIncentivesInfo from '../components/BuilderIncentivesInfo';
import BuildersIntro from '../components/BuildersIntro';
import ContextualLinks from '../components/ContextualLinks';
import NewConstructionCTA from '../components/NewConstructionCTA';
import NewConstructionHero from '../components/NewConstructionHero';
import TopBuilders from '../components/TopBuilders';

export const metadata: Metadata = {
  title: 'Builders near Aliante | Lennar, Horton, Del Webb',
  description:
    'Compare Lennar and Del Webb in Aliante 89084 with D.R. Horton at Tule Springs. Independent buyer’s agent. Confirm live incentives. Call (702) 707-7273.',
  keywords: 'aliante builders, lennar aliante, dr horton tule springs, del webb sun city aliante',
  alternates: {
    canonical: 'https://www.aliantehomesforsale.com/builders',
  },
};

export default function Builders() {
  return (
    <main className="builders-page">
      <NewConstructionHero
        title="Builders near Aliante | Lennar, Horton, Del Webb"
        subtitle="Lennar and Del Webb in 89084. Horton at Tule Springs, east of Aliante. Call (702) 707-7273."
        filterHeading="Compare builders relative to Aliante 89084"
        image={pageHero('/builders')}
      />
      <BuildersIntro />
      <TopBuilders />
      <div className="px-4">
        <ContextualLinks variant="builders" />
      </div>
      <BuilderAdvantages />
      <BuilderComparison
        heading="Where each builder sits relative to Aliante ZIP 89084"
        subheading="Lennar and Del Webb inside Aliante. Horton in Tule Springs. Toll, Tri Pointe, and Richmond are not inside 89084."
        showBuildersCta={false}
      />
      <BuilderIncentivesInfo
        heading="Builder credits relative to Aliante 89084"
        subheading="Lennar and Del Webb in 89084; Horton at Tule Springs. Confirm today’s sheet."
      />
      <NewConstructionCTA />
    </main>
  );
}
