/**
 * Categories carry a bit of presentation metadata that does not belong in the
 * source markdown: the transactional product page each guide links down to
 * (per the implementation map), plus a short label and stat for card layouts.
 */
export interface CategoryMeta {
  slug: string;
  label: string;
  shortLabel: string;
  productHref: string;
  job: string;
  carrier: string;
  code: string;
}

export const CATEGORY_META: CategoryMeta[] = [
  {
    slug: "tree-shears-guide",
    label: "Tree Shears",
    shortLabel: "Shears",
    productHref: "/tree-shears/",
    job: "Fell and hold standing timber in one motion",
    carrier: "2–50 t",
    code: "01",
  },
  {
    slug: "stump-cutter-guide",
    label: "Stump Cutters",
    shortLabel: "Cutters",
    productHref: "/stump-cutter/",
    job: "Split and size extracted stumps for processing",
    carrier: "11.5–28 t",
    code: "02",
  },
  {
    slug: "stump-grinder-guide",
    label: "Stump Grinders",
    shortLabel: "Grinders",
    productHref: "/stump-grinder/",
    job: "Destroy stumps in place, in ground",
    carrier: "1.5–30 t",
    code: "03",
  },
  {
    slug: "forestry-mulcher-guide",
    label: "Forestry Mulchers",
    shortLabel: "Mulchers",
    productHref: "/forestry-mulchers/",
    job: "Reduce standing vegetation to mulch in one pass",
    carrier: "1–30 t",
    code: "04",
  },
  {
    slug: "grapple-saw-guide",
    label: "Grapple Saws",
    shortLabel: "Grapple saws",
    productHref: "/forestry-grapple-saw/",
    job: "Cut and hold simultaneously, from the ground",
    carrier: "3–30 t",
    code: "05",
  },
  {
    slug: "log-grab-guide",
    label: "Log and Forestry Grabs",
    shortLabel: "Grabs",
    productHref: "/forestry-log-grabs-forestry-grabs/",
    job: "Move timber, brash and biomass",
    carrier: "13–25 t",
    code: "06",
  },
  {
    slug: "mechanical-pruning-guide",
    label: "Mechanical Pruning",
    shortLabel: "Pruning",
    productHref: "/mechanical-pruning/",
    job: "Trim, shape and cut without gripping",
    carrier: "Excavator / telehandler",
    code: "07",
  },
  {
    slug: "tillage-guide",
    label: "Tillage and Ground Preparation",
    shortLabel: "Tillage",
    productHref: "/tillage/",
    job: "Drill, compact and work soil after clearing",
    carrier: "2–20 t",
    code: "08",
  },
];

export function categoryMeta(slug: string): CategoryMeta | undefined {
  return CATEGORY_META.find((c) => c.slug === slug);
}
