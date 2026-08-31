'use client';

import Link from 'next/link';
import { siteConfig } from '../../lib/site-config';
import ExternalLink from './ExternalLink';

export default function SchoolsContent() {
  return (
    <>
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: '#1a365d' }}>
            Named campuses serving Aliante, North Las Vegas 89084
          </h2>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p className="leading-relaxed">
              I name the campus that currently serves an Aliante street address and confirm Clark
              County School District attendance boundaries before you offer — boundaries change.
              Campuses serving ZIP 89084 include Leavitt Elementary, Kit Carson Elementary, Homer
              Elementary, Brinley Middle School, and either Centennial High School or Legacy High
              School, depending on the street. View{' '}
              <Link
                href="/neighborhoods"
                className="text-blue-600 hover:text-blue-800 font-semibold hover:underline"
              >
                Aliante neighborhoods
              </Link>{' '}
              by village, or browse{' '}
              <Link
                href="/homes-for-sale"
                className="text-blue-600 hover:text-blue-800 font-semibold hover:underline"
              >
                homes for sale
              </Link>{' '}
              near a named campus.
            </p>

            <p className="leading-relaxed">
              Listing remarks are not an attendance guarantee. A village name is not a boundary. I
              match the lot to the current CCSD map and tell you how to confirm it with the district
              before you write. Use the{' '}
              <ExternalLink
                href={siteConfig.official.ccsdZoning}
                className="text-blue-600 hover:text-blue-800 font-semibold hover:underline"
              >
                Clark County School District zoning search
              </ExternalLink>{' '}
              for the address you will actually buy.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#2c5aa0' }}>
              Elementary campuses serving parts of Aliante
            </h3>

            <p className="leading-relaxed">
              Elementary campuses that currently serve parts of Aliante include Leavitt Elementary,
              Kit Carson Elementary, and Homer Elementary. Confirm which campus serves the lot you
              want. Ask the school office for current programs, hours, and transportation — not a
              star rating in a listing.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8" style={{ color: '#1a365d' }}>
            Middle and high school campuses
          </h2>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p className="leading-relaxed">
              Streets in Aliante typically feed Brinley Middle School, then Centennial High School
              or Legacy High School. Confirm the current map for the address you will actually buy.
              Ask each campus about course catalogs, athletics, and commute time from that street to
              the I-215 Beltway.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#2c5aa0' }}>
              Other schooling options nearby
            </h3>

            <p className="leading-relaxed">
              Private, charter, and online public programs operate in the Las Vegas valley. I name
              the campus that currently serves an address; I do not rank schools or steer by program
              type. Confirm enrollment rules with the school.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8" style={{ color: '#1a365d' }}>
            How I use campus names when we tour
          </h2>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p className="leading-relaxed">
              Pair the named campus with square footage, HOA rules, and drive time to the 215. I
              will not quote a “school-quality premium” or a neighborhood rating. Confirm the
              attendance map with{' '}
              <ExternalLink
                href={siteConfig.official.ccsdZoning}
                className="text-blue-600 hover:text-blue-800 font-semibold hover:underline"
              >
                Clark County School District zoning
              </ExternalLink>{' '}
              before you offer.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
