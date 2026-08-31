'use client';

type NeighborhoodDetailContentProps = {
  heading?: string;
};

export default function NeighborhoodDetailContent({
  heading = 'Buyer representation in this Aliante village',
}: NeighborhoodDetailContentProps) {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: '#1a365d' }}>
          {heading}
        </h2>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
          <p className="leading-relaxed">
            I work this village with you on lot position, HOA rules, and live comps. Corner lots,
            cul-de-sacs, through-streets, and homes backing to common areas live differently — I
            will walk the map with you rather than treat every address as the same. Confirm HOA
            dues, CC&Rs, and current list prices before you offer.
          </p>

          <p className="leading-relaxed">
            I tour homes in this village and compare builder floor plans, upgrade packages, and lot
            position. Confirm HOA governance, CC&Rs, and live MLS comps — not listing remarks alone.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#2c5aa0' }}>
            Navigating HOA Documents and Community Regulations
          </h3>

          <p className="leading-relaxed">
            Every master-planned community and homeowners association comes with CC&Rs (Covenants,
            Conditions, and Restrictions), bylaws, and rules that govern property use and
            architectural standards. These documents can be complex and difficult to interpret, but
            they're critically important to understand before purchasing. Some HOAs have strict
            enforcement policies regarding architectural changes, vehicle storage, landscaping
            requirements, and even holiday decorations. Others are more lenient, allowing homeowners
            greater freedom in customizing their properties.
          </p>

          <p className="leading-relaxed">
            I'll help you review all HOA documents and understand what restrictions will affect your
            lifestyle and plans for the property. If you're considering future additions like pools,
            outdoor kitchens, or home offices, I'll research whether these improvements require HOA
            architectural approval and what the approval process entails. Understanding these
            factors before purchasing prevents surprises after closing and ensures the community's
            governance structure aligns with your expectations for property ownership rights and
            neighborhood oversight.
          </p>
        </div>
      </div>
    </section>
  );
}
