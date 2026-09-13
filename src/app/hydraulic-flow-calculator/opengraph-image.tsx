import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const alt = "Which attachments will your machine run? — Machinery Specialist";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return await ogCard({
    eyebrow: "Calculator",
    title: "Which attachments will your machine run?",
    stats: [["Flow", "15–160"]],
  });
}
