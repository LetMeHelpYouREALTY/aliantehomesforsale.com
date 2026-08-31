import type { Metadata } from 'next';
import AboutCommitment from '../components/AboutCommitment';
import AboutCTA from '../components/AboutCTA';
import AboutExpertise from '../components/AboutExpertise';
import AboutFAQ from '../components/AboutFAQ';
import AboutHero from '../components/AboutHero';
import AboutStats from '../components/AboutStats';
import AboutWhyChooseUs from '../components/AboutWhyChooseUs';

export const metadata: Metadata = {
  title: 'Aliante Realtor | Dr. Jan Duffy, North Las Vegas 89084',
  description:
    'Meet Dr. Jan Duffy, Aliante realtor at Berkshire Hathaway HomeServices Nevada Properties. Buyer and seller representation in ZIP 89084 since 2018. Call (702) 707-7273.',
  alternates: {
    canonical: 'https://www.aliantehomesforsale.com/about',
  },
};

export default function About() {
  return (
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

      {/* FAQ with schema (AEO) */}
      <AboutFAQ />

      {/* CTA Section */}
      <AboutCTA />
    </main>
  );
}
