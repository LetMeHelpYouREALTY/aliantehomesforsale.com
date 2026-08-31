import { type CalendlyEventKey, calendlyEventForPath, scheduleActionJsonLd } from './calendly';
import { graphIds } from './graphs/ids';
import { siteConfig } from './site-config';

type PageSeo = {
  path: string;
  name: string;
  description: string;
  event?: CalendlyEventKey;
};

/** Visible titles/descriptions for page-level WebPage JSON-LD (must match on-page copy). */
export const pageSeoCatalog: PageSeo[] = [
  {
    path: '/',
    name: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
  },
  {
    path: '/homes-for-sale',
    name: 'Aliante Homes For Sale | North Las Vegas NV 89084 MLS Listings',
    description:
      'Browse Aliante homes for sale in North Las Vegas, NV 89084. MLS listings updated about every 15 minutes.',
    event: 'showing',
  },
  {
    path: '/search',
    name: 'Search Aliante Homes',
    description: 'Search live MLS listings in Aliante and North Las Vegas 89084.',
    event: 'showing',
  },
  {
    path: '/new-construction',
    name: 'New Construction Homes Aliante North Las Vegas',
    description: 'New construction in Aliante from Lennar, D.R. Horton, Tri Pointe, and Del Webb.',
    event: 'appointment',
  },
  {
    path: '/neighborhoods',
    name: 'Aliante Neighborhoods Guide | North Las Vegas Communities',
    description:
      'Explore Aliante neighborhoods including The Prominence, Desert Willows, Club Aliante, and The Paseos.',
    event: 'tour',
  },
  {
    path: '/about',
    name: 'About Aliante Real Estate - Local Experts Since 2018',
    description: `Meet ${siteConfig.agentName}, Aliante and North Las Vegas real estate since ${siteConfig.foundedYear}.`,
  },
  {
    path: '/contact',
    name: 'Contact, Directions & Nearby | Aliante Real Estate — Dr. Jan Duffy',
    description: `Visit ${siteConfig.agentName} at ${siteConfig.address.streetAddress}, ${siteConfig.address.addressLocality}, ${siteConfig.address.addressRegion} ${siteConfig.address.postalCode}.`,
  },
  {
    path: '/market-report',
    name: 'Aliante Market Report - Real-Time MLS Data & Trends',
    description: 'Live Aliante market data: median prices, inventory, and days on market.',
  },
  {
    path: '/home-valuation',
    name: "Free Home Valuation Aliante - What's Your Home Worth?",
    description: 'Free comparative market analysis for Aliante homes from a local agent.',
    event: 'appointment',
  },
  {
    path: '/buyer-guide',
    name: 'First-Time Home Buyer Guide Aliante',
    description: 'Step-by-step Aliante buyer guide with local market insight.',
  },
  {
    path: '/seller-checklist',
    name: 'Aliante Seller Checklist',
    description: 'How to prepare, price, and sell an Aliante home.',
    event: 'appointment',
  },
  {
    path: '/builders',
    name: 'New Construction Builders in Aliante',
    description: 'Compare Aliante builders: Lennar, D.R. Horton, Tri Pointe, Del Webb.',
    event: 'appointment',
  },
  {
    path: '/gated-communities',
    name: 'Aliante Gated Communities',
    description: 'Gated homes in Aliante, North Las Vegas.',
    event: 'tour',
  },
  {
    path: '/golf-homes',
    name: 'Aliante Golf Course Homes',
    description: 'Golf-course homes near Club Aliante.',
    event: 'showing',
  },
  {
    path: '/sun-city-aliante',
    name: 'Sun City Aliante 55+ Homes',
    description: 'Del Webb 55+ active adult community in Aliante.',
    event: 'tour',
  },
  {
    path: '/schools',
    name: 'Aliante Schools',
    description: 'Schools serving Aliante and North Las Vegas 89084.',
  },
  {
    path: '/mortgage-calculator',
    name: 'Mortgage Calculator Aliante',
    description: 'Estimate payments for Aliante homes.',
  },
  {
    path: '/investment-analysis',
    name: 'Investment Property Analysis Aliante',
    description: 'ROI and rental analysis for Aliante real estate.',
    event: 'appointment',
  },
  {
    path: '/privacy-policy',
    name: 'Privacy Policy',
    description: 'Privacy policy for Aliante Homes For Sale.',
  },
  {
    path: '/terms-of-service',
    name: 'Terms of Service',
    description: 'Terms of service for Aliante Homes For Sale.',
  },
  {
    path: '/accessibility',
    name: 'Accessibility',
    description: 'Accessibility statement for Aliante Homes For Sale.',
  },
  {
    path: '/fair-housing',
    name: 'Fair Housing',
    description: 'Fair Housing policy for Aliante Homes For Sale.',
  },
];

export function pageSeoForPath(pathname: string): PageSeo {
  const exact = pageSeoCatalog.find((p) => p.path === pathname);
  if (exact) return exact;

  if (pathname.startsWith('/neighborhoods/')) {
    const slug = pathname.replace('/neighborhoods/', '');
    const n = siteConfig.neighborhoods.find((item) => item.slug === slug);
    return {
      path: pathname,
      name: n ? `${n.name} Homes | Aliante North Las Vegas` : 'Aliante Neighborhood',
      description: n?.summary ?? 'Aliante neighborhood real estate in North Las Vegas.',
      event: 'tour',
    };
  }

  if (pathname.startsWith('/builders/')) {
    const slug = pathname.replace('/builders/', '');
    const b = siteConfig.builders.find((item) => item.slug === slug);
    return {
      path: pathname,
      name: b ? `${b.name} Homes in Aliante` : 'Aliante Builder',
      description: b
        ? `New construction by ${b.name} in Aliante, North Las Vegas.`
        : 'Aliante new construction builder guide.',
      event: 'appointment',
    };
  }

  return {
    path: pathname,
    name: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
  };
}

export function buildWebPageJsonLd(pathname: string) {
  const page = pageSeoForPath(pathname);
  const event = page.event ?? calendlyEventForPath(pathname);
  const url = `${siteConfig.siteUrl}${page.path === '/' ? '' : page.path}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#page-schema`,
    url,
    name: page.name,
    description: page.description,
    inLanguage: 'en-US',
    isPartOf: { '@id': graphIds.website },
    about: { '@id': graphIds.aliantePlace },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: `${siteConfig.siteUrl}${siteConfig.agentImage}`,
    },
    author: { '@id': graphIds.agent },
    publisher: { '@id': graphIds.organization },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', 'h2', '.speakable'],
    },
    potentialAction: scheduleActionJsonLd(event),
  };
}
