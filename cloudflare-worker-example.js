/**
 * Cloudflare Worker for SEO Optimization
 *
 * This worker handles:
 * 1. Non-www to www redirects
 * 2. Sitemap/robots.txt caching
 * 3. RealScout widget script handling
 * 4. Security headers
 * 5. Google Analytics compatibility
 */

addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const url = new URL(request.url);

  // 1. Redirect non-www to www (for SEO consistency)
  if (url.hostname === 'aliantehomesforsale.com') {
    url.hostname = 'www.aliantehomesforsale.com';
    return Response.redirect(url.toString(), 301);
  }

  // 2. Handle sitemap.xml with proper caching
  if (url.pathname === '/sitemap.xml') {
    const response = await fetch(request);
    const newResponse = new Response(response.body, response);

    // Set cache headers
    newResponse.headers.set('Content-Type', 'application/xml');
    newResponse.headers.set('Cache-Control', 'public, max-age=3600, s-maxage=3600');
    newResponse.headers.set('X-Robots-Tag', 'noindex'); // Sitemaps shouldn't appear in search

    return newResponse;
  }

  // 3. Handle robots.txt with proper caching
  if (url.pathname === '/robots.txt') {
    const response = await fetch(request);
    const newResponse = new Response(response.body, response);

    newResponse.headers.set('Content-Type', 'text/plain');
    newResponse.headers.set('Cache-Control', 'public, max-age=3600, s-maxage=3600');

    return newResponse;
  }

  // 4. Bypass cache for RealScout widget scripts (always fresh)
  if (
    url.hostname.includes('realscout') ||
    url.pathname.includes('realscout') ||
    url.hostname === 'em.realscout.com'
  ) {
    return fetch(request, {
      cf: {
        cacheTtl: 0,
        cacheEverything: false,
      },
    });
  }

  // 5. Handle API routes (no caching for dynamic data)
  if (url.pathname.startsWith('/api/')) {
    const response = await fetch(request);
    const newResponse = new Response(response.body, response);

    newResponse.headers.set('Cache-Control', 'public, max-age=0, must-revalidate');

    return newResponse;
  }

  // 6. Handle all other requests
  const response = await fetch(request);
  const newResponse = new Response(response.body, response);

  // Add security headers
  newResponse.headers.set('X-Content-Type-Options', 'nosniff');
  newResponse.headers.set('X-Frame-Options', 'DENY');
  newResponse.headers.set('X-XSS-Protection', '1; mode=block');
  newResponse.headers.set('Referrer-Policy', 'origin-when-cross-origin');

  // Add Content Security Policy that allows RealScout and Google Analytics
  const csp = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://em.realscout.com https://www.realscout.com https://www.googletagmanager.com https://www.google-analytics.com https://ssl.google-analytics.com https://assets.calendly.com",
    "style-src 'self' 'unsafe-inline' https://assets.calendly.com",
    "img-src 'self' data: https: https://www.google-analytics.com",
    "connect-src 'self' https://em.realscout.com https://www.realscout.com https://www.google-analytics.com https://region1.google-analytics.com https://region1.analytics.google.com https://calendly.com https://assets.calendly.com",
    "font-src 'self' data:",
    "frame-src 'self' https://calendly.com https://www.calendly.com https://www.google.com https://maps.google.com",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
  ].join('; ');

  newResponse.headers.set('Content-Security-Policy', csp);

  return newResponse;
}

/**
 * Optional: Advanced caching with Cloudflare KV
 *
 * If you want to cache API responses, you can use Cloudflare Workers KV:
 *
 * // In your Cloudflare Workers KV:
 * // Namespace: PROPERTY_CACHE
 *
 * async function getCachedProperties(request) {
 *   const cacheKey = new URL(request.url).pathname
 *
 *   // Try to get from KV
 *   let cachedData = await PROPERTY_CACHE.get(cacheKey, 'json')
 *
 *   if (cachedData) {
 *     return new Response(JSON.stringify(cachedData), {
 *       headers: { 'Content-Type': 'application/json' }
 *     })
 *   }
 *
 *   // Fetch from origin
 *   const response = await fetch(request)
 *   const data = await response.json()
 *
 *   // Store in KV for 5 minutes
 *   await PROPERTY_CACHE.put(cacheKey, JSON.stringify(data), { expirationTtl: 300 })
 *
 *   return new Response(JSON.stringify(data), {
 *     headers: { 'Content-Type': 'application/json' }
 *   })
 * }
 */
