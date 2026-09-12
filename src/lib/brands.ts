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
  },
];

export function brandProfile(slug: string): BrandProfile | undefined {
  return BRAND_PROFILES.find((b) => b.slug === slug);
}
