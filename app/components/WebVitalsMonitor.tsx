/**
 * Web Vitals Monitor Component
 * Tracks Core Web Vitals and sends to Google Analytics
 * Measures: LCP, FID, CLS, FCP, TTFB
 */

'use client';

import { useEffect } from 'react';
import { useReportWebVitals } from 'next/web-vitals';

export default function WebVitalsMonitor() {
  useReportWebVitals((metric) => {
    // Send to Google Analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', metric.name, {
        event_category: 'Web Vitals',
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        event_label: metric.id,
        non_interaction: true,
      });
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Web Vitals] ${metric.name}:`, {
        value: metric.value,
        rating: metric.rating,
        id: metric.id,
      });
    }

    // Optional: Send to custom analytics endpoint
    // fetch('/api/analytics/web-vitals', {
    //   method: 'POST',
    //   body: JSON.stringify(metric),
    //   headers: { 'Content-Type': 'application/json' }
    // });
  });

  return null;
}
