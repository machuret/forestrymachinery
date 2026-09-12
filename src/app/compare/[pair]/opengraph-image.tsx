import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
import { COMPARISONS, comparison } from "@/lib/comparisons";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return COMPARISONS.map((c) => ({ pair: c.slug }));
}

export default async function Image({ params }: { params: Promise<{ pair: string }> }) {
  const { pair } = await params;
  const c = comparison(pair);
  return await ogCard({
    eyebrow: "Head to head",
    title: c?.title ?? "Forestry attachment comparison",
    stats: [["Criteria compared", String(c?.rows.length ?? 8)]],
  });
}
