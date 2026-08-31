'use client';

import FAQSection from './FAQSection';

const faqs = [
  {
    question: 'Does Toll Brothers build new homes inside Aliante 89084?',
    answer:
      'No. As of August 31, 2026, Toll Brothers is not selling new construction inside the Aliante master plan. Aliante buyers who want Toll Brothers typically tour Elkhorn Grove in ZIP 89131 or other Clark County collections. For new homes inside Aliante, start with <a href="/builders/lennar" class="text-blue-600 hover:underline font-semibold">Lennar</a>, <a href="/builders/dr-horton" class="text-blue-600 hover:underline font-semibold">D.R. Horton</a>, <a href="/builders/tri-pointe" class="text-blue-600 hover:underline font-semibold">Tri Pointe</a>, or <a href="/builders/del-webb" class="text-blue-600 hover:underline font-semibold">Del Webb at Sun City Aliante</a>.',
  },
  {
    question: 'Where is the closest Toll Brothers community to Aliante?',
    answer:
      'Elkhorn Grove is at 5819 Kings Bluff Ave, Las Vegas, NV 89131. Toll Brothers lists Club Aliante golf about six minutes away. It is northwest Las Vegas, not ZIP 89084. Call (702) 707-7273 to compare Elkhorn Grove with Aliante resale and builder inventory on the same day.',
  },
  {
    question: 'Do I need a buyer’s agent to purchase a Toll Brothers home?',
    answer:
      'Yes, if you want someone who represents you. Toll Brothers sales counselors represent the builder. Independent buyer representation with Dr. Jan Duffy does not add a fee on top of the builder’s published price. The builder pays the buyer-broker compensation from its marketing budget. <a href="/contact" class="text-blue-600 hover:underline font-semibold">Contact the office</a> before you tour so registration is done correctly.',
  },
  {
    question: 'How do Toll Brothers homes compare with Lennar in Aliante?',
    answer:
      'Toll Brothers is a luxury national builder with collections across the Las Vegas Valley. Lennar is the volume builder still selling inside Aliante. Compare commute, included finishes, lot premiums, and the live incentive sheet—not a blog price range. I walk both product lines with you. See the <a href="/new-construction" class="text-blue-600 hover:underline font-semibold">Aliante new construction overview</a>.',
  },
  {
    question: 'Are Toll Brothers prices and incentives on this page current?',
    answer:
      'No page can freeze builder pricing. Toll Brothers publishes starting prices and limited-time programs on its own site; those numbers change. I confirm the current homesite price, options, and lender incentive with the sales office before you write an offer. Call (702) 707-7273.',
  },
];

export default function TollBrothersFAQ() {
  return <FAQSection title="Toll Brothers near Aliante — frequently asked questions" faqs={faqs} />;
}
