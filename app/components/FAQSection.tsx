'use client';

/**
 * AEO-Optimized FAQ Section Component - 2026 Best Practices
 *
 * Note: FAQ rich results deprecated by Google (May 2026), but FAQPage schema
 * remains critical for Answer Engine Optimization (AEO) - AI engines like
 * ChatGPT, Perplexity, and Google AI Overviews still extract and cite this data.
 *
 * Source: https://cxl.com/blog/answer-engine-optimization-aeo-the-comprehensive-guide/
 */

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title: string;
  faqs: FAQItem[];
}

// Utility function to strip HTML tags for schema.org (AI engines need plain text)
function stripHTML(html: string): string {
  return html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
}

export default function FAQSection({ title, faqs }: FAQSectionProps) {
  const currentDate = new Date().toISOString();

  // Generate FAQ Schema optimized for AI engines (ChatGPT, Perplexity, Google AI)
  // Plain text answers for better AI extraction - HTML stripped for schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': 'https://www.aliantehomesforsale.com/#faq',
    'mainEntity': faqs.map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'dateCreated': currentDate,
      'dateModified': currentDate,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': stripHTML(faq.answer),
        'dateCreated': currentDate,
        'author': {
          '@type': 'Person',
          'name': 'Dr. Jan Duffy',
          'jobTitle': 'Real Estate Agent',
        }
      }
    })),
    'about': {
      '@type': 'Thing',
      'name': 'Aliante Real Estate',
      'description': 'Homes, neighborhoods, and real estate information for Aliante, North Las Vegas'
    },
    'inLanguage': 'en-US'
  };

  return (
    <>
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section
        className="py-16 px-4 bg-white"
        itemScope
        itemType="https://schema.org/FAQPage"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center" style={{ color: '#1a365d' }}>
            {title}
          </h2>

          {/* AEO-optimized FAQ content with microdata for better AI extraction */}
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors cursor-pointer group"
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <summary
                  className="font-bold text-lg list-none flex justify-between items-center"
                  style={{ color: '#2c5aa0' }}
                  itemProp="name"
                >
                  <span>{faq.question}</span>
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div
                  className="mt-4 text-gray-700 leading-relaxed"
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <div itemProp="text" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

