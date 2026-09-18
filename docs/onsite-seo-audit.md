# On-site SEO audit — forestrymachinery.com.au

**Audited:** 18 September 2026
**Scope:** all 34 indexable URLs, measured against the rendered production build (`next build` + `next start`), not against source.
**Method:** every figure below was measured by script, not estimated. `scripts/audit.mjs` walks the sitemap in a real browser and asserts 14 classes of on-page rule; `scripts/a11y.mjs` runs axe-core at 1440px and 390px; `scripts/check-links.mjs` resolves every outbound citation. A separate measurement pass (word count, heading counts, contextual inbound links, click depth, schema types, images per page) produced the table in §6.

---

## 1. Verdict

The technical and metadata layer is clean and gated, and the image layer has
just been largely closed. The remaining on-site opportunity is concentrated in
**internal link architecture** and in **six reference pages that still carry no
visual at all**.

| Layer | State |
|---|---|
| Indexation, canonicals, sitemap, robots | Clean, machine-verified every build |
| Titles, descriptions, headings | Clean, all unique, all in range |
| Structured data | Clean, every page carries BreadcrumbList + a page-level type |
| Content depth | Strong — 48,000 words of main content, 32/34 pages over 700 |
| Accessibility (an on-site quality signal) | Zero serious/critical axe violations |
| **Internal linking** | **Weak — flat, nav-driven, equity spread evenly** |
| **On-page media** | **Partly closed — 6 pages still carry no visual** |

---

## 2. What is already clean (verified, not asserted)

These are gated in CI-style scripts, so they cannot silently regress.

- **Canonical correctness.** Every page's `<link rel=canonical>` equals its own
  absolute URL on `https://www.forestrymachinery.com.au`, with a trailing
  slash. The audit fails if any canonical points elsewhere — this check exists
  because an earlier build silently canonicalised the whole site onto a Vercel
  preview host.
- **`og:url` parity.** All 34 pages emit an `og:url` matching their canonical.
  17 pages previously fell back to the site root.
- **Sitemap integrity.** 34 entries, correct origin, trailing slashes, no query
  strings or fragments, every URL returns 200 with no redirect hop, and the set
  is complete against the route table. `robots.txt` declares it. The image
  extension now carries 28 image URLs.
- **Metadata uniqueness.** Zero duplicate titles, zero duplicate descriptions
  across 34 pages. Titles 49–68 characters; descriptions 138–163.
- **Heading hierarchy.** Exactly one `<h1>` per page, no skipped levels.
- **Intro keyword coverage.** Every page's H1 head terms appear within the first
  120 words of main content — measured, zero gaps.
- **Structured data.** `BreadcrumbList` on all 34 pages plus a page-level type
  (`Article`, `FAQPage`, `CollectionPage`, `ContactPage`, `DefinedTermSet`,
  `WebApplication`, `Brand`) linked through an `@graph`. FAQ answers are
  extracted from rendered React children, so no answer echoes its question.
- **Outbound citations.** All resolve. Four dead URLs and one wrong standard
  (ISO 8084 pointed at an unrelated ISO number) were corrected against primary
  sources, each stamped with a verification date on `/sources/`.
- **Alt text** is hand-written per image from what is visible in the frame, and
  field photography is labelled as editorial context on `/sources/` rather than
  implied to be a customer project.
- **Australian English and AU intent** throughout; `lang="en-AU"`.
- **No fabricated prices, specs, reviews, ratings or first-hand testing
  claims**, and no thin city-swap location pages. Deliberate, documented.

---

## 3. P1 — Internal link architecture (biggest single lever)

**Finding: click depth is uniformly 1. Every one of the 34 pages is reachable
from the homepage in one click**, because the header and footer link to
essentially everything. That reads as a flat site with no hierarchy, and it
means internal link equity is sprayed evenly rather than concentrated on the
pages that should rank.

**Finding: contextual inbound links (body links only, header/footer/nav
excluded) range from 0 to 28, and the distribution does not match commercial
value.** The twelve weakest:

| Page | Words | Contextual inbound |
|---|---:|---:|
| `/` | 911 | 0 |
| `/support-and-parts-australia/` | 1,602 | 2 |
| `/compare/` | 792 | 2 |
| `/finance-and-tax/` | 1,281 | 3 |
| `/brands/dipperfox/` | 971 | 3 |
| `/brands/trevi-benne/` | 917 | 3 |
| `/as-4373-mechanised-pruning/` | 1,711 | 4 |
| `/compare/grapple-saw-vs-tree-shear/` | 1,206 | 4 |
| `/compare/grapple-saw-vs-forestry-grab/` | 1,147 | 4 |
| `/cost-per-stump-calculator/` | 1,136 | 4 |
| `/cost-per-hectare-calculator/` | 1,050 | 4 |
| `/brands/powerhand/` | 959 | 4 |

