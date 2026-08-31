import path from 'node:path';
import { fileURLToPath } from 'node:url';
import type { NextConfig } from 'next';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  // Project root for file tracing (silences multiple-lockfile warning when parent has another lockfile)
  outputFileTracingRoot: __dirname,

  // Vercel optimizations
  poweredByHeader: false,
  compress: true,
  generateEtags: true,

  // Next.js performance optimizations
  experimental: {
    // Enable optimizations for Vercel
    optimizePackageImports: ['react', 'react-dom'],
    // Advanced Next.js features
    optimizeCss: true,
    scrollRestoration: true,
  },

  // Turbopack configuration
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
    // Advanced Turbopack optimizations
    resolveAlias: {
      react: require.resolve('react'),
      'react-dom': require.resolve('react-dom'),
    },
  },

  // Image optimization
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    // Advanced image optimizations
    dangerouslyAllowSVG: true,
    contentSecurityPolicy:
      "default-src 'self'; script-src 'self' https://em.realscout.com https://www.realscout.com; sandbox;",
    // Performance optimizations
    unoptimized: false,
    loader: 'default',
    // Modern format support
    formats: ['image/webp', 'image/avif'],
    qualities: [75, 80],
    // External domains for images and other services
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com',
      },
      {
        protocol: 'https',
        hostname: 'files.keepingcurrentmatters.com',
      },
    ],
  },

  // Headers for security and performance
  async headers() {
    return [
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/xml; charset=utf-8',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=3600',
          },
          {
            key: 'X-Robots-Tag',
            value: 'noindex',
          },
        ],
      },
      {
        source: '/sitemap.xsl',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/xsl; charset=utf-8',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, s-maxage=86400',
          },
          {
            key: 'X-Robots-Tag',
            value: 'noindex',
          },
        ],
      },
      {
        source: '/robots.txt',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/plain; charset=utf-8',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=3600',
          },
        ],
      },
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
      {
        source: '/api/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
        ],
      },
    ];
  },

  // Redirects for better SEO (301/308). next.config.js was deleted so this file is authoritative.
  async redirects() {
    return [
      // Apex → www (also covered in vercel.json; keep here for non-Vercel / consistency)
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'aliantehomesforsale.com' }],
        destination: 'https://www.aliantehomesforsale.com/:path*',
        permanent: true,
      },
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      // Consolidate duplicate Sun City URLs onto the stronger slug
      {
        source: '/neighborhoods/sun-city',
        destination: '/sun-city-aliante',
        permanent: true,
      },
      {
        source: '/neighborhoods/sun-city/',
        destination: '/sun-city-aliante',
        permanent: true,
      },
      // One canonical sitemap. Child/index files duplicated the same URLs.
      {
        source: '/sitemap-index.xml',
        destination: '/sitemap.xml',
        permanent: true,
      },
      {
        source: '/sitemap-builders.xml',
        destination: '/sitemap.xml',
        permanent: true,
      },
      {
        source: '/sitemap-neighborhoods.xml',
        destination: '/sitemap.xml',
        permanent: true,
      },
    ];
  },

  reactStrictMode: true,

  // Advanced Next.js optimizations
  compiler: {
    // Remove console logs in production
    removeConsole: process.env.NODE_ENV === 'production',
    // Emotion support for CSS-in-JS
    emotion: false,
    // React refresh for development
    reactRemoveProperties: process.env.NODE_ENV === 'production',
  },

  // Bundle analyzer (optional)
  webpack: (config, { dev, isServer }) => {
    // Optimize bundle splitting
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
            priority: 10,
          },
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'all',
            priority: 5,
          },
        },
      };
    }

    // SVG optimization
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },

  // Advanced caching
  onDemandEntries: {
    // Period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // Number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 2,
  },

  // Performance monitoring
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
    // Force sitemap to use production URL
    NEXT_PUBLIC_SITE_URL: 'https://www.aliantehomesforsale.com',
  },
};

export default nextConfig;
