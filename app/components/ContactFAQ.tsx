'use client';

import FAQSection from './FAQSection';

const contactFaqs = [
  {
    question: 'How do I contact the Aliante real estate team?',
    answer:
      'Call (702) 707-7273, email DrDuffy@AlianteHomesForSale.com, or visit our office at 2590 Nature Park Drive, Suite 275, North Las Vegas, NV 89084. Office hours are Mon–Fri 8:00 AM – 7:00 PM and Sat–Sun 9:00 AM – 6:00 PM.',
  },
  {
    question: 'Is there a cost for buyer representation?',
    answer:
      'Buyer representation is typically at no extra cost to you on participating sales — the seller or builder pays the cooperating fee from its marketing budget. Confirm the fee arrangement in writing before you tour.',
  },
  {
    question: 'How quickly can I get a response?',
    answer:
      'Call (702) 707-7273 for the fastest reply on a specific listing. I return messages during office hours and will not publish a same-day or two-hour response promise.',
  },
];

export default function ContactFAQ() {
  return <FAQSection title="Frequently Asked Questions About Contacting Us" faqs={contactFaqs} />;
}
