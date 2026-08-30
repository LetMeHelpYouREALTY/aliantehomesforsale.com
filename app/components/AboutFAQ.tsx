import { aboutFaqs } from '../../lib/schema/page-faqs';
import FAQSection from './FAQSection';

export default function AboutFAQ() {
  return <FAQSection title="Frequently Asked Questions About Our Team" faqs={aboutFaqs} />;
}
