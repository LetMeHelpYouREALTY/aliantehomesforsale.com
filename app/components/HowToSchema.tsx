'use client';

import { useId } from 'react';

interface HowToStep {
  name: string;
  text: string;
  url?: string;
  image?: string;
}

interface HowToSchemaProps {
  name: string;
  description: string;
  steps: HowToStep[];
  totalTime?: string; // ISO 8601 duration format (e.g., "PT30M" for 30 minutes)
  estimatedCost?: {
    currency: string;
    value: string;
  };
  supply?: string[]; // Tools/supplies needed
}

export default function HowToSchema({
  name,
  description,
  steps,
  totalTime,
  estimatedCost,
  supply,
}: HowToSchemaProps) {
  const scriptId = useId();

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    ...(totalTime && { totalTime }),
    ...(estimatedCost && { estimatedCost }),
    ...(supply && supply.length > 0 && { supply }),
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      ...(step.url && { url: step.url }),
      ...(step.image && {
        image: {
          '@type': 'ImageObject',
          url: step.image,
        },
      }),
    })),
    // AEO 2026: Add author for E-E-A-T
    author: {
      '@type': 'Person',
      name: 'Dr. Jan Duffy',
      url: 'https://www.aliantehomesforsale.com/about',
    },
    // AEO 2026: Add publication date for freshness
    datePublished: new Date().toISOString(),
    inLanguage: 'en-US',
  };

  return (
    <script
      type="application/ld+json"
      id={scriptId}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
    />
  );
}