(`/` at zero is expected — it is the root, and nothing links down to it.)

`/support-and-parts-australia/` is a 1,602-word page targeting a genuinely
commercial AU query ("forestry attachment parts Australia") and is supported by
two body links. `/compare/` is a hub with two. The three calculators — the
strongest natural link-earning assets on the site — sit at four each.

**Recommended actions, in order:**

1. **Introduce a real hierarchy.** Reduce the header to the pillar, the eight
   category guides and the quote CTA. Move the reference pages (`/glossary/`,
   `/sources/`, `/finance-and-tax/`, `/as-4373-…/`) out of the primary nav into
   the footer or into contextual links only. That puts them at depth 2, where
   they belong, and stops them competing with the money pages for equity.
2. **Cross-link the eight category guides to each other by decision, not by
   list.** Each guide should carry 2–3 in-body links to the guides a buyer
   genuinely cross-shops (mulcher ↔ tillage, shear ↔ grapple saw, stump grinder
   ↔ stump cutter), with descriptive anchors placed where the decision arises.
3. **Raise `/support-and-parts-australia/` to 8+ contextual inbound links.**
   Every guide has a running-cost or wear-parts section; each is a natural,
   non-forced target.
4. **Link the calculators from the point of calculation** — inline where a guide
   discusses cost per stump or per hectare, not only from a related-links block.
5. **Keep anchor text varied.** Anchors are currently descriptive and unique,
   which is right; avoid drifting into a repeated exact-match phrase.

---

## 4. P2 — The six pages that still carry no visual

The eight category guides now average 13 photographs each, and `/costs/`,
`/hire-vs-buy/`, `/troubleshooting/` and `/wear-parts/` each gained a field
image. These six did not:

| Page | Words | Photos | Diagrams |
|---|---:|---:|---:|
| `/compatibility/` | 2,523 | 0 | 0 |
| `/support-and-parts-australia/` | 1,602 | 0 | 0 |
| `/finance-and-tax/` | 1,281 | 0 | 0 |
| `/glossary/` | 1,094 | 0 | 0 |
| `/hydraulic-flow-calculator/` | 1,092 | 0 | 1 |
| `/sources/` | 454 | 0 | 0 |

`/compatibility/` is the second-densest page on the site — 2,523 words and 26
subheadings — and is pure text.

This matters on-site for three reasons: image results and Discover are
unreachable without media; dwell time on a 2,500-word wall of text is worse;
and a diagram is the asset other sites link to, which is how a reference page
earns the links that make it rank.

**Recommended:** one purpose-made diagram per page, in the existing
`src/components/diagrams/` pattern (inline SVG, design-system colours, emphasis
form — one hue plus grey, CVD-validated):

- `/compatibility/` — a carrier-weight-to-attachment matrix.
- `/support-and-parts-australia/` — a lead-time and stocking decision flow.
- `/finance-and-tax/` — a depreciation-versus-write-off timeline.
- `/glossary/` — a labelled attachment schematic anchoring the key terms.

Each must be built from figures already stated and sourced on the page; none
may introduce a number the page does not already support. `/sources/` and the
calculators do not need one.

---

## 5. P3 — Smaller items

1. **`/` is 911 words.** It works as a directory and now carries 25 images; it
   is not currently built to rank for anything itself. That is a legitimate
   choice — just make it deliberate.
2. **`/compare/` (792 w) and `/brands/` (818 w)** are hubs just over the
   threshold. Each would benefit from a short framing section explaining how to
   use the comparisons rather than only listing them.
3. **`/request-quote/` (196 w) and `/sources/` (454 w)** are intentionally thin
   utility pages, allowlisted in the audit gate. Both now carry proper `<h2>`
   structure (3 and 6) after this pass; previously 0 and 1.
4. **Field images use `fill` without intrinsic dimensions.** They sit in
   fixed-aspect containers so layout shift is bounded, but the audit flags them
   as warnings. Worth setting explicit dimensions where the aspect is known.
5. **`lastmod` is a hand-set editorial date**, deliberately, so it does not
   churn on every deploy. Update it when content genuinely changes.
6. **FAQ coverage is uneven.** The eight category guides carry FAQ blocks; most
   cross-cutting pages do not. `/compatibility/`, `/wear-parts/` and
   `/hire-vs-buy/` all attract question-shaped queries and would each support
   4–6 genuine FAQs.

---

## 6. Page table

Word counts are main content with nav, footer and scripts stripped. "In" is
contextual inbound links (body only). "D" is click depth from the homepage.

