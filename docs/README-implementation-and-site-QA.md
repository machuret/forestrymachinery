---
document: Implementation map and live site QA
prepared_by: Gabriel Machuret, Growth and Marketing Hacker
client: Machinery Specialist (machineryspecialist.com.au)
scope: Forestry machinery guide, 9 pages
---

# Forestry Machinery Guide: Implementation Map and Site QA

## 1. What has been produced

Nine pages. One pillar, eight category guides. Each is written to stand alone as a published page and to function as a node in a hub-and-spoke cluster.

| File | Suggested URL | Primary keyword | Role |
|---|---|---|---|
| `00-pillar-forestry-machinery-guide.md` | `/forestry-machinery-guide/` | forestry machinery | Hub |
| `01-tree-shears.md` | `/tree-shears-guide/` | tree shears | Spoke |
| `02-stump-cutters.md` | `/stump-cutter-guide/` | stump cutter | Spoke |
| `03-stump-grinders.md` | `/stump-grinder-guide/` | stump grinder | Spoke |
| `04-forestry-mulchers.md` | `/forestry-mulcher-guide/` | forestry mulchers | Spoke |
| `05-grapple-saws.md` | `/grapple-saw-guide/` | grapple saw | Spoke |
| `06-log-and-forestry-grabs.md` | `/log-grab-guide/` | log grab | Spoke |
| `07-mechanical-pruning.md` | `/mechanical-pruning-guide/` | mechanical pruning | Spoke |
| `08-tillage-ground-preparation.md` | `/tillage-guide/` | tillage | Spoke |

## 2. Why these sit on `-guide` URLs

The existing product pages (`/tree-shears/`, `/stump-grinder/`, etc.) are transactional. They describe a product and ask for a quote. They should stay exactly as they are.

These guide pages target a different stage of intent: the buyer researching before they know which category they need. Putting guide content on the existing product URLs would dilute the commercial page and cannibalise its ranking intent. Two URLs, two jobs, linked to each other.

**Linking rule:** every guide page links down to its matching product page with commercial anchor text. Every product page gets one contextual link up to its guide page.

| Guide page | Links to product page |
|---|---|
| `/tree-shears-guide/` | `/tree-shears/` |
| `/stump-cutter-guide/` | `/stump-cutter/` |
| `/stump-grinder-guide/` | `/stump-grinder/` |
| `/forestry-mulcher-guide/` | `/forestry-mulchers/` |
| `/grapple-saw-guide/` | `/forestry-grapple-saw/` |
| `/log-grab-guide/` | `/forestry-log-grabs-forestry-grabs/` |
| `/mechanical-pruning-guide/` | `/mechanical-pruning/` |
| `/tillage-guide/` | `/tillage/` |

Note: the internal links written into the draft pages currently point at the guide URLs only. Add the product-page links during upload, using the table above.

## 3. Build order

Build in this sequence, not all at once.

1. **Pillar.** Nothing else works without the hub.
2. **Stump grinders.** Highest commercial search volume in the set, clearest cost-per-unit argument, and Dipperfox is a genuine differentiator.
3. **Forestry mulchers.** Highest tender volume, area-based buying, council and government demand.
4. **Grapple saws.** Strongest technical depth, and the OMEF GS spec table is real competitive content that nobody else in the AU market publishes cleanly.
5. **Tree shears.**
6. **Log and forestry grabs.**
7. **Mechanical pruning.** The recurring-revenue angle is the most differentiated positioning in the set.
8. **Tillage.**
9. **Stump cutters.** Smallest audience, but it is the page that resolves the grinder-versus-cutter confusion, so it earns its place.

## 4. Schema markup

Every page carries a FAQ block written in question-and-answer form. Mark these up as `FAQPage` schema. The grapple saw, compactor and shear spec tables should be marked up as `Product` where they map to a single named model.

Add `BreadcrumbList` on every spoke, with the pillar as the parent.

## 5. Research and accuracy notes

Every brand, model, weight, flow figure and carrier range in these pages was taken from the live Machinery Specialist product pages, not from generic category knowledge. Confirmed brands across the forestry range:

- **OMEF** — tree shears (BIG INCH BI), mulchers (TE), mower (MOW), grapple saws (GS), log grapples (PFIMX), hedge trimmer (TG), pruning cutting bar (TRI), forestry pruner (CS), auger drill (TRV), soil compactor (CPT)
- **Trevi Benne** — stump cutter (WE)
- **Dipperfox** — stump grinder (SC)
- **Powerhand** — EX series forestry grapple, EX series grapple saw

**Deliberate omission:** no dollar prices appear anywhere in the guide. Attachment pricing moves with exchange rate, spec and bracket configuration, and a published figure would be wrong within a quarter and would invite price shopping against a number that is not current. The pages instead explain what drives the number, which is more useful to the buyer and safer for the client.

**Shearex:** the forestry hub page currently attributes mulchers to Shearex, but the live mulcher page presents the OMEF TE series. The guide follows the product page. See QA item 5 below.

## 6. Live site QA findings

These were found while verifying product data against the live site. Several are visible to users and to search engines. Flagging them here because they affect the credibility of the pages the guide will link into.

### High priority

