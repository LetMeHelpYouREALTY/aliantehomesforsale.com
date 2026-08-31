import type { Metadata } from 'next';
import AboutHero from '../components/AboutHero';
import LegalContent from '../components/LegalContent';

export const metadata: Metadata = {
  title: 'Accessibility Statement - Aliante Homes For Sale',
  description:
    'How we work to keep AlianteHomesForSale.com usable. Call (702) 707-7273 if a page blocks you.',
  alternates: { canonical: 'https://www.aliantehomesforsale.com/accessibility' },
};

export default function Accessibility() {
  return (
    <main>
      <AboutHero
        title="Accessibility | Aliante Homes for Sale, North Las Vegas 89084"
        subtitle="We work to keep AlianteHomesForSale.com usable. Call (702) 707-7273 if a page blocks you."
      />
      <LegalContent title="Website Accessibility Commitment">
        <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
          <p className="leading-relaxed">
            At Aliante Homes For Sale, we work to keep this site usable for people with
            disabilities. If a page, form, or widget blocks you, call (702) 707-7273 and we will
            help you complete the request another way.
          </p>

          <p className="leading-relaxed">
            We aim to follow Web Content Accessibility Guidelines (WCAG) 2.2 Level AA published by
            the World Wide Web Consortium (W3C). Those guidelines cover how to make web content more
            usable for people who are blind or have low vision, are deaf or hard of hearing, have
            limited mobility, or have cognitive disabilities. This page is a statement of intent,
            not a certified audit.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#2c5aa0' }}>
            Accessibility Features
          </h3>

          <p className="leading-relaxed">
            The site uses semantic HTML, labeled form fields, a skip link, and keyboard-focus styles
            on primary controls. Images that we control include alt text describing the location or
            service. Third-party widgets (including MLS search) are subject to those vendors’
            accessibility. Color contrast is checked on primary text; report any remaining contrast
            issue and we will fix it.
          </p>

          <p className="leading-relaxed">
            Pages are responsive and should remain usable when zoomed. We do not claim a current
            certified WCAG score or a standing screen-reader test cadence. Call or email if you hit
            a barrier.
          </p>

          <p className="leading-relaxed">
            Report accessibility problems to Dr. Jan Duffy at (702) 707-7273 or
            DrDuffy@AlianteHomesForSale.com. We will work with you to provide the listing or form
            another way.
          </p>
        </div>
      </LegalContent>
    </main>
  );
}
