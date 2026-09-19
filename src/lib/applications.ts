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
    checklist: ["Retained vegetation and fence lines", "Timber recovery value", "Disposal permissions", "Drainage and erosion risk", "Replanting or access requirements", "Attachment changeover plan"],
  },
];

export function applicationGuide(slug: string): ApplicationGuide | undefined {
  return APPLICATION_GUIDES.find((guide) => guide.slug === slug);
}
