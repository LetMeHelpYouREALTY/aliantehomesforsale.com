import { siteConfig } from '../site-config';

/** Stable @id URIs for the Aliante knowledge / agent / content graphs */
export const graphIds = {
  website: `${siteConfig.siteUrl}/#website`,
  organization: `${siteConfig.siteUrl}/#organization`,
  localBusiness: `${siteConfig.siteUrl}/#localbusiness`,
  agent: `${siteConfig.siteUrl}/#jan-duffy`,
  brokerage: `${siteConfig.siteUrl}/#bhhs-nevada`,
  aliantePlace: `${siteConfig.siteUrl}/#place-aliante`,
  northLasVegas: 'https://www.wikidata.org/wiki/Q79346',
  offerCatalog: `${siteConfig.siteUrl}/#offer-catalog`,
  contentGraph: `${siteConfig.siteUrl}/#content-graph`,
  neighborhood: (slug: string) => `${siteConfig.siteUrl}/neighborhoods/${slug}#place`,
  service: (slug: string) => `${siteConfig.siteUrl}/#service-${slug}`,
  builder: (slug: string) => `${siteConfig.siteUrl}/builders/${slug}#organization`,
  hubPage: (path: string) => `${siteConfig.siteUrl}${path}#webpage`,
} as const;
