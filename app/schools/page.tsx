import type { Metadata } from 'next';
import CommunityAmenities from '../components/CommunityAmenities';
import NeighborhoodCards from '../components/NeighborhoodCards';
import NeighborhoodsCTA from '../components/NeighborhoodsCTA';
import NeighborhoodsHero from '../components/NeighborhoodsHero';
import SchoolsContent from '../components/SchoolsContent';

export const metadata: Metadata = {
  title: 'Aliante Schools Guide - Top-Rated School Districts',
  description:
    'Complete guide to schools in Aliante. Top-rated public schools, private options, and school district information.',
  alternates: {
    canonical: 'https://www.aliantehomesforsale.com/schools',
  },
};

export default function Schools() {
  return (
    <main>
      <NeighborhoodsHero />
      <SchoolsContent />
      <CommunityAmenities />
      <NeighborhoodCards />
      <NeighborhoodsCTA />
    </main>
  );
}
