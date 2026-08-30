interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title: string;
  faqs: FAQItem[];
}

export default function FAQSection({ title, faqs }: FAQSectionProps) {
  return (
    <section className="py-16 px-4 bg-white" id="faq">
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
              className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors cursor-pointer group"
            >
              <summary
                className="font-bold text-lg list-none flex justify-between items-center"
                style={{ color: '#2c5aa0' }}
              >
                <span>{faq.question}</span>
                <svg
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
              <p className="mt-4 text-gray-700 leading-relaxed">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
