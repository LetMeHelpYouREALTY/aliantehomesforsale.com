'use client';

import Link from 'next/link';
import { siteConfig } from '../../lib/site-config';
import ExternalLink from './ExternalLink';

export default function GolfHomesContent() {
  return (
    <>
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: '#1a365d' }}>
            Club Aliante golf-course realtor services in ZIP 89084
          </h2>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p className="leading-relaxed">
              Golf-course homes in Aliante sit next to the city-owned{' '}
              <ExternalLink
                href={siteConfig.official.alianteGolf}
                className="text-blue-600 hover:text-blue-800 font-semibold hover:underline"
              >
                Aliante Golf Club
              </ExternalLink>
              , an 18-hole public course designed by Gary Panks — not Palm Valley in Sun City
              Summerlin, and not a Billy Casper layout.{' '}
              <Link
                href="/neighborhoods/club-aliante"
                className="text-blue-600 hover:text-blue-800 font-semibold hover:underline"
              >
                Club Aliante
              </Link>{' '}
              is the guard-gated village along those fairways. Lot position matters: corner views,
              fairway versus green, and par-5 versus par-3 frontage. Confirm live MLS rather than a
              stale count. Browse current{' '}
              <Link
                href="/homes-for-sale"
                className="text-blue-600 hover:text-blue-800 font-semibold hover:underline"
              >
                homes for sale
              </Link>{' '}
              to see available golf course properties.
            </p>

            <p className="leading-relaxed">
              Not all golf-course lots price the same. Corner lots with views of more than one hole
              often trade differently than a single-fairway lot. Homes on fairways versus greens
              have different noise and foot-traffic profiles. Lots next to par-5s see more
              errant-ball risk and longer sightlines; par-3 frontage is shorter. I compare lot
              position, HOA rules, and live comps for the address you will actually buy. I will not
              publish a golf-course premium percentage.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#2c5aa0' }}>
              Club Aliante golf access vs home ownership
            </h3>

            <p className="leading-relaxed">
              Owning a home on the Club Aliante golf course sits next to the city-owned{' '}
              <ExternalLink
                href={siteConfig.official.alianteGolf}
                className="text-blue-600 hover:text-blue-800 font-semibold hover:underline"
              >
                Aliante Golf Club
              </ExternalLink>
              , though formal club membership is separate from home ownership. Confirm current
              tee-time, dining, and practice-facility rules with the course — I will not publish
              member benefits that can change. The course also takes daily-fee play; membership is
              optional.
            </p>

            <p className="leading-relaxed">
              Beyond golf, Club Aliante includes fitness rooms, swimming pools, tennis and
              pickleball courts, and clubhouse dining. Confirm current amenity hours and fees with
              the association. Some owners on fairway lots are not golfers — they buy the open space
              and the view. The course is a long-term neighbor, not a guaranteed value premium.
              Confirm live comps for that lot.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8" style={{ color: '#1a365d' }}>
            Comps, buyer pool, and resale on fairway lots
          </h2>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p className="leading-relaxed">
              Golf course properties appeal to a smaller buyer pool but can hold value when the
              course view is the point of the purchase. Supply of fairway lots in Aliante is finite.
              Confirm live comps — days on market for golf lots can run longer than open-access
              streets.
            </p>

            <p className="leading-relaxed">
              From a resale perspective, fairway lots draw a smaller buyer pool than interior
              streets. Confirm live comps — I will not claim a golf premium or that every showing is
              a serious offer. Marketing still depends on photography, list price, and the week.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#2c5aa0' }}>
              Golf-course living: balls, dawn tee times, and views
            </h3>

            <p className="leading-relaxed">
              Potential buyers should understand both the benefits and considerations of golf course
              living before making their purchase. The primary consideration is errant golf balls –
              homes located along fairways will occasionally receive wayward shots, particularly
              from amateur players. Most golf course homeowners accept this as a minor trade-off for
              the views and open space, but it's important to acknowledge. Installing
              impact-resistant windows on golf course-facing sides and creating covered patios
              provides protection while maintaining the open feel these properties offer.
            </p>

            <p className="leading-relaxed">
              Early morning play can be audible from some lots. Confirm tee-time hours and
              errant-ball history for the lot before you offer. Views, HOA rules, and live comps
              still decide value — I will not publish a satisfaction rate or a quiet-hours schedule
              I have not verified with the club.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8" style={{ color: '#1a365d' }}>
            How I tour Aliante golf-course lots
          </h2>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p className="leading-relaxed">
              I tour fairway lots in Aliante with you and walk lot position, view corridors,
              errant-ball exposure, sun, and recent comps. Some listings linger because the photos
              miss the course — I check those against live MLS and negotiate from there.
            </p>

            <p className="leading-relaxed">
              When evaluating golf-course lots, I schedule more than one showing when the calendar
              allows — morning tee times and quieter hours sound different. Confirm errant-ball
              history and live comps for that lot. I will not publish a quiet-hours schedule I have
              not verified with the club.
            </p>

            <p className="leading-relaxed">
              Fairway lots and interior lots with course views both come up on live MLS. Contact me
              to schedule showings and confirm lot position, HOA rules, and list price before you
              offer. I represent you on the purchase.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
