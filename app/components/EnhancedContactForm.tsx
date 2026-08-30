import type { CalendlyEventKey } from '../../lib/calendly';
import CalendlySection from './CalendlySection';

type EnhancedContactFormProps = {
  event?: CalendlyEventKey;
};

/**
 * Lead capture is Calendly (not a custom form). Event type varies by page intent.
 */
export default function EnhancedContactForm({ event = 'consultation' }: EnhancedContactFormProps) {
  return <CalendlySection event={event} />;
}
