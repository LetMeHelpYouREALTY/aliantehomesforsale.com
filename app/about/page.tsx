import { pageMetadata } from '../../lib/seo/page-metadata';
import AboutCommitment from '../components/AboutCommitment';
import AboutCTA from '../components/AboutCTA';
import AboutExpertise from '../components/AboutExpertise';
import AboutFAQ from '../components/AboutFAQ';
import AboutHero from '../components/AboutHero';
import AboutStats from '../components/AboutStats';
import AboutWhyChooseUs from '../components/AboutWhyChooseUs';

export const metadata = pageMetadata('/about', {
  title: 'Dr. Jan Duffy, Aliante real estate since 2018',
  description:
    'Nevada license S.0197614.LLC. Berkshire Hathaway HomeServices Nevada Properties. Aliante and North Las Vegas 89084 specialist.',
});

export default function About() {
  return (
    <main className="about-page">
      {/* Hero Section */}
      <AboutHero
        title="Dr. Jan Duffy, Aliante real estate since 2018"
        subtitle="Nevada license S.0197614.LLC · Berkshire Hathaway HomeServices Nevada Properties · 89084 specialist."
      />

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
