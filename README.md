# Forestry Machinery Guide

A Next.js site for the Machinery Specialist forestry attachment content cluster. Thirty-four pages
and roughly 47,000 words of editorial content: one pillar guide, eight category guides, a costs
guide, a hire-versus-buy guide, a carrier size guide, four head-to-head comparisons, four brand
profiles, three calculators, a glossary, a sources page and a quote form — all statically generated,
all cross-linked.

`docs/seo-audit.md` holds the content audit this structure is built from: per-page word counts,
commercial scoring, cannibalisation findings and the remaining production priority.

## Stack

- **Next.js 16** (App Router, React 19, TypeScript, static generation)
- **Tailwind CSS v4** for layout, with a hand-written design system in `src/app/globals.css`
- **remark / rehype** to render the markdown source at build time — no CMS, no client-side markdown
- **`next/og`** for per-page social cards, using fonts vendored in `src/assets/fonts/`
- Deploys to **Vercel** with zero configuration

## Content

The nine guides are markdown files in `content/`. Frontmatter drives the route, the `<title>`, the
meta description, the keyword set and the review date:

```yaml
---
page_type: category_guide          # or: pillar
suggested_slug: /tree-shears-guide/
h1: "Tree Shears: What They Do, What They Cost You, and When They Pay"
meta_title: "Tree Shears for Excavators | Buyer's Guide Australia"
meta_description: ...
primary_keyword: tree shears
secondary_keywords: excavator tree shear, felling head
search_intent: commercial investigation
parent_page: /forestry-machinery-guide/
last_reviewed: 2026-09-12
---
```

`src/lib/content.ts` parses those files and pulls apart the structure the design needs:

| Source convention | Rendered as |
|---|---|
| `# Heading` | Hero H1 (from the `h1` frontmatter) |
| First paragraph | Hero standfirst |
| `## Headings` | Article sections, with a sticky table of contents built from their slugs |
| GFM tables | Spec sheets, each in its own horizontal scroll container |
| `## Frequently asked questions` + `**Question?**` / answer pairs | FAQ accordion **and** `FAQPage` schema |
| Trailing `**Next:** [A](/a/) …` line | Related-guide cards |

> Frontmatter values containing a colon or a pipe must be quoted, or the YAML parser rejects the
> file. The files in `content/` are already quoted where needed.

### Automatic enrichment

`src/lib/enrich.ts` runs two passes over the rendered tree before it is stringified:

- **Glossary linking.** The first occurrence of each term in `src/lib/glossary.ts` becomes a link to
  `/glossary/#<id>`, once per term per page, skipping headings, tables headers, code and existing
  links. Adding a term to that file links it across every guide with no markdown edits.
- **Citations.** Each source in `src/lib/sources.ts` declares anchor phrases that appear verbatim in
  the markdown. Where one matches, a numbered reference marker is inserted and the page renders a
  matching references block. Change the copy and the marker disappears rather than pointing at the
  wrong sentence — it never silently mis-cites.

## Where the content lives

Everything that is not markdown is a typed module, so the pages are thin:

| File | Holds |
|---|---|
| `src/lib/categories.ts` | The eight categories: labels, carrier ranges, product-page targets, hero photo, brands, key takeaways |
| `src/lib/media.ts` | The image manifest — every photograph with its hand-written alt text |
| `src/lib/glossary.ts` | ~38 terms, grouped, with the guide each links through to |
| `src/lib/sources.ts` | Cited sources and the phrases that trigger them |
| `src/lib/comparisons.ts` | The four head-to-head comparisons |
| `src/lib/brands.ts` | Brand profiles, series lists, suitability, support and limitations |
| `src/lib/carrier-bands.ts` | The six carrier classes and what each one can run |

`src/lib/categories.ts` is deliberately separate from `src/lib/content.ts` — the latter imports
`node:fs`, so a client component importing category metadata from it breaks the build.

## Routes

| Route | Source |
|---|---|
| `/` | `src/app/page.tsx` |
| `/forestry-machinery-guide/` and the eight `/…-guide/` pages | `src/app/[slug]/page.tsx`, from `content/` |
| `/costs/` | What drives attachment cost, and how to compare quotes |
| `/hire-vs-buy/` | Utilisation thresholds and the hire/buy/subcontract decision |
| `/wear-parts/` | What wears by category, and what drives the rate |
| `/troubleshooting/` | Symptom-by-symptom diagnosis, flow versus pressure |
| `/support-and-parts-australia/` | Freight, lead time and what differs by state |
| `/as-4373-mechanised-pruning/` | Compliance for utility and council pruning contracts |
| `/finance-and-tax/` | Depreciation, thresholds and the first-use timing test |
| `/compare/` and `/compare/[pair]/` | Four comparisons, from `src/lib/comparisons.ts` |
| `/brands/` and `/brands/[brand]/` | Four manufacturers, from `src/lib/brands.ts` |
| `/hydraulic-flow-calculator/` | Which attachments a given carrier can actually run |
| `/cost-per-stump-calculator/` | Grinder economics |
| `/cost-per-hectare-calculator/` | Mulching tender rates, with a sensitivity table |
| `/compatibility/` | Carrier size guide — what fits a 3, 5, 8, 13, 20 or 30 t excavator |
| `/glossary/`, `/sources/` | Reference |
| `/request-quote/` | Quote form |
| `/sitemap.xml`, `/robots.txt` | Generated from the content index |

