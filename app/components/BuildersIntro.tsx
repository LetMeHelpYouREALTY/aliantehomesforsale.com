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
            communities, inventory, and incentive programs on this month’s sheet. Whether you're a
            first-time buyer looking for an affordable entry point or a luxury home buyer seeking
            the finest finishes and locations, I can guide you to the perfect match.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#2c5aa0' }}>
            The Advantages of Building New in 2026
          </h3>

          <p className="leading-relaxed">
            Today's new construction homes offer unprecedented value through builder incentives,
            energy efficiency, and modern design. Current market conditions have created a unique
            opportunity where builders are offering aggressive incentives to meet their quarterly
            sales goals. Incentives can include closing-cost credits, upgrades, and rate buydowns —
            confirm today’s sheet before you write. I will not publish a stale dollar amount.
          </p>

          <p className="leading-relaxed">
            Beyond the immediate financial benefits, new construction homes in Aliante feature the
            latest in energy-efficient technology, smart home integration, and open-concept designs
            that today's buyers demand. You'll enjoy 10-year structural warranties, modern
            electrical and plumbing systems designed for today's lifestyle, and peace of mind
            knowing that every component is brand new and covered under warranty. The ability to
            customize your home during the build process means you can create a space that perfectly
            matches the floor plan you want without the cost and hassle of renovations. Learn more
            about{' '}
            <Link
              href="/neighborhoods/tule-springs"
              className="text-blue-600 hover:text-blue-800 font-semibold hover:underline"
            >
              Villages at Tule Springs
            </Link>
            , our newest master-planned community with cutting-edge new construction.
          </p>
        </div>
      </div>
    </section>
  );
}
