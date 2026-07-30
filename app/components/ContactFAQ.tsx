'use client';

import FAQSection from './FAQSection';

const contactFaqs = [
  {
    question: 'How do I contact the Aliante real estate team?',
    answer:
      'Call (702) 707-7273, email DrDuffy@AlianteHomesForSale.com, or visit our office at 2590 Nature Park Drive, Suite 275, North Las Vegas, NV 89084. We are open seven days a week.',
  },
  {
    question: 'Is there a cost for buyer representation?',
    answer:
      "No. Buyer representation is free to you. Sellers and builders pay the buyer's agent commission. You get full advocacy, negotiation, and local expertise at no cost.",
  },
  {
    question: 'How quickly can I get a response?',
    answer:
      'We respond to calls and messages within the same day, usually within a few hours. For urgent inquiries about a specific listing, calling (702) 707-7273 is the fastest option.',
  },
];

export default function ContactFAQ() {
  return <FAQSection title="Frequently Asked Questions About Contacting Us" faqs={contactFaqs} />;
}
