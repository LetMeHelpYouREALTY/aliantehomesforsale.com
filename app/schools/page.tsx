import { pageHero } from '../../lib/content/site-images';
import { pageMetadata } from '../../lib/seo-utils';
import CommunityAmenities from '../components/CommunityAmenities';
import NeighborhoodCards from '../components/NeighborhoodCards';
import NeighborhoodsCTA from '../components/NeighborhoodsCTA';
import NeighborhoodsHero from '../components/NeighborhoodsHero';
import PageFAQ from '../components/PageFAQ';
import SchoolsContent from '../components/SchoolsContent';

export const metadata = pageMetadata({
  title: 'Homes Near Aliante Schools | North Las Vegas 89084',
  description:
    'Named campuses serving Aliante in North Las Vegas 89084, plus homes for sale nearby. Call (702) 707-7273 to match an address to current attendance boundaries.',
  path: '/schools',
  keywords: 'aliante schools, homes near aliante schools, north las vegas schools 89084',
});

export default function Schools() {
  return (
    <main>
      <NeighborhoodsHero
        title="Homes Near Aliante Schools | North Las Vegas 89084"
        subtitle="I name the campus that currently serves an address. Boundaries change — confirm with Clark County School District before you offer."
        image={pageHero('/schools')}
      />
      <SchoolsContent />
      <CommunityAmenities />
      <NeighborhoodCards />
      <PageFAQ path="/schools" title="Aliante schools and housing FAQ" />
      <NeighborhoodsCTA />
    </main>
  );
}
