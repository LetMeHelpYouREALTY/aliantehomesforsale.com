'use client';

import { useEffect } from 'react';
import { siteConfig } from '../../lib/site-config';

/**
 * Sitewide “Schedule time with me” badge — same pattern used on Dr. Duffy’s other sites.
 * Requires widget.js + widget.css loaded once in the root layout.
 */
export default function CalendlyPopupWidget() {
  useEffect(() => {
    const init = () => {
      window.Calendly?.initBadgeWidget({
        url: `${siteConfig.calendly.events.consultation.url}?hide_gdpr_banner=1&primary_color=2c5aa0`,
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
  }, []);

  return null;
}
