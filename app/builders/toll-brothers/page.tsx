import { pageHero } from '../../../lib/content/site-images';
import { pageMetadata } from '../../../lib/seo-utils';
import BuilderDetailContent from '../../components/BuilderDetailContent';
import NewConstructionCTA from '../../components/NewConstructionCTA';
import NewConstructionHero from '../../components/NewConstructionHero';
import PageFAQ from '../../components/PageFAQ';
import TopBuilders from '../../components/TopBuilders';
import WhyNewConstruction from '../../components/WhyNewConstruction';

export const metadata = pageMetadata({
  title: 'Toll Brothers near Aliante | Elkhorn Grove, Las Vegas 89131',
  description:
    'Toll Brothers is not currently building inside Aliante ZIP 89084. Closest community: Elkhorn Grove, 5819 Kings Bluff Ave, Las Vegas NV 89131. Call (702) 707-7273.',
  path: '/builders/toll-brothers',
  keywords: 'toll brothers aliante, toll brothers elkhorn grove, toll brothers north las vegas',
});

export default function TollBrothers() {
  return (
    <main>
      <NewConstructionHero
        title="Toll Brothers near Aliante | Elkhorn Grove, Las Vegas 89131"
        subtitle="Not currently building inside Aliante ZIP 89084. Confirm live inventory at Elkhorn Grove. Call (702) 707-7273."
        filterHeading="Toll Brothers vs Aliante 89084 builders"
        image={pageHero('/builders/toll-brothers')}
      />
      <TopBuilders />
      <WhyNewConstruction />
      <BuilderDetailContent builder="toll-brothers" />
      <PageFAQ path="/builders/toll-brothers" title="Toll Brothers near Aliante FAQ" />
      <NewConstructionCTA />
    </main>
  );
}
