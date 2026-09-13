/**
 * Citations. Each source is anchored to a phrase that appears verbatim in the
 * guide markdown, so a reference marker is only ever emitted where the claim
 * actually is. Change the copy and the marker disappears rather than pointing
 * at the wrong sentence.
 */

export interface Source {
  id: string;
  publisher: string;
  title: string;
  url: string;
  /** What this source is being cited for. */
  supports: string;
  /** Exact strings from the markdown that trigger a marker. */
  anchors: string[];
  /** ISO date the URL was last confirmed to resolve and support the claim. */
  verified: string;
}

export const SOURCES: Source[] = [
  {
    id: "abares-plantation",
    publisher: "ABARES, Department of Agriculture, Fisheries and Forestry",
    title: "State of the Forests Report, Indicator 2.1b: plantation area",
    url: "https://www.agriculture.gov.au/abares/forestsaustralia/sofr/criterion-2/indicator-2.1b",
    supports: "Plantation area and species composition",
    anchors: ["1.71 million hectares of commercial plantation"],
    verified: "2026-09-13",
  },
  {
    id: "ibisworld-forestry",
    publisher: "IBISWorld",
    title: "Forestry and Logging in Australia (ANZSIC A0300)",
    url: "https://www.ibisworld.com/australia/industry/forestry-logging/68/",
    supports: "Industry size and trend",
    anchors: ["around 2.0% CAGR between 2021 and 2026"],
    verified: "2026-09-13",
  },
  {
    id: "nsw-koala-park",
    publisher: "NSW Government",
    title: "Great Koala National Park and the Mid North Coast harvesting moratorium",
    url: "https://www.nsw.gov.au/environment-land-and-water/great-koala-national-park",
    supports: "State-level harvest access constraints",
    anchors: ["176,000 hectares of state forest"],
    verified: "2026-09-13",
  },
  {
    id: "nsw-ebmp",
    publisher: "NSW Office of Environment and Heritage",
    title: "Enhanced Bushfire Management Program",
    url: "https://www.environment.nsw.gov.au/topics/fire/managing-fire/bushfire-management-program",
    supports: "Hazard-reduction hectare targets",
    anchors: ["135,000 hectares of bushland each year"],
    verified: "2026-09-13",
  },
  {
    id: "as-4373",
    publisher: "Standards Australia",
    title: "AS 4373 — Pruning of amenity trees",
    url: "https://store.standards.org.au/product/as-4373-2007",
    supports: "Pruning specification written into council and utility contracts",
    anchors: ["Australian Standard AS 4373", "AS 4373 governs the pruning"],
    verified: "2026-09-13",
  },
  {
    id: "as-4772",
    publisher: "Standards Australia / WorkSafe Victoria",
    title: "Safety alert: semi-automatic quick hitches on excavators",
    url: "https://www.worksafe.vic.gov.au/safety-alerts/semi-automatic-quick-hitches-excavators",
    supports: "Quick hitch safety system requirement",
    anchors: ["AS 4772-2008"],
    verified: "2026-09-13",
  },
  {
    id: "iso-8084",
    publisher: "International Organization for Standardization",
    title: "ISO 8084:2003 — Machinery for forestry, operator protective structures",
    url: "https://www.iso.org/standard/31626.html",
    supports: "Operator protective structures and guarding",
    anchors: ["ISO 8084"],
    verified: "2026-09-13",
  },
  {
    id: "ato-iawo",
    publisher: "Australian Taxation Office",
    title: "Instant asset write-off for eligible businesses",
    url: "https://www.ato.gov.au/businesses-and-organisations/income-deductions-and-concessions/depreciation-and-capital-expenses-and-allowances/simpler-depreciation-for-small-business/instant-asset-write-off",
    supports: "Write-off threshold and small business pool rates",
    anchors: ["$20,000 per asset", "15% in the first year and 30%"],
    verified: "2026-09-13",
  },
];

export function sourceById(id: string): Source | undefined {
  return SOURCES.find((s) => s.id === id);
}

/** Anchor phrases, longest first, so the most specific match wins. */
export function anchorTable(): Array<{ phrase: string; source: Source }> {
  return SOURCES.flatMap((source) => source.anchors.map((phrase) => ({ phrase, source })))
    .sort((a, b) => b.phrase.length - a.phrase.length);
}
