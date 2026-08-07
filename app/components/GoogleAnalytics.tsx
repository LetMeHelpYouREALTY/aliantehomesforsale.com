'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import Script from 'next/script';
import { Suspense, useEffect } from 'react';

interface GoogleAnalyticsProps {
  measurementId?: string;
}

function GoogleAnalyticsInner({ measurementId }: GoogleAnalyticsProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isValidId = Boolean(measurementId && !measurementId.includes('XXXX'));

  // Track page views on route change
  useEffect(() => {
    if (!isValidId || !measurementId) return;
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', measurementId, {
        page_path: pathname + (searchParams ? `?${searchParams.toString()}` : ''),
      });
    }
  }, [pathname, searchParams, measurementId, isValidId]);

  return null;
}

export default function GoogleAnalytics(props: GoogleAnalyticsProps) {
  const { measurementId } = props;

  // Don't load in development or without a real measurement ID
  if (process.env.NODE_ENV === 'development' || !measurementId || measurementId.includes('XXXX')) {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${measurementId}', {
              page_path: window.location.pathname,
              send_page_view: true
            });
          `,
        }}
      />
      <Suspense fallback={null}>
        <GoogleAnalyticsInner measurementId={measurementId} />
      </Suspense>
    </>
  );
}

// Helper function to track custom events
export function trackEvent(
  eventName: string,
  eventParams?: {
    category?: string;
    label?: string;
    value?: number;
    [key: string]: unknown;
  }
) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
}

// Common event trackers for real estate site
export const trackPropertyView = (propertyId: string, price: number) => {
  trackEvent('view_item', {
    category: 'Property',
    label: propertyId,
    value: price,
    items: [
      {
        item_id: propertyId,
        item_name: `Property ${propertyId}`,
        price: price,
      },
    ],
  });
};

export const trackContactFormSubmit = (formType: string) => {
  trackEvent('generate_lead', {
    category: 'Contact',
    label: formType,
    value: 1,
  });
};

export const trackSearch = (searchTerm: string, filters: Record<string, unknown>) => {
  trackEvent('search', {
    category: 'Property Search',
    search_term: searchTerm,
    ...filters,
  });
};

export const trackPhoneClick = () => {
  trackEvent('phone_click', {
    category: 'Contact',
    label: 'Header Phone',
  });
};

export const trackEmailClick = () => {
  trackEvent('email_click', {
    category: 'Contact',
    label: 'Header Email',
  });
};

// Declare gtag global type
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void;
    dataLayer: unknown[];
  }
}
