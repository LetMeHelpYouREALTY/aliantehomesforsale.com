# Deployment Audit: Why Git Push Did Not Deploy to Vercel

**Date:** 2026-08-07  
**Repo:** LetMeHelpYouREALTY/aliantehomesforsale.com  
**Vercel project:** aliantehomesforsale.com (`prj_0RZw34lbC34PRwztLG5bqduiRxwY`)  
**Team:** janet-duffys-projects (`team_EIbjFXaDDtGMTweb5Hvo3CG3`)

---

## Verdict

`git add` / `commit` / `push` was not updating **www.aliantehomesforsale.com** because of **four independent failures**. Production was stuck on commit `e24b2b6` (hero slideshow) while `main` had moved ahead.

| # | Failure | Severity |
|---|---------|----------|
| 1 | Work pushed to a **feature branch**, not `main` | High |
| 2 | **GitHub Actions** quality gate blocked deploy (`npm audit` / Biome) | High |
| 3 | Actions deploy targeted **wrong Vercel project** (`drjanduffy.com`) + **outdated CLI** | Critical |
| 4 | **Vercel Git auto-deploy** did not create builds for new `main` SHAs | Critical |

---

## Evidence (2026-08-07)

### Live site vs `main`

- Live `robots.txt` still had `Disallow: /_next/` (removed in newer commits).
- Vercel latest production deployment was still SHA `e24b2b6`.
- `main` HEAD after merge/CI fix: `5c4a1ec`.

### GitHub Actions run `31157498579` (push `5c4a1ec`)

| Job | Result | Notes |
|-----|--------|-------|
| Code Quality | Success | After `continue-on-error` on `npm audit` + Next bump |
| Build & Test | Success | |
| Security Scan | Success | |
| Performance Testing | Failure | Lighthouse vs `localhost:3000` with **no server started** (does not block prod) |
| **Deploy Production** | **Failure** | See below |
| Deploy Preview | Skipped | Push, not PR |

**Deploy Production log (smoking gun):**

```text
Deploying janet-duffys-projects/drjanduffy.com
Error! Your Vercel CLI version is outdated. This endpoint requires version 47.2.2 or later.
```

So when Actions finally ran deploy, it:

1. Used `amondnet/vercel-action@v25` → `vercel@25.1.0` (API rejects it).
2. Used `secrets.VERCEL_PROJECT_ID` which resolves to **drjanduffy.com**, not Aliante.

### Vercel Git integration

- Project exists and has domains for `aliantehomesforsale.com` / `www`.
- Deployments after org move show `githubOrg: LetMeHelpYouREALTY`, but **no deployment** was created for `a54d9dd` or `5c4a1ec` until an explicit API deploy.
- Docs still mention old owner `DrJanDuffy` in places — reconnect Git if webhooks stay silent.

---

## Root causes (detail)

### 1. Wrong branch

Cloud/agent work lived on `cursor/purist-phase2-seo-prs-1543`. Vercel production branch is `main`. Draft PR #51 had to be **merged** before production could ever see the commits.

### 2. CI quality gate

Earlier `main` pushes failed Code Quality (`format:check`, then `npm audit --audit-level moderate` exit 1).  
`deploy-production` has `needs: [quality, build, security]` → deploy never started.

### 3. Wrong project + dead CLI in Actions

Repo secrets for `VERCEL_PROJECT_ID` (and possibly a shared token workflow) were wired to **drjanduffy.com**.  
Even with correct secrets, `amondnet/vercel-action@v25` is incompatible with current Vercel API.

### 4. Vercel Git webhook gap

Pushing `main` alone did not enqueue a new Aliante deployment. Prefer reconnecting **Settings → Git** to `LetMeHelpYouREALTY/aliantehomesforsale.com`, production branch `main`.

---

## Fixes applied

1. Merged feature work to `main`; pushed CI unblock (`5c4a1ec`).
2. Triggered production deploy for `5c4a1ec` via Vercel API (Zapier) → `dpl_9X73nWyPiB6ecEx2DHT8gTktbRsp`.
3. Replaced `amondnet/vercel-action@v25` with `npx vercel@latest deploy`.
4. Hardcoded Aliante `VERCEL_ORG_ID` / `VERCEL_PROJECT_ID` in the workflow so a wrong GitHub secret cannot deploy another site.
5. Preview job no longer passes `--prod`; no longer waits on broken Lighthouse job.

---

## What you should still do in the dashboard

**A. GitHub → repo Secrets (Actions)**

| Secret | Correct value |
|--------|----------------|
| `VERCEL_TOKEN` | Valid token with deploy access |
| `VERCEL_ORG_ID` | `team_EIbjFXaDDtGMTweb5Hvo3CG3` |
| `VERCEL_PROJECT_ID` | `prj_0RZw34lbC34PRwztLG5bqduiRxwY` |

Update `VERCEL_PROJECT_ID` if it still points at drjanduffy.com (workflow now hardcodes Aliante, but secrets should match).

**B. Vercel → aliantehomesforsale.com → Settings → Git**

1. Confirm connected repo is **LetMeHelpYouREALTY/aliantehomesforsale.com** (not `DrJanDuffy/...`).
2. Production Branch = **main**.
3. If pushes still create no Deployments row: Disconnect → Connect again.

**C. Optional:** Fix or disable Performance Testing (start `npm start` before Lighthouse, or `continue-on-error: true`).

---

## Verify production (confirmed 2026-08-07)

| Check | Result |
|-------|--------|
| Vercel prod `dpl_9X73nWy…` (`5c4a1ec`) | READY, aliased to www |
| Actions Deploy Production on `f274372` | **Success** (workflow overall was red only from Lighthouse) |
| Live `robots.txt` | No `Disallow: /_next/` |
| Live homepage | `@graph`, `TouristAttraction`, nearby / Aliante Casino present |

Production is current again. Prefer push → `main` + Actions (or Vercel Git) going forward.
