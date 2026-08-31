import type { Metadata } from 'next';
import { pageHero } from '../../../lib/content/site-images';
import DelWebbContent from '../../components/DelWebbContent';
import NewConstructionCTA from '../../components/NewConstructionCTA';
import NewConstructionHero from '../../components/NewConstructionHero';
import TopBuilders from '../../components/TopBuilders';

export const metadata: Metadata = {
  title: 'Del Webb Sun City Aliante | 55+ Buyer Agency, North Las Vegas 89084',
  description:
    'Del Webb at Sun City Aliante in North Las Vegas 89084. Independent buyer’s agent for 55+ new construction. Confirm live inventory. Call (702) 707-7273.',
  keywords: 'del webb sun city aliante, del webb aliante, 55+ new construction north las vegas',
  alternates: { canonical: 'https://www.aliantehomesforsale.com/builders/del-webb' },
};

export default function DelWebb() {
  return (
    <main>
      <NewConstructionHero
        title="Del Webb Sun City Aliante | 55+ Buyer Agency, North Las Vegas 89084"
        subtitle="Age-qualified Del Webb inside ZIP 89084 — not Ardiente (89081). Call (702) 707-7273."
        filterHeading="Del Webb 55+ in Aliante 89084"
        image={pageHero('/builders/del-webb')}
      />
      <DelWebbContent />
      <TopBuilders />
      <NewConstructionCTA />
    </main>
  );
}
