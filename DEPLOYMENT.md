# Deployment (Vercel)

**Project:** aliantehomesforsale.com  
**Project ID:** `prj_0RZw34lbC34PRwztLG5bqduiRxwY`  
**Team ID:** `team_EIbjFXaDDtGMTweb5Hvo3CG3` (`janet-duffys-projects`)  
**GitHub:** `LetMeHelpYouREALTY/aliantehomesforsale.com`  
**Production branch:** `main`

See [docs/DEPLOYMENT_AUDIT.md](docs/DEPLOYMENT_AUDIT.md) for the 2026-08-07 failure analysis.

## Production path (what actually works)

1. **Merge / push to `main`** — feature branches never update production.
2. **Vercel Git** (preferred): project Settings → Git → repo connected, Production Branch `main`.
3. **GitHub Actions** `Deploy Production`: runs on push to `main` after quality + build + security. Uses `npx vercel@latest --prod` with the Aliante project IDs hardcoded in `.github/workflows/ci-cd.yml`. Still needs a valid `VERCEL_TOKEN` secret.

## Required secret

| Secret | Value |
|--------|--------|
| `VERCEL_TOKEN` | [Vercel Account → Tokens](https://vercel.com/account/tokens) |

`VERCEL_ORG_ID` / `VERCEL_PROJECT_ID` secrets should match the IDs above if set; the workflow no longer trusts a wrong `VERCEL_PROJECT_ID` (it previously deployed **drjanduffy.com**).

## Deploy now (CLI)

```bash
npx vercel link --yes --scope janet-duffys-projects --project aliantehomesforsale.com
npx vercel --prod
```

## Production URL

- **Live site:** https://www.aliantehomesforsale.com
- **Dashboard:** https://vercel.com/janet-duffys-projects/aliantehomesforsale.com
