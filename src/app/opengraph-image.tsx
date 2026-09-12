import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const alt = "Forestry attachments, matched to the machine already on your float — Machinery Specialist";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return await ogCard({
    eyebrow: "Australian buyer's guide",
    title: "Forestry attachments, matched to the machine you already own",
    stats: [
      ["Categories", "08"],
      ["Carriers", "1.5–50 t"],
    ],
  });
}
