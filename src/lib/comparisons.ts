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
  /** How the two compare on money, which the feature table cannot show. */
  costs: Array<{ driver: string; a: string; b: string }>;
  /** Three buyer situations with a stated answer. */
  scenarios: Array<{ label: string; situation: string; answer: string }>;
  /** Ways buyers get this specific choice wrong. */
  mistakes: Array<{ flag: string; why: string }>;
  checklist: string[];
  faqs: Array<{ q: string; a: string }>;
}

export const COMPARISONS: Comparison[] = [
  {
    slug: "stump-grinder-vs-stump-cutter",
    title: "Stump Grinder or Stump Cutter?",
    metaTitle: "Stump Grinder vs Stump Cutter | Which One Your Job Needs",
    metaDescription:
      "Grinder or cutter? One destroys the stump in place, the other splits a stump you have already pulled. The most common category error, resolved.",
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
    costs: [
      { driver: "Dominant wear item", a: "Teeth and tips, a monthly budget line in abrasive or stony ground", b: "Blade and jaw rebuild, periodic rather than constant" },
      { driver: "What accelerates wear", a: "Sandy or stony soil, buried metal, urban fill", b: "Oversize material and embedded stone" },
      { driver: "Carrier load", a: "Continuous — pumps, coolers and final drives feel it", b: "Intermittent, closer to normal excavator duty" },
      { driver: "Disposal cost", a: "None. The stump is destroyed in place and what is left is chip", b: "Real. You are still carting the extracted stump, just in smaller pieces" },
      { driver: "The metric to price on", a: "Cost per stump", b: "Cost per tonne processed" },
    ],
    scenarios: [
      {
        label: "Urban arborist",
        situation: "Residential removals, 300 to 600 stumps a year, sites where nothing can be left behind and access is tight.",
        answer: "Grinder, without hesitation. The commercial argument is that nothing is carted away, which on urban sites is most of the job cost. Work the numbers on cost per stump rather than purchase price, because at this volume the teeth bill decides the outcome.",
      },
      {
        label: "Land clearing contractor",
        situation: "Broadacre clearing packages where stumps are being pulled with the excavator anyway and the spoil heap is the problem.",
        answer: "Cutter, and the metric is cost per tonne processed. You are not trying to remove stumps — they are already out. You are trying to reduce the volume you cart or chip, and a cutter does that on the surface without the wear rates grinding incurs.",
      },
      {
        label: "Mixed civil and vegetation contractor",
        situation: "Both kinds of work, roughly evenly split, with two machines available.",
        answer: "Both, eventually, and the grinder first. Grinding is the harder capability to subcontract at short notice, and it is the one that wins urban and near-asset work. Add the cutter when the volume of extracted stumps becomes a standing cost rather than an occasional one.",
      },
    ],
    mistakes: [
      { flag: "Buying a cutter expecting it to remove stumps", why: "It cannot. A cutter works on stumps that are already out of the ground. This is the single most common category error in the Australian market." },
      { flag: "Pricing a grinder on purchase price", why: "At volume, teeth cost and teeth life dominate. A cheaper grinder with shorter tooth life is the more expensive machine." },
      { flag: "Ignoring the case drain on either tool", why: "Both run piston motors that generally need drainage back to tank. Skipping it kills motor seals, often inside a season, and it is rarely a warranty claim." },
      { flag: "Forgetting buried metal in urban fill", why: "Old fencing, reo and services destroy teeth and can void warranty. Ask what happens to the warranty when you hit metal before you buy." },
    ],
    checklist: [
      "Whether the stump must disappear in place or is being extracted",
      "Annual stump count, from last year's records",
      "Soil type, and whether it is abrasive",
      "Whether spoil can be left on site",
      "Tooth or blade cost and expected life in your ground",
      "Wear-part lead time in Australia",
      "Carrier auxiliary flow and whether a case drain is fitted",
      "What the warranty says about buried metal",
    ],
    faqs: [
      {
        q: "Does a stump grinder leave anything to clean up?",
        a: "Coarse chip, and that is the commercial argument for the category. There is no spoil heap and no stump to cart, which on urban and near-asset sites is most of the job cost. The chip does carry soil and fines, so it is not a clean biomass feedstock — that is what the cutter produces.",
      },
      {
        q: "What size excavator do I need for each?",
        a: "Stump grinders span roughly 1.5 to 30 tonnes across their range, so almost any carrier has an option. Stump cutters are far narrower at 11.5 to 28 tonnes, which is the tightest carrier range of any category in this guide. If you have a mini excavator, the cutter is simply not available to you.",
      },
      {
        q: "Which is safer to operate near services?",
        a: "Neither is inherently safe near buried services, and grinding is the one that finds them. Always confirm service locations before grinding, because buried metal destroys teeth and can void warranty, and striking live services is a serious incident rather than a maintenance one.",
      },
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
      "Shear if the timber has value or must be placed. Mulcher if it is waste and you clear by area. How to tell which one your work actually is.",
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
    costs: [
      { driver: "Dominant wear item", a: "Blade rebuild, periodic", b: "Teeth and tips, a monthly budget line in abrasive ground" },
      { driver: "Carrier load", a: "Intermittent, like normal excavator work", b: "Continuous — budget for improved cooling and tighter service intervals" },
      { driver: "Second pass", a: "Required. Stems still have to be processed and moved, and that labour is real", b: "None. One pass finishes the job" },
      { driver: "Revenue from the material", a: "Possible where the timber has value", b: "None. The material becomes mulch on site" },
      { driver: "The metric to price on", a: "Cost per stem, or per hour", b: "Cost per hectare" },
    ],
    scenarios: [
      {
        label: "Council fuel reduction contract",
        situation: "Treated-hectare targets, mixed regrowth, material can stay on site, priced per hectare.",
        answer: "Mulcher. Hazard-reduction programs are measured in treated hectares rather than stems, and area targets favour a tool that finishes in one pass. Measure your own hectares per hour on your own material before you commit to a rate.",
      },
      {
        label: "Plantation thinning",
        situation: "Thinning to a spec, stems have value, material is going to a landing for extraction.",
        answer: "Shear. The timber has value and has to be placed somewhere specific, which is exactly what a shear does and a mulcher destroys. The shear also keeps operators out of the fall zone at volume.",
      },
      {
        label: "Roadside vegetation contractor",
        situation: "Corridor maintenance with a mix of open sections and stems near assets, recurring annual programme.",
        answer: "Both, on two machines, if the programme is large enough. The shear takes the stems that must be placed and anything near assets; the mulcher makes one pass over what is left. Many contractors in this work eventually own both precisely because they are not substitutes.",
      },
    ],
    mistakes: [
      { flag: "Costing mulching at your excavation hourly rate", why: "Mulching is continuous load. Fuel burn, cooling demand and service intervals all move, and costing it as a dig hour understates it every time." },
      { flag: "Pricing from brochure hectares per hour", why: "Published productivity assumes light material, flat ground and no interruptions. Halving that figure doubles your cost base, and the difference shows up on site." },
      { flag: "Buying a shear and forgetting the stump", why: "A shear leaves a cut stump in the ground. If the scope includes stump removal, that is a separate tool and a separate line in the quote." },
      { flag: "Choosing on rated diameter", why: "Published maximums are best case in favourable timber. Derate for dense, fibrous or buttressed Australian hardwood before you match a model to your work." },
    ],
    checklist: [
      "Whether the material has value or is waste",
      "Whether you are pricing per stem or per hectare",
      "Routine stem diameter, not maximum",
      "Stem density per hectare",
      "Whether material can be left on site",
      "Your carrier's cooling capacity if mulching",
      "Measured hectares per hour on your own material",
      "Tooth or blade cost and life in your conditions",
    ],
    faqs: [
      {
        q: "Can a mulcher deal with stumps?",
        a: "Not properly. Some operators work a mulcher down onto a stump, but the tool is designed to reduce standing vegetation, not to work in ground. Doing it wears teeth at an extraordinary rate and loads the carrier badly. Stump removal is a grinder or cutter job.",
      },
      {
        q: "Which is better on steep or uneven ground?",
        a: "Shear, generally, because the work is stem by stem and the machine can be positioned for each one. A mulcher needs to travel across the area it is treating, and on steep or broken ground the productivity assumption behind a per-hectare rate falls apart quickly.",
      },
      {
        q: "Does mulch left on site cause problems?",
        a: "It depends on the depth and the receiving environment. A thin, even layer is generally acceptable and is part of why mulching wins area-based work. Deep windrows can suppress regeneration and, in some fuel-reduction contexts, defeat the purpose of the treatment. Check what the contract specifies.",
      },
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
      "Shear for volume felling in open ground. Grapple saw where control beats throughput, near buildings, roads and services. Costs and scenarios compared.",
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
    costs: [
      { driver: "Dominant wear item", a: "Chains and bars, a weekly conversation", b: "Blade rebuild, periodic" },
      { driver: "Circuit cost on the carrier", a: "Higher. A dual circuit with solenoid control is a real workshop job", b: "Lower. Double-acting is commonly already fitted" },
      { driver: "Cycle time", a: "Slower. The saw has to complete the cut", b: "Faster. One blade stroke" },
      { driver: "Value of the output", a: "Higher where timber is sold. A clean saw cut is suitable for sawlog", b: "Lower. The cut face is crushed and split" },
      { driver: "Cost of a mistake near assets", a: "Low. Control is the reason the category exists", b: "Higher. Placement is good but coarser" },
    ],
    scenarios: [
      {
        label: "Urban tree removal",
        situation: "Removals near buildings, roads and services, sections must be lowered rather than dropped.",
        answer: "Grapple saw. This is the work the category exists for, and the safety case and the commercial case point the same way: nobody in the tree, and full control of where each section goes. Confirm your carrier can take a dual circuit before you shortlist models.",
      },
      {
        label: "Open-ground volume felling",
        situation: "Clearing a corridor in open ground, timber going to chip, cycle time is the metric.",
        answer: "Shear. Nothing is at risk, the crushed cut face does not matter because the material is waste, and one blade stroke beats a completed saw cut on throughput. The shear range also reaches further up the carrier scale if you are working with a large machine.",
      },
      {
        label: "Utility vegetation contractor",
        situation: "Multi-year clearance panel, mixed corridor with populated and open sections.",
        answer: "Grapple saw as the primary tool, shear on the second machine. The saw handles everything near conductors and structures; the shear takes the open runs where throughput is all that counts. This split is common in utility work for good reason.",
      },
    ],
    mistakes: [
      { flag: "Buying a grapple saw without confirming the second circuit", why: "This is the most common reason a grapple saw purchase fails on delivery. The tool typically needs a saw line plus a separate grapple and rotation supply, valve-controlled." },
      { flag: "Assuming machine weight is enough", why: "The shear range starts at 2 tonnes and the grapple saw range at 3, but flow is the real constraint. A basic breaker circuit on a small machine will not run a large grapple saw regardless of weight." },
      { flag: "Underestimating chain and bar consumption", why: "On a grapple saw this is a weekly conversation, not an annual order. Get pricing and lead time in writing before you sign." },
      { flag: "Treating a shear as a safety tool near assets", why: "Both keep people out of the fall zone, but only the grapple saw gives you controlled lowering. Near buildings and services that difference is the whole job." },
    ],
    checklist: [
      "Whether the work is near assets or in open ground",
      "Whether sections must be lowered or can be dropped",
      "Whether the timber is being sold",
      "Carrier auxiliary flow and available circuits",
      "Cost of adding a dual circuit if you do not have one",
      "Which rotator is specified and what it costs to replace",
      "Chain, bar and blade pricing and lead time",
      "Operator experience with the tool you are buying",
    ],
    faqs: [
      {
        q: "Which is faster overall on a removal?",
        a: "Shear on the cut, grapple saw on the job. A shear completes each cut faster, but on a removal near assets the cut is a small part of the work. The grapple saw holds, lowers and places each section without a second machine or a ground crew in the zone, and that is usually where the time goes.",
      },
      {
        q: "What chain pitch do forestry grapple saws use?",
        a: "Typically 0.404 inch or 3/4 inch. Pitch determines which chain and bar will fit, so confirm it before you buy consumables, and be wary of any specification quoting a pitch that is not a standard size.",
      },
      {
        q: "Can either attachment be used for processing on the ground?",
        a: "A grapple saw can, and it is one of the reasons the category earns its keep — the same tool that takes the tree down can section it at the landing. A shear can cut material on the ground but the crushed cut face limits what you can do with the timber afterwards.",
      },
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
      "A grab moves material, a grapple saw cuts it first. Which earns its keep on your sites, what each costs to run, and when the saw is not worth it.",
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
    costs: [
      { driver: "Purchase", a: "Higher. You are buying a saw unit, its guarding and its circuit", b: "Lower. Fewer systems, simpler head" },
      { driver: "Consumables", a: "Chains and bars on top of normal wear", b: "Tine wear and rotator service only" },
      { driver: "Circuit cost on the carrier", a: "Dual circuit — a real workshop job if you do not have one", b: "Double-acting plus rotation, commonly already fitted" },
      { driver: "Utilisation", a: "Job-specific. It earns when there are removals to do", b: "Very high. Almost every site has material to move" },
      { driver: "Downtime exposure", a: "More systems, more to go wrong", b: "Fewer moving parts, higher availability" },
    ],
    scenarios: [
      {
        label: "Arborist scaling up",
        situation: "Growing past two-man crews, work is currently a mix of removals and clean-ups.",
        answer: "Grab first. It works on almost every site, so it starts earning immediately, and it is the highest-utilisation attachment most contractors own. Add the grapple saw once removals become a bigger share of the book than clean-ups.",
      },
      {
        label: "Chipper-fed green waste operation",
        situation: "Feeding a chipper, building log decks, cleaning up after other crews have cut.",
        answer: "Grab, and the saw would be dead weight. Someone else has done the cutting. What you need is retention on irregular material, which is a tine-count argument: five tines hold brash that four-tine grapples spill.",
      },
      {
        label: "Storm response and emergency works",
        situation: "Reactive call-outs, mixed standing and fallen material, often near infrastructure.",
        answer: "Grapple saw. In storm work the material is frequently still attached or still standing, and a grab cannot cut. The ability to arrive with one tool that cuts, holds and lowers is worth the extra circuit and the extra consumables.",
      },
    ],
    mistakes: [
      { flag: "Planning to retrofit a saw to a grab later", why: "Not possible as a retrofit. The saw unit, its guarding and the second circuit are designed into the head, which is why these are separate categories rather than an option box." },
      { flag: "Buying four tines to save money", why: "More tines give better retention on irregular and bulky material. Four-tine grapples spill brash and biomass, and the lost cycles cost more than the tines saved." },
      { flag: "Skipping the rotator on a grab", why: "For forestry work continuous 360 degree rotation is most of the productivity difference. Without it the operator repositions the machine for every log." },
      { flag: "Buying the saw for utilisation it will not get", why: "A grapple saw is job-specific. If removals are a small share of your work, the grab earns more hours and the saw sits on the rack." },
    ],
    checklist: [
      "Share of your work that involves cutting standing or attached material",
      "Annual hours each tool would realistically run",
      "Carrier auxiliary flow and available circuits",
      "Cost of adding a dual circuit if the saw is the answer",
      "Tine count and tine material on the grab",
      "Which rotator is specified, rigid or swinging",
      "Chain and bar pricing and lead time if buying the saw",
      "What parts are held in Australia for either tool",
    ],
    faqs: [
      {
        q: "Which one earns more hours a year?",
        a: "The grab, comfortably, for most contractors. Moving timber, brash and biomass is work that exists on almost every site, whereas a grapple saw earns only when there is standing or attached material to cut. That utilisation gap is the strongest argument for buying the grab first.",
      },
      {
        q: "What carrier size suits each?",
        a: "Grapple saws span roughly 3 to 30 tonnes. Forestry grabs are typically specified for 13 to 25 tonne carriers, so a mini excavator can take a grapple saw but not a full-size forestry grab. Check the published range for the specific model rather than the series.",
      },
      {
        q: "Is a grab useful without a rotator?",
        a: "Much less so. For forestry work continuous 360 degree rotation is what lets an operator align to a log without repositioning the machine, and it accounts for most of the productivity difference. Specify the rotator type deliberately: rigid for fixed installations, swinging where the head hangs.",
      },
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
