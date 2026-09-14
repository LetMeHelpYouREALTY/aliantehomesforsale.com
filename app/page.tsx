import { pageMetadata } from '../lib/seo-utils';
import { HomeSectionsBottom, HomeSectionsTop } from './components/HomeSections';
import LatestNewsSection from './components/LatestNewsSection';

export const metadata = pageMetadata({
  title: 'Aliante Real Estate | Homes for Sale in North Las Vegas 89084',
  description:
    'Aliante real estate and homes for sale in North Las Vegas, NV 89084. MLS updated about every 15 minutes. Club Aliante, Sun City Aliante 55+, gated communities. Call (702) 707-7273.',
  path: '/',
  keywords:
    'Aliante North Las Vegas homes for sale, Aliante real estate, North Las Vegas homes, 89084 homes for sale, Aliante gated community, Sun City Aliante, Club Aliante, new construction Aliante, Aliante MLS listings',
});

export default function Home() {
  return (
    <main>
      <HomeSectionsTop />
      <LatestNewsSection />
      <HomeSectionsBottom />
    </main>
  );
}
