'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import AgentPhoto from './AgentPhoto';

export default function EnhancedNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
          isScrolled ? 'shadow-lg py-2' : 'py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo/Brand */}
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <AgentPhoto
                size={isScrolled ? 40 : 48}
                className="flex-shrink-0 shadow-sm"
                priority
              />
              <span className="flex flex-col">
                <span className="text-xl md:text-2xl font-bold" style={{ color: '#1a365d' }}>
                  Aliante Las Vegas
                </span>
                <span className="text-xs md:text-sm text-gray-600 font-medium hidden sm:block">
                  Homes by Dr. Jan Duffy | Your Trusted Local Expert Since 2018
                </span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link
                href="/homes-for-sale"
                className="text-base font-medium transition-colors hover:border-b-2 pb-1"
                style={{ color: '#1a365d', borderColor: '#2c5aa0' }}
                onMouseEnter={() => setActiveDropdown(null)}
              >
                Homes for Sale
              </Link>

              {/* New Construction Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('construction')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={activeDropdown === 'construction'}
                  className="text-base font-medium transition-colors hover:border-b-2 pb-1 flex items-center gap-1"
                  style={{ color: '#1a365d', borderColor: '#2c5aa0' }}
                  onClick={() =>
                    setActiveDropdown(activeDropdown === 'construction' ? null : 'construction')
                  }
                >
                  New Construction
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {activeDropdown === 'construction' && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2">
                    <Link
                      href="/new-construction"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      Overview
                    </Link>
                    <Link
                      href="/builders/lennar"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      Lennar
                    </Link>
                    <Link
                      href="/builders/dr-horton"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      D.R. Horton
                    </Link>
                    <Link
                      href="/builders/tri-pointe"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      Tri Pointe (Luxury)
                    </Link>
                    <Link
                      href="/builders/del-webb"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      Del Webb (55+)
                    </Link>
                    <Link
                      href="/builders/incentives"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors font-semibold"
                    >
                      Builder Incentives
                    </Link>
                  </div>
                )}
              </div>

              {/* Neighborhoods Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('neighborhoods')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={activeDropdown === 'neighborhoods'}
                  className="text-base font-medium transition-colors hover:border-b-2 pb-1 flex items-center gap-1"
                  style={{ color: '#1a365d', borderColor: '#2c5aa0' }}
                  onClick={() =>
                    setActiveDropdown(activeDropdown === 'neighborhoods' ? null : 'neighborhoods')
                  }
                >
                  Neighborhoods
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {activeDropdown === 'neighborhoods' && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2">
                    <Link
                      href="/neighborhoods"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      All Neighborhoods
                    </Link>
                    <Link
                      href="/neighborhoods/prominence"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      The Prominence
                    </Link>
                    <Link
                      href="/neighborhoods/club-aliante"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      Club Aliante (Golf)
                    </Link>
                    <Link
                      href="/neighborhoods/desert-willows"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      Desert Willows
                    </Link>
                    <Link
                      href="/neighborhoods/paseos"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      The Paseos
                    </Link>
                    <Link
                      href="/sun-city-aliante"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      Sun City (55+)
                    </Link>
                    <Link
                      href="/gated-communities"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      Gated Communities
                    </Link>
                    <Link
                      href="/neighborhoods/compare"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors font-semibold"
                    >
                      Compare Neighborhoods
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/market-report"
                className="text-base font-medium transition-colors hover:border-b-2 pb-1"
                style={{ color: '#1a365d', borderColor: '#2c5aa0' }}
                onMouseEnter={() => setActiveDropdown(null)}
              >
                Market Report
              </Link>

              <Link
                href="/about"
                className="text-base font-medium transition-colors hover:border-b-2 pb-1"
                style={{ color: '#1a365d', borderColor: '#2c5aa0' }}
                onMouseEnter={() => setActiveDropdown(null)}
              >
                About
              </Link>

              <Link
                href="/contact"
                className="text-base font-medium transition-colors hover:border-b-2 pb-1"
                style={{ color: '#1a365d', borderColor: '#2c5aa0' }}
                onMouseEnter={() => setActiveDropdown(null)}
              >
                Contact
              </Link>
            </div>

            {/* Right Side - CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="tel:+17027077273"
                className="text-lg font-semibold flex items-center gap-2 transition-colors"
                style={{ color: '#1a365d' }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                (702) 707-7273
              </a>

              <Link
                href="/search"
                className="px-6 py-2.5 rounded-lg font-semibold text-white transition-all transform hover:scale-105 hover:shadow-lg"
                style={{ backgroundColor: '#ed8936' }}
              >
                Search Properties
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
              aria-label="Toggle mobile menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  style={{ color: '#1a365d' }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  style={{ color: '#1a365d' }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="fixed top-0 right-0 bottom-0 w-80 bg-white z-50 lg:hidden shadow-2xl overflow-y-auto">
            <div className="p-6">
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-md hover:bg-gray-100"
                aria-label="Close menu"
              >
                <svg
                  className="w-6 h-6"
                  style={{ color: '#1a365d' }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-3 mb-6"
              >
                <AgentPhoto size={56} className="flex-shrink-0" />
                <span className="flex flex-col">
                  <span className="font-bold" style={{ color: '#1a365d' }}>
                    Dr. Jan Duffy
                  </span>
                  <span className="text-sm text-gray-600">Aliante real estate expert</span>
                </span>
              </Link>

              {/* Mobile Phone CTA */}
              <a
                href="tel:+17027077273"
                className="block w-full px-6 py-3 rounded-lg font-bold text-white text-center mb-6 transition-all"
                style={{ backgroundColor: '#ed8936' }}
              >
                📞 (702) 707-7273
              </a>

              {/* Mobile Navigation Links */}
              <nav className="space-y-1">
                <Link
                  href="/homes-for-sale"
                  className="block py-3 px-4 rounded-md font-medium transition-colors"
                  style={{ color: '#1a365d' }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Homes for Sale
                </Link>
                <Link
                  href="/new-construction"
                  className="block py-3 px-4 rounded-md font-medium transition-colors"
                  style={{ color: '#1a365d' }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  New Construction
                </Link>
                <Link
                  href="/builders"
                  className="block py-2 px-8 text-sm text-gray-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  All Builders
                </Link>
                <Link
                  href="/builders/incentives"
                  className="block py-2 px-8 text-sm text-gray-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Builder Incentives
                </Link>
                <Link
                  href="/neighborhoods"
                  className="block py-3 px-4 rounded-md font-medium transition-colors"
                  style={{ color: '#1a365d' }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Neighborhoods
                </Link>
                <Link
                  href="/neighborhoods/desert-willows"
                  className="block py-2 px-8 text-sm text-gray-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Desert Willows
                </Link>
                <Link
                  href="/neighborhoods/paseos"
                  className="block py-2 px-8 text-sm text-gray-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  The Paseos
                </Link>
                <Link
                  href="/neighborhoods/club-aliante"
                  className="block py-2 px-8 text-sm text-gray-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Club Aliante
                </Link>
                <Link
                  href="/sun-city-aliante"
                  className="block py-2 px-8 text-sm text-gray-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sun City Aliante
                </Link>
                <Link
                  href="/gated-communities"
                  className="block py-2 px-8 text-sm text-gray-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Gated Communities
                </Link>
                <Link
                  href="/golf-homes"
                  className="block py-2 px-8 text-sm text-gray-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Golf Course Homes
                </Link>
                <Link
                  href="/market-report"
                  className="block py-3 px-4 rounded-md font-medium transition-colors"
                  style={{ color: '#1a365d' }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Market Report
                </Link>
                <Link
                  href="/about"
                  className="block py-3 px-4 rounded-md font-medium transition-colors"
                  style={{ color: '#1a365d' }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  href="/contact"
                  className="block py-3 px-4 rounded-md font-medium transition-colors"
                  style={{ color: '#1a365d' }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                <Link
                  href="/search"
                  className="block py-3 px-4 rounded-md font-semibold text-white text-center mt-4"
                  style={{ backgroundColor: '#2c5aa0' }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Search Properties
                </Link>
              </nav>
            </div>
          </div>
        </>
      )}

      {/* Spacer to prevent content from going under fixed nav */}
      <div className={isScrolled ? 'h-16' : 'h-20'} />
    </>
  );
}
