import { pageMetadata } from '../../lib/seo/page-metadata';
import AboutHero from '../components/AboutHero';
import LegalContent from '../components/LegalContent';

export const metadata = pageMetadata('/accessibility');

export default function Accessibility() {
  return (
    <main>
      <AboutHero
        title="Accessibility statement"
        subtitle="How we work toward WCAG 2.1 AA on this site."
      />
      <LegalContent title="Website Accessibility Commitment">
        <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
          <p className="leading-relaxed">
            At Aliante Homes For Sale, we are committed to ensuring digital accessibility for people
            with disabilities. We continually work to improve the user experience for everyone and
            apply relevant accessibility standards to ensure our website is accessible to all users,
            regardless of ability or technology used.
          </p>

          <p className="leading-relaxed">
            We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA
            standards published by the World Wide Web Consortium (W3C). These guidelines explain how
            to make web content more accessible for people with disabilities, including users who
            are blind or have low vision, are deaf or hard of hearing, have limited mobility, or
            have cognitive disabilities.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#2c5aa0' }}>
            Accessibility Features
          </h3>

          <p className="leading-relaxed">
            Our website includes several features designed to improve accessibility. We use semantic
            HTML markup to provide proper structure and meaning to content, making it easier for
            screen readers and assistive technologies to interpret. All images include descriptive
            alt text that conveys the content and purpose of the image to users who cannot see them.
            Interactive elements like buttons and links are clearly labeled and keyboard accessible,
            allowing users to navigate the site without a mouse.
          </p>

          <p className="leading-relaxed">
            We have implemented color contrast ratios that meet WCAG AA standards to ensure text is
            readable for users with visual impairments or color blindness. Our forms include clear
            labels and error messages to guide users through completing required fields. Video
            content, when available, includes captions and transcripts to ensure deaf and hard of
            hearing users can access the information. The website is designed to be responsive and
            function properly across different devices and screen sizes, including when content is
            zoomed to 200% for users who need larger text.
          </p>

          <p className="leading-relaxed">
            We regularly test our website with various assistive technologies, including screen
            readers, keyboard-only navigation, and speech recognition software, to identify and
            address accessibility barriers. Our development team stays informed about accessibility
            best practices and emerging standards to ensure our website remains accessible as
            technology and guidelines evolve.
          </p>
        </div>
      </LegalContent>
    </main>
  );
}