Unknown slugs 404 — `dynamicParams` is off on every dynamic segment.

Calculator state lives in the query string, so a result can be pasted into a tender note and come
back identical.

## Images

Photography and supplier logos are hosted locally in `public/images/`, served through `next/image`.
Every image has hand-written alt text in `src/lib/media.ts`, describing what is in the frame.
Studio cut-outs are flagged `cutout: true` and get a light plate behind them so they do not float on
the dark ground.

Diagrams are original inline SVG in `src/components/diagrams/`, each carrying information rather than
decoration: the four hydraulic circuit types, every published carrier range on one log axis, and
grinding versus cutting drawn side by side.

## Content conventions

Two rules hold across every page, and both are deliberate rather than incidental:

- **No published prices.** Attachment pricing moves with the exchange rate, specification, rotation
  options and the carrier bracket, so a figure published today is routinely wrong within a quarter.
  Cost pages explain what drives the number instead, which stays true for longer and is more useful
  to a buyer reading a quote.
- **No claimed first-hand testing.** The site has not tested this equipment. Brand profiles carry a
  visible disclosure saying so, and where a specification could not be verified it is omitted rather
  than estimated.
- **Figures are worked examples, not market data.** Where a chart shows dollar figures it states its
  inputs on the figure and derives everything from them, so a reader can vary the assumptions in the
  matching calculator rather than trusting a number.

Long-form pages are assembled from the shared primitives in `src/components/content.tsx` — `Section`,
`ShortAnswer`, `NumberedGrid`, `Checklist`, `RedFlags`, `FaqBlock`, `NextSteps` — so structure stays
consistent and new pages do not drift from the design system.

## Running it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build
npm run typecheck
```

## Quality gates

Three checks run against a built site. Start it with `npm run build && npm start`,
then point each script at it. All three are release gates, not advisory:

```bash
npm run audit        -- http://localhost:3000   # content and SEO
npm run a11y         -- http://localhost:3000   # accessibility
npm run check-links                             # cited source URLs
npm run perf         -- http://localhost:3000   # page weight and paint timing
```

**`npm run audit`** crawls the sitemap and fails on thin pages (below 700 words of
main content, with a short allowlist for utility pages where depth is not the job),
broken internal links, missing or duplicated `h1`, missing canonicals, meta
descriptions outside 130–165 characters, images without alt text, structured data
that misrepresents the page — an FAQ answer that duplicates its question, for
instance — and horizontal overflow at 390px. It exists because a previous round
shipped seventeen pages below the minimum without anyone noticing.

**`npm run a11y`** runs axe-core over every page at 1440px and 390px against
WCAG 2.1 AA, and fails on any serious or critical violation.

**`npm run check-links`** confirms every URL in `src/lib/sources.ts` still resolves.
A 404 fails the run. A 403 or a reset connection is reported separately, because
ISO, the ATO and agriculture.gov.au all block automated requests and that is not
evidence the page is gone — each source carries a `verified` date recording when a
human last confirmed it.

If Chromium is not on the default path, set `CHROMIUM_PATH`.

## Deploying to Vercel

Import the repository; the framework preset, build command and output are all detected.

The production origin is **`https://www.forestrymachinery.com.au`**, hard-coded as the default in
`src/lib/site.ts`. Every canonical, Open Graph URL, sitemap entry and JSON-LD `@id` is built from it.

It is a default rather than a required environment variable on purpose. A missing variable used to
fall back to a Vercel preview host, which meant the whole site canonicalised onto a URL nobody should
be indexing — a silent, site-wide fault. Now a missing variable degrades to correct.

Set `NEXT_PUBLIC_SITE_URL` only to override it, for example on a staging domain. Anything set there
is reduced to its origin, so a trailing slash or a stray path cannot corrupt the canonicals.

### Two domain details that matter

- **Use the `www` host.** The apex `forestrymachinery.com.au` 301s to `www`, so a canonical pointing
  at the apex would name a URL that redirects. `PRODUCTION_ORIGIN` uses `www` for that reason.
- **`trailingSlash` is on.** Every path except the root ends in a slash, and `absoluteUrl()` enforces
  it — except for file paths, so the sitemap is declared as `sitemap.xml`, not `sitemap.xml/`.

## Before this goes live

1. **Quote delivery.** `src/app/request-quote/actions.ts` validates the submission and logs it.
   Point it at the CRM, an email service or a webhook — the validation above it stays as is.
2. **Product page links.** Each guide links down to its transactional product page via
   `productHref` in `src/lib/categories.ts`, following the implementation map in
   `docs/README-implementation-and-site-QA.md`. These are relative, so they assume the guides are
   served from the same origin as the existing product pages. If the guides are hosted separately,
   make them absolute.
3. **Image rights.** Product photography and supplier logos in `public/images/` were taken from
   machineryspecialist.com.au. The photographs are the client's own; the supplier logos (OMEF,
   Dipperfox, Powerhand, Trevi Benne) are third-party marks used to identify the ranges these guides
   cover. Confirm that is how the client wants them shown before launch.
4. **Review dates.** `last_reviewed` in each markdown file drives both the sitemap `lastmod` and the
   visible review date. Update it when you update the content — not on every deploy, which is why it
   is editorial rather than read from the filesystem.

`docs/README-implementation-and-site-QA.md` also carries the live-site QA findings that came with the
content. They are about the existing product pages, not this codebase, and are worth working through
before the guides start linking into them.
