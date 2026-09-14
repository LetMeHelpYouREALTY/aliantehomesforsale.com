import { pageHero } from '../../../lib/content/site-images';
import { pageMetadata } from '../../../lib/seo-utils';
import BuilderDetailContent from '../../components/BuilderDetailContent';
import CommunityAmenities from '../../components/CommunityAmenities';
import NewConstructionCTA from '../../components/NewConstructionCTA';
import NewConstructionHero from '../../components/NewConstructionHero';
import PageFAQ from '../../components/PageFAQ';
import TopBuilders from '../../components/TopBuilders';

export const metadata = pageMetadata({
  title: 'Del Webb Sun City Aliante | 55+ Buyer Agency, North Las Vegas 89084',
  description:
    'Del Webb at Sun City Aliante in North Las Vegas 89084. Independent buyer’s agent for 55+ new construction. Confirm live inventory. Call (702) 707-7273.',
  path: '/builders/del-webb',
  keywords: 'del webb sun city aliante, del webb aliante, 55+ new construction north las vegas',
});

export default function DelWebb() {
  return (
    <main>
      <NewConstructionHero
        title="Del Webb Sun City Aliante | 55+ Buyer Agency, North Las Vegas 89084"
        subtitle="Age-qualified Del Webb inside ZIP 89084 — not Ardiente (89081). Call (702) 707-7273."
        filterHeading="Del Webb 55+ in Aliante 89084"
        image={pageHero('/builders/del-webb')}
      />
      <TopBuilders />
      <BuilderDetailContent builder="del-webb" />
      <CommunityAmenities />
      <PageFAQ path="/builders/del-webb" title="Del Webb buyer agency FAQ" />
      <NewConstructionCTA />
    </main>
  );
}
