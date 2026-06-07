'use client';

/**
 * AEO-Optimized FAQ Section Component
 *
 * Optimized for Answer Engine Optimization (AEO) - 2026 Best Practices
 * - Structures content for AI platforms (ChatGPT, Perplexity, Google AI Overviews)
 * - Uses FAQPage schema for AI extraction (Google rich results deprecated May 2026, but still valuable for AI)
 * - Direct, concise answers for maximum AI citation probability
 * - Fresh content signals for generative engines
 */

import StructuredData from './StructuredData';

interface FAQ {
  question: string;
  answer: string;
  category?: string;
}

interface AEOFAQSectionProps {
  title?: string;
  faqs: FAQ[];
  className?: string;
}

export default function AEOFAQSection({
  title = 'Frequently Asked Questions',
  faqs,
  className = ''
}: AEOFAQSectionProps) {
  return (
    <section className={`aeo-faq-section ${className}`}>
      {/* AEO Schema - Critical for AI engines even though Google rich results deprecated */}
      <StructuredData type="FAQPage" faqs={faqs} />

      <div className="container">
        <h2 className="text-center mb-8 text-3xl font-bold">{title}</h2>

        <div className="faq-list space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="faq-item bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              itemScope
              itemType="https://schema.org/Question"
            >
              <h3
                className="faq-question text-xl font-semibold mb-3 text-primary-color"
                itemProp="name"
              >
                {faq.question}
              </h3>
              <div
                className="faq-answer text-gray-700 leading-relaxed"
                itemScope
                itemType="https://schema.org/Answer"
                itemProp="acceptedAnswer"
              >
                <p itemProp="text">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .aeo-faq-section {
          padding: 4rem 0;
          background: #f8f9fa;
        }

        .faq-list {
          max-width: 900px;
          margin: 0 auto;
        }

        .faq-item {
          border-left: 4px solid #2c5aa0;
        }

        @media (max-width: 768px) {
          .aeo-faq-section {
            padding: 2rem 0;
          }

          .faq-item {
            padding: 1rem;
          }
        }
      `}</style>
    </section>
  );
}

// Aliante-specific FAQ presets for easy reuse
export const AlianteFAQs: FAQ[] = [
  {
    question: 'What is Aliante in North Las Vegas?',
    answer: 'Aliante is a master-planned community in North Las Vegas, Nevada featuring gated communities, championship golf courses, and 55+ active adult living. Located in zip code 89084, Aliante offers over 286+ homes for sale with amenities including Sun City Aliante, Club Aliante Golf Course, shopping, dining, and parks.',
    category: 'General'
  },
  {
    question: 'How much do homes cost in Aliante?',
    answer: 'Homes in Aliante range from approximately $400,000 for starter homes in The Paseos to over $800,000 for luxury properties in The Prominence gated community. The average home price is around $550,000 with options for new construction and resale properties.',
    category: 'Pricing'
  },
  {
    question: 'What neighborhoods are in Aliante?',
    answer: 'Aliante features several distinct neighborhoods: The Prominence (luxury gated community), Desert Willows (family-friendly), Club Aliante (golf course community), Sun City Aliante (55+ active adult), and The Paseos (affordable housing). Each offers unique amenities and lifestyle options.',
    category: 'Neighborhoods'
  },
  {
    question: 'Is Aliante a good place to live?',
    answer: 'Yes, Aliante is highly rated for its amenities, safety, and community features. Residents enjoy access to championship golf, gated security, excellent schools, shopping at Aliante Casino + Hotel, Nature Discovery Park, and quick access to I-215 freeway. The area has seen consistent growth since 2003.',
    category: 'Lifestyle'
  },
  {
    question: 'What is Sun City Aliante?',
    answer: 'Sun City Aliante is a premier 55+ active adult community within Aliante featuring age-restricted homes, resort-style amenities, golf courses, fitness centers, pools, and social clubs. Built by Del Webb, it offers low-maintenance living with HOA services for active seniors.',
    category: '55+ Living'
  },
  {
    question: 'Are there HOA fees in Aliante?',
    answer: 'Yes, most Aliante communities have HOA fees ranging from $50-$200+ per month depending on the neighborhood. Gated communities like The Prominence have higher fees ($150-$250) covering security, landscaping, and amenities. Sun City Aliante HOA fees are typically $150-$200 monthly.',
    category: 'HOA'
  },
  {
    question: 'What schools serve Aliante?',
    answer: 'Aliante is served by Clark County School District including Aliante Elementary School, Bob Miller Middle School, and Centennial High School. The area also features private school options and is known for newer school facilities built within the past 15 years.',
    category: 'Schools'
  },
  {
    question: 'How far is Aliante from the Las Vegas Strip?',
    answer: 'Aliante is located approximately 20-25 minutes north of the Las Vegas Strip via I-215 and I-15. The community offers suburban living with easy freeway access to downtown Las Vegas, the Strip, and McCarran International Airport (30 minutes).',
    category: 'Location'
  },
];
