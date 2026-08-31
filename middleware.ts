import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get('host') || '';

  // Next.js serves app/page.tsx at both / and /index (Vercel x-matched-path: /).
  // Google crawled /index (200) with canonical to / → "Alternate page with proper canonical".
  // Permanent redirect so crawlers only keep the homepage URL.
  const path = url.pathname.replace(/\/+$/, '') || '/';
  if (path === '/index' || path === '/index.html') {
    url.pathname = '/';
    return NextResponse.redirect(url, 308);
  }

  // Canonical domain enforcement (www + HTTPS)
  const canonicalDomain = 'www.aliantehomesforsale.com';

  // Check if request is not to canonical domain
  const needsRedirect =
    hostname !== canonicalDomain &&
    !hostname.includes('localhost') &&
    !hostname.includes('vercel.app');

  if (needsRedirect) {
    // Force HTTPS and www
    url.protocol = 'https:';
    url.host = canonicalDomain;

    // 301 Permanent Redirect
    return NextResponse.redirect(url, 301);
  }

  // Force HTTPS even on correct domain
  if (url.protocol === 'http:' && !hostname.includes('localhost')) {
    url.protocol = 'https:';
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (public folder)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|xml|txt)).*)',
  ],
};
