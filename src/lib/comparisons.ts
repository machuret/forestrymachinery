import type { PhotoKey } from "./media";

export interface Side {
  /** Guide slug this side maps to. */
  slug: string;
  name: string;
  photo: PhotoKey;
  /** One-line positioning. */
  role: string;
  chooseWhen: string[];
}

export interface CompareRow {
  criterion: string;
  a: string;
  b: string;
  /** Which side this criterion favours, for the visual emphasis. */
  favours?: "a" | "b" | "both";
}

export interface Comparison {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  question: string;
  /** The answer, stated before any table. */
  verdict: string;
  a: Side;
  b: Side;
  rows: CompareRow[];
  bothWhen: string;
  faqs: Array<{ q: string; a: string }>;
}

export const COMPARISONS: Comparison[] = [
  {
    slug: "stump-grinder-vs-stump-cutter",
    title: "Stump Grinder or Stump Cutter?",
    metaTitle: "Stump Grinder vs Stump Cutter | Which One Your Job Needs",
    metaDescription:
      "Grinder or cutter? One destroys the stump in place and leaves chip. The other splits a stump you have already pulled. The most common category error in the Australian market, resolved.",
    question: "Which one do I actually need?",
    verdict:
      "They solve opposite problems. Buy a grinder when the stump has to disappear in place and you cannot leave spoil. Buy a cutter when you are already extracting stumps and the cost you are fighting is transport and processing volume. Most buyers who ask this question want a grinder.",
    a: {
      slug: "stump-grinder-guide",
      name: "Stump grinder",
      photo: "stumpGrinderDipperfox",
      role: "Destroys the stump and root plate below grade, in the ground",
      chooseWhen: [
        "The stump must be gone and the ground reinstated",
        "You are working urban sites where spoil cannot be left or carted",
        "Stump counts are high and you are pricing per stump",
        "Carrier is between 1.5 and 30 tonnes",
      ],
    },
    b: {
      slug: "stump-cutter-guide",
      name: "Stump cutter",
      photo: "stumpCutterWe",
      role: "Splits and sizes a stump that has already been extracted",
      chooseWhen: [
        "Stumps are being pulled anyway as part of clearing",
        "Disposal volume, not removal, is the cost you are fighting",
        "Material is going to biomass or chip and needs sizing first",
        "Carrier is between 11.5 and 28 tonnes",
      ],
    },
    rows: [
      { criterion: "Where it works", a: "In the ground, on the stump in place", b: "On the surface, after extraction" },
      { criterion: "What it leaves", a: "Coarse chip, no spoil heap, no stump to move", favours: "a", b: "Split stump sections plus the original excavation spoil" },
      { criterion: "Carrier range", a: "1.5–30 t", favours: "a", b: "11.5–28 t" },
      { criterion: "Circuit", a: "Hammer line plus case drain", b: "Hammer line plus case drain" , favours: "both" },
      { criterion: "Urban and near-asset work", a: "Strong — nothing to cart away", favours: "a", b: "Weak — you still have to extract first" },
      { criterion: "Biomass and chip supply", a: "Produces chip directly, but fines and soil contamination", b: "Produces clean, sized material for processing", favours: "b" },
      { criterion: "Dominant running cost", a: "Teeth and tips, heavily ground-condition dependent", b: "Blade and jaw rebuild, periodic rather than constant" },
      { criterion: "The metric that matters", a: "Cost per stump", b: "Cost per tonne processed" },
    ],
    bothWhen:
      "Land clearing contractors running volume often end up with both: the grinder for finished sites and anything near assets, the cutter sitting on the second machine at the stockpile, sizing what the excavator pulls.",
    faqs: [
      {
        q: "Can a stump cutter remove a stump from the ground?",
        a: "No. A cutter works on a stump that is already out. Removal in place requires a grinder, or an excavator and a lot of digging.",
      },
      {
        q: "Do I need both if I already have a grinder?",
        a: "Usually not. Buy a cutter when disposal volume is your cost, and a grinder when stump removal in place is your scope.",
      },
      {
        q: "Which is cheaper to run?",
        a: "It depends entirely on ground. Grinder teeth in stony or sandy soil are a monthly line item; cutter blades are a periodic rebuild. Compare on cost per stump and cost per tonne rather than on purchase price.",
      },
    ],
  },
  {
    slug: "tree-shear-vs-forestry-mulcher",
    title: "Tree Shear or Forestry Mulcher?",
    metaTitle: "Tree Shear vs Forestry Mulcher | Stem Work or Area Work",
    metaDescription:
      "Shear if the timber has value or has to be placed somewhere specific. Mulcher if the material is waste and you are clearing by area. How to tell which one your work actually is.",
    question: "Am I clearing by stem or by area?",
    verdict:
      "Shear if the timber has value or has to be placed somewhere specific. Mulcher if the material is waste and you are clearing by area rather than by stem. That single distinction settles most of these conversations, and many contractors eventually own both.",
    a: {
      slug: "tree-shears-guide",
      name: "Tree shear",
      photo: "treeShearBi500",
      role: "Grips, cuts and keeps holding the stem in one motion",
      chooseWhen: [
        "Timber has value and must be stacked, loaded or sold",
        "Stems must be placed precisely — near buildings, roads or services",
        "You are thinning to a spec rather than clearing everything",
        "You are quoting per stem, not per hectare",
      ],
    },
    b: {
      slug: "forestry-mulcher-guide",
      name: "Forestry mulcher",
      photo: "mulcherTe",
      role: "Reduces standing vegetation to mulch in a single pass",
      chooseWhen: [
        "Material is waste and can stay on site as mulch",
        "You are pricing per hectare, as fuel reduction and roadside work is",
        "Stem density is high and stem diameter is moderate",
        "Nobody needs the timber and nothing needs carting",
      ],
    },
    rows: [
      { criterion: "Unit of work", a: "The stem", b: "The hectare" },
      { criterion: "Output", a: "Whole stems, placed where the operator wants", favours: "a", b: "Mulch, left in place" },
      { criterion: "Handles valuable timber", a: "Yes — that is the point", favours: "a", b: "No, it destroys it" },
      { criterion: "Second pass needed", a: "Yes — stems still have to be processed and moved", b: "No — one pass finishes it", favours: "b" },
      { criterion: "Carrier range", a: "2–50 t", favours: "a", b: "1–30 t" },
      { criterion: "Circuit", a: "Double-acting", b: "Single-acting hammer line" },
      { criterion: "Load on the carrier", a: "Intermittent, like normal excavator work", favours: "a", b: "Continuous — pumps, coolers and final drives feel it" },
      { criterion: "Dominant running cost", a: "Periodic blade rebuild", favours: "a", b: "Teeth, budgeted monthly in abrasive or stony ground" },
    ],
    bothWhen:
      "On mixed sites the shear takes the merchantable stems and anything that has to be placed, then the mulcher makes one pass over what is left. Owning both is common precisely because they are not substitutes.",
    faqs: [
      {
        q: "Can a mulcher handle standing trees?",
        a: "Up to its rated diameter, yes — it takes them standing and reduces them in place. Beyond that you are felling first, which is shear or saw work.",
      },
      {
        q: "Does a tree shear remove the stump?",
        a: "No. It leaves a cut stump in the ground. Stump removal is a grinder or cutter job, which are different tools doing a different job.",
      },
      {
        q: "Which is better for bushfire fuel reduction?",
        a: "Mulcher, almost always. Hazard-reduction programs are measured in treated hectares, and area targets favour a tool that finishes in one pass.",
      },
    ],
  },
  {
    slug: "grapple-saw-vs-tree-shear",
    title: "Grapple Saw or Tree Shear?",
    metaTitle: "Grapple Saw vs Tree Shear | Control or Throughput",
    metaDescription:
      "Shear for volume felling in open ground where speed is the goal. Grapple saw where control matters more than throughput, particularly near buildings, roads and services.",
    question: "Do I need speed, or do I need control?",
    verdict:
      "Shear for volume felling in open ground where speed is the goal. Grapple saw where control matters more than throughput, particularly near buildings, roads and services. Both take people out of the fall zone; only one of them cuts cleanly enough for sawlog.",
    a: {
      slug: "grapple-saw-guide",
      name: "Grapple saw",
      photo: "grappleSawCutting",
      role: "Holds and saws simultaneously, operated from the ground",
      chooseWhen: [
        "Work is near buildings, roads, powerlines or services",
        "Sections have to be lowered rather than dropped",
        "Cut quality matters because the timber is being sold",
        "You want climbers out of the tree entirely",
      ],
    },
    b: {
      slug: "tree-shears-guide",
      name: "Tree shear",
      photo: "treeShearBi500",
      role: "Shears the stem in a single blade stroke and keeps holding it",
      chooseWhen: [
        "Open ground and volume felling, where cycle time is the metric",
        "Thinning shrubs and small stems at pace",
        "Timber is going to chip or waste, so a crushed cut does not matter",
        "You need the widest possible carrier range, up to 50 tonnes",
      ],
    },
    rows: [
      { criterion: "Cut quality", a: "Clean saw cut, suitable for sawlog", favours: "a", b: "Crushed and split at the cut face" },
      { criterion: "Cycle time", a: "Slower — saw has to complete the cut", b: "Faster — one blade stroke", favours: "b" },
      { criterion: "Placement control", a: "Full — hold, rotate, lower", favours: "a", b: "Good, but coarser" },
      { criterion: "Circuit", a: "Dual circuit: saw line plus grapple and rotation", b: "Double-acting", favours: "b" },
      { criterion: "Carrier range", a: "3–30 t", b: "2–50 t", favours: "b" },
      { criterion: "Consumables", a: "Chains and bars, a weekly conversation", b: "Blades, a periodic rebuild", favours: "b" },
      { criterion: "Work near assets", a: "Strong — the reason the category exists", favours: "a", b: "Workable, but less controlled" },
      { criterion: "Rotation", a: "360°, standard across both ranges", b: "Model dependent" },
    ],
    bothWhen:
      "Urban and utility contractors tend to run a grapple saw as the primary tool and a shear on the second machine for the open sections of a corridor, where nothing is at risk and throughput is all that counts.",
    faqs: [
      {
        q: "Does a grapple saw need two hydraulic circuits?",
        a: "Typically yes — a saw line plus a separate grapple and rotation supply, valve-controlled. Check this before you buy, because it is the most common reason a grapple saw purchase fails on delivery.",
      },
      {
        q: "Is a grapple saw safer than a climber?",
        a: "It removes the need for anyone to be in the tree, which is the hazard it exists to eliminate. Operator protection on the carrier still matters — ISO 8084 covers the guarding that stops objects entering the cabin.",
      },
      {
        q: "Which suits a smaller excavator?",
        a: "The shear range starts at 2 tonnes and the grapple saw range at 3, but flow is the real constraint. A basic breaker circuit on a small machine will not run a large grapple saw regardless of weight.",
      },
    ],
  },
  {
    slug: "grapple-saw-vs-forestry-grab",
    title: "Grapple Saw or Forestry Grab?",
    metaTitle: "Grapple Saw vs Forestry Grab | Do You Need the Saw?",
    metaDescription:
      "A grab moves material. A grapple saw cuts it first. Which one earns its keep on your site, what each costs to run, and why the saw is not always worth the second circuit.",
    question: "Do I need the saw, or just the grip?",
    verdict:
      "If your work is feeding a chipper, building log decks and cleaning up after someone else has cut, buy the grab — it is the highest-utilisation attachment most contractors own. Add the saw only when you are regularly cutting material that is still standing or still attached.",
    a: {
      slug: "grapple-saw-guide",
      name: "Grapple saw",
      photo: "grappleSawCutting",
      role: "Cuts and holds in one tool, from the ground",
      chooseWhen: [
        "You are removing standing or attached material yourself",
        "Sections must be cut and lowered in a controlled sequence",
        "You want a single machine to fell, section and stack",
        "The carrier already has, or can be fitted with, a dual circuit",
      ],
    },
    b: {
      slug: "log-grab-guide",
      name: "Log or forestry grab",
      photo: "grabPfimxLog",
      role: "Moves timber, brash and biomass — nothing else",
      chooseWhen: [
        "Someone else has already done the cutting",
        "The job is chipper feeding, log decks and site clean-up",
        "You want the highest running hours per dollar of any attachment",
        "Simplicity and uptime matter more than versatility",
      ],
    },
    rows: [
      { criterion: "Can it cut?", a: "Yes", favours: "a", b: "No — handling only" },
      { criterion: "Circuit", a: "Dual circuit, saw plus grapple and rotation", b: "Double-acting plus rotation", favours: "b" },
      { criterion: "Purchase cost", a: "Higher — you are buying a saw unit too", b: "Lower", favours: "b" },
      { criterion: "Consumables", a: "Chains and bars on top of normal wear", b: "Tines and rotator service only", favours: "b" },
      { criterion: "Typical utilisation", a: "Job-specific", b: "Very high — it is useful on almost every site", favours: "b" },
      { criterion: "Retention on brash", a: "Moderate — arms are shaped around the saw", b: "Strong — more tines, better grip on irregular material", favours: "b" },
      { criterion: "Carrier range", a: "3–30 t", favours: "a", b: "13–25 t typical" },
      { criterion: "Downtime risk", a: "More systems, more to go wrong", b: "Fewer moving parts", favours: "b" },
    ],
    bothWhen:
      "Arborists scaling up usually buy the grab first because it works every day, then add the grapple saw once removals become a bigger share of the book than clean-ups.",
    faqs: [
      {
        q: "Can I fit a saw to a grab I already own?",
        a: "Not as a retrofit. The saw unit, its guarding and the second circuit are designed into the head, which is why grapple saws are a separate category rather than an option box.",
      },
      {
        q: "How many tines should a forestry grapple have?",
        a: "More tines give better retention on irregular and bulky material. Five solid Hardox tines suit brash and biomass work, where four-tine grapples tend to spill material.",
      },
      {
        q: "Does a grab need a rotator?",
        a: "For forestry work, effectively yes. Continuous 360° rotation is what lets an operator align to a log without repositioning the machine, and it is most of the productivity difference.",
      },
    ],
  },
];

export function comparison(slug: string): Comparison | undefined {
  return COMPARISONS.find((c) => c.slug === slug);
}
