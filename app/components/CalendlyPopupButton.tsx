'use client';

import { type CalendlyEventKey, calendlyEmbedUrl } from '../../lib/calendly';
import { siteConfig } from '../../lib/site-config';

type CalendlyPopupButtonProps = {
  event?: CalendlyEventKey;
  children: React.ReactNode;
  className?: string;
};

export default function CalendlyPopupButton({
  event = 'consultation',
  children,
  className = '',
}: CalendlyPopupButtonProps) {
  const fallbackHref = siteConfig.calendly.events[event].url;

  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        if (window.Calendly) {
          window.Calendly.initPopupWidget({ url: calendlyEmbedUrl(event) });
          return;
        }
        window.open(fallbackHref, '_blank', 'noopener,noreferrer');
      }}
    >
      {children}
    </button>
  );
}
