'use client';

import Link from 'next/link';

export default function MarketReportContent() {
  return (
    <>
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: '#1a365d' }}>
            Understanding the Aliante Real Estate Market
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
              comps support the list price. That pace is driven by limited remaining lots inside
              Aliante proper, buyer demand from other states, and golf, parks, and I-215 access.
              Confirm current days-on-market on the live widget — I will not hard-code a 3-day
              average here.
            </p>

            <p className="leading-relaxed">
              Price per square foot varies by village and home age. Newer construction near Tule
              Springs often trades at a premium to established streets in Desert Willows. Read the
              live price-per-square-foot figure on the widgets. Those micro-market differences
              matter for buyers evaluating fair value and sellers setting a list price.
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
              Las Vegas real estate follows predictable seasonal patterns that savvy buyers and
              sellers can leverage for advantage. Spring (March-May) traditionally sees the highest
              inventory and buyer activity as families time purchases to align with the school year
              transition. This increased competition often drives prices to annual highs, but also
              provides maximum choice in available properties. Summer months bring extreme heat and
              slower activity, creating potential negotiating opportunities as sellers who remain on
              market become more motivated.
            </p>

            <p className="leading-relaxed">
              Fall presents an interesting dynamic where inventory remains healthy but buyer
              competition decreases as families settle into school routines and holiday planning
              begins. This September-November window often represents the best balance of selection
              and negotiating power for buyers. Winter months see the lowest inventory but also the
              most motivated sellers – those listing during the holidays typically have compelling
              reasons to sell and may be more flexible on price and terms.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#2c5aa0' }}>
              Interest Rate Impact on Affordability
            </h3>

            <p className="leading-relaxed">
              Interest rates remain the single most important factor affecting housing affordability
              and buyer purchasing power. A 1% change in interest rates can impact monthly payments
              by $200-$300 on a median-priced Aliante home, effectively changing your buying power
              by $30,000-$50,000. Current rate environments make working with experienced lenders
              who can shop multiple banks for the best rates absolutely critical. Many builders
              offer rate buydown programs that can reduce your effective rate by 1-2% in the early
              years of your loan, significantly improving affordability.
            </p>

            <p className="leading-relaxed">
              As your local market expert, I maintain relationships with multiple lenders who
              specialize in the Las Vegas market and can often secure rates that are .25%-.5% better
              than advertised national averages. This difference may seem small, but over the life
              of a 30-year mortgage, it can save you tens of thousands of dollars. I always
              recommend that my clients get pre-approved with at least two different lenders to
              compare rates and terms before beginning their home search.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8" style={{ color: '#1a365d' }}>
            Property Type Performance and Investment Potential
          </h2>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p className="leading-relaxed">
              Different property types within Aliante have shown different appreciation paths. Gated
              single-family lots and new construction often hold a premium to open-access streets,
              but I will not hard-code an annual percentage here. Confirm recent comps for the
              village you want before you treat any “average gain” as current.
            </p>

            <p className="leading-relaxed">
              Golf course properties represent a unique investment class, appealing to a more
              selective buyer pool but commanding higher prices and showing strong value retention
              during market downturns. The limited supply of golf course lots in Aliante ensures
              that these properties maintain their premium pricing, though they may take slightly
              longer to sell due to the smaller buyer pool. For investors seeking rental income,
              single-family homes in non-gated communities provide the best balance of purchase
              price, rental rates, and tenant appeal.
            </p>

            <p className="leading-relaxed">
              Looking forward, the completion of nearby commercial development and the continued
              expansion of employment centers in North Las Vegas position Aliante for continued
              strong performance. The master-planned nature of the community ensures that future
              development will enhance rather than detract from existing property values, making
              current purchases in the area a sound long-term investment strategy.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
