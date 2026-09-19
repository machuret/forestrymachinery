export interface ApplicationGuide {
  slug: string;
  code: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  description: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  imageAlt: string;
  outcome: string;
  categories: string[];
  recommended: Array<{
    category: string;
    href: string;
    when: string;
  }>;
  decisions: Array<{
    title: string;
    body: string;
  }>;
  sections: Array<{
    title: string;
    paragraphs: string[];
  }>;
  quoteBrief: string;
  checklist: string[];
}

export const APPLICATION_GUIDES: ApplicationGuide[] = [
  {
    slug: "land-clearing-attachments",
    code: "A1",
    title: "Land-clearing attachments for Australian contractors",
    shortTitle: "Land clearing",
    eyebrow: "Civil and development",
    description:
      "Choose the attachment around the finish the contract requires: recoverable timber, in-place mulch, controlled felling or a site ready for the next trade.",
    image: "/images/editorial/land-clearing-attachments-australia.webp",
    imageWidth: 1536,
    imageHeight: 1024,
    imageAlt:
      "Tracked excavator clearing scrub beside a formed access corridor in dry Australian eucalyptus woodland",
    outcome: "A cleared corridor, controlled material and no second machine doing a job the first attachment should have finished.",
    categories: ["tree-shears-guide", "forestry-mulcher-guide", "log-grab-guide", "tillage-guide"],
    recommended: [
      { category: "Tree shears", href: "/tree-shears-guide/", when: "Stems must be placed accurately or timber has recovery value." },
      { category: "Forestry mulchers", href: "/forestry-mulcher-guide/", when: "Vegetation can stay on site and the specification accepts a mulched finish." },
      { category: "Forestry grabs", href: "/log-grab-guide/", when: "Material has already been cut and handling is the production bottleneck." },
      { category: "Tillage tools", href: "/tillage-guide/", when: "The scope continues into compaction, drilling or rehabilitation." },
    ],
    decisions: [
      { title: "Start with the finish", body: "A mulcher, shear and grab can all work on the same block, but they leave three different sites behind. The handover specification decides the sequence." },
      { title: "Price material twice", body: "First price the cutting. Then price what happens to every tonne after it is down: stack, chip, haul, burn where permitted, or leave as mulch." },
      { title: "Protect the carrier", body: "Continuous mulching load, side loading and debris exposure change the cooling, guarding and service requirements of a standard excavator." },
    ],
    sections: [
      {
        title: "Choose the finish before the attachment",
        paragraphs: [
          "A clearing scope should describe the condition of the site at handover, not merely the vegetation that must disappear. A corridor ready for drainage crews is different from a block left with recoverable logs, habitat piles or mulch. That distinction determines whether the primary tool should fell, process or handle. It also exposes the secondary work that is easy to omit from a quotation: stacking, loading, stump treatment, haulage, erosion control and access restoration.",
          "Tree shears suit controlled whole-stem removal where placement and timber recovery matter. Mulchers reduce vegetation in place and can remove a handling step, but the resulting particle size and depth must satisfy the specification. Grapples earn their keep after cutting by sorting and loading. Tillage and compaction tools belong in the sequence when the same carrier must leave access, planting holes or stable ground for the next trade.",
        ],
      },
      {
        title: "Build a production sequence around the bottleneck",
        paragraphs: [
          "Measure stems by diameter band and density rather than recording only the largest tree on site. The maximum diameter establishes whether a tool can complete the work; the median diameter and stems per hectare determine production. Then follow every stem after it is cut. If one excavator can fell faster than a loader can remove material, buying a larger shear will add waiting time rather than completed hectares.",
          "The useful production number is a finished unit: metres of corridor handed over, hectares cleared to specification, or tonnes sorted and loaded. Record travel, attachment changes, refuelling, tooth or blade service and debris clean-down separately from productive time. Those observations show whether the next investment belongs on the cutting machine, the material-handling side or transport rather than relying on a demonstration measured in ideal conditions.",
        ],
      },
      {
        title: "Specify the carrier as part of the system",
        paragraphs: [
          "Carrier compatibility begins with operating weight but finishes with the lift chart, measured auxiliary flow, working pressure, return arrangement and duty cycle. A head may sit inside the advertised tonne class and still overload the machine at working radius or create more continuous hydraulic heat than its cooling package can reject. Include the hitch, bracket, rotator and retained material when checking mass, because the bare attachment figure is not what the excavator carries.",
          "Forestry guarding is also a purchasing line, not an optional accessory added after delivery. Protect the cab, belly, hoses, cooling pack and exposed electrical components for the debris path created by the chosen method. Confirm how couplers and case drain will be installed, which relief settings are required, and who commissions the package. A defensible quote names the complete working configuration rather than a head supplied loose at the yard gate.",
        ],
      },
    ],
    quoteBrief: "Issue every supplier with the same clearing brief: mapped work area, diameter distribution, stems per hectare, required finish, material destination, access constraints and the carrier schedule. Ask each respondent to state the proposed attachment, ordered mass, hydraulic configuration, guarding, production assumptions, wear allowance, freight, commissioning and support response. A price without those assumptions cannot be compared. For staged civil work, identify each mobilisation and the date the next trade needs access, because clearing output is valuable only when the completed area is released in the sequence the project requires.",
    checklist: ["Carrier operating weight and lift chart", "Measured auxiliary flow and pressure", "Stem diameter and density", "Required site finish", "Material handling and disposal route", "Guarding and cooling package"],
  },
  {
    slug: "utility-vegetation-management-equipment",
    code: "A2",
    title: "Utility vegetation-management equipment",
    shortTitle: "Utility vegetation",
    eyebrow: "Road, rail and power corridors",
    description:
      "Mechanised pruning and controlled cutting for repeat corridor work where reach, cut quality and exclusion zones matter more than raw clearing speed.",
    image: "/images/editorial/utility-vegetation-management-australia.webp",
    imageWidth: 1536,
    imageHeight: 1024,
    imageAlt:
      "Compact excavator mechanically pruning eucalyptus regrowth along a regional Australian roadside power corridor",
    outcome: "Repeatable corridor clearance with fewer people exposed beneath cutting work and a finish that can be inspected.",
    categories: ["mechanical-pruning-guide", "grapple-saw-guide", "tree-shears-guide"],
    recommended: [
      { category: "Mechanical pruning", href: "/mechanical-pruning-guide/", when: "The work is cyclical trimming and cut quality is specified." },
      { category: "Grapple saws", href: "/grapple-saw-guide/", when: "Sections must be held throughout the cut near roads, structures or conductors." },
      { category: "Tree shears", href: "/tree-shears-guide/", when: "Whole-stem removal is permitted and production matters more than pruning finish." },
    ],
    decisions: [
      { title: "Match the contract", body: "Clearance distance, cut quality, traffic control and disposal rules determine the tool long before brochure capacity does." },
      { title: "Reach is not capacity", body: "A carrier may reach the limb but still lack stability at that radius. Read the lift chart with the attachment and retained section included." },
      { title: "Plan the debris stream", body: "A fast cutting head only moves the bottleneck if the crew can safely collect, process and remove the material behind it." },
    ],
    sections: [
      {
        title: "Translate the corridor specification into a work method",
        paragraphs: [
          "Utility vegetation work is governed by the clearance envelope, the asset owner’s procedure and the condition required after cutting. Mechanical pruning is the natural fit for repeat trimming where cut quality and a consistent profile matter. A grapple saw is more appropriate when each section must remain controlled through the cut near traffic, structures or conductors. Whole-stem shearing suits removal work but does not substitute for pruning when retained tree structure is part of the specification.",
          "Record conductor location, roadside offsets, rail possessions, traffic-control constraints and the position of retained assets before selecting reach. The longest boom is not automatically the safest or most productive option. Working farther from the carrier reduces available lift and makes movement at the attachment more sensitive. The practical envelope is the radius at which the machine can hold the attachment and the expected section with adequate stability.",
        ],
      },
      {
        title: "Design the crew around controlled exposure",
        paragraphs: [
          "Mechanisation should remove people from the drop zone, not create a faster cutting machine surrounded by the same manual handling. Define who establishes the exclusion zone, who communicates with the operator, how cut material is transferred and when the corridor is reopened. Camera coverage, cab guarding, emergency lowering arrangements and the method for recovering a disabled attachment all belong in the work plan before the first shift.",
          "Debris handling frequently limits production. A pruner can advance continuously while the collection crew falls behind, eventually forcing the carrier to stop or travel back through loose material. Trial the entire train—cutting, collection, chipping or loading and transport—and report completed corridor distance per possession or traffic-control window. That measure reflects the service the client buys and prevents cutting speed from disguising an unbalanced operation.",
        ],
      },
      {
        title: "Procure for repeatability and inspection",
        paragraphs: [
          "Ask suppliers to quote the attachment, bracket, hitch, rotator, hydraulic installation, controls, guarding, commissioning and operator training as one working package. Require mass in the ordered configuration and confirm the carrier’s lift capacity at the proposed working radius. For saws and pruners, document the circuit functions separately so the carrier can operate grip, cut and rotation without improvised switching that slows the cycle or increases operator error.",
          "A repeat program justifies a documented baseline: clearance achieved, average cycle time, fuel use, wear consumption and defects found during inspection. Photograph representative cuts and record which material or access conditions reduced output. That evidence improves the next tender and gives supervisors a practical threshold for changing blades, adjusting the method or withdrawing the machine when conditions move outside the approved plan.",
        ],
      },
    ],
    quoteBrief: "Give suppliers the corridor profile, target clearance, typical limb size, maximum retained section, working radius, access window and material-disposal method. Require the quotation to describe every hydraulic function, the controls used to switch them, the complete suspended mass and the carrier assessment at radius. Include training, inspection criteria, consumable pricing and field-support coverage. For regulated or asset-owner work, attach the relevant procedure and ask the supplier to identify any assumption that conflicts with it. That response is more useful than a generic statement that the attachment is suitable for utility work.",
    checklist: ["Required clearance envelope", "AS 4373 obligations where specified", "Carrier lift capacity at working radius", "Traffic and exclusion-zone plan", "Cut material handling", "Approved attachment and operator guarding"],
  },
  {
    slug: "bushfire-fuel-reduction-machinery",
    code: "A3",
    title: "Bushfire fuel-reduction machinery",
    shortTitle: "Fuel reduction",
    eyebrow: "Hazard-reduction programs",
    description:
      "Select machinery for treated hectares, terrain and the required residual fuel profile—not for the most dramatic single pass shown in a brochure.",
    image: "/images/editorial/bushfire-fuel-reduction-machinery.webp",
    imageWidth: 1536,
    imageHeight: 1024,
    imageAlt:
      "Excavator-mounted mulcher creating a low-fuel strip through Australian eucalyptus bushland in warm afternoon light",
    outcome: "A measurable treated area with controlled residue, known production cost and machinery that can sustain continuous-duty work.",
    categories: ["forestry-mulcher-guide", "tree-shears-guide", "log-grab-guide"],
    recommended: [
      { category: "Forestry mulchers", href: "/forestry-mulcher-guide/", when: "The program measures hectares treated and accepts material processed in place." },
      { category: "Tree shears", href: "/tree-shears-guide/", when: "Selected stems must be removed while retained vegetation stays undamaged." },
      { category: "Forestry grabs", href: "/log-grab-guide/", when: "Windrows, habitat piles or off-site processing are part of the treatment plan." },
    ],
    decisions: [
      { title: "Define treated", body: "Write down the target height, particle size, retained stems and acceptable windrow before calculating production." },
      { title: "Terrain sets the ceiling", body: "Slope, rocks, hidden wire and access can reduce real output far below an open-paddock demonstration rate." },
      { title: "Heat is a production cost", body: "Mulching is continuous hydraulic work. Cooling capacity, debris cleaning and fire-prevention checks belong in the hourly rate." },
    ],
    sections: [
      {
        title: "Define the treatment that will be measured",
        paragraphs: [
          "Fuel reduction is not a promise to make a block look cleaner. The scope should state treated area, retained stems, maximum residual height, acceptable particle size, windrow rules and protection requirements for soil, habitat and cultural values. Those measures decide whether vegetation can be processed in place or must be selectively removed. They also give both parties a finish that can be inspected instead of arguing over an undefined visual standard.",
          "Sample vegetation across representative terrain and separate light regrowth from dense, woody material. Diameter, density, moisture, rocks, hidden wire and slope all change production. A single hectares-per-day figure without those conditions is not transferable. Build the estimate from productive machine hours in comparable material, then include travel, turning, inspection, cleaning and fire-watch time as explicit allowances rather than expecting the rotor to work every paid minute.",
        ],
      },
      {
        title: "Treat heat, debris and ignition as operating constraints",
        paragraphs: [
          "A forestry mulcher places a continuous load on the auxiliary circuit and throws fine debris toward the carrier. Confirm usable flow at working pressure, return-line limits and cooling capacity for the expected ambient temperature. Monitor hydraulic temperature during the trial rather than assuming a carrier that can run the head for ten minutes can sustain a full shift. Derating caused by heat belongs in the production model and may justify a cooling upgrade.",
          "Document inspection and clean-down intervals for the radiator pack, belly, exhaust area and attachment. Provide accessible extinguishers or suppression equipment appropriate to the operating plan, define shutdown triggers and ensure the operator can identify changing fire conditions. These controls reduce ignition risk and protect availability: a machine stopped for repeated debris cleaning may still be the correct method, but the tender rate must carry that non-productive time.",
        ],
      },
      {
        title: "Price completed hectares and the mobilisation pattern",
        paragraphs: [
          "Hazard-reduction programs are often split across scattered blocks. Mobilisation, low-loader access, refuelling, wash-down and daily travel can dominate a small treatment parcel even when mulching output is strong. Price each move and identify the minimum economical parcel size. A compact carrier may complete fewer hectares per hour yet produce a lower program cost when it travels without the same permit, escort or unloading constraints.",
          "Track fuel, teeth, holders, belts, hoses and planned service against treated hectares as well as engine hours. The hectare measure lets estimators compare blocks with different densities and shows when wear is being driven by contamination or technique rather than ordinary use. Keep critical wear parts on the support vehicle for remote work and confirm replenishment lead times before mobilisation, because a small unavailable component can strand the entire treatment system.",
        ],
      },
    ],
    quoteBrief: "A fuel-reduction request should include treatment maps, vegetation samples, target residual condition, slope bands, contamination risks, access and the planned fire controls. Ask for sustained hydraulic requirements rather than a minimum flow figure, and require the supplier to address cooling, guarding, debris cleaning and the expected wear package for the material. Request production assumptions in hectares per productive hour with the qualifying conditions stated. Price mobilisation and standby separately so changing weather, access restrictions or fire-danger triggers do not turn a sound treatment rate into an unrecoverable whole-of-program cost. State who carries the fire-watch and post-treatment inspection obligations.",
    checklist: ["Treatment specification", "Slope and ground hazards", "Vegetation diameter and density", "Cooling and guarding", "Fire-prevention procedure", "Measured hectares per productive hour"],
  },
  {
    slug: "farm-clearing-ground-rehabilitation",
    code: "A4",
    title: "Farm clearing and ground rehabilitation",
    shortTitle: "Farm rehabilitation",
    eyebrow: "Agriculture and landcare",
    description:
      "Carry the job beyond vegetation removal: handle timber, prepare access, drill, compact and leave productive ground rather than an expensive pile of debris.",
    image: "/images/editorial/farm-clearing-ground-rehabilitation.webp",
    imageWidth: 1536,
    imageHeight: 1024,
    imageAlt:
      "Excavator with auger and soil preparation attachments rehabilitating cleared ground on a rolling Australian farm",
    outcome: "One carrier completing more of the job—from selective clearing through material handling to usable ground.",
    categories: ["tillage-guide", "tree-shears-guide", "log-grab-guide", "forestry-mulcher-guide"],
    recommended: [
      { category: "Tillage tools", href: "/tillage-guide/", when: "Drilling, compaction or soil preparation is included in the final scope." },
      { category: "Tree shears", href: "/tree-shears-guide/", when: "Selective removal and controlled placement protect fences, stock areas and retained trees." },
      { category: "Forestry grabs", href: "/log-grab-guide/", when: "Timber must be sorted into usable logs, habitat piles or burn rows where permitted." },
      { category: "Forestry mulchers", href: "/forestry-mulcher-guide/", when: "Regrowth and residue can be reduced in place to protect soil coverage." },
    ],
    decisions: [
      { title: "Avoid paying for half a result", body: "Clearing is not complete when the stems are down. Quote handling, access restoration and the next productive use of the ground." },
      { title: "Separate saleable timber", body: "A shear-and-grab sequence preserves material that a mulcher would turn into a disposal-free but unsaleable finish." },
      { title: "Change attachments, not carriers", body: "A planned attachment sequence can keep one excavator productive across felling, handling, drilling and compaction." },
    ],
    sections: [
      {
        title: "Begin with the next productive use of the land",
        paragraphs: [
          "Farm clearing should be planned backwards from the intended use: renewed pasture, an access track, fencing, shelterbelt replacement, orchard work or planting. That outcome determines what may remain on the surface, where timber can be stored and whether stumps, roots or compaction must be addressed. A cheap felling-only quote can become the expensive option when another contractor must return to handle piles and restore access.",
          "Mark retained vegetation, drainage lines, fences, services and erosion-sensitive ground before machinery arrives. Selective shearing and controlled placement help protect those boundaries. Mulching can retain soil cover and remove a transport step, but it also eliminates timber recovery and may not produce the surface required for cultivation. Use a grab when material value, habitat placement or controlled burn rows justify keeping stems intact.",
        ],
      },
      {
        title: "Plan attachment changes as a single production system",
        paragraphs: [
          "One carrier can fell, handle, drill and compact when the attachment sequence, couplers and transport stands are designed together. Confirm that each attachment is within the carrier’s lift and hydraulic envelope and that changeover can occur on stable ground without people working beneath suspended equipment. Standardised couplers and protected hose storage save time only when the hydraulic functions and contamination-control procedure are equally well planned.",
          "Arrange the work so the carrier does not repeatedly travel across finished ground. Fell and sort ahead, complete removal or in-place processing, then return for drainage, drilling or compaction. Record changeover time as part of the estimate. A broader attachment fleet increases utilisation only when the transitions are quick enough and the operator has a clear sequence; otherwise the machine becomes a mobile store of tools with low productive hours.",
        ],
      },
      {
        title: "Protect soil condition and the project margin",
        paragraphs: [
          "Ground pressure, moisture and slope influence when a tracked excavator can work without creating rehabilitation that exceeds the value of the clearing. Agree on wet-weather triggers, access routes and the treatment of ruts before starting. Keep heavy handling on planned paths and avoid placing debris where it redirects runoff. Where the scope includes compaction or drilling, test the finished result rather than treating a pass with the attachment as proof of compliance.",
          "Price the job in measurable stages: vegetation removal, timber handling, residue processing, stump or root treatment, access restoration and final ground preparation. Separate saleable timber or avoided disposal from production income instead of using optimistic recovery to subsidise the base rate. The result is a quote that remains defensible when volumes, disposal permissions or the owner’s preferred finish change after work begins.",
        ],
      },
    ],
    quoteBrief: "Describe the farm outcome as a sequence: what is removed, what is retained, where timber goes, how residue is treated and what ground condition is required afterward. Provide carrier and hydraulic details for every intended attachment, not only the first one used. Ask suppliers to include stands, couplers and hose arrangements that support safe changeover in the field. Separate optional stages and unit rates in the quotation so additional fencing access, drilling, compaction or stump work can be instructed without renegotiating the whole job after machinery is already mobilised.",
    checklist: ["Retained vegetation and fence lines", "Timber recovery value", "Disposal permissions", "Drainage and erosion risk", "Replanting or access requirements", "Attachment changeover plan"],
  },
];

export function applicationGuide(slug: string): ApplicationGuide | undefined {
  return APPLICATION_GUIDES.find((guide) => guide.slug === slug);
}
