import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const alt = "What forestry attachments actually cost — Machinery Specialist";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return await ogCard({
    eyebrow: "Costs",
    title: "What forestry attachments actually cost",
    stats: [["Cost lines", "05"]],
  });
}
