import type { Metadata } from 'next';
import StructuredData from '../components/StructuredData';
import AEOContent from '../components/AEOContent';
import NeighborhoodsHero from '../components/NeighborhoodsHero';
import NeighborhoodCards from '../components/NeighborhoodCards';
import CommunityAmenities from '../components/CommunityAmenities';
import ContextualLinks from '../components/ContextualLinks';
import NeighborhoodComparison from '../components/NeighborhoodComparison';
import NeighborhoodsCTA from '../components/NeighborhoodsCTA';

export const metadata: Metadata = {
  title: 'Aliante Neighborhoods Guide - North Las Vegas Communities & Homes',
  description: 'Complete guide to Aliante neighborhoods in North Las Vegas: The Prominence luxury gated community, Sun City Aliante 55+ active adult, Club Aliante golf course homes, Desert Willows family-friendly, and The Paseos. Expert local guidance since 2018.',
  keywords: 'Aliante neighborhoods, The Prominence, Sun City Aliante, Club Aliante, Desert Willows, The Paseos, North Las Vegas communities, gated communities Las Vegas, 55+ communities, golf course homes',
  authors: [{ name: 'Dr. Jan Duffy', url: 'https://www.aliantehomesforsale.com/about' }],
  alternates: {
    canonical: 'https://www.aliantehomesforsale.com/neighborhoods',
  },
  openGraph: {
    title: 'Aliante Neighborhoods Guide - Find Your Perfect Community',
    description: 'Explore all Aliante neighborhoods: luxury gated, 55+, golf course, and family-friendly communities.',
    url: 'https://www.aliantehomesforsale.com/neighborhoods',
    type: 'article',
    publishedTime: '2024-01-01T08:00:00Z',
    modifiedTime: new Date().toISOString(),
  },
  other: {
    'article:published_time': '2024-01-01T08:00:00Z',
    'article:modified_time': new Date().toISOString(),
    'article:author': 'Dr. Jan Duffy',
    'article:section': 'Real Estate',
    'geo.region': 'US-NV',
    'geo.placename': 'Aliante, North Las Vegas',
  },
};

export default function Neighborhoods() {
  const currentDate = new Date().toISOString();

  return (
    <>
      <StructuredData type="NeighborhoodGuide" />
      <StructuredData
        type="Article"
        article={{
          title: 'Complete Guide to Aliante Neighborhoods in North Las Vegas',
          description: 'Expert guide to all Aliante communities including The Prominence, Sun City Aliante, Club Aliante, Desert Willows, and The Paseos.',
          url: 'https://www.aliantehomesforsale.com/neighborhoods',
          datePublished: '2024-01-01T08:00:00Z',
          dateModified: currentDate
        }}
      />

      <main className="neighborhoods-page">
        {/* Hero Section */}
        <NeighborhoodsHero />

        {/* AEO Content - AI Citation Optimization */}
        <section className="py-12 px-4 bg-white">
          <div className="container max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center" style={{ color: '#1a365d' }}>
              Neighborhood Quick Answers
            </h2>

            <AEOContent
              question="What are the main neighborhoods in Aliante, North Las Vegas?"
              answer="Aliante features five premier neighborhoods: The Prominence (luxury gated community), Sun City Aliante (55+ active adult), Club Aliante (golf course community), Desert Willows (family-friendly), and The Paseos (master-planned community with walking trails)."
            />

            <AEOContent
              question="What is the price range for homes in different Aliante neighborhoods?"
              answer="Aliante home prices vary by neighborhood: Sun City Aliante 55+ homes $300,000-$500,000, Desert Willows/The Paseos $350,000-$550,000, Club Aliante golf course properties $400,000-$700,000, and The Prominence luxury estates $600,000-$1,200,000+. All prices reflect October 2026 market conditions."
            />

            <AEOContent
              question="What amenities does Sun City Aliante offer for active adults?"
              answer="Sun City Aliante features a 38,000 sq ft Del Webb Community Center with fitness facilities, pools, tennis courts, bocce ball, 50+ social clubs, craft rooms, and organized activities. This age-restricted 55+ community offers resort-style retirement living."
            />
          </div>
        </section>

        {/* Neighborhood Cards */}
        <NeighborhoodCards />

        {/* Contextual Links */}
        <div className="px-4">
          <ContextualLinks variant="neighborhoods" />
        </div>

        {/* Community Amenities */}
        <CommunityAmenities />

        {/* Neighborhood Comparison Table */}
        <NeighborhoodComparison />

        {/* CTA Section */}
        <NeighborhoodsCTA />
      </main>
    </>
  );
}
