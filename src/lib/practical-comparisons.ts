export interface PracticalComparison {
  slug: string;
  title: string;
  metaDescription: string;
  question: string;
  verdict: string;
  a: { name: string; image: string; alt: string; role: string };
  b: { name: string; image: string; alt: string; role: string };
  rows: Array<{ criterion: string; a: string; b: string }>;
  sections: Array<{ title: string; paragraphs: string[] }>;
  mistakes: Array<{ title: string; body: string }>;
  checklist: string[];
  related: Array<{ href: string; label: string; why: string }>;
}

export const PRACTICAL_COMPARISONS: PracticalComparison[] = [
  {
    slug: "forestry-mulcher-vs-hydraulic-mower",
    title: "Forestry Mulcher vs Hydraulic Mower",
    metaDescription: "Compare an excavator forestry mulcher with a hydraulic mower for woody vegetation, grass, finish, hydraulic demand, wear and cost per hectare.",
    question: "Do you need to process woody material or maintain grass and light scrub?",
    verdict: "Choose a forestry mulcher when stems, regrowth and woody residue must be reduced into a controlled residual layer. Choose a hydraulic mower for grass, weeds and light scrub where fast area coverage and a maintained finish matter more than destroying woody material. A mower is not a lighter, cheaper mulcher; it is a different rotor and duty cycle.",
    a: { name: "Forestry mulcher", image: "/images/products/mulcher-te-excavator.webp", alt: "Excavator-mounted fixed-tooth forestry mulcher with protective pusher bar", role: "High-energy processing of woody vegetation and residue" },
    b: { name: "Hydraulic mower", image: "/images/products/mulcher-brushcutter.webp", alt: "Excavator hydraulic mower maintaining grass and light scrub on an orchard bank", role: "Fast maintenance of grass, weeds and light regrowth" },
    rows: [
      { criterion: "Primary material", a: "Woody regrowth, stems, branches and slash", b: "Grass, weeds and light scrub" },
      { criterion: "Finished output", a: "Reduced woody particles and disturbed surface residue", b: "Cut vegetation with a maintained, mown appearance" },
      { criterion: "Hydraulic duty", a: "High and sustained; cooling is a selection constraint", b: "Usually lower, but still continuous and carrier-specific" },
      { criterion: "Ground contact", a: "Can process near ground; stone and soil accelerate tooth wear", b: "Should follow the surface without being used as a ground grinder" },
      { criterion: "Dominant wear", a: "Fixed teeth, holders, rotor and belts or drive", b: "Blades or flails, bearings and drive components" },
      { criterion: "Commercial unit", a: "Completed hectares to a specified residual finish", b: "Maintained hectares or corridor distance per visit" },
    ],
    sections: [
      { title: "Start with the largest material that must disappear", paragraphs: ["Walk representative areas and record stem diameter, density, woody fraction, ground hazards and required finish. If the machine must repeatedly attack material that bends away from a mowing rotor or leaves unacceptable stubs, the mower is being asked to become a mulcher. If nearly all material is grass and soft regrowth, a forestry rotor carries weight, fuel and wear the contract may not pay for.", "Do not select from the worst isolated stem alone. Map what proportion of the site needs heavy processing and whether those pockets can be cut or handled separately. A mower covering the majority quickly with a second method for occasional timber can outperform a mulcher used slowly across every hectare."] },
      { title: "Compare the complete hectare, not rotor speed", paragraphs: ["Measure from mobilisation and setup to the accepted finish. Include operator inspection, travel, overlap, reversals, tooth or blade service, clearing wrapped material, fuel and any follow-up pass. The faster-looking head can lose once a second machine or manual crew is needed to correct the residual result.", "Price wear against the actual contamination. Mulcher teeth in rock, wire or repeated soil contact can dominate the rate. Mower blades also fail when operators use them against woody stems beyond their design. State material exclusions and a variation method so the tender does not turn hidden contamination into an unlimited consumable allowance."] },
      { title: "Let repeat frequency decide ownership", paragraphs: ["Mowing and light scrub maintenance often recur on a predictable cycle, creating annual utilisation and route density. Heavy mulching may arrive as fewer project packages with larger revenue per mobilisation. Model the hours and contribution of each work stream rather than assuming the more capable attachment is the safer purchase.", "Where the fleet serves both initial reduction and recurring maintenance, owning both can be rational: the mulcher establishes the corridor or block, and the mower maintains soft regrowth before it returns to woody material. The second tool earns by preventing expensive work from returning, not by replacing the first pass."] },
    ],
    mistakes: [
      { title: "Buying on cutting width", body: "Width says little about material capacity, power demand or the finished surface." },
      { title: "Calling every rotor a mulcher", body: "Mowers, slashers and forestry rotors use different cutting systems and tolerate different impacts." },
      { title: "Ignoring cooling", body: "Continuous high-load work can expose a carrier limitation long before lift capacity does." },
      { title: "No finish specification", body: "Two contractors can price different outcomes under the same vague phrase ‘vegetation clearing’." },
    ],
    checklist: ["Woody material percentage", "Maximum repeat stem size", "Required residual finish", "Measured flow at pressure", "Cooling assessment", "Rock and wire contamination", "Annual treatment cycle", "Wear allowance per hectare"],
    related: [{ href: "/forestry-mulcher-guide/", label: "Forestry mulcher guide", why: "Carrier, rotor, wear and production detail." }, { href: "/applications/bushfire-fuel-reduction-machinery/", label: "Fuel-reduction workflow", why: "Match the tool to measurable treatment outcomes." }, { href: "/cost-per-hectare-calculator/", label: "Cost per hectare", why: "Compare output and wear in the unit the client buys." }],
  },
  {
    slug: "stump-grinder-vs-excavator-removal",
    title: "Stump Grinder vs Excavator Removal",
    metaDescription: "Compare grinding a stump in place with excavating and removing it: spoil, services, reinstatement, access, carrier time and cost per completed stump.",
    question: "Should the stump be destroyed in place or excavated and removed?",
    verdict: "Grind in place when access, spoil, buried assets and reinstatement make excavation expensive. Excavate when the ground is already being stripped, the root plate must be exposed, or the stump can be handled inside an existing earthworks and disposal stream. Compare the completed site, not the minutes spent at the stump.",
    a: { name: "Stump grinder", image: "/images/field/stump-grinder-field.webp", alt: "Excavator-mounted stump grinder destroying a stump in place", role: "Destroys the stump and root plate with limited excavation spoil" },
    b: { name: "Excavator removal", image: "/images/editorial/land-clearing-attachments-australia.webp", alt: "Tracked excavator clearing vegetation and ground on a civil work front", role: "Digs, extracts, handles and disposes of the root mass" },
    rows: [
      { criterion: "Ground disturbance", a: "Localised processing below grade", b: "Excavation around and beneath the root plate" },
      { criterion: "Material stream", a: "Chip mixed with soil, normally retained for backfill", b: "Root ball, soil and spoil requiring handling or processing" },
      { criterion: "Near services and finishes", a: "Controlled footprint but services still require location", b: "Larger excavation and higher reinstatement exposure" },
      { criterion: "Open civil clearing", a: "Adds a specialist processing step", b: "Can fit the existing earthworks sequence" },
      { criterion: "Dominant cost", a: "Teeth, productive time and grinder capital", b: "Excavator time, spoil handling, transport and reinstatement" },
      { criterion: "Useful measure", a: "Completed cost per stump", b: "Completed removal and disposal cost per stump or area" },
    ],
    sections: [
      { title: "Define what finished means", paragraphs: ["Specify required depth, whether roots beyond the central plate remain, backfill, compaction, imported material, surface restoration and disposal. A stump that is no longer visible is not necessarily a completed site. Grinding and excavation can both appear cheap when reinstatement is left outside the comparison.", "Locate services and understand access before selecting either method. A grinder does not make buried assets irrelevant, and excavation near structures or services can enlarge the controlled area rapidly. Record exclusion distances and the method for uncertain locations in the work plan."] },
      { title: "Follow every tonne of material", paragraphs: ["Excavation creates a root mass mixed with soil that may be awkward to load, transport or accept at disposal. The excavator can spend more time cleaning, reducing and rehandling the stump than extracting it. If civil earthworks already include spoil movement, those costs may be absorbed; on a finished urban site they dominate.", "Grinding leaves processed material in the excavation and avoids cartage, but tooth consumption rises in abrasive soil and contaminated fill. The chip is useful for reinstatement and poor as clean biomass. Price the output honestly rather than assigning recovery value to soil-contaminated material."] },
      { title: "Use a matched sample to set the rate", paragraphs: ["Record diameter, species, access, ground, depth, productive time, teeth, carrier and crew hours for a representative group. For excavation, include digging, cleaning, loading, transport, disposal and reinstatement. For grinding, include setup, processing, tooth service, backfill and surface completion.", "Use a distribution rather than one average stump. Large buttressed hardwood, old fence lines and urban fill behave differently from open softwood. State which conditions sit inside the base rate and price a transparent method for oversize, rock, buried metal or restricted access."] },
    ],
    mistakes: [{ title: "Timing only extraction", body: "The root ball still has to be cleaned, reduced, loaded, moved and the hole reinstated." }, { title: "Assuming grinding is service-safe", body: "Underground services must still be located and protected before below-grade work." }, { title: "Ignoring soil in wear", body: "Abrasive or contaminated ground can move grinder tooth cost dramatically." }, { title: "No disposal acceptance", body: "A destination may reject root balls or charge differently for soil-contaminated green waste." }],
    checklist: ["Required depth and finish", "Service locations", "Access and setup", "Root mass destination", "Soil and contamination", "Reinstatement specification", "Representative stump sample", "Completed cost per stump"],
    related: [{ href: "/stump-grinder-guide/", label: "Stump grinder guide", why: "Understand mechanisms, carriers and running cost." }, { href: "/cost-per-stump-calculator/", label: "Cost per stump", why: "Model the complete grinding system." }, { href: "/applications/farm-clearing-ground-rehabilitation/", label: "Ground rehabilitation", why: "Plan the productive condition after vegetation removal." }],
  },
  {
    slug: "grapple-saw-vs-climber-and-crane",
    title: "Grapple Saw vs Climber and Crane",
    metaDescription: "Compare an excavator grapple saw with climber-and-crane tree removal for reach, section control, site access, crew exposure, setup and debris handling.",
    question: "Can a ground-based grapple saw replace the climbing and lifting method on this site?",
    verdict: "Use a grapple saw where the carrier can establish a stable working envelope and controlled sections can be cut, held and placed from the ground. Use climbers and cranes where canopy access, reach, rigging geometry, tree condition or site constraints sit outside that envelope. The methods overlap, but neither replaces the other across every tree.",
    a: { name: "Excavator grapple saw", image: "/images/field/grapple-saw-field.webp", alt: "Excavator grapple saw holding a tree section during controlled removal", role: "Ground-based grip, cut and placement from a defined carrier position" },
    b: { name: "Climber and crane method", image: "/images/editorial/utility-vegetation-management-australia.webp", alt: "Roadside vegetation work around retained trees and public infrastructure", role: "Flexible canopy access and rigging where a carrier cannot reach or stand" },
    rows: [
      { criterion: "Access requirement", a: "Stable carrier position and usable approach", b: "Crane setup or climbing access with engineered rigging" },
      { criterion: "Working envelope", a: "Bounded by excavator reach and lift at radius", b: "Bounded by crane chart, rigging and climber access" },
      { criterion: "People beneath work", a: "Can materially reduce exposure when the full method is mechanised", b: "Requires disciplined rigging, communication and exclusion controls" },
      { criterion: "Irregular canopy", a: "Limited by grip geometry and view", b: "More adaptable section selection and rigging" },
      { criterion: "Material placement", a: "Direct placement within excavator envelope", b: "Lift path can cross obstacles but needs landing coordination" },
      { criterion: "Best production measure", a: "Completed trees or reopened zones per crew shift", b: "Completed trees including setup, rigging and site release" },
    ],
    sections: [
      { title: "Draw the working envelope before choosing the method", paragraphs: ["Map carrier standing positions, slope, ground bearing, reach, obstacles, retained assets and the landing zone. Use the excavator lift chart with attachment, hitch, rotator and retained section included. The useful grapple-saw envelope ends where the machine cannot safely hold and place the cut piece, not where the boom can touch it.", "For the conventional method, map crane setup, outrigger loads, lift path, rigging points, climber access and exclusion area. A site that excludes the excavator may accept a crane, and the reverse is also true. Compare feasible methods before production assumptions."] },
      { title: "Redesign the crew around mechanisation", paragraphs: ["A grapple saw creates value when it removes people from the cut and drop zone and combines grip, cut and placement. If ground workers still guide every section beneath the head, the method has preserved exposure while increasing cycle speed. Define communication, exclusion, visibility, emergency lowering and disabled-head recovery.", "The downstream crew must keep pace. Sections need landing, sorting, chipping, loading or further cutting. Measure the completed tree and reopened work area, because a rapid saw cycle followed by a blocked landing is not a faster removal system."] },
      { title: "Keep hybrid methods available", paragraphs: ["Some projects suit a grapple saw for lower and accessible sections, with a climber or crane handling the canopy beyond reach or pieces that cannot be gripped safely. Hybrid planning can reduce time aloft and crane picks without pretending the ground machine covers the complete tree.", "Price each phase and its mobilisation explicitly. The grapple saw should not be justified by removing a crane that the remaining canopy still requires, and the crane should not be scheduled for work the excavator can complete more efficiently before arrival. Sequence, not brand preference, decides the saving."] },
    ],
    mistakes: [{ title: "Using maximum reach as capacity", body: "Lift and control normally become limiting before the boom reaches its geometric maximum." }, { title: "Ignoring retained-section mass", body: "The section is part of the lifted load and can exceed the head mass." }, { title: "Leaving debris out of the method", body: "Cutting productivity is meaningless when the landing or chipper controls the crew." }, { title: "Claiming complete replacement", body: "Canopy geometry, condition and access preserve work that needs climbers or cranes." }],
    checklist: ["Carrier standing position", "Lift at working radius", "Section mass estimate", "Grip and control functions", "Visibility and cameras", "Exclusion and communication", "Landing and debris flow", "Hybrid work boundary"],
    related: [{ href: "/grapple-saw-guide/", label: "Grapple saw guide", why: "Carrier circuits, reach and section control." }, { href: "/industries/arborists-tree-contractors/", label: "Arborist industry profile", why: "Connect the method to crew and service lines." }, { href: "/applications/utility-vegetation-management-equipment/", label: "Utility vegetation workflow", why: "Plan access windows and debris handling." }],
  },
  {
    slug: "tree-shear-vs-chainsaw-crew",
    title: "Tree Shear vs Chainsaw Crew",
    metaDescription: "Compare excavator tree shears with manual chainsaw felling for placement, selective work, access, crew exposure, timber recovery and cost per stem.",
    question: "Does mechanised felling improve the complete operation or only make the cut faster?",
    verdict: "Choose a tree shear where the carrier can grip, cut and place repeat stems safely and downstream handling can absorb the output. Keep chainsaw felling where access, selectivity, terrain, retained vegetation or unusual stem form defeats the machine envelope. Judge both methods at the point where timber is safely landed and the work area is released.",
    a: { name: "Excavator tree shear", image: "/images/field/tree-shear-field.webp", alt: "Excavator tree shear holding a felled stem under mechanical control", role: "Mechanised grip, cut and controlled placement from the cab" },
    b: { name: "Chainsaw felling crew", image: "/images/editorial/farm-clearing-ground-rehabilitation.webp", alt: "Selective vegetation work across Australian farm ground with retained trees", role: "Flexible manual felling across constrained and selective sites" },
    rows: [
      { criterion: "Best material", a: "Repeat stems within jaw and carrier capacity", b: "Variable form, access and selective individual work" },
      { criterion: "Placement", a: "Stem remains mechanically controlled through the cut", b: "Controlled through felling technique, wedges, winching or rigging" },
      { criterion: "Terrain and access", a: "Needs stable carrier access and room to handle the stem", b: "Can reach ground unavailable to an excavator, subject to safe work planning" },
      { criterion: "Crew exposure", a: "Moves cutting into a protected cab when the exclusion zone is maintained", b: "Places workers at the tree and requires manual controls" },
      { criterion: "Timber handling", a: "Can place or stack directly within reach", b: "Often needs a separate machine after felling" },
      { criterion: "Commercial measure", a: "Completed and placed stems per carrier shift", b: "Completed and cleared stems per crew shift" },
    ],
    sections: [
      { title: "Separate repeat production from exceptional trees", paragraphs: ["Sample diameter, species, lean, branching, buttress, defects, spacing, slope and retained assets. A shear performs best where many stems fit a repeatable grip-and-cut method. One exceptional tree outside that envelope should not dictate the tool for the whole block, but it needs a separate safe method.", "Chainsaw crews remain valuable for selective access and trees whose geometry cannot be gripped or placed by the carrier. Plan the boundary in advance. An operator discovering it at the tree creates delay and pressure to use the attachment beyond the intended range."] },
      { title: "Design the material flow after the cut", paragraphs: ["A shear can place stems into a stack, landing or processing line, preserving timber value and removing a second handling cycle. That advantage disappears if the landing fills or transport cannot keep pace. Map each stem from standing position to its final accepted location.", "Manual felling may need a grab or skidder to separate, extract and stack material. Include that machine and crew in the comparison. Conversely, a shear carrier may spend valuable time walking between dispersed stems that a small crew reaches efficiently. Compare the whole shift and complete output."] },
      { title: "Price utilisation, not theoretical replacement", paragraphs: ["Tree shears carry attachment capital, bracket, guarding, transport and carrier opportunity cost. Chainsaw crews carry labour, competency, supervision, consumables and exposure controls. Use annual repeatable stem volume to determine whether ownership is justified, then keep a subcontract or manual method for exceptions.", "Record completed stems, placed tonnes or released area along with carrier and crew hours. Separate waiting, travel, handling and attachment changeover. Those records show whether the shear has removed a work step, reduced exposure or merely moved labour to a different point in the operation."] },
    ],
    mistakes: [{ title: "Comparing cut time", body: "The useful endpoint is a safely placed stem and released work area, not separation at the stump." }, { title: "Using published maximum diameter", body: "Dense, buttressed or poorly gripped hardwood should be derated from favourable test material." }, { title: "No exception method", body: "A block always contains stems or positions outside the repeat mechanised envelope." }, { title: "Ignoring carrier opportunity cost", body: "The excavator may earn more on other project work when stem volume is intermittent." }],
    checklist: ["Stem distribution and species", "Slope and carrier access", "Lift with retained stem", "Placement and landing", "Downstream handling capacity", "Exception method", "Annual repeat volume", "Completed-stem cost"],
    related: [{ href: "/tree-shears-guide/", label: "Tree shear guide", why: "Jaw types, carrier match and honest limits." }, { href: "/applications/land-clearing-attachments/", label: "Land-clearing workflow", why: "Place felling inside the complete material sequence." }, { href: "/industries/civil-construction-land-development/", label: "Civil industry profile", why: "Connect clearing output to released work fronts." }],
  },
];

export function practicalComparison(slug: string): PracticalComparison | undefined {
  return PRACTICAL_COMPARISONS.find((item) => item.slug === slug);
}
