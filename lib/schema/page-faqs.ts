import { siteConfig } from '../site-config';
import type { FaqItem } from './types';

const phone = siteConfig.phone;
const nap = `${siteConfig.address.streetAddress}, ${siteConfig.address.addressLocality}, ${siteConfig.address.addressRegion} ${siteConfig.address.postalCode}`;

export const homeFaqs: FaqItem[] = [
  {
    question: 'What neighborhoods are in Aliante, North Las Vegas?',
    answer:
      'Aliante includes The Prominence, Desert Willows, Club Aliante, The Paseos, Villages at Tule Springs, and Sun City Aliante 55+. Each has distinct amenities, price bands, and home styles. Dr. Jan Duffy helps buyers compare them using live MLS data.',
  },
  {
    question: 'How much do new construction homes in Aliante cost?',
    answer:
      'New construction in Aliante ranges from townhomes in the mid-$300,000s to luxury estates above $1 million. Most Lennar and D.R. Horton single-family plans typically list between the mid-$400,000s and mid-$600,000s. Builder incentives and lot premiums change weekly — call for current offers.',
  },
  {
    question: 'What is Sun City Aliante and who can live there?',
    answer:
      'Sun City Aliante is a Del Webb 55+ active-adult community. At least one resident must be 55 or older. Amenities include golf, fitness, pools, clubs, and low-maintenance floor plans. Homes typically range from the high-$300,000s to the mid-$600,000s.',
  },
  {
    question: 'Are there gated communities in Aliante?',
    answer:
      'Yes. Aliante has multiple gated neighborhoods with controlled access and private amenities. The Prominence is the luxury gated enclave; Club Aliante offers gated golf-course living. Browse gated listings on the gated-communities page or call for a private tour.',
  },
  {
    question: 'How often are MLS listings updated on this site?',
    answer:
      'Aliante MLS listings refresh about every 15 minutes through RealScout. New and price-changed homes appear on Homes for Sale and Search shortly after they hit the Las Vegas MLS.',
  },
  {
    question: 'Does working with Dr. Jan Duffy cost the buyer anything?',
    answer:
      'Buyer representation is paid by the seller or builder in a typical Aliante transaction. You get negotiation, inspections guidance, and builder advocacy at no extra line-item cost. Call 702-707-7273 to start a search.',
  },
];

export const aboutFaqs: FaqItem[] = [
  {
    question: 'Who is Dr. Jan Duffy?',
    answer: `Dr. Jan Duffy is a licensed Nevada real estate professional (${siteConfig.agentLicense}) with ${siteConfig.brokerage}, focused on Aliante and North Las Vegas ${siteConfig.zipCode} since ${siteConfig.foundedYear}.`,
  },
  {
    question: 'What areas does this office serve?',
    answer:
      'The office serves Aliante and North Las Vegas, including The Prominence, Desert Willows, Club Aliante, The Paseos, Villages at Tule Springs, Sun City Aliante, and nearby new-construction communities.',
  },
  {
    question: 'Why work with a hyperlocal Aliante agent?',
    answer:
      'A hyperlocal agent tracks builder incentives, HOA rules, lot premiums, and 89084 inventory in real time. That context helps buyers negotiate and helps sellers price against true neighborhood comps — not valley-wide averages.',
  },
];

export const contactFaqs: FaqItem[] = [
  {
    question: 'How do I contact Dr. Jan Duffy?',
    answer: `Call ${phone}, email ${siteConfig.email}, or visit ${nap}. Hours: ${siteConfig.hours.weekday}; ${siteConfig.hours.weekend}.`,
  },
  {
    question: 'Is buyer representation free?',
    answer:
      "Yes. In a standard Aliante purchase, the seller or builder pays the buyer's agent commission. You still receive full advocacy, contract review, and negotiation.",
  },
  {
    question: 'How quickly will I get a response?',
    answer: `Calls and messages are returned the same day whenever possible. For a listing that just hit MLS, ${phone} is the fastest path.`,
  },
];

