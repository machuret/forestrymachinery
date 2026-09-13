# SEO and content audit

**Site:** Forestry attachment guide cluster for Machinery Specialist (AU)
**Method:** Main-content word counts measured from rendered HTML with site chrome (nav, footer) stripped, so the figures are editorial content only.
**Pages audited:** 28 (every URL in `sitemap.xml`)
**Total main-content words at audit:** 22,144
**Total after the P1 round:** 38,078 across 29 pages — see section 9.
**Total after the P2/P3 round:** 47,018 across 34 pages — see section 10.

---

## 1. Master table

Commercial score uses the weighted model in the brief (commercial intent 20, buyer proximity 15, demand 15, revenue value 15, strategic relevance 10, ranking opportunity 10, internal linking 5, long-tail 5, AU relevance 5). Quality score uses the 100-point content model.

| URL | Primary keyword | Intent | Comm. | Quality | Words | Cannibalisation | Action | Priority |
|---|---|---|---:|---:|---:|---|---|---|
| `/forestry-machinery-guide/` | forestry machinery | Commercial investigation | 88 | 86 | 2,126 | Conflicts with `/guides/` | KEEP + expand costs section | P2 |
| `/stump-grinder-guide/` | stump grinder excavator | Commercial investigation | 86 | 84 | 1,732 | — | KEEP | P3 |
| `/grapple-saw-guide/` | grapple saw | Commercial investigation | 84 | 86 | 1,974 | — | KEEP | P3 |
| `/forestry-mulcher-guide/` | forestry mulcher | Commercial investigation | 84 | 83 | 1,644 | — | KEEP | P3 |
| `/tree-shears-guide/` | tree shears | Commercial investigation | 80 | 82 | 1,555 | — | KEEP | P3 |
| `/log-grab-guide/` | log grab | Commercial investigation | 74 | 83 | 1,646 | — | KEEP | P3 |
| `/mechanical-pruning-guide/` | mechanical pruning | Commercial investigation | 72 | 83 | 1,587 | — | KEEP | P3 |
| `/tillage-guide/` | excavator auger / compactor | Commercial investigation | 68 | 82 | 1,578 | — | KEEP | P3 |
| `/stump-cutter-guide/` | stump cutter | Commercial investigation | 64 | 81 | 1,512 | — | KEEP | P3 |
| `/compatibility/` | attachments for X tonne excavator | Commercial investigation | 90 | 48 | 320 | **Conflicts with flow calculator** | REWRITE + re-scope, absorb machine-size long tail | **P1** |
| `/hydraulic-flow-calculator/` | excavator auxiliary hydraulic flow | Commercial investigation | 82 | 56 | 575 | **Conflicts with compatibility** | EXPAND + narrow to tool intent | **P1** |
| `/cost-per-stump-calculator/` | stump grinding cost | Commercial investigation | 86 | 52 | 447 | — | EXPAND | **P1** |
| `/cost-per-hectare-calculator/` | mulching cost per hectare | Commercial investigation | 84 | 50 | 371 | — | EXPAND | **P1** |
| `/compare/stump-grinder-vs-stump-cutter/` | stump grinder vs stump cutter | Commercial investigation | 78 | 58 | 409 | Parent guides cover it in a section | EXPAND | **P1** |
| `/compare/tree-shear-vs-forestry-mulcher/` | tree shear vs mulcher | Commercial investigation | 76 | 56 | 370 | Parent guides cover it in a section | EXPAND | **P1** |
| `/compare/grapple-saw-vs-tree-shear/` | grapple saw vs tree shear | Commercial investigation | 74 | 57 | 404 | — | EXPAND | **P1** |
| `/compare/grapple-saw-vs-forestry-grab/` | grapple saw vs forestry grab | Commercial investigation | 70 | 57 | 387 | — | EXPAND | **P1** |
| `/brands/omef/` | OMEF attachments Australia | Commercial investigation | 72 | 45 | 273 | — | EXPAND | P2 |
| `/brands/dipperfox/` | Dipperfox stump grinder Australia | Commercial investigation | 74 | 40 | 140 | — | EXPAND | P2 |
| `/brands/powerhand/` | Powerhand grapple Australia | Commercial investigation | 66 | 41 | 156 | — | EXPAND | P2 |
| `/brands/trevi-benne/` | Trevi Benne stump cutter | Commercial investigation | 58 | 40 | 138 | — | EXPAND | P2 |
| `/compare/` | forestry attachment comparison | Commercial investigation | 62 | 38 | 115 | — | EXPAND | P2 |
| `/brands/` | forestry attachment brands Australia | Commercial investigation | 60 | 37 | 108 | — | EXPAND | P2 |
| `/glossary/` | forestry attachment terminology | Informational | 34 | 74 | 1,094 | — | KEEP | P4 |
| `/` | forestry attachments Australia | Mixed | 80 | 68 | 742 | — | KEEP, add cost/hire entry points | P2 |
| `/request-quote/` | forestry attachment quote | Transactional | 76 | 44 | 196 | — | KEEP (form page, depth not the job) | P3 |
| `/sources/` | — | Navigational / trust | 12 | 60 | 282 | — | KEEP (E-E-A-T utility) | P4 |
| `/guides/` | forestry attachment guides | Navigational | 30 | 34 | 263 | **Duplicates the pillar's job** | **REDIRECT → pillar** | **P1** |

