import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

function permanentRedirect(url: URL) {
  // 308 (not 307). NextResponse.redirect() defaults to 307, which Google treats as
  // temporary — Search Console then keeps the source URL in “Page with redirect”
  // and may not consolidate to www. 308 is the permanent equivalent of 301.
  // @see https://developers.google.com/search/docs/crawling-indexing/301-redirects
  return NextResponse.redirect(url, { status: 308 });
}

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get('host') || '';

  // Canonical domain enforcement (www + HTTPS)
  const canonicalDomain = 'www.aliantehomesforsale.com';

  const isLocalDev =
    hostname.includes('localhost') ||
    hostname.startsWith('127.0.0.1') ||
    hostname.startsWith('[::1]') ||
    hostname.includes('vercel.app');

  // Apex (and any other host) → https://www
  if (hostname !== canonicalDomain && !isLocalDev) {
    url.protocol = 'https:';
    url.host = canonicalDomain;
    return permanentRedirect(url);
  }

  if (url.protocol === 'http:' && !isLocalDev) {
    url.protocol = 'https:';
    return permanentRedirect(url);
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
