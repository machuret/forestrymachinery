import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const alt = "The four comparisons buyers get wrong — Machinery Specialist";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return await ogCard({
    eyebrow: "Head to head",
    title: "The four comparisons buyers get wrong",
    stats: [["Comparisons", "04"]],
  });
}
