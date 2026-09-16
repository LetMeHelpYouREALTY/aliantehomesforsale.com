/**
 * Cloudflare Images (hosted assets).
 *
 * Delivery: https://imagedelivery.net/<ACCOUNT_HASH>/<IMAGE_ID>/<VARIANT>
 * Custom IDs match git public paths without a leading slash
 * (`images/office-nap.jpg`, `og-image.jpg`).
 *
 * The account hash is public in every delivery URL. Never commit API tokens.
 *
 * @see https://developers.cloudflare.com/images/optimization/hosted-images/serve-uploaded-images/
 * @see https://developers.cloudflare.com/images/storage/upload-images/upload-custom-path/
 */

/** Cloudflare account that owns hosted Images. Safe to commit (not a secret). */
export const CLOUDFLARE_ACCOUNT_ID = '2cc579c1ec9e426ed585e933ebf4753b';

/** Images account hash from the dashboard Developer Resources delivery URL. */
export const CLOUDFLARE_IMAGES_ACCOUNT_HASH = 'byE6BTe9lNqo21V57n4aPQ';

export const CLOUDFLARE_IMAGES_DELIVERY_ORIGIN = 'https://imagedelivery.net';

/** Default hosted variant — Cloudflare creates `public` automatically. */
export const CLOUDFLARE_IMAGES_DEFAULT_VARIANT = 'public';

export function cloudflareImagesHash(): string {
  const override = process.env.NEXT_PUBLIC_CLOUDFLARE_IMAGES_HASH?.trim();
  return override || CLOUDFLARE_IMAGES_ACCOUNT_HASH;
}

export function cloudflareImagesVariant(): string {
  const override = process.env.NEXT_PUBLIC_CLOUDFLARE_IMAGES_VARIANT?.trim();
  return override || CLOUDFLARE_IMAGES_DEFAULT_VARIANT;
}

/** Site-relative path → hosted Images custom ID (no leading slash). */
export function pathToImagesId(path: string): string {
  return path.replace(/^\/+/, '');
}

/**
 * Encode a custom ID for delivery URLs.
 * `%` must be `%25`; slashes stay as subpaths.
 */
export function encodeImagesId(id: string): string {
  return id
    .split('/')
    .map((segment) => segment.replace(/%/g, '%25'))
    .join('/');
}

export function decodeImagesId(encodedId: string): string {
  return encodedId.replace(/%25/g, '%');
}

export function cloudflareImagesDeliveryUrl(path: string, variant?: string): string {
  const hash = cloudflareImagesHash();
  const id = encodeImagesId(pathToImagesId(path));
  const name = variant || cloudflareImagesVariant();
  return `${CLOUDFLARE_IMAGES_DELIVERY_ORIGIN}/${hash}/${id}/${name}`;
}

export function isCloudflareImagesDeliverySrc(src: string): boolean {
  return src.startsWith(`${CLOUDFLARE_IMAGES_DELIVERY_ORIGIN}/`);
}

/**
 * Reverse a delivery URL to the git public path (`/images/foo.jpg`).
 * Returns undefined when the URL is not this account's Images host.
 */
export function deliverySrcToGitPath(src: string): string | undefined {
  const hash = cloudflareImagesHash();
  const prefix = `${CLOUDFLARE_IMAGES_DELIVERY_ORIGIN}/${hash}/`;
  if (!src.startsWith(prefix)) return undefined;

  const rest = src.slice(prefix.length);
  const variant = `/${cloudflareImagesVariant()}`;
  const id = rest.endsWith(variant) ? rest.slice(0, -variant.length) : rest;
  if (!id) return undefined;
  return `/${decodeImagesId(id)}`;
}

function envFlag(name: string): boolean | undefined {
  const raw = process.env[name]?.trim().toLowerCase();
  if (!raw) return undefined;
  if (raw === 'true' || raw === '1' || raw === 'on' || raw === 'yes') return true;
  if (raw === 'false' || raw === '0' || raw === 'off' || raw === 'no') return false;
  return undefined;
}

/**
 * Hosted Images URLs in Vercel production by default (client + server via
 * NEXT_PUBLIC_VERCEL_ENV so hydration matches).
 * Local and preview stay on git unless explicitly enabled.
 * Set NEXT_PUBLIC_CLOUDFLARE_IMAGES_ENABLED=false to force git/R2.
 */
export function isCloudflareImagesEnabled(): boolean {
  const flag = envFlag('NEXT_PUBLIC_CLOUDFLARE_IMAGES_ENABLED');
  if (flag === false) return false;
  if (flag === true) return true;
  const vercelEnv = process.env.NEXT_PUBLIC_VERCEL_ENV?.trim() || process.env.VERCEL_ENV?.trim();
  return vercelEnv === 'production';
}