---

## 2. Headline finding

**17 of 28 pages sit below the 700-word editorial minimum.**

The nine markdown-sourced guides are healthy (1,512–2,126 words) and need no structural work. Every page generated around them — comparisons, brand profiles, calculators, hubs — is thin. The cluster has good bones and a hollow second layer.

Three separate problems, in order of commercial cost:

1. **No page owns cost or price intent.** "How much does a stump grinder cost", "forestry mulcher price Australia", "what do excavator attachments cost" — the highest-intent commercial queries in this niche — have no landing page. The two calculators touch the topic but are scoped as tools and rank for tool queries.
2. **No page owns machine-size intent.** "Attachments for a 5 tonne excavator", "what can a 3 tonne excavator run" is the highest-volume long-tail shape in the category. `/compatibility/` is the natural home and is currently 320 words.
3. **Hire versus buy has no home.** Every one of the eight guides carries a "Buy, hire or subcontract" section. That is eight partial answers and no page to rank.

---

## 3. Keyword cannibalisation

### Conflict 1 — `/guides/` against `/forestry-machinery-guide/`

Both are an index of the forestry attachment guides. The pillar does the job at 2,126 words with a category table; `/guides/` repeats it at 263 words with cards. Same intent, same audience, no differentiation.

**Resolution:** 301 `/guides/` → `/forestry-machinery-guide/`. Point navigation at the pillar. One strong hub, not two.

### Conflict 2 — `/compatibility/` against `/hydraulic-flow-calculator/`

Both currently answer "will this attachment fit my excavator". Neither answers it well.

**Resolution:** re-scope rather than merge, because the underlying intents do separate cleanly once the pages are written properly.

| Page | Re-scoped to | Primary keyword |
|---|---|---|
| `/compatibility/` | Reference guide: what attachments suit each carrier class, size band by size band | attachments for a 5 tonne excavator |
| `/hydraulic-flow-calculator/` | The tool plus the hydraulics explanation behind it | excavator auxiliary hydraulic flow |

### Non-conflict, monitored

The comparison pages overlap with a section inside each parent guide (for example "Grinder or cutter? Decide with one question" inside `/stump-grinder-guide/`). This is a legitimate parent/child relationship: the guide gives the one-line answer and links up to the comparison for the full treatment. No action beyond keeping the guide sections short and linking them.

---

## 4. Missing high-value pages

