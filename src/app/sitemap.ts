import type { MetadataRoute } from "next";
import { getAllPages } from "@/lib/content";
import { absoluteUrl, SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const statics: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: absoluteUrl("/compatibility/"), lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: absoluteUrl(SITE.quotePath), lastModified: now, changeFrequency: "yearly", priority: 0.6 },
  ];

  const guides: MetadataRoute.Sitemap = getAllPages().map((p) => ({
    url: absoluteUrl(p.href),
    lastModified: now,
    changeFrequency: "monthly",
    priority: p.frontmatter.page_type === "pillar" ? 0.9 : 0.8,
  }));

  return [...statics, ...guides];
}
