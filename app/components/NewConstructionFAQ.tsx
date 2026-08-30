import { newConstructionFaqs } from '../../lib/schema/page-faqs';
import FAQSection from './FAQSection';

export default function NewConstructionFAQ() {
  return <FAQSection title="New Construction FAQs" faqs={newConstructionFaqs} />;
}
