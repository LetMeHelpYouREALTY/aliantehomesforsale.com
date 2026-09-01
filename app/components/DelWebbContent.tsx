import Link from 'next/link';
import { siteConfig } from '../../lib/site-config';
import ExternalLink from './ExternalLink';

/** Unique Del Webb copy. Age-qualified new construction inside Aliante ZIP 89084. */
export default function DelWebbContent() {
  const officialUrl =
    siteConfig.builders.find((builder) => builder.slug === 'del-webb')?.officialUrl ??
    'https://www.delwebb.com/';

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto prose prose-lg text-gray-700">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: '#1a365d' }}>
          Del Webb at Sun City Aliante — independent buyer representation in ZIP 89084
        </h2>
        <p className="leading-relaxed">
          Del Webb still sells age-qualified inventory inside{' '}
          <Link href="/sun-city-aliante" className="font-semibold" style={{ color: '#2c5aa0' }}>
            Sun City Aliante
          </Link>
          , ZIP 89084 — not Ardiente (89081), not Del Webb Summerlin. I represent you on that
          contract — not the sales desk. Confirm live spec homes, occupancy rules, and the current
          incentive sheet before you write. Call {siteConfig.phone}.
        </p>
        <p className="leading-relaxed">
          Compare Del Webb with{' '}
          <Link href="/homes-for-sale" className="font-semibold" style={{ color: '#2c5aa0' }}>
            Aliante resale
          </Link>{' '}
          and{' '}
          <Link href="/builders/lennar" className="font-semibold" style={{ color: '#2c5aa0' }}>
            Lennar in ZIP 89084
          </Link>
          . Confirm collections on the{' '}
          <ExternalLink href={officialUrl} className="font-semibold text-[#2c5aa0] hover:underline">
            official Del Webb website
          </ExternalLink>
          , then register with me before the model so representation is in writing. Village
          amenities, floor plans, and occupancy rules live on the Sun City Aliante page — confirm
          story count on the listing.
        </p>
      </div>
    </section>
  );
}
