/**
 * Cloudflare is the primary image CDN. Git `public/` is the backup and the
 * local/Vercel fallback when the media base is unset.
 *
 * Do not orange-cloud www.aliantehomesforsale.com — Vercel serves the app.
 * Point a gray-cloud hostname (e.g. media.aliantehomesforsale.com) at R2.
 */
const LOCAL_FALLBACK = '';

function mediaBase(): string {
  const raw = process.env.NEXT_PUBLIC_CLOUDFLARE_MEDIA_BASE?.trim();
  if (!raw) return LOCAL_FALLBACK;
  return raw.replace(/\/$/, '');
}

/** True when images should load from Cloudflare R2 / Images, not Vercel `/public`. */
export function isCloudflareMediaEnabled(): boolean {
  return mediaBase().length > 0;
}

/**
 * Resolve a site-relative path (`/images/foo.jpg` or `/og-image.jpg`) to either
 * the Cloudflare media origin or the git-backed Vercel public path.
 */
export function mediaSrc(path: string): string {
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  const normalized = path.startsWith('/') ? path : `/${path}`;
  const base = mediaBase();
  return base ? `${base}${normalized}` : normalized;
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