**1. Wrong FAQ block on the Tillage page.** `/tillage/` ends with a five-question FAQ about the "GS Series grapple saw" (cutting, gripping, chainsaw hydraulics). It belongs on `/forestry-grapple-saw/`. A user reading about soil compactors is served answers about chainsaws.

**2. Duplicate URLs for the Tillage category.** Both `/tillage/` and `/augers-compactors/` are linked from "Discover More Forestry Equipment" blocks across the site, pointing at the same content. Pick one, 301 the other, set the canonical.

**3. `?utm_source=chatgpt.com` on internal links.** Every "Discover More Forestry Equipment" block appends this parameter to internal links. Two problems: it fragments internal analytics by attributing internal navigation to an external source, and it creates parameterised duplicate URLs for crawlers. Strip the parameter from all internal links.

**4. Brand mismatch, tree shears.** The forestry hub describes tree shears as "Italian made TreviBenne Tree Shears". The tree shears page presents the OMEF BIG INCH series. One of these is out of date.

**5. Brand mismatch, mulchers.** The hub describes "Shearex Mulchers For Excavators & Skid Steers". The mulcher page presents the OMEF TE series. Same issue.

**6. Chain pitch error.** The grapple saw page body copy states cassettes are available in "0.40-inch and 0.70-inch pitch". The FAQ on the same page correctly states "0.404″ or 3/4″". 0.40 and 0.70 inch are not standard chain pitches. The body copy is wrong and it is the kind of error a technical buyer notices immediately.

### Medium priority

**7. Wrong section heading on the Mechanical Pruning page.** The product card grid sits under the heading "Our Forestry Mulcher Range". It should read "Our Mechanical Pruning Range".

**8. Wrong thumbnail captions on the Grapple Saw page.** The "Powerhand Grapple Saw" card is captioned "Compact hydraulic mower for mowing grass and removing weeds and small shrubs". The "OMEF GRAPPLE SAW" card is captioned "Hydraulic mulcher for shredding grass, shrubs and plants up to 25 cm in diameter". Both are copied from the mulcher page.

**9. Mulcher capacity stated three ways.** The thumbnail card says 25 cm. The body copy says 20 cm. The FAQ says "around 20 cm". Pick the correct figure and make it consistent, because it is a purchase-decision spec.

**10. Stump grinder minimum carrier size unclear.** The body states "suitable for excavators 1.5 tonnes to 30 tonnes". The FAQ states the Dipperfox 400 suits "2–6T mini excavators". A buyer with a 1.7 tonne machine cannot tell whether they qualify.

**11. Powerhand grapple saw FAQ appears on the Log Grabs page.** `/forestry-log-grabs-forestry-grabs/` carries the full Powerhand *grapple saw* FAQ under the EX Series *grapple* content. Either intentional cross-sell or a paste error, but it reads as confusion between two products.

**12. Self-referencing link with wrong anchor text on the Log Grabs page.** A "Discover More" card headed "Tree Shears" links back to `/forestry-log-grabs-forestry-grabs/` while its image links correctly to `/tree-shears/`.

### Low priority

**13. Leftover og:image:alt values.** Both `/tillage/` and `/mechanical-pruning/` carry `og:image:alt` of "Log Grabs & Forestry Grabs". Affects social sharing previews and accessibility.

**14. Footer contradicts the Australia-only positioning.** The site footer reads "across Australia and New Zealand". This contradicts the AU-only scope applied to the technical services report. Confirm the correct position and apply it consistently, footer included.

**15. Missing meta descriptions.** Several forestry pages have no `meta-description`, so the og:description is being used as a fallback, which produces truncated SERP snippets ending in "[…]". Write proper descriptions for `/tree-shears/`, `/stump-cutter/`, `/stump-grinder/`, `/forestry-grapple-saw/`, `/forestry-log-grabs-forestry-grabs/`, `/mechanical-pruning/` and `/tillage/`.

## 7. Content extensions worth considering

Each of these is a natural follow-on page from the cluster, already scoped by the guide content:

- **Hydraulic flow matching calculator.** An interactive page that takes machine weight, flow and pressure and returns compatible attachments. This is the highest-value tool in the category and nobody in the AU market has one.
- **Cost per stump calculator.** Referenced in the stump grinder page. Build it.
- **Cost per hectare calculator.** Referenced in the mulcher page. Build it.
- **Attachment compatibility matrix by carrier size.** A single reference table covering every forestry attachment against 1.5 t to 50 t carriers. Strong link magnet.
- **AS 4373 compliance guide for mechanised pruning.** Targets council and utility contractors directly at the point they are writing a tender response.

## 8. Sources used for market and compliance claims

- ABARES / Department of Agriculture, Fisheries and Forestry, for plantation area and species composition
- IBISWorld, Forestry and Logging in Australia (ANZSIC A0300), for industry trend
- NSW Department of Primary Industries, for state-level plantation and harvest data and the Mid North Coast harvesting moratorium
- NSW Office of Environment, for the Enhanced Bushfire Management Program hectare targets
- Essential Energy and AusNet vegetation management plans, for utility clearance practice and AS 4373 application
- WorkSafe Victoria and Safe Work Australia, for AS 4772-2008 and ISO 13031-2016 quick hitch requirements
- ISO 8084, for operator protective structures
- Australian Taxation Office and 2026-27 Federal Budget commentary, for instant asset write-off status

Tax content is written as general information with an explicit caveat, not as advice.
