# On-site SEO audit — forestrymachinery.com.au

**Audited:** 18 September 2026
**Scope:** all 34 indexable URLs, measured against the rendered production build (`next build` + `next start`), not against source.
**Method:** every figure below was measured by script, not estimated. `scripts/audit.mjs` walks the sitemap in a real browser and asserts 14 classes of on-page rule; `scripts/a11y.mjs` runs axe-core at 1440px and 390px; `scripts/check-links.mjs` resolves every outbound citation. A separate measurement pass (word count, heading counts, contextual inbound links, click depth, schema types, image count per page) produced the page table in §6.

---

## 1. Verdict

The technical and metadata layer is clean and gated. The remaining on-site
opportunity is **not** in tags — it is in **internal link architecture** and
**visual content on the cross-cutting money pages**.

| Layer | State |
|---|---|
| Indexation, canonicals, sitemap, robots | Clean, machine-verified every build |
| Titles, descriptions, headings | Clean, all unique, all in range |
| Structured data | Clean, every page carries BreadcrumbList + a page-level type |
| Content depth | Strong — 47,671 words of main content, 32/34 pages over 700 |
| Accessibility (an on-site quality signal) | Zero serious/critical axe violations |
| **Internal linking** | **Weak — flat, nav-driven, equity spread evenly** |
| **On-page media** | **Weak — 6 long pages carry no visual at all** |

---

## 2. What is already clean (verified, not asserted)

These are gated in CI-style scripts, so they cannot silently regress.

- **Canonical correctness.** Every page's `<link rel=canonical>` equals its own
  absolute URL on `https://www.forestrymachinery.com.au`, with a trailing
  slash. The audit fails the build if any canonical points elsewhere — this
  check exists because an earlier build silently canonicalised the whole site
  onto a Vercel preview host.
- **`og:url` parity.** All 34 pages emit an `og:url` matching their canonical.
  17 pages previously fell back to the site root.
- **Sitemap integrity.** 34 entries, correct origin, trailing slashes, no query
  strings or fragments, every URL returns 200 with no redirect hop, and the set
  is complete against the route table. `robots.txt` declares it.
- **Metadata uniqueness.** Zero duplicate titles, zero duplicate descriptions
  across 34 pages. Titles 49–68 chars; descriptions 138–163 chars.
- **Heading hierarchy.** Exactly one `<h1>` per page, no skipped levels.
- **Intro keyword coverage.** Every page's H1 head terms now appear within the
  first 120 words of main content — measured, 0 gaps.
- **Structured data.** `BreadcrumbList` on all 34 pages plus a page-level type
  (`Article`, `FAQPage`, `CollectionPage`, `ContactPage`, `DefinedTermSet`,
  `WebApplication`, `Brand`) linked through an `@graph`. FAQ answers are
  extracted from rendered React children, so no answer echoes its question.
- **Outbound citations.** All resolve; four dead URLs and one wrong standard
  (ISO 8084 was pointing at an unrelated ISO number) were corrected against
  primary sources, each stamped with a verification date on `/sources/`.
- **Image sitemap.** Now carries 15 image URLs — every photograph the guides
  render, not just the hero of each.
- **Australian English and AU intent** throughout; `lang="en-AU"`.
- **No fabricated prices, specs, reviews, ratings or first-hand testing
  claims**, and no thin city-swap location pages. This is a deliberate
  editorial constraint, documented on `/sources/`.

---

## 3. P1 — Internal link architecture (biggest single lever)

**Finding: click depth is uniformly 1. Every one of the 34 pages is reachable
from the homepage in a single click**, because the header and footer link to
essentially everything. That reads as a flat site with no hierarchy, and it
means internal PageRank is sprayed evenly rather than concentrated on the pages
that should rank.

**Finding: contextual inbound links (body links only, header/footer/nav
excluded) range from 0 to 28, and the distribution does not match commercial
value.**

| Page | Words | Contextual inbound links |
|---|---:|---:|
| `/` | 789 | 0 (expected — it is the root) |
| `/support-and-parts-australia/` | 1,602 | 2 |
| `/compare/` | 792 | 2 |
| `/as-4373-mechanised-pruning/` | 1,711 | 3 |
| `/finance-and-tax/` | 1,281 | 3 |
| `/brands/dipperfox/` | 971 | 3 |
| `/brands/trevi-benne/` | 917 | 3 |
| `/cost-per-stump-calculator/` | 1,136 | 4 |
| `/cost-per-hectare-calculator/` | 1,050 | 4 |
| `/compare/grapple-saw-vs-tree-shear/` | 1,206 | 4 |
| … | | |
| `/costs/` | 2,952 | 28 |
| `/request-quote/` | 196 | 28 |

