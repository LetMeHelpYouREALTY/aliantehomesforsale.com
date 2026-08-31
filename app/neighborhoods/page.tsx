import type { Metadata } from 'next';
import { pageHero } from '../../lib/content/site-images';
import CommunityAmenities from '../components/CommunityAmenities';
import ContextualLinks from '../components/ContextualLinks';
import NeighborhoodCards from '../components/NeighborhoodCards';
import NeighborhoodComparison from '../components/NeighborhoodComparison';
import NeighborhoodsCTA from '../components/NeighborhoodsCTA';
import NeighborhoodsHero from '../components/NeighborhoodsHero';
import StructuredData from '../components/StructuredData';

export const metadata: Metadata = {
  title: 'Aliante Neighborhoods | Club Aliante, Sun City, Gated — 89084',
  description:
    'Aliante neighborhoods in North Las Vegas 89084: Club Aliante, Sun City Aliante, The Prominence, Desert Willows, The Paseos, and nearby Tule Springs. Call (702) 707-7273 for live MLS homes.',
  keywords:
    'aliante neighborhoods, club aliante, sun city aliante, gated communities north las vegas 89084',
  alternates: {
    canonical: 'https://www.aliantehomesforsale.com/neighborhoods',
  },
};

export default function Neighborhoods() {
  return (
    <>
      <StructuredData type="NeighborhoodGuide" />

      <main className="neighborhoods-page">
        {/* Hero Section */}
        <NeighborhoodsHero
          title="Aliante Neighborhoods | Club Aliante, Sun City, Gated — 89084"
          subtitle="Villages inside the Aliante master plan, North Las Vegas ZIP 89084. Call (702) 707-7273."
          image={pageHero('/neighborhoods')}
        />

        {/* Neighborhood Cards */}
        <NeighborhoodCards />

        {/* Contextual Links */}
        <div className="px-4">
          <ContextualLinks variant="neighborhoods" />
        </div>

        {/* Community Amenities */}
        <CommunityAmenities />

        {/* Neighborhood Comparison Table */}
        <NeighborhoodComparison
          heading="Aliante villages in ZIP 89084"
          subheading="Club Aliante, Prominence, Desert Willows, The Paseos, Sun City Aliante 55+, and nearby Tule Springs. Confirm live MLS prices."
        />

        {/* CTA Section */}
        <NeighborhoodsCTA />
      </main>
    </>
  );
}
