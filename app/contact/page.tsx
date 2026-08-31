import type { Metadata } from 'next';
import ContactFAQ from '../components/ContactFAQ';
import ContactHero from '../components/ContactHero';
import ContactMethods from '../components/ContactMethods';
import ContactWhyChoose from '../components/ContactWhyChoose';
import EnhancedContactForm from '../components/EnhancedContactForm';
import NearbyLocatorMap from '../components/NearbyLocatorMap';
import OfficeLocation from '../components/OfficeLocation';

export const metadata: Metadata = {
  title: 'Contact Aliante Realtor | Call (702) 707-7273 · North Las Vegas 89084',
  description:
    'Call Dr. Jan Duffy at (702) 707-7273. Buyer or seller representation in Aliante, North Las Vegas 89084. Office at 2590 Nature Park Drive, Suite 275.',
  keywords: 'contact aliante realtor, dr jan duffy phone, aliante real estate 89084',
  alternates: {
    canonical: 'https://www.aliantehomesforsale.com/contact',
  },
};

export default function Contact() {
  return (
    <main className="contact-page">
      {/* Hero Section */}
      <ContactHero
        title="Contact Aliante Realtor | Call (702) 707-7273"
        subtitle="Buyer or seller representation in ZIP 89084. Office at 2590 Nature Park Drive, Suite 275, North Las Vegas."
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
