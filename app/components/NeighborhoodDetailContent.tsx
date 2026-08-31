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
            As a local real estate specialist with extensive experience in this specific
            neighborhood, I provide insider knowledge that helps buyers make informed decisions and
            negotiate better purchase terms. Not all properties within this community are created
            equal – corner lots versus interior lots, cul-de-sac locations versus through-street
            addresses, homes backing to common areas versus other homes, and proximity to specific
            amenities all affect both livability and resale value. Understanding these nuances
            requires local expertise that national real estate websites and algorithms simply cannot
            provide.
          </p>

          <p className="leading-relaxed">
            I've toured dozens of homes in this neighborhood and understand the various builder
            floor plans, upgrade packages, and architectural styles available. This knowledge allows
            me to quickly identify properties that represent exceptional value versus those that are
            overpriced relative to market conditions. I also maintain relationships with many
            homeowners in the area, giving me insights into neighborhood dynamics, HOA governance
            quality, and community culture that you won't find in listing descriptions or online
            reviews. This insider perspective helps ensure you make a purchase decision based on
            complete information rather than just what sellers choose to disclose.
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
