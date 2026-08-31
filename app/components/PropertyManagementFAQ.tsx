'use client';

import FAQSection from './FAQSection';

const faqs = [
  {
    question: 'Who handles Aliante property management and HOA billing?',
    answer:
      'Aliante Master Association has been managed by FirstService Residential since 2003. Their North Las Vegas office is at 2590 Nature Park Drive, Suite 100. Dr. Jan Duffy’s real estate office is Suite 275 in the same building. Call FirstService for HOA and community management. Call (702) 707-7273 to buy or sell a home.',
  },
  {
    question: 'Do you manage rental homes in Aliante?',
    answer:
      'No. This site is for buying and selling Aliante real estate, not tenant screening or rent collection. If you want to purchase instead of rent, start with <a href="/homes-for-sale" class="text-blue-600 hover:underline font-semibold">Aliante homes for sale</a>.',
  },
  {
    question: 'Can you help me sell a rental I already own in Aliante?',
    answer:
      'Yes. That is a listing, not property management. Use the <a href="/seller-checklist" class="text-blue-600 hover:underline font-semibold">seller checklist</a> or request a <a href="/home-valuation" class="text-blue-600 hover:underline font-semibold">home valuation</a>.',
  },
];

export default function PropertyManagementFAQ() {
  return (
    <FAQSection title="Aliante property management — frequently asked questions" faqs={faqs} />
  );
}
