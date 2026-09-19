export interface IndustryProfile {
  slug: string;
  code: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  description: string;
  image: string;
  imageAlt: string;
  outcome: string;
  evidence: string;
  categories: string[];
  priorities: Array<{ title: string; body: string }>;
  recommended: Array<{ label: string; href: string; reason: string }>;
  sections: Array<{ title: string; paragraphs: string[] }>;
  checklist: string[];
}

export const INDUSTRY_PROFILES: IndustryProfile[] = [
  {
    slug: "civil-construction-land-development",
    code: "I1",
    title: "Forestry attachments for civil construction and land development",
    shortTitle: "Civil construction",
    eyebrow: "Subdivisions · roads · renewable projects",
    description: "Plan clearing attachments for civil sites around staged access, material handling, mobilisation and the finish required by the next trade.",
    image: "/images/editorial/land-clearing-attachments-australia.webp",
    imageAlt: "Tracked excavator clearing vegetation beside a formed civil access corridor in Australian eucalyptus woodland",
    outcome: "Cleared work fronts released in sequence, with vegetation processed once and the excavator ready for the next civil task.",
    evidence: "For the first representative work front, record hectares released, productive attachment hours, excavator hours, fuel, tooth or blade consumption, attachment-change time, truck movements and the hours spent waiting on access or downstream plant. Photograph the accepted finish and note vegetation density, diameter range, slope and contamination. Review the result with the site program rather than a standalone hourly target: a method that costs slightly more at the clearing face can still be the best civil system when it releases drainage or earthworks earlier, eliminates rehandling and avoids a return mobilisation. Use those records to set separate rates for open clearing, selective work, difficult material and small staged parcels instead of carrying one blended hectare rate into every variation.",
    categories: ["tree-shears-guide", "forestry-mulcher-guide", "log-grab-guide", "tillage-guide"],
    priorities: [
      { title: "Release the work front", body: "Production matters only when drainage, earthworks or services can enter the completed area on program." },
      { title: "Handle every tonne once", body: "Choose whether material is recovered, mulched, stacked or removed before the first stem is cut." },
      { title: "Keep the carrier useful", body: "A deliberate attachment sequence lets the clearing excavator continue into drilling, compaction and rehabilitation." },
    ],
    recommended: [
      { label: "Land-clearing workflow", href: "/applications/land-clearing-attachments/", reason: "Build the sequence from standing vegetation to the specified handover condition." },
      { label: "Tree shears", href: "/tree-shears-guide/", reason: "Controlled felling where retained assets, recoverable timber or placement matter." },
      { label: "Forestry mulchers", href: "/forestry-mulcher-guide/", reason: "Process vegetation in place when the specification accepts the residual finish." },
      { label: "Cost per hectare", href: "/cost-per-hectare-calculator/", reason: "Turn productive hours, wear, mobilisation and margin into a tender rate." },
    ],
    sections: [
      {
        title: "Specify clearing as a staged civil deliverable",
        paragraphs: [
          "Civil clearing is rarely one open block completed in isolation. Subdivisions, road corridors, solar farms and service easements release work fronts in stages, often around survey control, environmental exclusions and access needed by other trades. The clearing method should follow that sequence. Record the area, vegetation profile, required finish and release date for each parcel so mobilisation and material handling are priced against the actual program rather than one optimistic continuous run.",
          "Define what ‘clear’ means at handover. A mulched surface may be acceptable beneath a future batter but unsuitable where stripping, trenching or proof rolling follows immediately. Whole stems may have recovery value, yet that value disappears if they are contaminated or stacked where the bulk earthworks fleet must move them again. The attachment choice therefore starts with the downstream method statement, not with maximum cutting diameter.",
        ],
      },
      {
        title: "Balance felling, processing and removal",
        paragraphs: [
          "A tree shear can place stems accurately and preserve saleable sections. A mulcher can remove the transport step by reducing vegetation in place. A rotating grab can sort logs, brash and unsuitable material without repeated carrier repositioning. None is automatically the fastest system. Follow material through the entire site and find the queue: if trucks, chippers or disposal approvals control output, more cutting capacity simply creates a larger stockpile.",
          "Measure completed hectares or corridor metres after material is in its accepted location. Separate productive cutting time from travel, clearing around retained assets, attachment changes, tooth or blade service and clean-down. That record becomes the evidence for variation rates and future tenders. It also shows whether the next investment belongs in a larger head, a handling attachment, transport capacity or faster changeover between civil and forestry tools.",
        ],
      },
      {
        title: "Buy the installed package, not the loose attachment",
        paragraphs: [
          "Issue suppliers with the carrier model, serial range, boom and hitch configuration, lift chart, measured auxiliary flow, pressure, return arrangement and case-drain status. Require attachment mass with bracket, rotator and ordered options included. A head that fits the excavator’s advertised class can still exceed lift capacity at working radius or place a continuous heat load on a circuit designed around intermittent breaker use.",
          "The quotation should include guarding, hose routing, controls, commissioning, training, freight, initial wear parts and regional support. State site access, transport limits and how often the project is likely to move the machine. A smaller combination may win a staged program because it mobilises and unloads easily, while a larger carrier wins on a single uninterrupted block. The commercially correct answer comes from the whole program, not the best production hour.",
        ],
      },
    ],
    checklist: ["Staged clearing plan and release dates", "Required finish by work area", "Material recovery and disposal route", "Carrier lift and hydraulic schedule", "Guarding and cooling package", "Mobilisation and attachment-change allowance"],
  },
  {
    slug: "arborists-tree-contractors",
    code: "I2",
    title: "Forestry machinery for arborists and tree contractors",
    shortTitle: "Arborists",
    eyebrow: "Controlled removal · pruning · storm response",
    description: "Choose mechanised tree attachments for controlled cutting, pruning and material handling while reducing exposure beneath suspended sections.",
    image: "/images/field/grapple-saw-field.webp",
    imageAlt: "Compact excavator using a grapple saw to control a eucalyptus limb during removal work",
    outcome: "More controlled sections completed from the ground, with a carrier and crew configured around reach, lift and debris handling.",
    evidence: "Build the purchase case from completed jobs, not maximum cuts. Record the number and approximate mass of controlled sections, working radius, setup and exclusion-zone time, crew size, supporting plant, disposal movements, chain or blade use, fuel and total time until the site is reopened. Compare that evidence with the previous climbing, crane or manual method on similar trees. The value may appear as fewer people exposed beneath work, less traffic-control time, a smaller crane requirement or more jobs completed each week rather than a dramatic saw-cycle gain. Keep urban removals, repeat pruning, storm response and utility work as separate service lines because their crew, access, documentation and material-handling costs are different even when the same attachment performs the cut.",
    categories: ["grapple-saw-guide", "mechanical-pruning-guide", "tree-shears-guide", "log-grab-guide", "stump-grinder-guide"],
    priorities: [
      { title: "Control the section", body: "The tool must grip, cut and place the expected piece without exceeding carrier capacity at radius." },
      { title: "Reduce exposure", body: "Mechanisation should remove people from drop zones and climbing tasks, not accelerate cutting around the same manual crew." },
      { title: "Finish the site", body: "Branches, logs and stumps remain part of the job after the controlled cut is complete." },
    ],
    recommended: [
      { label: "Grapple saws", href: "/grapple-saw-guide/", reason: "Hold the section through the cut near structures, roads and retained trees." },
      { label: "Mechanical pruning", href: "/mechanical-pruning-guide/", reason: "Repeat trimming where reach, profile and cut quality define acceptance." },
      { label: "Stump grinders", href: "/stump-grinder-guide/", reason: "Complete removal work without excavating and carting a root ball." },
      { label: "Utility vegetation workflow", href: "/applications/utility-vegetation-management-equipment/", reason: "Plan exclusion zones, corridor output and cut-material handling as one system." },
    ],
    sections: [
      {
        title: "Match reach to capacity, not visibility",
        paragraphs: [
          "An excavator may reach a limb that it cannot safely hold. Build the working envelope from the carrier lift chart at the actual radius and over the relevant sector, then subtract hitch, bracket, rotator, attachment and retained-section mass. Include dynamic movement and the less favourable positions used to place material. The useful reach is where the machine remains stable and controllable, not the furthest point visible from the cab.",
          "Grapple saws need the grip, saw and rotation functions to work in a predictable sequence. Confirm circuit count, flow, pressure, return restrictions and control logic before purchase. A switching arrangement that looks acceptable on a quotation can slow every cycle or prevent the operator from maintaining grip while repositioning. Demonstrate the complete installation on the intended carrier with representative timber and record the configuration used.",
        ],
      },
      {
        title: "Design a mechanised crew, not just a mechanised cut",
        paragraphs: [
          "The commercial case for a grapple saw or pruner is reduced exposure and a repeatable production method. Define who establishes the exclusion zone, how the operator communicates, where sections are placed and when the ground crew enters. Camera coverage, guarding, emergency lowering and recovery of a disabled attachment belong in the plan. Mechanisation loses its safety value if people remain beneath work to guide every piece manually.",
          "Material handling commonly becomes the constraint. A saw can create sections faster than the crew can chip, stack or load them, particularly in tight urban sites. Pair the cutting carrier with a grab, loader or planned landing area and measure completed trees or reopened work zones rather than saw cycles. The result identifies whether the method saves a climber, a ground worker, a truck movement or simply shifts waiting time downstream.",
        ],
      },
      {
        title: "Build recurring revenue beyond removals",
        paragraphs: [
          "Mechanical pruning, corridor maintenance, council programs and storm response can smooth the project-based revenue of removal work. Each stream needs a different finish and documentation standard. Pruning contracts may specify profile and cut quality; storm work rewards controlled access and rapid material handling; stump grinding completes the urban job with less spoil and reinstatement than excavation. Treat them as separate production services rather than one generic machine rate.",
          "Track section size, cycles, setup time, fuel, chain or blade consumption, tooth wear and crew hours. Keep quotation templates for controlled removal, pruning and stump completion so inclusions remain visible. The purchase case should show annual hours across all suitable work, but the tender rate for each service must retain its own risks, supporting crew and disposal assumptions. High utilisation is valuable only when every hour is priced for the method actually delivered.",
        ],
      },
    ],
    checklist: ["Lift capacity at working radius", "Expected retained-section mass", "Independent grip, cut and rotation functions", "Cab visibility and guarding", "Exclusion-zone and communication method", "Debris, log and stump completion plan"],
  },
  {
    slug: "councils-local-government",
    code: "I3",
    title: "Forestry equipment for councils and local government",
    shortTitle: "Councils",
    eyebrow: "Parks · roadsides · reserves · storm cleanup",
    description: "Specify versatile forestry attachments for council vegetation programs, dispersed sites, public interfaces and transparent whole-of-life procurement.",
    image: "/images/editorial/utility-vegetation-management-australia.webp",
    imageAlt: "Compact excavator pruning roadside eucalyptus regrowth for a public vegetation-maintenance program",
    outcome: "A defensible fleet or contract decision that completes more dispersed sites while controlling public exposure, mobilisation and support risk.",
    evidence: "Run a documented pilot across several ordinary sites rather than one convenient demonstration area. Capture travel, unloading, setup, public and traffic controls, productive work, clean-up, inspection, reopening time, fuel, wear and any support call. Score the finished work against the written acceptance criteria and ask operators, supervisors and the receiving service team to record constraints. Convert the result into sites completed per crew week as well as an hourly cost. That evidence lets procurement compare ownership, dry hire and contracted delivery on the same annual program. It also reveals whether value comes from higher production, faster storm response, reduced subcontractor dependence or the ability to combine several maintenance tasks during one mobilisation.",
    categories: ["mechanical-pruning-guide", "grapple-saw-guide", "stump-grinder-guide", "forestry-mulcher-guide", "log-grab-guide"],
    priorities: [
      { title: "Serve dispersed sites", body: "Mobilisation and setup often decide weekly output more than the attachment’s best cycle time." },
      { title: "Manage public interfaces", body: "Traffic, pedestrians, retained assets and reopening times belong in the production method." },
      { title: "Procure transparently", body: "Whole-of-life cost, support response and written assumptions must survive review beyond the initial buyer." },
    ],
    recommended: [
      { label: "Utility vegetation", href: "/applications/utility-vegetation-management-equipment/", reason: "Structure pruning and controlled cutting around corridors and exclusion zones." },
      { label: "Fuel reduction", href: "/applications/bushfire-fuel-reduction-machinery/", reason: "Define measurable treatment and sustained-duty requirements for reserve programs." },
      { label: "Hire or buy", href: "/hire-vs-buy/", reason: "Test utilisation, capability access and support before committing fleet capital." },
      { label: "Support in Australia", href: "/support-and-parts-australia/", reason: "Compare field response, wear inventory and regional supply rather than purchase price alone." },
    ],
    sections: [
      {
        title: "Start with the annual works program",
        paragraphs: [
          "Council demand is spread across parks, roadsides, drainage corridors, reserves, street trees and storm response. Aggregate those tasks by attachment function and carrier class before choosing a machine. The right question is not whether one head can complete a showcase job, but whether it can complete enough repeat work across the year without creating transport, staffing or storage problems for the existing fleet.",
          "Map site frequency, average travel, unloading constraints and the finish required by each service team. A compact stump grinder on a readily mobilised carrier may complete more street sites each week than a larger unit with higher hourly output. A mulcher may suit broad reserve treatment but be unsuitable where public access, hidden contamination or retained habitat features require slower selective work. Procurement should preserve those distinctions.",
        ],
      },
      {
        title: "Write acceptance and public controls into the scope",
        paragraphs: [
          "Define clearance, cut quality, residual height, particle size, retained vegetation and debris location in measurable terms. Add traffic control, pedestrian management, noise windows, dust, fire precautions and reopening criteria. The operator then has an inspectable finish and tenderers price the same service. Without that detail, low rates are often built on a faster method that the superintendent cannot accept once work reaches a sensitive site.",
          "Mechanised cutting should reduce exposure by keeping people outside the drop and debris zone. Review visibility, cameras, cab protection, emergency procedures and how the attachment is made safe for inspection. Plan where material is placed and which machine removes it. A fast cutting carrier waiting for a truck or chipper is not a productive system, and stockpiles left in public areas become an operational problem rather than completed maintenance.",
        ],
      },
      {
        title: "Compare ownership and contracts on whole-of-life evidence",
        paragraphs: [
          "An ownership case should include attachment capital, installation, guarding, transport, operator competency, planned maintenance, wear parts, storage and residual value. A contract case should include mobilisation, minimum charges, response time and availability during storm or fire programs. Compare both against a forecast of productive annual hours and the cost of work delayed or unavailable, rather than treating the contractor rate and purchase invoice as equivalent numbers.",
          "Require suppliers to identify local inventory, service coverage, warranty exclusions, software or control dependencies and lead times for critical components. Score the complete installed package and request a demonstration on the proposed carrier. Keep measured output, fuel, wear and downtime by work type after deployment. That record supports audit, improves future specifications and prevents fleet replacement from relying on the memory of one operator or procurement cycle.",
        ],
      },
    ],
    checklist: ["Annual work types and expected hours", "Site distribution and mobilisation method", "Public-interface control requirements", "Measurable acceptance criteria", "Installed whole-of-life cost", "Local parts and field-service response"],
  },
  {
    slug: "utilities-corridor-maintenance",
    code: "I4",
    title: "Forestry machinery for utilities and corridor maintenance",
    shortTitle: "Utilities",
    eyebrow: "Power · rail · road · pipeline corridors",
    description: "Configure pruning, controlled cutting and material handling for repeat corridor programs where access windows and exclusion zones drive production.",
    image: "/images/field/mechanical-pruning-field.webp",
    imageAlt: "Excavator-mounted pruning attachment working along an Australian roadside vegetation corridor",
    outcome: "Repeatable corridor clearance measured by reopened distance, with reach, cut quality and debris handling designed into one method.",
    evidence: "Validate the method on corridor sections that represent the real program: open access, constrained urban edges, slopes, crossings and locations with difficult debris handling. Record available access-window minutes, productive cutting, carrier moves, ground support, material removal, inspection, defects and the exact distance handed back. Note the working radius and section size where cycle time or stability changes materially. Production forecasts should use cleared and accepted metres per possession or traffic-control shift, supported by a range rather than one best result. Retain photographs and inspection outcomes with those records so future tenders can distinguish a change in vegetation, access or clearance standard from an attachment-performance problem. Record weather and ground condition as well, because access speed and safe carrier position can change even when the vegetation specification remains identical.",
    categories: ["mechanical-pruning-guide", "grapple-saw-guide", "tree-shears-guide", "log-grab-guide", "forestry-mulcher-guide"],
    priorities: [
      { title: "Use the access window", body: "Possession, traffic control and isolation time make completed corridor distance the useful production measure." },
      { title: "Control reach and debris", body: "Carrier stability, retained-section mass and the downstream material stream determine the method." },
      { title: "Repeat the result", body: "Inspection, cut quality and documented controls matter across recurring multi-site programs." },
    ],
    recommended: [
      { label: "Utility vegetation workflow", href: "/applications/utility-vegetation-management-equipment/", reason: "Translate clearance and access constraints into a complete attachment sequence." },
      { label: "Mechanical pruning", href: "/mechanical-pruning-guide/", reason: "Repeat profile work where cut quality and reach define acceptance." },
      { label: "Grapple saws", href: "/grapple-saw-guide/", reason: "Retain control of sections near structures, traffic and conductors." },
      { label: "AS 4373 guide", href: "/as-4373-mechanised-pruning/", reason: "Understand how mechanised work interacts with pruning specifications where referenced." },
    ],
    sections: [
      {
        title: "Convert the corridor standard into a machine envelope",
        paragraphs: [
          "Begin with the required clearance, retained vegetation, cut quality, access side and the asset owner’s procedure. Map conductor, rail, road, fence, pipeline and structure offsets against the carrier position available on site. Reach alone is not a machine envelope: confirm lift capacity at radius with attachment and retained material included, and identify the sectors where slope or track orientation reduces stability.",
          "Choose the cutting method by the required control. Mechanical pruners suit repeat profile work when material can fall into a managed zone. Grapple saws hold sections through the cut when placement matters. Tree shears suit whole-stem removal where the scope permits it. Mulchers treat accessible regrowth and floor material but introduce debris, continuous hydraulic load and a different residual finish. The contract condition decides among them.",
        ],
      },
      {
        title: "Make the access window the production unit",
        paragraphs: [
          "Corridor crews often work inside possessions, isolations or traffic-control windows that cost more than the cutting machine. Measure cleared and inspected metres per available window, not limbs per minute. Include setup, communication checks, carrier repositioning, material removal and reopening inspection. A slower head that reduces manual handling or produces a cleaner release can outperform a faster attachment whose debris stream delays the handback.",
          "Balance the fleet around that measure. Identify where branches, logs and mulch can be placed, which machine follows the cutter and how transport enters without blocking the work face. For remote sections, carry the wear and hose items that can stop the attachment. A missed courier or unavailable chain component can waste an entire possession, so parts planning is a production control rather than a workshop detail.",
        ],
      },
      {
        title: "Document a repeatable, auditable method",
        paragraphs: [
          "Specify attachment functions, hydraulic circuits, controls, guarding, cameras, communication and emergency recovery in the work method. Train operators on the approved carrier and configuration. Record representative section sizes, working radii and conditions during commissioning so planners understand where the method is productive and where another machine or manual technique remains necessary.",
          "After each program, retain corridor distance, access hours, fuel, wear, defects, downtime and rejected work. Separate delays caused by access, material handling and the attachment itself. This evidence improves tender rates and supports a defensible decision when changing head size, carrier or crew. It also prevents one exceptional open corridor from becoming the assumed production rate for constrained urban, rail or transmission work.",
        ],
      },
    ],
    checklist: ["Clearance and cut-quality specification", "Asset and exclusion-zone offsets", "Lift capacity at working radius", "Possession or traffic-control window", "Cut-material handling and handback", "Remote wear and recovery plan"],
  },
  {
    slug: "mining-energy-infrastructure",
    code: "I5",
    title: "Forestry attachments for mining, energy and infrastructure projects",
    shortTitle: "Mining and energy",
    eyebrow: "Mine sites · pipelines · transmission · renewables",
    description: "Select heavy-duty forestry attachments for remote infrastructure clearing where mobilisation, carrier protection and support resilience shape the rate.",
    image: "/images/field/forestry-mulcher-field.webp",
    imageAlt: "Excavator-mounted forestry mulcher processing dense vegetation on a remote Australian project corridor",
    outcome: "A supportable remote clearing system with realistic mobilisation, wear inventory and production assumptions for harsh project conditions.",
    evidence: "Before full mobilisation, complete a representative trial and log hydraulic temperature, working pressure, fuel, productive hours, wear consumption, service time, contamination and the finished project unit. Repeat the review after the first sustained shift because short demonstrations rarely expose cooling or debris-ingestion limits. Set minimum stock quantities from consumption and freight lead time, with reorder points that account for the next remote swing rather than the warehouse balance. Report hectares or corridor distance only after the specified finish and material placement are complete. This creates a rate that can absorb scheduled tooth changes, clean-down and field service, and gives the project team early evidence when different vegetation or ground conditions require a revised method or variation.",
    categories: ["forestry-mulcher-guide", "tree-shears-guide", "log-grab-guide", "stump-cutter-guide", "tillage-guide"],
    priorities: [
      { title: "Survive the duty cycle", body: "Cooling, guarding, contamination and continuous hydraulic load matter before brochure capacity." },
      { title: "Carry support with the fleet", body: "Remote downtime turns small hoses, teeth and seals into schedule-critical inventory." },
      { title: "Price every mobilisation", body: "Distance, permits, escort, wash-down and staged access can dominate the attachment rate." },
    ],
    recommended: [
      { label: "Land-clearing workflow", href: "/applications/land-clearing-attachments/", reason: "Plan felling, processing and handling across staged project fronts." },
      { label: "Forestry mulchers", href: "/forestry-mulcher-guide/", reason: "Treat broad accessible vegetation where processed material can remain." },
      { label: "Troubleshooting", href: "/troubleshooting/", reason: "Separate hydraulic, wear and technique problems before remote downtime grows." },
      { label: "Wear parts", href: "/wear-parts/", reason: "Build critical inventory and cost consumption into the project rate." },
    ],
    sections: [
      {
        title: "Engineer for sustained remote duty",
        paragraphs: [
          "Mine, pipeline, transmission and renewable projects combine long travel, abrasive contamination, high ambient temperatures and production pressure. Confirm sustained auxiliary flow at working pressure, return limits and cooling performance rather than relying on maximum pump output. Inspect guarding for the cab, belly, hoses, coolers and electrical components against the actual debris path. A standard excavator with a compatible hitch is not automatically a forestry-ready carrier.",
          "Sample vegetation and ground hazards across representative alignments. Rocks, wire, old fencing, dry hardwood and repeated side-slope operation change wear and production far more than the largest stem photograph. State the required residual finish and whether material remains, is windrowed or is loaded for removal. Those decisions determine rotor, tooth, shear and handling requirements and the support equipment that must travel with the attachment.",
        ],
      },
      {
        title: "Make resilience part of the mobilisation package",
        paragraphs: [
          "List components that can stop production and are practical to carry: teeth, blades, chains, bars, centre screws, holders, belts, hoses, couplers, seals and sensors. Confirm which repairs the site workshop can complete and which require a field technician. Record supplier response, freight cut-offs and critical lead times in the procurement evaluation. A lower purchase price is irrelevant when one unavailable part holds an excavator and crew idle for several shifts.",
          "Transport stands, lifting points and protected hose storage should be included from delivery. Define whether the attachment travels fitted or separately and calculate combined mass and dimensions with hitch, bracket and any counterweight. Remote projects frequently move between work fronts; each move consumes productive time and introduces contamination and damage risk. Standardise changeover and inspection so mobilisation does not reset the maintenance problem at every site.",
        ],
      },
      {
        title: "Build the rate from completed project units",
        paragraphs: [
          "Use cleared hectares, released corridor kilometres or processed tonnes after the specified finish is achieved. Separate cutting from access, spotting, environmental holds, refuelling, clean-down, wear service and material handling. Price mobilisation, camp, inductions, standby and demobilisation as visible lines. That structure protects margin when the principal stages work differently from the tender program or supplies several disconnected work fronts.",
          "Commission the attachment on the proposed carrier and retain temperatures, pressures, cycle times and wear observations from representative material. Review those against each swing before assuming a production rate. The data provides an early warning when cooling, contamination or technique is moving outside the planned envelope. It also gives the project team evidence for choosing a smaller mobile package or a larger production carrier on the next stage.",
        ],
      },
    ],
    checklist: ["Representative vegetation and contamination sample", "Sustained hydraulic and cooling assessment", "Forestry guarding package", "Critical remote spares inventory", "Combined transport mass and dimensions", "Mobilisation, standby and demobilisation lines"],
  },
  {
    slug: "agriculture-landcare",
    code: "I6",
    title: "Forestry machinery for agriculture and landcare",
    shortTitle: "Agriculture",
    eyebrow: "Farms · shelterbelts · orchards · rehabilitation",
    description: "Plan farm forestry attachments around selective clearing, timber recovery, soil protection and the productive use required after vegetation removal.",
    image: "/images/editorial/farm-clearing-ground-rehabilitation.webp",
    imageAlt: "Excavator preparing rehabilitated ground on a rolling Australian farm after selective vegetation clearing",
    outcome: "One carrier completing selective removal, material handling and ground preparation while protecting retained vegetation and soil condition.",
    evidence: "Measure each stage separately on the first farm blocks: controlled felling, sorting, residue processing, stump treatment, attachment changes and final ground preparation. Record completed area, stems or stumps, carrier hours, fuel, wear, timber recovered, material moved and any remediation caused by soil or access damage. Add the value of work completed inside the seasonal window rather than comparing machinery only on an hourly basis. A system that finishes fencing access before stock movements or prepares planting ground on time may justify ownership at lower annual hours, while an attachment used only for occasional open clearing may remain better hired. Review the figures after wet and dry conditions so the plan reflects the limits of the ground as well as the head.",
    categories: ["tree-shears-guide", "forestry-mulcher-guide", "log-grab-guide", "stump-grinder-guide", "tillage-guide"],
    priorities: [
      { title: "Work backwards from land use", body: "Pasture, fencing, orchard access and planting each require a different clearing finish." },
      { title: "Protect retained value", body: "Separate usable timber and preserve soil, drainage, shelter and retained trees." },
      { title: "Use one carrier well", body: "Safe, planned attachment changes can extend work from removal into drilling, compaction and rehabilitation." },
    ],
    recommended: [
      { label: "Farm rehabilitation", href: "/applications/farm-clearing-ground-rehabilitation/", reason: "Plan the sequence from selective removal to productive ground." },
      { label: "Tree shears", href: "/tree-shears-guide/", reason: "Control placement near fences, retained trees, sheds and stock areas." },
      { label: "Tillage tools", href: "/tillage-guide/", reason: "Continue into drilling, compaction and ground preparation with the same carrier." },
      { label: "Hire or buy", href: "/hire-vs-buy/", reason: "Test seasonal utilisation and the value of keeping capability on farm." },
    ],
    sections: [
      {
        title: "Define the productive condition after clearing",
        paragraphs: [
          "Begin with the next use of the ground: pasture, fencing, access, orchard renewal, shelterbelt replacement or planting. Mark retained trees, drainage, services, erosion-sensitive areas and stock infrastructure before machinery enters. The attachment should create that condition with the fewest handling steps. Felling vegetation without a plan for timber, roots, residue and ground restoration usually purchases only the first half of the job.",
          "Tree shears provide controlled placement and preserve stems that may become posts, firewood, habitat or saleable logs. Mulchers process regrowth in place and retain surface cover but remove timber recovery and may not leave a cultivation-ready finish. Grabs sort and load material after cutting. Stump grinders avoid excavation spoil around access and orchard work, while tillage attachments extend the same carrier into drilling and compaction.",
        ],
      },
      {
        title: "Match machinery to soil, access and seasonal use",
        paragraphs: [
          "Ground moisture, slope and soil structure decide when a tracked carrier can work without creating more rehabilitation than the clearing is worth. Establish wet-weather stops, travel paths and where material can be placed without redirecting runoff. A lighter carrier may protect access and mobilise between farm blocks more easily; a larger machine may reduce hours on one open paddock. Compare the whole program rather than one production pass.",
          "Agricultural use can be seasonal and intermittent. Add realistic annual hours across clearing, pruning, handling, drilling and compaction before choosing ownership. Include storage, hose protection, corrosion, operator familiarity after idle periods and the availability of a suitable carrier when the work window opens. Hiring or contracting can be cheaper at low utilisation, while ownership becomes valuable when timing and repeat attachment use prevent delayed planting or access work.",
        ],
      },
      {
        title: "Quote the stages and keep options visible",
        paragraphs: [
          "Separate vegetation removal, timber handling, residue processing, stump treatment and final ground preparation in the scope. State unit rates and assumptions for extra volume, difficult access and material removal. Do not subsidise the base rate with uncertain timber recovery. If saleable material exists, identify ownership, grading, stacking and transport explicitly so the recovery remains an upside rather than a disputed allowance.",
          "For attachment purchases, provide the carrier lift and hydraulic schedule and ask for a complete installed quotation with hitch, bracket, hoses, controls, stands, freight and commissioning. Confirm wear pricing and support access outside metropolitan areas. Record completed units, fuel, wear and changeover time after the first jobs. Those figures show whether the attachment is creating a useful year-round system or should remain a hired capability for occasional work.",
        ],
      },
    ],
    checklist: ["Intended land use after clearing", "Retained trees, fences and drainage", "Timber and residue destination", "Ground condition and wet-weather limits", "Annual hours across attachment tasks", "Regional parts and service access"],
  },
];

export function industryProfile(slug: string): IndustryProfile | undefined {
  return INDUSTRY_PROFILES.find((profile) => profile.slug === slug);
}
