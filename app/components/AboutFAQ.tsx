'use client';

import FAQSection from './FAQSection';

const aboutFaqs = [
  {
    question: 'Who is Dr. Jan Duffy?',
    answer:
      'Dr. Jan Duffy is a licensed Nevada real estate professional (Berkshire Hathaway HomeServices Nevada Properties, S.0197614.LLC) specializing in Aliante and North Las Vegas 89084 since 2018. She represents buyers and sellers on Club Aliante, gated villages, Sun City Aliante, and Tule Springs new construction.',
  },
  {
    question: 'What areas do you serve?',
    answer:
      'Aliante and North Las Vegas, Nevada — including Sun City Aliante, The Prominence, Desert Willows, Club Aliante, The Paseos, nearby Tule Springs, and new construction in ZIP 89084 and adjacent streets.',
  },
  {
    question: 'Why work with an 89084 realtor?',
    answer:
      'A local agent knows builder incentive sheets, village HOAs, and live MLS comps. I help buyers negotiate and document representation before model tours, and I help sellers price from neighborhood comps — not a valley-wide average.',
  },
];

export default function AboutFAQ() {
  return <FAQSection title="Frequently Asked Questions About Dr. Jan Duffy" faqs={aboutFaqs} />;
}
