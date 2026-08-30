import { contactFaqs } from '../../lib/schema/page-faqs';
import FAQSection from './FAQSection';

export default function ContactFAQ() {
  return <FAQSection title="Frequently Asked Questions About Contacting Us" faqs={contactFaqs} />;
}
