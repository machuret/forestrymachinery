import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { JsonLd } from "@/components/JsonLd";
import { Photograph } from "@/components/Photograph";
import { COMPARISONS } from "@/lib/comparisons";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Forestry Attachment Comparisons | Which One Your Job Needs" },
  description:
    "Head-to-head comparisons of the forestry attachment categories buyers most often confuse: grinder versus cutter, shear versus mulcher, grapple saw versus shear, grapple saw versus grab.",
  alternates: { canonical: absoluteUrl("/compare/") },
};

export default function ComparePage() {
  return (
    <>
      <PageHero
        eyebrow="Head to head"
        title="The four comparisons buyers actually get wrong"
        crumb="Comparisons"
        lead="Two attachments with similar names doing entirely different jobs is the most expensive mistake in this category. Each comparison below answers the question first, then shows the working."
      />

      <section className="mx-auto max-w-[88rem] px-4 py-14 sm:px-6 sm:py-20 lg:px-10">
        <div className="grid gap-px bg-steel-700 md:grid-cols-2">
          {COMPARISONS.map((c) => (
            <Link
              key={c.slug}
              href={`/compare/${c.slug}/`}
              className="group flex flex-col bg-steel-950 p-6 transition-colors hover:bg-steel-900 sm:p-8"
            >
              <div className="grid grid-cols-2 gap-3">
                <Photograph photo={c.a.photo} ratio="4/3" bare sizes="(max-width: 768px) 45vw, 20rem" />
                <Photograph photo={c.b.photo} ratio="4/3" bare sizes="(max-width: 768px) 45vw, 20rem" />
              </div>
              <h2 className="display mt-6 text-2xl leading-tight text-bone transition-colors group-hover:text-hazard sm:text-3xl">
                {c.title}
              </h2>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-concrete">{c.verdict.split(". ")[0]}.</p>
              <span className="mt-6 inline-flex items-center gap-2 font-mono text-[0.65rem] tracking-[0.16em] text-bone/70 uppercase group-hover:text-hazard">
                Read the comparison
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
          name: "Forestry attachment comparisons",
          url: absoluteUrl("/compare/"),
          inLanguage: "en-AU",
          hasPart: COMPARISONS.map((c) => ({
            "@type": "WebPage",
            name: c.title,
            url: absoluteUrl(`/compare/${c.slug}/`),
          })),
        }}
      />
    </>
  );
}
