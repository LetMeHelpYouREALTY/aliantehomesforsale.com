'use client';

import { usePathname } from 'next/navigation';
import { type CalendlyEventKey, calendlyEmbedUrl } from '../../lib/calendly';

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
  const pathname = usePathname() || '/';
  const url = calendlyEmbedUrl(event, { pathname, medium: 'popup' });

  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        if (window.Calendly) {
          window.Calendly.initPopupWidget({ url });
          return;
        }
        window.open(url, '_blank', 'noopener,noreferrer');
      }}
    >
      {children}
    </button>
  );
}
