import { getPageDefinition } from '../../lib/schema';
import FAQSection from './FAQSection';

type PageFAQProps = {
  pathname: string;
};

/**
 * Renders catalog FAQs for pages that do not already include an inline FAQ section.
 * JSON-LD is emitted separately by PageSchema so the visible Q&A matches the graph.
 */
export default function PageFAQ({ pathname }: PageFAQProps) {
  const definition = getPageDefinition(pathname);
  if (!definition || definition.faqPlacement !== 'layout' || !definition.faqs?.length) {
    return null;
  }

  return (
    <FAQSection title={`Frequently asked questions: ${definition.name}`} faqs={definition.faqs} />
  );
}
