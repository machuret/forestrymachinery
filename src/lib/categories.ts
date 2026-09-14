import type { PhotoKey } from "./media";

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
  /** Lead photograph for the guide hero and category cards. */
  hero: PhotoKey;
  /** Further photographs shown in the guide body. */
  gallery: PhotoKey[];
  /** Editorial field scene used to show the category in an Australian operating context. */
  fieldImage: {
    src: string;
    width: number;
    height: number;
    alt: string;
    caption: string;
  };
  /** Brand slugs whose ranges this category covers. */
  brands: string[];
  /** The three things a buyer should leave the page knowing. */
  takeaways: string[];
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
    hero: "treeShearBi500",
    gallery: [],
    fieldImage: {
      src: "/images/field/tree-shear-field.webp",
      width: 1536,
      height: 1024,
      alt: "Tracked excavator using a hydraulic tree shear to hold a eucalyptus stem during a controlled cut",
      caption: "Controlled felling starts with the stem held before the cut finishes.",
    },
    brands: ["omef"],
    takeaways: [
      "A shear grips, cuts and keeps holding in one motion — a chainsaw drops a tree where gravity decides, a shear puts it where the operator wants it.",
      "Published maximum trunk widths are best-case figures. Derate them for dense, fibrous or buttressed Australian hardwood.",
      "It does not touch the stump. Stump removal is a grinder or cutter job, and they are different tools doing different work.",
    ],
  },
  {
    slug: "stump-cutter-guide",
    label: "Stump Cutters",
    shortLabel: "Cutters",
    productHref: "/stump-cutter/",
    job: "Split and size extracted stumps for processing",
    carrier: "11.5–28 t",
    code: "02",
    hero: "stumpCutterWe",
    gallery: [],
    fieldImage: {
      src: "/images/field/stump-cutter-field.webp",
      width: 1536,
      height: 1024,
      alt: "Excavator-mounted stump cutter splitting an extracted eucalyptus root ball in a timber processing yard",
      caption: "A stump cutter works after extraction, reducing transport and processing volume.",
    },
    brands: ["trevi-benne"],
    takeaways: [
      "A cutter works on stumps that are already out of the ground. It cannot remove one in place.",
      "Buy it when disposal volume is the cost you are fighting, not when stump removal is your scope.",
      "The carrier range is the narrowest in this guide at 11.5 to 28 tonnes, so carrier match matters more than usual.",
    ],
  },
  {
    slug: "stump-grinder-guide",
    label: "Stump Grinders",
    shortLabel: "Grinders",
    productHref: "/stump-grinder/",
    job: "Destroy stumps in place, in ground",
    carrier: "1.5–30 t",
    code: "03",
    hero: "stumpGrinderDipperfox",
    gallery: [],
    fieldImage: {
      src: "/images/field/stump-grinder-field.webp",
      width: 1536,
      height: 1024,
      alt: "Compact excavator operating a vertical hydraulic stump grinder with fresh chips surrounding the stump",
      caption: "Grinding destroys the stump in place and leaves chip instead of spoil.",
    },
    brands: ["dipperfox"],
    takeaways: [
      "Cost per stump, not purchase price, is the number that decides whether the attachment pays.",
      "Nothing is carted away: the stump is destroyed in place and what is left is chip, which is why it wins on urban and near-asset sites.",
      "It needs a hammer line plus case drain. Running the piston motor without drainage kills the seals.",
    ],
  },
  {
    slug: "forestry-mulcher-guide",
    label: "Forestry Mulchers",
    shortLabel: "Mulchers",
    productHref: "/forestry-mulchers/",
    job: "Reduce standing vegetation to mulch in one pass",
    carrier: "1–30 t",
    code: "04",
    hero: "mulcherTe",
    gallery: ["mowMower"],
    fieldImage: {
      src: "/images/field/forestry-mulcher-field.webp",
      width: 1536,
      height: 1024,
      alt: "Excavator-mounted forestry mulcher working at the boundary between dense regrowth and finished mulch",
      caption: "The commercial result is the treated ground behind the rotor, not the brochure capacity.",
    },
    brands: ["omef"],
    takeaways: [
      "Rotor choice is the decision, not the model number — fixed tooth or swinging hammer, open tip or closed tip.",
      "Mulching puts continuous load on a machine designed for intermittent load. Budget for cooling and tighter service intervals.",
      "Work is priced per hectare, so a productivity figure you have not measured yourself is margin you have not got.",
    ],
  },
  {
    slug: "grapple-saw-guide",
    label: "Grapple Saws",
    shortLabel: "Grapple saws",
    productHref: "/forestry-grapple-saw/",
    job: "Cut and hold simultaneously, from the ground",
    carrier: "3–30 t",
    code: "05",
    hero: "grappleSawCutting",
    gallery: ["grappleSawGs400", "grappleSawGs800"],
    fieldImage: {
      src: "/images/field/grapple-saw-field.webp",
      width: 1536,
      height: 1024,
      alt: "Compact excavator using a grapple saw to hold a eucalyptus limb throughout a controlled cut",
      caption: "The section stays controlled from first contact until it is placed on the ground.",
    },
    brands: ["omef", "powerhand"],
    takeaways: [
      "The category exists to take people out of the tree. That is the safety case and the commercial case at once.",
      "It typically needs a dual circuit: a saw line plus a separate grapple and rotation supply, valve-controlled.",
      "Flow is the constraint. The OMEF GS range spans 15 to 50 L/min on the smallest model up to 160 L/min on the largest.",
    ],
  },
  {
    slug: "log-grab-guide",
    label: "Log and Forestry Grabs",
    shortLabel: "Grabs",
    productHref: "/forestry-log-grabs-forestry-grabs/",
    job: "Move timber, brash and biomass",
    carrier: "13–25 t",
    code: "06",
    hero: "grabPfimxLog",
    gallery: ["grabPowerhandEx36"],
    fieldImage: {
      src: "/images/field/log-grab-field.webp",
      width: 1536,
      height: 1024,
      alt: "Tracked excavator using a rotating forestry grab to sort eucalyptus logs and brash into separate piles",
      caption: "Rotation turns cut material into an organised product stream without repositioning the carrier.",
    },
    brands: ["omef", "powerhand"],
    takeaways: [
      "It is the highest-utilisation attachment most contractors own, because almost every site has material to move.",
      "Tine count is the retention argument: five tines hold brash and biomass that four-tine grapples spill.",
      "Rotation is most of the productivity difference — it lets the operator align to a log without repositioning the machine.",
    ],
  },
  {
    slug: "mechanical-pruning-guide",
    label: "Mechanical Pruning",
    shortLabel: "Pruning",
    productHref: "/mechanical-pruning/",
    job: "Trim, shape and cut without gripping",
    carrier: "Excavator / telehandler",
    code: "07",
    hero: "prunerTgHedge",
    gallery: ["prunerCs", "prunerCsCutting"],
    fieldImage: {
      src: "/images/field/mechanical-pruning-field.webp",
      width: 1536,
      height: 1024,
      alt: "Compact excavator mechanically pruning eucalyptus regrowth along a regional Australian roadside",
      caption: "Corridor work rewards repeatable reach, cut quality and a controlled exclusion zone.",
    },
    brands: ["omef"],
    takeaways: [
      "This is the recurring-revenue category: utility and council vegetation programs are contracted, audited and renewed.",
      "Hydraulic demand varies by tool — the TRI bar runs a plain hammer line, the TG needs drainage, the CS needs two double-acting lines.",
      "Mechanised or not, the cut still has to comply with AS 4373 where the contract calls for it.",
    ],
  },
  {
    slug: "tillage-guide",
    label: "Tillage and Ground Preparation",
    shortLabel: "Tillage",
    productHref: "/tillage/",
    job: "Drill, compact and work soil after clearing",
    carrier: "2–20 t",
    code: "08",
    hero: "tillageCompactor",
    gallery: ["tillageAuger"],
    fieldImage: {
      src: "/images/field/tillage-field.webp",
      width: 1536,
      height: 1024,
      alt: "Excavator-mounted hydraulic auger drilling planting holes along a rehabilitated Australian farm contour",
      caption: "The attachment sequence can carry a clearing job through to productive ground.",
    },
    brands: ["omef"],
    takeaways: [
      "This is how you get paid for the second half of the job: the rehabilitation work after the clearing is done.",
      "An excavator-mounted compactor reaches trenches, batters and benched fill that a plate or roller cannot.",
      "Auger drills are built for continuous duty with replaceable wear parts, which is what makes high-volume repeat drilling viable.",
    ],
  },
];

export function categoryMeta(slug: string): CategoryMeta | undefined {
  return CATEGORY_META.find((c) => c.slug === slug);
}
