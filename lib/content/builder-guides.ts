/**
 * Unique builder-page copy. Geography matters: Lennar/Del Webb in 89084,
 * Horton in Tule Springs, Tri Pointe/Toll/Richmond are not inside Aliante.
 */

import type { GuideFaq } from './neighborhood-guides';

export type BuilderGuide = {
  slug: string;
  heading: string;
  intro: string[];
  sections: { heading: string; paragraphs: string[] }[];
  faqs: GuideFaq[];
};

export const builderGuides: Record<string, BuilderGuide> = {
  lennar: {
    slug: 'lennar',
    heading: 'Lennar buyer agency in Aliante ZIP 89084',
    intro: [
      'Lennar is the production builder most buyers ask about inside Aliante, North Las Vegas 89084. I represent you on the Lennar contract — not the sales desk. Confirm which community is still selling lots or specs on the live inventory sheet. I will not publish a stale community name or incentive total.',
      'Buyer representation on participating Lennar sales is typically paid from the builder’s cooperating commission. Confirm the fee in writing before you tour. The on-site agent represents Lennar. I review lot premium, design-center options, and the incentive sheet with you.',
    ],
    sections: [
      {
        heading: 'What I check on a Lennar contract in 89084',
        paragraphs: [
          'Lot premium, structural options, and design-center credits move the number more than the base price on the website. I attend the design appointment to separate upgrades you want from items you can skip. Promised incentives belong in the purchase agreement, not a verbal “we’ll take care of it.”',
          'I walk construction phases you care about and build a punch list at final walk-through before you accept keys. Compare a Lennar spec with an Aliante resale when timing or village (gate, golf, 55+) matters more than a new warranty.',
        ],
      },
      {
        heading: 'Lennar versus Horton, Del Webb, and resale',
        paragraphs: [
          'D.R. Horton is the usual Tule Springs comparison — east of Aliante, not Club Aliante. Del Webb is the 55+ desk at Sun City Aliante. Lennar is the 89084 production builder I start with when you want new construction without age occupancy rules.',
          'Call (702) 707-7273. I confirm today’s Lennar sheet with you before you sit in the model.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Does Lennar still build in Aliante 89084?',
        answer:
          'Confirm live communities and specs on the current inventory sheet. I will not publish a stale community list. Call (702) 707-7273 or see <a href="/new-construction" class="text-blue-600 hover:underline font-semibold">new construction</a>.',
      },
      {
        question: 'Do I need my own agent at Lennar?',
        answer:
          'The on-site agent represents Lennar. I represent you on lot premium, incentives, and walk-throughs. Confirm the cooperating-fee arrangement in writing before you tour.',
      },
      {
        question: 'How do Lennar incentives work?',
        answer:
          'Credits, rate buydowns, and upgrades change by community and week. I confirm the live sheet. See <a href="/builders/incentives" class="text-blue-600 hover:underline font-semibold">builder incentives</a>. Preferred lenders are optional — compare at least two written quotes.',
      },
    ],
  },
  'dr-horton': {
    slug: 'dr-horton',
    heading: 'D.R. Horton buyer agency near Aliante — Tule Springs',
    intro: [
      'D.R. Horton is not the in-Aliante production desk. The comparison I run is Villages at Tule Springs and other North Las Vegas Horton communities versus Aliante resale in ZIP 89084. Confirm which Horton community is open on the live sheet. I will not publish a stale community name.',
      'I represent you — not the Horton sales counselor — on lot premium, incentives, and the construction calendar. Register me as your buyer’s agent before the first model tour so representation is on the file.',
    ],
    sections: [
      {
        heading: 'Tule Springs versus Aliante 89084',
        paragraphs: [
          'Tule Springs sits east of the Aliante master plan, near Floyd Lamb Park. You are not buying Club Aliante, The Prominence, or Sun City Aliante when you sign a Horton contract there. Drive time to the 215, Aliante Casino, and 2590 Nature Park Drive is a lot-level check, not a brochure claim.',
          'A Horton spec can beat Aliante resale on warranty and close date. Aliante resale can put you in a gated or golf village Horton is not selling this year. I compare the two addresses you will actually close.',
        ],
      },
      {
        heading: 'Horton process I walk with you',
        paragraphs: [
          'I review the incentive sheet, structural options, and lender credit. Preferred lenders are optional. I attend key walk-throughs and document punch-list items before you accept the home.',
          'Call (702) 707-7273 before you visit the model. Builder desks track first-touch. Show up represented.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is D.R. Horton building inside Aliante?',
        answer:
          'The usual Horton comparison is Tule Springs, east of the Aliante master plan. Confirm the live community list. See <a href="/neighborhoods/tule-springs" class="text-blue-600 hover:underline font-semibold">Villages at Tule Springs</a>.',
      },
      {
        question: 'Can I use my own agent at D.R. Horton?',
        answer:
          'Yes — register representation before the first tour. I represent you on the contract. Confirm the cooperating fee in writing.',
      },
      {
        question: 'Should I buy Horton new or Aliante resale?',
        answer:
          'New construction is incentives and warranty. Aliante resale is the village product (gate, golf, 55+, parks). I compare two live addresses. Call (702) 707-7273.',
      },
    ],
  },
  'richmond-american': {
    slug: 'richmond-american',
    heading: 'Richmond American near Aliante — confirm the map',
    intro: [
      'Richmond American Homes is not currently building inside the Aliante master plan in ZIP 89084. If a Richmond community is on your list, I confirm whether the address is North Las Vegas, northwest Las Vegas, or another valley submarket before you tour. Do not assume “near Aliante” means inside Club Aliante or Sun City Aliante.',
      'I still represent you on a Richmond contract when that community is the right product — lot premium, incentives, and walk-throughs. Compare it with Lennar in 89084 and Aliante resale so you are not stretching the map for a brand name.',
    ],
    sections: [
      {
        heading: 'Geography first, then the incentive sheet',
        paragraphs: [
          'Commute to the 215 Beltway, Aliante Casino, and 2590 Nature Park Drive changes when you leave ZIP 89084. I run drive times from the model, not from marketing copy.',
          'If the goal is an Aliante village (gate, golf, 55+, parks), start with live MLS in 89084 and Lennar/Del Webb. Use Richmond only when the floor plan and location still fit after that check.',
        ],
      },
      {
        heading: 'How I represent you at Richmond American',
        paragraphs: [
          'Register me before the first visit. I review the live incentive sheet, design options, and punch list. Confirm the fee arrangement in writing.',
          'Call (702) 707-7273. I will tell you whether the community on today’s sheet is inside Aliante — or not.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Does Richmond American build in Aliante 89084?',
        answer:
          'Confirm the live community map. Richmond is not the in-Aliante production builder. Lennar and Del Webb are the 89084 desks I start with. Call (702) 707-7273.',
      },
      {
        question: 'Can I still use Dr. Jan Duffy on a Richmond purchase?',
        answer:
          'Yes. I represent you on any valley builder contract you actually want — after we confirm the address is the right geography. Register before the first tour.',
      },
    ],
  },
  'toll-brothers': {
    slug: 'toll-brothers',
    heading: 'Toll Brothers near Aliante — Elkhorn Grove, not ZIP 89084',
    intro: [
      'Toll Brothers is not currently building inside Aliante ZIP 89084. The closest community shoppers ask about is Elkhorn Grove (5819 Kings Bluff Ave, Las Vegas NV 89131). That is northwest Las Vegas, not Club Aliante, The Prominence, or Sun City Aliante.',
      'If Elkhorn Grove or another Toll community is the product you want, I represent you on that contract. If the goal is Aliante 89084, start with live MLS and Lennar/Del Webb. Do not treat Toll as an Aliante builder.',
    ],
    sections: [
      {
        heading: '89131 versus 89084',
        paragraphs: [
          'Elkhorn Grove sits off the 215 in 89131. Drive time to Aliante Corporate Center and Aliante Golf Club is a different commute than an Aliante interior street. Confirm from the model.',
          'Toll’s process still includes lot premiums, options, and a preferred-lender conversation. I compare those numbers with a 89084 resale or Lennar spec when you are deciding whether to leave Aliante.',
        ],
      },
      {
        heading: 'Buyer agency at Toll Brothers',
        paragraphs: [
          'Register representation before the first tour. Confirm cooperating compensation in writing. I review incentives, options, and walk-throughs on your side of the table.',
          'Call (702) 707-7273 if you want Aliante 89084 or a Toll community — I will not blur the two.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is Toll Brothers in Aliante?',
        answer:
          'No current Toll community sits inside Aliante ZIP 89084. Elkhorn Grove is 89131. For Aliante new construction see <a href="/builders/lennar" class="text-blue-600 hover:underline font-semibold">Lennar</a> and <a href="/builders/del-webb" class="text-blue-600 hover:underline font-semibold">Del Webb</a>.',
      },
      {
        question: 'Will you represent me at Elkhorn Grove?',
        answer:
          'Yes, if that address is the product you want. Register me before the first visit. Call (702) 707-7273.',
      },
    ],
  },
  'del-webb': {
    slug: 'del-webb',
    heading: 'Del Webb buyer agency at Sun City Aliante — new construction',
    intro: [
      'Del Webb is the 55+ builder at Sun City Aliante in ZIP 89084. This page is the builder relationship: models, incentives, design center, and walk-throughs. For village amenities, occupancy rules, and resale inventory, use the Sun City Aliante community page. Ardiente in ZIP 89081 is a different 55+ community.',
      'At least one resident must be 55 or older under HOPA age-restricted occupancy. I state the age rule. I do not describe who “should” live there. The on-site counselor represents Del Webb. I represent you.',
    ],
    sections: [
      {
        heading: 'New Del Webb versus Sun City resale',
        paragraphs: [
          'A new Del Webb spec or to-be-built trades on warranty, incentives, and remaining lots. A Sun City resale can put you on a street or lot position Del Webb is not selling this year. I compare both on live inventory — I will not publish a stale count or price range.',
          'Confirm the live incentive sheet, lot premium, and HOA. Preferred lenders are optional. Compare at least two written quotes.',
        ],
      },
      {
        heading: 'How I work the Del Webb desk',
        paragraphs: [
          'Register me before the first model tour. I attend design-center appointments, keep incentives in writing, and walk punch-list items before you accept keys.',
          'Call (702) 707-7273. I represent you on the Del Webb contract in 89084 — not Ardiente, not Del Webb Summerlin, not Mesquite.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is Del Webb the same as Sun City Aliante resale?',
        answer:
          'Del Webb is the builder. Sun City Aliante is the 55+ village with new and resale inventory. This page is buyer agency on a Del Webb contract. Community amenities and occupancy rules are on <a href="/sun-city-aliante" class="text-blue-600 hover:underline font-semibold">Sun City Aliante</a>.',
      },
      {
        question: 'What are the age occupancy rules?',
        answer:
          'Sun City Aliante is 55+ under HOPA. At least one resident must be 55 or older. Confirm current occupancy rules in the community documents before you offer.',
      },
      {
        question: 'Is this Ardiente or Del Webb Summerlin?',
        answer:
          'No. This desk is Sun City Aliante in ZIP 89084. Ardiente is 89081. Del Webb Summerlin and Mesquite are different communities.',
      },
    ],
  },
};
