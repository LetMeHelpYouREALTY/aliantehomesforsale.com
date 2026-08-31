'use client';

export default function SearchPageContent() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: '#1a365d' }}>
          Search Aliante MLS with a North Las Vegas 89084 realtor
        </h2>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
          <p className="leading-relaxed">
            Our MLS search connects to the Las Vegas MLS feed that agents use, with listings that
            refresh about every 15 minutes. Inventory counts change throughout the day — search live
            rather than relying on a stale total. Confirm the address, list price, and status on the
            widget before you treat any card as current.
          </p>

          <p className="leading-relaxed">
            The search interface allows you to filter properties by virtually any criteria – price
            range, square footage, number of bedrooms and bathrooms, lot size, property age,
            community amenities, specific neighborhoods, and dozens of other features. You can save
            your favorite properties, set up automated email alerts when new homes matching your
            criteria hit the market, and share listings with others helping with your search. This
            combination of features keeps you informed so you can act when the right property
            becomes available.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#2c5aa0' }}>
            Understanding MLS Data and Property Information
          </h3>

          <p className="leading-relaxed">
            Each property listing includes details entered by the listing agent: descriptions,
            features, room counts, HOA remarks, taxes, and disclosures when provided. Photos and
            virtual tours vary by listing — confirm what is attached to that MLS number before you
            skip an in-person showing.
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
