import Link from 'next/link';
import { siteConfig } from '../../lib/site-config';
import ExternalLink from './ExternalLink';

/** Unique Richmond American copy. Do not assume a community inside Aliante 89084. */
export default function RichmondAmericanContent() {
  const officialUrl =
    siteConfig.builders.find((builder) => builder.slug === 'richmond-american')?.officialUrl ??
    'https://www.richmondamerican.com/';

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto prose prose-lg text-gray-700">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: '#1a365d' }}>
          Richmond American — confirm the community ZIP vs Aliante 89084
        </h2>
        <p className="leading-relaxed">
          Do not assume a Richmond American community is inside Aliante ZIP 89084. Confirm the
          current map, lot list, and incentive sheet for the community you will actually tour, then
          compare it with{' '}
          <Link href="/builders/lennar" className="font-semibold" style={{ color: '#2c5aa0' }}>
            Lennar in Aliante
          </Link>{' '}
          or{' '}
          <Link href="/builders/dr-horton" className="font-semibold" style={{ color: '#2c5aa0' }}>
            D.R. Horton at Tule Springs
          </Link>
          . Call {siteConfig.phone}.
        </p>
        <p className="leading-relaxed">
          Confirm collections on the{' '}
          <ExternalLink href={officialUrl} className="font-semibold text-[#2c5aa0] hover:underline">
            official Richmond American website
          </ExternalLink>
          , then register with me before the model so representation is documented. Buyer
          representation is typically at no extra cost to you on participating builder sales —
          confirm the fee in writing before you tour.
        </p>
      </div>
    </section>
  );
}
