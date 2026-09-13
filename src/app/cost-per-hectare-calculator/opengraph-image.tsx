import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const alt = "Pricing mulching work by the hectare — Machinery Specialist";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return await ogCard({
    eyebrow: "Calculator",
    title: "Pricing mulching work by the hectare",
    stats: [["Free", "No sign-up"]],
  });
}