`/support-and-parts-australia/` is a 1,602-word page targeting a genuinely
commercial AU query ("forestry attachment parts Australia") and it is supported
by two body links. `/compare/` is a hub with two. The three calculators — which
are the strongest link-earning assets on the site — sit at four each.

**Recommended actions, in order:**

1. **Introduce a real hierarchy.** Reduce the header to the pillar, the eight
   category guides, and the quote CTA. Move the utility and reference pages
   (`/glossary/`, `/sources/`, `/finance-and-tax/`, `/as-4373-…/`) out of the
   primary nav into the footer or into contextual links only. This pushes them
   to depth 2, which is where they belong, and stops them competing with the
   money pages for equity.
2. **Cross-link the eight category guides to each other by decision, not by
   list.** Each guide should carry 2–3 in-body links to the guides a buyer
   genuinely cross-shops (mulcher ↔ tillage, shear ↔ grapple saw, stump
   grinder ↔ stump cutter) using descriptive anchors, placed at the point in
   the copy where the decision arises.
3. **Raise `/support-and-parts-australia/` to 8+ contextual inbound links.**
   Every guide has a running-cost or wear-parts section; each is a natural,
   non-forced link target.
4. **Link the calculators from the point of calculation.** Where a guide
   discusses cost per stump or per hectare, link the matching calculator inline
   rather than only from a related-links block.
5. **Vary anchor text.** Anchors are currently descriptive and unique, which is
   good; keep them varied rather than repeating an exact-match phrase.

---

## 4. P2 — On-page media on the cross-cutting pages

**Finding: six long-form pages render no image and no diagram at all.**

| Page | Words | Photos | Diagrams |
|---|---:|---:|---:|
| `/compatibility/` | 2,523 | 0 | 0 |
| `/wear-parts/` | 2,362 | 0 | 0 |
| `/support-and-parts-australia/` | 1,602 | 0 | 0 |
| `/hire-vs-buy/` | 1,562 | 0 | 0 |
| `/finance-and-tax/` | 1,281 | 0 | 0 |
| `/glossary/` | 1,094 | 0 | 0 |

The eight category guides average 12 photographs each and carry captions and
hand-written alt text. `/costs/`, `/troubleshooting/` and
`/hydraulic-flow-calculator/` each carry one purpose-built SVG diagram. The six
pages above are the site's densest reference material and are pure text.

This matters on-site for three reasons: image results and Discover are
unreachable without media; dwell time on a 2,500-word wall of text is worse;
and a diagram is the asset other sites link to, which is how a reference page
earns the links that make it rank.

**Recommended:** build one purpose-made diagram per page, in the existing
`src/components/diagrams/` pattern (inline SVG, design-system colours, emphasis
form — one hue plus grey, CVD-validated). Specifically:

- `/compatibility/` — a carrier-weight-to-attachment matrix.
- `/wear-parts/` — a wear-rate-versus-material chart from the stated inputs.
- `/hire-vs-buy/` — the annual-hours break-even crossover.
- `/finance-and-tax/` — a depreciation-versus-instant-write-off timeline.
- `/support-and-parts-australia/` — a lead-time / stocking decision flow.
- `/glossary/` — a labelled attachment schematic anchoring the key terms.

Each must be built from figures already stated on the page; none may introduce
a number the page does not already source.

---

## 5. P3 — Smaller items

1. **`/` is 789 words** and is the site's weakest tier-1 page by depth. It
   works as a directory; it does not currently rank for anything itself. Either
   accept that (legitimate) or give it 400 more words of genuinely orienting
   copy.
2. **`/compare/` (792 w) and `/brands/` (818 w)** are hub pages just over the
   threshold. Each would benefit from a short framing section explaining how to
   use the comparisons rather than only listing them.
3. **`/request-quote/` (196 w) and `/sources/` (413 w)** are intentionally thin
   utility pages and are allowlisted in the audit gate. Both now carry proper
   `<h2>` structure (3 and 5 respectively) after this pass; previously they had
   0 and 1.
4. **`lastmod` is a hand-set editorial date** (`2026-09-12`), deliberately, so
   it does not churn on every deploy. Update it when content genuinely changes,
   not on redeploys.
5. **FAQ coverage is uneven.** The eight category guides carry FAQ blocks; the
   cross-cutting pages mostly do not. `/compatibility/`, `/wear-parts/` and
   `/hire-vs-buy/` all attract question-shaped queries and would each support
   4–6 genuine FAQs.

---

## 6. Page table

Word counts are main content with nav, footer and scripts stripped. "In" is
contextual inbound links (body only). "D" is click depth from the homepage.

