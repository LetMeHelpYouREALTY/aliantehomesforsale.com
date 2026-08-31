'use client';

type NeighborhoodDetailVariant = 'village' | 'compare';

type NeighborhoodDetailContentProps = {
  heading?: string;
  /** Village-specific facts such as gated vs open-access. */
  intro?: string;
  variant?: NeighborhoodDetailVariant;
};

export default function NeighborhoodDetailContent({
  heading = 'Buyer representation in this Aliante village',
  intro,
  variant = 'village',
}: NeighborhoodDetailContentProps) {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: '#1a365d' }}>
          {heading}
        </h2>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
          {renderDetail(variant, intro)}
        </div>
      </div>
    </section>
  );
}

function renderDetail(variant: NeighborhoodDetailVariant, intro?: string) {
  switch (variant) {
    case 'compare':
      return <CompareCopy />;
    case 'village':
      return <VillageCopy intro={intro} />;
    default: {
      const _exhaustive: never = variant;
      return _exhaustive;
    }
  }
}

function VillageCopy({ intro }: { intro?: string | undefined }) {
  return (
    <>
      {intro ? <p className="leading-relaxed">{intro}</p> : null}
      <p className="leading-relaxed">
        I work this village with you on lot position, HOA rules, and live comps. Corner lots,
        cul-de-sacs, through-streets, and homes backing to common areas live differently — I will
        walk the map with you rather than treat every address as the same. Confirm HOA dues, CC&Rs,
        and current list prices before you offer.
      </p>

      <p className="leading-relaxed">
        I tour the actual streets with you and compare condition, lot position, and recent closed
        sales. Confirm HOA governance, CC&Rs, and live MLS comps — not listing remarks alone.
      </p>

      <h3 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#2c5aa0' }}>
        Navigating HOA Documents and Community Regulations
      </h3>

      <p className="leading-relaxed">
        Every master-planned community and homeowners association comes with CC&Rs (Covenants,
        Conditions, and Restrictions), bylaws, and rules that govern property use and architectural
        standards. These documents can be complex and difficult to interpret, but they&apos;re
        critically important to understand before purchasing. Some HOAs have strict enforcement
        policies regarding architectural changes, vehicle storage, landscaping requirements, and
        even holiday decorations. Others are more lenient, allowing homeowners greater freedom in
        customizing their properties.
      </p>

      <p className="leading-relaxed">
        I&apos;ll help you review all HOA documents and understand what restrictions will affect how
        you use the property. If you&apos;re considering future additions like pools, outdoor
        kitchens, or home offices, I&apos;ll research whether these improvements require HOA
        architectural approval and what the approval process entails. Understanding these factors
        before purchasing prevents surprises after closing and ensures the community&apos;s
        governance structure aligns with your expectations for property ownership rights and
        neighborhood oversight.
      </p>
    </>
  );
}

function CompareCopy() {
  return (
    <>
      <p className="leading-relaxed">
        I compare Aliante villages on housing type and facts you can walk: gated vs open-access,
        fairway vs interior lots, 55+ occupancy vs all-ages streets, and resale inside ZIP 89084 vs
        new construction east of Aliante in Tule Springs. I will not rank villages by school rating,
        crime, or a lifestyle label.
      </p>

      <p className="leading-relaxed">
        Club Aliante and The Prominence use controlled entry. Desert Willows and The Paseos are
        open-access. Sun City Aliante is Del Webb 55+ inside 89084 — not Ardiente in 89081. Confirm
        live MLS prices, HOA dues, and CCSD attendance for the address you will actually buy. The
        table on this page is a starting map, not a substitute for that lot.
      </p>

      <h3 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#2c5aa0' }}>
        What I check before you offer
      </h3>

      <p className="leading-relaxed">
        Lot position, square footage, HOA rules, guest procedures on gated streets, and recent
        closed sales in that village still decide value. Named campuses that currently serve a
        street are on the schools page — confirm the CCSD map rather than a village name. I will not
        publish a gated or golf-course premium percentage.
      </p>
    </>
  );
}
