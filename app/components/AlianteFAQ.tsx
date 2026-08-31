'use client';

import FAQSection from './FAQSection';

export default function AlianteFAQ() {
  const faqs = [
    {
      question: 'What are the best neighborhoods in Aliante for families?',
      answer:
        'Desert Willows and The Paseos are ideal for families, offering excellent schools rated 8-9 out of 10, community parks, swimming pools, and family-friendly amenities. Homes range from $300,000 to $700,000. <a href="/neighborhoods/desert-willows" class="text-blue-600 hover:underline font-semibold">Desert Willows</a> features spacious lots and top-rated schools, while <a href="/neighborhoods/paseos" class="text-blue-600 hover:underline font-semibold">The Paseos</a> offers affordable pricing perfect for first-time buyers. Both neighborhoods have low crime rates, walkable designs, and strong community involvement.',
    },
    {
      question: 'How much are new construction homes in Aliante?',
      answer:
        'New construction homes in Aliante range from $350,000 for townhomes to over $1.6 million for luxury estates. Most single-family homes from <a href="/builders/lennar" class="text-blue-600 hover:underline font-semibold">Lennar</a> and <a href="/builders/dr-horton" class="text-blue-600 hover:underline font-semibold">D.R. Horton</a> are priced between $450,000-$650,000. Current builder incentives offer up to $25,000 in closing costs and free upgrades. Check our <a href="/builders/incentives" class="text-blue-600 hover:underline font-semibold">Builder Incentives Tracker</a> for the latest offers.',
    },
    {
      question: 'What is Sun City Aliante and who can live there?',
      answer:
        '<a href="/sun-city-aliante" class="text-blue-600 hover:underline font-semibold">Sun City Aliante</a> is an active adult 55+ community built by <a href="/builders/del-webb" class="text-blue-600 hover:underline font-semibold">Del Webb</a>. At least one resident must be 55 or older. The community offers resort-style amenities including golf courses, fitness centers, swimming pools, social clubs, and over 100 activity groups. Homes range from $380,000 to $650,000 with low-maintenance living and world-class amenities included.',
    },
    {
      question: 'Are there gated communities in Aliante?',
      answer:
        'Yes! Aliante has 86+ properties in <a href="/gated-communities" class="text-blue-600 hover:underline font-semibold">gated communities</a> offering 24/7 security, private amenities, and premium living. <a href="/neighborhoods/prominence" class="text-blue-600 hover:underline font-semibold">The Prominence</a> is the area\'s most exclusive gated community ($600K-$1.2M+), while <a href="/neighborhoods/club-aliante" class="text-blue-600 hover:underline font-semibold">Club Aliante</a> offers golf course gated living ($500K-$900K). Gated communities provide enhanced security, higher property values, and resort-style amenities.',
    },
    {
      question: 'How often are MLS listings updated on your site?',
      answer:
        'Our <a href="/homes-for-sale" class="text-blue-600 hover:underline font-semibold">MLS listings</a> are updated every 15 minutes directly from the Las Vegas MLS database. This ensures you see new properties immediately when they hit the market, giving you a competitive advantage in Aliante\'s fast-moving real estate market. We currently have 286+ active listings available. Use our <a href="/search" class="text-blue-600 hover:underline font-semibold">advanced search</a> to find your perfect home.',
    },
    {
      question: 'What are current home prices in Aliante?',
      answer:
        'The median home price in Aliante is $450,000. Prices range from $300,000 for starter homes in <a href="/neighborhoods/paseos" class="text-blue-600 hover:underline font-semibold">The Paseos</a> to over $1.2 million for luxury estates in <a href="/neighborhoods/prominence" class="text-blue-600 hover:underline font-semibold">The Prominence</a>. Most homes sell within 3-7 days on market. View our <a href="/market-report" class="text-blue-600 hover:underline font-semibold">live market report</a> for current pricing trends and inventory levels.',
    },
    {
      question: 'Does working with Dr. Jan Duffy cost me anything?',
      answer:
        'No! Buyer representation is completely free to you. Builders and sellers pay the buyer\'s agent commission from their marketing budget. By working with me, you get professional advocacy, expert negotiation, insider knowledge, and access to exclusive incentives at no cost. In fact, buyers who go directly to builders often end up paying the same price but without professional representation. <a href="/contact" class="text-blue-600 hover:underline font-semibold">Contact me today</a> to discuss your home search.',
    },
    {
      question: 'What makes Dr. Jan Duffy an expert in Aliante real estate?',
      answer:
        'I\'ve specialized in Aliante real estate since 2018, completing 500+ successful transactions with a 4.9/5 client satisfaction rating from 127 verified reviews. I maintain direct relationships with every major builder in the area, including being D.R. Horton\'s #1 Premiere Agent. My local expertise, builder connections, and proven track record help clients save thousands while avoiding common mistakes. Read more <a href="/about" class="text-blue-600 hover:underline font-semibold">about my experience</a>.',
    },
  ];

  return <FAQSection title="Frequently Asked Questions About Aliante Real Estate" faqs={faqs} />;
}
