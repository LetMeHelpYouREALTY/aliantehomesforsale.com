import type { Metadata } from 'next';
import AboutHero from '../components/AboutHero';
import AboutStats from '../components/AboutStats';
import AboutExpertise from '../components/AboutExpertise';
import AboutWhyChooseUs from '../components/AboutWhyChooseUs';
import AboutCommitment from '../components/AboutCommitment';
import AboutCTA from '../components/AboutCTA';
import AboutFAQ from '../components/AboutFAQ';

export const metadata: Metadata = {
  title: 'About Aliante Real Estate - Local Experts Since 2018',
  description:
    'Meet the local real estate experts serving Aliante and North Las Vegas since 2018. 500+ successful transactions, deep builder relationships, and unmatched market knowledge.',
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
