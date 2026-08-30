import { neighborhoodCopy, uniquePageCopy } from '../../lib/content/unique-pages';
import { pageMetadata } from '../../lib/seo/page-metadata';
import CommunityAmenities from '../components/CommunityAmenities';
import NeighborhoodCards from '../components/NeighborhoodCards';
import NeighborhoodDetailContent from '../components/NeighborhoodDetailContent';
import NeighborhoodsCTA from '../components/NeighborhoodsCTA';
import NeighborhoodsHero from '../components/NeighborhoodsHero';
import SchoolsContent from '../components/SchoolsContent';

const copy = uniquePageCopy(neighborhoodCopy, 'schools');

export const metadata = pageMetadata('/schools', {
  title: copy.h1,
  description: copy.subtitle,
});

export default function Schools() {
  return (
    <main>
      <NeighborhoodsHero title={copy.h1} subtitle={copy.subtitle} image={copy.image} />
      <NeighborhoodDetailContent slug="schools" />
      <SchoolsContent />
      <CommunityAmenities />
      <NeighborhoodCards />
      <NeighborhoodsCTA />
    </main>
  );
}
