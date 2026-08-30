'use client';

import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="main-navigation">
      <div className="nav-container">
        <div className="nav-brand">
          <a href="/" className="brand-link">
            <span className="text-xl font-bold">Aliante Las Vegas</span>
            <span className="brand-subtitle">
              Homes by Dr. Jan Duffy | Your Trusted Local Expert Since 2018
            </span>
          </a>
        </div>

        <div className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <a href="/homes-for-sale" className="nav-link">
                Homes for Sale
              </a>
            </li>
            <li className="nav-item">
              <a href="/new-construction" className="nav-link">
                New Construction
              </a>
            </li>
            <li className="nav-item">
              <a href="/neighborhoods" className="nav-link">
                Neighborhoods
              </a>
            </li>
            <li className="nav-item">
              <a href="/market-report" className="nav-link">
                Market Report
              </a>
            </li>
            <li className="nav-item">
              <a href="/about" className="nav-link">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a href="/contact" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="nav-actions">
          <a href="/search" className="nav-cta primary">
            Search Properties
          </a>
          <button
            type="button"
            className="mobile-menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span className="hamburger"></span>
          </button>
        </div>
      </div>
    </nav>
  );
}
