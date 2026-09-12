import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
import { BRAND_PROFILES, brandProfile } from "@/lib/brands";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return BRAND_PROFILES.map((b) => ({ brand: b.slug }));
}

export default async function Image({ params }: { params: Promise<{ brand: string }> }) {
  const { brand } = await params;
  const b = brandProfile(brand);
  return await ogCard({
    eyebrow: `Manufacturer · ${b?.origin ?? "Europe"}`,
    title: `${b?.name ?? "Brand"} forestry attachments`,
    stats: [["Series", String(b?.series.length ?? 0)]],
  });
}
