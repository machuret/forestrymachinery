import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { Photograph } from "@/components/Photograph";
import { JsonLd } from "@/components/JsonLd";
import { COMPARISONS, comparison, type Side } from "@/lib/comparisons";
import { categoryMeta } from "@/lib/categories";
import { SITE, absoluteUrl } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return COMPARISONS.map((c) => ({ pair: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ pair: string }> }): Promise<Metadata> {
  const { pair } = await params;
  const c = comparison(pair);
  if (!c) return {};
  return {
    title: { absolute: c.metaTitle },
    description: c.metaDescription,
    alternates: { canonical: absoluteUrl(`/compare/${c.slug}/`) },
    openGraph: { title: c.metaTitle, description: c.metaDescription, type: "article" },
  };
}

function SideCard({ side, letter }: { side: Side; letter: "A" | "B" }) {
  const meta = categoryMeta(side.slug);
  return (
    <div className="flex flex-col border border-steel-700 bg-steel-900">
      <Photograph photo={side.photo} ratio="16/10" bare sizes="(max-width: 1024px) 100vw, 32rem" className="border-0 border-b" />
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-center gap-3">
          <span className="flex h-7 w-7 items-center justify-center bg-hazard font-mono text-[0.7rem] font-semibold text-steel-950">
            {letter}
          </span>
          <h2 className="display text-2xl text-bone">{side.name}</h2>
        </div>
        <p className="mt-4 text-[0.95rem] leading-relaxed text-concrete">{side.role}</p>

        <p className="mt-7 font-mono text-[0.62rem] tracking-[0.18em] text-hazard uppercase">Choose it when</p>
        <ul className="mt-4 space-y-2.5">
          {side.chooseWhen.map((w) => (
            <li key={w} className="flex gap-3 text-[0.92rem] leading-relaxed text-bone/85">
              <span aria-hidden="true" className="mt-[0.5rem] h-1.5 w-1.5 shrink-0 rotate-45 bg-moss-500" />
              {w}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-3 pt-8">
          <Link
            href={`/${side.slug}/`}
            className="inline-flex items-center gap-2 border border-steel-600 px-4 py-2.5 font-mono text-[0.62rem] tracking-[0.14em] text-bone uppercase transition-colors hover:border-hazard hover:text-hazard"
          >
            Full guide →
          </Link>
          {meta && (
            <a
              href={meta.productHref}
              className="inline-flex items-center gap-2 border border-hazard px-4 py-2.5 font-mono text-[0.62rem] tracking-[0.14em] text-hazard uppercase transition-colors hover:bg-hazard hover:text-steel-950"
            >
              View range →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default async function ComparisonPage({ params }: { params: Promise<{ pair: string }> }) {
  const { pair } = await params;
  const c = comparison(pair);
  if (!c) notFound();

  return (
    <>
      <PageHero
        eyebrow="Head to head"
        title={c.title}
        crumb={c.title.replace("?", "")}
        trail={[{ label: "Comparisons", href: "/compare/" }]}
        lead={c.question}
      />

      <article className="mx-auto max-w-[88rem] px-4 py-14 sm:px-6 sm:py-20 lg:px-10">
        {/* Verdict first — the answer before the working */}
        <section className="border-l-[3px] border-hazard bg-steel-900 p-6 sm:p-9">
          <p className="font-mono text-[0.62rem] tracking-[0.2em] text-hazard uppercase">The short answer</p>
          <p className="mt-4 max-w-4xl text-lg leading-relaxed text-bone sm:text-xl">{c.verdict}</p>
        </section>

        <div className="mt-12 grid gap-px bg-steel-700 lg:grid-cols-2">
          <SideCard side={c.a} letter="A" />
          <SideCard side={c.b} letter="B" />
        </div>

        {/* Criterion table */}
        <section className="mt-16">
          <div className="rule-heavy" />
          <h2 className="display mt-5 text-3xl text-bone sm:text-4xl">Side by side</h2>
          <div className="relative mt-8 overflow-x-auto border border-steel-700 bg-steel-900">
            <table className="w-full min-w-[44rem] border-collapse text-sm">
              <thead>
                <tr>
                  <th className="bg-steel-800 px-4 py-4 text-left font-mono text-[0.62rem] tracking-[0.14em] text-hazard uppercase">
                    Criterion
                  </th>
                  <th className="border-l border-steel-700 bg-steel-800 px-4 py-4 text-left font-mono text-[0.62rem] tracking-[0.14em] text-hazard uppercase">
                    {c.a.name}
                  </th>
                  <th className="border-l border-steel-700 bg-steel-800 px-4 py-4 text-left font-mono text-[0.62rem] tracking-[0.14em] text-hazard uppercase">
                    {c.b.name}
                  </th>
                </tr>
              </thead>
              <tbody>
                {c.rows.map((r) => (
                  <tr key={r.criterion} className="border-t border-steel-800">
                    <th scope="row" className="px-4 py-4 text-left align-top font-semibold text-bone">
                      {r.criterion}
                    </th>
                    <td
                      className={`border-l border-steel-800 px-4 py-4 align-top ${
                        r.favours === "a" || r.favours === "both" ? "bg-moss-600/12 text-bone" : "text-concrete"
                      }`}
                    >
                      {r.a}
                    </td>
                    <td
                      className={`border-l border-steel-800 px-4 py-4 align-top ${
                        r.favours === "b" || r.favours === "both" ? "bg-moss-600/12 text-bone" : "text-concrete"
                      }`}
                    >
                      {r.b}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 flex items-center gap-2.5 font-mono text-[0.62rem] tracking-[0.1em] text-concrete uppercase">
            <span aria-hidden="true" className="inline-block h-3 w-6 bg-moss-600/40" />
            Shaded cell is the stronger side on that criterion
          </p>
        </section>

        {/* Both */}
        <section className="mt-16 border border-steel-700 bg-steel-900 p-6 sm:p-9">
          <p className="eyebrow">When the answer is both</p>
          <p className="mt-4 max-w-3xl text-[1.05rem] leading-relaxed text-bone/85">{c.bothWhen}</p>
        </section>

        {/* FAQ */}
        <section className="mt-16">
          <div className="rule-heavy" />
          <h2 className="display mt-5 text-3xl text-bone sm:text-4xl">Questions that follow</h2>
          <div className="mt-8 border-t border-steel-700">
            {c.faqs.map((f, i) => (
              <details key={f.q} className="faq group border-b border-steel-700" open={i === 0}>
                <summary className="flex cursor-pointer list-none items-start gap-4 py-5 transition-colors hover:bg-steel-900">
                  <span className="mt-1 font-mono text-[0.7rem] text-hazard">{String(i + 1).padStart(2, "0")}</span>
                  <span className="display flex-1 text-lg leading-tight text-bone sm:text-xl">{f.q}</span>
                  <span aria-hidden="true" className="faq-sign mt-0.5 shrink-0 text-xl leading-none text-hazard transition-transform duration-200">
                    +
                  </span>
                </summary>
                <p className="pb-6 pl-10 text-[1rem] leading-relaxed text-concrete sm:pr-10">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Other comparisons */}
        <nav aria-label="Other comparisons" className="mt-16 border-t border-steel-700 pt-8">
          <p className="font-mono text-[0.65rem] tracking-[0.2em] text-concrete uppercase">Other comparisons</p>
          <ul className="mt-5 flex flex-wrap gap-3">
            {COMPARISONS.filter((o) => o.slug !== c.slug).map((o) => (
              <li key={o.slug}>
                <Link
                  href={`/compare/${o.slug}/`}
                  className="inline-flex items-center gap-2 border border-steel-600 px-4 py-2.5 text-sm text-bone/85 transition-colors hover:border-hazard hover:text-hazard"
                >
                  {o.title.replace("?", "")}
                  <span aria-hidden="true">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </article>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: c.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: c.title,
          description: c.metaDescription,
          inLanguage: "en-AU",
          mainEntityOfPage: absoluteUrl(`/compare/${c.slug}/`),
          author: { "@type": "Organization", name: SITE.name },
          publisher: { "@type": "Organization", name: SITE.name },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
            { "@type": "ListItem", position: 2, name: "Comparisons", item: absoluteUrl("/compare/") },
            { "@type": "ListItem", position: 3, name: c.title, item: absoluteUrl(`/compare/${c.slug}/`) },
          ],
        }}
      />
    </>
  );
}
