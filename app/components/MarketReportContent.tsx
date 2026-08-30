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
              The Aliante market sits inside North Las Vegas and is shaped by the master-planned
              street grid, Club Aliante golf, I-215 access, and a mix of resale and nearby new
              construction. Market widgets on this site pull from Las Vegas MLS via RealScout and
              refresh about every 15 minutes. Use those live cards—not a static count—when you
              compare inventory.
            </p>

            <p className="leading-relaxed">
              Active inventory in Aliante moves across price bands and property types. Starter and
              move-up plans in{' '}
              <Link
                href="/neighborhoods/paseos"
                className="text-blue-600 hover:text-blue-800 font-semibold hover:underline"
              >
                The Paseos
              </Link>{' '}
              sit next to larger lots in{' '}
              <Link
                href="/neighborhoods/prominence"
                className="text-blue-600 hover:text-blue-800 font-semibold hover:underline"
              >
                The Prominence
              </Link>
              . Browse{' '}
              <Link
                href="/homes-for-sale"
                className="text-blue-600 hover:text-blue-800 font-semibold hover:underline"
              >
                Aliante homes for sale
              </Link>{' '}
              for current list prices, square footage, and days on market. Village-level comps
              matter more than a valley-wide average.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#2c5aa0' }}>
              Current Market Trends and Indicators
            </h3>

            <p className="leading-relaxed">
              Days on market vary by village, condition, and price. Well-priced homes with complete
              photos can move faster than over-improved or poorly presented listings. California
              relocation demand and limited remaining lots inside Aliante proper still show up in
              offer activity, but that is not a reason to skip inspections or skip a CMA. Homes that
              are priced to recent 89084 solds typically draw more showings in the first weekend.
            </p>

            <p className="leading-relaxed">
              Price per square foot averages $243 across all property types, though this varies
              significantly by neighborhood and home age. Newer construction in Villages at Tule
              Springs commands premiums of $260-$280 per square foot, while established
              neighborhoods like Desert Willows trade in the $220-$240 range. Understanding these
              micro-market differences is crucial for both buyers evaluating fair value and sellers
              setting competitive list prices.
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
              Different property types within Aliante have shown varying appreciation and investment
              performance over recent years. Single-family homes in gated communities have led
              appreciation, with average annual gains of 6-8% as security-conscious buyers continue
              to place premium value on controlled-access neighborhoods. New construction has also
              performed exceptionally well, with homes purchased pre-completion seeing 3-5%
              appreciation by the time construction completes due to rising construction costs and
              builder price increases.
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
