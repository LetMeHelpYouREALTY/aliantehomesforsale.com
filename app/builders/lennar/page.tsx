import { pageHero } from '../../../lib/content/site-images';
import { pageMetadata } from '../../../lib/seo-utils';
import BuilderDetailContent from '../../components/BuilderDetailContent';
import NewConstructionCTA from '../../components/NewConstructionCTA';
import NewConstructionHero from '../../components/NewConstructionHero';
import PageFAQ from '../../components/PageFAQ';
import QuickMoveInHomes from '../../components/QuickMoveInHomes';
import TopBuilders from '../../components/TopBuilders';
import WhyNewConstruction from '../../components/WhyNewConstruction';

export const metadata = pageMetadata({
  title: 'Lennar Homes in Aliante | Buyer Agency, North Las Vegas 89084',
  description:
    'Lennar new construction in Aliante, North Las Vegas 89084. Independent buyer’s agent. Confirm live inventory and incentives. Call (702) 707-7273.',
  path: '/builders/lennar',
  keywords: 'lennar aliante, lennar north las vegas, lennar homes 89084',
});

export default function Lennar() {
  return (
    <main>
      <NewConstructionHero
        title="Lennar Homes in Aliante | Buyer Agency, North Las Vegas 89084"
        subtitle="I represent you on the Lennar contract in ZIP 89084. Confirm live inventory. Call (702) 707-7273."
        filterHeading="Lennar communities near Aliante 89084"
        image={pageHero('/builders/lennar')}
      />
      <TopBuilders />
      <WhyNewConstruction />
      <BuilderDetailContent builder="lennar" />
      <QuickMoveInHomes />
      <PageFAQ path="/builders/lennar" title="Lennar in Aliante FAQ" />
      <NewConstructionCTA />
    </main>
  );
}
