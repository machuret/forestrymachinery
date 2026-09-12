import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { BrandLogo } from "@/components/BrandLogo";
import { JsonLd } from "@/components/JsonLd";
import { BRAND_PROFILES } from "@/lib/brands";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Forestry Attachment Brands in Australia | OMEF, Dipperfox, Powerhand, Trevi Benne" },
  description:
    "The four manufacturers behind the forestry attachment range: OMEF across ten series, Dipperfox stump grinders, Powerhand grapples and grapple saws, and Trevi Benne stump cutters.",
  alternates: { canonical: absoluteUrl("/brands/") },
};

export default function BrandsPage() {
  return (
    <>
      <PageHero
        eyebrow="Manufacturers"
        title="Four brands, sixteen series, one parts conversation"
        crumb="Brands"
        lead="Which manufacturer sits behind a category matters less for badge reasons than for parts: wear-part supply and lead time in Australia is the difference between a two-day repair and a six-week one."
      />

      <section className="mx-auto max-w-[88rem] px-4 py-14 sm:px-6 sm:py-20 lg:px-10">
        <div className="grid gap-px bg-steel-700 md:grid-cols-2">
          {BRAND_PROFILES.map((b) => (
            <Link
              key={b.slug}
              href={`/brands/${b.slug}/`}
              className="group flex flex-col bg-steel-950 p-6 transition-colors hover:bg-steel-900 sm:p-8"
            >
              <BrandLogo slug={b.slug} className="self-start" />
              <div className="mt-6 flex items-baseline gap-3">
                <h2 className="display text-2xl text-bone transition-colors group-hover:text-hazard sm:text-3xl">
                  {b.name}
                </h2>
                <span className="font-mono text-[0.62rem] tracking-[0.14em] text-concrete uppercase">{b.origin}</span>
              </div>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-concrete">{b.positioning}</p>
              <p className="mt-5 font-mono text-[0.62rem] tracking-[0.14em] text-steel-500 uppercase">
                {b.series.length} series ·{" "}
                {[...new Set(b.series.map((s) => s.guide))].length} categories
              </p>
              <span className="mt-6 inline-flex items-center gap-2 font-mono text-[0.65rem] tracking-[0.16em] text-bone/70 uppercase group-hover:text-hazard">
                See the range
                <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Forestry attachment brands",
          url: absoluteUrl("/brands/"),
          inLanguage: "en-AU",
          hasPart: BRAND_PROFILES.map((b) => ({
            "@type": "Brand",
            name: b.name,
            url: absoluteUrl(`/brands/${b.slug}/`),
          })),
        }}
      />
    </>
  );
}
