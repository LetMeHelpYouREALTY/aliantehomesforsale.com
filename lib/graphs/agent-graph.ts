import { siteConfig } from '../site-config';
import { graphIds } from './ids';

/** Agent graph: Person + RealEstateAgent credentials, knowsAbout, areaServed, worksFor */
export function buildAgentGraph() {
  const postalAddress = {
    '@type': 'PostalAddress',
    streetAddress: siteConfig.address.streetAddress,
    addressLocality: siteConfig.address.addressLocality,
    addressRegion: siteConfig.address.addressRegion,
    postalCode: siteConfig.address.postalCode,
    addressCountry: siteConfig.address.addressCountry,
  };

  const person = {
    '@type': ['Person', 'RealEstateAgent'],
    '@id': graphIds.agent,
    name: siteConfig.agentName,
    url: `${siteConfig.siteUrl}/about`,
    image: `${siteConfig.siteUrl}/og-image.jpg`,
    telephone: siteConfig.phoneTel,
    email: siteConfig.email,
    jobTitle: 'Real Estate Agent',
    description: `Hyperlocal Aliante and North Las Vegas ${siteConfig.zipCode} real estate agent since ${siteConfig.foundedYear}. Buyer representation, new construction, gated communities, and Sun City Aliante 55+.`,
    address: postalAddress,
    worksFor: { '@id': graphIds.organization },
    memberOf: { '@id': graphIds.brokerage },
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Real Estate License',
      name: `Nevada Real Estate License ${siteConfig.agentLicense}`,
      recognizedBy: {
        '@type': 'Organization',
        name: 'Nevada Real Estate Division',
      },
    },
    knowsAbout: [
      ...siteConfig.knowsAbout,
      ...siteConfig.neighborhoods.map((n) => n.name),
      ...siteConfig.builders.map((b) => b.name),
    ],
    areaServed: [
      { '@id': graphIds.aliantePlace },
      {
        '@type': 'City',
        '@id': graphIds.northLasVegas,
        name: 'North Las Vegas',
        sameAs: graphIds.northLasVegas,
      },
      ...siteConfig.neighborhoods.map((n) => ({ '@id': graphIds.neighborhood(n.slug) })),
    ],
    ...(siteConfig.sameAs.length > 0 ? { sameAs: [...siteConfig.sameAs] } : {}),
  };

  const brokerage = {
    '@type': 'RealEstateAgent',
    '@id': graphIds.brokerage,
    name: siteConfig.brokerage,
    address: postalAddress,
  };

  return [person, brokerage];
}
