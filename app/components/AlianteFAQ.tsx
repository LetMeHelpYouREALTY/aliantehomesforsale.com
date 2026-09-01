'use client';

import { siteConfig } from '../../lib/site-config';
import FAQSection from './FAQSection';

const linkClass = 'text-blue-600 hover:underline font-semibold';

export default function AlianteFAQ() {
  const faqs = [
    {
      question: 'Which Aliante neighborhoods can I tour in ZIP 89084?',
      answer: `<a href="/neighborhoods/desert-willows" class="${linkClass}">Desert Willows</a> and <a href="/neighborhoods/paseos" class="${linkClass}">The Paseos</a> are open-access villages with parks and community pools. <a href="/neighborhoods/prominence" class="${linkClass}">The Prominence</a> and <a href="/neighborhoods/club-aliante" class="${linkClass}">Club Aliante</a> are gated. <a href="/sun-city-aliante" class="${linkClass}">Sun City Aliante</a> is Del Webb 55+ inside 89084. Confirm live MLS prices before you offer.`,
    },
    {
      question: 'How do I confirm new-construction prices near Aliante?',
      answer: `Confirm live inventory and incentive sheets with <a href="/builders/lennar" class="${linkClass}">Lennar</a> and <a href="/builders/del-webb" class="${linkClass}">Del Webb</a> in ZIP 89084, and <a href="/builders/dr-horton" class="${linkClass}">D.R. Horton</a> at Tule Springs. I will not publish a stale dollar amount. Check the <a href="/builders/incentives" class="${linkClass}">Builder Incentives</a> page or call ${siteConfig.phone}.`,
    },
    {
      question: 'What is Sun City Aliante and who can live there?',
      answer: `<a href="/sun-city-aliante" class="${linkClass}">Sun City Aliante</a> is a Del Webb 55+ community inside ZIP 89084 — not Ardiente (89081). At least one resident must be 55 or older. Amenities include fitness, pools, clubs, and nearby <a href="/golf-homes" class="${linkClass}">Aliante Golf Club</a>. Confirm live MLS before you offer.`,
    },
    {
      question: 'Are there gated communities in Aliante?',
      answer: `Yes. Gated villages inside the Aliante master plan include <a href="/neighborhoods/prominence" class="${linkClass}">The Prominence</a> and <a href="/neighborhoods/club-aliante" class="${linkClass}">Club Aliante</a>. Browse <a href="/gated-communities" class="${linkClass}">gated communities</a> and confirm live MLS listings rather than a stale count.`,
    },
    {
      question: 'How often are MLS listings updated on this site?',
      answer: `<a href="/homes-for-sale" class="${linkClass}">MLS listings</a> refresh about every 15 minutes from the Las Vegas MLS feed. Inventory changes daily — use <a href="/search" class="${linkClass}">advanced search</a> or call ${siteConfig.phone} for current addresses.`,
    },
    {
      question: 'What are current home prices in Aliante?',
      answer: `I will not quote a stale median in this answer. Confirm live prices on the MLS widgets and the <a href="/market-report" class="${linkClass}">Aliante market report</a>. Villages range from open-access homes in <a href="/neighborhoods/paseos" class="${linkClass}">The Paseos</a> to gated lots in <a href="/neighborhoods/prominence" class="${linkClass}">The Prominence</a>.`,
    },
    {
      question: 'Does working with Dr. Jan Duffy cost me anything as a buyer?',
      answer: `Buyer representation is typically at no extra cost to you on participating sales — the seller or builder pays the cooperating fee from its marketing budget. Confirm the fee arrangement in writing before you tour. <a href="/contact" class="${linkClass}">Contact me</a> so representation is documented.`,
    },
    {
      question: 'What is Dr. Jan Duffy’s focus in Aliante real estate?',
      answer: `I have specialized in Aliante and North Las Vegas 89084 since 2018 with <a href="${siteConfig.official.brokerage}" target="_blank" rel="noopener noreferrer" class="${linkClass}">${siteConfig.brokerage}</a> (license <a href="${siteConfig.official.nredLicenseLookup}" target="_blank" rel="noopener noreferrer" class="${linkClass}">${siteConfig.agentLicense}</a>). I represent buyers and sellers on Club Aliante, gated villages, Sun City Aliante, and Tule Springs new construction. Read more <a href="/about" class="${linkClass}">about my work</a>.`,
    },
  ];

  return <FAQSection title="Frequently Asked Questions About Aliante Real Estate" faqs={faqs} />;
}
