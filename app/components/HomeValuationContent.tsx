'use client';

import Link from 'next/link';

export default function HomeValuationContent() {
  return (
    <>
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: '#1a365d' }}>
            Aliante home valuation and CMA in North Las Vegas 89084
          </h2>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p className="leading-relaxed">
              Understanding your Aliante home's current market value is essential whether you're
              considering selling, refinancing, or simply tracking your investment's performance.
              Our comparative market analysis (CMA) uses recent sales of similar properties in your
              village, then adjusts for condition, lot, and features we can actually see. Automated
              estimates miss those details. Confirm the comps I show you against live MLS — I will
              not call any estimate a guaranteed value.
            </p>

            <p className="leading-relaxed">
              I have analyzed Aliante property values since 2018. Valuation accuracy comes from
              touring the village and reading recent comps — not from an automated estimate. I
              understand how specific neighborhoods trade at different prices, how various upgrades
              affect value, and what current market trends mean for your property's worth today
              versus six months ago. This expertise ensures you have reliable information for making
              important financial decisions.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#2c5aa0' }}>
              What goes into a CMA for Club Aliante vs Sun City Aliante
            </h3>

            <p className="leading-relaxed">
              A professional CMA examines multiple data points to arrive at an accurate value
              estimate. We begin with recently sold comparable properties – homes similar to yours
              in size, age, condition, and location that have sold within the past 3-6 months. These
              "comps" establish the baseline value for homes like yours in current market
              conditions. We then adjust for differences between the comparable properties and your
              home, adding value for superior features like pools, upgraded kitchens, or larger
              lots, while subtracting for missing features or needed repairs.
            </p>

            <p className="leading-relaxed">
              Current active listings provide insight into your competition if you're considering
              selling. If similar homes are priced significantly below or above recent sales, this
              affects optimal pricing strategy. Pending sales (properties under contract but not yet
              closed) indicate very recent buyer price acceptance and market direction. Properties
              that failed to sell (expired or withdrawn listings) show pricing levels the market
              rejected, helping us avoid overpricing mistakes. Combining these data sources creates
              a comprehensive picture of your home's market value.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8" style={{ color: '#1a365d' }}>
            What changes an Aliante home’s value in ZIP 89084
          </h2>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p className="leading-relaxed">
              Location inside Aliante still matters: gated vs open-access, fairway vs interior, and
              drive time to the I-215. Confirm those differences with live comps for the address — I
              will not publish a gated or golf-course premium percentage. Named campuses that
              currently serve an address are on the{' '}
              <Link
                href="/schools"
                className="text-blue-600 hover:text-blue-800 font-semibold hover:underline"
              >
                schools page
              </Link>
              ; confirm the CCSD map before you list or offer. Compare villages on the{' '}
              <Link
                href="/neighborhoods/compare"
                className="text-blue-600 hover:text-blue-800 font-semibold hover:underline"
              >
                neighborhood comparison
              </Link>
              .
            </p>

            <p className="leading-relaxed">
              Property condition shows up in comps. Updated kitchens, baths, flooring, and HVAC age
              change what buyers will pay. I will not publish a dollar-per-upgrade table here —
              those numbers go stale. We read them off recent closed sales for your village.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#2c5aa0' }}>
              Timing an Aliante listing in the North Las Vegas market
            </h3>

            <p className="leading-relaxed">
              Home values move with inventory, rates, and season. Confirm current medians and days
              on market on the live widgets. I will not hard-code an annual appreciation rate.
            </p>

            <p className="leading-relaxed">
              Interest rate environments dramatically affect affordability and therefore home
              values. When rates rise significantly, buyer purchasing power decreases, putting
              downward pressure on prices. Conversely, low-rate environments stimulate demand and
              support price appreciation. As your local market expert, I track these trends
              constantly and can advise you on optimal timing for buying or selling based on current
              conditions and foreseeable market direction. Request a comparative market analysis and
              we will walk the comps for your village, then discuss which improvements recent buyers
              in that village actually paid for if you are planning to sell.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8" style={{ color: '#1a365d' }}>
            Next steps after your Aliante CMA
          </h2>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p className="leading-relaxed">
              Once you receive your detailed valuation report, we'll schedule a consultation to
              review the findings and discuss your goals. If you're considering selling, I'll
              recommend prep that matches recent closed sales in your village — not a generic
              upgrade list or a promised return. If you're simply monitoring your investment, we can
              discuss market outlook and factors that may affect your home's value over the coming
              months and years.
            </p>

            <p className="leading-relaxed">
              For homeowners exploring refinancing options, the valuation helps determine if you
              have sufficient equity to access better loan terms or eliminate private mortgage
              insurance requirements. For those considering home equity lines of credit,
              understanding current value determines how much equity you can tap for home
              improvements, debt consolidation, or other financial goals. Whatever your situation,
              accurate comps for that village provide the foundation for informed decision-making
              about one of your largest financial assets.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
