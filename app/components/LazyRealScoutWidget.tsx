/**
 * Lazy-loaded RealScout Widget with Performance Optimization
 * Loads widget only when visible in viewport - saves ~100KB on initial page load
 */

'use client';

import { useEffect, useState, useRef } from 'react';
import dynamic from 'next/dynamic';

const RealScoutAdvancedSearch = dynamic(
  () => import('./RealScoutAdvancedSearch'),
  {
    loading: () => (
      <div className="realscout-loading" style={{
        minHeight: '400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#f7fafc'
      }}>
        <div className="loading-spinner">
          <div style={{
            border: '4px solid #f3f3f3',
            borderTop: '4px solid #ed8936',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            animation: 'spin 1s linear infinite'
          }} />
          <style jsx>{`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}</style>
        </div>
      </div>
    ),
    ssr: false
  }
);

export default function LazyRealScoutWidget() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '100px', // Start loading 100px before viewport
        threshold: 0.1
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef}>
      {isVisible ? <RealScoutAdvancedSearch /> : (
        <div style={{ minHeight: '400px', background: '#f7fafc' }} />
      )}
    </div>
  );
}