| URL | Words | H2 | H3 | In | D | Imgs |
|---|---:|---:|---:|---:|---:|---:|
| `/costs/` | 2,962 | 12 | 20 | 28 | 1 | 1 |
| `/compatibility/` | 2,523 | 7 | 26 | 26 | 1 | 0 |
| `/wear-parts/` | 2,375 | 10 | 21 | 14 | 1 | 2 |
| `/forestry-machinery-guide/` | 2,199 | 11 | 12 | 15 | 1 | 8 |
| `/grapple-saw-guide/` | 2,016 | 16 | 9 | 18 | 1 | 15 |
| `/troubleshooting/` | 2,009 | 7 | 20 | 9 | 1 | 1 |
| `/stump-grinder-guide/` | 1,772 | 16 | 7 | 17 | 1 | 13 |
| `/as-4373-mechanised-pruning/` | 1,711 | 9 | 17 | 4 | 1 | 1 |
| `/log-grab-guide/` | 1,688 | 16 | 9 | 17 | 1 | 14 |
| `/forestry-mulcher-guide/` | 1,686 | 16 | 7 | 17 | 1 | 13 |
| `/mechanical-pruning-guide/` | 1,642 | 14 | 12 | 16 | 1 | 14 |
| `/tillage-guide/` | 1,618 | 15 | 8 | 13 | 1 | 13 |
| `/support-and-parts-australia/` | 1,602 | 7 | 19 | 2 | 1 | 0 |
| `/tree-shears-guide/` | 1,594 | 13 | 7 | 15 | 1 | 13 |
| `/hire-vs-buy/` | 1,571 | 7 | 16 | 20 | 1 | 1 |
| `/stump-cutter-guide/` | 1,551 | 15 | 7 | 15 | 1 | 12 |
| `/finance-and-tax/` | 1,281 | 7 | 12 | 3 | 1 | 0 |
| `/compare/grapple-saw-vs-tree-shear/` | 1,206 | 9 | 1 | 4 | 1 | 2 |
| `/compare/stump-grinder-vs-stump-cutter/` | 1,204 | 9 | 1 | 5 | 1 | 2 |
| `/compare/grapple-saw-vs-forestry-grab/` | 1,147 | 9 | 1 | 4 | 1 | 2 |
| `/brands/omef/` | 1,147 | 9 | 11 | 8 | 1 | 7 |
| `/cost-per-stump-calculator/` | 1,136 | 6 | 12 | 4 | 1 | 1 |
| `/compare/tree-shear-vs-forestry-mulcher/` | 1,106 | 9 | 1 | 5 | 1 | 2 |
| `/glossary/` | 1,094 | 6 | 0 | 14 | 1 | 0 |
| `/hydraulic-flow-calculator/` | 1,092 | 5 | 10 | 12 | 1 | 0 |
| `/cost-per-hectare-calculator/` | 1,050 | 5 | 12 | 4 | 1 | 1 |
| `/brands/dipperfox/` | 971 | 9 | 6 | 3 | 1 | 2 |
| `/brands/powerhand/` | 959 | 9 | 7 | 4 | 1 | 3 |
| `/brands/trevi-benne/` | 917 | 9 | 6 | 3 | 1 | 2 |
| `/` | 911 | 7 | 29 | 0 | 0 | 25 |
| `/brands/` | 818 | 8 | 9 | 7 | 1 | 4 |
| `/compare/` | 792 | 8 | 9 | 2 | 1 | 8 |
| `/sources/` | 454 | 6 | 8 | 7 | 1 | 0 |
| `/request-quote/` | 196 | 3 | 0 | 28 | 1 | 0 |

---

## 7. Fixed in this pass

- **Card components no longer wrap an entire card in an `<a>`.**
  `CategoryGrid`, `RelatedGuides`, `NextSteps`, the flow-calculator result rows
  and the homepage field-application cards now use an overlay link, so the
  anchor text is the destination's name rather than a 90–190 character
  concatenation of every word in the card. This affected internal anchor text
  sitewide.
- `/sources/` no longer uses a bare URL as anchor text.
- `/request-quote/` went from 0 `<h2>` to 3; `/sources/` from 1 to 6. The
  sidebar labels on both were `<p>` elements doing a heading's job.
- The image sitemap now lists every photograph a guide renders — hero, field
  scene and gallery — rather than the hero alone.
- `scripts/audit.mjs` now applies the anchor-length check to internal links
  only (a full publisher-plus-title anchor is correct for an outbound citation
  and wrong for an internal card), and fails on a bare URL used as anchor text.

## 8. How to re-run

```
npm run build
npx next start -p 3500
CHROMIUM_PATH=/opt/pw-browsers/chromium node scripts/audit.mjs http://localhost:3500
CHROMIUM_PATH=/opt/pw-browsers/chromium node scripts/a11y.mjs  http://localhost:3500
node scripts/check-links.mjs
```

Current state: audit **0 errors**, a11y **0 serious or critical**, citations
**0 broken**. Four of the eight citation hosts (ABARES, NSW DCCEEW, ISO and the
ATO) return 403 to an automated request; the checker reports those as "blocked,
not gone" rather than passing them silently, and they were confirmed by hand at
the verification dates shown on `/sources/`.
