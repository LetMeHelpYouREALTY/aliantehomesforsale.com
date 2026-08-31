import { siteConfig } from '../../lib/site-config';
import AgentPhoto from './AgentPhoto';
import CalendlyPopupButton from './CalendlyPopupButton';

/**
 * Client feedback without invented quotes or Review JSON-LD.
 */
export default function TestimonialsSection() {
  return (
    <section className="py-16 px-4 bg-white" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <AgentPhoto size={120} className="mx-auto mb-6 shadow-lg" />
          <h2
            id="testimonials-heading"
            className="text-4xl sm:text-5xl font-bold mb-4"
            style={{ color: '#1a365d' }}
          >
            Client reviews and next steps
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Read current Google Business Profile reviews. I will not publish invented quotes or an
            unverified star rating here.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <a
            href={siteConfig.maps.placeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-gray-100 bg-[#f8f9fa] p-6 md:p-8 hover:shadow-md transition-shadow"
          >
            <h3 className="text-xl font-bold mb-3" style={{ color: '#1a365d' }}>
              Google reviews
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Open the office listing on Google Maps for current reviews of {siteConfig.agentName}.
            </p>
            <span className="font-semibold" style={{ color: '#2c5aa0' }}>
              View Google Reviews →
            </span>
          </a>
          <a
            href={`tel:${siteConfig.phoneTel}`}
            className="rounded-xl border border-gray-100 bg-[#f8f9fa] p-6 md:p-8 hover:shadow-md transition-shadow"
          >
            <h3 className="text-xl font-bold mb-3" style={{ color: '#1a365d' }}>
              Call {siteConfig.phone}
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ask about a showing, a listing, or a current Aliante 89084 search.
            </p>
            <span className="font-semibold" style={{ color: '#2c5aa0' }}>
              Call now →
            </span>
          </a>
          <CalendlyPopupButton
            event="consultation"
            className="rounded-xl border border-gray-100 bg-[#f8f9fa] p-6 md:p-8 hover:shadow-md transition-shadow text-left"
          >
            <h3 className="text-xl font-bold mb-3" style={{ color: '#1a365d' }}>
              Schedule time with me
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Pick a Calendly slot for a showing, listing conversation, or Aliante 89084 search.
            </p>
            <span className="font-semibold" style={{ color: '#2c5aa0' }}>
              Open scheduler →
            </span>
          </CalendlyPopupButton>
        </div>
      </div>
    </section>
  );
}
