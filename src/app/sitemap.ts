import type { MetadataRoute } from "next";
import { getAllPages } from "@/lib/content";
import { COMPARISONS } from "@/lib/comparisons";
import { BRAND_PROFILES } from "@/lib/brands";
import { CATEGORY_META } from "@/lib/categories";
import { PHOTOS } from "@/lib/media";
import { absoluteUrl, SITE } from "@/lib/site";
import { APPLICATION_GUIDES } from "@/lib/applications";
import { INDUSTRY_PROFILES } from "@/lib/industries";
import { TUTORIALS } from "@/lib/tutorials";
import { OPERATION_GUIDES } from "@/lib/operations";
import { PRACTICAL_COMPARISONS } from "@/lib/practical-comparisons";

/**
 * Editorial review date for the pages that are not generated from markdown.
 * Kept explicit rather than read from the filesystem, because a fresh clone
 * rewrites every mtime and a lastmod that changes on every deploy is worthless.
 */
const REVIEWED = new Date("2026-09-19");

export default function sitemap(): MetadataRoute.Sitemap {
  const guides = getAllPages();
  /** Every photograph a guide renders: hero, field scene and gallery. */
  const imagesBySlug = new Map(
    CATEGORY_META.map((category) => [
      category.slug,
      [
        absoluteUrl(PHOTOS[category.hero].src),
        absoluteUrl(category.fieldImage.src),
        ...category.gallery.map((key) => absoluteUrl(PHOTOS[key].src)),
      ],
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
      url: absoluteUrl("/applications/"),
      changeFrequency: "monthly",
      priority: 0.9,
      images: APPLICATION_GUIDES.map((guide) => absoluteUrl(guide.image)),
    },
    {
      url: absoluteUrl("/industries/"),
      changeFrequency: "monthly",
      priority: 0.9,
      images: INDUSTRY_PROFILES.map((profile) => absoluteUrl(profile.image)),
    },
    {
      url: absoluteUrl("/tutorials/"),
      changeFrequency: "monthly",
      priority: 0.9,
      images: TUTORIALS.map((tutorial) => absoluteUrl(tutorial.image)),
    },
    {
      url: absoluteUrl("/operations/"),
      changeFrequency: "monthly",
      priority: 0.8,
      images: OPERATION_GUIDES.map((guide) => absoluteUrl(guide.image)),
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
    ...PRACTICAL_COMPARISONS.map((comparison) => ({
      url: absoluteUrl(`/compare/${comparison.slug}/`),
      lastModified: REVIEWED,
      changeFrequency: "yearly" as const,
      priority: 0.7,
      images: [absoluteUrl(comparison.a.image), absoluteUrl(comparison.b.image)],
    })),
    ...BRAND_PROFILES.map((b) => ({
      url: absoluteUrl(`/brands/${b.slug}/`),
      lastModified: REVIEWED,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
    ...BRAND_PROFILES.flatMap((brand) => ["range-guide", "carrier-compatibility"].map((topic) => ({
      url: absoluteUrl(`/brands/${brand.slug}/${topic}/`),
      lastModified: REVIEWED,
      changeFrequency: "yearly" as const,
      priority: 0.65,
    }))),
    ...APPLICATION_GUIDES.map((guide) => ({
      url: absoluteUrl(`/applications/${guide.slug}/`),
      lastModified: REVIEWED,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      images: [absoluteUrl(guide.image)],
    })),
    ...INDUSTRY_PROFILES.map((profile) => ({
      url: absoluteUrl(`/industries/${profile.slug}/`),
      lastModified: REVIEWED,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      images: [absoluteUrl(profile.image)],
    })),
    ...TUTORIALS.map((tutorial) => ({
      url: absoluteUrl(`/tutorials/${tutorial.slug}/`),
      lastModified: REVIEWED,
      changeFrequency: "yearly" as const,
      priority: 0.75,
      images: [absoluteUrl(tutorial.image)],
    })),
    ...OPERATION_GUIDES.map((guide) => ({
      url: absoluteUrl(`/operations/${guide.slug}/`),
      lastModified: REVIEWED,
      changeFrequency: "yearly" as const,
      priority: 0.7,
      images: [absoluteUrl(guide.image)],
    })),
  ];
}
