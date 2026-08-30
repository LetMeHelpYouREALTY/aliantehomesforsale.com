'use client';

import Link from 'next/link';
import { siteConfig } from '../../lib/site-config';
import AgentPhoto from './AgentPhoto';

const navigateLinks = [
  { href: '/', label: 'Home' },
  { href: '/homes-for-sale', label: 'Homes for Sale' },
  { href: '/neighborhoods', label: 'Neighborhoods' },
  { href: '/new-construction', label: 'New Construction' },
  { href: '/about', label: 'About Dr. Jan Duffy' },
  { href: '/contact', label: 'Contact' },
  { href: '/market-report', label: 'Market Report' },
  { href: '/home-valuation', label: 'Home Valuation' },
];

const companyLinks = [
  { href: '/builders', label: 'Builders Guide' },
  { href: '/gated-communities', label: 'Gated Communities' },
  { href: '/sun-city-aliante', label: 'Sun City Aliante' },
  { href: '/buyer-guide', label: 'Buyer Guide' },
  { href: '/seller-checklist', label: 'Seller Checklist' },
  { href: '/schools', label: 'Schools' },
  { href: '/fair-housing', label: 'Fair Housing' },
];

export default function EnhancedFooter() {
  return (
    <footer className="bg-gradient-to-br from-[#1a365d] to-[#0d1b2a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Column 1: Navigate */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Navigate</h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2 text-sm">
                {navigateLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-[#16B286] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Column 2: Contact / NAP */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Contact</h3>
            <p className="text-gray-300 mb-4 text-sm">
              Your Aliante and North Las Vegas real estate partner since 2018
            </p>

            <div className="space-y-3 text-sm">
              <div>
                <a
                  href={`tel:${siteConfig.phoneTel}`}
                  className="hover:text-[#16B286] transition-colors font-semibold"
                >
                  {siteConfig.phone}
                </a>
              </div>
              <div>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-[#16B286] transition-colors break-all"
                >
                  {siteConfig.email}
                </a>
              </div>
              <address className="not-italic text-gray-300">
                {siteConfig.address.streetAddress}
                <br />
                {siteConfig.address.addressLocality}, {siteConfig.address.addressRegion}{' '}
                {siteConfig.address.postalCode}
              </address>
              <div className="text-gray-300">
                {siteConfig.hours.weekday}
                <br />
                {siteConfig.hours.weekend}
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={`tel:${siteConfig.phoneTel}`}
                className="inline-block px-4 py-2 rounded-lg font-semibold text-white text-sm"
                style={{ backgroundColor: '#ed8936' }}
              >
                Call
              </a>
              <a
                href={siteConfig.maps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 rounded-lg font-semibold text-sm border border-white/40 hover:bg-white/10 transition-colors"
              >
                Directions
              </a>
              <Link
                href="/contact#directions"
                className="inline-block px-4 py-2 rounded-lg font-semibold text-sm border border-white/40 hover:bg-white/10 transition-colors"
              >
                Map &amp; Visit
              </Link>
              <Link
                href="/contact#nearby"
                className="inline-block px-4 py-2 rounded-lg font-semibold text-sm border border-white/40 hover:bg-white/10 transition-colors"
              >
                What&apos;s Nearby
              </Link>
              <Link
                href="/contact"
                className="inline-block px-4 py-2 rounded-lg font-semibold text-sm border border-white/40 hover:bg-white/10 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Column 3: Company */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <AgentPhoto size={64} className="flex-shrink-0 shadow-md" />
              <div>
                <h3 className="text-lg font-bold text-white">Company</h3>
                <p className="text-xs text-gray-400">{siteConfig.agentName}</p>
              </div>
            </div>
            <p className="text-sm text-gray-300 mb-3">
              {siteConfig.agentName}
              <br />
              {siteConfig.brokerage}
            </p>
            <a
              href={siteConfig.calendly.events.consultation.url}
              className="inline-block mb-4 text-sm font-semibold text-[#16B286] hover:underline"
            >
              Schedule time with me
            </a>
            <p className="text-xs text-gray-400 mb-4">
              Nevada Real Estate License #{siteConfig.agentLicense}
              <br />
              Equal Housing Opportunity
            </p>
            <nav aria-label="Company links">
              <ul className="space-y-2 text-sm">
                {companyLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-[#16B286] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Column 4: Neighborhoods + newsletter CTA */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Aliante Neighborhoods</h3>
            <nav aria-label="Neighborhood links">
              <ul className="space-y-2 text-sm mb-6">
                <li>
                  <Link
                    href="/neighborhoods/prominence"
                    className="text-gray-300 hover:text-[#16B286] transition-colors"
                  >
                    The Prominence
                  </Link>
                </li>
                <li>
                  <Link
                    href="/neighborhoods/desert-willows"
                    className="text-gray-300 hover:text-[#16B286] transition-colors"
                  >
                    Desert Willows
                  </Link>
                </li>
                <li>
                  <Link
                    href="/neighborhoods/club-aliante"
                    className="text-gray-300 hover:text-[#16B286] transition-colors"
                  >
                    Club Aliante
                  </Link>
                </li>
                <li>
                  <Link
                    href="/neighborhoods/paseos"
                    className="text-gray-300 hover:text-[#16B286] transition-colors"
                  >
                    The Paseos
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sun-city-aliante"
                    className="text-gray-300 hover:text-[#16B286] transition-colors"
                  >
                    Sun City Aliante (55+)
                  </Link>
                </li>
                <li>
                  <Link
                    href="/neighborhoods/tule-springs"
                    className="text-gray-300 hover:text-[#16B286] transition-colors"
                  >
                    Villages at Tule Springs
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="rounded-lg border border-white/20 p-4">
              <h4 className="font-semibold mb-2 text-white">Market updates</h4>
              <p className="text-xs text-gray-400 mb-3">
                Get Aliante listing alerts and local market notes from Dr. Duffy.
              </p>
              <Link
                href="/contact"
                className="inline-block w-full text-center py-2 px-4 rounded-lg font-semibold text-sm text-white"
                style={{ backgroundColor: '#16B286' }}
              >
                Request Updates
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700" style={{ backgroundColor: '#0d1b2a' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <div className="text-center md:text-left">
              <p className="mb-1">
                © 2026 {siteConfig.siteName}. Licensed real estate brokerage in Nevada.
              </p>
              <p className="text-xs">
                All information deemed reliable but not guaranteed. All properties subject to prior
                sale, change, or withdrawal.
              </p>
            </div>

            <nav aria-label="Legal links" className="flex flex-wrap justify-center gap-4 text-xs">
              <Link href="/privacy-policy" className="hover:text-[#16B286] transition-colors">
                Privacy Policy
              </Link>
              <span className="text-gray-600">|</span>
              <Link href="/terms-of-service" className="hover:text-[#16B286] transition-colors">
                Terms of Service
              </Link>
              <span className="text-gray-600">|</span>
              <Link href="/accessibility" className="hover:text-[#16B286] transition-colors">
                Accessibility
              </Link>
              <span className="text-gray-600">|</span>
              <Link href="/fair-housing" className="hover:text-[#16B286] transition-colors">
                Fair Housing
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
