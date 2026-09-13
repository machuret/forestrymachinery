import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const alt = "The vocabulary a quote is written in — Machinery Specialist";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return await ogCard({
    eyebrow: "Reference",
    title: "The vocabulary a quote is written in",
    stats: [["Terms", "38"]],
  });
}
