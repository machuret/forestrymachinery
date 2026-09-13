import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const alt = "Bring three numbers. Leave with a shortlist. — Machinery Specialist";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return await ogCard({
    eyebrow: "Talk to a specialist",
    title: "Bring three numbers. Leave with a shortlist.",
    stats: [["Australia", "Wide"]],
  });
}