export const newConstructionFaqs: FaqItem[] = [
  {
    question: "Do I need a buyer's agent for new construction in Aliante?",
    answer:
      "Yes. The on-site sales agent represents the builder. An independent buyer's agent costs you nothing in a typical builder deal and can negotiate upgrades, incentives, and inspection rights.",
  },
  {
    question: 'How long does Aliante new construction take?',
    answer:
      'To-be-built homes typically take 4–8 months from contract to closing. Quick move-in inventory can close in 30–60 days depending on the builder and lot.',
  },
  {
    question: 'What builder incentives are available right now?',
    answer:
      'Aliante builders commonly offer closing-cost credits, rate buydowns, and design-center upgrades. Amounts change by community and month. Check the incentives tracker or call for today’s numbers.',
  },
  {
    question: 'Can you negotiate with Lennar, D.R. Horton, or other builders?',
    answer:
      'Base prices are often firm, but lot premiums, options, closing dates, and incentive packages are negotiable. Dr. Jan Duffy represents buyers with every major Aliante builder.',
  },
  {
    question: 'Should I inspect a brand-new home?',
    answer:
      'Yes. Pre-drywall and pre-closing inspections catch issues while the builder still has crews on site. New does not mean defect-free.',
  },
];

export const listingsFaqs: FaqItem[] = homeFaqs;

export const searchFaqs: FaqItem[] = [
  {
    question: 'How do I search Aliante homes by price or beds?',
    answer:
      'Use the Search page filters for price, bedrooms, bathrooms, and property type. Results pull from live MLS via RealScout and refresh about every 15 minutes.',
  },
  {
    question: 'Can I save an Aliante search and get alerts?',
    answer:
      'Yes. Create a RealScout alert from the search widget to get new 89084 matches as they list. Dr. Jan Duffy can also set a custom saved search for you.',
  },
  {
    question: 'Does search include new construction and resale?',
    answer:
      'MLS search includes resale, builder inventory that is listed, and many quick move-in homes. Some to-be-built lots are only on builder worksheets — ask for those off-MLS options.',
  },
];

export const neighborhoodHubFaqs: FaqItem[] = [
  {
    question: 'Which Aliante neighborhood should I start with?',
    answer:
      'Match the neighborhood to the home style you want: The Prominence for luxury gated estates, Club Aliante for golf, Desert Willows and The Paseos for a wide mix of floor plans, Tule Springs for new construction, and Sun City Aliante for 55+ living.',
  },
  {
    question: 'Do Aliante neighborhoods have HOAs?',
    answer:
      'Most Aliante villages are master-planned with HOA dues covering common areas, gates, or recreation. Dues vary by village. Ask for the current HOA packet before you write an offer.',
  },
  {
    question: 'Can I compare Aliante neighborhoods side by side?',
    answer:
      'Yes. Use the neighborhood compare page for amenities and housing mix, then tour with Dr. Jan Duffy to see lot sizes, noise, and commute times in person.',
  },
];

export function neighborhoodFaqs(name: string): FaqItem[] {
  return [
    {
      question: `Are there homes for sale in ${name} right now?`,
      answer: `Yes. ${name} listings appear on this site from the Las Vegas MLS and refresh about every 15 minutes. Call ${phone} for a private showing or off-market options.`,
    },
    {
      question: `What types of homes are in ${name}?`,
      answer: `${name} is part of the Aliante master plan in North Las Vegas ${siteConfig.zipCode}. Inventory typically includes single-family homes; some villages also have gated entries, golf-course lots, or 55+ age-qualified plans. Review current MLS photos for the exact mix.`,
    },
    {
      question: `Who can help me buy or sell in ${name}?`,
      answer: `Dr. Jan Duffy (${siteConfig.agentLicense}) with ${siteConfig.brokerage} has specialized in Aliante since ${siteConfig.foundedYear}. Office: ${nap}. Call ${phone}.`,
    },
  ];
}

