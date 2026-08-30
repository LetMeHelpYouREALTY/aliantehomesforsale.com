import { pageMetadata } from '../../lib/seo/page-metadata';
import AboutHero from '../components/AboutHero';
import LegalContent from '../components/LegalContent';

export const metadata = pageMetadata('/terms-of-service');

export default function TermsOfService() {
  return (
    <main>
      <AboutHero title="Terms of service" subtitle="Rules for using AlianteHomesForSale.com." />
      <LegalContent title="Terms of Service Agreement">
        <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
          <p className="leading-relaxed">
            Welcome to AlianteHomesForSale.com. These Terms of Service govern your use of our
            website and services provided by Dr. Jan Duffy, a licensed real estate professional in
            Nevada. By accessing or using our website, you agree to be bound by these Terms of
            Service and all applicable laws and regulations. If you do not agree with any of these
            terms, you are prohibited from using or accessing this site.
          </p>

          <p className="leading-relaxed">
            The materials and information contained on this website are provided for general
            informational purposes only. While we strive to provide accurate and up-to-date
            information, we make no warranties or representations regarding the accuracy,
            completeness, or timeliness of any information on this site. Real estate market
            conditions, property availability, and pricing information can change rapidly, and
            information on this site may not reflect the most current status.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#2c5aa0' }}>
            Use of Services and Website
          </h3>

          <p className="leading-relaxed">
            You may use our website and services only for lawful purposes and in accordance with
            these Terms. You agree not to use our website in any way that violates any applicable
            federal, state, local, or international law or regulation. You agree not to attempt to
            gain unauthorized access to any portion of the website, other user accounts, or any
            systems or networks connected to the website through hacking, password mining, or any
            other means.
          </p>

          <p className="leading-relaxed">
            The information provided through our website, including property listings, market data,
            and educational content, is for informational purposes only and should not be construed
            as professional advice. We are not attorneys, accountants, or financial advisors, and
            nothing on this website should be considered legal, financial, or tax advice. You should
            consult with appropriate professionals regarding your specific situation and needs.
          </p>

          <p className="leading-relaxed">
            All property listings, photographs, virtual tours, floor plans, and other content on
            this website are subject to errors, omissions, changes, prior sale, or withdrawal
            without notice. All property information should be independently verified by prospective
            buyers or their agents. Square footage, lot sizes, school information, and other
            property details are approximate and provided for informational purposes only.
          </p>
        </div>
      </LegalContent>
    </main>
  );
}
