# On-site SEO audit — forestrymachinery.com.au

**Audited:** 18 September 2026 · second fixing round applied the same day
**Scope:** all 34 indexable URLs, measured against the rendered production build (`next build` + `next start`), not against source.
**Method:** every figure below was measured by script, not estimated. `scripts/audit.mjs` walks the sitemap in a real browser and asserts 14 classes of on-page rule; `scripts/a11y.mjs` runs axe-core at 1440px and 390px; `scripts/check-links.mjs` resolves every outbound citation. A separate measurement pass (word count, heading counts, contextual inbound links, click depth, schema types, images per page) produced the table in §6.

---

## 1. Verdict

Two fixing rounds have closed the media gap entirely and lifted the worst of
the internal linking. What remains is structural rather than remedial: the site
is still flat, with every page one click from the homepage, and a handful of
hub and brand pages are thinly supported by body links.

| Layer | State |
|---|---|
| Indexation, canonicals, sitemap, robots | Clean, machine-verified every build |
| Titles, descriptions, headings | Clean, all unique, all in range |
| Structured data | Clean, every page carries BreadcrumbList + a page-level type |
| Content depth | Strong — 49,364 words of main content, 32/34 pages over 700 |
| Accessibility (an on-site quality signal) | Zero serious/critical axe violations |
| Internal linking | Improved — the weakest pages lifted, hierarchy still flat |
| On-page media | Closed — every substantive page now carries a photograph or a diagram |

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
- **FAQ coverage.** 29 of the 34 pages carry FAQPage markup. The five that do
  not are the homepage, glossary, sources and quote form, none of which needs
  it.
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

## 3. P1 — Internal link architecture (partly addressed, still the main lever)

**Finding: click depth is uniformly 1.** Every one of the 34 pages is reachable
from the homepage in one click, because the header and footer link to
essentially everything. On a 34-page site that is not a crawl problem, but it
does mean internal link equity is sprayed evenly rather than concentrated on
the pages that should rank, and it leaves the site with no visible hierarchy.

Round two removed the header's five-item "Owning" dropdown, which had been
putting five reference pages into the primary nav on every page. Depth is
unchanged, because the footer still reaches them — closing that would mean
cutting the footer too, which trades a real usability loss for a metric. The
recommendation below stands, but it is a judgement call rather than a defect.

**Finding: contextual inbound links (body only, header/footer/nav excluded)
range from 0 to 28, and the distribution does not match commercial value.** The
twelve weakest as they now stand:

| Page | Words | Contextual inbound |
|---|---:|---:|
| `/` | 911 | 0 |
| `/compare/` | 792 | 2 |
| `/finance-and-tax/` | 1,407 | 3 |
| `/brands/dipperfox/` | 971 | 3 |
| `/brands/trevi-benne/` | 917 | 3 |
| `/compare/grapple-saw-vs-tree-shear/` | 1,206 | 4 |
| `/compare/grapple-saw-vs-forestry-grab/` | 1,147 | 4 |
| `/brands/powerhand/` | 959 | 4 |
| `/compare/stump-grinder-vs-stump-cutter/` | 1,204 | 5 |
| `/cost-per-stump-calculator/` | 1,136 | 5 |
| `/compare/tree-shear-vs-forestry-mulcher/` | 1,106 | 5 |
| `/cost-per-hectare-calculator/` | 1,050 | 5 |

(`/` at zero is expected — it is the root, and nothing links down to it.)

Round two lifted the worst offender: `/support-and-parts-australia/` went from
**2 to 10**, `/as-4373-mechanised-pruning/` from **4 to 7**, and both
calculators from **4 to 5**, all through sentences written into the guides
where the subject actually comes up rather than through a template block.

**What is still open, in order:**

1. **`/compare/` is a hub with two inbound links.** It sits in the header, so
   it is reachable, but nothing in the copy sends a reader to it. Each category
   guide that names a cross-shopped alternative should link the relevant
   comparison rather than only the other guide.
2. **The four brand pages sit at 3–4 each.** They are reached through the
   guides' logo strip, which is markup rather than copy. Where a guide
   discusses a manufacturer's range, name and link the manufacturer.
3. **Consider a real hierarchy.** Reduce the header to the pillar, the eight
   category guides and the quote CTA, and trim the footer to match. That puts
   the reference pages at depth 2, where they belong. Worth doing if the site
   grows past the current 34 pages; at this size the gain is modest.
