'use client';

import Link from 'next/link';

export default function MortgageCalculatorContent() {
  return (
    <>
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: '#1a365d' }}>
            Mortgage payments on an Aliante 89084 purchase
          </h2>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p className="leading-relaxed">
              Calculating accurate mortgage payments is essential for understanding true
              affordability when shopping for Aliante homes. Your monthly housing payment includes
              multiple components beyond just principal and interest on your loan – property taxes,
              homeowners insurance, HOA fees (for properties in master-planned communities or gated
              neighborhoods), and potentially private mortgage insurance (PMI) if your down payment
              is less than 20%. Understanding these costs upfront helps you set realistic home
              search parameters and avoid surprises during the lending process.
            </p>

            <p className="leading-relaxed">
              Enter the list price, down payment, and the rate your lender quoted in the estimator
              on this page for principal and interest. Confirm live rate and taxes — I will not
              publish a sample price or rate as current. Property taxes, insurance, HOA, and PMI if
              applicable sit on top of that P&amp;I. Total housing cost is higher than the
              advertised P&amp;I. View current{' '}
              <Link
                href="/homes-for-sale"
                className="text-blue-600 hover:text-blue-800 font-semibold hover:underline"
              >
                Aliante homes for sale
              </Link>{' '}
              to calculate payments on specific properties, or read the{' '}
              <Link
                href="/market-report"
                className="text-blue-600 hover:text-blue-800 font-semibold hover:underline"
              >
                market report
              </Link>{' '}
              for how to read live MLS widgets.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#2c5aa0' }}>
              How rates change what you can pay
            </h3>

            <p className="leading-relaxed">
              Interest rates remain the single most important variable affecting affordability. A 1%
              rate change moves monthly principal-and-interest — confirm the live quote for your
              credit, purchase price, and down payment. Rates move with the market. Confirm the
              quote your lender will actually lock — I will not treat a Fed headline as your
              payment.
            </p>

            <p className="leading-relaxed">
              Many builders offer rate buydown programs. A 2-1 buydown lowers the note rate for the
              first two years, then the permanent rate applies. Confirm that structure and the
              dollars on this month's sheet — I will not publish a 5% / 6% / 7% example as current.
              Some builders also credit closing costs instead of a buydown. I review which credits
              are actually on the contract you will sign.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8" style={{ color: '#1a365d' }}>
            Loan programs for an Aliante purchase in ZIP 89084
          </h2>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p className="leading-relaxed">
              Down payment requirements vary significantly by loan program. Conventional loans allow
              as little as 3% down for first-time buyers, though 5-20% is more common. FHA loans
              require 3.5% minimum down payment and accept lower credit scores than conventional
              programs, making them popular with first-time buyers. VA loans available to qualifying
              veterans and active military offer 0% down payment with no PMI requirement. Confirm
              current funding-fee rules and whether you qualify — I will not publish a lifetime
              savings figure.
            </p>

            <p className="leading-relaxed">
              Each program has trade-offs beyond down payment. FHA can include upfront and monthly
              mortgage insurance. Conventional PMI can drop once you reach the equity the servicer
              requires — confirm that on your quote. VA loans can include a funding fee (waived for
              some disabled veterans) paid upfront or financed. Confirm current rules with the
              lender. I will not publish a 720-score cutoff or a lifetime-savings figure.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#2c5aa0' }}>
              Closing costs, HOA dues, and maintenance on an 89084 home
            </h3>

            <p className="leading-relaxed">
              Budget for maintenance separately from the mortgage. HVAC, pool service where a pool
              exists, landscaping, and later roof or water-heater replacement all sit outside P&I. I
              will not publish a 1–2% of value rule as your actual bill — ask a contractor for that
              address.
            </p>

            <p className="leading-relaxed">
              Closing costs include lender fees, title, escrow, appraisal, and prepaid taxes and
              insurance. Confirm the current estimate from your lender — I will not publish a 2–4%
              or dollar total as current. Some sellers credit closing costs; some builders put
              credits on the incentive sheet. Confirm what is actually in the contract. A
              no-closing-cost loan usually means a higher rate — compare both quotes in writing.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8" style={{ color: '#1a365d' }}>
            Compare at least two written lender quotes for ZIP 89084
          </h2>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p className="leading-relaxed">
              Selecting the right lender is nearly as important as finding the right home. Compare
              at least two written quotes from lenders who actually close Las Vegas loans. Confirm
              rate, points, and fees on that Loan Estimate — I will not claim a spread versus
              advertised averages. Ask whether they have closed Aliante or Tule Springs files
              recently.
            </p>

            <p className="leading-relaxed">
              Getting pre-approved (not just pre-qualified) before beginning your home search is
              usually the strongest way to write. Pre-approval involves submitting full
              documentation and receiving underwriter review for a loan amount. It is not the same
              as cash. This process often takes a few business days — confirm cost and timing with
              the lender. Contact me for introductions to lenders who actually close Aliante files.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
