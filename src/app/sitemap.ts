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
const REVIEWED = new Date("2026-09-12");

export default function sitemap(): MetadataRoute.Sitemap {
  const guides = getAllPages();
  const heroBySlug = new Map(CATEGORY_META.map((c) => [c.slug, absoluteUrl(PHOTOS[c.hero].src)]));

  const statics: MetadataRoute.Sitemap = ([
    { url: absoluteUrl("/"), changeFrequency: "monthly", priority: 1 },
    { url: absoluteUrl("/costs/"), changeFrequency: "monthly", priority: 0.9 },
    { url: absoluteUrl("/hire-vs-buy/"), changeFrequency: "yearly", priority: 0.8 },
    { url: absoluteUrl("/wear-parts/"), changeFrequency: "yearly", priority: 0.8 },
    { url: absoluteUrl("/support-and-parts-australia/"), changeFrequency: "yearly", priority: 0.7 },
    { url: absoluteUrl("/troubleshooting/"), changeFrequency: "yearly", priority: 0.7 },
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
  ] as const).map((e) => ({ ...e, lastModified: REVIEWED }));

  return [
    ...statics,
    ...guides.map((p) => ({
      url: absoluteUrl(p.href),
      lastModified: p.lastReviewed,
      changeFrequency: "monthly" as const,
      priority: p.frontmatter.page_type === "pillar" ? 0.9 : 0.8,
      images: heroBySlug.has(p.slug) ? [heroBySlug.get(p.slug)!] : undefined,
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
