'use client';

import Link from 'next/link';
import { siteConfig } from '../../lib/site-config';
import ExternalLink from './ExternalLink';

export default function SunCityContent() {
  return (
    <>
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: '#1a365d' }}>
            Sun City Aliante 55+ realtor services in North Las Vegas 89084
          </h2>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p className="leading-relaxed">
              Sun City Aliante is a Del Webb 55+ village inside ZIP 89084 — not Ardiente (89081).
              Amenities include a recreation campus, clubs, and low-maintenance floor plans. Confirm
              current inventory on live MLS. Developed by{' '}
              <Link
                href="/builders/del-webb"
                className="text-blue-600 hover:text-blue-800 font-semibold hover:underline"
              >
                Del Webb
              </Link>
              , it sits inside the larger Aliante master plan. Compare it with other{' '}
              <Link
                href="/neighborhoods"
                className="text-blue-600 hover:text-blue-800 font-semibold hover:underline"
              >
                Aliante neighborhoods
              </Link>{' '}
              or browse current{' '}
              <Link
                href="/homes-for-sale"
                className="text-blue-600 hover:text-blue-800 font-semibold hover:underline"
              >
                homes for sale
              </Link>{' '}
              in Sun City Aliante.
            </p>

            <p className="leading-relaxed">
              I represent 55+ buyers on occupancy rules, HOA documents, and lot position.
              Single-story plans, proximity to the recreation campus or Aliante Golf Club, and club
              access still vary by address. Confirm live MLS inventory and list prices — I will not
              publish a stale count or range.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#2c5aa0' }}>
              Recreation campuses and Aliante Golf Club from Sun City
            </h3>

            <p className="leading-relaxed">
              Sun City Aliante recreation campuses typically include fitness rooms, pools, tennis
              and pickleball courts, and meeting rooms for clubs. Confirm current hours, fees, and
              guest rules with the association — amenity lists change. The 18-hole{' '}
              <ExternalLink
                href={siteConfig.official.alianteGolf}
                className="text-blue-600 hover:text-blue-800 font-semibold hover:underline"
              >
                Aliante Golf Club
              </ExternalLink>{' '}
              (Gary Panks, city-owned and open to the public) runs through the broader Aliante plan.
              Palm Valley is a different course in Sun City Summerlin — do not confuse the two.
              Confirm current resident rates and tee-time rules with the club.
            </p>

            <p className="leading-relaxed">
              Club calendars, craft rooms, and interest groups change with the HOA. Confirm current
              clubs, fees, and occupancy rules with the association before you offer — I will not
              publish a stale club roster.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8" style={{ color: '#1a365d' }}>
            Sun City Aliante floor plans in ZIP 89084
          </h2>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p className="leading-relaxed">
              Sun City Aliante plans are built for 55+ occupancy. Many listings are single-story
              with a primary suite on the main floor — confirm bed/bath count, stairs, and finishes
              on that MLS number. Open-concept kitchens and flex rooms show up on some plans, not
              all. I will not hard-code a size range.
            </p>

            <p className="leading-relaxed">
              Outdoor living receives special emphasis, with many homes featuring covered patios and
              low-maintenance desert landscaping. Some properties include casitas or guest suites.
              Confirm square footage, bed/bath count, and lot type on the live listing — I will not
              hard-code a size range here.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#2c5aa0' }}>
              Drive times to care and services from Sun City Aliante
            </h3>

            <p className="leading-relaxed">
              North Vista Hospital is in North Las Vegas. Confirm drive time from the specific Sun
              City Aliante address you will buy. Primary-care offices, urgent care, and imaging
              facilities also operate in North Las Vegas — I name the ones near that street rather
              than a valley-wide list.
            </p>

            <p className="leading-relaxed">
              Shopping and services sit along Aliante Parkway and nearby North Las Vegas corridors:
              grocery stores, pharmacies, banks, and restaurants. Confirm which locations serve the
              street you will actually buy. The I-215 Beltway connects Aliante to Harry Reid
              International Airport and the rest of the valley — confirm drive time from that
              address.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8" style={{ color: '#1a365d' }}>
            HOA dues, occupancy rules, and live comps
          </h2>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p className="leading-relaxed">
              Confirm live list prices and price per square foot against other 55+ communities in
              Southern Nevada — I will not publish a stale discount. Amenities, HOA dues, and
              occupancy rules still decide fit. Nevada has no state income tax; confirm current tax
              treatment of pension, IRA, and Social Security income with a CPA, not this listing
              page.
            </p>

            <p className="leading-relaxed">
              Sun City Aliante is built around clubs, fitness, and low-maintenance lots. Confirm
              current amenities, HOA fees, and occupancy rules with the association before you
              offer. I represent you on the purchase — I will not publish unverified resident
              testimonials.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
