'use client';

import Link from 'next/link';

export default function BuildersIntro() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: '#1a365d' }}>
          Why Choose New Construction in Aliante?
        </h2>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
          <p className="leading-relaxed">
            Aliante and the surrounding North Las Vegas area remain active for new construction. The
            I-215 Beltway connects ZIP 89084 to downtown Las Vegas, Harry Reid International
            Airport, and employment centers throughout the valley. National and regional builders
            still sell here, each with a different floor-plan mix, included features, and incentive
            sheet.
          </p>

          <p className="leading-relaxed">
            As Dr. Jan Duffy, your local new construction specialist since 2018, I represent you —
            not the builder — on the contract, options, and walk-throughs. Confirm current
            communities, inventory, and incentive programs on this month’s sheet. I match the
            builder map to the ZIP you actually want — Aliante 89084 versus nearby Tule Springs.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#2c5aa0' }}>
            The Advantages of Building New in 2026
          </h3>

          <p className="leading-relaxed">
            Today's new construction still competes on incentives, energy codes, and included
            features. Current sheets can include closing-cost credits, upgrades, and rate buydowns —
            confirm today’s numbers before you write. I will not publish a stale dollar amount.
          </p>

          <p className="leading-relaxed">
            Beyond the purchase price, new construction in Aliante and nearby Tule Springs is built
            to the codes in effect at permit. Warranty length, electrical and plumbing specs, and
            option packages vary by builder. Read the warranty booklet and the design-center list
            for that lot. Where a to-be-built plan is still available, you can often choose finishes
            without a later remodel. Compare{' '}
            <Link
              href="/neighborhoods/tule-springs"
              className="text-blue-600 hover:text-blue-800 font-semibold hover:underline"
            >
              Villages at Tule Springs
            </Link>
            , which is east of Aliante — not inside the Aliante master plan.
          </p>
        </div>
      </div>
    </section>
  );
}
