'use client';

import Link from 'next/link';
import { siteConfig } from '../../lib/site-config';

export default function EnhancedFooter() {
  return (
    <footer className="bg-gradient-to-br from-[#1a365d] to-[#0d1b2a] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Column 1: Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Contact Dr. Jan Duffy</h3>
            <p className="text-gray-300 mb-4 text-sm">
              Your trusted partner for Aliante homes since 2018
            </p>

            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 mt-0.5 flex-shrink-0"
                  style={{ color: '#16B286' }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a href="tel:+17027077273" className="hover:text-[#16B286] transition-colors">
                  (702) 707-7273
                </a>
              </div>

              <div className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 mt-0.5 flex-shrink-0"
                  style={{ color: '#16B286' }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:DrDuffy@AlianteHomesForSale.com"
                  className="hover:text-[#16B286] transition-colors break-all"
                >
                  DrDuffy@AlianteHomesForSale.com
                </a>
              </div>

              <div className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 mt-0.5 flex-shrink-0"
                  style={{ color: '#16B286' }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <address className="not-italic text-gray-300">
                  2590 Nature Park Drive, Suite 275
                  <br />
                  North Las Vegas, NV 89084
                </address>
              </div>

              <div className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 mt-0.5 flex-shrink-0"
                  style={{ color: '#16B286' }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-gray-300">
                  Mon-Fri: 8AM-7PM
                  <br />
                  Sat-Sun: 9AM-6PM
                </span>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-block mt-6 px-6 py-3 rounded-lg font-semibold text-white transition-all transform hover:scale-105"
              style={{ backgroundColor: '#ed8936' }}
            >
              Schedule Consultation
            </Link>

            <div className="mt-6 pt-6 border-t border-gray-700 text-xs text-gray-400 space-y-1">
              <p>{siteConfig.brokerage}</p>
              <p>Nevada Real Estate License #{siteConfig.agentLicense}</p>
              <p className="font-semibold">Equal Housing Opportunity</p>
            </div>
          </div>

          {/* Column 2: New Construction Builders */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">New Construction Builders</h3>
            <nav aria-label="Builder links">
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/builders"
                    className="text-gray-300 hover:text-[#16B286] transition-colors flex items-center gap-2"
                  >
                    <span className="text-[#16B286]">→</span>
                    All Builders Comparison Guide
                  </Link>
                </li>
                <li>
                  <Link
                    href="/builders/lennar"
                    className="text-gray-300 hover:text-[#16B286] transition-colors flex items-center gap-2"
                  >
                    <span className="text-[#16B286]">→</span>
                    Lennar (#1 Volume Builder)
                  </Link>
                </li>
                <li>
                  <Link
                    href="/builders/dr-horton"
                    className="text-gray-300 hover:text-[#16B286] transition-colors flex items-center gap-2"
                  >
                    <span className="text-[#16B286]">→</span>
                    D.R. Horton (Tule Springs)
                  </Link>
                </li>
                <li>
                  <Link
                    href="/builders/tri-pointe"
                    className="text-gray-300 hover:text-[#16B286] transition-colors flex items-center gap-2"
                  >
                    <span className="text-[#16B286]">→</span>
                    Tri Pointe (Luxury Homes)
                  </Link>
                </li>
                <li>
                  <Link
                    href="/builders/del-webb"
                    className="text-gray-300 hover:text-[#16B286] transition-colors flex items-center gap-2"
                  >
                    <span className="text-[#16B286]">→</span>
                    Del Webb (Active Adult 55+)
                  </Link>
                </li>
                <li>
                  <Link
                    href="/builders/toll-brothers"
                    className="text-gray-300 hover:text-[#16B286] transition-colors flex items-center gap-2"
                  >
                    <span className="text-[#16B286]">→</span>
                    Toll Brothers (Ultra-Luxury)
                  </Link>
                </li>
                <li>
                  <Link
                    href="/builders/richmond-american"
                    className="text-gray-300 hover:text-[#16B286] transition-colors flex items-center gap-2"
                  >
                    <span className="text-[#16B286]">→</span>
                    Richmond American Homes
                  </Link>
                </li>
                <li>
                  <Link
                    href="/builders/incentives"
                    className="text-gray-300 hover:text-[#16B286] transition-colors flex items-center gap-2 font-semibold"
                  >
                    <span className="text-[#16B286]">→</span>
                    Builder Incentives Tracker
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Column 3: Aliante Neighborhoods */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Aliante Neighborhoods</h3>
            <nav aria-label="Neighborhood links">
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/neighborhoods"
                    className="text-gray-300 hover:text-[#16B286] transition-colors flex items-center gap-2"
                  >
                    <span className="text-[#16B286]">→</span>
                    All Neighborhoods Guide
                  </Link>
                </li>
                <li>
                  <Link
                    href="/neighborhoods/prominence"
                    className="text-gray-300 hover:text-[#16B286] transition-colors flex items-center gap-2"
                  >
                    <span className="text-[#16B286]">→</span>
                    The Prominence (Luxury)
                  </Link>
                </li>
                <li>
                  <Link
                    href="/neighborhoods/desert-willows"
                    className="text-gray-300 hover:text-[#16B286] transition-colors flex items-center gap-2"
                  >
                    <span className="text-[#16B286]">→</span>
                    Desert Willows (Family)
                  </Link>
                </li>
                <li>
                  <Link
                    href="/neighborhoods/club-aliante"
                    className="text-gray-300 hover:text-[#16B286] transition-colors flex items-center gap-2"
                  >
                    <span className="text-[#16B286]">→</span>
                    Club Aliante (Golf Course)
                  </Link>
                </li>
                <li>
                  <Link
                    href="/neighborhoods/paseos"
                    className="text-gray-300 hover:text-[#16B286] transition-colors flex items-center gap-2"
                  >
                    <span className="text-[#16B286]">→</span>
                    The Paseos (Gated)
                  </Link>
                </li>
                <li>
                  <Link
                    href="/neighborhoods/tule-springs"
                    className="text-gray-300 hover:text-[#16B286] transition-colors flex items-center gap-2"
                  >
                    <span className="text-[#16B286]">→</span>
                    Villages at Tule Springs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/neighborhoods/sun-city"
                    className="text-gray-300 hover:text-[#16B286] transition-colors flex items-center gap-2"
                  >
                    <span className="text-[#16B286]">→</span>
                    Sun City Aliante (55+)
                  </Link>
                </li>
                <li>
                  <Link
                    href="/neighborhoods/compare"
                    className="text-gray-300 hover:text-[#16B286] transition-colors flex items-center gap-2 font-semibold"
                  >
                    <span className="text-[#16B286]">→</span>
                    Neighborhood Comparison Tool
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Column 4: Buyer & Seller Resources */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Buyer & Seller Resources</h3>
            <nav aria-label="Resource links">
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/homes-for-sale"
                    className="text-gray-300 hover:text-[#16B286] transition-colors flex items-center gap-2"
                  >
                    <span className="text-[#16B286]">→</span>
                    Browse All Homes for Sale
                  </Link>
                </li>
                <li>
                  <Link
                    href="/market-report"
                    className="text-gray-300 hover:text-[#16B286] transition-colors flex items-center gap-2"
                  >
                    <span className="text-[#16B286]">→</span>
                    Live Market Report & Statistics
                  </Link>
                </li>
                <li>
                  <Link
                    href="/mortgage-calculator"
                    className="text-gray-300 hover:text-[#16B286] transition-colors flex items-center gap-2"
                  >
                    <span className="text-[#16B286]">→</span>
                    Mortgage Calculator & Rates
                  </Link>
                </li>
                <li>
                  <Link
                    href="/home-valuation"
                    className="text-gray-300 hover:text-[#16B286] transition-colors flex items-center gap-2"
                  >
                    <span className="text-[#16B286]">→</span>
                    Free Home Valuation (CMA)
                  </Link>
                </li>
                <li>
                  <Link
                    href="/buyer-guide"
                    className="text-gray-300 hover:text-[#16B286] transition-colors flex items-center gap-2"
                  >
                    <span className="text-[#16B286]">→</span>
                    First-Time Buyer Guide
                  </Link>
                </li>
                <li>
                  <Link
                    href="/seller-checklist"
                    className="text-gray-300 hover:text-[#16B286] transition-colors flex items-center gap-2"
                  >
                    <span className="text-[#16B286]">→</span>
                    Selling Your Home Checklist
                  </Link>
                </li>
                <li>
                  <Link
                    href="/investment-analysis"
                    className="text-gray-300 hover:text-[#16B286] transition-colors flex items-center gap-2"
                  >
                    <span className="text-[#16B286]">→</span>
                    Investment Property Analysis
                  </Link>
                </li>
                <li>
                  <Link
                    href="/schools"
                    className="text-gray-300 hover:text-[#16B286] transition-colors flex items-center gap-2"
                  >
                    <span className="text-[#16B286]">→</span>
                    School District Information
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Legal & Copyright */}
      <div className="border-t border-gray-700" style={{ backgroundColor: '#0d1b2a' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <div className="text-center md:text-left">
              <p className="mb-1">
                © {siteConfig.foundedYear}–{new Date().getFullYear()} {siteConfig.siteName}.
                Licensed with {siteConfig.brokerage}.
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
