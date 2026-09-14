import { pageHero } from '../../../lib/content/site-images';
import { pageMetadata } from '../../../lib/seo-utils';
import BuilderDetailContent from '../../components/BuilderDetailContent';
import ConstructionProcess from '../../components/ConstructionProcess';
import NewConstructionCTA from '../../components/NewConstructionCTA';
import NewConstructionHero from '../../components/NewConstructionHero';
import PageFAQ from '../../components/PageFAQ';
import QuickMoveInHomes from '../../components/QuickMoveInHomes';
import TopBuilders from '../../components/TopBuilders';

export const metadata = pageMetadata({
  title: 'D.R. Horton near Aliante | Tule Springs Buyer Agency 89084',
  description:
    'D.R. Horton new construction near Aliante in Villages at Tule Springs, North Las Vegas. Independent buyer’s agent. Confirm live inventory. Call (702) 707-7273.',
  path: '/builders/dr-horton',
  keywords: 'dr horton tule springs, dr horton aliante, dr horton north las vegas',
});

export default function DrHorton() {
  return (
    <main>
      <NewConstructionHero
        title="D.R. Horton near Aliante | Tule Springs Buyer Agency 89084"
        subtitle="Compare Tule Springs new homes with Aliante resale. Confirm live inventory. Call (702) 707-7273."
        filterHeading="D.R. Horton near Aliante and Tule Springs"
        image={pageHero('/builders/dr-horton')}
      />
      <TopBuilders />
      <ConstructionProcess />
      <BuilderDetailContent builder="dr-horton" />
      <QuickMoveInHomes />
      <PageFAQ path="/builders/dr-horton" title="D.R. Horton near Aliante FAQ" />
      <NewConstructionCTA />
    </main>
  );
}
