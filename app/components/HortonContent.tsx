import Link from 'next/link';
import { siteConfig } from '../../lib/site-config';
import ExternalLink from './ExternalLink';

/** Unique D.R. Horton copy. Villages at Tule Springs is east of Aliante, not ZIP 89084. */
export default function HortonContent() {
  const officialUrl =
    siteConfig.builders.find((builder) => builder.slug === 'dr-horton')?.officialUrl ??
    'https://www.drhorton.com/';

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto prose prose-lg text-gray-700">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: '#1a365d' }}>
          D.R. Horton at Villages at Tule Springs — east of Aliante, not ZIP 89084
        </h2>
        <p className="leading-relaxed">
          D.R. Horton is the builder most buyers ask about at{' '}
          <Link
            href="/neighborhoods/tule-springs"
            className="font-semibold"
            style={{ color: '#2c5aa0' }}
          >
            Villages at Tule Springs
          </Link>
          . That map is east of the Aliante master plan, near Floyd Lamb Park. It is not a
          substitute for an Aliante 89084 address. Confirm live inventory, remaining lots, and the
          current incentive sheet before you tour. Call {siteConfig.phone}.
        </p>
        <p className="leading-relaxed">
          I compare Horton new construction with{' '}
          <Link href="/homes-for-sale" className="font-semibold" style={{ color: '#2c5aa0' }}>
            Aliante resale
          </Link>{' '}
          and{' '}
          <Link href="/builders/lennar" className="font-semibold" style={{ color: '#2c5aa0' }}>
            Lennar in ZIP 89084
          </Link>{' '}
          so you know which address you are actually buying. Confirm collections on the{' '}
          <ExternalLink href={officialUrl} className="font-semibold text-[#2c5aa0] hover:underline">
            official D.R. Horton website
          </ExternalLink>
          , then register with me before the model so representation is documented.
        </p>
      </div>
    </section>
  );
}
