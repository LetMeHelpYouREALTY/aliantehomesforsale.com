'use client';

import Link from 'next/link';

export default function BuilderAdvantages() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8" style={{ color: '#1a365d' }}>
          How to compare builders near Aliante 89084
        </h2>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
          <p className="leading-relaxed">
            I compare the live builder map with you: Lennar and Del Webb inside ZIP 89084, D.R.
            Horton in nearby Tule Springs, and Tri Pointe, Toll Brothers, and Richmond American only
            where they currently have inventory — not as a substitute for an Aliante address.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#2c5aa0' }}>
            Volume builders vs. more-custom collections
          </h3>

          <p className="leading-relaxed">
            Volume builders like{' '}
            <Link
              href="/builders/lennar"
              className="text-blue-600 hover:text-blue-800 font-semibold hover:underline"
            >
              Lennar
            </Link>{' '}
            and{' '}
            <Link
              href="/builders/dr-horton"
              className="text-blue-600 hover:text-blue-800 font-semibold hover:underline"
            >
              D.R. Horton
            </Link>{' '}
            focus on included-feature packages and spec inventory. Spec and quick-move-in homes can
            close faster than a to-be-built lot — confirm the current close date. Confirm the live
            price sheet; I will not call any builder the better value.
          </p>

          <p className="leading-relaxed">
            <Link
              href="/builders/toll-brothers"
              className="text-blue-600 hover:text-blue-800 font-semibold hover:underline"
            >
              Toll Brothers
            </Link>{' '}
            (Elkhorn Grove, Las Vegas 89131) and{' '}
            <Link
              href="/builders/tri-pointe"
              className="text-blue-600 hover:text-blue-800 font-semibold hover:underline"
            >
              Tri Pointe
            </Link>{' '}
            (northwest Las Vegas collections such as Kyle Pointe and Citrine) are not currently
            building inside Aliante ZIP 89084. They typically offer more option packages and longer
            build calendars than volume builders. Confirm finishes, warranties, and close dates on
            that community’s sheet. Use them as a comparison to Aliante resale or Lennar inventory,
            not as an Aliante address. For buy-and-hold math on an 89084 lot, see{' '}
            <Link
              href="/investment-analysis"
              className="text-blue-600 hover:text-blue-800 font-semibold hover:underline"
            >
              investment analysis
            </Link>
            .
          </p>

          <p className="leading-relaxed">
            Understanding these differences matters because a spec home and a more-custom collection
            run on different calendars. A buyer who needs a sooner close date may not want a long
            option cycle, while someone who wants more design-center choices may not want a
            volume-builder package. I'll ask about timeline, budget, and must-have features, then
            match that to the live builder map.
          </p>
        </div>
      </div>
    </section>
  );
}
