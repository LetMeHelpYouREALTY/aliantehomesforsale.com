'use client';

import Link from 'next/link';

export default function TuleSpringsContent() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: '#1a365d' }}>
          Villages at Tule Springs — east of Aliante, not ZIP 89084
        </h2>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
          <p className="leading-relaxed">
            Villages at Tule Springs is new construction east of the Aliante master plan, near Floyd
            Lamb Park. It is not inside Aliante ZIP 89084. I compare Tule Springs inventory with
            Aliante resale so you know which address you are actually buying. Confirm live list
            prices, remaining lots, and incentive sheets before you tour.
          </p>

          <p className="leading-relaxed">
            <Link
              href="/builders/dr-horton"
              className="text-blue-600 hover:text-blue-800 font-semibold hover:underline"
            >
              D.R. Horton
            </Link>{' '}
            is the builder most buyers ask about here. Lennar and Del Webb still sell inside Aliante
            89084. I represent you on the builder contract — not the sales desk. Confirm the fee in
            writing before you tour.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#2c5aa0' }}>
            How I compare Tule Springs with Aliante resale
          </h3>

          <p className="leading-relaxed">
            New construction and Aliante resale run on different calendars, HOA documents, and lot
            maps. Walk remaining lots, included features, and commute to the I-215 from that street
            — I will not publish a stale close-date or a Tule Springs vs Aliante premium. Browse{' '}
            <Link
              href="/homes-for-sale"
              className="text-blue-600 hover:text-blue-800 font-semibold hover:underline"
            >
              Aliante MLS listings
            </Link>{' '}
            and{' '}
            <Link
              href="/new-construction"
              className="text-blue-600 hover:text-blue-800 font-semibold hover:underline"
            >
              North Las Vegas new construction
            </Link>{' '}
            side by side before you write.
          </p>
        </div>
      </div>
    </section>
  );
}
