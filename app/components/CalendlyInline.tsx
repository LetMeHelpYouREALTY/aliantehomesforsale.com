'use client';

import { type CalendlyEventKey, calendlyEmbedUrl } from '../../lib/calendly';
import { siteConfig } from '../../lib/site-config';

type CalendlyInlineProps = {
  event?: CalendlyEventKey;
  title?: string;
  className?: string;
};

/**
 * Official Calendly inline embed (iframe).
 * @see https://help.calendly.com/hc/en-us/articles/223147027-Embed-options-overview
 */
export default function CalendlyInline({
  event = 'consultation',
  title,
  className = '',
}: CalendlyInlineProps) {
  const label = title ?? siteConfig.calendly.events[event].heading;

  return (
    <div className={className}>
      <iframe
        src={calendlyEmbedUrl(event)}
        title={label}
        className="w-full min-h-[700px] rounded-xl border-0 bg-white"
        loading="lazy"
        allow="payment"
      />
    </div>
  );
}
