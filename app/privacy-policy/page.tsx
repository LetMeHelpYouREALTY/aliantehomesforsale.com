import { pageHero } from '../../lib/content/site-images';
import { pageMetadata } from '../../lib/seo/page-metadata';
import AboutHero from '../components/AboutHero';
import LegalContent from '../components/LegalContent';

export const metadata = pageMetadata('/privacy-policy');

export default function PrivacyPolicy() {
  return (
    <main>
      <AboutHero
        title="Privacy policy"
        subtitle="How AlianteHomesForSale.com collects and uses information."
        image={pageHero('/privacy-policy')}
      />
      <LegalContent title="Our Commitment to Your Privacy">
        <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
          <p className="leading-relaxed">
            At Aliante Homes For Sale, we are committed to protecting your privacy and ensuring the
            security of your personal information. This Privacy Policy explains how we collect, use,
            disclose, and safeguard your information when you visit our website or use our services.
            We understand that real estate transactions involve sensitive personal and financial
            information, and we take our responsibility to protect that information seriously.
          </p>

          <p className="leading-relaxed">
            This policy applies to information we collect through our website, email communications,
            phone calls, text messages, and in-person interactions. By using our website or
            services, you consent to the data practices described in this policy. If you do not
            agree with our policies and practices, please do not use our website or services.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#2c5aa0' }}>
            Information We Collect
          </h3>

          <p className="leading-relaxed">
            We collect several types of information from and about users of our website and
            services. This includes information that you provide directly to us, such as your name,
            email address, phone number, physical address, and information about your real estate
            needs and preferences. When you fill out contact forms, request home valuations, sign up
            for property alerts, or communicate with us through email or phone, we collect and store
            this information to better serve your needs.
          </p>

          <p className="leading-relaxed">
            We also automatically collect certain information when you visit our website, including
            your IP address, browser type, operating system, referring URLs, pages viewed, and the
            dates and times of your visits. This information helps us improve our website
            performance, understand user behavior, and provide better services. We may use cookies
            and similar tracking technologies to collect this information and enhance your browsing
            experience.
          </p>

          <p className="leading-relaxed">
            For clients engaged in real estate transactions, we collect additional information
            necessary to facilitate the buying or selling process, including financial information
            provided to lenders for mortgage pre-approval, identification documents, and
            transaction-related documents. This information is collected and handled in accordance
            with applicable real estate regulations and privacy laws.
          </p>
        </div>
      </LegalContent>
    </main>
  );
}
