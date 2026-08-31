'use client';

import Link from 'next/link';

export default function BuilderIncentivesInfo() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8" style={{ color: '#1a365d' }}>
          Maximizing Builder Incentives and Savings
        </h2>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
          <p className="leading-relaxed">
            One of the most significant advantages of working with a specialized new construction
            agent is the ability to maximize builder incentives and negotiate additional concessions
            that unrepresented buyers simply cannot access. Builder incentives are complex and
            constantly changing based on inventory levels, sales pace, and corporate directives from
            national headquarters. What's offered to the general public is often just the starting
            point for what's truly available to buyers who work with the right agent.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#2c5aa0' }}>
            Current Incentive Programs in Aliante
          </h3>

          <p className="leading-relaxed">
            As of 2025, builders in the Aliante and North Las Vegas area are offering some of the
            most aggressive incentive packages we've seen in years.{' '}
            <Link
              href="/builders/lennar"
              className="text-blue-600 hover:text-blue-800 font-semibold hover:underline"
            >
              Lennar
            </Link>{' '}
            is currently providing up to $25,000 in closing cost assistance on select quick move-in
            homes, plus their Everything's Included® package that adds smart home technology,
            upgraded appliances, and designer finishes at no additional cost.{' '}
            <Link
              href="/builders/dr-horton"
              className="text-blue-600 hover:text-blue-800 font-semibold hover:underline"
            >
              D.R. Horton
            </Link>{' '}
            has partnered with their preferred lender to offer 2-1{' '}
            <Link
              href="/mortgage-calculator"
              className="text-blue-600 hover:text-blue-800 font-semibold hover:underline"
            >
              mortgage rate buydowns
            </Link>
            , effectively reducing your interest rate by 2% in the first year and 1% in the second
            year – a savings that can exceed $500 per month.
          </p>

          <p className="leading-relaxed">
            <Link
              href="/builders/tri-pointe"
              className="text-blue-600 hover:text-blue-800 font-semibold hover:underline"
            >
              Tri Pointe
            </Link>{' '}
            and{' '}
            <Link
              href="/builders/toll-brothers"
              className="text-blue-600 hover:text-blue-800 font-semibold hover:underline"
            >
              Toll Brothers near Aliante
            </Link>{' '}
            publish their own option credits and lender programs; I confirm the live sheet before
            you offer. Toll Brothers is not currently building inside ZIP 89084 — Elkhorn Grove in
            89131 is the closest community.{' '}
            <Link
              href="/builders/del-webb"
              className="text-blue-600 hover:text-blue-800 font-semibold hover:underline"
            >
              Del Webb
            </Link>{' '}
            at Sun City Aliante runs separate 55+ incentives that change with inventory.
          </p>

          <p className="leading-relaxed">
            The key to maximizing these incentives is understanding the negotiation leverage points
            and timing your offer strategically. Builders are most motivated at month-end,
            quarter-end, and when they have excess inventory in a particular phase or community. As
            your buyer's agent, I track these cycles closely and can advise you on the optimal
            timing for your offer. I also understand which incentives are truly valuable versus
            which are marketing tactics designed to steer you toward higher-priced options. My goal
            is to structure a deal that delivers maximum value while ensuring the home meets your
            needs and timeline.
          </p>

          <p className="leading-relaxed">
            It's important to note that working with me costs you nothing – builders pay the buyer's
            agent commission from their marketing budget, and my services are completely free to
            you. In fact, buyers who go directly to builders without representation often end up
            paying the same price or more because the builder simply retains the commission they
            would have paid to an agent. By working with me, you get professional advocacy, expert
            negotiation, and insider knowledge at no cost while potentially saving tens of thousands
            of dollars through better incentive packages and lot selection.
          </p>
        </div>
      </div>
    </section>
  );
}
