import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const alt = "When the attachment is not performing — Machinery Specialist";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return await ogCard({
    eyebrow: "Ownership",
    title: "When the attachment is not performing",
    stats: [["Symptoms", "07"]],
  });
}
