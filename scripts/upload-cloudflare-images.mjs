import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

/**
 * Upload git-backed photos to Cloudflare Images (hosted assets).
 * Custom IDs match public paths without a leading slash so delivery URLs are:
 *   https://imagedelivery.net/<HASH>/<id>/public
 *
 * Keep IDs in sync with lib/cloudflare-images.ts.
 *
 * Required env: CLOUDFLARE_API_TOKEN
 * Optional: CLOUDFLARE_ACCOUNT_ID, CLOUDFLARE_IMAGES_REPLACE=1
 *
 * Usage: npm run media:upload
 *
 * @see https://developers.cloudflare.com/images/storage/upload-images/upload-custom-path/
 * @see https://developers.cloudflare.com/images/storage/manage-images/delete-images/
 */

const ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID || '2cc579c1ec9e426ed585e933ebf4753b';
const HASH = 'byE6BTe9lNqo21V57n4aPQ';
const VARIANT = 'public';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const token = process.env.CLOUDFLARE_API_TOKEN;
const replaceExisting =
  process.env.CLOUDFLARE_IMAGES_REPLACE === '1' || process.argv.includes('--replace');

if (!token) {
  console.error(
    'Skip Cloudflare Images upload: set CLOUDFLARE_API_TOKEN (Account > Images > Edit). Git public/ remains the fallback.'
  );
  process.exit(0);
}

/** @type {{ full: string; id: string }[]} */
const files = [];

function walk(dir, prefix) {
  if (!existsSync(dir)) return;
  for (const entry of readdirSync(dir)) {
    const full = path.join(dir, entry);
    if (statSync(full).isDirectory()) {
      walk(full, `${prefix}/${entry}`);
      continue;
    }
    if (/\.(jpe?g|png|webp|avif|gif)$/i.test(entry)) {
      files.push({ full, id: `${prefix}/${entry}`.replace(/^\//, '') });
    }
  }
}

function contentType(id) {
  const lower = id.toLowerCase();
  if (lower.endsWith('.png')) return 'image/png';
  if (lower.endsWith('.webp')) return 'image/webp';
  if (lower.endsWith('.avif')) return 'image/avif';
  if (lower.endsWith('.gif')) return 'image/gif';
  return 'image/jpeg';
}

const og = path.join(root, 'public', 'og-image.jpg');
if (existsSync(og)) {
  files.push({ full: og, id: 'og-image.jpg' });
}

walk(path.join(root, 'public', 'images'), 'images');

const apiBase = `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/images/v1`;

/**
 * @param {string} method
 * @param {string} url
 * @param {RequestInit} [init]
 */
async function cfFetch(method, url, init = {}) {
  const response = await fetch(url, {
    ...init,
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      ...(init.headers || {}),
    },
  });
  const body = await response.json().catch(() => ({}));
  return { response, body };
}

/**
 * @param {string} id
 */
async function deleteImage(id) {
  const encoded = encodeURIComponent(id);
  const { response, body } = await cfFetch('DELETE', `${apiBase}/${encoded}`);
  if (!response.ok && response.status !== 404) {
    throw new Error(`DELETE ${id} failed (${response.status}): ${JSON.stringify(body.errors || body)}`);
  }
}

/**
 * @param {{ full: string; id: string }} file
 */
function buildForm(file) {
  const bytes = readFileSync(file.full);
  const blob = new Blob([bytes], { type: contentType(file.id) });
  const form = new FormData();
  form.append('file', blob, path.basename(file.full));
  form.append('id', file.id);
  form.append('requireSignedURLs', 'false');
  form.append('metadata', JSON.stringify({ gitPath: `/${file.id}` }));
  return form;
}

/**
 * @param {{ full: string; id: string }} file
 * @returns {Promise<'uploaded' | 'skipped' | 'replaced'>}
 */
async function uploadFile(file) {
  const { response, body } = await cfFetch('POST', apiBase, { body: buildForm(file) });

  if (response.ok && body.success) return 'uploaded';

  const duplicate =
    response.status === 409 ||
    (Array.isArray(body.errors) &&
      body.errors.some(
        (err) => err.code === 5409 || String(err.message || '').toLowerCase().includes('already exists')
      ));

  if (duplicate && !replaceExisting) {
    return 'skipped';
  }

  if (duplicate && replaceExisting) {
    await deleteImage(file.id);
    const retry = await cfFetch('POST', apiBase, { body: buildForm(file) });
    if (retry.response.ok && retry.body.success) return 'replaced';
    throw new Error(
      `Replace ${file.id} failed (${retry.response.status}): ${JSON.stringify(retry.body.errors || retry.body)}`
    );
  }

  throw new Error(`Upload ${file.id} failed (${response.status}): ${JSON.stringify(body.errors || body)}`);
}

console.log(
  `Uploading ${files.length} files to Cloudflare Images (account ${ACCOUNT_ID}, hash ${HASH}, variant ${VARIANT})`
);

let uploaded = 0;
let skipped = 0;
let replaced = 0;

for (const file of files) {
  const result = await uploadFile(file);
  if (result === 'uploaded') {
    uploaded += 1;
    console.log(`  uploaded ${file.id} → https://imagedelivery.net/${HASH}/${file.id}/${VARIANT}`);
  } else if (result === 'replaced') {
    replaced += 1;
    console.log(`  replaced ${file.id}`);
  } else {
    skipped += 1;
    console.log(`  skipped ${file.id} (already exists)`);
  }
}

console.log(
  `Cloudflare Images upload complete. uploaded=${uploaded} replaced=${replaced} skipped=${skipped}`
);
console.log(
  'Production (VERCEL_ENV=production) serves these URLs. Set NEXT_PUBLIC_CLOUDFLARE_IMAGES_ENABLED=false to force git/R2.'
);
