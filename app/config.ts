// Next.js App Configuration
export const appConfig = {
  // Performance settings
  performance: {
    // Core Web Vitals thresholds
    lcp: 2500, // 2.5 seconds
    fid: 100, // 100 milliseconds
    cls: 0.1, // 0.1
    ttfb: 800, // 800 milliseconds
  },

  // SEO settings
  seo: {
    defaultTitle: 'Aliante Homes For Sale - Las Vegas Real Estate',
    titleTemplate: '%s | Aliante Homes For Sale',
    defaultDescription:
      'Discover beautiful homes for sale in Aliante, Las Vegas. Find your dream home with our comprehensive real estate listings and expert guidance.',
    siteUrl: 'https://www.aliantehomesforsale.com',
    openGraph: {
      type: 'website',
      locale: 'en_US',
      siteName: 'Aliante Homes For Sale',
    },
    twitter: {
      handle: '@aliantehomes',
      site: '@aliantehomes',
      cardType: 'summary_large_image',
    },
  },

  // Feature flags
  features: {
    // Enable/disable features based on environment
    analytics: process.env.NODE_ENV === 'production',
    performanceMonitoring: true,
    advancedCaching: true,
    imageOptimization: true,
    seoOptimization: true,
  },

  // Cache settings
  cache: {
    // Static page cache duration (in seconds)
    staticPages: 60 * 60 * 24, // 24 hours
    // API response cache duration
    apiResponses: 60 * 5, // 5 minutes
    // Image cache duration
    images: 60 * 60 * 24 * 30, // 30 days
  },

  // Security settings
  security: {
    // Content Security Policy
    csp: {
      'default-src': ["'self'"],
      'script-src': [
        "'self'",
        "'unsafe-eval'",
        "'unsafe-inline'",
        'https://em.realscout.com',
        'https://www.realscout.com',
        'https://assets.calendly.com',
        'https://calendly.com',
      ],
      'style-src': ["'self'", "'unsafe-inline'", 'https://assets.calendly.com'],
      'img-src': ["'self'", 'data:', 'https:'],
      'font-src': ["'self'", 'data:'],
      'connect-src': [
        "'self'",
        'https:',
        'https://em.realscout.com',
        'https://www.realscout.com',
        'https://calendly.com',
        'https://assets.calendly.com',
      ],
      'frame-src': [
        "'self'",
        'https://calendly.com',
        'https://www.calendly.com',
        'https://www.google.com',
      ],
    },
    // Rate limiting
    rateLimit: {
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100, // limit each IP to 100 requests per windowMs
    },
  },

  // Monitoring settings
  monitoring: {
    // Performance monitoring
    performance: {
      enabled: true,
      sampleRate: 0.1, // 10% of users
      metrics: ['lcp', 'fid', 'cls', 'ttfb'],
    },
    // Error monitoring
    errors: {
      enabled: true,
      sampleRate: 1.0, // 100% of errors
    },
    // User analytics
    analytics: {
      enabled: process.env.NODE_ENV === 'production',
      provider: 'vercel', // or 'google', 'mixpanel', etc.
    },
  },
};

// Environment-specific overrides
export const getConfig = () => {
  const baseConfig = appConfig;

  if (process.env.NODE_ENV === 'development') {
    return {
      ...baseConfig,
      features: {
        ...baseConfig.features,
        analytics: false,
        performanceMonitoring: true,
      },
      monitoring: {
        ...baseConfig.monitoring,
        performance: {
          ...baseConfig.monitoring.performance,
          sampleRate: 1.0, // 100% in development
        },
      },
    };
  }

  if (process.env.NODE_ENV === 'production') {
    return {
      ...baseConfig,
      features: {
        ...baseConfig.features,
        analytics: true,
        performanceMonitoring: true,
      },
    };
  }

  return baseConfig;
};
