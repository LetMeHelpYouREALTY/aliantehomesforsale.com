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
              considering selling, refinancing, or simply tracking equity. A comparative market
              analysis (CMA) uses recent sales of similar properties in your village, then adjusts
              for condition, lot, and features I can actually see. Automated estimates miss those
              details. Confirm the comps I show you against live MLS — I will not call any estimate
              a guaranteed value.
            </p>

            <p className="leading-relaxed">
              I have written Aliante CMAs since 2018. Accuracy comes from touring the village and
              reading recent comps — not from an automated estimate. I compare Club Aliante, gated
              streets, and Sun City Aliante on live comps for the address — not a valley average.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#2c5aa0' }}>
              What goes into a CMA for Club Aliante vs Sun City Aliante
            </h3>

            <p className="leading-relaxed">
              A CMA starts with recently sold comparable properties — homes similar in size, age,
              condition, and village that closed in the past few months. Those comps set a baseline
              for that street. I then adjust for differences: pools, kitchens, lot size, and needed
              repairs. I will not publish a dollar-per-upgrade table here.
            </p>

            <p className="leading-relaxed">
              Current active listings show what you compete with if you list. Homes priced well
              below or above recent closed sales change how buyers filter. Pending sales show what a
              buyer already accepted this week. Expired or withdrawn listings show prices the market
              passed on. I use those sheets with you — I will not treat pending as a forecast.
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
              those numbers go stale. I read them off recent closed sales for your village.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#2c5aa0' }}>
              Timing an Aliante listing in the North Las Vegas market
            </h3>

            <p className="leading-relaxed">
              Home values move with inventory, rates, and season. Confirm current medians and days
              on market on the live widgets. I will not hard-code an annual appreciation rate.
            </p>

            <p className="leading-relaxed">
              Rates change what a buyer can pay. Confirm the rate your lender quoted, then I walk
              village comps with you. I will not forecast a price direction. Request a comparative
              market analysis and I will walk the comps for your village, then discuss which
              improvements recent buyers in that village actually paid for if you are planning to
              sell.
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
              Once you receive your detailed valuation report, I schedule a consultation to review
              the findings and discuss your goals. If you're considering selling, I'll recommend
              prep that matches recent closed sales in your village — not a generic upgrade list or
              a promised return. If you want another look later, we can run a new CMA from current
              comps. I will not publish a multi-year outlook here.
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
