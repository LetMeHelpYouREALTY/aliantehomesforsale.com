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
              I name campuses that currently have North Las Vegas 89084 addresses and confirm Clark
              County School District attendance for the lot you will actually buy — ZIP code is not
              a boundary, and boundaries change. CCSD campuses in 89084 include Vincent L. Triggs
              Elementary (4470 W. Rome Blvd), Theron H. and Naomi D. Goynes Elementary (3409 W. Deer
              Springs Way), Don E. Hayden Elementary (150 W. Rome Blvd), Ruby Duncan Elementary (250
              W. Rome Blvd), Brian & Teri Cram Middle School (1900 W. Deer Springs Way), and Legacy
              High School (150 W. Deer Springs Way). View{' '}
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
              Elementary campuses with 89084 addresses
            </h3>

            <p className="leading-relaxed">
              Elementary campuses in ZIP 89084 include Triggs Elementary, Goynes Elementary, Hayden
              Elementary, and Duncan Elementary. Confirm which campus serves the Aliante street you
              want — those lots do not all feed the same elementary. Ask the school office for
              current programs, hours, and transportation — not a star rating in a listing.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8" style={{ color: '#1a365d' }}>
            Middle and high school campuses in ZIP 89084
          </h2>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p className="leading-relaxed">
              Brian & Teri Cram Middle School and Legacy High School both sit on Deer Springs Way in
              ZIP 89084. Confirm the current map for the address you will actually buy rather than
              assuming every Aliante street feeds those two campuses. Ask each campus about course
              catalogs, athletics, and commute time from that street to the I-215 Beltway.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#2c5aa0' }}>
              Other schooling options nearby
            </h3>

            <p className="leading-relaxed">
              Somerset Academy Aliante (6475 Valley Drive, 89084) is a state-sponsored charter, not
              a CCSD zoned campus — confirm enrollment with the school. Private, charter, and online
              public programs also operate in the Las Vegas valley. I name the campus that currently
              serves an address; I do not rank schools or steer by program type. Confirm enrollment
              rules with the school.
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
