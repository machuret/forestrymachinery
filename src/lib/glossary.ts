/**
 * Working vocabulary of the category. Terms are auto-linked on first use inside
 * every guide body, so internal linking scales without hand-editing markdown.
 */

export interface Term {
  id: string;
  term: string;
  /** Other surface forms that should link to the same entry. */
  aliases?: string[];
  group: "Hydraulics" | "Carrier" | "Attachment" | "Work" | "Compliance" | "Commercial";
  definition: string;
  /** Guide slug where the term is explained in depth. */
  seeAlso?: string;
}

export const TERMS: Term[] = [
  {
    id: "auxiliary-flow",
    term: "auxiliary flow",
    aliases: ["auxiliary hydraulic flow"],
    group: "Hydraulics",
    definition:
      "The oil volume, in litres per minute, that a carrier can send to an attachment circuit. It sets how fast a rotor, saw or motor will actually run. Read it off the machine plate, not the brochure — the second of the three numbers every quote needs.",
    seeAlso: "forestry-machinery-guide",
  },
  {
    id: "working-pressure",
    term: "working pressure",
    group: "Hydraulics",
    definition:
      "Available pressure at the attachment circuit, in bar. Flow sets speed; pressure sets the force the tool can develop. An attachment starved of pressure stalls in hard timber even when flow is correct.",
  },
  {
    id: "hammer-line",
    term: "hammer line",
    aliases: ["single-acting", "single-acting hydraulic line", "single-acting line"],
    group: "Hydraulics",
    definition:
      "The simplest attachment circuit: oil out, oil back, one direction. Named for breakers, which use it. Most mulchers and trimmers run this way.",
  },
  {
    id: "case-drain",
    term: "case drain",
    aliases: ["drainage line", "drain line"],
    group: "Hydraulics",
    definition:
      "A third, low-pressure return line that takes internal leakage from a piston motor back to tank. Piston motors usually need one. Running without it builds case pressure and kills motor seals, often inside a season.",
  },
  {
    id: "double-acting",
    term: "double-acting",
    aliases: ["double-acting circuit", "double-acting lines"],
    group: "Hydraulics",
    definition:
      "A circuit that can drive a cylinder both ways, so the tool can open and close under power. Grabs, shears and pruners need it.",
  },
  {
    id: "dual-circuit",
    term: "dual circuit",
    group: "Hydraulics",
    definition:
      "Two independent supplies to one attachment — typically a saw line plus a separate grapple and rotation line, valve-controlled. Grapple saws are the common case.",
    seeAlso: "grapple-saw-guide",
  },
  {
    id: "valve-block",
    term: "valve block",
    group: "Hydraulics",
    definition:
      "A manifold on the attachment that splits and regulates incoming oil between functions, and sets the pressure and flow each function sees.",
  },
  {
    id: "piston-motor",
    term: "piston motor",
    group: "Hydraulics",
    definition:
      "A high-efficiency hydraulic motor used where torque and duty are high, such as mulcher and grinder drives. Almost always requires a case drain.",
  },
  {
    id: "carrier",
    term: "carrier",
    aliases: ["carrier machine"],
    group: "Carrier",
    definition:
      "The excavator, skid steer, backhoe or telehandler the attachment mounts to. Attachment selection starts at the carrier, not the catalogue.",
  },
  {
    id: "operating-weight",
    term: "operating weight",
    group: "Carrier",
    definition:
      "The carrier's working mass in tonnes, and the first of the three numbers a quote needs. Every serious forestry attachment publishes an operating machine range, and those ranges are narrow for a reason.",
  },
  {
    id: "lift-capacity-at-radius",
    term: "lift capacity at working radius",
    aliases: ["lift capacity at radius"],
    group: "Carrier",
    definition:
      "What the machine can safely hold at the reach it will actually work at. This, not machine weight alone, decides which model inside a published range is correct.",
  },
  {
    id: "quick-hitch",
    term: "quick hitch",
    group: "Compliance",
    definition:
      "The coupler between stick and attachment. Should comply with AS 4772-2008 or an equivalent such as ISO 13031-2016, which requires a safety system so the attachment cannot unintentionally disconnect if primary retention fails.",
  },
  {
    id: "turnkey-kit",
    term: "turnkey kit",
    group: "Commercial",
    definition:
      "A machine-specific mounting bracket plus hose kit, supplied with the attachment. Costs more up front and is nearly always worth it — a workshop bracket that does not sit right costs more in cracked steel than the kit saved.",
  },
  {
    id: "wear-parts",
    term: "wear parts",
    aliases: ["wear part"],
    group: "Commercial",
    definition:
      "Teeth, blades, chains, bars and tips: the dominant running cost in most forestry categories, and the one buyers price last. Ask for wear-part pricing and lead time before signing, not after.",
  },
  {
    id: "rotator",
    term: "rotator",
    group: "Attachment",
    definition:
      "A hydraulic unit giving the attachment continuous 360° rotation, so the operator can align a grapple, saw or shear without repositioning the machine.",
  },
  {
    id: "tilt-rotator",
    term: "tilt rotator",
    group: "Attachment",
    definition:
      "A rotator that also tilts the attachment off the boom axis, adding sideways articulation. Expensive, and transformative on awkward ground.",
  },
  {
    id: "hardox",
    term: "Hardox",
    group: "Attachment",
    definition:
      "A family of abrasion-resistant steels used for tines, blades and wear plates where impact and scraping would deform mild steel.",
  },
  {
    id: "tine",
    term: "tine",
    aliases: ["tines"],
    group: "Attachment",
    definition:
      "One finger of a grapple. More tines give better retention on irregular and bulky material; fewer tines spill brash.",
    seeAlso: "log-grab-guide",
  },
  {
    id: "rotor",
    term: "rotor",
    group: "Attachment",
    definition:
      "The spinning drum inside a mulcher that carries the cutting tools. Rotor choice — fixed tooth versus swinging hammer, open tip versus closed tip — is the real decision, not the model number.",
    seeAlso: "forestry-mulcher-guide",
  },
  {
    id: "chain-pitch",
    term: "chain pitch",
    group: "Attachment",
    definition:
      "The spacing of drive links on a saw chain, quoted in inches. Forestry grapple saws typically run 0.404″ or 3/4″. Pitch determines which chain and bar will fit.",
    seeAlso: "grapple-saw-guide",
  },
  {
    id: "cassette",
    term: "saw cassette",
    aliases: ["cassettes", "cassette"],
    group: "Attachment",
    definition:
      "The removable saw unit inside a grapple saw, carrying the bar, chain and drive. Cassette choice sets cutting capacity and consumable cost.",
    seeAlso: "grapple-saw-guide",
  },
  {
    id: "brash",
    term: "brash",
    group: "Work",
    definition:
      "Branch and top material left after felling. Bulky, irregular and low value, which is why it favours a many-tined grapple over a log grapple.",
  },
  {
    id: "biomass",
    term: "biomass",
    group: "Work",
    definition:
      "Woody material destined for chip, fuel or fibre rather than timber. Changes the economics: the cost driver becomes handling and transport volume, not stem value.",
  },
  {
    id: "spoil",
    term: "spoil",
    group: "Work",
    definition:
      "Excavated material left behind by a removal method. The presence or absence of spoil is often what decides grinding versus extraction on an urban site.",
  },
  {
    id: "stem-density",
    term: "stem density",
    group: "Work",
    definition:
      "How many stems stand per hectare. With stem diameter, terrain and proximity to assets, it decides the category more reliably than any sales conversation.",
  },
  {
    id: "buttress",
    term: "buttressed",
    aliases: ["buttress"],
    group: "Work",
    definition:
      "Flared, reinforced trunk base found on many hardwoods. Buttressing defeats published maximum cutting diameters, so derate for it.",
  },
  {
    id: "derate",
    term: "derate",
    group: "Work",
    definition:
      "Treat a published maximum as a best case and work to a lower figure for the timber you actually cut. Standard practice for dense, fibrous or buttressed Australian hardwood.",
  },
  {
    id: "cost-per-stump",
    term: "cost per stump",
    group: "Commercial",
    definition:
      "Total cost of ownership and operation divided by stumps removed. The only metric that compares a grinder against a crew honestly, because it absorbs machine, labour, wear and disposal together.",
    seeAlso: "stump-grinder-guide",
  },
  {
    id: "cost-per-hectare",
    term: "cost per hectare",
    group: "Commercial",
    definition:
      "The area-based equivalent for mulching work. Tender pricing in fuel reduction and roadside clearing is set this way, so productivity claims have to be read in hectares per hour, not in brochure adjectives.",
    seeAlso: "forestry-mulcher-guide",
  },
  {
    id: "utilisation",
    term: "utilisation",
    group: "Commercial",
    definition:
      "Annual running hours. Below roughly 200 hours a year, hire. Between 200 and 500, buy if the tool unlocks work you currently turn away. Above 500, ownership almost always wins.",
  },
  {
    id: "instant-asset-write-off",
    term: "instant asset write-off",
    group: "Commercial",
    definition:
      "An immediate deduction for eligible depreciating assets under the relevant threshold. Most forestry attachments cost well above it, so it is usually not the relevant mechanism. General information, not tax advice.",
  },
  {
    id: "small-business-pool",
    term: "small business pool",
    group: "Commercial",
    definition:
      "Where an asset above the write-off threshold is depreciated: 15% in the first year and 30% each year after. The test is first use or installation ready for use within the income year, not order or payment.",
  },
  {
    id: "as-4373",
    term: "AS 4373",
    group: "Compliance",
    definition:
      "The Australian Standard for pruning amenity trees, routinely written into council and utility contracts. Mechanised pruning still has to produce a compliant cut.",
    seeAlso: "mechanical-pruning-guide",
  },
  {
    id: "as-4772",
    term: "AS 4772",
    aliases: ["AS 4772-2008"],
    group: "Compliance",
    definition:
      "The Australian Standard covering quick hitch devices, requiring a safety system that prevents unintentional disconnection if primary retention fails.",
  },
  {
    id: "iso-13031",
    term: "ISO 13031",
    aliases: ["ISO 13031-2016"],
    group: "Compliance",
    definition:
      "International standard for quick couplers on earth-moving machinery, accepted as an equivalent to AS 4772.",
  },
  {
    id: "iso-8084",
    term: "ISO 8084",
    group: "Compliance",
    definition:
      "Covers operator protective structures for forestry machinery — the grills and guarding that stop objects entering the cabin. It excludes broken chainsaw teeth from its scope.",
  },
  {
    id: "utility-vegetation-management",
    term: "utility vegetation management",
    group: "Work",
    definition:
      "Continuous, regulated clearance of vegetation around distribution networks. Contracted, audited and renewed on multi-year cycles, which makes it the steadiest demand driver in the category.",
  },
  {
    id: "fuel-reduction",
    term: "fuel reduction",
    aliases: ["hazard reduction"],
    group: "Work",
    definition:
      "Bushfire risk work measured in treated hectares rather than project budgets. Area targets favour mulchers and shears over hand crews.",
  },
];

export const TERM_GROUPS = ["Hydraulics", "Carrier", "Attachment", "Work", "Compliance", "Commercial"] as const;

export function termById(id: string): Term | undefined {
  return TERMS.find((t) => t.id === id);
}

/** Every surface form, longest first, so "auxiliary flow" wins over "flow". */
export function lookupTable(): Array<{ surface: string; term: Term }> {
  const rows: Array<{ surface: string; term: Term }> = [];
  for (const t of TERMS) {
    rows.push({ surface: t.term, term: t });
    for (const a of t.aliases ?? []) rows.push({ surface: a, term: t });
  }
  return rows.sort((a, b) => b.surface.length - a.surface.length);
}
