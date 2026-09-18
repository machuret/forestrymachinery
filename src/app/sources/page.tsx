import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { SOURCES } from "@/lib/sources";
import { getAllPages } from "@/lib/content";
import { absoluteUrl, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Sources and Editorial Standards | Forestry Attachment Guide" },
  description:
    "Every market, compliance and tax figure in these forestry attachment guides, with the source it came from and how specifications are handled.",
  alternates: { canonical: absoluteUrl("/sources/") },
  openGraph: { url: absoluteUrl("/sources/") },
};

export default function SourcesPage() {
  const pages = getAllPages();

  return (
    <>
      <PageHero
        eyebrow="Editorial"
        title="Where every number came from"
        crumb="Sources"
        lead="Specifications in these guides were taken from the live Machinery Specialist product pages rather than generic category knowledge. Market, compliance and tax figures are cited below, and marked in the text where they appear."
      />

      <section className="mx-auto max-w-[88rem] px-4 py-14 sm:px-6 sm:py-20 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_20rem]">
          <div>
            <div className="rule-heavy" />
            <h2 className="display mt-5 text-3xl text-bone sm:text-4xl">Cited sources</h2>

            <ol className="mt-8 grid gap-px bg-steel-700">
              {SOURCES.map((s, i) => (
                <li key={s.id} className="bg-steel-950 p-6 sm:p-7">
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-[0.7rem] text-hazard">{String(i + 1).padStart(2, "0")}</span>
                    <div className="min-w-0">
                      <p className="font-mono text-[0.62rem] tracking-[0.16em] text-concrete uppercase">
                        {s.publisher}
                      </p>
                      <h3 className="display mt-2 text-xl text-bone">{s.title}</h3>
                      <p className="mt-2 text-[0.92rem] leading-relaxed text-concrete">{s.supports}</p>
                      <a
                        href={s.url}
                        rel="nofollow noopener"
                        target="_blank"
                        className="mt-3 inline-block font-mono text-[0.62rem] tracking-[0.12em] text-moss-400 hover:text-hazard"
                      >
                        Read it on {new URL(s.url).hostname.replace(/^www\./, "")} ↗
                      </a>
                      <p className="mt-3 font-mono text-[0.6rem] tracking-[0.1em] text-moss-400 uppercase">
                        Link verified{" "}
                        {new Date(s.verified).toLocaleDateString("en-AU", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </p>
                      <p className="mt-2 font-mono text-[0.6rem] tracking-[0.1em] text-muted uppercase">
                        Cited on:{" "}
                        {pages
                          .filter((p) => p.citations.some((c) => c.id === s.id))
                          .map((p) => p.frontmatter.primary_keyword)
                          .join(", ") || "—"}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <aside className="space-y-8 lg:sticky lg:top-28 lg:self-start">
            <div className="border border-steel-700 bg-steel-900 p-6">
              <h2 className="font-mono text-[0.62rem] tracking-[0.18em] text-concrete uppercase">Image standards</h2>
              <p className="mt-3 text-[0.92rem] leading-relaxed text-concrete">
                Product photographs show real supplied equipment and remain the source of truth for attachment detail.
                Wider field and application scenes are clearly labelled editorial imagery: they explain operating
                context and do not claim a particular brand, model, customer or completed project.
              </p>
            </div>
            <div className="border border-steel-700 bg-steel-900 p-6">
              <h2 className="font-mono text-[0.62rem] tracking-[0.18em] text-concrete uppercase">Link checking</h2>
              <p className="mt-3 text-[0.92rem] leading-relaxed text-concrete">
                Every source URL below is checked against the live page, and the date each was last confirmed is shown
                with it. A citation that no longer resolves, or that no longer supports the claim it is attached to, is
                corrected rather than left to rot. The check runs from the repository, so it can be repeated rather
                than taken on trust.
              </p>
            </div>
            <div className="border border-steel-700 bg-steel-900 p-6">
              <h2 className="font-mono text-[0.62rem] tracking-[0.18em] text-concrete uppercase">No published prices</h2>
              <p className="mt-3 text-[0.92rem] leading-relaxed text-concrete">
                Attachment pricing moves with exchange rate, spec, rotation options and carrier bracket. A published
                figure would be wrong within a quarter and would invite price shopping against a number that is not
                current. The guides explain what drives the number instead.
              </p>
            </div>
            <div className="border border-steel-700 bg-steel-900 p-6">
              <h2 className="font-mono text-[0.62rem] tracking-[0.18em] text-concrete uppercase">Tax content</h2>
              <p className="mt-3 text-[0.92rem] leading-relaxed text-concrete">
                Written as general information with an explicit caveat, not as advice. Confirm your own position with
                your accountant before timing a purchase around it.
              </p>
            </div>
            <div className="border border-steel-700 bg-steel-900 p-6">
              <h2 className="font-mono text-[0.62rem] tracking-[0.18em] text-concrete uppercase">Specifications</h2>
              <p className="mt-3 text-[0.92rem] leading-relaxed text-concrete">
                Every brand, model, weight, flow figure and carrier range was taken from the live {SITE.name} product
                pages. Treat published maximums as best-case figures and derate for dense, fibrous or buttressed
                hardwood.
              </p>
              <Link
                href="/glossary/#derate"
                className="mt-3 inline-block font-mono text-[0.62rem] tracking-[0.14em] text-moss-400 uppercase hover:text-hazard"
              >
                What derating means →
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
            { "@type": "ListItem", position: 2, name: "Sources", item: absoluteUrl("/sources/") },
          ],
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Sources and editorial standards",
          url: absoluteUrl("/sources/"),
          inLanguage: "en-AU",
          citation: SOURCES.map((s) => ({ "@type": "CreativeWork", name: s.title, publisher: s.publisher, url: s.url })),
        }}
      />
    </>
  );
}
