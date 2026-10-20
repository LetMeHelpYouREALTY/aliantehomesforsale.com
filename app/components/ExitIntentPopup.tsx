/**
 * Exit-Intent Popup - Lead Capture
 * Triggers when user moves cursor toward browser close/back button
 * Prevents repeated displays with session storage
 */

'use client';

import { useState, useEffect } from 'react';

interface ExitIntentPopupProps {
  showDelay?: number; // Minimum time on site before showing (ms)
}

export default function ExitIntentPopup({ showDelay = 5000 }: ExitIntentPopupProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [canShow, setCanShow] = useState(false);

  useEffect(() => {
    // Check if already shown in this session
    const hasShown = sessionStorage.getItem('exitIntentShown');
    if (hasShown) return;

    // Wait minimum time before enabling
    const timer = setTimeout(() => setCanShow(true), showDelay);

    const handleMouseLeave = (e: MouseEvent) => {
      // Trigger when mouse moves to top of screen (browser controls)
      if (canShow && e.clientY <= 10 && !isVisible) {
        setIsVisible(true);
        sessionStorage.setItem('exitIntentShown', 'true');

        // Track in Google Analytics
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'exit_intent_shown', {
            event_category: 'Engagement',
            event_label: 'Exit Intent Popup'
          });
        }
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [canShow, isVisible, showDelay]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleCTAClick = (action: string) => {
    // Track conversion
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'exit_intent_conversion', {
        event_category: 'Conversion',
        event_label: action
      });
    }
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Overlay */}
      <div
        onClick={handleClose}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.7)',
          zIndex: 9998,
          animation: 'fadeIn 0.3s ease-out'
        }}
      />

      {/* Popup */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="exit-popup-title"
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'white',
          borderRadius: '16px',
          padding: '40px',
          maxWidth: '500px',
          width: '90%',
          boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
          zIndex: 9999,
          animation: 'popIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)'
        }}
      >
        <style jsx>{`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @keyframes popIn {
            from {
              opacity: 0;
              transform: translate(-50%, -50%) scale(0.8);
            }
            to {
              opacity: 1;
              transform: translate(-50%, -50%) scale(1);
            }
          }
        `}</style>

        {/* Close Button */}
        <button
          onClick={handleClose}
          aria-label="Close popup"
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: 'transparent',
            border: 'none',
            fontSize: '28px',
            color: '#666',
            cursor: 'pointer',
            lineHeight: 1,
            padding: '4px',
            transition: 'color 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#000'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#666'}
        >
          ×
        </button>

        {/* Content */}
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>🏡</div>

          <h2
            id="exit-popup-title"
            style={{
              fontSize: '28px',
              fontWeight: 'bold',
              marginBottom: '12px',
              color: '#1a365d'
            }}
          >
            Wait! Don't Miss Out
          </h2>

          <p style={{
            fontSize: '16px',
            color: '#4a5568',
            marginBottom: '24px',
            lineHeight: 1.6
          }}>
            Get instant access to <strong>286+ exclusive MLS listings</strong> in Aliante,
            updated every 15 minutes. Find your dream home before it's gone!
          </p>

          {/* CTA Buttons */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            marginBottom: '16px'
          }}>
            <a
              href="/search"
              onClick={() => handleCTAClick('Search Homes')}
              style={{
                background: '#ed8936',
                color: 'white',
                padding: '16px 32px',
                borderRadius: '8px',
                fontWeight: 600,
                fontSize: '16px',
                textDecoration: 'none',
                transition: 'all 0.2s',
                display: 'block'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#dd6b20'}
              onMouseLeave={(e) => e.currentTarget.style.background = '#ed8936'}
            >
              🔍 Search 286+ Homes Now
            </a>

            <a
              href="tel:+17027077273"
              onClick={() => handleCTAClick('Call Now')}
              style={{
                background: 'white',
                color: '#2c5aa0',
                padding: '16px 32px',
                borderRadius: '8px',
                fontWeight: 600,
                fontSize: '16px',
                textDecoration: 'none',
                border: '2px solid #2c5aa0',
                transition: 'all 0.2s',
                display: 'block'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#2c5aa0';
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'white';
                e.currentTarget.style.color = '#2c5aa0';
              }}
            >
              📞 Call (702) 707-7273
            </a>
          </div>

          <p style={{ fontSize: '12px', color: '#999', margin: 0 }}>
            ✓ MLS Direct Access &nbsp;•&nbsp; ✓ No Obligation &nbsp;•&nbsp; ✓ Free Consultation
          </p>
        </div>
      </div>
    </>
  );
}
