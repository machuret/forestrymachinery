export interface Tutorial {
  slug: string;
  code: string;
  title: string;
  shortTitle: string;
  metaDescription: string;
  eyebrow: string;
  image: string;
  imageAlt: string;
  answer: string;
  steps: Array<{ title: string; body: string }>;
  sections: Array<{ title: string; paragraphs: string[] }>;
  mistakes: Array<{ title: string; body: string }>;
  checklist: string[];
  related: Array<{ href: string; label: string; why: string }>;
}

export const TUTORIALS: Tutorial[] = [
  {
    slug: "measure-excavator-auxiliary-hydraulic-flow",
    code: "T01",
    title: "How to measure excavator auxiliary hydraulic flow for an attachment",
    shortTitle: "Measure auxiliary flow",
    metaDescription: "Measure usable excavator auxiliary flow and pressure before buying a forestry attachment, including test conditions, heat and return restrictions.",
    eyebrow: "Hydraulic setup · measured data",
    image: "/images/field/troubleshooting-hydraulics.webp",
    imageAlt: "Technician checking hydraulic hoses and test equipment on an excavator attachment circuit",
    answer: "Use a calibrated flow meter and load valve at normal operating temperature, test the intended auxiliary circuit in both required directions, and record flow at the attachment manufacturer’s working pressure. The machine’s advertised pump output is not the number the attachment receives.",
    steps: [
      { title: "Collect the machine data", body: "Record model, serial range, operating configuration, coupler, auxiliary circuit type, published pump output and relief setting. Photograph the monitor settings and couplers. These details let the supplier distinguish a machine limitation from a setting, plumbing or test problem." },
      { title: "Warm the hydraulic system", body: "Bring the excavator to its normal working temperature using a safe operating cycle. Cold oil can make a marginal circuit appear stronger than it is. A forestry mulcher or grinder imposes sustained load, so a cold five-minute reading is not representative." },
      { title: "Connect a rated flow meter", body: "Use hoses, fittings and a meter rated above the machine’s maximum pressure and flow. Connect in the same path the attachment will use, including the intended quick couplers. Do not improvise a restriction or open a pressurised line to estimate flow." },
      { title: "Load the circuit progressively", body: "Run the engine at the operating speed intended for the attachment, then increase the load valve gradually. Record litres per minute at several pressures, particularly the attachment’s nominated working pressure. Stop if oil temperature, hose movement or noise becomes abnormal." },
      { title: "Check return and repeatability", body: "Measure return pressure where the attachment specifies a limit and repeat the test after sustained operation. Test reverse direction for double-acting functions. Save the result with date, oil temperature, engine speed, monitor setting and the person who performed the test." },
    ],
    sections: [
      { title: "Why published pump flow is not usable attachment flow", paragraphs: ["An excavator specification may state total pump output, combined pump flow or a maximum auxiliary setting. Steering, travel, boom functions, control valves, hose diameter and relief behaviour all sit between that number and the attachment motor. The useful figure is the stable flow available at the pressure the tool needs while the machine is hot.", "A flow-only reading is incomplete. A circuit delivering a high number at almost no resistance may collapse as the load valve approaches working pressure. Record a flow-and-pressure curve or at least several paired readings. That evidence lets an attachment supplier select a motor or model without treating the carrier class as a substitute for hydraulic data."] },
      { title: "Interpret the result conservatively", paragraphs: ["Do not order a tool whose minimum requirement equals the best momentary result. Allow for hot oil, filter condition, normal component wear and other functions the operator uses during a cycle. Continuous tools also need cooling capacity; stable flow for ten minutes does not prove the carrier can reject heat across a full summer shift.", "If the result is low, check monitor limits, circuit mode, coupler restriction, hose sizing, filters and relief settings with a competent technician. Increasing pressure or flow without confirming component ratings can damage the excavator. The goal is a verified operating envelope, not the largest number the system can produce briefly."] },
    ],
    mistakes: [
      { title: "Using total pump output", body: "That figure may combine pumps and does not describe the attachment port under load." },
      { title: "Testing cold oil", body: "The result can overstate sustained performance and hide a cooling problem." },
      { title: "Ignoring return pressure", body: "A restricted return creates heat, poor motor performance and seal failures." },
      { title: "Changing relief settings casually", body: "More pressure is not free capacity and may exceed the rating of hoses, valves or the attachment." },
    ],
    checklist: ["Machine model and serial range", "Circuit type and monitor mode", "Flow at working pressure", "Oil temperature during test", "Return pressure", "Engine speed", "Couplers used", "Technician and test date"],
    related: [
      { href: "/hydraulic-flow-calculator/", label: "Hydraulic flow calculator", why: "Compare measured results with every attachment category." },
      { href: "/compatibility/", label: "Carrier compatibility", why: "Combine hydraulics with weight and lift capacity." },
      { href: "/tutorials/identify-excavator-hydraulic-circuit/", label: "Identify the circuit", why: "Confirm what the plumbing can actually control." },
    ],
  },
  {
    slug: "identify-excavator-hydraulic-circuit",
    code: "T02",
    title: "How to identify an excavator hydraulic circuit before buying an attachment",
    shortTitle: "Identify the hydraulic circuit",
    metaDescription: "Identify hammer, double-acting, case-drain and dual auxiliary circuits before matching an excavator to forestry attachments and functions.",
    eyebrow: "Carrier inspection · circuit logic",
    image: "/images/field/troubleshooting-hydraulics.webp",
    imageAlt: "Excavator auxiliary hoses, couplers and hydraulic service points being inspected",
    answer: "Trace the hoses and controls rather than counting couplers. Confirm whether flow is one-way or reversible, whether a low-pressure case drain returns independently to tank, and whether two attachment functions can operate at the same time. Then verify the result against the machine manual and a functional test.",
    steps: [
      { title: "Read the machine configuration", body: "Use the model and serial number to obtain the correct hydraulic schematic or option list. Excavators of the same model can leave the factory with different auxiliary packages, and dealer-installed plumbing may not match the brochure for the base machine." },
      { title: "Trace each line", body: "Follow the boom and stick plumbing from the valve area to the couplers. Identify supply, return, drain and any second auxiliary pair. A small line is not automatically a case drain, and a capped line is not proof that its valve and controls are installed." },
      { title: "Test direction and control", body: "With a competent operator and safe connection, confirm which pedal, joystick button or monitor mode activates each port. Establish whether the circuit latches, reverses and proportions flow. Record whether another function can be used simultaneously." },
      { title: "Verify the drain path", body: "A case drain should provide a low-restriction path to tank within the attachment manufacturer’s back-pressure limit. Confirm where it terminates and measure pressure if a piston motor depends on it. Never assume the normal return line performs the same function." },
      { title: "Create a circuit schedule", body: "Write one page listing each port, coupler, control, direction, flow setting, pressure setting and drain limit. Give it to attachment suppliers with the carrier data so quotations are based on the installed machine rather than a generic tonne class." },
    ],
    sections: [
      { title: "The four arrangements buyers encounter", paragraphs: ["A one-way hammer circuit powers tools that require pressure in one direction and return oil in the other. A double-acting circuit reverses supply and return for cylinders or bidirectional motors. A case drain is a separate low-pressure leakage path for some motors. A dual auxiliary setup provides independent control for functions such as grip, saw and rotation.", "Coupler count can mislead. A machine may have two large couplers for one reversible circuit, a small drain, and electrical controls that change behaviour by monitor mode. Conversely, hoses may be fitted along the boom without the valve section or software required to operate them. Function, not appearance, defines the circuit."] },
      { title: "Translate attachment functions into circuits", paragraphs: ["List every action the head performs and which must occur together. A basic shear may need one double-acting function. A grinder may need a supply, unrestricted return and case drain. A grapple saw can require independent grip, saw and rotation so the operator maintains control of a section while cutting and placing it.", "If functions are combined through diverter valves, ask what the operator loses during switching and how the safe state is maintained. A technically operable installation can still produce a slow or awkward cycle. The correct match covers simultaneous control, return limits and cooling as well as nominal litres per minute."] },
    ],
    mistakes: [
      { title: "Counting hoses", body: "Hose quantity does not reveal direction, valve control or the path back to tank." },
      { title: "Calling every small line a drain", body: "Pilot, leakage and auxiliary lines serve different purposes and pressure ratings." },
      { title: "Ignoring simultaneous functions", body: "A diverter may make every function possible but prevent the productive sequence." },
      { title: "Trusting the model brochure", body: "Optional and dealer-installed circuits vary within the same excavator model." },
    ],
    checklist: ["Correct hydraulic schematic", "Supply and return ports", "Reversible flow confirmed", "Case-drain path", "Second auxiliary circuit", "Control inputs", "Monitor modes", "Simultaneous functions"],
    related: [
      { href: "/tutorials/measure-excavator-auxiliary-hydraulic-flow/", label: "Measure auxiliary flow", why: "Put verified numbers against the identified circuit." },
      { href: "/tutorials/set-up-hydraulic-case-drain/", label: "Set up a case drain", why: "Protect motors that require an independent drain path." },
      { href: "/grapple-saw-guide/", label: "Grapple saw guide", why: "See why multi-function heads expose circuit limitations." },
    ],
  },
  {
    slug: "size-forestry-attachment-to-excavator",
    code: "T03",
    title: "How to size a forestry attachment to an excavator",
    shortTitle: "Size an attachment to a carrier",
    metaDescription: "Size forestry attachments using excavator lift capacity, working radius, hydraulics, coupler mass, guarding and the material being handled.",
    eyebrow: "Carrier matching · lift and stability",
    image: "/images/field/tree-shear-field.webp",
    imageAlt: "Forestry excavator holding a cut tree section with an attachment at working radius",
    answer: "Treat published carrier tonnes as an initial filter. The final match requires attachment mass with bracket and rotator, excavator lift capacity at the actual radius and sector, usable hydraulic flow and pressure, transport configuration, guarding, and the maximum material the head will retain.",
    steps: [
      { title: "Define the heaviest working condition", body: "State maximum representative stem or section size, density, working radius, slope, reach direction and whether the attachment holds material after cutting. A head that is stable beside the tracks may not be stable over the side at full reach." },
      { title: "Build the installed mass", body: "Add the attachment, hitch, bracket, rotator, pins, hoses, options and any retained material. Use ordered—not catalogue-minimum—mass. Compare that complete load with the lift chart for the boom, arm, blade and counterweight configuration actually fitted." },
      { title: "Check hydraulic compatibility", body: "Match measured flow at working pressure, return limits, drain requirement, circuit direction and simultaneous functions. Confirm sustained cooling for grinders and mulchers. A suitable lift result does not compensate for a circuit that cannot power or control the head." },
      { title: "Review machine protection", body: "Assess cab, windscreen, roof, belly, hose, cooler and lighting protection against the debris path. Include visibility and cameras. Forestry duty changes the risk profile of a standard excavator even when attachment mass and hydraulics are acceptable." },
      { title: "Prove it on representative work", body: "Commission the complete system on realistic material, at the intended radius and operating temperature. Record stability, cycle time, pressure, oil temperature and control behaviour. Set a documented operating envelope rather than leaving limits to operator memory." },
    ],
    sections: [
      { title: "Why tonne-class matching fails", paragraphs: ["A carrier range such as ‘13 to 20 tonnes’ hides boom length, undercarriage, counterweight, hitch, blade, lift sector and hydraulic option. Two excavators with the same operating mass can carry very different loads at six metres. Carrier tonnes remain useful for shortlisting, but they cannot approve an installed combination.", "The risk grows when the attachment retains material. A shear holding a hardwood stem or a grapple saw holding a section adds load after the cut, often at an unfavourable radius. Estimate retained mass conservatively and define limits the operator can recognise in the field, such as diameter, length and reach position."] },
      { title: "Match transport and utilisation as well", paragraphs: ["A technically compatible head can make the carrier impractical to move. Calculate transport mass and dimensions with guarding, coupler, counterweight and the attachment carried in its approved position. Check whether the combination changes float, permit, escort or unloading requirements across the sites you actually serve.", "The best match is the system that completes profitable work, not the largest head the machine can survive. A smaller attachment may cycle faster, preserve stability and keep the carrier useful for other civil or farm tasks. Compare completed units and mobilisation across the annual program before selecting by maximum capacity."] },
    ],
    mistakes: [
      { title: "Using attachment dry mass", body: "The installed bracket, rotator, hitch and hoses can materially change the lift calculation." },
      { title: "Reading one lift-chart cell", body: "Radius, height, sector and undercarriage configuration all change capacity." },
      { title: "Ignoring retained material", body: "The cut section may weigh more than the attachment and moves the combined centre of gravity." },
      { title: "Treating guarding as optional", body: "A compatible head can expose an unprotected carrier to debris it was not built to manage." },
    ],
    checklist: ["Installed attachment mass", "Retained material estimate", "Lift chart at radius", "Working sector and slope", "Measured flow and pressure", "Return and drain limits", "Guarding package", "Transport mass"],
    related: [
      { href: "/compatibility/", label: "Carrier size guide", why: "Shortlist categories by excavator class." },
      { href: "/tutorials/measure-excavator-auxiliary-hydraulic-flow/", label: "Measure hydraulic flow", why: "Replace brochure assumptions with tested output." },
      { href: "/costs/", label: "Attachment costs", why: "Include installation and carrier changes in the comparison." },
    ],
  },
  {
    slug: "install-commission-forestry-attachment",
    code: "T04",
    title: "How to install and commission a forestry attachment",
    shortTitle: "Install and commission an attachment",
    metaDescription: "Commission an excavator forestry attachment safely: verify bracket, hoses, controls, pressures, guarding, heat, operator training and baseline records.",
    eyebrow: "Delivery · commissioning record",
    image: "/images/field/costs-yard.webp",
    imageAlt: "Forestry attachments and excavators prepared in a machinery yard for installation and commissioning",
    answer: "Commission the ordered attachment as one installed system. Verify identity and mass, mechanical fit, hose routing, hydraulic settings, control logic, guarding and transport before loading it on representative material. Record baseline pressures, temperatures, cycle times and operator limits for future troubleshooting.",
    steps: [
      { title: "Inspect delivery against the order", body: "Confirm model, serial number, bracket, hitch, rotator, options, hoses, couplers, guards, stands, manuals and initial wear parts. Photograph transport damage and record the complete installed mass. Resolve discrepancies before fabrication or use makes responsibility unclear." },
      { title: "Complete the mechanical installation", body: "Check pin and hitch engagement, bracket alignment, clearances through the full boom and tilt range, locking devices and rated lifting points. Confirm the attachment can be stored securely and connected without placing people beneath an unsupported head." },
      { title: "Plumb and protect the hoses", body: "Use the specified supply, return and drain ports. Route hoses for full articulation without tension, crushing, abrasion or contact with hot components. Fit restraints where a failed hose could enter the cab or moving parts, then mark connections for repeatable changeover." },
      { title: "Set controls and hydraulic limits", body: "Load the correct monitor mode, flow, pressure and direction settings. Test each function at low speed, confirm safe default states and verify simultaneous functions. Measure return or case-drain pressure where specified instead of treating leakage as proof of a clear path." },
      { title: "Run a staged working test", body: "Warm the carrier, begin with light representative material and increase load while monitoring noise, vibration, leaks, temperatures and stability. Record cycle times and settings. Train operators on startup, shutdown, inspection, blocked-tool recovery and the approved operating envelope." },
    ],
    sections: [
      { title: "Create a baseline before production changes the machine", paragraphs: ["Commissioning is the only point at which every component is new, settings are known and wear has not altered performance. Record engine speed, monitor mode, flow, working pressure, return pressure, oil temperature, cycle time and any controller values. Photograph hose routing, guards, labels and wear components.", "When production later falls, that baseline separates a hydraulic change from normal wear or different material. Without it, troubleshooting begins with opinion. Keep the record with the carrier and attachment serial numbers, supplier sign-off, training attendance and the exact configuration used during the test."] },
      { title: "Make changeover and transport part of commissioning", paragraphs: ["If the attachment will be changed in the field, perform the complete process using the supplied stand and normal crew. Check depressurisation, contamination control, hose caps, coupler identification and storage. Record the realistic time and any lifting equipment required so estimators do not treat changeover as free.", "Load the combination onto the intended transport and confirm restraint points, height, width, mass distribution and whether the head travels fitted or separately. A system is not commissioned for commercial use until the contractor can move, connect, operate, disconnect and store it safely and repeatably."] },
    ],
    mistakes: [
      { title: "Testing only in the yard", body: "Free-running functions do not prove stability, heat rejection or performance under load." },
      { title: "Accepting unlabelled hoses", body: "Incorrect reconnection can reverse functions or place motor leakage onto a pressurised return." },
      { title: "Skipping installed mass", body: "The delivered configuration may differ materially from the brochure weight used during selection." },
      { title: "No baseline record", body: "Later faults become arguments because nobody can show how the new system performed." },
    ],
    checklist: ["Model and serial confirmed", "Installed mass recorded", "Hitch lock verified", "Hose sweep checked", "Hydraulic settings saved", "Guarding signed off", "Working test completed", "Operators trained"],
    related: [
      { href: "/tutorials/size-forestry-attachment-to-excavator/", label: "Size the attachment", why: "Verify the selection assumptions before installation." },
      { href: "/troubleshooting/", label: "Troubleshooting guide", why: "Use the baseline when output or heat changes." },
      { href: "/support-and-parts-australia/", label: "Parts and support", why: "Set responsibilities and response paths before production." },
    ],
  },
  {
    slug: "set-up-hydraulic-case-drain",
    code: "T05",
    title: "How to set up a hydraulic case drain for an excavator attachment",
    shortTitle: "Set up a case drain",
    metaDescription: "Understand, route and verify a low-pressure hydraulic case drain for forestry attachment motors without confusing it with the normal return line.",
    eyebrow: "Motor protection · low-pressure return",
    image: "/images/field/stump-grinder-field.webp",
    imageAlt: "Excavator-mounted stump grinder with hydraulic supply, return and case-drain hoses visible",
    answer: "Route the motor’s case-drain port through a dedicated, correctly sized, low-restriction line to the approved tank connection. Confirm the attachment manufacturer’s maximum drain pressure and measure it at working temperature. Never cap the port or tee it casually into a pressurised return.",
    steps: [
      { title: "Confirm that the motor requires it", body: "Use the attachment manual and motor specification. Identify the case-drain port and maximum permitted pressure. Some motors have multiple drain ports for mounting orientation; the correct connection prevents the housing from trapping leakage oil." },
      { title: "Identify the carrier tank connection", body: "Find the excavator manufacturer’s approved low-pressure return point. Confirm filtration requirements and whether the port is direct to tank or passes through components that add restriction. Do not select a convenient small coupler by appearance." },
      { title: "Size and route the line", body: "Use the required hose bore and pressure rating, minimising restrictive fittings, sharp bends and long small-bore runs. Route for full attachment articulation without crushing or snagging and protect the coupler from contamination during changeover." },
      { title: "Prevent incorrect connection", body: "Use distinct couplers, colour coding and durable labels so the drain cannot be confused with pilot or pressure lines. Document the connection order. Where practical, make the main attachment functions impossible to connect while the drain remains capped." },
      { title: "Measure drain pressure hot", body: "Install a suitable gauge at the specified point and test through the normal operating range after the oil reaches working temperature. Record pressure at idle, normal load and any high-load condition, then retain the result as part of commissioning." },
    ],
    sections: [
      { title: "What the case drain actually does", paragraphs: ["Hydraulic motors leak a controlled amount of oil internally for lubrication and component clearance. That oil collects in the housing and needs a low-pressure path back to tank. If housing pressure rises beyond the seal design, leakage becomes failure: shaft seals can push out, oil can contaminate the attachment and the motor may be damaged.", "The normal motor return carries working flow and can experience pressure from valves, couplers, filters and hose restriction. A case drain carries much less flow but has a stricter pressure limit. The two lines are therefore not interchangeable merely because both ultimately return oil to the reservoir."] },
      { title: "Treat drain condition as a diagnostic signal", paragraphs: ["A rising drain flow can indicate internal motor wear, while rising drain pressure can indicate a restriction downstream. Establishing a new-machine baseline gives technicians something to compare with later. Record the test method and temperature because cold oil and different gauge locations can change the number.", "If seals repeatedly fail, do not simply replace them. Verify the drain is connected, unobstructed and within the motor limit across the full cycle. Check couplers, crushed hoses, tank ports and any shared return arrangement. Repeated seal failure is often a circuit symptom rather than a defective seal."] },
    ],
    mistakes: [
      { title: "Capping the port", body: "Internal leakage then pressurises the motor housing and attacks the shaft seal." },
      { title: "Teeing into the main return", body: "Return-line pressure spikes can be transmitted directly into the motor case." },
      { title: "Using undersized couplers", body: "A small restriction is enough to exceed a low case-pressure limit when oil is hot." },
      { title: "Testing only at idle", body: "The damaging condition may appear only under full load and normal operating temperature." },
    ],
    checklist: ["Motor drain requirement", "Maximum drain pressure", "Approved tank port", "Hose bore and length", "Distinct coupler", "Full articulation clearance", "Hot pressure test", "Baseline recorded"],
    related: [
      { href: "/stump-grinder-guide/", label: "Stump grinder guide", why: "See where piston motors make drainage critical." },
      { href: "/tutorials/identify-excavator-hydraulic-circuit/", label: "Identify the circuit", why: "Distinguish the drain from normal auxiliary plumbing." },
      { href: "/troubleshooting/", label: "Hydraulic troubleshooting", why: "Diagnose heat, leaks and lost performance systematically." },
    ],
  },
  {
    slug: "inspect-used-forestry-attachment",
    code: "T06",
    title: "How to inspect a used forestry attachment before buying",
    shortTitle: "Inspect a used attachment",
    metaDescription: "Inspect a used forestry attachment for structural repairs, wear, motor condition, fitment, missing controls, service history and parts risk.",
    eyebrow: "Used equipment · condition assessment",
    image: "/images/field/wear-parts-workbench.webp",
    imageAlt: "Forestry attachment wear parts, tools and components arranged on a workshop bench for inspection",
    answer: "Identify the exact model and serial first, then inspect structure, pins, bearings, wear system, hydraulics, controls and supplied fitment as separate cost lines. Test the head hot on representative material and price every missing bracket, hose, controller and overdue wear item before comparing it with a complete new quotation.",
    steps: [
      { title: "Verify identity and ownership", body: "Record make, model, serial, year, seller details and proof of ownership. Obtain manuals, original specification, service records and the carrier it ran on. Confirm the serial with the distributor and ask whether parts and technical documents remain available." },
      { title: "Inspect the load structure", body: "Clean enough material away to see bracket welds, pin bosses, main frame, guards and high-stress transitions. Look for cracks, distortion, fresh paint, non-standard plating and elongated holes. Ask who performed repairs and whether engineering or weld records exist." },
      { title: "Measure wear rather than viewing it", body: "Compare teeth, blades, chains, bars, holders, bushes, pins and jaw edges with service limits. Measure play and remaining dimensions where possible. Build a priced list of immediate and near-term replacements instead of accepting ‘plenty of life’ as a condition report." },
      { title: "Test hydraulics and controls", body: "Check hoses, couplers, cylinders, motor leakage, rotator play, valve blocks, wiring, sensors and controllers. Run every function from cold to operating temperature under realistic load. Record pressure, drain condition, unusual noise and whether functions can operate together." },
      { title: "Price the complete installed package", body: "List bracket changes, hitch work, hoses, couplers, case drain, controller, wiring, guarding, freight, commissioning and tax. Add the first wear service and a contingency for hidden defects. Compare that delivered-and-working figure with a new package carrying warranty." },
    ],
    sections: [
      { title: "Read the machine’s previous job in its wear", paragraphs: ["Wear patterns reveal operation. Uneven rotor or blade wear may indicate imbalance, ground contact or damaged holders. Polished hose sections show movement against the boom. Distorted guards can indicate debris impact, while play concentrated on one side of a jaw can point to repeated side loading.", "Ask what material, soil and annual hours the attachment saw, then see whether the condition supports the story. Meter hours on a carrier do not prove attachment hours, and fresh paint does not restore dimensions. Photographs from earlier ownership and parts invoices are more valuable than an unsupported estimate."] },
      { title: "Know when inspection needs a specialist", paragraphs: ["Oil leakage, structural repairs, rotor vibration, unusual motor noise, electronic faults and unknown control systems justify an independent inspection. A specialist can pressure-test cylinders, measure case leakage, assess weld repair and confirm whether software or proprietary controls can be supported on the intended carrier.", "Walk away when identity is unclear, critical parts are unavailable, major repairs cannot be documented or the seller will not permit a loaded test. A low purchase price cannot compensate for an attachment that cannot be fitted, supported or trusted under forestry loads."] },
    ],
    mistakes: [
      { title: "Valuing the bracket as universal", body: "Machine-specific fitment can turn the supplied bracket into scrap rather than an asset." },
      { title: "Testing functions without load", body: "Weak motors, slipping drives and heat problems may not appear while free-running." },
      { title: "Ignoring controllers and wiring", body: "A missing proprietary control package can be expensive or impossible to replace." },
      { title: "Comparing purchase prices", body: "The useful comparison is delivered, repaired, installed and working on your carrier." },
    ],
    checklist: ["Model and serial verified", "Service records", "Structural repair history", "Measured pin and bush play", "Wear parts priced", "Loaded hot test", "Controls included", "Fitment conversion cost"],
    related: [
      { href: "/wear-parts/", label: "Wear-parts guide", why: "Identify the components that turn condition into operating cost." },
      { href: "/costs/", label: "Attachment costs", why: "Compare used and new as complete installed systems." },
      { href: "/tutorials/install-commission-forestry-attachment/", label: "Commission the attachment", why: "Create a baseline after purchase and repair." },
    ],
  },
  {
    slug: "calculate-forestry-attachment-tender-rate",
    code: "T07",
    title: "How to calculate a forestry attachment tender rate",
    shortTitle: "Calculate a tender rate",
    metaDescription: "Build a forestry attachment tender rate from production, carrier and labour cost, wear, mobilisation, downtime, overhead and margin.",
    eyebrow: "Estimating · production evidence",
    image: "/images/field/costs-yard.webp",
    imageAlt: "Forestry machinery fleet in an Australian equipment yard representing ownership and tender costs",
    answer: "Choose the unit the client accepts, estimate completed units per productive hour from comparable work, calculate the full hourly cost of carrier, attachment and crew, then add mobilisation, wear variability, downtime, overhead, risk and margin explicitly. Do not turn a demonstration cycle into an all-in hectare or stump rate.",
    steps: [
      { title: "Define the accepted unit", body: "Use completed hectares, reopened corridor metres, finished stumps, controlled trees or processed tonnes—whatever the client measures after the required finish. Write inclusions for debris, stacking, disposal, clean-up and inspection so production is not counted before the scope is complete." },
      { title: "Set a production range", body: "Use records from comparable vegetation, diameter, density, slope, access and finish. Separate productive attachment time from travel, setup, changeover, servicing, material handling and delays. Estimate low, expected and high output rather than one precise number." },
      { title: "Build the hourly system cost", body: "Include carrier ownership or hire, attachment capital, fuel, operator, supporting crew, transport equipment, routine service, insurance and supervision. Treat the carrier and attachment as one working system and include the plant that prevents the cutting head from waiting." },
      { title: "Add wear and mobilisation separately", body: "Price teeth, blades, chains, holders and hoses from realistic consumption in similar material. Add float, permits, travel, setup, wash-down, accommodation and minimum charges as visible lines. Do not hide fixed mobilisation inside an optimistic production rate." },
      { title: "Apply risk, overhead and margin", body: "State assumptions and add contingency for unknown material, contamination, weather, access or client sequencing. Apply business overhead and required margin after direct costs. Test the result against the low-production case before submitting the commercial rate." },
    ],
    sections: [
      { title: "Separate productive hours from paid hours", paragraphs: ["A ten-hour shift rarely provides ten attachment hours. Pre-starts, travel, traffic control, exclusions, refuelling, tooth changes, hose repairs, attachment changes and material handling consume paid time. Estimate utilisation inside the shift and use it to spread daily cost across the units actually completed.", "This distinction prevents a common error: dividing an hourly plant rate by the best observed production. The numerator must include the whole working system and the denominator must be accepted production across the same time period. Anything else produces a rate that fails as soon as the site behaves normally."] },
      { title: "Use assumptions as commercial controls", paragraphs: ["List vegetation density, diameter range, terrain, access, contamination, material destination, working hours and client-supplied controls in the tender. Provide rates or a variation method for conditions outside that baseline. Clear assumptions make the price comparable and provide evidence when the work changes.", "After award, record output, paid hours, wear and delays by work type. Compare actual gross margin with the estimate each week and update future rates. The aim is not to defend one perfect spreadsheet; it is to build a feedback loop in which every completed project improves the next production assumption."] },
    ],
    mistakes: [
      { title: "Using brochure production", body: "Demonstration material and continuous open access rarely represent a tender site." },
      { title: "Hiding mobilisation", body: "Small staged parcels then become structurally unprofitable even when the hourly method works." },
      { title: "Averaging wear across jobs", body: "Rock, sand, wire and hardwood can move consumable cost dramatically." },
      { title: "Adding margin before risk", body: "Contingency, overhead and profit solve different commercial problems and should remain visible." },
    ],
    checklist: ["Accepted production unit", "Required finished condition", "Productive-hour ratio", "Carrier and attachment cost", "Crew and support plant", "Wear allowance", "Mobilisation", "Risk, overhead and margin"],
    related: [
      { href: "/cost-per-hectare-calculator/", label: "Cost per hectare calculator", why: "Model area-clearing production and margin." },
      { href: "/cost-per-stump-calculator/", label: "Cost per stump calculator", why: "Resolve grinding economics from real cycle data." },
      { href: "/costs/", label: "Ownership cost guide", why: "Capture the cost lines behind the hourly system." },
    ],
  },
  {
    slug: "build-forestry-attachment-wear-parts-kit",
    code: "T08",
    title: "How to build a forestry attachment wear-parts and field repair kit",
    shortTitle: "Build a wear-parts kit",
    metaDescription: "Build a practical forestry attachment spares kit using failure consequence, consumption, supplier lead time, tools and remote support risk.",
    eyebrow: "Uptime · field inventory",
    image: "/images/field/wear-parts-workbench.webp",
    imageAlt: "Forestry attachment wear parts, hand tools and service items organised on a workshop bench",
    answer: "Stock parts by failure consequence, consumption rate and replenishment lead time—not by what is cheapest. Carry enough teeth, blades, chains, hoses, couplers, fasteners and service tools to protect the next work period, with every item matched to the exact attachment serial range and a reorder point recorded.",
    steps: [
      { title: "Map stoppage components", body: "Walk through the attachment and list every item whose failure stops safe production: cutting parts, holders, drive components, hoses, couplers, seals, sensors, fasteners and specialised tools. Separate stop-work parts from items that can wait for planned service." },
      { title: "Use consumption and lead time", body: "Review invoices and service records to calculate use per productive hour or completed unit. Ask the supplier what is held locally and what must be imported. Set stock to cover expected use across replenishment time plus a sensible variability allowance." },
      { title: "Build job-specific modules", body: "Create labelled kits for cutting system, hydraulics, fasteners and daily service rather than one mixed toolbox. Add only tools and lifting equipment the crew is trained and authorised to use. Include clean caps, plugs and containment for hydraulic work." },
      { title: "Record compatibility", body: "Label each part with manufacturer number, description, attachment model and applicable serial range. Photograph distinctive items and store the same list digitally. Similar teeth, chains and seals can differ enough to waste a remote mobilisation." },
      { title: "Set inspection and reorder rules", body: "Nominate minimum quantities, count the kit at pre-start or weekly intervals and record consumption against the job. Quarantine damaged or contaminated parts. Reorder when the minimum is reached, not when the last usable item is fitted." },
    ],
    sections: [
      { title: "Match inventory to where the machine works", paragraphs: ["A metropolitan contractor with same-day supplier access needs a different kit from a remote corridor crew. Calculate the cost of one stopped shift, including carrier, operator, support plant, traffic control or possession time. That consequence justifies stock more reliably than the purchase price of the part.", "For remote work, include transport damage, contamination and the chance of several failures before replenishment arrives. For urban work, focus on high-consumption items and the parts a courier cannot deliver within the job window. Review the kit whenever the attachment, carrier or work material changes."] },
      { title: "Keep repair capability inside safe limits", paragraphs: ["Carrying a part does not authorise the crew to fit it. Define which tasks operators can perform, which need a fitter and which require supplier or hydraulic specialist support. Include isolation, stored-energy, lifting and hot-work requirements in the maintenance plan.", "A field kit should shorten a controlled repair, not encourage improvisation. Keep manuals, torque values, inspection limits and supplier contacts available offline. After any repair, record the fault, part, cause, hours, technician and follow-up inspection so repeated consumption becomes a maintenance signal rather than normalised downtime."] },
    ],
    mistakes: [
      { title: "Buying one of everything", body: "Inventory grows without protecting the failures most likely to stop production." },
      { title: "No serial-range check", body: "A part number from a similar model may fit poorly or not at all when the machine is remote." },
      { title: "Stock without tools", body: "A spare that needs an unavailable puller, press or lifting device does not restore production." },
      { title: "No reorder point", body: "The kit appears complete until the final part is used at the start of another job." },
    ],
    checklist: ["Stop-work parts mapped", "Consumption history", "Supplier lead times", "Serial compatibility", "Required tools", "Clean hydraulic supplies", "Minimum quantities", "Inspection and reorder owner"],
    related: [
      { href: "/wear-parts/", label: "Wear-parts guide", why: "Understand how wear systems change the operating budget." },
      { href: "/support-and-parts-australia/", label: "Australian support guide", why: "Evaluate local stock and field response before purchase." },
      { href: "/troubleshooting/", label: "Troubleshooting guide", why: "Separate normal wear from setup and hydraulic faults." },
    ],
  },
];

export function tutorial(slug: string): Tutorial | undefined {
  return TUTORIALS.find((item) => item.slug === slug);
}
