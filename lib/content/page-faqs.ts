import { builderGuides } from './builder-guides';
import { type GuideFaq, neighborhoodGuides } from './neighborhood-guides';

export const pageFaqs: Record<string, GuideFaq[]> = {
  '/neighborhoods': [
    {
      question: 'Which Aliante villages are gated?',
      answer:
        '<a href="/neighborhoods/prominence" class="text-blue-600 hover:underline font-semibold">The Prominence</a> and <a href="/neighborhoods/club-aliante" class="text-blue-600 hover:underline font-semibold">Club Aliante</a> use controlled entry. Desert Willows and The Paseos are open-access. Confirm live MLS before you tour.',
    },
    {
      question: 'Is Sun City Aliante inside the Aliante master plan?',
      answer:
        'Yes. <a href="/sun-city-aliante" class="text-blue-600 hover:underline font-semibold">Sun City Aliante</a> is Del Webb 55+ in ZIP 89084 — not Ardiente (89081). At least one resident must be 55 or older.',
    },
    {
      question: 'How do I compare villages?',
      answer:
        'Use the <a href="/neighborhoods/compare" class="text-blue-600 hover:underline font-semibold">comparison page</a> for gate, golf, 55+, and parks. I tour two villages on live listings — I do not rank a “best” neighborhood. Call (702) 707-7273.',
    },
  ],
  '/builders': [
    {
      question: 'Which builders are inside Aliante 89084?',
      answer:
        '<a href="/builders/lennar" class="text-blue-600 hover:underline font-semibold">Lennar</a> and <a href="/builders/del-webb" class="text-blue-600 hover:underline font-semibold">Del Webb</a> are the 89084 desks I start with. <a href="/builders/dr-horton" class="text-blue-600 hover:underline font-semibold">D.R. Horton</a> is the Tule Springs comparison. Toll, Richmond, and Tri Pointe are not inside Aliante.',
    },
    {
      question: 'Do I pay extra to use a buyer’s agent at a builder?',
      answer:
        'On participating builder sales the cooperating commission typically comes from the builder’s marketing budget. Confirm the fee in writing before you tour. Call (702) 707-7273.',
    },
    {
      question: 'Where do I see current incentives?',
      answer:
        'Incentives change by community and week. See <a href="/builders/incentives" class="text-blue-600 hover:underline font-semibold">builder incentives</a>. I confirm the live sheet — I will not publish a stale dollar amount.',
    },
  ],
  '/builders/incentives': [
    {
      question: 'Why don’t you list today’s incentive dollar amounts?',
      answer:
        'Builder credits, rate buydowns, and upgrades change with inventory and corporate directives. A number on this page would be stale. I confirm the live sheet for the community you will tour. Call (702) 707-7273.',
    },
    {
      question: 'Do I have to use the builder’s lender?',
      answer:
        'Preferred lenders are optional on most contracts I review. Compare at least two written quotes. Using the preferred lender can be required to keep a specific credit — I read that clause with you.',
    },
    {
      question: 'Which builders still have credits near Aliante?',
      answer:
        'Lennar, D.R. Horton, and Del Webb all run promotions that change. Confirm today’s sheet. Register me before the first model tour so representation is on the file.',
    },
  ],
  '/builders/tri-pointe': [
    {
      question: 'Is Tri Pointe building inside Aliante 89084?',
      answer:
        'Current Tri Pointe collections shoppers ask about are northwest Las Vegas (Kyle Pointe, Citrine), not inside Aliante. Confirm the live map. Call (702) 707-7273.',
    },
  ],
  '/gated-communities': [
    {
      question: 'Which Aliante villages are gated?',
      answer:
        'Club Aliante and The Prominence are the gated villages most buyers tour. Courts at Aliante and Terrasini are additional controlled-access products inside the master plan. Confirm live MLS — I will not publish a stale count.',
    },
    {
      question: 'Does a gate change HOA dues?',
      answer:
        'Gated villages often carry a village association on top of the Aliante master HOA. Confirm the current stack in the resale documents for that address. Call (702) 707-7273.',
    },
    {
      question: 'Is Sun City Aliante gated?',
      answer:
        'Sun City Aliante is a Del Webb 55+ village with its own access and amenity rules. Confirm entry procedures for the address you will tour. See <a href="/sun-city-aliante" class="text-blue-600 hover:underline font-semibold">Sun City Aliante</a>.',
    },
  ],
  '/golf-homes': [
    {
      question: 'Is golf membership included when I buy a fairway lot?',
      answer:
        'No. Aliante Golf Club is a city-owned public course. Membership and tee-time rules are separate from the deed. Confirm current club policies. Village details: <a href="/neighborhoods/club-aliante" class="text-blue-600 hover:underline font-semibold">Club Aliante</a>.',
    },
    {
      question: 'Do fairway lots always sell for more?',
      answer:
        'Not always. Lot position, errant-ball exposure, and a smaller buyer pool can lengthen days on market. I confirm live comps for that lot — I will not publish a golf premium.',
    },
    {
      question: 'Fairway, green, or interior street — what is the difference?',
      answer:
        'Fairway lots see play and errant balls. Green-adjacent lots see more foot traffic on some holes. Interior Club Aliante streets are a different product. I map the lot before you tour. Call (702) 707-7273.',
    },
  ],
  '/sun-city-aliante': [
    {
      question: 'What are the occupancy rules at Sun City Aliante?',
      answer:
        'Sun City Aliante is Del Webb 55+ under HOPA. At least one resident must be 55 or older. Confirm current occupancy rules in the community documents. This is not Ardiente (ZIP 89081).',
    },
    {
      question: 'Is this new construction or resale?',
      answer:
        'Both exist. Del Webb may still sell new homes; resale inventory is on MLS. For the builder contract see <a href="/builders/del-webb" class="text-blue-600 hover:underline font-semibold">Del Webb buyer agency</a>. Confirm live inventory.',
    },
    {
      question: 'Is Sun City Aliante the same as Del Webb Summerlin?',
      answer:
        'No. This village is inside Aliante ZIP 89084. Del Webb Summerlin and Mesquite are different communities.',
    },
  ],
  '/schools': [
    {
      question: 'Which campuses serve Aliante 89084?',
      answer:
        'I name the campus that currently serves an address. Boundaries change. Confirm with Clark County School District before you offer. I do not rank campuses or use them as a housing preference.',
    },
    {
      question: 'Can you guarantee a school assignment?',
      answer:
        'No. Attendance zones change. Confirm with CCSD for the specific address and school year. Call (702) 707-7273 and I will help you match the listing to the current boundary map.',
    },
  ],
  '/market-report': [
    {
      question: 'Why don’t you publish a median sale price here?',
      answer:
        'A median on this page would be stale by the next closing. Use the live MLS widgets on this page and <a href="/homes-for-sale" class="text-blue-600 hover:underline font-semibold">homes for sale</a>. Call (702) 707-7273 for a village-level read.',
    },
    {
      question: 'Is this the whole Las Vegas valley?',
      answer:
        'No. This report is Aliante / North Las Vegas 89084. Valley-wide averages do not price Club Aliante or Sun City Aliante lots.',
    },
  ],
  '/home-valuation': [
    {
      question: 'Is this an automated value?',
      answer:
        'No. I prepare a comparative market analysis from Aliante village comps — not a valley AVM. Call (702) 707-7273 or submit the form on this page.',
    },
    {
      question: 'Do you charge for a CMA?',
      answer:
        'A listing CMA is part of seller representation. Confirm the listing agreement in writing. I do not quote a number from this FAQ.',
    },
  ],
  '/buyer-guide': [
    {
      question: 'What does buyer representation cost in Aliante?',
      answer:
        'On participating sales the cooperating commission typically comes from the seller or builder marketing budget. Confirm the fee in writing before you tour. Call (702) 707-7273.',
    },
    {
      question: 'Can you represent me at a new-construction desk?',
      answer:
        'Yes. Register me before the first model tour at Lennar, D.R. Horton, or Del Webb. See <a href="/new-construction" class="text-blue-600 hover:underline font-semibold">new-construction buyer agency</a>.',
    },
  ],
  '/seller-checklist': [
    {
      question: 'How do you price an Aliante listing?',
      answer:
        'Village comps — Prominence, Paseos, Club Aliante, Sun City — not a valley average. I will not quote a list price in this FAQ. Call (702) 707-7273 for a CMA.',
    },
    {
      question: 'Do I need HOA documents before listing?',
      answer:
        'Yes. Resale packages, CC&Rs, and HOA demand letters are part of an Aliante listing. I order and review them with you before we go live on MLS.',
    },
  ],
  '/search': [
    {
      question: 'How often does this search update?',
      answer:
        'MLS data on this site refreshes about every 15 minutes. Inventory changes daily. Call (702) 707-7273 for an address that just hit the market.',
    },
    {
      question: 'Can you save a search for me?',
      answer:
        'Yes. Use the RealScout tools on this page or <a href="/contact" class="text-blue-600 hover:underline font-semibold">contact me</a> and I will set alerts for the villages you actually want.',
    },
  ],
  '/mortgage-calculator': [
    {
      question: 'Does this include taxes, insurance, and HOA?',
      answer:
        'The estimator is principal and interest from the rate your lender quoted. Confirm property tax, insurance, and HOA separately. I am not a lender.',
    },
    {
      question: 'Can you get me a loan?',
      answer:
        'No. I am a realtor. I can introduce licensed lenders. Compare at least two written quotes. Call (702) 707-7273.',
    },
  ],
  '/investment-analysis': [
    {
      question: 'Do you manage rentals in Aliante?',
      answer:
        'No. I sell the property. HOA and rental management is a different company. See <a href="/property-management" class="text-blue-600 hover:underline font-semibold">property management</a> for who sits in Suite 100.',
    },
    {
      question: 'Will you project a cap rate?',
      answer:
        'I review buy-and-hold math from numbers you and your CPA provide. I will not publish a guaranteed return. Call (702) 707-7273.',
    },
  ],
  '/new-construction': [
    {
      question: 'Which builders are in Aliante versus nearby?',
      answer:
        'Lennar and Del Webb are the 89084 desks. D.R. Horton is Tule Springs. Toll, Richmond, and Tri Pointe are not inside Aliante. Confirm live inventory.',
    },
  ],
};

for (const [slug, guide] of Object.entries(neighborhoodGuides)) {
  const path =
    slug === 'tule-springs' || slug === 'compare' || slug === 'club-aliante'
      ? `/neighborhoods/${slug}`
      : `/neighborhoods/${slug}`;
  pageFaqs[path] = guide.faqs;
}

for (const [slug, guide] of Object.entries(builderGuides)) {
  pageFaqs[`/builders/${slug}`] = guide.faqs;
}
