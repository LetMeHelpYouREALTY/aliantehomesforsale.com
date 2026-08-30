import { type SiteImage, siteImages } from './site-images';

export type UniquePageCopy = {
  h1: string;
  subtitle: string;
  heading: string;
  image: SiteImage;
  paragraphs: string[];
  links: { href: string; text: string }[];
};

/** Trusted catalog lookup. Catalog keys are required; this unwraps noUncheckedIndexedAccess. */
export function uniquePageCopy<T extends Record<string, UniquePageCopy>>(
  pages: T,
  slug: keyof T
): UniquePageCopy {
  const copy = pages[slug];
  if (!copy) {
    throw new Error(`Missing unique page copy for ${String(slug)}`);
  }
  return copy;
}

export const neighborhoodCopy = {
  prominence: {
    h1: 'The Prominence in Aliante: gated luxury homes in 89084',
    subtitle:
      'Guard-gated streets, larger lots, and golf-course views in North Las Vegas. Browse live MLS and tour with Dr. Jan Duffy.',
    heading: 'What to know before you buy in The Prominence',
    image: siteImages.prominence,
    paragraphs: [
      'The Prominence sits inside the Aliante master plan in North Las Vegas ZIP 89084. Streets are gated; lots and elevations typically run larger than adjacent villages. List prices often start in the mid-$600,000s and reach seven figures for expanded plans and view lots. Confirm current HOA dues, gate rules, and rental caps in the CC&Rs before you write an offer.',
      'Golf-course, mountain, and interior lots do not price the same. A CMA from Dr. Jan Duffy uses recent Prominence solds—not valley-wide averages—and notes lot premiums, pool additions, and elevation upgrades. Live MLS cards on this site refresh about every 15 minutes via RealScout.',
      'Independent buyer representation costs you nothing in a typical resale or builder deal. Call (702) 707-7273 to tour The Prominence, compare it with Club Aliante golf streets, or review HOA documents line by line.',
    ],
    links: [
      { href: '/gated-communities', text: 'Gated communities in Aliante' },
      { href: '/golf-homes', text: 'Golf-course homes near Club Aliante' },
      { href: '/homes-for-sale', text: 'Aliante MLS homes for sale' },
    ],
  },
  'desert-willows': {
    h1: 'Desert Willows Aliante homes for sale in North Las Vegas',
    subtitle:
      'Single- and two-story floor plans, parks, and community pools in 89084. Live MLS plus local comps from Dr. Jan Duffy.',
    heading: 'Buying or selling in Desert Willows',
    image: siteImages.desertWillows,
    paragraphs: [
      'Desert Willows is a residential village in Aliante with a mix of one- and two-story plans, pocket parks, and community recreation typical of the master plan. Inventory swings between resale and occasional new or recently built product. Price bands move with square footage, lot orientation, and upgrades—not a single “neighborhood average.”',
      'Before listing or offering, review HOA architectural rules for landscaping, paint, and additions. Dr. Jan Duffy (Nevada license S.0197614.LLC) prepares 89084 CMAs using Desert Willows solds and competing Aliante villages such as The Paseos.',
      'Search live MLS on this site, then call (702) 707-7273 for a private showing. Office: 2590 Nature Park Drive, Suite 275, North Las Vegas, NV 89084.',
    ],
    links: [
      { href: '/neighborhoods/paseos', text: 'The Paseos Aliante homes' },
      { href: '/home-valuation', text: 'Free Aliante home valuation' },
      { href: '/neighborhoods', text: 'All Aliante neighborhoods' },
    ],
  },
  'club-aliante': {
    h1: 'Club Aliante golf-course homes in North Las Vegas 89084',
    subtitle:
      'Fairway, lake, and interior lots near Aliante Golf Club and the Club Aliante clubhouse.',
    heading: 'Golf-course living versus interior Club Aliante streets',
    image: siteImages.clubAliante,
    paragraphs: [
      'Club Aliante clusters around the public Aliante Golf Club and clubhouse. Fairway and water-view lots usually list higher than interior streets. A golf membership is not automatic with a home purchase—ask for the current club fee sheet when you tour.',
      'Some Club Aliante pockets are gated; others are not. Confirm access, HOA, and any sub-association before you underwrite a budget. Live MLS on this page is the inventory source of truth, not a static count.',
      'Dr. Jan Duffy represents buyers and sellers on Club Aliante streets and nearby Prominence gated lots. Call (702) 707-7273 to compare lot premiums and recent solds.',
    ],
    links: [
      { href: '/golf-homes', text: 'Aliante golf-course homes' },
      { href: '/neighborhoods/prominence', text: 'The Prominence gated homes' },
      { href: '/contact', text: 'Get directions to the Aliante office' },
    ],
  },
  paseos: {
    h1: 'The Paseos Aliante: gated homes with resort-style amenities',
    subtitle:
      'Controlled-access living in Aliante 89084 with a range of home sizes. MLS listings update about every 15 minutes.',
    heading: 'HOA, gates, and resale in The Paseos',
    image: siteImages.paseos,
    paragraphs: [
      'The Paseos is a gated Aliante village with shared recreation typical of the master plan—pools, parks, and common-area maintenance funded by HOA dues. Home sizes span starter and move-up plans; list prices follow condition and lot more than a marketing slogan.',
      'Gate staffing, rental rules, and architectural standards live in the CC&Rs. Dr. Jan Duffy reviews those documents with you before earnest money goes hard. Compare The Paseos with Desert Willows if you want similar floor-plan variety without the same gate structure.',
      'Call (702) 707-7273 to tour. Berkshire Hathaway HomeServices Nevada Properties; license S.0197614.LLC.',
    ],
    links: [
      { href: '/gated-communities', text: 'Other gated Aliante communities' },
      { href: '/neighborhoods/desert-willows', text: 'Desert Willows homes for sale' },
      { href: '/buyer-guide', text: 'Aliante home buyer guide' },
    ],
  },
  'tule-springs': {
    h1: 'Villages at Tule Springs new construction near Aliante',
    subtitle:
      'Builder phases near Floyd Lamb Park and Tule Springs. Independent buyer representation with Lennar, D.R. Horton, and others.',
    heading: 'New construction in Tule Springs versus resale Aliante',
    image: siteImages.tuleSprings,
    paragraphs: [
      'Villages at Tule Springs is the new-construction corridor north and west of core Aliante, near Floyd Lamb Park. Builders open and close phases; incentives, lot premiums, and completion dates change by community. Register with Dr. Jan Duffy before you walk a model so the builder logs your agent.',
      'To-be-built homes follow the builder’s schedule (often several months). Quick move-in inventory can close faster when a spec is finished. Pre-drywall and pre-closing inspections still matter on new product.',
      'Compare Tule Springs new homes with Aliante resale in Desert Willows or The Paseos if you need a shorter close. Call (702) 707-7273 for current builder worksheets.',
    ],
    links: [
      { href: '/new-construction', text: 'Aliante new construction builders' },
      { href: '/builders/dr-horton', text: 'D.R. Horton homes in Tule Springs' },
      { href: '/builders/incentives', text: 'Builder incentives tracker' },
    ],
  },
  'sun-city': {
    h1: 'Sun City Aliante 55+ Del Webb homes in North Las Vegas',
    subtitle:
      'Age-qualified active-adult community with golf, clubs, and low-maintenance plans. At least one resident must be 55 or older.',
    heading: 'Age occupancy, HOA, and golf at Sun City Aliante',
    image: siteImages.sunCity,
    paragraphs: [
      'Sun City Aliante is a Del Webb 55+ community. Occupancy rules require at least one resident age 55 or older; younger occupants are limited by the covenant. Read the age-occupancy section before you offer—this is a legal restriction, not a marketing line.',
      'Amenities typically include golf access, fitness, pools, and clubs. Golf membership fees are often separate from HOA. Single-story plans are common; confirm roof, HVAC age, and HOA reserves on resales.',
      'Dr. Jan Duffy lists and represents buyers in Sun City Aliante. Call (702) 707-7273 or visit 2590 Nature Park Drive, Suite 275.',
    ],
    links: [
      { href: '/builders/del-webb', text: 'Del Webb Sun City Aliante builder page' },
      { href: '/golf-homes', text: 'Golf homes in Aliante' },
      { href: '/homes-for-sale', text: 'All Aliante MLS listings' },
    ],
  },
  compare: {
    h1: 'Compare Aliante neighborhoods side by side',
    subtitle:
      'Gates, golf, 55+ rules, HOA, and housing mix for Prominence, Desert Willows, Club Aliante, The Paseos, Tule Springs, and Sun City.',
    heading: 'How to use this comparison',
    image: siteImages.compare,
    paragraphs: [
      'Use the table on this page as a first pass, then tour. Noise, lot grade, and commute to I-215 do not show in a spreadsheet. HOA dues and rental caps belong in the resale package, not in a blog summary.',
      'Dr. Jan Duffy walks buyers through two or three villages in one appointment so you can compare finish levels in person. Call (702) 707-7273 to schedule.',
    ],
    links: [
      { href: '/neighborhoods/prominence', text: 'The Prominence' },
      { href: '/sun-city-aliante', text: 'Sun City Aliante 55+' },
      { href: '/neighborhoods/tule-springs', text: 'Villages at Tule Springs' },
    ],
  },
  hub: {
    h1: 'Aliante neighborhoods in North Las Vegas 89084',
    subtitle:
      'The Prominence, Desert Willows, Club Aliante, The Paseos, Tule Springs, and Sun City Aliante—with live MLS and local guidance.',
    heading: 'Pick a village, then verify with MLS and a tour',
    image: siteImages.neighborhoods,
    paragraphs: [
      'Aliante is a master-planned community in North Las Vegas. Villages differ by gate access, golf proximity, 55+ rules, and typical plan size. This hub links to a dedicated page for each so Google and shoppers get one URL per topic—not duplicate copy under many paths.',
      'Listings refresh about every 15 minutes. For a CMA or builder worksheet, call Dr. Jan Duffy at (702) 707-7273.',
    ],
    links: [
      { href: '/neighborhoods/compare', text: 'Compare Aliante neighborhoods' },
      { href: '/homes-for-sale', text: 'Aliante homes for sale' },
      { href: '/new-construction', text: 'New construction in Aliante' },
    ],
  },
  schools: {
    h1: 'Schools serving Aliante addresses (verify CCSD boundaries)',
    subtitle:
      'Named campuses mentioned for 89084 parcels: Leavitt, Kit Carson, Homer, Brinley, Centennial, and Legacy. Boundaries change—confirm with Clark County School District.',
    heading: 'How to confirm a listing’s attendance zone',
    image: siteImages.schools,
    paragraphs: [
      'Listing remarks are not official boundary maps. Before you offer, check Clark County School District tools for that parcel, or ask Dr. Jan Duffy to help you pull the current zone. New campuses and redistricting can move lines.',
      'This page names schools that commonly serve Aliante-area addresses. It does not rank districts or use school quality as a coded housing pitch. For the property search itself, start with live MLS.',
    ],
    links: [
      { href: '/homes-for-sale', text: 'Search Aliante homes for sale' },
      { href: '/neighborhoods', text: 'Aliante neighborhood guide' },
      { href: '/contact', text: 'Ask about a specific address' },
    ],
  },
};

