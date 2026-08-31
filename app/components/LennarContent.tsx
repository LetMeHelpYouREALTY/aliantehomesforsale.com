import Link from 'next/link';
import { siteConfig } from '../../lib/site-config';
import ExternalLink from './ExternalLink';

/** Unique Lennar copy. Lennar still sells inside Aliante ZIP 89084. */
export default function LennarContent() {
  const officialUrl =
    siteConfig.builders.find((builder) => builder.slug === 'lennar')?.officialUrl ??
    'https://www.lennar.com/';

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto prose prose-lg text-gray-700">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: '#1a365d' }}>
          Lennar in Aliante ZIP 89084 — independent buyer representation
        </h2>
        <p className="leading-relaxed">
          Lennar still sells new construction inside the Aliante master plan in North Las Vegas
          89084. I represent you on that contract — not the sales desk. Confirm live spec homes, lot
          premiums, and the current incentive sheet before you write. Call {siteConfig.phone}.
        </p>
        <p className="leading-relaxed">
          Compare Lennar with{' '}
          <Link href="/homes-for-sale" className="font-semibold" style={{ color: '#2c5aa0' }}>
            Aliante resale
          </Link>
          ,{' '}
          <Link href="/builders/del-webb" className="font-semibold" style={{ color: '#2c5aa0' }}>
            Del Webb at Sun City Aliante
          </Link>
          , and{' '}
          <Link href="/builders/dr-horton" className="font-semibold" style={{ color: '#2c5aa0' }}>
            D.R. Horton at Tule Springs
          </Link>{' '}
          if you also want a nearby new-construction option that is not an Aliante address. Confirm
          collections on the{' '}
          <ExternalLink href={officialUrl} className="font-semibold text-[#2c5aa0] hover:underline">
            official Lennar website
          </ExternalLink>
          , then register with me before the model so representation is in writing.
        </p>
      </div>
    </section>
  );
}
