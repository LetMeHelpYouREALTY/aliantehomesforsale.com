import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import EnhancedNavigation from './components/EnhancedNavigation';
import Breadcrumbs from './components/Breadcrumbs';
import EnhancedFooter from './components/EnhancedFooter';
import PerformanceMonitor from './components/PerformanceMonitor';
import GoogleAnalytics from './components/GoogleAnalytics';
import StructuredData from './components/StructuredData';
import LocationSchema from './components/LocationSchema';

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
  title: 'Aliante North Las Vegas Real Estate & Homes For Sale | 286+ MLS Listings',
  description:
    'Discover your dream home in Aliante, North Las Vegas with 286+ MLS listings updated every 15 minutes. Expert guidance from Dr. Jan Duffy on gated communities, Sun City Aliante 55+, and new construction. Call (702) 707-7273 today.',
  keywords:
    'Aliante North Las Vegas homes for sale, Aliante real estate, North Las Vegas homes, 89084 homes for sale, Aliante gated community, Sun City Aliante, Club Aliante, new construction Aliante, Aliante MLS listings, houses for rent Aliante',
  authors: [{ name: 'Aliante Las Vegas | Homes by Dr. Jan Duffy' }],
  creator: 'Aliante Las Vegas | Homes by Dr. Jan Duffy',
  publisher: 'Aliante Las Vegas | Homes by Dr. Jan Duffy',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.aliantehomesforsale.com'),
  alternates: {
    canonical: '/',
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Aliante Homes',
  },
  applicationName: 'Aliante Homes For Sale',
  openGraph: {
    title: 'Aliante North Las Vegas Real Estate & Homes For Sale | 286+ MLS Listings',
    description: 'Find your perfect home in Aliante with expert guidance from Dr. Jan Duffy. 286+ listings updated every 15 minutes. Explore gated communities, Sun City Aliante 55+, and new construction options.',
    url: 'https://www.aliantehomesforsale.com',
    siteName: 'Aliante Las Vegas | Homes by Dr. Jan Duffy',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=630&fit=crop&q=80',
        width: 1200,
        height: 630,
        alt: 'Luxury Home in Aliante North Las Vegas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aliante North Las Vegas Real Estate & Homes For Sale | 286+ MLS Listings',
    description: 'Find your dream home in Aliante with Dr. Jan Duffy. 286+ MLS listings updated every 15 minutes. Gated communities, Sun City 55+, new construction.',
    images: ['https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=630&fit=crop&q=80'],
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
  verification: {
    google: 'your-google-verification-code',
  },
  other: {
    'geo.region': 'US-NV',
    'geo.placename': 'Aliante, North Las Vegas',
    'geo.position': '36.1699;-115.1398',
    'ICBM': '36.1699, -115.1398',
    'geo.place': 'Aliante, North Las Vegas, Nevada, 89084',
    'rating': '4.9',
    'reviews': '127',
    'transactions': '500+',
    'established': '2018',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#2563eb" />
        <meta name="mobile-web-app-capable" content="yes" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

        {/* Performance Optimizations - Preconnect to external domains */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Google Analytics */}
        <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX'} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Core Structured Data - Organization & LocalBusiness & Location */}
        <StructuredData type="Organization" />
        <StructuredData type="LocalBusiness" />
        <LocationSchema />
        
        <EnhancedNavigation />
        <Breadcrumbs />
        
        {children}
        <PerformanceMonitor />

        {/* Enhanced Footer with SEO-optimized structure */}
        <EnhancedFooter />
      </body>
    </html>
  );
}
