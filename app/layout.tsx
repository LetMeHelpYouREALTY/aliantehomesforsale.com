import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Script from 'next/script';
import { siteConfig } from '../lib/site-config';
import './globals.css';
import Breadcrumbs from './components/Breadcrumbs';
import CalendlyPageSection from './components/CalendlyPageSection';
import CalendlyPopupWidget from './components/CalendlyPopupWidget';
import EnhancedFooter from './components/EnhancedFooter';
import EnhancedNavigation from './components/EnhancedNavigation';
import EntityGraphSchema from './components/EntityGraphSchema';
import GoogleAnalytics from './components/GoogleAnalytics';
import PerformanceMonitor from './components/PerformanceMonitor';
import RealScoutSearchSectionLayout from './components/RealScoutSearchSectionLayout';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: siteConfig.defaultTitle,
  description: siteConfig.defaultDescription,
  keywords:
    'Aliante North Las Vegas homes for sale, Aliante real estate, North Las Vegas homes, 89084 homes for sale, Aliante gated community, Sun City Aliante, Club Aliante, new construction Aliante, Aliante MLS listings, houses for rent Aliante',
  authors: [{ name: siteConfig.siteName }],
  creator: siteConfig.siteName,
  publisher: siteConfig.siteName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(siteConfig.siteUrl),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/icon.png', type: 'image/png', sizes: '192x192' },
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  openGraph: {
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
    url: siteConfig.siteUrl,
    siteName: siteConfig.siteName,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Aliante North Las Vegas Real Estate & Homes For Sale',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // Only emit verification meta when a real token is configured (DNS verification needs no meta tag)
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? {
        verification: {
          google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
        },
      }
    : {}),
  other: {
    'geo.region': 'US-NV',
    'geo.placename': `${siteConfig.areaName}, ${siteConfig.region}`,
    'geo.position': `${siteConfig.geo.latitude};${siteConfig.geo.longitude}`,
    ICBM: `${siteConfig.geo.latitude}, ${siteConfig.geo.longitude}`,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ? (
          <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        ) : null}
        <link rel="stylesheet" href={siteConfig.calendly.styleSrc} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Skip link: WCAG 2.2 / keyboard users (focus visible) */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-gray-900 focus:rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
        >
          Skip to main content
        </a>
        {/* RealScout: load once for all widgets (office-listings, search, etc.) */}
        <Script
          src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
          strategy="afterInteractive"
          type="module"
        />
        {/* Calendly: load once for badge + popup buttons */}
        <Script src={siteConfig.calendly.scriptSrc} strategy="lazyOnload" />

        {/* Knowledge + Content + Agent graphs (SEO / AEO / GEO) */}
        <EntityGraphSchema />

        <EnhancedNavigation />
        <Breadcrumbs />

        <div id="main-content" tabIndex={-1}>
          {children}
        </div>

        {/* Matching Calendly event below content on pages without an inline scheduler */}
        <CalendlyPageSection />

        {/* RealScout search (lead gen): below hero on home (in page); below content on other pages */}
        <RealScoutSearchSectionLayout />

        <PerformanceMonitor />

        {/* Enhanced Footer with SEO-optimized structure */}
        <EnhancedFooter />
        <CalendlyPopupWidget />
        <SpeedInsights />
      </body>
    </html>
  );
}
