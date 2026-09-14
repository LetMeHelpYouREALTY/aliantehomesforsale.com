import { pageHero } from '../../../lib/content/site-images';
import { pageMetadata } from '../../../lib/seo-utils';
import BuilderDetailContent from '../../components/BuilderDetailContent';
import ConstructionProcess from '../../components/ConstructionProcess';
import NewConstructionCTA from '../../components/NewConstructionCTA';
import NewConstructionHero from '../../components/NewConstructionHero';
import PageFAQ from '../../components/PageFAQ';
import TopBuilders from '../../components/TopBuilders';

export const metadata = pageMetadata({
  title: 'Richmond American near Aliante | North Las Vegas 89084',
  description:
    'Richmond American Homes near Aliante, North Las Vegas. Independent buyer’s agent. Confirm live inventory and whether a community is inside ZIP 89084. Call (702) 707-7273.',
  path: '/builders/richmond-american',
  keywords: 'richmond american aliante, richmond american north las vegas',
});

export default function RichmondAmerican() {
  return (
    <main>
      <NewConstructionHero
        title="Richmond American near Aliante | North Las Vegas 89084"
        subtitle="Confirm whether the community is inside Aliante ZIP 89084 before you tour. Call (702) 707-7273."
        filterHeading="Richmond American near Aliante"
        image={pageHero('/builders/richmond-american')}
      />
      <TopBuilders />
      <ConstructionProcess />
      <BuilderDetailContent builder="richmond-american" />
      <PageFAQ path="/builders/richmond-american" title="Richmond American FAQ" />
      <NewConstructionCTA />
    </main>
  );
}
