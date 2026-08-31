'use client';

import Link from 'next/link';

export default function BuilderAdvantages() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8" style={{ color: '#1a365d' }}>
          How to Choose the Right Builder in Aliante
        </h2>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
          <p className="leading-relaxed">
            Selecting the right builder is one of the most important decisions you'll make in the
            home buying process. Each builder has their own construction philosophy, target market,
            and standard features that make them uniquely suited to different buyer profiles. As
            someone who works closely with every major builder in the Aliante area, I can provide
            insider perspective on which builder will best match your priorities, budget, and
            timeline.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#2c5aa0' }}>
            Volume Builders vs. Luxury Builders
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
            focus on efficiency and value, offering move-in-ready homes with comprehensive included
            features at competitive price points. These builders typically have shorter build times
            (3-4 months for quick move-in homes), established floor plans with proven layouts, and
            streamlined construction processes that minimize delays. They're ideal for{' '}
            <Link
              href="/buyer-guide"
              className="text-blue-600 hover:text-blue-800 font-semibold hover:underline"
            >
              first-time buyers
            </Link>{' '}
            and buyers who want included features and a shorter path to occupancy.
          </p>

          <p className="leading-relaxed">
            Luxury builders like{' '}
            <Link
              href="/builders/toll-brothers"
              className="text-blue-600 hover:text-blue-800 font-semibold hover:underline"
            >
              Toll Brothers
            </Link>{' '}
            and{' '}
            <Link
              href="/builders/tri-pointe"
              className="text-blue-600 hover:text-blue-800 font-semibold hover:underline"
            >
              Tri Pointe
            </Link>{' '}
            take a different approach, emphasizing premium materials, architectural detail, and
            extensive customization options. Build times are longer (typically 6-8 months), but the
            result is a home with superior craftsmanship, high-end finishes as standard features,
            and the ability to truly personalize every aspect of your home. These builders are
            perfect for move-up buyers, luxury home seekers, and those who view their home as a
            long-term{' '}
            <Link
              href="/investment-analysis"
              className="text-blue-600 hover:text-blue-800 font-semibold hover:underline"
            >
              investment
            </Link>{' '}
            in quality and design.
          </p>

          <p className="leading-relaxed">
            Understanding these differences is crucial because the wrong match can lead to
            frustration during the building process. A buyer who prioritizes getting into their home
            quickly may become frustrated with a luxury builder's longer timeline, while someone
            seeking extensive customization may feel limited by a volume builder's structured
            options. That's where my expertise becomes invaluable – I'll ask the right questions
            about your priorities, timeline, and must-have features to guide you to the builder who
            will deliver the best overall experience for your unique situation.
          </p>
        </div>
      </div>
    </section>
  );
}
