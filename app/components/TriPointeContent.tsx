import Link from 'next/link';
import { siteConfig } from '../../lib/site-config';

/** Unique Tri Pointe copy. Official 2026 communities are northwest valley, not inside Aliante 89084. */
export default function TriPointeContent() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto prose prose-lg text-gray-700">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: '#1a365d' }}>
          Tri Pointe Homes Las Vegas — not inside Aliante ZIP 89084
        </h2>
        <p className="leading-relaxed">
          Searches for Tri Pointe Homes Las Vegas often hit this Aliante site. As of August 31,
          2026, Tri Pointe’s published new-home map does not list an active community inside the
          Aliante master plan (89084). Current northwest collections include Kyle Pointe (Alder,
          Alpine Ridge, Arrow Peak) and Citrine near Skye Canyon. I still represent you if you tour
          those models and want to compare them with{' '}
          <Link href="/homes-for-sale" className="font-semibold" style={{ color: '#2c5aa0' }}>
            Aliante resale homes
          </Link>
          . Call {siteConfig.phone}.
        </p>
        <h3 className="text-2xl font-bold mt-10 mb-4" style={{ color: '#2c5aa0' }}>
          Compare Tri Pointe with builders you can actually tour for Aliante
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <Link href="/builders/lennar" className="font-semibold" style={{ color: '#2c5aa0' }}>
              Lennar in Aliante
            </Link>{' '}
            — volume new construction still selling in the 89084 corridor.
          </li>
          <li>
            <Link href="/builders/dr-horton" className="font-semibold" style={{ color: '#2c5aa0' }}>
              D.R. Horton at Tule Springs
            </Link>{' '}
            — nearby North Las Vegas new construction.
          </li>
          <li>
            <Link href="/builders/del-webb" className="font-semibold" style={{ color: '#2c5aa0' }}>
              Del Webb at Sun City Aliante
            </Link>{' '}
            — 55+ product inside the master plan.
          </li>
          <li>
            <Link
              href="/builders/toll-brothers"
              className="font-semibold"
              style={{ color: '#2c5aa0' }}
            >
              Toll Brothers in 89131
            </Link>{' '}
            — Elkhorn Grove (89131) and Summerlin collections, not inside 89084.
          </li>
        </ul>
        <p className="leading-relaxed">
          Builder incentives change. I confirm the live sheet before you offer. See{' '}
          <Link href="/builders/incentives" className="font-semibold" style={{ color: '#2c5aa0' }}>
            builder incentives
          </Link>{' '}
          and{' '}
          <Link href="/new-construction" className="font-semibold" style={{ color: '#2c5aa0' }}>
            North Las Vegas home builders
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
