/**
 * Unique village copy and FAQs. Do not reuse one HOA essay across pages.
 * Fair Housing: describe lot type, amenities, commute, and named campuses — never
 * “safe,” “family-friendly,” or “who should live here” (55+ occupancy is HOPA age rules only).
 */

export type GuideFaq = {
  question: string;
  answer: string;
};

export type VillageGuide = {
  slug: string;
  heading: string;
  intro: string[];
  sections: { heading: string; paragraphs: string[] }[];
  faqs: GuideFaq[];
};

export const neighborhoodGuides: Record<string, VillageGuide> = {
  prominence: {
    slug: 'prominence',
    heading: 'Buying in The Prominence, Aliante 89084',
    intro: [
      'The Prominence is a guard-gated village inside the Aliante master plan in North Las Vegas ZIP 89084. Private streets and a controlled entry are the product — not a valley-wide “gated Las Vegas” listing. Confirm live MLS addresses before you tour; inventory inside the gate changes week to week.',
      'I compare corner lots, cul-de-sacs, and homes backing to common area on this map. Through-streets and lots near the gate live differently than interior streets. I will walk that distinction with you instead of treating every Prominence listing as the same product.',
    ],
    sections: [
      {
        heading: 'Gate, HOA, and what to confirm before you offer',
        paragraphs: [
          'The Prominence sits under the Aliante master association plus a village association. Confirm current HOA dues, architectural rules, and visitor-entry procedures in the resale packet — I will not publish a stale monthly figure.',
          'If you want a pool, RV parking, or an addition, I pull the CC&Rs and architectural guidelines before you write. Approval timelines and parking rules vary by village. The Prominence is not The Paseos or Desert Willows on those points.',
        ],
      },
      {
        heading: 'How I tour The Prominence versus nearby villages',
        paragraphs: [
          'Buyers often compare The Prominence with Club Aliante (golf, also gated) and Desert Willows or The Paseos (open-access). I line up lot position, HOA stack, and live comps for the three addresses you will actually see — not a ZIP-wide average.',
          'Call (702) 707-7273 to set a gate-code tour. I represent you, not the listing desk, on inspection, HOA questions, and the offer.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is The Prominence gated?',
        answer:
          'Yes. The Prominence is a controlled-access village inside Aliante ZIP 89084. Confirm visitor entry and live MLS listings before you tour. Compare with open-access <a href="/neighborhoods/paseos" class="text-blue-600 hover:underline font-semibold">The Paseos</a> and <a href="/neighborhoods/desert-willows" class="text-blue-600 hover:underline font-semibold">Desert Willows</a>.',
      },
      {
        question: 'How do Prominence HOA dues compare with other Aliante villages?',
        answer:
          'Dues change. I confirm the current master + village stack in the resale documents for that address. I will not publish a stale monthly number. Call (702) 707-7273 with the listing you are considering.',
      },
      {
        question: 'Should I buy Prominence or Club Aliante?',
        answer:
          'Club Aliante is the golf-adjacent gated village; The Prominence is gated without fairway lots. I compare lot, HOA, and live comps for the two addresses you will tour. See <a href="/neighborhoods/compare" class="text-blue-600 hover:underline font-semibold">village comparison</a>.',
      },
    ],
  },
  'desert-willows': {
    slug: 'desert-willows',
    heading: 'Buying in Desert Willows, Aliante 89084',
    intro: [
      'Desert Willows is an open-access village inside Aliante — no guard gate on the typical street. Parks, community pools, and everyday convenience to Aliante Parkway are the usual reasons buyers look here. Confirm live MLS rather than a brochure count of homes.',
      'I tour one- and two-story plans and compare lot orientation, backyard size, and proximity to parks versus collector streets. Open-access does not mean “no HOA.” Desert Willows still sits in the Aliante master plan with village rules that affect parking, landscaping, and exterior changes.',
    ],
    sections: [
      {
        heading: 'Parks, streets, and lot position',
        paragraphs: [
          'Homes closer to Aliante Nature Discovery Park or neighborhood pocket parks trade on walkability to those amenities. Homes on through-streets see more traffic. I walk both so you are buying the street you actually want.',
          'Single-story inventory is limited compared with two-story plans. If a single-level layout is required, I filter live MLS for Desert Willows and nearby villages instead of promising a count that will be stale by tomorrow.',
        ],
      },
      {
        heading: 'Open-access versus gated Aliante',
        paragraphs: [
          'Desert Willows does not use a guard gate. If controlled entry is the requirement, look at The Prominence or Club Aliante. If you want parks without a gate, Desert Willows and The Paseos are the usual pair I compare.',
          'Call (702) 707-7273. I represent you on HOA review, inspections, and the offer — not a listing desk inside this village.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is Desert Willows gated?',
        answer:
          'No. Desert Willows is an open-access Aliante village in ZIP 89084. For controlled entry, see <a href="/neighborhoods/prominence" class="text-blue-600 hover:underline font-semibold">The Prominence</a> or <a href="/neighborhoods/club-aliante" class="text-blue-600 hover:underline font-semibold">Club Aliante</a>.',
      },
      {
        question: 'Are there parks in Desert Willows?',
        answer:
          'Yes. Pocket parks and community recreation sit inside the village, with Aliante Nature Discovery Park nearby. Confirm the walk from the specific address — I do not treat every Desert Willows street as equal.',
      },
      {
        question: 'How does Desert Willows compare with The Paseos?',
        answer:
          'Both are open-access Aliante villages with parks and pools. Lot mix, street layout, and live comps differ by address. I tour both on the same day when that is the decision. See <a href="/neighborhoods/compare" class="text-blue-600 hover:underline font-semibold">compare villages</a>.',
      },
    ],
  },
  paseos: {
    slug: 'paseos',
    heading: 'Buying in The Paseos, Aliante 89084',
    intro: [
      'The Paseos is an open-access village in the Aliante master plan with parks, trails, and shared recreation. There is no guard gate on the typical street. Buyers usually choose it for interior parks and a village layout that is not golf-course or 55+ occupancy.',
      'I compare interior park-facing lots with homes on the village edge. Trail connections and pocket-park frontage change how a lot lives. Confirm live MLS prices; I will not quote a stale median for The Paseos.',
    ],
    sections: [
      {
        heading: 'Trails, parks, and HOA rules',
        paragraphs: [
          'Shared recreation and trails are the village pitch. Confirm current amenity hours, pool rules, and HOA architectural standards in the resale packet. Parking and exterior-change rules still apply even without a gate.',
          'If you need RV parking, a large addition, or a specific fence type, I read the CC&Rs before you offer. The Paseos is not The Prominence on entry, and it is not Club Aliante on golf frontage.',
        ],
      },
      {
        heading: 'Who I compare The Paseos against',
        paragraphs: [
          'Most shoppers pair The Paseos with Desert Willows (also open-access) or step up to gated Prominence. I set that comparison on live listings, not marketing copy.',
          'Call (702) 707-7273 to walk parks and listings in one appointment. I represent you on the purchase in ZIP 89084.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is The Paseos a gated community?',
        answer:
          'No. The Paseos is open-access inside Aliante 89084. Gated options include <a href="/neighborhoods/prominence" class="text-blue-600 hover:underline font-semibold">The Prominence</a> and <a href="/neighborhoods/club-aliante" class="text-blue-600 hover:underline font-semibold">Club Aliante</a>.',
      },
      {
        question: 'Does The Paseos have parks and trails?',
        answer:
          'Yes. Parks, trails, and shared recreation are the village amenities. Confirm the walk from the listing you will buy — edge lots and interior park lots are different products.',
      },
      {
        question: 'Is The Paseos 55+?',
        answer:
          'No. The Paseos is not age-restricted. For Del Webb 55+ occupancy rules (at least one resident 55 or older), see <a href="/sun-city-aliante" class="text-blue-600 hover:underline font-semibold">Sun City Aliante</a>.',
      },
    ],
  },
  'club-aliante': {
    slug: 'club-aliante',
    heading: 'Buying in Club Aliante village, ZIP 89084',
    intro: [
      'Club Aliante is the guard-gated village along Aliante Golf Club in North Las Vegas 89084. This page is the village: gates, streets, HOA stack, and which lots sit on a fairway versus an interior street. For the fairway-lot buying playbook (errant balls, par-3 vs par-5, membership vs ownership), use the golf-homes guide.',
      'Not every Club Aliante address is a golf-course lot. Interior streets, corner lots, and fairway frontage price and show differently. I map that on live MLS instead of calling the whole village “golf homes.”',
    ],
    sections: [
      {
        heading: 'Village gates, golf, and HOA',
        paragraphs: [
          'Club Aliante uses controlled entry. The course next door is the city-owned Aliante Golf Club (Gary Panks design) — public daily-fee play, not a private equity club baked into the deed. Confirm current HOA dues, rental rules, and architectural guidelines in the resale documents.',
          'Golf membership, if you want it, is a separate decision from buying the house. I will not publish member benefits or a value premium for fairway lots. Live comps for that lot are the check.',
        ],
      },
      {
        heading: 'Club Aliante versus other Aliante villages',
        paragraphs: [
          'Compare Club Aliante with The Prominence if you want a gate without golf frontage, or with Sun City Aliante if 55+ occupancy rules are the requirement. Interior Club Aliante streets are a different product from Desert Willows open-access parks.',
          'Call (702) 707-7273 for a gate-code showing. I represent you on lot position, HOA, and the offer.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is Club Aliante the same as Aliante Golf Club membership?',
        answer:
          'No. Club Aliante is the gated residential village. Aliante Golf Club is the city-owned public course next door. Membership is optional and separate from the deed. See the <a href="/golf-homes" class="text-blue-600 hover:underline font-semibold">golf-homes playbook</a> for fairway-lot details.',
      },
      {
        question: 'Are all Club Aliante homes on the golf course?',
        answer:
          'No. Some lots front a fairway or green; many sit on interior streets. I confirm lot type on the map and on live MLS before you tour.',
      },
      {
        question: 'Is Club Aliante 55+?',
        answer:
          'No. Club Aliante is not age-restricted. Del Webb 55+ occupancy rules apply at <a href="/sun-city-aliante" class="text-blue-600 hover:underline font-semibold">Sun City Aliante</a> in the same ZIP.',
      },
    ],
  },
  'tule-springs': {
    slug: 'tule-springs',
    heading: 'Villages at Tule Springs versus Aliante 89084',
    intro: [
      'Villages at Tule Springs is east of the Aliante master plan. It is North Las Vegas new construction — not inside Club Aliante, The Prominence, or Sun City Aliante. D.R. Horton and other builders have sold here; confirm which community is still taking contracts on the live sheet.',
      'Buyers usually compare Tule Springs new homes with Aliante resale in ZIP 89084. New construction trades on incentives, lot premiums, and warranty. Aliante resale trades on established streets, golf, gates, or 55+ occupancy. I run that comparison on the two addresses you will actually buy — not a valley average.',
    ],
    sections: [
      {
        heading: 'Builders, Floyd Lamb Park, and commute',
        paragraphs: [
          'Floyd Lamb Park at Tule Springs is the regional park next door — lakes, trails, and picnic areas. Drive time to the 215 Beltway, Aliante Casino, and 2590 Nature Park Drive differs from an Aliante interior street. Confirm from the lot, not from a map pin.',
          'D.R. Horton is the builder most shoppers ask about in Tule Springs. Lennar and Del Webb are the 89084 desks I compare against. Tri Pointe, Toll Brothers, and Richmond American are not currently building inside Aliante. Confirm live inventory before you tour.',
        ],
      },
      {
        heading: 'New construction versus Aliante resale',
        paragraphs: [
          'A Tule Springs spec home can close faster than a to-be-built. An Aliante resale can put you in a gated or golf village the builders are not opening this year. I review the incentive sheet, lot premium, and HOA on both sides.',
          'Call (702) 707-7273. I represent you — not the builder sales desk — on options, credits, and walk-throughs.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is Tule Springs inside Aliante ZIP 89084?',
        answer:
          'Villages at Tule Springs is east of the Aliante master plan. Some nearby addresses share North Las Vegas; it is not Club Aliante or Sun City Aliante. I confirm the ZIP and HOA on the specific lot.',
      },
      {
        question: 'Which builder is in Tule Springs?',
        answer:
          'D.R. Horton is the name most buyers ask about. Confirm live communities on the current sheet — I will not publish a stale community list. See <a href="/builders/dr-horton" class="text-blue-600 hover:underline font-semibold">D.R. Horton buyer agency</a>.',
      },
      {
        question: 'Should I buy Tule Springs new or Aliante resale?',
        answer:
          'New construction is incentives, lot premium, and warranty. Aliante resale is the village (gate, golf, 55+, parks) you cannot buy from a Tule Springs sales desk. I compare two live addresses. Call (702) 707-7273.',
      },
    ],
  },
  compare: {
    slug: 'compare',
    heading: 'How I compare Aliante villages in ZIP 89084',
    intro: [
      'I compare villages on gate vs open-access, golf vs interior streets, 55+ occupancy rules vs no age restriction, and new construction vs resale. Prices and inventory change. Confirm live MLS for the two or three addresses you will tour — not a ranking of “best” neighborhoods.',
      'Club Aliante is gated golf-adjacent. The Prominence is gated without fairway lots. Desert Willows and The Paseos are open-access with parks. Sun City Aliante is Del Webb 55+ (at least one resident 55 or older). Tule Springs is nearby new construction, not the Aliante master plan.',
    ],
    sections: [
      {
        heading: 'What I put on the same-day tour',
        paragraphs: [
          'Most buyers pick one axis: gate, golf, 55+, or parks. I do not stack six villages in one afternoon. Two villages plus live comps is enough to decide. Ardiente (89081) is a different 55+ community — I will tell you which address is which.',
          'HOA dues, rental caps, and parking rules differ. I pull the documents for the village you will actually bid on. Call (702) 707-7273 with the list of streets you want to see.',
        ],
      },
      {
        heading: 'Fair comparison rules',
        paragraphs: [
          'I do not rank villages by school scores, crime narratives, or who “should” live there. I describe square footage, lot type, amenities, named campuses, and commute times. Attendance boundaries change — confirm with Clark County School District for a specific address.',
          'Use the comparison table on this page as a starting map, then confirm current listings on MLS.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Which Aliante village is gated?',
        answer:
          '<a href="/neighborhoods/prominence" class="text-blue-600 hover:underline font-semibold">The Prominence</a> and <a href="/neighborhoods/club-aliante" class="text-blue-600 hover:underline font-semibold">Club Aliante</a> are gated. Desert Willows and The Paseos are open-access.',
      },
      {
        question: 'Which village is 55+?',
        answer:
          '<a href="/sun-city-aliante" class="text-blue-600 hover:underline font-semibold">Sun City Aliante</a> is Del Webb 55+ (at least one resident 55 or older). It is not Ardiente in ZIP 89081.',
      },
      {
        question: 'How do I compare new construction with these villages?',
        answer:
          'Lennar and Del Webb sell in or next to 89084. D.R. Horton is the usual Tule Springs comparison. See <a href="/new-construction" class="text-blue-600 hover:underline font-semibold">new-construction buyer agency</a>.',
      },
    ],
  },
};
