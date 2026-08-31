import { siteConfig } from './site-config';

export type CalendlyEventKey = keyof typeof siteConfig.calendly.events;

const LEGAL_PATHS = new Set([
  '/privacy-policy',
  '/terms-of-service',
  '/accessibility',
  '/fair-housing',
]);

/** Pages that already render an inline scheduler in the main content. */
const INLINE_FORM_PATHS = new Set([
  '/contact',
  '/home-valuation',
  '/investment-analysis',
  '/mortgage-calculator',
]);

export function isLegalPath(pathname: string): boolean {
  const normalized = pathname.replace(/\/+$/, '') || '/';
  return LEGAL_PATHS.has(normalized);
}

export function hasPageInlineCalendly(pathname: string): boolean {
  return INLINE_FORM_PATHS.has(pathname);
}

export function calendlyEventForPath(pathname: string): CalendlyEventKey {
  if (pathname.startsWith('/seller-checklist')) {
    return 'listing';
  }
  if (
    pathname.startsWith('/home-valuation') ||
    pathname.startsWith('/investment-analysis') ||
    pathname.startsWith('/mortgage-calculator') ||
    pathname.startsWith('/new-construction') ||
    pathname.startsWith('/builders')
  ) {
    return 'appointment';
  }
  if (
    pathname.startsWith('/homes-for-sale') ||
    pathname.startsWith('/search') ||
    pathname.startsWith('/golf-homes') ||
    pathname.startsWith('/neighborhoods') ||
    pathname.startsWith('/gated-communities') ||
    pathname.startsWith('/sun-city-aliante')
  ) {
    return 'showing';
  }
  return 'consultation';
}

export function calendlyEmbedUrl(event: CalendlyEventKey): string {
  const base = siteConfig.calendly.events[event].url;
  const params = new URLSearchParams({
    hide_gdpr_banner: '1',
    primary_color: '2c5aa0',
  });
  return `${base}?${params.toString()}`;
}

export function scheduleActionJsonLd(event: CalendlyEventKey = 'consultation') {
  const item = siteConfig.calendly.events[event];
  return {
    '@type': 'ScheduleAction',
    name: item.heading,
    target: {
      '@type': 'EntryPoint',
      urlTemplate: item.url,
      actionPlatform: [
        'https://schema.org/DesktopWebPlatform',
        'https://schema.org/MobileWebPlatform',
      ],
    },
    object: {
      '@type': 'Person',
      '@id': `${siteConfig.siteUrl}/#jan-duffy`,
      name: siteConfig.agentName,
    },
  };
}
