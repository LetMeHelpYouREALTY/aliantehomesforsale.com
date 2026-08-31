import type { CalendlyEventKey } from '../../lib/calendly';
import CalendlySection from './CalendlySection';

type ContactFormProps = {
  event?: CalendlyEventKey;
};

/** Legacy contact form — replaced with the matching Calendly scheduler. */
export default function ContactForm({ event = 'consultation' }: ContactFormProps) {
  return <CalendlySection event={event} />;
}
