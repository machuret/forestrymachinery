import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const alt = "Tax treatment, stated accurately — Machinery Specialist";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return await ogCard({
    eyebrow: "Commercial",
    title: "Tax treatment, stated accurately",
    stats: [["Threshold", "$20,000"]],
  });
}
