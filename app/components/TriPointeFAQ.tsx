'use client';

import FAQSection from './FAQSection';

const faqs = [
  {
    question: 'Does Tri Pointe build new homes inside Aliante 89084?',
    answer:
      'Not on Tri Pointe’s published 2026 Las Vegas map. Active collections are in northwest Las Vegas (Kyle Pointe and Citrine near Skye Canyon). For new homes inside Aliante, start with <a href="/builders/lennar" class="text-blue-600 hover:underline font-semibold">Lennar</a> or <a href="/homes-for-sale" class="text-blue-600 hover:underline font-semibold">Aliante MLS listings</a>.',
  },
  {
    question: 'Can I still use a buyer’s agent for Tri Pointe Homes Las Vegas?',
    answer:
      'Yes. Register with Dr. Jan Duffy before you tour so representation is documented. Call (702) 707-7273. On participating sales, the builder pays the cooperating fee from its marketing budget. Confirm the fee arrangement in writing before you tour.',
  },
];

export default function TriPointeFAQ() {
  return <FAQSection title="Tri Pointe Homes Las Vegas — frequently asked questions" faqs={faqs} />;
}
