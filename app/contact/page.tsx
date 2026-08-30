import { pageHero } from '../../lib/content/site-images';
import { pageMetadata } from '../../lib/seo/page-metadata';
import ContactFAQ from '../components/ContactFAQ';
import ContactHero from '../components/ContactHero';
import ContactMethods from '../components/ContactMethods';
import ContactWhyChoose from '../components/ContactWhyChoose';
import EnhancedContactForm from '../components/EnhancedContactForm';
import NearbyLocatorMap from '../components/NearbyLocatorMap';
import OfficeLocation from '../components/OfficeLocation';

export const metadata = pageMetadata('/contact', {
  title: 'Contact Dr. Jan Duffy in Aliante',
  description:
    'Visit 2590 Nature Park Drive, Suite 275, North Las Vegas, NV 89084. Get directions, see what’s nearby, or call (702) 707-7273.',
});

export default function Contact() {
  return (
    <main className="contact-page">
      {/* Hero Section */}
      <ContactHero
        title="Contact Dr. Jan Duffy in Aliante"
        subtitle="2590 Nature Park Drive, Suite 275, North Las Vegas, NV 89084. Call (702) 707-7273."
        image={pageHero('/contact')}
      />

      {/* Contact Methods Grid */}
      <ContactMethods />

      {/* Contact Form Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container">
          <EnhancedContactForm />
        </div>
      </section>

      {/* Why Choose Us */}
      <ContactWhyChoose />

      {/* FAQ with schema (AEO) */}
      <ContactFAQ />

      {/* Office Location & Map */}
      <OfficeLocation />

      {/* GBP: Show what’s nearby with Google Maps */}
      <NearbyLocatorMap />
    </main>
  );
}
