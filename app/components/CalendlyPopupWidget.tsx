'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { calendlyEmbedUrl, calendlyEventForPath } from '../../lib/calendly';

/**
 * Sitewide “Schedule time with me” badge — same pattern used on Dr. Duffy’s other sites.
 * Requires widget.js + widget.css loaded once in the root layout. Rebuilt on each route
 * change so the event and utm_campaign match the page the visitor is on.
 */
export default function CalendlyPopupWidget() {
  const pathname = usePathname() || '/';

  useEffect(() => {
    const init = () => {
      if (!window.Calendly) return;
      if (window.Calendly.destroyBadgeWidget) {
        window.Calendly.destroyBadgeWidget();
      } else {
        document.querySelector('.calendly-badge-widget')?.remove();
      }
      window.Calendly.initBadgeWidget({
        url: calendlyEmbedUrl(calendlyEventForPath(pathname), { pathname, medium: 'badge' }),
        text: 'Schedule time with me',
        color: '#2c5aa0',
        textColor: '#ffffff',
        branding: false,
      });
    };

    if (window.Calendly) {
      init();
      return;
    }

    const timer = window.setInterval(() => {
      if (window.Calendly) {
        window.clearInterval(timer);
        init();
      }
    }, 200);

    return () => window.clearInterval(timer);
  }, [pathname]);

  return null;
}
