/**
 * Brand profiles, assembled from the model data already written into the guide
 * bodies. Every series listed here appears in the source content.
 */

export interface Series {
  code: string;
  name: string;
  /** Guide slug this series belongs to. */
  guide: string;
  detail: string;
}

export interface BrandProfile {
  slug: string;
  name: string;
  origin: string;
  /** One line on what the brand is for in this range. */
  positioning: string;
  summary: string;
  series: Series[];
  /** What distinguishes it, stated without marketing. */
  notes: string[];
  /** Longer background: where the brand sits and how it got there. */
  background: string[];
  /** Who the range actually suits, and who it does not. */
  suitedTo: string[];
  notSuitedTo: string[];
  /** Parts, support and warranty considerations for an Australian buyer. */
  support: string[];
  /** Honest limitations. */
  limitations: string[];
  faqs: Array<{ q: string; a: string }>;
}

export const BRAND_PROFILES: BrandProfile[] = [
  {
    slug: "omef",
    name: "OMEF",
    origin: "Italy",
    positioning: "The broadest forestry range in the group, spanning ten series across every category in this guide",
    summary:
      "OMEF supplies the backbone of the forestry attachment range: shears, mulchers, mowers, grapple saws, log grapples, hedge trimmers, pruning bars, forestry pruners, auger drills and soil compactors. If a category in this guide has more than one model option, OMEF is usually why.",
    series: [
      { code: "BI", name: "BIG INCH tree shears", guide: "tree-shears-guide", detail: "Six models, 2 to 50 t carriers, trunk widths from 40 mm to 600–700 mm" },
      { code: "TE", name: "Forestry mulchers", guide: "forestry-mulcher-guide", detail: "Ten models, approximately 1 to 30 t carriers, single-acting line" },
      { code: "MOW", name: "Hydraulic mower", guide: "forestry-mulcher-guide", detail: "Double ball-bearing rotor drive for grass and light scrub" },
      { code: "GS", name: "Grapple saws", guide: "grapple-saw-guide", detail: "Three models, 3 to 30 t carriers, 15 to 160 L/min, dual circuit" },
      { code: "PFIMX", name: "Log grapples", guide: "log-grab-guide", detail: "Mounts across a broader carrier range than the EX series" },
      { code: "TG", name: "Hydraulic hedge trimmers", guide: "mechanical-pruning-guide", detail: "Hammer line plus drainage; six or nine cutting blades" },
      { code: "TRI", name: "Pruning cutting bar", guide: "mechanical-pruning-guide", detail: "Standard hammer line, no drainage line required" },
      { code: "CS", name: "Forestry pruner", guide: "mechanical-pruning-guide", detail: "Two double-acting lines" },
      { code: "TRV", name: "Auger drills", guide: "tillage-guide", detail: "Reinforced flighting and replaceable wear parts for continuous duty" },
      { code: "CPT", name: "Soil compactors", guide: "tillage-guide", detail: "Excavator-mounted plate compaction for trench and benched fill" },
    ],
    notes: [
      "The widest single-brand coverage in the range, which matters for parts commonality across a mixed fleet.",
      "Published carrier ranges are narrow and specific per model — treat them as the selection constraint, not a suggestion.",
      "The GS grapple saw range is the clearest example of why flow matters: 15 to 50 L/min on the smallest model, up to 160 L/min on the largest.",
    ],
    background: [
      "OMEF is an Italian manufacturer of excavator attachments whose forestry range is unusually broad: ten separate series covering six of the eight categories in this guide. In practice that breadth is the brand's defining characteristic. Where most manufacturers specialise in one or two categories, OMEF supplies shears, mulchers, mowers, grapple saws, log grapples, hedge trimmers, pruning bars, forestry pruners, auger drills and soil compactors from a single range.",
      "For a buyer, breadth across a range matters more than it first appears. A mixed fleet drawn from one manufacturer shares mounting conventions, hydraulic specification language and a single parts relationship, which reduces the number of separate supply conversations you have when something wears out. It also means one distributor relationship rather than four.",
      "The counterweight is that no manufacturer is the best in every category it enters. Breadth is a supply and support advantage, not evidence that each individual series leads its category, and the right way to use it is to evaluate each series on its own published specification against your work.",
    ],
    suitedTo: [
      "Contractors building a multi-attachment fleet who want parts commonality across categories",
      "Buyers who need a specific model inside a wide carrier range rather than a one-size unit",
      "Operations running several categories where a single distributor relationship simplifies support",
      "Mixed vegetation work spanning felling, mulching, pruning and ground preparation",
    ],
    notSuitedTo: [
      "Buyers who want a single highly specialised tool and do not value range breadth",
      "Very small carriers below the published minimum for the series in question",
      "Applications where a competing brand's specific mechanism is the actual requirement, as with in-ground stump grinding",
    ],
    support: [
      "Distributed in Australia through Machinery Specialist from South Windsor, NSW, with delivery nationally.",
      "Because the range spans ten series, ask which specific series has parts held locally rather than assuming the whole range does. Wear-part availability differs by category: mulcher teeth and saw chains move far faster than compactor plates.",
      "Turnkey kits — machine-specific mounting bracket plus hose kit — are the supply route worth taking on any OMEF attachment. The load path into the stick is unforgiving and a workshop bracket that does not sit right costs more in cracked steel than the kit saved.",
    ],
    limitations: [
      "Published carrier ranges are narrow and specific per model. A range spanning 2 to 50 tonnes describes the series, not a unit, and matching the wrong model to your machine produces exactly the problems the range exists to avoid.",
      "The GS grapple saw range requires a dual circuit on most models — a saw line plus a separate grapple and rotation supply. This is the most common reason a grapple saw purchase fails on delivery.",
      "Hydraulic requirements differ sharply within the pruning series: the TRI bar runs a plain hammer line, the TG needs drainage, and the CS needs two double-acting lines. Do not assume one circuit serves the category.",
    ],
    faqs: [
      {
        q: "Where are OMEF attachments made?",
        a: "Italy. The range is manufactured in Italy and supplied into Australia through a local distributor, which is the relationship that matters for parts lead time and warranty support.",
      },
      {
        q: "Which OMEF series suits a mini excavator?",
        a: "It depends on the work. The TE mulcher range starts at approximately 1 tonne and the GS grapple saw range at 3 tonnes, so both are reachable from a mini excavator. The constraint at that size is rarely weight — it is whether the machine has the auxiliary flow and the circuit the specific model needs.",
      },
      {
        q: "What is the difference between the OMEF TE and MOW series?",
        a: "The TE series is a forestry mulcher built to reduce standing vegetation including woody material. The MOW is a hydraulic mower using a double ball-bearing rotor drive, intended for grass and light scrub. They look superficially similar on a spec sheet and do materially different jobs.",
      },
      {
        q: "Do OMEF attachments come with a machine-specific bracket?",
        a: "They can, as a turnkey kit including the mounting bracket and hose kit for your carrier. It costs more up front and is nearly always worth taking, because a bracket that does not sit correctly concentrates load where the design did not intend it.",
      },
      {
        q: "How do I know which model in an OMEF range fits my excavator?",
        a: "Start with three numbers from the machine plate: operating weight, auxiliary flow in litres per minute and working pressure in bar. Then check lift capacity at the radius you actually work at. Those four, not machine weight alone, decide which model inside a published range is correct.",
      },
    ],
  },
  {
    slug: "dipperfox",
    name: "Dipperfox",
    origin: "Estonia",
    positioning: "A genuinely different stump grinding mechanism, and the strongest cost-per-stump argument in the range",
    summary:
      "Dipperfox stump grinders destroy the stump and root plate in place rather than grinding a surface flat. The result is coarse chip, no spoil heap and no stump to cart, which is what makes the cost-per-stump maths work on urban and high-count sites.",
    series: [
      { code: "SC400", name: "Dipperfox 400", guide: "stump-grinder-guide", detail: "Suits 2–6 t mini excavators" },
      { code: "SC600", name: "Dipperfox 600", guide: "stump-grinder-guide", detail: "Mid-range model for standard carriers" },
      { code: "SC850", name: "Dipperfox 850 Pro", guide: "stump-grinder-guide", detail: "Largest model in the range" },
    ],
    notes: [
      "A real differentiator rather than a badge — the mechanism, not just the branding, is different from conventional wheel grinders.",
      "Carrier guidance spans roughly 1.5 to 30 tonnes across the range; confirm the specific model against your machine rather than the range as a whole.",
      "Requires a hammer line plus case drain. Skipping the drain is the fastest way to kill the motor.",
    ],
    background: [
      "Dipperfox is an Estonian manufacturer whose stump grinders work on a different principle to the wheel grinders most Australian buyers will have seen. Rather than grinding a stump down to a flat surface, the tool works downward into the ground and destroys the stump and root plate in place.",
      "The commercial consequence matters more than the mechanism. There is no spoil heap and no stump to cart away: what is left is coarse chip and reinstated ground. On urban and near-asset sites, where disposal and access are most of the job cost, that changes the cost per stump substantially.",
      "This is a genuine differentiator rather than a badge. It is worth understanding before you compare a Dipperfox quote against a conventional grinder, because the two tools produce different outcomes and the cheaper invoice is not always the cheaper job.",
    ],
    suitedTo: [
      "Urban and residential removals where nothing can be left behind and access is tight",
      "High stump counts where cost per stump, not purchase price, decides the economics",
      "Sites with no spoil tolerance, including finished landscapes and public reserves",
      "Contractors pricing stump removal as a recurring service rather than an occasional extra",
    ],
    notSuitedTo: [
      "Operations that are extracting stumps anyway and need them sized for transport — that is stump cutter work",
      "Buyers wanting clean biomass feedstock, since the chip carries soil and fines",
      "Carriers above roughly 30 tonnes, which sit outside the published range",
    ],
    support: [
      "Supplied in Australia through Machinery Specialist from South Windsor, NSW, with delivery nationally.",
      "Teeth are the consumable that decides your running cost, and tooth life varies enormously with soil. In abrasive or stony ground they become a monthly budget line rather than an occasional order. Get tooth pricing and lead time in writing before purchase.",
      "Ask directly what the warranty says about striking buried metal. Urban fill routinely contains old fencing, reinforcement and services, and this is the single most common cause of unplanned tooth replacement in residential work.",
    ],
    limitations: [
      "Requires a hammer line plus case drain. The piston motor needs drainage back to tank, and running without it kills motor seals — often inside a season, and rarely as a warranty claim.",
      "Carrier guidance spans roughly 1.5 to 30 tonnes across the range, but the models are specific. Confirm the individual model against your machine rather than reading the range as a whole.",
      "The output is chip mixed with soil, which is fine for site reinstatement and poor as a processing feedstock. If you want clean material, you want a different tool.",
    ],
    faqs: [
      {
        q: "How is a Dipperfox different from a normal stump grinder?",
        a: "A conventional wheel grinder abrades the stump down to a flat surface, usually leaving the root plate. The Dipperfox works downward into the ground and destroys the stump and root plate in place. The practical difference is what is left afterwards: coarse chip and reinstated ground rather than a ground-down stump and a spoil pile.",
      },
      {
        q: "What size excavator do I need for a Dipperfox?",
        a: "The range spans roughly 1.5 to 30 tonnes, with the Dipperfox 400 suiting 2 to 6 tonne mini excavators. Match the specific model rather than the range, and confirm your auxiliary flow and that a case drain is fitted before you commit.",
      },
      {
        q: "How long do the teeth last?",
        a: "It depends almost entirely on your ground. In clean soil they last well; in sandy, stony or metal-contaminated urban fill they are a consumable you budget monthly. This is why the useful question to a supplier is not what a set costs but how many hours a set lasts in ground like yours, and how quickly a replacement set arrives.",
      },
      {
        q: "Does it work on large stumps?",
        a: "Within the rated capacity of the model, yes, and the mechanism handles the root plate rather than stopping at the visible stump. As with every attachment in this category, treat published maximums as best case and derate for dense, buttressed Australian hardwood.",
      },
      {
        q: "Is the chip usable?",
        a: "For site reinstatement and backfill, generally yes. As a clean biomass or mulch feedstock, no — it carries soil and fines from working in ground. If clean sized material is the requirement, a stump cutter working on extracted stumps is the right tool.",
      },
    ],
  },
  {
    slug: "powerhand",
    name: "Powerhand",
    origin: "United Kingdom",
    positioning: "Heavy-duty grapples and grapple saws built around rotator choice and tine count",
    summary:
      "The Powerhand EX series covers both the forestry grapple and the grapple saw. The grapple is built for brash and biomass retention; the saw unit is the cheaper of the two grapple saw paths because it needs only one hydraulic flow rather than a full dual circuit.",
    series: [
      { code: "EX", name: "EX series forestry grapple", guide: "log-grab-guide", detail: "Five solid 50 mm Hardox tines, designed for 13 to 25 tonne carriers" },
      { code: "EX-S", name: "EX series grapple saw", guide: "grapple-saw-guide", detail: "Suits excavators from 8 t; Indexator GC124S or XR400 rotator" },
    ],
    notes: [
      "Five tines rather than four is the retention argument: four-tine grapples spill brash and biomass.",
      "Rotator choice is specified rather than assumed — GC124S for swinging applications, XR400 for rigid installations, both with internally routed hoses.",
      "The saw unit requires only one hydraulic flow, which widens the range of carriers it can go on.",
    ],
    background: [
      "Powerhand is a United Kingdom manufacturer whose EX series covers both a forestry grapple and a grapple saw. The two share a design language but do different jobs, and the distinction is worth getting right before you shortlist either.",
      "The grapple is built around retention: five solid 50 mm Hardox tines, designed for 13 to 25 tonne carriers. Tine count is not a cosmetic difference — four-tine grapples spill brash and biomass, and on material that is irregular and bulky the extra tines translate directly into fewer dropped loads and fewer cycles.",
      "The grapple saw takes a different approach to the category. It requires only one hydraulic flow rather than a full dual circuit, which widens the range of carriers it can be fitted to and makes it the cheaper path into grapple saw work for an operator whose machine is not already plumbed for two circuits.",
    ],
    suitedTo: [
      "Brash, biomass and irregular material where retention decides productivity",
      "Chipper feeding, log decks and site clean-up on 13 to 25 tonne carriers",
      "Operators wanting grapple saw capability without committing to a full dual circuit",
      "Contractors who want the rotator specified deliberately rather than assumed",
    ],
    notSuitedTo: [
      "Mini and midi excavators below the published grapple range",
      "Buyers who need the widest possible carrier coverage from a single manufacturer",
      "Work where a clean saw cut on high-value sawlog is the primary requirement and cut quality outranks fitment flexibility",
    ],
    support: [
      "Supplied in Australia through Machinery Specialist from South Windsor, NSW, with delivery nationally.",
      "Rotator choice is specified rather than assumed: an Indexator GC124S for swinging applications or an XR400 for rigid installations, both with internally routed hoses. Internal routing matters in forestry work, where exposed hoses are the first thing brash finds.",
      "Ask what a replacement rotator costs and what the lead time is. On a grapple it is the component most likely to need service, and it is the one buyers price last.",
    ],
    limitations: [
      "The EX series grapple is designed for 13 to 25 tonne carriers, which excludes the mini and midi excavators that make up a large share of the Australian arborist fleet.",
      "The saw unit needing only one hydraulic flow is a fitment advantage, not a performance claim. Compare cutting capacity and cassette specification against dual-circuit alternatives on the work you actually do.",
      "As a UK-manufactured range, confirm what is held in Australia before you rely on lead times. The difference between a two-day repair and a six-week one is a parts question, not a brand question.",
    ],
    faqs: [
      {
        q: "How many tines should a forestry grapple have?",
        a: "More tines give better retention on irregular and bulky material. The Powerhand EX series uses five solid 50 mm Hardox tines, which suits brash and biomass work where four-tine grapples tend to spill material. On clean logs of consistent diameter the difference matters less.",
      },
      {
        q: "What size excavator does the Powerhand EX grapple suit?",
        a: "It is designed for 13 to 25 tonne carriers. If your machine is smaller than that, the OMEF PFIMX log grapple mounts across a broader carrier range and is the more likely fit.",
      },
      {
        q: "Does the Powerhand grapple saw need a dual circuit?",
        a: "No, and that is its distinguishing feature in this range. The saw unit requires only one hydraulic flow, which widens the range of carriers it can be fitted to and makes it the cheaper path into grapple saw work where the machine is not already plumbed for two circuits.",
      },
      {
        q: "What rotator is fitted?",
        a: "An Indexator GC124S for swinging applications or an XR400 for rigid installations, both with internally routed hoses. The choice is specified to the installation rather than being a single default, so confirm which one your quote includes.",
      },
      {
        q: "What is Hardox and why does it matter on tines?",
        a: "Hardox is a family of abrasion-resistant steels used where impact and scraping would deform mild steel. On grapple tines, which are dragged across ground and loaded sideways, it is the difference between a tine that holds its shape and one that bends into a shape that no longer grips.",
      },
    ],
  },
  {
    slug: "trevi-benne",
    name: "Trevi Benne",
    origin: "Italy",
    positioning: "Stump cutters for the extraction-and-process workflow",
    summary:
      "The Trevi Benne WE series is the stump cutter in this range: a jaw that splits and sizes stumps that have already been pulled, so they can be transported or chipped. It also slices larger material, which is why it earns a place on clearing sites where disposal volume is the cost.",
    series: [
      { code: "WE", name: "WE series stump cutters", guide: "stump-cutter-guide", detail: "11.5 to 28 t carriers; splits extracted stumps and larger material" },
    ],
    notes: [
      "Not a grinder, and not a substitute for one. It works on stumps that are already out of the ground.",
      "Buy it when disposal volume is the cost you are fighting, not when stump removal in place is your scope.",
      "The narrowest carrier range of any category here, which makes carrier match unusually important.",
    ],
    background: [
      "Trevi Benne is an Italian manufacturer of excavator attachments, and within this range it supplies one thing: the WE series stump cutter. That narrowness is worth stating plainly, because the category itself is the most misunderstood in the Australian market.",
      "A stump cutter is not a stump grinder and is not a substitute for one. It works on stumps that have already been extracted, splitting and sizing them on the surface so the material can be transported or chipped. If the stump is still in the ground, a cutter cannot help you.",
      "The buyers it suits are therefore specific: operations already pulling stumps as part of clearing, where the cost being fought is disposal volume rather than stump removal. For them the tool earns its place, and it also slices larger material, which extends its usefulness on a clearing site beyond stumps alone.",
    ],
    suitedTo: [
      "Land clearing operations already extracting stumps with an excavator",
      "Sites where disposal and transport volume is the dominant cost",
      "Processing extracted stumps into chip-ready material for biomass",
      "Contractors with 11.5 to 28 tonne carriers running production clearing",
    ],
    notSuitedTo: [
      "Removing stumps in place — that is stump grinder work and no cutter can do it",
      "Mini and midi excavators below 11.5 tonnes, which is the entire small end of the market",
      "Urban and residential removals, where access and no-spoil requirements favour grinding",
    ],
    support: [
      "Supplied in Australia through Machinery Specialist from South Windsor, NSW, with delivery nationally.",
      "The consumable pattern is a blade and jaw rebuild on a periodic basis rather than a constant tooth spend, which makes running costs more predictable than a grinder but concentrated into larger, less frequent events. Budget for the rebuild rather than a monthly line.",
      "Because this is a single-series relationship rather than a whole range, confirm parts lead time specifically for the WE series rather than assuming broader distributor coverage applies.",
    ],
    limitations: [
      "The narrowest carrier range of any category in this guide, at 11.5 to 28 tonnes. There is no mini excavator option, which rules the tool out for a large part of the Australian arborist market.",
      "It is one series covering one job. There is no adjacent product to grow into within the brand, so this is a single-purpose purchase.",
      "Demand is the smallest in the forestry set. That is not a quality judgement, but it does mean fewer machines in the country and a thinner pool of operator experience to draw on.",
    ],
    faqs: [
      {
        q: "Can a Trevi Benne stump cutter remove a stump from the ground?",
        a: "No. A cutter works on stumps that are already out. Removal in place requires a stump grinder, or an excavator and a great deal of digging. Confusing the two is the most common category error in this market.",
      },
      {
        q: "What size excavator does the WE series need?",
        a: "11.5 to 28 tonnes, which is the narrowest published carrier range of any category in this guide. Carrier match matters more than usual here, because there is no smaller model to fall back on.",
      },
      {
        q: "Do I need one if I already have a stump grinder?",
        a: "Usually not. The two tools solve opposite problems. Buy a cutter when disposal volume is your cost, and a grinder when stump removal in place is your scope. Contractors running high-volume clearing sometimes end up with both, on separate machines.",
      },
      {
        q: "Can it cut anything other than stumps?",
        a: "Yes. The WE series can also slice larger material, which is part of why it earns a place on clearing sites where the standing cost is the volume of material being carted rather than stumps specifically.",
      },
      {
        q: "What does it cost to run?",
        a: "The dominant cost is a periodic blade and jaw rebuild rather than a constant consumable spend. That makes the running cost more predictable than a grinder's tooth bill, but it arrives in larger, less frequent amounts. Ask for rebuild pricing and interval guidance before purchase.",
      },
    ],
  },
];

export function brandProfile(slug: string): BrandProfile | undefined {
  return BRAND_PROFILES.find((b) => b.slug === slug);
}
