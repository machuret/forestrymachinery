import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { TERMS, TERM_GROUPS } from "@/lib/glossary";
import { categoryMeta } from "@/lib/categories";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Forestry Attachment Glossary | Hydraulics, Specs and Standards" },
  description:
    "Plain definitions for the terms that decide a forestry attachment purchase: auxiliary flow, case drain, dual circuit, chain pitch and AS 4373.",
  alternates: { canonical: absoluteUrl("/glossary/") },
};

export default function GlossaryPage() {
  return (
    <>
      <PageHero
        eyebrow="Reference"
        title="The vocabulary a quote is written in"
        crumb="Glossary"
        lead={`${TERMS.length} terms that come up in every forestry attachment conversation, defined the way a buyer needs them rather than the way a catalogue writes them. Each one is linked automatically the first time it appears in a guide.`}
      />

      <section className="mx-auto max-w-[88rem] px-4 py-14 sm:px-6 sm:py-20 lg:px-10">
        <nav aria-label="Glossary groups" className="flex flex-wrap gap-3">
          {TERM_GROUPS.map((g) => (
            <a
              key={g}
              href={`#${g.toLowerCase()}`}
              className="border border-steel-600 px-4 py-2 font-mono text-[0.65rem] tracking-[0.14em] text-bone/80 uppercase transition-colors hover:border-hazard hover:text-hazard"
            >
              {g}
            </a>
          ))}
        </nav>

        <div className="mt-14 space-y-16">
          {TERM_GROUPS.map((group) => {
            const rows = TERMS.filter((t) => t.group === group);
            return (
              <section key={group} id={group.toLowerCase()} className="scroll-mt-28">
                <div className="rule-heavy" />
                <h2 className="display mt-5 text-3xl text-bone sm:text-4xl">{group}</h2>

                <dl className="mt-8 grid gap-px bg-steel-700 md:grid-cols-2 [&>*:last-child:nth-child(odd)]:md:col-span-2">
                  {rows.map((t) => {
                    const target = t.seeAlso ? categoryMeta(t.seeAlso) : undefined;
                    return (
                      <div key={t.id} id={t.id} className="scroll-mt-28 bg-steel-950 p-6 sm:p-7">
                        <dt className="display text-xl text-hazard">{t.term}</dt>
                        <dd className="mt-3 text-[0.95rem] leading-relaxed text-concrete">
                          {t.definition}
                          {t.seeAlso && (
                            <Link
                              href={`/${t.seeAlso}/`}
                              className="mt-3 block font-mono text-[0.62rem] tracking-[0.14em] text-moss-400 uppercase hover:text-hazard"
                            >
                              In depth: {target?.label ?? "the full guide"} →
                            </Link>
                          )}
                        </dd>
                      </div>
                    );
                  })}
                </dl>
              </section>
            );
          })}
        </div>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "DefinedTermSet",
          name: "Forestry attachment glossary",
          url: absoluteUrl("/glossary/"),
          inLanguage: "en-AU",
          hasDefinedTerm: TERMS.map((t) => ({
            "@type": "DefinedTerm",
            "@id": absoluteUrl(`/glossary/#${t.id}`),
            name: t.term,
            description: t.definition,
            inDefinedTermSet: absoluteUrl("/glossary/"),
          })),
        }}
      />
    </>
  );
}
