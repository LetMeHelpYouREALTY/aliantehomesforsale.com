import Link from 'next/link';
import { siteConfig } from '../../lib/site-config';
import ExternalLink from './ExternalLink';

/** Unique Toll Brothers copy. Elkhorn Grove is 89131, not inside Aliante 89084. */
export default function TollBrothersContent() {
  const officialUrl =
    siteConfig.builders.find((builder) => builder.slug === 'toll-brothers')?.officialUrl ??
    'https://www.tollbrothers.com/';

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto prose prose-lg text-gray-700">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: '#1a365d' }}>
          Toll Brothers near Aliante — Elkhorn Grove, Las Vegas 89131, not ZIP 89084
        </h2>
        <p className="leading-relaxed">
          Toll Brothers is not currently building inside the Aliante master plan. The closest
          published community is Elkhorn Grove at 5819 Kings Bluff Ave, Las Vegas NV 89131. Confirm
          live inventory on the Toll sheet before you tour. I still represent you if you compare
          Elkhorn Grove with{' '}
          <Link href="/homes-for-sale" className="font-semibold" style={{ color: '#2c5aa0' }}>
            Aliante resale
          </Link>{' '}
          or{' '}
          <Link href="/builders/lennar" className="font-semibold" style={{ color: '#2c5aa0' }}>
            Lennar in ZIP 89084
          </Link>
          . Call {siteConfig.phone}.
        </p>
        <p className="leading-relaxed">
          Confirm collections and incentive headlines on the{' '}
          <ExternalLink href={officialUrl} className="font-semibold text-[#2c5aa0] hover:underline">
            official Toll Brothers website
          </ExternalLink>
          , then register with me before the model so representation is in writing.
        </p>
      </div>
    </section>
  );
}
