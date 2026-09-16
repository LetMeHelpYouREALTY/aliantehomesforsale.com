import { existsSync, readdirSync, statSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

/**
 * Upload git-backed photos to Cloudflare R2 (tertiary backup).
 * Hosted Cloudflare Images is primary (`npm run media:upload`).
 * Keys match public URL paths (`/og-image.jpg`, `/images/foo.jpg`) so
 * NEXT_PUBLIC_CLOUDFLARE_MEDIA_BASE can prefix them 1:1.
 *
 * Required env: CLOUDFLARE_API_TOKEN, CLOUDFLARE_ACCOUNT_ID
 * Optional: R2_BUCKET (default: aliante-homes-media)
 *
 * Usage: npm run media:upload
 */
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const bucket = process.env.R2_BUCKET || 'aliante-homes-media';
const token = process.env.CLOUDFLARE_API_TOKEN;
const accountId = process.env.CLOUDFLARE_ACCOUNT_ID;

if (!token || !accountId) {
  console.error(
    'Skip R2 upload: set CLOUDFLARE_API_TOKEN and CLOUDFLARE_ACCOUNT_ID. Git public/ remains the fallback.'
  );
  process.exit(0);
}

/** @type {{ full: string; key: string }[]} */
const files = [];

function walk(dir, prefix) {
  for (const entry of readdirSync(dir)) {
    const full = path.join(dir, entry);
    if (statSync(full).isDirectory()) {
      walk(full, `${prefix}/${entry}`);
      continue;
    }
    if (/\.(jpe?g|png|webp|avif|svg|gif|ico)$/i.test(entry)) {
      files.push({ full, key: `${prefix}/${entry}`.replace(/^\//, '') });
    }
  }
}

function contentType(key) {
  if (key.endsWith('.png')) return 'image/png';
  if (key.endsWith('.webp')) return 'image/webp';
  if (key.endsWith('.avif')) return 'image/avif';
  if (key.endsWith('.svg')) return 'image/svg+xml';
  if (key.endsWith('.gif')) return 'image/gif';
  if (key.endsWith('.ico')) return 'image/x-icon';
  return 'image/jpeg';
}

const og = path.join(root, 'public', 'og-image.jpg');
if (existsSync(og)) {
  files.push({ full: og, key: 'og-image.jpg' });
}

walk(path.join(root, 'public', 'images'), 'images');

console.log(`Uploading ${files.length} files to R2 bucket ${bucket}`);

for (const file of files) {
  execFileSync(
    'npx',
    [
      'wrangler',
      'r2',
      'object',
      'put',
      `${bucket}/${file.key}`,
      '--file',
      file.full,
      '--content-type',
      contentType(file.key),
    ],
    { stdio: 'inherit', cwd: root, env: process.env }
  );
}

console.log(
  'R2 upload complete. Set NEXT_PUBLIC_CLOUDFLARE_MEDIA_BASE on Vercel to serve these URLs.'
);