export const compareFaqs: FaqItem[] = [
  {
    question: 'How should I compare Aliante neighborhoods?',
    answer:
      'Compare lot size, HOA dues, gate access, golf proximity, 55+ rules, commute to the I-215, and current list prices. The compare table on this page is a starting point; a tour confirms noise, views, and finish levels.',
  },
  {
    question: 'Is a gated neighborhood always more expensive?',
    answer:
      'Gated villages often list higher because of amenities and lot premiums, but resale condition and square footage still drive price. Review comps in The Prominence versus nearby ungated streets before you decide.',
  },
];

export const builderHubFaqs: FaqItem[] = [
  {
    question: 'Which builders are active in Aliante?',
    answer:
      'Active and recent Aliante-area builders include Lennar, D.R. Horton, Tri Pointe Homes, Del Webb, Toll Brothers, and Richmond American Homes. Communities open and close — confirm current phases before you tour.',
  },
  {
    question: 'Should I go to the builder model without an agent?',
    answer:
      'Register with your agent first. Once you are logged as Dr. Jan Duffy’s client, the builder still pays the commission in a typical deal and you keep independent representation.',
  },
];

export function builderFaqs(name: string): FaqItem[] {
  return [
    {
      question: `Does ${name} build in Aliante or North Las Vegas ${siteConfig.zipCode}?`,
      answer: `${name} has built or currently builds in the Aliante / Tule Springs corridor. Inventory, phases, and incentives change. Call ${phone} for the current worksheet.`,
    },
    {
      question: `Can Dr. Jan Duffy represent me with ${name}?`,
      answer: `Yes. Independent buyer representation is available with ${name} at no extra cost to you in a typical builder contract. That includes incentive review, option credits, and inspection timing.`,
    },
    {
      question: `What incentives does ${name} offer?`,
      answer: `Credits, rate buydowns, and design-center dollars vary by community and month. See the builder incentives tracker or ask for today’s ${name} sheet.`,
    },
  ];
}

export const incentivesFaqs: FaqItem[] = [
  {
    question: 'How much can I save with Aliante builder incentives?',
    answer:
      'Recent Aliante builder packages have included closing-cost credits and rate buydowns that often total five figures. Exact numbers depend on the lender, plan, and closing date.',
  },
  {
    question: 'Do incentives stack with a buyer’s agent?',
    answer:
      'In a typical builder deal, advertised incentives stay available when you are represented. Confirm in writing on the builder addendum.',
  },
];

export const gatedFaqs: FaqItem[] = [
  {
    question: 'Which Aliante communities are gated?',
    answer:
      'The Prominence is the primary luxury gated village. Club Aliante and other pockets also use controlled access. Ask which streets are gated before you write an offer — not every Aliante address is.',
  },
  {
    question: 'Do gated communities have higher HOA dues?',
    answer:
      'Gates, private roads, and shared amenities usually mean higher dues. Review the HOA budget for gate staffing, reserves, and rental caps.',
  },
];

export const golfFaqs: FaqItem[] = [
  {
    question: 'Where are golf-course homes in Aliante?',
    answer:
      'Golf-oriented streets cluster around Club Aliante and Aliante Golf Club. Fairway, lake, and mountain-view lots carry premiums. Confirm golf membership rules separately from HOA dues.',
  },
  {
    question: 'Do I need a golf membership to live on the course?',
    answer:
      'Living on a fairway lot does not always include a membership. Ask for the current Club Aliante / Aliante Golf Club fee sheet when you tour.',
  },
];

export const sunCityFaqs: FaqItem[] = [
  {
    question: 'Is Sun City Aliante a 55+ community?',
    answer:
      'Yes. Sun City Aliante is a Del Webb active-adult community. At least one occupant must be 55 or older, and occupancy rules apply to younger residents. Review the age-occupancy covenant before offering.',
  },
  {
    question: 'What amenities does Sun City Aliante include?',
    answer:
      'Typical amenities include golf access, fitness, pools, clubs, and low-maintenance homes. Confirm what the current HOA covers versus golf membership.',
  },
];

