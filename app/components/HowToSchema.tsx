import { graphIds } from '../../lib/graphs/ids';

interface HowToStep {
  name: string;
  text: string;
}

/** Name, description, and every step must be copy that is visible on the page. */
interface HowToSchemaProps {
  name: string;
  description: string;
  steps: HowToStep[];
}

export default function HowToSchema({ name, description, steps }: HowToSchemaProps) {
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
    author: { '@id': graphIds.agent },
    inLanguage: 'en-US',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
    />
  );
}
