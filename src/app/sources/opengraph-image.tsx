import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const alt = "Where every number came from — Machinery Specialist";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return await ogCard({
    eyebrow: "Editorial",
    title: "Where every number came from",
    stats: [["Sources", "08"]],
  });
}
