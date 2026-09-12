import type { PhotoKey } from "./media";

/**
 * Editorial content for each carrier class. The fit lists are derived from the
 * published operating machine ranges quoted in the category guides; the
 * commentary is what those ranges mean in practice for a buyer with that size
 * of machine.
 */
export interface CarrierBand {
  id: string;
  label: string;
  range: string;
  name: string;
  /** Category slugs that sit comfortably in this band. */
  core: string[];
  /** Category slugs at the edge of their published range here. */
  edge: string[];
  /** Category slugs outside their published range here. */
  out: string[];
  /** What a machine this size is typically doing. */
  typicalWork: string;
  /** The real constraint at this size, beyond weight. */
  constraint: string;
  /** Editorial commentary, two or three sentences. */
  commentary: string;
  photo?: PhotoKey;
}

export const CARRIER_BANDS: CarrierBand[] = [
  {
    id: "micro",
    label: "1.5–3 t",
    range: "1.5 to 3 tonnes",
    name: "Micro and small mini excavators",
    core: ["stump-grinder-guide", "forestry-mulcher-guide"],
    edge: ["tree-shears-guide", "mechanical-pruning-guide", "tillage-guide"],
    out: ["grapple-saw-guide", "stump-cutter-guide", "log-grab-guide"],
    typicalWork: "Domestic and light commercial work, tight access, backyard and laneway sites",
    constraint: "Auxiliary flow, not weight. Many machines this size leave the factory with a basic breaker circuit and nothing else.",
    commentary:
      "This is the band where buyers most often get caught. The published ranges suggest a surprising amount is available — stump grinders start at 1.5 tonnes and mulchers from around 1 — but the smallest models in those ranges assume a circuit the machine may not have. Check the machine plate for auxiliary flow before you check any catalogue, and confirm whether a case drain line is fitted, because the grinding and mulching motors that suit this class usually need one.",
  },
  {
    id: "mini",
    label: "3–6 t",
    range: "3 to 6 tonnes",
    name: "Mini excavators",
    core: ["stump-grinder-guide", "forestry-mulcher-guide", "grapple-saw-guide", "tree-shears-guide", "mechanical-pruning-guide", "tillage-guide"],
    edge: [],
    out: ["stump-cutter-guide", "log-grab-guide"],
    typicalWork: "Arborist removals, residential clearing, council parks and reserve maintenance, orchard and vineyard work",
    constraint: "Lift capacity at working radius. The machine will carry the attachment; the question is whether it will hold the load at reach.",
    commentary:
      "The most versatile band in the range relative to machine size, and the sweet spot for arborists scaling past hand crews. Six of the eight categories open up here, including grapple saws, which start at 3 tonnes. The catch is reach: a 5 tonne machine that comfortably holds a grapple saw against the tracks may be well outside its lift chart with the same load at full extension. Read the lift chart, not the attachment weight.",
  },
  {
    id: "midi",
    label: "6–13 t",
    range: "6 to 13 tonnes",
    name: "Midi excavators",
    core: ["tree-shears-guide", "stump-grinder-guide", "forestry-mulcher-guide", "grapple-saw-guide", "mechanical-pruning-guide", "tillage-guide"],
    edge: ["stump-cutter-guide", "log-grab-guide"],
    out: [],
    typicalWork: "Civil site clearing, roadside vegetation management, utility corridor work, larger arborist removals",
    constraint: "Circuit configuration. At this size the machine can carry anything in the range, so the limit becomes which circuits are plumbed.",
    commentary:
      "Every category is at least reachable from this band, and most sit comfortably in it. This is where the decision stops being about the machine and starts being about the work: a 10 tonne excavator will run a mulcher, a shear, a grapple saw or a pruning head, and the right answer is whichever matches the jobs you are quoting. If you are specifying a machine and know forestry work is coming, this is the size to plumb properly from new.",
  },
  {
    id: "standard",
    label: "13–20 t",
    range: "13 to 20 tonnes",
    name: "Standard excavators",
    core: ["tree-shears-guide", "stump-cutter-guide", "stump-grinder-guide", "forestry-mulcher-guide", "grapple-saw-guide", "log-grab-guide", "mechanical-pruning-guide", "tillage-guide"],
    edge: [],
    out: [],
    typicalWork: "Production clearing, land development, plantation and harvest support, log decks, large vegetation contracts",
    constraint: "Nothing structural. At this size the constraint is commercial — which tools you can keep busy enough to justify.",
    commentary:
      "The only band where all eight categories sit in their core range simultaneously. Log and forestry grabs open up here, and they are the highest-utilisation attachment most contractors own because almost every site has material to move. The question at this size is no longer what the machine can run but which two or three attachments earn their keep, and that is a utilisation question rather than a specification one.",
  },
  {
    id: "large",
    label: "20–30 t",
    range: "20 to 30 tonnes",
    name: "Large excavators",
    core: ["tree-shears-guide", "stump-cutter-guide", "stump-grinder-guide", "forestry-mulcher-guide", "grapple-saw-guide", "log-grab-guide"],
    edge: ["mechanical-pruning-guide"],
    out: ["tillage-guide"],
    typicalWork: "Broadacre clearing, forestry operations, major civil and infrastructure corridors, quarry and mine rehabilitation",
    constraint: "Attachment structure. At the top of this band you are approaching the upper limit of several published ranges.",
    commentary:
      "Production work, and the band where oversizing starts to be the risk rather than undersizing. Several categories top out around 30 tonnes: stump grinders, mulchers and grapple saws all reach their published ceiling here, and running one on a machine above its range overloads the attachment structure until something cracks. Pruning heads and tillage tools are mostly out at this size — not because the machine cannot carry them, but because the work does not suit a machine this heavy.",
  },
  {
    id: "heavy",
    label: "30–50 t",
    range: "30 to 50 tonnes",
    name: "Heavy excavators",
    core: ["tree-shears-guide"],
    edge: [],
    out: ["stump-cutter-guide", "stump-grinder-guide", "forestry-mulcher-guide", "grapple-saw-guide", "log-grab-guide", "mechanical-pruning-guide", "tillage-guide"],
    typicalWork: "Large-scale land clearing, mine site rehabilitation, major infrastructure projects",
    constraint: "Almost everything is below its published range. Tree shears are the exception, reaching 50 tonnes.",
    commentary:
      "A narrow band for forestry attachments. Tree shears are the only category in this guide with a published range reaching 50 tonnes, which reflects how shears are used: high-volume felling in open ground where the machine's reach and stability matter more than finesse. For anything else at this size the practical answer is usually a second, smaller carrier rather than a larger attachment.",
  },
];

export function band(id: string): CarrierBand | undefined {
  return CARRIER_BANDS.find((b) => b.id === id);
}
