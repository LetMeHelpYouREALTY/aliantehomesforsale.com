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
            The search interface lets you filter live listings by price, beds, baths, square
            footage, and village. Saved searches and email alerts depend on the RealScout account
            you create — confirm what that widget actually offers before you rely on a notification.
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
            Property history, days on market, and price changes appear when the listing agent
            entered them. Use that data as a starting point, then confirm status on live MLS. I will
            not treat a long DOM or a price cut as a guaranteed bargain.
          </p>
        </div>
      </div>
    </section>
  );
}
