import { pageHero } from '../../../lib/content/site-images';
import { pageMetadata } from '../../../lib/seo-utils';
import EnhancedFeaturedProperties from '../../components/EnhancedFeaturedProperties';
import NeighborhoodCards from '../../components/NeighborhoodCards';
import NeighborhoodDetailContent from '../../components/NeighborhoodDetailContent';
import NeighborhoodsCTA from '../../components/NeighborhoodsCTA';
import NeighborhoodsHero from '../../components/NeighborhoodsHero';
import PageFAQ from '../../components/PageFAQ';

export const metadata = pageMetadata({
  title: 'The Paseos Aliante | Homes for Sale North Las Vegas 89084',
  description:
    'The Paseos is an open-access Aliante village in North Las Vegas 89084 with parks and trails. Confirm live MLS listings. Call (702) 707-7273.',
  path: '/neighborhoods/paseos',
  keywords: 'the paseos aliante, paseos north las vegas 89084',
});

export default function Paseos() {
  return (
    <main>
      <NeighborhoodsHero
        title="The Paseos Aliante | Homes for Sale North Las Vegas 89084"
        subtitle="Open-access village inside the Aliante master plan. Confirm live MLS. Call (702) 707-7273."
        image={pageHero('/neighborhoods/paseos')}
      />
      <EnhancedFeaturedProperties />
      <NeighborhoodDetailContent village="paseos" />
      <NeighborhoodCards />
      <PageFAQ path="/neighborhoods/paseos" title="The Paseos FAQ" />
      <NeighborhoodsCTA />
    </main>
  );
}
