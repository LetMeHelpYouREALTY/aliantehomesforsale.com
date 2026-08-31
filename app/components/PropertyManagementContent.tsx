import Link from 'next/link';
import { siteConfig } from '../../lib/site-config';
import ExternalLink from './ExternalLink';

/**
 * Honest disambiguation for GSC queries like "aliante property management".
 * This brokerage sells homes. It does not manage rentals or HOAs.
 */
export default function PropertyManagementContent() {
  const { address, phone, phoneTel, hours, maps, siteName, agentName } = siteConfig;
  const fullAddress = `${address.streetAddress}, ${address.addressLocality}, ${address.addressRegion} ${address.postalCode}`;

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto prose prose-lg text-gray-700">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: '#1a365d' }}>
          We sell Aliante homes in ZIP 89084. We do not manage rentals or HOAs.
        </h2>
        <p className="leading-relaxed">
          Google searches for Aliante property management, leasing agents, and rental companies
          often land here. {agentName} is a licensed Nevada realtor at {siteConfig.brokerage}. If
          you need a landlord, HOA manager, or leasing office, that is a different company. If you
          need to buy or sell in ZIP 89084, call{' '}
          <a href={`tel:${phoneTel}`} className="font-semibold" style={{ color: '#2c5aa0' }}>
            {phone}
          </a>
          .
        </p>

        <h3 className="text-2xl font-bold mt-10 mb-4" style={{ color: '#2c5aa0' }}>
          FirstService Residential vs your Aliante realtor (same building)
        </h3>
        <p className="leading-relaxed">
          <ExternalLink
            href={siteConfig.official.firstService}
            className="font-semibold text-[#2c5aa0] hover:underline"
          >
            FirstService Residential
          </ExternalLink>{' '}
          has managed the Aliante Master Association since 2003 and keeps a North Las Vegas office
          at 2590 Nature Park Drive, Suite 100. Our sales office is Suite 275 in that same building.
          HOA billing, architectural review, and community rules go to the association manager.
          Purchase and listing work goes to me.
        </p>
        <p className="leading-relaxed">
          Sub-associations such as Courts at Aliante and Terrasini also use professional HOA
          management. Confirm the current manager on your resale package. I review those documents
          with you before you write an offer.
        </p>

        <h3 className="text-2xl font-bold mt-10 mb-4" style={{ color: '#2c5aa0' }}>
          Need an Aliante rental instead of a purchase?
        </h3>
        <p className="leading-relaxed">
          I do not run a leasing desk or screen tenants. I can still help you compare buying in{' '}
          <Link href="/homes-for-sale" className="font-semibold" style={{ color: '#2c5aa0' }}>
            Aliante homes for sale
          </Link>{' '}
          versus renting, including HOA dues on a specific address. For apartments inside the master
          plan, contact that community’s leasing office directly.
        </p>

        <h3 className="text-2xl font-bold mt-10 mb-4" style={{ color: '#2c5aa0' }}>
          Selling a rental you already own in Aliante 89084
        </h3>
        <p className="leading-relaxed">
          If you already own in Aliante and want to sell — tenant in place or vacant — that is
          listing work. See the{' '}
          <Link href="/seller-checklist" className="font-semibold" style={{ color: '#2c5aa0' }}>
            seller checklist
          </Link>{' '}
          or request a{' '}
          <Link href="/home-valuation" className="font-semibold" style={{ color: '#2c5aa0' }}>
            home valuation
          </Link>
          .
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
