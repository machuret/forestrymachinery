import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
import { getAllPages, getPageBySlug } from "@/lib/content";
import { categoryMeta } from "@/lib/categories";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return getAllPages().map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getPageBySlug(slug);
  const meta = categoryMeta(slug);

  return await ogCard({
    eyebrow: meta ? `Category ${meta.code} of 08` : "Pillar guide",
    title: meta?.label ?? page?.title ?? "Forestry machinery guide",
    stats: [
      ["Carrier range", meta?.carrier ?? "1.5–50 t"],
      ["Read", `${page?.readingMinutes ?? 8} min`],
    ],
  });
}
