'use client';

import FAQSection from './FAQSection';

const contactFaqs = [
  {
    question: 'How do I contact the Aliante real estate team?',
    answer:
      'Call (702) 707-7273, email DrDuffy@AlianteHomesForSale.com, visit 2590 Nature Park Drive, Suite 275, North Las Vegas, NV 89084, or book time on Calendly — the scheduler is on this page and the blue “Schedule time with me” badge.',
  },
  {
    question: 'Is there a cost for buyer representation?',
    answer:
      "No. Buyer representation is free to you. Sellers and builders pay the buyer's agent commission. You get full advocacy, negotiation, and local expertise at no cost.",
  },
  {
    question: 'How quickly can I get a response?',
    answer:
      'We respond to calls and messages within the same day, usually within a few hours. For urgent listing questions, call (702) 707-7273. You can also book a 15-minute consultation on Calendly without filling out a form.',
  },
  {
    question: 'How do I book time with Dr. Jan Duffy?',
    answer:
      'Use the Calendly scheduler on this page or the “Schedule time with me” badge. Choose a 15-minute consultation, an appointment, a private showing, or a neighborhood tour. No contact form is required.',
  },
];

export default function ContactFAQ() {
  return <FAQSection title="Frequently Asked Questions About Contacting Us" faqs={contactFaqs} />;
}
