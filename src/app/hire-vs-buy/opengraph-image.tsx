import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const alt = "Hire, buy or subcontract? — Machinery Specialist";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return await ogCard({
    eyebrow: "Decision guide",
    title: "Hire, buy or subcontract?",
    stats: [["Threshold", "500 hr"]],
  });
}
