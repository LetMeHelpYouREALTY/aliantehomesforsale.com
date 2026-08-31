import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get('host') || '';

  // Canonical domain enforcement (www + HTTPS)
  const canonicalDomain = 'www.aliantehomesforsale.com';

  // Check if request is not to canonical domain
  const needsRedirect =
    hostname !== canonicalDomain &&
    !hostname.includes('localhost') &&
    !hostname.startsWith('127.0.0.1') &&
    !hostname.startsWith('[::1]') &&
    !hostname.includes('vercel.app');

  if (needsRedirect) {
    // Force HTTPS and www
    url.protocol = 'https:';
    url.host = canonicalDomain;

    // 301 Permanent Redirect
    return NextResponse.redirect(url, 301);
  }

  // Force HTTPS even on correct domain
  if (url.protocol === 'http:' && !hostname.includes('localhost') && !hostname.startsWith('127.0.0.1')) {
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
