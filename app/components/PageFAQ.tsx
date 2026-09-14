import { pageFaqs } from '../../lib/content/page-faqs';
import FAQSection from './FAQSection';

type PageFAQProps = {
  path: string;
  title?: string;
};

export default function PageFAQ({ path, title = 'Frequently asked questions' }: PageFAQProps) {
  const faqs = pageFaqs[path];
  if (!faqs?.length) return null;
  return <FAQSection title={title} faqs={faqs} />;
}
