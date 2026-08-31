'use client';

import { siteConfig } from '../../lib/site-config';
import ExternalLink from './ExternalLink';

type LegalContentProps = {
  title: string;
  children: React.ReactNode;
  lastUpdated?: string;
};

export default function LegalContent({
  title,
  children,
  lastUpdated = 'August 31, 2026',
}: LegalContentProps) {
  const { address, phone, phoneTel, email, hours, maps, official, agentLicense } = siteConfig;

  return (
    <>
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: '#1a365d' }}>
            {title}
          </h2>
          <p className="text-sm text-gray-500 mb-8">Last updated: {lastUpdated}</p>
          {children}
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: '#1a365d' }}>
            Contact Information
          </h2>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p className="leading-relaxed">
              If you have questions about this policy or our practices, please contact Dr. Jan
              Duffy:
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#2c5aa0' }}>
              Dr. Jan Duffy - Aliante Real Estate Specialist
            </h3>

            <p className="leading-relaxed">
              <strong>Office Address:</strong>
              <br />
              <ExternalLink href={maps.placeUrl} className="text-blue-600 hover:underline">
                {address.streetAddress}
                <br />
                {address.addressLocality}, {address.addressRegion} {address.postalCode}
              </ExternalLink>
            </p>

            <p className="leading-relaxed">
              <strong>Phone:</strong>{' '}
              <a href={`tel:${phoneTel}`} className="text-blue-600 hover:underline">
                {phone}
              </a>
              <br />
              <strong>Email:</strong>{' '}
              <a href={`mailto:${email}`} className="text-blue-600 hover:underline">
                {email}
              </a>
            </p>

            <p className="leading-relaxed">
              <strong>Office Hours:</strong>
              <br />
              {hours.weekday}
              <br />
              {hours.weekend}
            </p>

            <p className="leading-relaxed text-sm">
              Brokerage:{' '}
              <ExternalLink href={official.brokerage} className="text-blue-600 hover:underline">
                {siteConfig.brokerage}
              </ExternalLink>
              . License:{' '}
              <ExternalLink
                href={official.nredLicenseLookup}
                className="text-blue-600 hover:underline"
              >
                {agentLicense}
              </ExternalLink>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: '#1a365d' }}>
            Updates and Changes
          </h2>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p className="leading-relaxed">
              We may update this policy from time to time to reflect changes in our practices or
              legal requirements. When we make changes, we will update the "Last Updated" date at
              the top of this page. We encourage you to review this policy periodically to stay
              informed about how we are protecting your information and rights.
            </p>

            <p className="leading-relaxed">
              For significant changes that materially affect your rights or how we handle
              information, we will provide prominent notice on our website or contact you directly
              using the contact information you have provided. Your continued use of our website and
              services after any changes indicates your acceptance of the updated policy.
            </p>

            <p className="leading-relaxed">
              This website and services are provided by Dr. Jan Duffy, a licensed real estate
              professional in Nevada. All real estate transactions are subject to applicable
              federal, state, and local laws and regulations. Nothing on this website should be
              construed as legal advice, and we recommend consulting with appropriate professionals
              for legal, financial, and tax matters related to real estate transactions.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
