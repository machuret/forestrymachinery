import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const alt = "AS 4373 and mechanised pruning — Machinery Specialist";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return await ogCard({
    eyebrow: "Compliance",
    title: "AS 4373 and mechanised pruning",
    stats: [["Standard", "AS 4373"]],
  });
}
