import type { Metadata } from 'next';
import ContactFAQ from '../components/ContactFAQ';
import ContactHero from '../components/ContactHero';
import ContactMethods from '../components/ContactMethods';
import ContactWhyChoose from '../components/ContactWhyChoose';
import EnhancedContactForm from '../components/EnhancedContactForm';
import OfficeLocation from '../components/OfficeLocation';

export const metadata: Metadata = {
  title: 'Contact & Directions | Aliante Real Estate — Dr. Jan Duffy',
  description:
    'Visit Dr. Jan Duffy at 2590 Nature Park Drive, Suite 275, North Las Vegas, NV 89084. Get directions, call (702) 707-7273, or book a free consultation. Open 7 days a week.',
  alternates: {
    canonical: 'https://www.aliantehomesforsale.com/contact',
  },
};

export default function Contact() {
  return (
    <main className="contact-page">
      {/* Hero Section */}
      <ContactHero />

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
    </main>
  );
}
