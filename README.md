# Forestry Machinery Guide

A Next.js site for the Machinery Specialist forestry attachment content cluster. Twenty-eight pages:
one pillar guide, eight category guides, four head-to-head comparisons, four brand pages, three
calculators, a compatibility matrix, a glossary, a sources page and a quote form — all statically
generated, all cross-linked.

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
| `src/lib/brands.ts` | Brand profiles and their series lists |

`src/lib/categories.ts` is deliberately separate from `src/lib/content.ts` — the latter imports
`node:fs`, so a client component importing category metadata from it breaks the build.

## Routes

| Route | Source |
|---|---|
| `/` | `src/app/page.tsx` |
| `/guides/` | Index of all nine guides |
| `/forestry-machinery-guide/` and the eight `/…-guide/` pages | `src/app/[slug]/page.tsx`, from `content/` |
| `/compare/` and `/compare/[pair]/` | Four comparisons, from `src/lib/comparisons.ts` |
| `/brands/` and `/brands/[brand]/` | Four manufacturers, from `src/lib/brands.ts` |
| `/hydraulic-flow-calculator/` | Which attachments a given carrier can actually run |
| `/cost-per-stump-calculator/` | Grinder economics |
| `/cost-per-hectare-calculator/` | Mulching tender rates, with a sensitivity table |
| `/compatibility/` | Carrier compatibility matrix |
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

## Running it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build
npm run typecheck
```

## Deploying to Vercel

Import the repository; the framework preset, build command and output are all detected. Set one
environment variable so canonical URLs, Open Graph URLs and the sitemap point at the real domain:

```
NEXT_PUBLIC_SITE_URL=https://your-domain.com.au
```

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
