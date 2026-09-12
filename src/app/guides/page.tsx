import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Photograph } from "@/components/Photograph";
import { JsonLd } from "@/components/JsonLd";
import { getPillar, getGuides } from "@/lib/content";
import { categoryMeta } from "@/lib/categories";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "All Forestry Attachment Guides | Index" },
  description:
    "Every guide in the cluster: the pillar buyer's guide plus eight category guides covering tree shears, stump cutters, stump grinders, mulchers, grapple saws, grabs, pruning heads and tillage tools.",
  alternates: { canonical: absoluteUrl("/guides/") },
};

export default function GuidesIndexPage() {
  const pillar = getPillar();
  const guides = getGuides();

  return (
    <>
      <PageHero
        eyebrow="Index"
        title="Nine guides, one cluster"
        crumb="Guides"
        lead="Start at the hub if you are still choosing a category. Go straight to a spoke if you already know what the work is and need the carrier match, the hydraulic demand and the honest limitations."
      />

      <section className="mx-auto max-w-[88rem] px-4 py-14 sm:px-6 sm:py-20 lg:px-10">
        {/* Pillar */}
        <Link
          href={pillar.href}
          className="group flex flex-col gap-8 border border-steel-700 bg-steel-900 p-6 transition-colors hover:border-hazard sm:p-9 lg:flex-row lg:items-center"
        >
          <div className="min-w-0 flex-1">
            <span className="font-mono text-[0.65rem] tracking-[0.18em] text-hazard uppercase">00 · Pillar</span>
            <h2 className="display mt-4 text-3xl leading-none text-bone group-hover:text-hazard sm:text-4xl">
              {pillar.title}
            </h2>
            <p className="mt-4 max-w-2xl text-[1rem] leading-relaxed text-concrete">
              {pillar.frontmatter.meta_description}
            </p>
            <span className="mt-6 inline-flex items-center gap-3 font-mono text-[0.62rem] tracking-[0.14em] text-steel-500 uppercase">
              {pillar.readingMinutes} min · {pillar.citations.length} sources cited · reviewed{" "}
              {pillar.lastReviewed.toLocaleDateString("en-AU", { month: "short", year: "numeric" })}
            </span>
          </div>
        </Link>

        {/* Spokes */}
        <div className="mt-10 grid gap-px bg-steel-700 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((g) => {
            const meta = categoryMeta(g.slug);
            return (
              <Link key={g.slug} href={g.href} className="group flex flex-col bg-steel-950 transition-colors hover:bg-steel-900">
                {meta && (
                  <Photograph photo={meta.hero} ratio="16/10" bare sizes="(max-width: 1024px) 100vw, 24rem" className="border-0 border-b" />
                )}
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="font-mono text-[0.65rem] tracking-[0.18em] text-hazard">{meta?.code}</span>
                    <span className="font-mono text-[0.6rem] tracking-[0.12em] text-steel-500 uppercase">
                      {meta?.carrier}
                    </span>
                  </div>
                  <h2 className="display mt-3 text-xl leading-tight text-bone group-hover:text-hazard">{g.title}</h2>
                  <p className="mt-3 text-[0.9rem] leading-relaxed text-concrete">{meta?.job}</p>
                  <span className="mt-auto pt-6 font-mono text-[0.6rem] tracking-[0.12em] text-steel-500 uppercase">
                    {g.readingMinutes} min · {g.faqs.length} questions answered
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Forestry attachment guides",
          url: absoluteUrl("/guides/"),
          itemListElement: [pillar, ...guides].map((g, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: g.title,
            url: absoluteUrl(g.href),
          })),
        }}
      />
    </>
  );
}
