import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const alt = "Four brands, sixteen series — Machinery Specialist";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return await ogCard({
    eyebrow: "Manufacturers",
    title: "Four brands, sixteen series",
    stats: [["Brands", "04"]],
  });
}
