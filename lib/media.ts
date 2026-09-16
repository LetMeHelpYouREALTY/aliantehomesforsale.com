import {
  cloudflareImagesDeliveryUrl,
  deliverySrcToGitPath,
  isCloudflareImagesDeliverySrc,
  isCloudflareImagesEnabled,
} from './cloudflare-images';

/**
 * Cloudflare Images (imagedelivery.net) is the primary CDN in production.
 * Git `public/` is the backup and the local/preview fallback.
 * Optional R2 (`NEXT_PUBLIC_CLOUDFLARE_MEDIA_BASE`) is tertiary.
 *
 * Do not orange-cloud www.aliantehomesforsale.com — Vercel serves the app.
 */

const LOCAL_FALLBACK = '';

function r2MediaBase(): string {
  const raw = process.env.NEXT_PUBLIC_CLOUDFLARE_MEDIA_BASE?.trim();
  if (!raw) return LOCAL_FALLBACK;
  return raw.replace(/\/$/, '');
}

function normalizePath(path: string): string {
  return path.startsWith('/') ? path : `/${path}`;
}

/** True when <img> / next/image should load from Cloudflare, not Vercel `/public`. */
export function isCloudflareMediaEnabled(): boolean {
  return isCloudflareImagesEnabled() || r2MediaBase().length > 0;
}

/**
 * Resolve a site-relative path (`/images/foo.jpg` or `/og-image.jpg`) to
 * Cloudflare Images, optional R2, or the git-backed Vercel public path.
 */
export function mediaSrc(path: string): string {
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  const normalized = normalizePath(path);
  if (isCloudflareImagesEnabled()) {
    return cloudflareImagesDeliveryUrl(normalized);
  }
  const r2 = r2MediaBase();
  return r2 ? `${r2}${normalized}` : normalized;
}

export function isRemoteMediaSrc(src: string): boolean {
  return src.startsWith('http://') || src.startsWith('https://');
}

/** Absolute URL for JSON-LD and Open Graph. Cloudflare when configured; else this site. */
export function absoluteMediaUrl(pathOrUrl: string, siteUrl: string): string {
  const src = mediaSrc(pathOrUrl);
  if (src.startsWith('http://') || src.startsWith('https://')) {
    return src;
  }
  return `${siteUrl}${src}`;
}

export function isCloudflareHostedSrc(src: string): boolean {
  if (isCloudflareImagesDeliverySrc(src)) return true;
  const r2 = r2MediaBase();
  return r2.length > 0 && src.startsWith(r2);
}

/**
 * Git `public/` path to use when a Cloudflare delivery URL 404s in the browser.
 */
export function gitFallbackSrc(src: string): string | undefined {
  const fromImages = deliverySrcToGitPath(src);
  if (fromImages) return fromImages;

  const r2 = r2MediaBase();
  if (r2 && src.startsWith(`${r2}/`)) {
    return src.slice(r2.length);
  }
  if (r2 && src === r2) return undefined;
  return undefined;
}
