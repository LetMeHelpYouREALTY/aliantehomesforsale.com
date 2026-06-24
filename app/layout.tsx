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
import RealScoutWidget from './components/RealScoutWidget';

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
    'Browse 286+ Aliante homes for sale in North Las Vegas, NV. Updated every 15 minutes from MLS. Gated communities, Sun City Aliante 55+, new construction. Call (702) 707-7273 for expert local guidance.',
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
  openGraph: {
    title: 'Aliante North Las Vegas Real Estate & Homes For Sale | 286+ MLS Listings',
    description: 'Browse 286+ Aliante homes for sale in North Las Vegas, NV. Updated every 15 minutes from MLS. Gated communities, Sun City Aliante 55+, new construction.',
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
    description: 'Browse 286+ Aliante homes for sale in North Las Vegas, NV. Updated every 15 minutes from MLS. Gated communities, Sun City, new construction.',
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
        {/* Google Analytics */}
        <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX'} />

        {/* RealScout Web Components */}
        <script src="https://em.realscout.com/widgets/realscout-web-components.umd.js" type="module"></script>
        <style>{`
          realscout-office-listings {
            --rs-listing-divider-color: rgb(101, 141, 172);
            width: 100%;
          }
        `}</style>
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

        {/* RealScout Office Listings - Below the fold, above footer */}
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-center mb-8" style={{ color: '#1a365d' }}>
            Featured Aliante Properties
          </h2>
          <RealScoutWidget
            priceMin={500000}
            sortOrder="STATUS_AND_SIGNIFICANT_CHANGE"
            className="mb-8"
          />
        </div>

        {/* Enhanced Footer with SEO-optimized structure */}
        <EnhancedFooter />
      </body>
    </html>
  );
}
