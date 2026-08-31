'use client';

import Link from 'next/link';

export default function MarketReportContent() {
  return (
    <>
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: '#1a365d' }}>
            How the Aliante 89084 market actually trades
          </h2>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p className="leading-relaxed">
              The Aliante real estate market sits inside North Las Vegas but trades on its own
              micro-markets: Club Aliante fairway lots, gated villages, Sun City Aliante 55+, and
              open-access streets — all near the I-215 Beltway. MLS widgets on this site refresh
              about every 15 minutes. Use those live figures; I will not quote a stale median in
              this copy.
            </p>

            <p className="leading-relaxed">
              Inventory changes throughout the day. Open-access homes in{' '}
              <Link
                href="/neighborhoods/paseos"
                className="text-blue-600 hover:text-blue-800 font-semibold hover:underline"
              >
                The Paseos
              </Link>{' '}
              and larger homes in{' '}
              <Link
                href="/neighborhoods/prominence"
                className="text-blue-600 hover:text-blue-800 font-semibold hover:underline"
              >
                The Prominence
              </Link>{' '}
              — confirm the live list price. Browse all{' '}
              <Link
                href="/homes-for-sale"
                className="text-blue-600 hover:text-blue-800 font-semibold hover:underline"
              >
                Aliante homes for sale
              </Link>{' '}
              to see current listings. Read the median, days on market, and price per square foot
              from the live widgets on this page — not from a paragraph that can go stale.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#2c5aa0' }}>
              Current Market Trends and Indicators
            </h3>

            <p className="leading-relaxed">
              Days on market changes with the week. Well-priced homes can still move quickly when
              comps support the list price. Confirm current days-on-market on the live widget — I
              will not hard-code a 3-day average or a remaining-lot count here.
            </p>

            <p className="leading-relaxed">
              Price per square foot varies by village and home age. Compare Tule Springs new
              construction with Desert Willows resale on live comps — I will not publish a premium
              percentage. Those village differences matter for buyers evaluating fair value and
              sellers setting a list price.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8" style={{ color: '#1a365d' }}>
            Seasonal Patterns and Buying Opportunities
          </h2>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p className="leading-relaxed">
              Las Vegas listing volume still moves with the calendar. Spring (March-May) typically
              sees higher inventory and more buyer activity. That can mean more competition on
              well-priced homes and more choice. Summer heat often slows showings, which can leave
              more room to negotiate with sellers who stay on market.
            </p>

            <p className="leading-relaxed">
              Fall often still has inventory while some buyers pause for holidays. Winter usually
              has fewer listings and fewer showings. Confirm live days-on-market rather than
              treating any season as a guaranteed discount.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#2c5aa0' }}>
              Interest Rate Impact on Affordability
            </h3>

            <p className="leading-relaxed">
              Interest rates remain the single most important factor affecting housing affordability
              and buyer purchasing power. On a sample $450,000 purchase with 10% down, a 1% rate
              change moves principal-and-interest by a few hundred dollars a month — confirm the
              live quote for your credit and down payment. Many builders offer rate buydown
              programs; confirm today's sheet rather than a stale 1-2% claim.
            </p>

            <p className="leading-relaxed">
              Compare at least two written quotes from lenders who actually close Las Vegas loans —
              I will not publish a spread versus national advertised averages. Over a 30-year loan,
              a small rate difference compounds. Get pre-approved with at least two lenders before
              you tour Club Aliante or Prominence.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8" style={{ color: '#1a365d' }}>
            Gated, golf, 55+, and open-access streets in ZIP 89084
          </h2>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p className="leading-relaxed">
              Different property types within Aliante trade on lot position, square footage, HOA
              rules, and live comps. Confirm recent closed sales for the village you want — I will
              not claim a gated or new-construction premium over open-access streets, and I will not
              hard-code an annual percentage.
            </p>

            <p className="leading-relaxed">
              Golf-course lots appeal to a smaller buyer pool and can hold a premium when the view
              is the point of the purchase. Supply of fairway lots in Aliante is finite. Confirm
              live comps — days on market for golf lots can run longer than open-access streets. I
              will not publish a downturn-retention rate or a rental “best village” ranking.
            </p>

            <p className="leading-relaxed">
              Looking forward, walk remaining lots, HOA rules, and I-215 access for the address you
              will actually buy. Master-planned amenities are facts you can tour. I will not treat
              unfinished commercial projects or a past decade’s path as a forecast.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