| URL | Words | H2 | H3 | In | D | Imgs |
|---|---:|---:|---:|---:|---:|---:|
| `/costs/` | 2,952 | 12 | 20 | 28 | 1 | 1 |
| `/compatibility/` | 2,523 | 7 | 26 | 26 | 1 | 0 |
| `/wear-parts/` | 2,362 | 10 | 21 | 14 | 1 | 0 |
| `/forestry-machinery-guide/` | 2,199 | 11 | 12 | 15 | 1 | 8 |
| `/grapple-saw-guide/` | 1,999 | 16 | 9 | 18 | 1 | 14 |
| `/troubleshooting/` | 1,998 | 7 | 20 | 9 | 1 | 1 |
| `/stump-grinder-guide/` | 1,757 | 16 | 7 | 17 | 1 | 12 |
| `/as-4373-mechanised-pruning/` | 1,711 | 9 | 17 | 3 | 1 | 1 |
| `/log-grab-guide/` | 1,672 | 16 | 9 | 17 | 1 | 13 |
| `/forestry-mulcher-guide/` | 1,669 | 16 | 7 | 17 | 1 | 12 |
| `/mechanical-pruning-guide/` | 1,627 | 14 | 12 | 16 | 1 | 13 |
| `/tillage-guide/` | 1,603 | 15 | 8 | 13 | 1 | 12 |
| `/support-and-parts-australia/` | 1,602 | 7 | 19 | 2 | 1 | 0 |
| `/tree-shears-guide/` | 1,580 | 13 | 7 | 15 | 1 | 12 |
| `/hire-vs-buy/` | 1,562 | 7 | 16 | 20 | 1 | 0 |
| `/stump-cutter-guide/` | 1,537 | 15 | 7 | 15 | 1 | 11 |
| `/finance-and-tax/` | 1,281 | 7 | 12 | 3 | 1 | 0 |
| `/compare/grapple-saw-vs-tree-shear/` | 1,206 | 9 | 1 | 4 | 1 | 2 |
| `/compare/stump-grinder-vs-stump-cutter/` | 1,204 | 9 | 1 | 5 | 1 | 2 |
| `/brands/omef/` | 1,147 | 9 | 11 | 8 | 1 | 7 |
| `/compare/grapple-saw-vs-forestry-grab/` | 1,147 | 9 | 1 | 4 | 1 | 2 |
| `/cost-per-stump-calculator/` | 1,136 | 6 | 12 | 4 | 1 | 1 |
| `/compare/tree-shear-vs-forestry-mulcher/` | 1,106 | 9 | 1 | 5 | 1 | 2 |
| `/glossary/` | 1,094 | 6 | 0 | 14 | 1 | 0 |
| `/hydraulic-flow-calculator/` | 1,092 | 5 | 10 | 12 | 1 | 1 |
| `/cost-per-hectare-calculator/` | 1,050 | 5 | 12 | 4 | 1 | 1 |
| `/brands/dipperfox/` | 971 | 9 | 6 | 3 | 1 | 2 |
| `/brands/powerhand/` | 959 | 9 | 7 | 4 | 1 | 3 |
| `/brands/trevi-benne/` | 917 | 9 | 6 | 3 | 1 | 2 |
| `/brands/` | 818 | 8 | 9 | 7 | 1 | 4 |
| `/compare/` | 792 | 8 | 9 | 2 | 1 | 8 |
| `/` | 789 | 6 | 25 | 0 | 0 | 20 |
| `/sources/` | 413 | 5 | 8 | 7 | 1 | 0 |
| `/request-quote/` | 196 | 3 | 0 | 28 | 1 | 0 |

---

## 7. Fixed in this pass

- Card components no longer wrap an entire card in an `<a>`. `CategoryGrid`,
  `RelatedGuides`, `NextSteps` and the flow-calculator result rows now use an
  overlay link, so the anchor text is the destination's name rather than a
  90–190 character concatenation of every word in the card. This affected
  anchor text sitewide.
- `/sources/` no longer uses a bare URL as anchor text.
- `/request-quote/` went from 0 `<h2>` to 3; `/sources/` from 1 to 5.
- The image sitemap now lists every rendered photograph (15 URLs), not only the
  8 guide heroes.
- `scripts/audit.mjs` now distinguishes internal from external links when
  checking anchor length (a full publisher-plus-title citation anchor is
  correct for an outbound reference and wrong for an internal card), and fails
  on a bare URL used as anchor text.

## 8. How to re-run

```
npm run build
npx next start -p 3500
CHROMIUM_PATH=/opt/pw-browsers/chromium node scripts/audit.mjs http://localhost:3500
CHROMIUM_PATH=/opt/pw-browsers/chromium node scripts/a11y.mjs  http://localhost:3500
node scripts/check-links.mjs
```

Current state: audit **0 errors**, a11y **0 serious/critical**, citations **0
broken**. Four of the eight citation hosts (ABARES, NSW DCCEEW, ISO and the
ATO) return 403 to an automated request; the checker reports those as
"blocked, not gone" rather than passing them silently, and they were confirmed
by hand at the verification dates shown on `/sources/`.