4. **Keep anchor text varied.** Anchors are currently descriptive and unique,
   which is right; avoid drifting into a repeated exact-match phrase.

---

## 4. P2 — On-page media (closed)

Every substantive page now carries a photograph or a purpose-built diagram. The
eight category guides average 13 photographs each; the cross-cutting pages
carry one diagram each, built in the `src/components/diagrams/` pattern —
inline SVG, design-system colours, emphasis form (one hue plus grey).

| Page | Visual added | Built from |
|---|---|---|
| `/compatibility/` | The four compatibility gates, in the order they catch buyers out | The page's own four checks and their failure symptoms |
| `/support-and-parts-australia/` | The three supply tiers against a downtime axis | The page's own two-day and six-week figures; nothing between them is invented |
| `/finance-and-tax/` | How a pooled deduction arrives over five years | The 15% and 30% pool rates the page already states, expressed as a share of cost |
| `/glossary/` | A labelled carrier schematic indexing eight terms | The glossary's own entries, each label linking to its definition |

The two pages with no visual are `/sources/` (454 words) and `/request-quote/`
(196 words) — a citation list and a form. Neither needs one.

## 5. P3 — Smaller items

1. **`/` is 911 words.** It works as a directory and carries 25 images; it is
   not currently built to rank for anything itself. That is a legitimate choice
   — just make it deliberate.
2. **`/compare/` (792 w, 2 inbound) and `/brands/` (818 w, 7 inbound)** are hubs
   just over the word threshold and thinly supported. Each would benefit from a
   short framing section explaining how to use what it lists, and from more body
   links pointing at it.
3. **The four brand pages sit at 3–4 contextual inbound links each.** They are
   linked from the guides' logo strip, which is markup rather than copy. A
   sentence naming the manufacturer where a guide discusses its range would be
   a genuine link.
4. **`/request-quote/` (196 w) and `/sources/` (454 w)** are intentionally thin
   utility pages, allowlisted in the audit gate. Both carry proper `<h2>`
   structure (3 and 6); previously 0 and 1.
5. **`lastmod` is a hand-set editorial date**, deliberately, so it does not
   churn on every deploy. Update it when content genuinely changes.
6. **FAQ coverage is now near-complete.** 29 of 34 pages carry FAQPage markup.
   The homepage, `/glossary/`, `/sources/` and `/request-quote/` do not need it.
   The pillar was the one real gap and now carries seven questions.


---

## 6. Page table

Word counts are main content with nav, footer and scripts stripped. "In" is
contextual inbound links (body only). Every page sits at click depth 1, so that
column is omitted.

