/**
 * Image manifest. Every photograph is hosted locally in `public/images/` and
 * described by hand — alt text is written from what is actually visible in the
 * frame, not from the filename.
 */

export interface Photo {
  src: string;
  width: number;
  height: number;
  alt: string;
  /** Short visible caption. Omit for decorative placements. */
  caption?: string;
  /** True for cut-out studio shots, which need a light plate behind them. */
  cutout?: boolean;
}

export const PHOTOS = {
  treeShearBi500: {
    src: "/images/products/tree-shear-bi500.webp",
    width: 1200,
    height: 1102,
    alt: "OMEF BIG INCH BI500 tree shear in green, mounted on the stick of a John Deere 200D LC excavator in a contractor's yard",
    caption: "OMEF BIG INCH BI500 on a 20 tonne John Deere 200D LC",
  },
  stumpCutterWe: {
    src: "/images/products/stump-cutter-we.webp",
    width: 1600,
    height: 900,
    alt: "Trevi Benne WE 010 stump cutter closing its toothed jaw on an extracted stump, surrounded by split timber and root debris",
    caption: "Trevi Benne WE 010 sizing an extracted stump for processing",
  },
  stumpGrinderDipperfox: {
    src: "/images/products/stump-grinder-dipperfox.webp",
    width: 750,
    height: 499,
    alt: "Orange and blue Dipperfox SC600 stump grinder on a backhoe boom, standing over the pile of coarse wood chips it has just produced",
    caption: "Dipperfox SC600 and the chip it leaves — no spoil, no stump",
  },
  mulcherTe: {
    src: "/images/products/mulcher-te-excavator.webp",
    width: 1200,
    height: 1102,
    alt: "OMEF TE series forestry mulcher on an excavator, showing the fixed-tooth rotor, front pusher bar and hydraulic hose routing",
    caption: "OMEF TE series — fixed-tooth rotor and front pusher bar",
  },
  mowMower: {
    src: "/images/products/mulcher-brushcutter.webp",
    width: 1200,
    height: 1102,
    alt: "Excavator-mounted OMEF MOW mower cutting long grass on a sloped orchard bank beneath flowering fruit trees",
    caption: "OMEF MOW working a bank no tractor deck could reach",
  },
  grappleSawCutting: {
    src: "/images/products/grapple-saw-gs400-cutting.webp",
    width: 1200,
    height: 1102,
    alt: "OMEF GS400 grapple saw on a compact Kubota excavator, jaws open beside a standing trunk in autumn woodland with a cut log on the ground",
    caption: "OMEF GS400 working from the ground, nobody in the cut zone",
  },
  grappleSawGs400: {
    src: "/images/products/grapple-saw-gs400.webp",
    width: 1600,
    height: 1271,
    alt: "Studio view of the OMEF GS400 grapple saw showing the twin grapple arms, toothed clamping plates, saw housing and rotation motor",
    caption: "GS400",
    cutout: true,
  },
  grappleSawGs800: {
    src: "/images/products/grapple-saw-gs800.webp",
    width: 1600,
    height: 1446,
    alt: "Studio three-quarter view of the larger OMEF GS800 grapple saw, with heavier arms and a longer saw bar than the GS400",
    caption: "GS800",
    cutout: true,
  },
  grabPfimxLog: {
    src: "/images/products/grab-pfimx-log.webp",
    width: 1200,
    height: 1102,
    alt: "Green OMEF PFIMX log grapple closed around a freshly cut hardwood log, with more logs laid out on the ground behind it",
    caption: "OMEF PFIMX taking a full-diameter hardwood log",
  },
  grabPowerhandEx36: {
    src: "/images/products/grab-powerhand-ex36.webp",
    width: 1024,
    height: 576,
    alt: "Yellow Powerhand EX36-B forestry grapple closing its tines on a branch, with debris thrown into the air around the head",
    caption: "Powerhand EX36-B closing on brash",
  },
  prunerTgHedge: {
    src: "/images/products/pruner-tg-hedge.webp",
    width: 1200,
    height: 1102,
    alt: "OMEF TG series hydraulic hedge trimmer on an excavator arm, its disc head set vertically against a tall beech hedge",
    caption: "OMEF TG series trimming a beech hedge on a vertical face",
  },
  prunerCs: {
    src: "/images/products/pruner-cs.webp",
    width: 1200,
    height: 1102,
    alt: "OMEF CS series forestry pruner with its cutting bar engaged at the base of an oak, hydraulic motor and hoses visible at the mount",
    caption: "OMEF CS series taking a low limb at the trunk",
  },
  prunerCsCutting: {
    src: "/images/products/pruner-cs-cutting.webp",
    width: 1200,
    height: 1102,
    alt: "Close view of the OMEF CS forestry pruner's cutting bar part-way through a limb, showing the guard and chain path",
    caption: "The CS cutting bar mid-cut",
  },
  tillageCompactor: {
    src: "/images/products/tillage-cpt-compactor.webp",
    width: 1200,
    height: 1200,
    alt: "Green OMEF CPT series soil compactor on a red excavator, consolidating the fill on a benched mountain access track",
    caption: "OMEF CPT consolidating a benched access track",
  },
  tillageAuger: {
    src: "/images/products/tillage-trv-auger.webp",
    width: 1600,
    height: 900,
    alt: "Studio view of the OMEF TRV auger drill, showing the drive head, mounting frame and continuous flighting on the drill stem",
    caption: "OMEF TRV auger drill",
    cutout: true,
  },
} as const satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof PHOTOS;

/** Widens the literal type so optional fields like `cutout` stay readable. */
export function photo(key: PhotoKey): Photo {
  return PHOTOS[key];
}

export interface BrandAsset {
  slug: string;
  name: string;
  logo: string;
  logoWidth: number;
  logoHeight: number;
  /** Logos supplied on dark vs light artwork need different plate treatments. */
  invert?: boolean;
}

export const BRANDS: BrandAsset[] = [
  { slug: "omef", name: "OMEF", logo: "/images/brands/omef.png", logoWidth: 2560, logoHeight: 841 },
  { slug: "dipperfox", name: "Dipperfox", logo: "/images/brands/dipperfox.jpg", logoWidth: 200, logoHeight: 79 },
  { slug: "powerhand", name: "Powerhand", logo: "/images/brands/powerhand.png", logoWidth: 184, logoHeight: 55 },
  { slug: "trevi-benne", name: "Trevi Benne", logo: "/images/brands/trevi-benne.png", logoWidth: 279, logoHeight: 55 },
];

export function brand(slug: string): BrandAsset | undefined {
  return BRANDS.find((b) => b.slug === slug);
}
