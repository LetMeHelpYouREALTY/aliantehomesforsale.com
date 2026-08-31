'use client';

import FAQSection from './FAQSection';

export default function AlianteFAQ() {
  const faqs = [
    {
      question: 'Which Aliante neighborhoods can I tour in ZIP 89084?',
      answer:
        '<a href="/neighborhoods/desert-willows" class="text-blue-600 hover:underline font-semibold">Desert Willows</a> and <a href="/neighborhoods/paseos" class="text-blue-600 hover:underline font-semibold">The Paseos</a> are open-access villages with parks and community pools. <a href="/neighborhoods/prominence" class="text-blue-600 hover:underline font-semibold">The Prominence</a> and <a href="/neighborhoods/club-aliante" class="text-blue-600 hover:underline font-semibold">Club Aliante</a> are gated. Confirm live MLS prices before you offer.',
    },
    {
      question: 'How do I confirm new-construction prices near Aliante?',
      answer:
        'Confirm live inventory and incentive sheets with <a href="/builders/lennar" class="text-blue-600 hover:underline font-semibold">Lennar</a>, <a href="/builders/dr-horton" class="text-blue-600 hover:underline font-semibold">D.R. Horton</a>, and <a href="/builders/del-webb" class="text-blue-600 hover:underline font-semibold">Del Webb</a>. I will not publish a stale dollar amount. Check the <a href="/builders/incentives" class="text-blue-600 hover:underline font-semibold">Builder Incentives</a> page or call (702) 707-7273.',
    },
    {
      question: 'What is Sun City Aliante and who can live there?',
      answer:
        '<a href="/sun-city-aliante" class="text-blue-600 hover:underline font-semibold">Sun City Aliante</a> is a Del Webb 55+ community inside ZIP 89084 — not Ardiente (89081). At least one resident must be 55 or older. Amenities include fitness, pools, clubs, and nearby <a href="/golf-homes" class="text-blue-600 hover:underline font-semibold">Aliante Golf Club</a>. Confirm live MLS before you offer.',
    },
    {
      question: 'Are there gated communities in Aliante?',
      answer:
        'Yes. Gated villages inside the Aliante master plan include <a href="/neighborhoods/prominence" class="text-blue-600 hover:underline font-semibold">The Prominence</a> and <a href="/neighborhoods/club-aliante" class="text-blue-600 hover:underline font-semibold">Club Aliante</a>. Browse <a href="/gated-communities" class="text-blue-600 hover:underline font-semibold">gated communities</a> and confirm live MLS listings rather than a stale count.',
    },
    {
      question: 'How often are MLS listings updated on this site?',
      answer:
        '<a href="/homes-for-sale" class="text-blue-600 hover:underline font-semibold">MLS listings</a> refresh about every 15 minutes from the Las Vegas MLS feed. Inventory changes daily — use <a href="/search" class="text-blue-600 hover:underline font-semibold">advanced search</a> or call (702) 707-7273 for current addresses.',
    },
    {
      question: 'What are current home prices in Aliante?',
      answer:
        'I will not quote a stale median in this answer. Confirm live prices on the MLS widgets and the <a href="/market-report" class="text-blue-600 hover:underline font-semibold">Aliante market report</a>. Villages range from open-access homes in <a href="/neighborhoods/paseos" class="text-blue-600 hover:underline font-semibold">The Paseos</a> to gated lots in <a href="/neighborhoods/prominence" class="text-blue-600 hover:underline font-semibold">The Prominence</a>.',
    },
    {
      question: 'Does working with Dr. Jan Duffy cost me anything as a buyer?',
      answer:
        'Buyer representation is typically at no extra cost to you. On participating sales, the builder or seller pays the buyer-broker fee from its marketing budget. <a href="/contact" class="text-blue-600 hover:underline font-semibold">Contact me</a> before you tour so representation is documented.',
    },
    {
      question: 'What is Dr. Jan Duffy’s focus in Aliante real estate?',
      answer:
        'I have specialized in Aliante and North Las Vegas 89084 since 2018 with Berkshire Hathaway HomeServices Nevada Properties (license S.0197614.LLC). I represent buyers and sellers on Club Aliante, gated villages, Sun City Aliante, and Tule Springs new construction. Read more <a href="/about" class="text-blue-600 hover:underline font-semibold">about my work</a>.',
    },
  ];

  return <FAQSection title="Frequently Asked Questions About Aliante Real Estate" faqs={faqs} />;
}
