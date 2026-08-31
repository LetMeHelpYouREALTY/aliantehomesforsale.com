import Link from 'next/link';
import { siteConfig } from '../../lib/site-config';

/**
 * Unique Toll Brothers copy for Aliante buyers.
 * Community names sourced from Toll Brothers Nevada listings (checked 2026-08-31).
 * Do not invent Aliante inventory, rates, or lot counts.
 */
export default function TollBrothersContent() {
  const { address, phone, phoneTel, hours, maps, siteName, agentName } = siteConfig;
  const fullAddress = `${address.streetAddress}, ${address.addressLocality}, ${address.addressRegion} ${address.postalCode}`;

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto prose prose-lg text-gray-700">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: '#1a365d' }}>
          Toll Brothers does not currently build inside Aliante 89084
        </h2>
        <p className="leading-relaxed">
          Aliante is a finished North Las Vegas master plan. Toll Brothers is not selling new homes
          inside ZIP 89084 today. Buyers still compare Toll Brothers when they want a luxury
          product, RV options, or a Summerlin address. I represent you, not the builder. Call{' '}
          <a href={`tel:${phoneTel}`} className="font-semibold" style={{ color: '#2c5aa0' }}>
            {phone}
          </a>
          .
        </p>

        <h3 className="text-2xl font-bold mt-10 mb-4" style={{ color: '#2c5aa0' }}>
          Closest Toll Brothers community to Aliante
        </h3>
        <p className="leading-relaxed">
          Elkhorn Grove sits at 5819 Kings Bluff Ave, Las Vegas, NV 89131. That is northwest Las
          Vegas, not the Aliante master plan. Toll Brothers lists Club Aliante golf about six
          minutes away. The community is gated, with Sentinel and Regalia single-family collections.
          RV garage and RV parking options are published on the builder site. Confirm current
          homesites and incentives before you write an offer.
        </p>

        <h3 className="text-2xl font-bold mt-10 mb-4" style={{ color: '#2c5aa0' }}>
          Other Clark County Toll Brothers collections (August 2026)
        </h3>
        <p className="leading-relaxed">
          Names below come from Toll Brothers’ Nevada listings, checked August 31, 2026. Starting
          prices and incentives change. I confirm the live number with the sales office before you
          commit.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Toll Brothers at Skye Canyon</strong> — Paloma Collection, gated northwest Las
            Vegas, two-story plans.
          </li>
          <li>
            <strong>Toll Brothers at Ascension</strong> — Crestline and Highrock collections in
            Summerlin’s Peaks village.
          </li>
          <li>
            <strong>Glenrock</strong> and <strong>Crestwood Ranch</strong> — larger Summerlin-area
            single-family plans.
          </li>
          <li>
            <strong>Cordillera</strong> and <strong>Raven Crest</strong> — attached townhomes.
          </li>
          <li>
            <strong>Mira Villa</strong> and <strong>The Loughton</strong> — condo product; Mira
            Villa listed as a final opportunity.
          </li>
          <li>
            <strong>Reflection Ridge</strong> — Summerlin coming-soon community, anticipated to open
            for sale in September 2026.
          </li>
          <li>
            <strong>Toll Brothers at Inspirada</strong>, <strong>Incanta Lago</strong>, and{' '}
            <strong>Liberty Ridge</strong> — Henderson and Boulder City, farther from Aliante.
          </li>
        </ul>

        <h3 className="text-2xl font-bold mt-10 mb-4" style={{ color: '#2c5aa0' }}>
          Compare Toll Brothers with builders actually in Aliante
        </h3>
        <p className="leading-relaxed">
          If you want a new home inside Aliante or Tule Springs, start with the builders who still
          sell there. I run both tours the same week so you can compare commute, lot premiums, and
          included finishes.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <Link href="/builders/lennar" className="font-semibold" style={{ color: '#2c5aa0' }}>
              Lennar homes in Aliante
            </Link>{' '}
            — volume product, included smart-home package, shorter build times.
          </li>
          <li>
            <Link href="/builders/dr-horton" className="font-semibold" style={{ color: '#2c5aa0' }}>
              D.R. Horton in Tule Springs
            </Link>{' '}
            — nearby new construction east of Aliante.
          </li>
          <li>
            <Link
              href="/builders/tri-pointe"
              className="font-semibold"
              style={{ color: '#2c5aa0' }}
            >
              Tri Pointe luxury homes
            </Link>{' '}
            — higher-spec alternative without leaving the North Las Vegas corridor.
          </li>
          <li>
            <Link href="/builders/del-webb" className="font-semibold" style={{ color: '#2c5aa0' }}>
              Del Webb at Sun City Aliante
            </Link>{' '}
            — 55+ active-adult product inside the master plan.
          </li>
        </ul>
        <p className="leading-relaxed">
          See current{' '}
          <Link href="/builders/incentives" className="font-semibold" style={{ color: '#2c5aa0' }}>
            builder incentives
          </Link>{' '}
          and the{' '}
          <Link href="/new-construction" className="font-semibold" style={{ color: '#2c5aa0' }}>
            Aliante new construction overview
          </Link>
          . Browse{' '}
          <Link href="/homes-for-sale" className="font-semibold" style={{ color: '#2c5aa0' }}>
            Aliante MLS homes for sale
          </Link>{' '}
          if a resale in 89084 beats a drive to 89131.
        </p>

        <h3 className="text-2xl font-bold mt-10 mb-4" style={{ color: '#2c5aa0' }}>
          Independent buyer representation costs you nothing extra
        </h3>
        <p className="leading-relaxed">
          Toll Brothers sales staff represent the builder. I represent you. The builder still pays
          the buyer-broker fee from their marketing budget. I review the purchase agreement, option
          list, and lender incentives, and I walk the home before you accept it. That is the same
          process I use with Lennar and D.R. Horton in Aliante.
        </p>
        <p className="leading-relaxed">
          {agentName}, Nevada license {siteConfig.agentLicense}, {siteConfig.brokerage}. Office
          hours {hours.weekday}; {hours.weekend}.
        </p>

        <div className="not-prose mt-10 rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-8">
          <h3 className="text-2xl font-bold mb-3" style={{ color: '#1a365d' }}>
            {siteName}
          </h3>
          <p className="text-gray-700 mb-4">
            {agentName} · {fullAddress} · {phone}
          </p>
          <p className="text-gray-700 mb-6">
            {hours.weekday} · {hours.weekend}
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <a
              href={`tel:${phoneTel}`}
              className="inline-flex justify-center items-center px-6 py-3 rounded-lg font-semibold text-white"
              style={{ backgroundColor: '#ed8936' }}
            >
              Call {phone}
            </a>
            <a
              href={maps.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center px-6 py-3 rounded-lg font-semibold text-white"
              style={{ backgroundColor: '#2c5aa0' }}
            >
              Directions
            </a>
            <a
              href={maps.placeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center px-6 py-3 rounded-lg font-semibold border-2"
              style={{ borderColor: '#2c5aa0', color: '#2c5aa0' }}
            >
              View Google Reviews
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