| Page | Primary keyword | Intent | Comm. | Why it must exist |
|---|---|---|---:|---|
| `/costs/` | forestry attachment cost Australia | Commercial investigation | **94** | The single largest gap. Owns cost, price and "how much" intent across all eight categories without publishing figures that would be wrong in a quarter. |
| `/hire-vs-buy/` | excavator attachment hire or buy | Commercial investigation | **82** | Eight guides answer this partially. No page ranks for it. Utilisation thresholds already exist in the content. |
| `/wear-parts/` | mulcher teeth / grinder teeth cost | Commercial investigation | 76 | Wear parts are the dominant running cost and the least-researched purchase decision. Strong repeat-purchase commercial value. |
| `/as-4373-mechanised-pruning/` | AS 4373 compliance | Informational → commercial | 64 | Flagged in the original brief. Targets council and utility contractors at the moment they are writing a tender response. |
| `/finance-and-tax/` | instant asset write-off equipment | Commercial investigation | 58 | The pillar's tax section is strong and buried. Needs care: general information, not advice. |
| `/support-and-parts-australia/` | forestry attachment parts Australia | Transactional | 70 | Covers freight, lead time, service network and state coverage in one defensible page instead of thin city pages. |

### Location pages: explicitly not recommended

Do not build `forestry attachments Sydney`, `… Melbourne`, `… Brisbane`. There is no meaningful per-city difference in this business: one supplier, South Windsor NSW, freighting nationally. The honest version is a single national support-and-parts page covering freight, lead time and service coverage by state. Anything more is the thin location pattern the brief warns against.

---

## 5. Topic cluster architecture

```
/  (home)
└── /forestry-machinery-guide/                  PILLAR — category selection
    │
    ├── Category guides (8)                     the spokes, already strong
    │   ├── /tree-shears-guide/
    │   ├── /stump-cutter-guide/
    │   ├── /stump-grinder-guide/
    │   ├── /forestry-mulcher-guide/
    │   ├── /grapple-saw-guide/
    │   ├── /log-grab-guide/
    │   ├── /mechanical-pruning-guide/
    │   └── /tillage-guide/
    │
    ├── Fit and specification
    │   ├── /compatibility/                     attachments by carrier size
    │   └── /hydraulic-flow-calculator/         the tool + hydraulics
    │
    ├── Money  ← the weakest arm, and the most commercial
    │   ├── /costs/                             NEW — cost drivers hub
    │   ├── /hire-vs-buy/                       NEW — utilisation decision
    │   ├── /wear-parts/                        NEW — running cost
    │   ├── /finance-and-tax/                   NEW
    │   ├── /cost-per-stump-calculator/
    │   └── /cost-per-hectare-calculator/
    │
    ├── Comparison
    │   └── /compare/ + 4 head-to-heads
    │
    ├── Supply
    │   ├── /brands/ + 4 manufacturer profiles
    │   └── /support-and-parts-australia/       NEW
    │
    ├── Compliance
    │   └── /as-4373-mechanised-pruning/        NEW
    │
    └── Reference
        ├── /glossary/
        └── /sources/
```

The money arm is the commercial engine and currently the thinnest. That is where the work goes first.

---

## 6. Buyer journey coverage

| Stage | Query shape | Current coverage | Gap |
|---|---|---|---|
| 1. Awareness | "what is a grapple saw" | Guides + glossary | Covered |
| 2. Education | "how does a stump grinder work" | Guides | Covered |
| 3. Evaluation | "what size mulcher do I need" | Guides, thinly | `/compatibility/` rewrite |
| 4. Comparison | "grinder vs cutter" | 4 pages, thin | Expansion |
| 5. **Cost** | "how much does X cost" | **None** | **`/costs/`** |
| 6. **Hire vs buy** | "should I hire or buy" | Scattered | **`/hire-vs-buy/`** |
| 7. Supplier research | "who sells X in Australia" | Brand pages, thin | Expansion + support page |
| 8. Purchase | "what to ask before buying" | Guides | Covered |
| 9. **Ownership** | "mulcher teeth cost" | **None** | **`/wear-parts/`** |
| 10. Problems | "mulcher not cutting" | Thin | Future round |

Stages 5, 6 and 9 are where buyers are closest to spending, and they are the three the site covers worst.

---

## 7. Production priority

**P1 — do first**
1. Redirect `/guides/` → pillar (resolves cannibalisation)
2. Rewrite `/compatibility/` as the carrier-size reference (target 2,000+ words)
3. Build `/costs/` (target 2,000+ words)
4. Expand the four comparison pages (target 1,200+ each)
5. Expand the three calculators with methodology and cost-driver content
6. Build `/hire-vs-buy/` (target 1,200+ words)

