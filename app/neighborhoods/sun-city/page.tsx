import { redirect } from 'next/navigation';
import { pageMetadata } from '../../../lib/seo-utils';

export const metadata = pageMetadata({
  title: 'Sun City Aliante Homes for Sale | 55+ North Las Vegas 89084',
  description:
    'Sun City Aliante homes for sale in North Las Vegas. Del Webb 55+ inside ZIP 89084 — not Ardiente (89081). Call (702) 707-7273.',
  path: '/sun-city-aliante',
  noindex: true,
});

export default function SunCity() {
  redirect('/sun-city-aliante');
}