export const marketFaqs: FaqItem[] = [
  {
    question: 'Where does Aliante market data come from?',
    answer:
      'Pricing, inventory, and days-on-market figures on this site come from MLS-connected RealScout widgets and refresh about every 15 minutes. Treat widget numbers as live; narrative copy is a guide, not a CMA.',
  },
  {
    question: 'How fast are Aliante homes selling?',
    answer:
      'Well-priced 89084 homes can go pending in days, not months. Exact DOM shows on each MLS card. A CMA from Dr. Jan Duffy uses sold comps, not list averages.',
  },
];

export const buyerFaqs: FaqItem[] = [
  {
    question: 'What is the first step to buying in Aliante?',
    answer:
      'Get a pre-approval, then search live MLS and tour the villages that match your budget and commute. Dr. Jan Duffy coordinates showings, builder visits, and offer strategy.',
  },
  {
    question: 'How long does an Aliante purchase take?',
    answer:
      'Resale contracts often close in 30–45 days with conventional financing. New construction follows the builder’s completion schedule.',
  },
];

export const sellerFaqs: FaqItem[] = [
  {
    question: 'How do I price my Aliante home?',
    answer:
      'Use a comparative market analysis of recent 89084 solds, not Zillow estimates. Dr. Jan Duffy prepares a CMA with neighborhood comps, HOA, and condition adjustments.',
  },
  {
    question: 'What should I do before listing?',
    answer:
      'Complete safety repairs, declutter, and review HOA documents. Staging and professional photos typically shorten days on market in Aliante’s visual MLS environment.',
  },
];

export const valuationFaqs: FaqItem[] = [
  {
    question: 'Is the online valuation a formal appraisal?',
    answer:
      'No. The form request produces a broker CMA based on Aliante comps. Lenders still require a licensed appraisal for most loans.',
  },
  {
    question: 'How fast can I get a CMA?',
    answer: `Submit the valuation form or call ${phone}. Most Aliante CMAs are turned around the same business day.`,
  },
];

export const mortgageFaqs: FaqItem[] = [
  {
    question: 'Does this calculator lock an interest rate?',
    answer:
      'No. The calculator estimates principal and interest from the inputs you enter. Rate locks come from a licensed lender. Ask for current Aliante lender quotes.',
  },
  {
    question: 'Should I include HOA dues in my budget?',
    answer:
      'Yes. Aliante villages almost always have HOA dues, and some lots have a second sub-association. Add dues, taxes, and insurance on top of PITI.',
  },
];

export const investmentFaqs: FaqItem[] = [
  {
    question: 'Does Aliante allow rentals?',
    answer:
      'Many villages allow rentals subject to HOA minimum-lease rules. Confirm rental caps and short-term-rental bans in the CC&Rs before you underwrite a deal.',
  },
  {
    question: 'Can I get help running rental numbers?',
    answer:
      'Yes. Dr. Jan Duffy can pull sold comps, HOA fees, and typical lease ranges for 89084 so you can model cap rate and cash flow. That is not tax or investment advice.',
  },
];

export const schoolsFaqs: FaqItem[] = [
  {
    question: 'Which schools serve Aliante addresses?',
    answer:
      'Elementary options often include Leavitt, Kit Carson, and Homer. Secondary options often include Brinley Middle School and Centennial or Legacy High School. Boundaries change — verify with Clark County School District for a specific parcel.',
  },
  {
    question: 'Can you confirm school boundaries for a listing?',
    answer:
      'Yes. Before you offer, Dr. Jan Duffy will help you check CCSD boundary maps for that address rather than relying on a listing remark.',
  },
];

export const legalFaqs: FaqItem[] = [
  {
    question: 'Who operates this website?',
    answer: `${siteConfig.siteName}. Licensed agent ${siteConfig.agentName}, ${siteConfig.agentLicense}, ${siteConfig.brokerage}. ${nap}. ${phone}.`,
  },
];
