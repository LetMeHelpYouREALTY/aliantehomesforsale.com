import Link from 'next/link';
import { agentCredentials } from '../../lib/content/aliante-content';
import { siteConfig } from '../../lib/site-config';
import AgentPhoto from './AgentPhoto';
import CalendlyPopupButton from './CalendlyPopupButton';

/**
 * Trust / credentials for Dr. Jan Duffy — no fabricated rankings or reviews.
 */
export default function EnhancedTrustAuthority() {
  return (
    <section className="py-16 px-4 bg-white" aria-labelledby="why-choose-heading">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <AgentPhoto size={140} className="mx-auto mb-6 shadow-lg" />
          <h2
            id="why-choose-heading"
            className="speakable text-4xl sm:text-5xl font-bold mb-4"
            style={{ color: '#1a365d' }}
          >
            Why Choose {siteConfig.agentName}?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nevada license {siteConfig.agentLicense}, {siteConfig.brokerage}, Aliante 89084 since
            2018.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {agentCredentials.map((item) => (
            <article
              key={item.id}
              className="rounded-xl p-8 shadow-md border-l-4 bg-gray-50"
              style={{ borderLeftColor: '#2c5aa0' }}
            >
              <h3 className="text-xl font-bold mb-3" style={{ color: '#2c5aa0' }}>
                {item.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{item.description}</p>
            </article>
          ))}
        </div>

        <div
          className="rounded-2xl p-8 sm:p-10 text-center"
          style={{ background: 'linear-gradient(135deg, #f0f4ff 0%, #e8f5f0 100%)' }}
        >
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6 leading-relaxed">
            Looking for verified client feedback? Check Google Business Profile reviews, or call{' '}
            <a href={`tel:${siteConfig.phoneTel}`} className="font-semibold underline">
              {siteConfig.phone}
            </a>{' '}
            to talk through your Aliante search or sale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CalendlyPopupButton
              event="consultation"
              className="inline-block py-4 px-8 rounded-lg font-semibold text-lg text-white bg-[#ed8936]"
            >
              Schedule time with me
            </CalendlyPopupButton>
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="inline-block py-4 px-8 rounded-lg font-semibold text-lg text-white"
              style={{ backgroundColor: '#ed8936' }}
            >
              Call {siteConfig.phone}
            </a>
            <Link
              href="/about"
              className="inline-block py-4 px-8 rounded-lg font-semibold text-lg border-2"
              style={{ color: '#2c5aa0', borderColor: '#2c5aa0' }}
            >
              About {siteConfig.agentName}
            </Link>
            <Link
              href="/contact#directions"
              className="inline-block py-4 px-8 rounded-lg font-semibold text-lg border-2"
              style={{ color: '#16B286', borderColor: '#16B286' }}
            >
              Get directions
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
