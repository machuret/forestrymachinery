import type { MetadataRoute } from "next";
import { getAllPages } from "@/lib/content";
import { COMPARISONS } from "@/lib/comparisons";
import { BRAND_PROFILES } from "@/lib/brands";
import { CATEGORY_META } from "@/lib/categories";
import { PHOTOS } from "@/lib/media";
import { absoluteUrl, SITE } from "@/lib/site";

/**
 * Editorial review date for the pages that are not generated from markdown.
 * Kept explicit rather than read from the filesystem, because a fresh clone
 * rewrites every mtime and a lastmod that changes on every deploy is worthless.
 */
const REVIEWED = new Date("2026-09-14");

export default function sitemap(): MetadataRoute.Sitemap {
  const guides = getAllPages();
  const imagesBySlug = new Map(
    CATEGORY_META.map((category) => [
      category.slug,
      [absoluteUrl(PHOTOS[category.hero].src), absoluteUrl(category.fieldImage.src)],
    ]),
  );

  const staticEntries: Omit<MetadataRoute.Sitemap[number], "lastModified">[] = [
    {
      url: absoluteUrl("/"),
      changeFrequency: "monthly",
      priority: 1,
      images: [absoluteUrl("/images/editorial/forestry-attachments-australia-hero.webp")],
    },
    {
      url: absoluteUrl("/costs/"),
      changeFrequency: "monthly",
      priority: 0.9,
      images: [absoluteUrl("/images/field/costs-yard.webp")],
    },
    {
      url: absoluteUrl("/hire-vs-buy/"),
      changeFrequency: "yearly",
      priority: 0.8,
      images: [absoluteUrl("/images/field/hire-vs-buy-fleet.webp")],
    },
    {
      url: absoluteUrl("/wear-parts/"),
      changeFrequency: "yearly",
      priority: 0.8,
      images: [absoluteUrl("/images/field/wear-parts-workbench.webp")],
    },
    { url: absoluteUrl("/support-and-parts-australia/"), changeFrequency: "yearly", priority: 0.7 },
    {
      url: absoluteUrl("/troubleshooting/"),
      changeFrequency: "yearly",
      priority: 0.7,
      images: [absoluteUrl("/images/field/troubleshooting-hydraulics.webp")],
    },
    { url: absoluteUrl("/as-4373-mechanised-pruning/"), changeFrequency: "yearly", priority: 0.6 },
    { url: absoluteUrl("/finance-and-tax/"), changeFrequency: "yearly", priority: 0.6 },
    { url: absoluteUrl("/compare/"), changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteUrl("/brands/"), changeFrequency: "yearly", priority: 0.7 },
    { url: absoluteUrl("/compatibility/"), changeFrequency: "yearly", priority: 0.9 },
    { url: absoluteUrl("/hydraulic-flow-calculator/"), changeFrequency: "yearly", priority: 0.8 },
    { url: absoluteUrl("/cost-per-stump-calculator/"), changeFrequency: "yearly", priority: 0.8 },
    { url: absoluteUrl("/cost-per-hectare-calculator/"), changeFrequency: "yearly", priority: 0.8 },
    { url: absoluteUrl("/glossary/"), changeFrequency: "yearly", priority: 0.6 },
    { url: absoluteUrl("/sources/"), changeFrequency: "yearly", priority: 0.4 },
    { url: absoluteUrl(SITE.quotePath), changeFrequency: "yearly", priority: 0.6 },
  ];
  const statics: MetadataRoute.Sitemap = staticEntries.map((entry) => ({
    ...entry,
    lastModified: REVIEWED,
  }));

  return [
    ...statics,
    ...guides.map((p) => ({
      url: absoluteUrl(p.href),
      lastModified: p.lastReviewed,
      changeFrequency: "monthly" as const,
      priority: p.frontmatter.page_type === "pillar" ? 0.9 : 0.8,
      images: imagesBySlug.get(p.slug),
    })),
    ...COMPARISONS.map((c) => ({
      url: absoluteUrl(`/compare/${c.slug}/`),
      lastModified: REVIEWED,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
    ...BRAND_PROFILES.map((b) => ({
      url: absoluteUrl(`/brands/${b.slug}/`),
      lastModified: REVIEWED,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
