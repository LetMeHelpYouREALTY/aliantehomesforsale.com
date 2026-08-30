'use client';

export default function SearchPageContent() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: '#1a365d' }}>
          Advanced Home Search Features
        </h2>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
          <p className="leading-relaxed">
            Our advanced MLS search connects to the Las Vegas MLS feed that agents use, via
            RealScout, and refreshes about every 15 minutes. That is the inventory source of truth
            for Aliante—not a static home count on this page. National portals can lag; this search
            is built for current 89084 listings.
          </p>

          <p className="leading-relaxed">
            The search interface allows you to filter properties by virtually any criteria – price
            range, square footage, number of bedrooms and bathrooms, lot size, property age,
            community amenities, specific neighborhoods, and dozens of other features. You can save
            your favorite properties, set up automated email alerts when new homes matching your
            criteria hit the market, and share listings with family members who are helping with
            your search. This powerful combination of features ensures you stay informed and can act
            quickly when the right property becomes available.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#2c5aa0' }}>
            Understanding MLS Data and Property Information
          </h3>

          <p className="leading-relaxed">
            Each property listing includes comprehensive details entered by the listing agent,
            including full property descriptions, feature lists, room dimensions, recent upgrades,
            HOA fees, tax information, and disclosure documents. High-resolution photos showcase
            each home's interior and exterior, while many listings now include 3D virtual tours that
            allow you to walk through properties remotely before scheduling in-person showings.
          </p>

          <p className="leading-relaxed">
            Property history data shows previous sale prices and dates, days on market for current
            listing, and any price reductions that have occurred. This information helps you assess
            seller motivation and identify potential negotiating opportunities. Properties that have
            been listed for extended periods or have undergone multiple price reductions often
            present better deals than fresh listings, though you must also evaluate why the property
            hasn't sold to ensure there aren't underlying issues affecting marketability.
          </p>
        </div>
      </div>
    </section>
  );
}
