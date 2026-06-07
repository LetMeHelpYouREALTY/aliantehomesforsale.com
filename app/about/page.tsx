import type { Metadata } from 'next';
import AboutHero from '../components/AboutHero';
import AboutStats from '../components/AboutStats';
import AboutExpertise from '../components/AboutExpertise';
import AboutWhyChooseUs from '../components/AboutWhyChooseUs';
import AboutCommitment from '../components/AboutCommitment';
import AboutCTA from '../components/AboutCTA';
import StructuredData from '../components/StructuredData';

export const metadata: Metadata = {
  title: 'About Dr. Jan Duffy - Aliante Real Estate Expert Since 2018',
  description: 'Meet Dr. Jan Duffy, licensed Nevada real estate agent specializing in Aliante, North Las Vegas since 2018. 500+ successful transactions, deep builder relationships, and unmatched local market knowledge. Expert in luxury gated communities, 55+ active adult, and new construction homes.',
  keywords: 'Dr. Jan Duffy, Aliante real estate agent, North Las Vegas realtor, local expert, luxury homes specialist, new construction expert, 55+ communities',
  authors: [{ name: 'Dr. Jan Duffy', url: 'https://www.aliantehomesforsale.com/about' }],
  alternates: {
    canonical: 'https://www.aliantehomesforsale.com/about',
  },
  openGraph: {
    title: 'About Dr. Jan Duffy - Aliante Real Estate Expert Since 2018',
    description: '500+ successful transactions, deep builder relationships, and unmatched local market knowledge in Aliante, North Las Vegas.',
    url: 'https://www.aliantehomesforsale.com/about',
    type: 'profile',
  },
  other: {
    'article:published_time': '2024-01-15T08:00:00Z',
    'article:modified_time': new Date().toISOString(),
  },
};

export default function About() {
  return (
    <>
      {/* Enhanced Schema for E-E-A-T Signals */}
      <StructuredData type="Person" />
      <StructuredData
        type="Article"
        article={{
          title: 'About Dr. Jan Duffy - Aliante Real Estate Expert',
          description: 'Licensed Nevada real estate professional specializing in Aliante neighborhoods since 2018',
          datePublished: '2024-01-15T08:00:00Z',
          dateModified: new Date().toISOString(),
          url: 'https://www.aliantehomesforsale.com/about'
        }}
      />

      <main className="about-page">
        {/* Hero Section */}
        <AboutHero />

        {/* Stats Section */}
        <AboutStats />

        {/* Expertise Section */}
        <AboutExpertise />

        {/* Why Choose Us Section */}
        <AboutWhyChooseUs />

        {/* Commitment Section */}
        <AboutCommitment />

        {/* CTA Section */}
        <AboutCTA />
      </main>
    </>
  );
}