**P2**
7. Expand the four brand profiles (target 900+ each)
8. Expand `/compare/` and `/brands/` hubs (target 700+ each)
9. Build `/wear-parts/` and `/support-and-parts-australia/`

**P3**
10. `/as-4373-mechanised-pruning/`, `/finance-and-tax/`
11. Troubleshooting arm

---

## 8. Editorial constraints carried through all of it

- **No published prices.** The original brief omits dollar figures deliberately: attachment pricing moves with exchange rate, spec, rotation options and carrier bracket, and a published number would be wrong within a quarter. Cost pages therefore explain what drives the number and what to interrogate in a quote. This is not a limitation — it is the differentiator, because competitors publish figures that go stale.
- **No invented specifications.** Every brand, model, weight, flow figure and carrier range traces to the live Machinery Specialist product pages. Where a figure is not available, the page says what to ask for instead of estimating.
- **No claimed first-hand testing.** The site has not tested this equipment. Experience signals come from buying, specification and ownership reasoning, which is honest and still useful.
- **Tax content is general information, not advice**, and says so on every page it appears.


---

## 9. What the P1 round delivered

Re-measured with the same method after the work below.

| Metric | Before | After |
|---|---:|---:|
| Indexable pages | 28 | 29 |
| Total main-content words | 22,144 | 38,078 |
| Pages below the 700-word minimum | 17 | 2 |
| Pages with FAQ coverage | 9 | 24 |
| Meta descriptions outside 135–162 characters | 21 | 0 |
| Keyword cannibalisation conflicts | 2 | 0 |

The two pages still under 700 words are `/request-quote/` (196) and `/sources/` (282). Both are utility pages where depth is not the job: one is a form, the other is an editorial-standards disclosure. Padding either would be exactly the filler the brief warns against.

### Structural changes

- **`/guides/` 301s to `/forestry-machinery-guide/`.** The cannibalisation conflict is gone and navigation now points at the pillar. Next.js issues a 308, which Google treats as a permanent redirect.
- **`/compatibility/` re-scoped** from a 320-word reference table to a 2,511-word carrier-size guide, band by band from 1.5 t to 50 t. This absorbs the machine-size long tail ("attachments for a 5 tonne excavator") that previously had no home, and separates it cleanly from the flow calculator's tool intent.
- **`/hydraulic-flow-calculator/` narrowed** to the tool plus the hydraulics explanation behind it, with seven FAQs covering auxiliary flow, case drain and circuit retrofitting.

### New pages

| URL | Words | Primary keyword |
|---|---:|---|
| `/costs/` | 2,620 | forestry attachment cost Australia |
| `/hire-vs-buy/` | 1,524 | excavator attachment hire or buy |

### Expanded pages

| URL | Before | After |
|---|---:|---:|
| `/compatibility/` | 320 | 2,511 |
| `/cost-per-stump-calculator/` | 447 | 1,136 |
| `/cost-per-hectare-calculator/` | 371 | 1,050 |
| `/hydraulic-flow-calculator/` | 575 | 1,092 |
| `/compare/stump-grinder-vs-stump-cutter/` | 409 | 1,204 |
| `/compare/grapple-saw-vs-tree-shear/` | 404 | 1,206 |
| `/compare/grapple-saw-vs-forestry-grab/` | 387 | 1,147 |
| `/compare/tree-shear-vs-forestry-mulcher/` | 370 | 1,106 |
| `/brands/omef/` | 273 | 1,147 |
| `/brands/dipperfox/` | 140 | 971 |
| `/brands/powerhand/` | 156 | 959 |
| `/brands/trevi-benne/` | 138 | 917 |
| `/brands/` | 108 | 818 |
| `/compare/` | 115 | 777 |

### What each expansion added

Not length for its own sake. Each expanded page gained specific missing elements identified in the gap analysis:

