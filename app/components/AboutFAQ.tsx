'use client';

import FAQSection from './FAQSection';

const aboutFaqs = [
  {
    question: 'Who is Dr. Jan Duffy?',
    answer:
      "Dr. Jan Duffy is a licensed real estate professional (Berkshire Hathaway HomeServices Nevada Properties) specializing in Aliante and North Las Vegas since 2018. She has completed 500+ transactions and is D.R. Horton's #1 Premiere Agent in the area.",
  },
  {
    question: 'What areas do you serve?',
    answer:
      'We serve Aliante and North Las Vegas, Nevada, including Sun City Aliante, The Prominence, Desert Willows, Club Aliante, The Paseos, Tule Springs, and all surrounding neighborhoods and new construction communities.',
  },
  {
    question: 'Why work with a local Aliante expert?',
    answer:
      'A local expert knows builder incentives, neighborhood trends, and market timing. We help buyers save thousands through negotiation and access to exclusive offers, and we help sellers price and market homes effectively.',
  },
];

export default function AboutFAQ() {
  return <FAQSection title="Frequently Asked Questions About Our Team" faqs={aboutFaqs} />;
}
