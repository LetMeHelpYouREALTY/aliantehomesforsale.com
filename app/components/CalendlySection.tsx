import type { CalendlyEventKey } from '../../lib/calendly';
import { siteConfig } from '../../lib/site-config';
import AgentPhoto from './AgentPhoto';
import CalendlyInline from './CalendlyInline';

type CalendlySectionProps = {
  event?: CalendlyEventKey;
  heading?: string;
  description?: string;
  id?: string;
};

/**
 * Agent photo + matching Calendly event. Replaces lead-capture forms.
 */
export default function CalendlySection({
  event = 'consultation',
  heading,
  description,
  id = 'schedule',
}: CalendlySectionProps) {
  const item = siteConfig.calendly.events[event];

  return (
    <section id={id} className="py-16 px-4 bg-white" aria-labelledby={`${id}-heading`}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <AgentPhoto size={140} className="mx-auto mb-4 shadow-lg" />
          <h2
            id={`${id}-heading`}
            className="speakable text-3xl sm:text-4xl font-bold mb-3"
            style={{ color: '#1a365d' }}
          >
            {heading ?? item.heading}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {description ?? item.description} Or call{' '}
            <a href={`tel:${siteConfig.phoneTel}`} className="font-semibold underline">
              {siteConfig.phone}
            </a>
            .
          </p>
        </div>
        <CalendlyInline event={event} />
      </div>
    </section>
  );
}
