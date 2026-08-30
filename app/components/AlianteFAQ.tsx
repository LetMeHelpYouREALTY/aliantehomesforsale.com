import { homeFaqs } from '../../lib/schema/page-faqs';
import FAQSection from './FAQSection';

export default function AlianteFAQ() {
  return (
    <FAQSection title="Frequently Asked Questions About Aliante Real Estate" faqs={homeFaqs} />
  );
}
