import type { Metadata } from 'next';
import { pageHero } from '../../lib/content/site-images';
import CommunityAmenities from '../components/CommunityAmenities';
import NeighborhoodCards from '../components/NeighborhoodCards';
import NeighborhoodsCTA from '../components/NeighborhoodsCTA';
import NeighborhoodsHero from '../components/NeighborhoodsHero';
import SchoolsContent from '../components/SchoolsContent';

export const metadata: Metadata = {
  title: 'Homes Near Aliante Schools | North Las Vegas 89084',
  description:
    'Named campuses serving Aliante in North Las Vegas 89084, plus homes for sale nearby. Call (702) 707-7273 to match an address to current attendance boundaries.',
  keywords: 'aliante schools, homes near aliante schools, north las vegas schools 89084',
  alternates: {
    canonical: 'https://www.aliantehomesforsale.com/schools',
  },
};

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
      <NeighborhoodsCTA />
    </main>
  );
}
