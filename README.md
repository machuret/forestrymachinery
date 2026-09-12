# Forestry Machinery Guide

A Next.js site for the Machinery Specialist forestry attachment content cluster: one pillar guide
and eight category guides, published as a hub-and-spoke set with FAQ, Article and BreadcrumbList
schema on every page.

## Stack

- **Next.js 16** (App Router, React 19, TypeScript, static generation)
- **Tailwind CSS v4** for layout, with a hand-written design system in `src/app/globals.css`
- **remark / rehype** to render the markdown source at build time — no CMS, no client-side markdown
- Deploys to **Vercel** with zero configuration

## Content

Every page is a markdown file in `content/`. The frontmatter drives the route, the `<title>`, the
meta description and the keyword set:

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
| Trailing `**Next:** [A](/a/) …` line | "Keep reading" navigation |

Adding a ninth guide means dropping a ninth markdown file into `content/` and adding a matching
entry to `CATEGORY_META` in `src/lib/categories.ts`. Routes, the sitemap, the nav, the footer and
the category grids all follow from those two places.

> Note: frontmatter values containing a colon or a pipe must be quoted, or the YAML parser rejects
> the file. The files in `content/` are already quoted where needed.

`src/lib/categories.ts` is deliberately separate from `src/lib/content.ts` — the latter imports
`node:fs`, so a client component importing category metadata from it breaks the build.

## Routes

| Route | Source |
|---|---|
| `/` | `src/app/page.tsx` |
| `/forestry-machinery-guide/` and the eight `/…-guide/` pages | `src/app/[slug]/page.tsx`, from `content/` |
| `/compatibility/` | Carrier compatibility matrix, `src/app/compatibility/page.tsx` |
| `/request-quote/` | Quote form, `src/app/request-quote/` |
| `/sitemap.xml`, `/robots.txt` | Generated from the content index |

Unknown slugs 404 — `dynamicParams` is off, so only the slugs in `content/` are ever served.

## Running it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export of every guide page
npm run typecheck
```

## Deploying to Vercel

Import the repository; the framework preset, build command and output are all detected. Set one
environment variable so canonical URLs, Open Graph URLs and the sitemap point at the real domain:

```
NEXT_PUBLIC_SITE_URL=https://your-domain.com.au
```

## Before this goes live

Two things are intentionally left unwired:

1. **Quote delivery.** `src/app/request-quote/actions.ts` validates the submission and logs it.
   Point it at the CRM, an email service or a webhook — the validation above it stays as is.
2. **Product page links.** Each guide links down to its transactional product page via
   `productHref` in `src/lib/categories.ts`. Those paths follow the implementation map in
   `docs/README-implementation-and-site-QA.md` and assume the guides are served from the same
   origin as the existing product pages. If they are hosted separately, make those absolute.

`docs/README-implementation-and-site-QA.md` also carries the live-site QA findings that came with
the content. They are about the existing product pages, not this codebase, and are worth working
through before the guides start linking into them.