| URL | Words | H2 | H3 | In | Photos | Diagrams |
|---|---:|---:|---:|---:|---:|---:|
| `/costs/` | 2,962 | 12 | 20 | 28 | 1 | 1 |
| `/forestry-machinery-guide/` | 2,691 | 11 | 12 | 15 | 8 | 1 |
| `/compatibility/` | 2,670 | 7 | 26 | 26 | 0 | 1 |
| `/wear-parts/` | 2,375 | 10 | 21 | 14 | 2 | 0 |
| `/grapple-saw-guide/` | 2,054 | 16 | 9 | 18 | 15 | 1 |
| `/troubleshooting/` | 2,009 | 7 | 20 | 9 | 1 | 1 |
| `/stump-grinder-guide/` | 1,824 | 16 | 7 | 17 | 13 | 1 |
| `/support-and-parts-australia/` | 1,750 | 7 | 19 | 10 | 0 | 1 |
| `/forestry-mulcher-guide/` | 1,733 | 16 | 7 | 17 | 13 | 0 |
| `/log-grab-guide/` | 1,729 | 16 | 9 | 17 | 14 | 0 |
| `/as-4373-mechanised-pruning/` | 1,711 | 9 | 17 | 7 | 1 | 0 |
| `/mechanical-pruning-guide/` | 1,680 | 14 | 12 | 16 | 14 | 0 |
| `/tillage-guide/` | 1,653 | 15 | 8 | 13 | 13 | 0 |
| `/tree-shears-guide/` | 1,639 | 13 | 7 | 15 | 13 | 0 |
| `/stump-cutter-guide/` | 1,596 | 15 | 7 | 15 | 12 | 1 |
| `/hire-vs-buy/` | 1,571 | 7 | 16 | 20 | 1 | 0 |
| `/finance-and-tax/` | 1,407 | 7 | 12 | 3 | 0 | 1 |
| `/compare/grapple-saw-vs-tree-shear/` | 1,206 | 9 | 1 | 4 | 2 | 0 |
| `/glossary/` | 1,204 | 6 | 0 | 14 | 0 | 1 |
| `/compare/stump-grinder-vs-stump-cutter/` | 1,204 | 9 | 1 | 5 | 2 | 0 |
| `/compare/grapple-saw-vs-forestry-grab/` | 1,147 | 9 | 1 | 4 | 2 | 0 |
| `/brands/omef/` | 1,147 | 9 | 11 | 8 | 7 | 0 |
| `/cost-per-stump-calculator/` | 1,136 | 6 | 12 | 5 | 1 | 1 |
| `/compare/tree-shear-vs-forestry-mulcher/` | 1,106 | 9 | 1 | 5 | 2 | 0 |
| `/hydraulic-flow-calculator/` | 1,092 | 5 | 10 | 12 | 0 | 1 |
| `/cost-per-hectare-calculator/` | 1,050 | 5 | 12 | 5 | 1 | 0 |
| `/brands/dipperfox/` | 971 | 9 | 6 | 3 | 2 | 0 |
| `/brands/powerhand/` | 959 | 9 | 7 | 4 | 3 | 0 |
| `/brands/trevi-benne/` | 917 | 9 | 6 | 3 | 2 | 0 |
| `/` | 911 | 7 | 29 | 0 | 25 | 0 |
| `/brands/` | 818 | 8 | 9 | 7 | 4 | 0 |
| `/compare/` | 792 | 8 | 9 | 2 | 8 | 0 |
| `/sources/` | 454 | 6 | 8 | 7 | 0 | 0 |
| `/request-quote/` | 196 | 3 | 0 | 28 | 0 | 0 |

---

## 7. Fixed in round one

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

## 8. Fixed in round two

**Content**

- The pillar, `/forestry-machinery-guide/`, had no FAQ block — the one real gap
  in FAQ coverage, on the page most likely to be asked a question. It now
  carries seven, all drawn from material already on the page and sourced:
  what attachment for my excavator, the three numbers to bring, hire or buy,
  why there are no prices, the write-off position, grinder versus cutter, and
  which standards apply. The pillar went 2,199 → 2,691 words.

**Internal links**

- Each of the eight category guides now closes its running-cost section with a
  sentence linking `/wear-parts/` and `/support-and-parts-australia/`, written
  to that category rather than templated. `/support-and-parts-australia/` went
  from **2 contextual inbound links to 10**.
- `AS 4373` was named but not linked in the tree shear and grapple saw guides;
  both now link it. With the pillar FAQ, `/as-4373-mechanised-pruning/` went
  **4 → 7**.
- The stump grinder and mulcher guides now link their calculator at the point
  the calculation appears, rather than only from a related-links block. Both
  calculators went **4 → 5**.
- The pillar's "where to go next" now names `/compare/` and `/brands/`.
- The header's five-item "Owning" dropdown is gone. It put five reference pages
  into the primary nav on all 34 pages, which diluted every other header link;
  those pages are reached from the footer and, now, from the guide copy.

**Media**

- Four purpose-built diagrams, one each for `/compatibility/`,
  `/support-and-parts-australia/`, `/finance-and-tax/` and `/glossary/` — see
  §4. Every substantive page now carries a visual.
- Diagram labels in `CircuitDiagram` and `GrindVsCutDiagram` were drawn in
  `--color-steel-500`, which is 2.07:1 on the panel background. SVG text is not
  reliably caught by axe, so this was a contrast failure hiding behind a green
  gate. Both now use `--color-concrete`.
- The glossary schematic first put its links inside the `<svg role="img">`,
  which nests interactive controls inside an image role — axe caught it as a
  serious violation. The links moved to a real list in the `<figcaption>`.

**Tooling**

- `scripts/audit.mjs` flagged every `fill` image as missing dimensions. An
  absolutely positioned image is out of flow and cannot shift layout, so the
  check now skips those and still requires width and height on everything in
  flow. That cleared 14 false warnings without weakening the rule.

## 9. How to re-run

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
