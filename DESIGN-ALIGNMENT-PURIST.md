# Design Alignment: Agent Image Purist Template

Reference: [ap-purist-rs.agentimage.com](https://ap-purist-rs.agentimage.com/) (Amy Agent – Purist + RealScout theme).

Goal: Align aliantehomesforsale.com structure, sections, and visual tone with the Purist template while keeping Dr. Jan Duffy branding, NAP, and RealScout integration.

---

## Template vs Current – Section Order

| Template (Purist) | Current Aliante | Action |
|-------------------|-----------------|--------|
| **1. Hero slideshow** (multi-slide, headline + “Discover new listings… RealScout… Search All”) | Single hero image, purple/indigo overlay, “Search Homes Below” CTA | Add slideshow option; align headline/copy style; keep CTA to RealScout |
| **2. Quick Search** (Property Type, Beds, Baths, Min/Max Price, Search, Advanced) | RealScout search section below hero | Keep RealScout; optionally add “Quick Search” styling (compact bar) if desired |
| **3. Featured Properties** + View All Listings | EnhancedFeaturedProperties | Keep; ensure “View All Listings” is prominent |
| **4. Agent intro** (“Amy Agent Real Estate” + welcome copy + Learn More) | EnhancedTrustAuthority (credentials) | Add dedicated “Dr. Jan Duffy / Aliante” welcome block before or merged with trust |
| **5. Featured Communities** (grid of 6 with images/links) | EnhancedPropertyTypes (property types + neighborhoods) | Align: add “Featured Communities” as image cards (Prominence, Desert Willows, Club Aliante, Paseos, Sun City, etc.) |
| **6. What Clients Are Saying** (testimonials carousel) | — | Add testimonials section + optional carousel |
| **7. CTA strip** (View Listings, Explore Neighborhoods, What Is My Home Worth) | Scattered CTAs | Add single CTA strip with 3 buttons |
| **8. Latest News** (blog preview, 3 posts) | — | Optional: add “Latest News” or “Resources” with 3 links |
| **9. Facebook + Instagram** | Footer social only | Optional: add social feed section above footer |
| **10. Send Me A Message** (contact form) | Contact page only | Optional: add inline contact form section on home |
| **11. Footer** (Navigate, Contact, Company, Newsletter) | EnhancedFooter (contact, links, builders, neighborhoods) | Align columns: Navigate, Contact Info, Company/NAP, optional Newsletter |

---

## Visual / UX Notes (Purist)

- **Hero**: Full-bleed slideshow, dark overlay, centered headline (often two-line: rank/name + “Area Real Estate Group”), short subtext, single primary CTA (“Search All”).
- **Nav**: Clean, often white or light; top-level: Home, About, Resources, Properties, Communities, Blog, Contact; “Get in touch” + phone.
- **Sections**: Ample whitespace, clear H2s, cards with subtle shadow; accent color for buttons and key text.
- **Footer**: Dark background, multiple columns, newsletter signup, social icons.

---

## Recommended Implementation Phases

### Phase 1 – High impact, no new content
- **Hero**: ✅ Slideshow (3 slides), headline “Dr. Jan Duffy | Aliante North Las Vegas Real Estate”, RealScout subtext, “Search Homes Below” CTA, dot indicators + prev/next, pause on hover/focus.
- **Section order**: ✅ Reordered: Hero → RealScout Search → Featured Properties → **Agent welcome** → Property Types → Market Insights → Trust → **CTA strip** → FAQ → Latest News.
- **CTA strip**: ✅ `HomeCTAStrip.tsx`: View Listings (/homes-for-sale), Explore Neighborhoods (/neighborhoods), What’s My Home Worth (/contact).
- **Agent welcome**: ✅ `AgentWelcomeSection.tsx`: “Dr. Jan Duffy Real Estate” block + Learn More → /about.
- **Featured Communities**: Reframe Property Types as image cards (optional follow-up).

### Phase 2 – Content and polish
- **Testimonials**: ✅ `TestimonialsSection.tsx` — “What Clients Are Saying” grid (4 reviews) + Review JSON-LD.
- **Featured Communities**: ✅ `FeaturedCommunities.tsx` — 6 image-led neighborhood cards on home.
- **Agent welcome**: ✅ Already shipped in Phase 1 (`AgentWelcomeSection.tsx`).
- **Footer**: ✅ `EnhancedFooter.tsx` — Navigate, Contact (NAP), Company (license S.0197614.LLC), Neighborhoods + market-updates CTA.

### Phase 3 – Optional
- **Blog/News**: “Latest News” section with 3 posts or links to /blog if you add a blog.
- **Contact form on home**: “Send Me A Message” section above footer.
- **Social**: Facebook/Instagram embed section (if you have feeds and CSP allows).

---

## What Stays the Same

- RealScout script once in layout; search widget below hero (and on /homes-for-sale).
- NAP, schema (LocalBusiness, RealEstateAgent, etc.), and GBP alignment.
- No changes to /components/idx/*.
- Dr. Jan Duffy branding, license (S.0197614.LLC), phone (702) 707-7273, aliantehomesforsale.com.

---

## File-Level Checklist (Phase 1)

| Task | File(s) |
|------|--------|
| Hero slideshow + copy | `app/components/EnhancedHero.tsx` |
| Agent welcome block | New `app/components/AgentWelcomeSection.tsx` or merge into Trust |
| Featured Communities (image cards) | New `app/components/FeaturedCommunities.tsx` or refactor `EnhancedPropertyTypes.tsx` |
| CTA strip (3 buttons) | New `app/components/CTASection.tsx` or `HomeCTAStrip.tsx` |
| Home page section order | `app/page.tsx` |
| Footer column layout | `app/components/EnhancedFooter.tsx` |

If you tell me which phase you want (1, 2, or 3), I can implement it step by step and keep the build passing.
