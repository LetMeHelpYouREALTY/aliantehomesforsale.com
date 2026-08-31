'use client';

type NeighborhoodDetailVariant = 'village' | 'compare';
type VillageAccess = 'gated' | 'open';

type NeighborhoodDetailContentProps = {
  heading?: string;
  /** Village-specific facts such as gated vs open-access. */
  intro?: string;
  variant?: NeighborhoodDetailVariant;
  /** Gated vs open-access follow-on copy. Ignored when variant is compare. */
  access?: VillageAccess;
};

export default function NeighborhoodDetailContent({
  heading = 'Buyer representation in this Aliante village',
  intro,
  variant = 'village',
  access = 'open',
}: NeighborhoodDetailContentProps) {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: '#1a365d' }}>
          {heading}
        </h2>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
          {renderDetail(variant, intro, access)}
        </div>
      </div>
    </section>
  );
}

function renderDetail(
  variant: NeighborhoodDetailVariant,
  intro: string | undefined,
  access: VillageAccess
) {
  switch (variant) {
    case 'compare':
      return <CompareCopy />;
    case 'village':
      return <VillageCopy intro={intro} access={access} />;
    default: {
      const _exhaustive: never = variant;
      return _exhaustive;
    }
  }
}

function VillageCopy({ intro, access }: { intro?: string | undefined; access: VillageAccess }) {
  return (
    <>
      {intro ? <p className="leading-relaxed">{intro}</p> : null}
      <p className="leading-relaxed">
        I work this village with you on lot position, HOA rules, and live comps. Corner lots,
        cul-de-sacs, through-streets, and homes backing to common areas live differently — I will
        walk the map with you rather than treat every address as the same. Confirm HOA dues, CC&Rs,
        and current list prices before you offer.
      </p>
      {renderAccessCopy(access)}
    </>
  );
}

function renderAccessCopy(access: VillageAccess) {
  switch (access) {
    case 'gated':
      return (
        <>
          <h3 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#2c5aa0' }}>
            Guest lists, gate hours, and HOA architectural rules
          </h3>
          <p className="leading-relaxed">
            Controlled entry means residents, guests, and vendors wait at the gate. Review guest
            procedures, gate hours, and vendor access before you offer. HOA documents still set
            architectural rules, vehicle storage, and landscaping standards — confirm the current
            budget and enforcement history for this village, not a master-plan average.
          </p>
          <p className="leading-relaxed">
            I review CC&Rs and the HOA resale package with you. If you want a pool, outdoor kitchen,
            or other addition, we check whether architectural approval is required in this gated
            village before you write.
          </p>
        </>
      );
    case 'open':
      return (
        <>
          <h3 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#2c5aa0' }}>
            Open-access streets, master HOA, and village CC&Rs
          </h3>
          <p className="leading-relaxed">
            Open-access villages still sit inside the Aliante master HOA. Through-streets, park
            frontage, and cul-de-sacs live differently. Confirm village CC&Rs plus the master
            association rules — landscaping, parking, and architectural changes can still need
            approval even without a gate.
          </p>
          <p className="leading-relaxed">
            I tour the actual streets with you and compare condition, lot position, and recent
            closed sales. Confirm HOA dues and live MLS comps for this open-access village — not
            listing remarks alone.
          </p>
        </>
      );
    default: {
      const _exhaustive: never = access;
      return _exhaustive;
    }
  }
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
