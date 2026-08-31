'use client';

import Link from 'next/link';

type BuilderIncentivesInfoProps = {
  heading?: string;
  subheading?: string;
};

export default function BuilderIncentivesInfo({
  heading = 'How I confirm builder incentives in Aliante 89084',
  subheading,
}: BuilderIncentivesInfoProps) {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#1a365d' }}>
          {heading}
        </h2>
        {subheading ? <p className="text-xl text-gray-600 mb-8">{subheading}</p> : null}

        <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
          <p className="leading-relaxed">
            Builder incentives in Aliante and nearby Tule Springs change by community, phase, and
            week. I confirm the live closing-cost, rate-buydown, and upgrade offers with you before
            you write. I will not publish a stale dollar amount in a heading. Call (702) 707-7273.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#2c5aa0' }}>
            Lennar and Del Webb in ZIP 89084; Horton nearby
          </h3>

          <p className="leading-relaxed">
            <Link
              href="/builders/lennar"
              className="text-blue-600 hover:text-blue-800 font-semibold hover:underline"
            >
              Lennar
            </Link>{' '}
            in Aliante,{' '}
            <Link
              href="/builders/dr-horton"
              className="text-blue-600 hover:text-blue-800 font-semibold hover:underline"
            >
              D.R. Horton
            </Link>{' '}
            in nearby Tule Springs, and{' '}
            <Link
              href="/builders/del-webb"
              className="text-blue-600 hover:text-blue-800 font-semibold hover:underline"
            >
              Del Webb
            </Link>{' '}
            at Sun City Aliante each run their own preferred-lender packages. What the model-home
            desk quotes walk-in buyers is often the public starting point. I compare that quote
            against the current sheet for that lot and that lender.
          </p>

          <p className="leading-relaxed">
            Tri Pointe, Toll Brothers, and Richmond American are not currently building inside
            Aliante ZIP 89084. Nearby northwest Las Vegas communities still matter if you are
            comparing new construction with Aliante resale. Confirm live inventory before you drive.{' '}
            <Link
              href="/mortgage-calculator"
              className="text-blue-600 hover:text-blue-800 font-semibold hover:underline"
            >
              Run payment scenarios
            </Link>{' '}
            after we confirm the actual incentive, not a marketing banner.
          </p>

          <p className="leading-relaxed">
            Timing still matters: month-end and quarter-end can move a builder, and excess inventory
            in one phase can change the offer on a specific elevation. I track those cycles for
            Aliante 89084 and Tule Springs so you know when an advertised credit is real versus when
            it is steering you toward a higher-priced lot.
          </p>

          <p className="leading-relaxed">
            Buyer representation is typically at no extra cost to you on participating builder sales
            — the builder pays the cooperating commission from its marketing budget. Confirm the fee
            arrangement in writing before you tour. Going to the model-home desk without
            representation does not make the home cheaper. Call (702) 707-7273 to confirm today’s
            sheet for the community you want.
          </p>
        </div>
      </div>
    </section>
  );
}
