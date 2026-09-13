import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const alt = "Parts, freight and support across Australia — Machinery Specialist";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return await ogCard({
    eyebrow: "Supply and support",
    title: "Parts, freight and support across Australia",
    stats: [["States", "07"]],
  });
}
