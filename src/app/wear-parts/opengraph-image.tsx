import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const alt = "Wear parts: the cost that decides your rate — Machinery Specialist";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return await ogCard({
    eyebrow: "Ownership",
    title: "Wear parts: the cost that decides your rate",
    stats: [["Categories", "08"]],
  });
}
