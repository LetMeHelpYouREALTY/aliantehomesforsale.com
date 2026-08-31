'use client';

import { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <h3 className="text-lg font-bold pr-4" style={{ color: '#1a365d' }}>
          {question}
        </h3>
        <span
          className="flex-shrink-0 text-2xl font-bold transition-transform duration-300"
          style={{
            color: '#2c5aa0',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        >
          ▼
        </span>
      </button>

      {isOpen && (
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <p className="text-gray-700 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function NewConstructionFAQ() {
  const faqs: FAQItemProps[] = [
    {
      question: "Do I need a buyer's agent for new construction?",
      answer:
        "The builder's sales agent represents the builder, not you. Having your own agent typically costs you nothing on participating builder contracts (the builder pays the cooperating commission). I review incentives, options, and walk-throughs on your side of the table.",
    },
    {
      question: 'How long does the new construction process take?',
      answer:
        'From contract to move-in typically takes 4-8 months depending on the home and builder. Quick move-in homes can be ready in 30-60 days.',
    },
    {
      question: 'What incentives are currently available?',
      answer:
        'Confirm today’s closing-cost, upgrade, and rate-buydown sheet with me. I will not publish a stale dollar range as current.',
    },
    {
      question: 'Can I negotiate with builders?',
      answer:
        'Yes! While builders have set base prices, you can negotiate upgrades, lot premiums, incentives, closing dates, and more. Having an experienced agent is crucial for successful negotiations.',
    },
    {
      question: 'Should I get a home inspection on new construction?',
      answer:
        'Absolutely. We recommend pre-drywall and pre-closing inspections. Even new homes can have issues, and catching them early is much easier than after closing.',
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#1a365d' }}>
            New Construction FAQs
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
