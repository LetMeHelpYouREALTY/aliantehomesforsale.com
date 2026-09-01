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

function normalizePath(pathname: string): string {
  return pathname.replace(/\/+$/, '') || '/';
}

export function isLegalPath(pathname: string): boolean {
  return LEGAL_PATHS.has(normalizePath(pathname));
}

export function hasPageInlineCalendly(pathname: string): boolean {
  return INLINE_FORM_PATHS.has(normalizePath(pathname));
}

export function calendlyEventForPath(pathname: string): CalendlyEventKey {
  const path = normalizePath(pathname);
  if (path.startsWith('/seller-checklist')) {
    return 'listing';
  }
  if (
    path.startsWith('/home-valuation') ||
    path.startsWith('/investment-analysis') ||
    path.startsWith('/mortgage-calculator') ||
    path.startsWith('/new-construction') ||
    path.startsWith('/builders')
  ) {
    return 'appointment';
  }
  if (
    path.startsWith('/homes-for-sale') ||
    path.startsWith('/search') ||
    path.startsWith('/golf-homes') ||
    path.startsWith('/neighborhoods') ||
    path.startsWith('/gated-communities') ||
    path.startsWith('/sun-city-aliante')
  ) {
    return 'showing';
  }
  return 'consultation';
}

type CalendlyPathCopy = {
  heading: string;
  description: string;
};

const CALENDLY_COPY_BY_PATH: Record<string, CalendlyPathCopy> = {
  '/neighborhoods/paseos': {
    heading: 'Schedule a tour of The Paseos',
    description: 'Open-access Aliante village in ZIP 89084. Confirm live MLS.',
  },
  '/neighborhoods/prominence': {
    heading: 'Schedule a tour of The Prominence',
    description: 'Gated Aliante village. Review guest lists and HOA rules before you write.',
  },
  '/neighborhoods/desert-willows': {
    heading: 'Schedule a tour of Desert Willows',
    description: 'Open-access Aliante village along Aliante Parkway. Confirm live MLS.',
  },
  '/neighborhoods/club-aliante': {
    heading: 'Schedule a Club Aliante golf-home showing',
    description: 'Fairway lots next to Aliante Golf Club in ZIP 89084.',
  },
  '/neighborhoods/tule-springs': {
    heading: 'Schedule a Tule Springs builder tour',
    description: 'East of Aliante ZIP 89084. Confirm live inventory before you tour.',
  },
  '/neighborhoods/sun-city': {
    heading: 'Schedule a Sun City Aliante 55+ showing',
    description: 'Del Webb inside 89084 — not Ardiente in 89081.',
  },
  '/sun-city-aliante': {
    heading: 'Schedule a Sun City Aliante 55+ showing',
    description: 'Del Webb inside 89084 — not Ardiente in 89081.',
  },
  '/neighborhoods/compare': {
    heading: 'Schedule a village comparison tour',
    description: 'Gated vs open-access, fairway vs interior, Sun City 55+ vs all-ages streets.',
  },
  '/neighborhoods': {
    heading: 'Schedule an Aliante neighborhood tour',
    description: 'Club Aliante, gated villages, and Sun City Aliante in ZIP 89084.',
  },
  '/golf-homes': {
    heading: 'Schedule a Club Aliante golf-home showing',
    description: 'Fairway vs green, par-5 vs par-3. Confirm live MLS.',
  },
  '/gated-communities': {
    heading: 'Schedule a gated-village showing',
    description: 'Club Aliante, The Prominence, and other controlled-access streets in 89084.',
  },
  '/schools': {
    heading: 'Match an Aliante address to the current CCSD campus',
    description: 'Boundaries change. Confirm with Clark County School District before you offer.',
  },
  '/new-construction': {
    heading: 'Schedule a new-construction buyer appointment',
    description: 'Lennar and Del Webb in 89084; D.R. Horton at Tule Springs.',
  },
  '/builders/incentives': {
    heading: 'Schedule an incentive-sheet review',
    description:
      'I confirm today’s Lennar and Del Webb offers in 89084 and Horton at Tule Springs. I will not publish a stale dollar amount.',
  },
  '/buyer-guide': {
    heading: 'Schedule a buyer-representation conversation',
    description: 'I represent you on Club Aliante, gated villages, and Sun City Aliante.',
  },
};

export function calendlyCopyForPath(pathname: string): {
  event: CalendlyEventKey;
  heading: string;
  description: string;
} {
  const path = normalizePath(pathname);
  const event = calendlyEventForPath(path);
  const fallback = siteConfig.calendly.events[event];
  const override = CALENDLY_COPY_BY_PATH[path];
  return {
    event,
    heading: override?.heading ?? fallback.heading,
    description: override?.description ?? fallback.description,
  };
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
