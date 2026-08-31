'use client';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title: string;
  faqs: FAQItem[];
}

function plainText(html: string): string {
  return html
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export default function FAQSection({ title, faqs }: FAQSectionProps) {
  // Generate FAQ Schema for Google rich results
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: plainText(faq.answer),
      },
    })),
  };

  return (
    <>
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-8 text-center"
            style={{ color: '#1a365d' }}
          >
            {title}
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors group"
              >
                <summary
                  className="font-bold text-lg flex justify-between items-center cursor-pointer rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 [&::-webkit-details-marker]:hidden"
                  style={{ color: '#2c5aa0', outlineColor: '#2c5aa0' }}
                >
                  <span>{faq.question}</span>
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 transition-transform group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div
                  className="mt-4 text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: faq.answer }}
                />
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