- **Comparison pages:** a cost-driver table (the feature table could not show running costs), three worked buyer scenarios, four pairing-specific mistakes, a decision checklist, and FAQs taken from three to six.
- **Brand profiles:** background on where the range sits, who it suits and explicitly who it does not, parts and warranty considerations for an Australian buyer, honest limitations, and five FAQs each. Each carries a visible disclosure that no independent testing was performed.
- **Calculators:** a methodology section explaining what the arithmetic does and what it deliberately excludes, an input-quality checklist, and six to seven FAQs targeting the cost queries the tool itself cannot rank for.
- **Hubs:** an answer-first opening, a decision framework, an editorial-standards section, FAQs and next steps.

### Internal linking

Every page now carries at least six inbound internal links; the twenty-two pages in the main navigation and footer carry twenty-eight. The money arm is fed from three directions: a sidebar rail on all nine category guides, the homepage tools block, and contextual links written into the pillar's cost, utilisation and carrier-matching sections.

### Still outstanding after P1

P2 and P3 from section 7 were not built in that round. They were built in the next one — see section 10.


---

## 10. What the P2/P3 round delivered

| Metric | At audit | After P1 | After P2/P3 |
|---|---:|---:|---:|
| Indexable pages | 28 | 29 | 34 |
| Total main-content words | 22,144 | 38,078 | 47,018 |
| Pages below 700 words | 17 | 2 | 2 |
| Pages with FAQ coverage | 9 | 24 | 29 |
| Minimum inbound internal links | — | 6 | 6 |

### New pages

| URL | Words | Primary keyword | Journey stage it fills |
|---|---:|---|---|
| `/wear-parts/` | 2,337 | mulcher teeth cost | 9 — ownership |
| `/troubleshooting/` | 1,810 | excavator attachment running slow | 9 — problems |
| `/as-4373-mechanised-pruning/` | 1,711 | AS 4373 pruning | Compliance, pre-tender |
| `/support-and-parts-australia/` | 1,599 | forestry attachment parts Australia | 7 — supplier research |
| `/finance-and-tax/` | 1,283 | instant asset write-off equipment | 5 — commercial research |

Buyer journey coverage (section 6) is now complete across all ten stages. Stages 9 and 10 — ownership and problems — were the last gaps and are covered by `/wear-parts/` and `/troubleshooting/`.

### What each page is grounded in

Every claim traces to the source content rather than to general category knowledge:

- **`/wear-parts/`** uses the per-category wear detail written into each guide: that grinder tooth wear is driven almost entirely by soil rather than timber, that harvester chain runs 0.404″ or 3/4″ pitch and is not chainsaw chain, that ignoring pin and bush wear on a shear lets the jaw track out and destroys blades, and that tooth cost per hour should be tracked per site type rather than averaged.
- **`/troubleshooting/`** is built on the flow-versus-pressure distinction and the case drain requirement already documented in the guides, organised into seven symptoms with ordered causes.
- **`/as-4373-mechanised-pruning/`** states what the standard governs and what that means for tool selection and tendering. It deliberately does not reproduce or summarise the standard's clauses, and says so — the standard must be obtained from Standards Australia.
- **`/support-and-parts-australia/`** is the single national page recommended in section 4 instead of thin city pages. It states the actual supply position (one base, South Windsor NSW, freighting nationally) and covers what genuinely differs by state: freight legs, seasonal windows, ground abrasiveness.
- **`/finance-and-tax/`** expands the pillar's tax section, stating the threshold with its legislative status and leading with the general-information caveat rather than burying it.

### A note on the location-page decision

`/support-and-parts-australia/` exists precisely so that city pages do not need to. The page says so on the record: with one supply base freighting nationally, the only honest differences between a Sydney page and a Brisbane page are the freight leg and the ground conditions, and both are covered in one place. This is the recommendation from section 4, implemented.

### Remaining opportunities

Not built, and none of them P1:

- Per-model spec pages (for example the Dipperfox 400/600/850 Pro individually). Worth doing only if model-level specifications can be verified; otherwise they would be thin.
- Application pages — "best attachment for orchard work", "attachments for council parks crews".
- A used and second-hand attachment guide, which would need care around what can be verified.
