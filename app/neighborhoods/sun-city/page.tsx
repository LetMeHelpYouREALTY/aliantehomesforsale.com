import type { Metadata } from 'next';
import { pageHero } from '../../../lib/content/site-images';
import NeighborhoodCards from '../../components/NeighborhoodCards';
import NeighborhoodsCTA from '../../components/NeighborhoodsCTA';
import NeighborhoodsHero from '../../components/NeighborhoodsHero';
import SunCityContent from '../../components/SunCityContent';

export const metadata: Metadata = {
  title: 'Sun City Aliante Homes for Sale | 55+ North Las Vegas 89084',
  description:
    'Sun City Aliante homes for sale in North Las Vegas. Del Webb 55+ inside ZIP 89084 — not Ardiente (89081). Call (702) 707-7273.',
  // URL 308s to /sun-city-aliante; canonical matches destination. Keep noindex so this stub does not compete.
  alternates: { canonical: 'https://www.aliantehomesforsale.com/sun-city-aliante' },
  robots: { index: false, follow: true },
};

export default function SunCity() {
  return (
    <main>
      <NeighborhoodsHero
        title="Sun City Aliante Homes for Sale | 55+ North Las Vegas 89084"
        subtitle="This URL redirects to the live Sun City Aliante page. Call (702) 707-7273."
        image={pageHero('/sun-city-aliante')}
      />
      <SunCityContent />
      <NeighborhoodCards />
      <NeighborhoodsCTA
        heading="Tour Sun City Aliante 55+ in ZIP 89084"
        subheading="Del Webb inside 89084 — not Ardiente in 89081. Call (702) 707-7273."
      />
    </main>
  );
}
