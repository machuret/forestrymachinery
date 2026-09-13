import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const alt = "What forestry attachments fit your excavator? — Machinery Specialist";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return await ogCard({
    eyebrow: "Carrier size guide",
    title: "What forestry attachments fit your excavator?",
    stats: [["Carriers", "1.5–50 t"]],
  });
}