export const builderCopy = {
  hub: {
    h1: 'New construction builders in Aliante and Tule Springs',
    subtitle:
      'Compare Lennar, D.R. Horton, Tri Pointe, Del Webb, Toll Brothers, and Richmond American with independent buyer representation.',
    heading: 'Register with your agent before you walk a model',
    image: siteImages.builders,
    paragraphs: [
      'On-site sales staff represent the builder. In a typical Aliante builder contract, the seller still pays the buyer’s agent. Register Dr. Jan Duffy first so you keep advocacy on incentives, lot premiums, and inspections.',
      'Phases open and close. Use this hub to open a builder page, then call (702) 707-7273 for the current worksheet—not a screenshot of last month’s flyer.',
    ],
    links: [
      { href: '/builders/lennar', text: 'Lennar homes in Aliante' },
      { href: '/builders/dr-horton', text: 'D.R. Horton in Tule Springs' },
      { href: '/builders/incentives', text: 'Builder incentives' },
    ],
  },
  lennar: {
    h1: 'Lennar homes in Aliante, North Las Vegas',
    subtitle:
      'Everything’s Included packages, smart-home features, and independent buyer representation at no extra cost to you in a typical deal.',
    heading: 'Working with Lennar without going in unrepresented',
    image: siteImages.lennar,
    paragraphs: [
      'Lennar is a high-volume builder in the Las Vegas valley with Everything’s Included marketing on many plans. Included features still vary by community—confirm the structural and design-center sheet for the phase you want. Lot premiums and completion dates are negotiable even when base price is firm.',
      'Dr. Jan Duffy attends design center and walk-throughs as your agent, not Lennar’s. Incentives (closing credits, buydowns) change by month. Call (702) 707-7273 before you register at the model.',
    ],
    links: [
      { href: '/new-construction', text: 'All Aliante new construction' },
      { href: '/builders/incentives', text: 'Current-style builder incentives' },
      { href: '/builders', text: 'Compare Aliante builders' },
    ],
  },
  'dr-horton': {
    h1: 'D.R. Horton homes in Tule Springs and Aliante',
    subtitle:
      'Independent buyer advocacy on D.R. Horton contracts, including quick move-in specs when available.',
    heading: 'D.R. Horton process with a buyer’s agent',
    image: siteImages.drHorton,
    paragraphs: [
      'D.R. Horton builds in the Tule Springs / North Las Vegas corridor serving Aliante shoppers. Spec (quick move-in) homes can close faster than to-be-built. Still schedule inspections; new is not a substitute for a punch list.',
      'Dr. Jan Duffy is a Premiere-level Horton partner in this market and represents you, not the builder. Call (702) 707-7273 to be registered on the Horton worksheet.',
    ],
    links: [
      { href: '/neighborhoods/tule-springs', text: 'Villages at Tule Springs guide' },
      { href: '/builders/lennar', text: 'Lennar Aliante homes' },
      { href: '/new-construction', text: 'New construction overview' },
    ],
  },
  'tri-pointe': {
    h1: 'Tri Pointe Homes in Aliante and North Las Vegas',
    subtitle:
      'Higher-spec new construction plans with independent negotiation on options and lots.',
    heading: 'Tri Pointe options, lots, and representation',
    image: siteImages.triPointe,
    paragraphs: [
      'Tri Pointe (including luxury-leaning collections) targets buyers who want more elevation and finish choice than entry-level specs. Base price, lot premium, and design-center dollars should be modeled together—not as three surprises at closing.',
      'Register with Dr. Jan Duffy first. Call (702) 707-7273 for the current Aliante-area Tri Pointe community list.',
    ],
    links: [
      { href: '/builders/toll-brothers', text: 'Toll Brothers luxury new construction' },
      { href: '/builders', text: 'All Aliante builders' },
      { href: '/contact', text: 'Contact Dr. Jan Duffy' },
    ],
  },
  'del-webb': {
    h1: 'Del Webb at Sun City Aliante (55+)',
    subtitle:
      'Age-qualified Del Webb plans and resales. Confirm occupancy covenants and golf versus HOA fees.',
    heading: 'Del Webb new homes versus Sun City resales',
    image: siteImages.sunCity,
    paragraphs: [
      'Del Webb is the original builder of Sun City Aliante. Remaining new or recently built product is limited compared with the resale pool. Age occupancy still applies. Compare a new Del Webb plan against a resale that already has landscaping and window treatments—the all-in cost often surprises first-time 55+ buyers.',
      'Dr. Jan Duffy represents both new and resale Sun City buyers. Call (702) 707-7273.',
    ],
    links: [
      { href: '/sun-city-aliante', text: 'Sun City Aliante community guide' },
      { href: '/builders/incentives', text: 'Builder incentives' },
      { href: '/golf-homes', text: 'Golf homes in Aliante' },
    ],
  },
  'toll-brothers': {
    h1: 'Toll Brothers luxury new construction near Aliante',
    subtitle:
      'Ultra-luxury plans and lots. Independent review of options, premiums, and timelines.',
    heading: 'Toll Brothers contracts with a buyer’s agent',
    image: siteImages.tollBrothers,
    paragraphs: [
      'Toll Brothers competes at the top of the new-construction price band. Structural options and lot location drive cost more than brochure square footage. Have your agent at design center so upgrades are documented on the addendum.',
      'Call (702) 707-7273 to see which Toll Brothers communities currently serve Aliante-area buyers.',
    ],
    links: [
      { href: '/neighborhoods/prominence', text: 'The Prominence luxury resale' },
      { href: '/builders/tri-pointe', text: 'Tri Pointe Homes' },
      { href: '/new-construction', text: 'New construction in Aliante' },
    ],
  },
  'richmond-american': {
    h1: 'Richmond American Homes in Aliante and North Las Vegas',
    subtitle:
      'Production new construction with design options. Buyer representation on incentives and inspections.',
    heading: 'Richmond American process in 89084',
    image: siteImages.richmondAmerican,
    paragraphs: [
      'Richmond American builds production homes with option packages that vary by community. Confirm included structural items versus paid design-center extras. Closing-cost credits and rate buydowns, when offered, should appear in writing.',
      'Dr. Jan Duffy registers you with Richmond American and stays through punch-list. Call (702) 707-7273.',
    ],
    links: [
      { href: '/builders/lennar', text: 'Lennar in Aliante' },
      { href: '/builders/dr-horton', text: 'D.R. Horton Tule Springs' },
      { href: '/builders', text: 'Compare builders' },
    ],
  },
  incentives: {
    h1: 'Aliante builder incentives and closing credits',
    subtitle:
      'Credits, buydowns, and design-center dollars change by community and month. Get today’s sheet, not last quarter’s ad.',
    heading: 'How incentives actually get to the closing table',
    image: siteImages.incentives,
    paragraphs: [
      'Advertised builder incentives are a starting point. Preferred-lender credits may require using the builder’s mortgage affiliate—compare the rate against an independent quote. Lot premiums can erase a closing-cost credit if nobody models both numbers.',
      'Dr. Jan Duffy tracks Aliante-area builder sheets and documents them on your addendum. Call (702) 707-7273.',
    ],
    links: [
      { href: '/new-construction', text: 'New construction homes in Aliante' },
      { href: '/mortgage-calculator', text: 'Mortgage payment calculator' },
      { href: '/builders', text: 'Builder comparison' },
    ],
  },
};
