import Link from 'next/link';
import { siteConfig } from '../../lib/site-config';
import AgentPhoto from './AgentPhoto';

const serviceIcons: Record<string, string> = {
  'buyer-representation': '🤝',
  'seller-representation': '🏷️',
  'new-construction': '🏗️',
  '55-plus': '🌅',
  'home-valuation': '📊',
  'investment-analysis': '📈',
};

/** Visible services matching knowledge-graph OfferCatalog (GEO/AEO). */
export default function HyperlocalRealtorServices() {
  return (
    <section className="py-16 px-4 bg-white" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <AgentPhoto size={140} className="mx-auto mb-6 shadow-lg" />
          <h2
            id="services-heading"
            className="speakable text-4xl sm:text-5xl font-bold mb-4"
            style={{ color: '#1a365d' }}
          >
            Hyperlocal Aliante Realtor Services
          </h2>
          <p className="speakable text-xl text-gray-600 max-w-3xl mx-auto">
            {siteConfig.agentName} specializes exclusively in Aliante and North Las Vegas, NV{' '}
            {siteConfig.zipCode} — not the entire Las Vegas valley.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.services.map((service) => (
            <Link
              key={service.slug}
              href={service.url}
              className="block bg-gray-50 rounded-xl p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg border-2 border-transparent hover:border-[#2c5aa0]"
            >
              <div className="text-4xl mb-4" aria-hidden="true">
                {serviceIcons[service.slug] ?? '🏠'}
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#1a365d' }}>
                {service.name}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
