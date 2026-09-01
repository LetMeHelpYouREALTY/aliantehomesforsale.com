'use client';

import FAQSection from './FAQSection';

const faqs = [
  {
    question: "Do I need a buyer's agent for new construction?",
    answer:
      "The builder's sales agent represents the builder, not you. Buyer representation is typically at no extra cost to you on participating builder contracts — the builder pays the cooperating commission from its marketing budget. Confirm the fee arrangement in writing before you tour. I review incentives, options, and walk-throughs on your side of the table.",
  },
  {
    question: 'How long does the new construction process take?',
    answer:
      'Build calendars vary by builder, plan, and whether the home is already framed. Spec and quick-move-in homes can close faster than a to-be-built lot. Confirm the current close date on that contract — I will not publish a 4–8 month or 30–60 day promise.',
  },
  {
    question: 'What incentives are currently available?',
    answer:
      "Confirm today's closing-cost, upgrade, and rate-buydown sheet with me. I will not publish a stale dollar range as current.",
  },
  {
    question: 'Can I negotiate with builders?',
    answer:
      'Base prices are often set, but upgrades, lot premiums, incentives, and closing dates can still move. I review what that builder will actually change on the contract you will sign.',
  },
  {
    question: 'Should I get a home inspection on new construction?',
    answer:
      "Yes. Pre-drywall and pre-closing inspections catch issues while they are still the builder's to fix. Third-party inspections are a separate cost you confirm with the inspector.",
  },
];

export default function NewConstructionFAQ() {
  return <FAQSection title="New-construction FAQs relative to Aliante 89084" faqs={faqs} />;
}
