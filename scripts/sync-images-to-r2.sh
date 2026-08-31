#!/usr/bin/env bash
# Sync Git backup images (public/images) to Cloudflare R2 — the primary store.
# Usage: CLOUDFLARE_ACCOUNT_ID=... npx wrangler login   # once
#        ./scripts/sync-images-to-r2.sh
set -euo pipefail

BUCKET="${R2_BUCKET:-aliante-site-images}"
ROOT="$(cd "$(dirname "$0")/.." && pwd)/public/images"

if ! command -v npx >/dev/null; then
  echo "npx is required" >&2
  exit 1
fi

echo "Uploading $ROOT -> r2://$BUCKET/images/ (remote)"
while IFS= read -r -d '' file; do
  rel="${file#"$ROOT/"}"
  key="images/${rel}"
  echo "  put $key"
  npx wrangler r2 object put "${BUCKET}/${key}" \
    --file="$file" \
    --content-type image/jpeg \
    --remote
done < <(find "$ROOT" -type f \( -name '*.jpg' -o -name '*.jpeg' -o -name '*.png' -o -name '*.webp' \) -print0)

echo "Done. Point NEXT_PUBLIC_CLOUDFLARE_R2_BASE at the R2 custom domain (https://images.aliantehomesforsale.com)."
