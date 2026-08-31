'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteConfig } from '../../lib/site-config';

const SEGMENT_LABELS: Record<string, string> = {
  about: 'About',
  accessibility: 'Accessibility',
  builders: 'Builders',
  'buyer-guide': 'Buyer Guide',
  'club-aliante': 'Club Aliante',
  compare: 'Compare',
  contact: 'Contact',
  'del-webb': 'Del Webb',
  'desert-willows': 'Desert Willows',
  'dr-horton': 'D.R. Horton',
  'fair-housing': 'Fair Housing',
  'gated-communities': 'Gated Communities',
  'golf-homes': 'Golf Homes',
  'home-valuation': 'Home Valuation',
  'homes-for-sale': 'Homes for Sale',
  incentives: 'Incentives',
  'investment-analysis': 'Investment Analysis',
  lennar: 'Lennar',
  'market-report': 'Market Report',
  'mortgage-calculator': 'Mortgage Calculator',
  neighborhoods: 'Neighborhoods',
  'new-construction': 'New Construction',
  paseos: 'The Paseos',
  'privacy-policy': 'Privacy Policy',
  prominence: 'The Prominence',
  'property-management': 'Property Management',
  'richmond-american': 'Richmond American',
  schools: 'Schools',
  search: 'Search',
  'seller-checklist': 'Seller Checklist',
  'sun-city-aliante': 'Sun City Aliante',
  'terms-of-service': 'Terms of Service',
  'toll-brothers': 'Toll Brothers',
  'tri-pointe': 'Tri Pointe',
  'tule-springs': 'Villages at Tule Springs',
};

function labelForSegment(segment: string): string {
  const mapped = SEGMENT_LABELS[segment];
  if (mapped !== undefined) {
    return mapped;
  }
  return segment
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export default function Breadcrumbs() {
  const pathname = usePathname();

  // Don't show breadcrumbs on homepage
  if (pathname === '/') return null;

  const pathSegments = pathname.split('/').filter((segment) => segment);

  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    ...pathSegments.map((segment, index) => {
      const url = `/${pathSegments.slice(0, index + 1).join('/')}`;
      return { name: labelForSegment(segment), url };
    }),
  ];

  // Generate Schema.org BreadcrumbList JSON-LD
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteConfig.siteUrl}${item.url}`,
    })),
  };

  return (
    <>
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <nav aria-label="Breadcrumb" className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex flex-wrap items-center space-x-2 text-sm">
            {breadcrumbItems.map((item, index) => (
              <li key={item.url} className="flex items-center">
                {index > 0 && (
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 mx-2 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
                {index === breadcrumbItems.length - 1 ? (
                  <span className="font-semibold" style={{ color: '#1a365d' }}>
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.url}
                    className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
}
