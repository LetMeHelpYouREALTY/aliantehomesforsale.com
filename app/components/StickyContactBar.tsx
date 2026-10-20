/**
 * Sticky Contact Bar - Mobile & Desktop Lead Capture
 * Shows after user scrolls 30% down the page
 * Optimized for conversion with click-to-call tracking
 */

'use client';

import { useState, useEffect } from 'react';

interface StickyContactBarProps {
  phoneNumber?: string;
  ctaText?: string;
}

export default function StickyContactBar({
  phoneNumber = '(702) 707-7273',
  ctaText = 'Search Homes Now'
}: StickyContactBarProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if user previously dismissed
    const dismissed = sessionStorage.getItem('contactBarDismissed');
    if (dismissed) {
      setIsDismissed(true);
      return;
    }

    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      setIsVisible(scrollPercent > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
    sessionStorage.setItem('contactBarDismissed', 'true');
  };

  const handlePhoneClick = () => {
    // Google Analytics tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'phone_call_click', {
        event_category: 'Contact',
        event_label: 'Sticky Bar',
        value: phoneNumber
      });
    }
  };

  if (isDismissed || !isVisible) return null;

  return (
    <div className="sticky-contact-bar" style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      background: 'linear-gradient(135deg, #1a365d 0%, #2c5aa0 100%)',
      color: 'white',
      padding: '12px 16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '12px',
      boxShadow: '0 -2px 10px rgba(0,0,0,0.15)',
      zIndex: 999,
      animation: 'slideUp 0.3s ease-out'
    }}>
      <style jsx>{`
        @keyframes slideUp {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @media (max-width: 640px) {
          .contact-buttons {
            flex-direction: column;
            width: 100%;
          }
          .contact-buttons a,
          .contact-buttons button {
            width: 100%;
          }
        }
      `}</style>

      {/* Message */}
      <div className="flex items-center gap-2" style={{ flex: 1, minWidth: 0 }}>
        <span style={{ fontSize: '18px' }}>🏡</span>
        <span style={{ fontSize: '14px', fontWeight: 600 }}>
          <span className="hidden sm:inline">Find Your Dream Aliante Home - </span>
          <span>286+ MLS Listings</span>
        </span>
      </div>

      {/* CTA Buttons */}
      <div className="contact-buttons" style={{
        display: 'flex',
        gap: '8px',
        alignItems: 'center'
      }}>
        <a
          href={`tel:${phoneNumber.replace(/\D/g, '')}`}
          onClick={handlePhoneClick}
          style={{
            background: '#ed8936',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '6px',
            fontWeight: 600,
            fontSize: '14px',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
            transition: 'all 0.2s',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px'
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = '#dd6b20'}
          onMouseLeave={(e) => e.currentTarget.style.background = '#ed8936'}
        >
          📞 <span className="hidden sm:inline">Call </span>{phoneNumber}
        </a>

        <a
          href="/search"
          style={{
            background: 'rgba(255,255,255,0.2)',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '6px',
            fontWeight: 600,
            fontSize: '14px',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
            border: '1px solid rgba(255,255,255,0.3)',
            transition: 'all 0.2s',
            display: 'inline-flex',
            alignItems: 'center'
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.3)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
        >
          {ctaText}
        </a>
      </div>

      {/* Dismiss Button */}
      <button
        onClick={handleDismiss}
        aria-label="Dismiss contact bar"
        style={{
          background: 'transparent',
          border: 'none',
          color: 'rgba(255,255,255,0.8)',
          fontSize: '20px',
          cursor: 'pointer',
          padding: '4px',
          lineHeight: 1,
          transition: 'color 0.2s'
        }}
        onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
        onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}
      >
        ×
      </button>
    </div>
  );
}
