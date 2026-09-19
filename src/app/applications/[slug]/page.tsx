import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ApplicationGrid } from "@/components/ApplicationGrid";
import { JsonLd } from "@/components/JsonLd";
import { APPLICATION_GUIDES, applicationGuide } from "@/lib/applications";
import { absoluteUrl } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return APPLICATION_GUIDES.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const guide = applicationGuide((await params).slug);
  if (!guide) return {};
  const url = absoluteUrl(`/applications/${guide.slug}/`);
  return {
    title: { absolute: `${guide.shortTitle} Machinery Guide | Australia` },
    description: guide.description,
    alternates: { canonical: url },
    openGraph: { title: guide.title, description: guide.description, type: "article", url, images: [guide.image] },
  };
}

export default async function ApplicationPage({ params }: { params: Promise<{ slug: string }> }) {
  const guide = applicationGuide((await params).slug);
  if (!guide) notFound();
  const url = absoluteUrl(`/applications/${guide.slug}/`);

  return (
    <>
      <section className="relative min-h-[42rem] overflow-hidden border-b border-steel-700 bg-steel-950">
        <Image src={guide.image} alt={guide.imageAlt} fill priority sizes="100vw" className="field-image object-cover" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-steel-950 via-steel-950/82 to-steel-950/10" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-steel-950 via-transparent to-steel-950/25" />
        <div className="relative mx-auto flex min-h-[42rem] max-w-[88rem] flex-col px-4 pt-10 pb-14 sm:px-6 lg:px-10">
          <nav aria-label="Breadcrumb" className="font-mono text-[0.65rem] tracking-[0.16em] text-bone/65 uppercase">
            <Link href="/" className="hover:text-hazard">Home</Link>
            <span className="px-2 text-bone/30">/</span>
            <Link href="/applications/" className="hover:text-hazard">Applications</Link>
            <span className="px-2 text-bone/30">/</span>
            <span className="text-hazard">{guide.shortTitle}</span>
          </nav>
          <div className="mt-auto max-w-3xl pt-24">
            <p className="eyebrow flex items-center gap-3"><span className="h-2 w-2 rotate-45 bg-hazard" />{guide.code} · {guide.eyebrow}</p>
            <h1 className="display mt-5 text-[2.7rem] leading-[0.92] text-bone sm:text-6xl lg:text-[4.8rem]">{guide.title}</h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-bone/85 sm:text-xl">{guide.description}</p>
          </div>
        </div>
        <div className="h-2 hazard-stripes" />
      </section>

      <section className="mx-auto max-w-[88rem] px-4 py-16 sm:px-6 sm:py-24 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_22rem]">
          <div>
            <p className="eyebrow">The outcome</p>
            <h2 className="display mt-4 max-w-4xl text-4xl leading-none text-bone sm:text-5xl">{guide.outcome}</h2>
            <div className="mt-12 grid gap-px bg-steel-700 md:grid-cols-3">
              {guide.decisions.map((decision, index) => (
                <article key={decision.title} className="bg-steel-900 p-7">
                  <span className="font-mono text-[0.68rem] text-hazard">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="display mt-5 text-2xl text-bone">{decision.title}</h3>
                  <p className="mt-4 text-[0.95rem] leading-relaxed text-concrete">{decision.body}</p>
                </article>
              ))}
            </div>

            <div className="mt-16 space-y-14">
              {guide.sections.map((section) => (
                <section key={section.title}>
                  <h2 className="display text-3xl text-bone sm:text-4xl">{section.title}</h2>
                  <div className="mt-6 space-y-5 text-[1rem] leading-relaxed text-concrete">
                    {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  </div>
                </section>
              ))}
            </div>

            <section className="mt-16 border-l-4 border-hazard bg-steel-900 p-7 sm:p-9">
              <p className="font-mono text-[0.65rem] tracking-[0.18em] text-hazard uppercase">The quotation brief</p>
              <h2 className="display mt-3 text-3xl text-bone">Make recommendations comparable</h2>
              <p className="mt-5 text-[1rem] leading-relaxed text-concrete">{guide.quoteBrief}</p>
            </section>

            <div className="mt-16">
              <p className="eyebrow">Attachment sequence</p>
              <h2 className="display mt-4 text-4xl text-bone">Match the tool to the constraint</h2>
              <div className="mt-8 divide-y divide-steel-700 border-y border-steel-700">
                {guide.recommended.map((item) => (
                  <div key={item.href} className="group relative grid gap-3 py-6 sm:grid-cols-[15rem_minmax(0,1fr)_auto] sm:items-center">
                    <span className="display text-2xl text-bone group-hover:text-hazard"><Link href={item.href} className="after:absolute after:inset-0">{item.category}</Link></span>
                    <span className="text-[0.95rem] leading-relaxed text-concrete">{item.when}</span>
                    <span className="font-mono text-xs text-hazard">VIEW →</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside>
            <div className="sticky top-24 border border-steel-700 bg-steel-900 p-6">
              <p className="font-mono text-[0.62rem] tracking-[0.18em] text-hazard uppercase">Pre-quote checklist</p>
              <ol className="mt-5 space-y-4">
                {guide.checklist.map((item, index) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-bone/85">
                    <span className="font-mono text-hazard">{String(index + 1).padStart(2, "0")}</span>{item}
                  </li>
                ))}
              </ol>
              <Link href="/hydraulic-flow-calculator/" className="mt-7 flex justify-center bg-hazard px-4 py-3 font-mono text-[0.65rem] font-semibold tracking-[0.14em] text-steel-950 uppercase hover:bg-moss-400">Check your carrier →</Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-t border-steel-700 bg-steel-900 px-4 py-16 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[88rem]">
          <p className="eyebrow">Other operating environments</p>
          <h2 className="display mt-4 mb-9 text-4xl text-bone">Keep planning</h2>
          <ApplicationGrid compact exclude={guide.slug} />
        </div>
      </section>

      <JsonLd data={{ "@context": "https://schema.org", "@type": "Article", headline: guide.title, description: guide.description, image: absoluteUrl(guide.image), url, mainEntityOfPage: url, inLanguage: "en-AU", dateModified: "2026-09-19", author: { "@type": "Organization", name: "Machinery Specialist" }, publisher: { "@type": "Organization", name: "Machinery Specialist" }, about: guide.recommended.map((item) => item.category) }} />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
        { "@type": "ListItem", position: 2, name: "Applications", item: absoluteUrl("/applications/") },
        { "@type": "ListItem", position: 3, name: guide.shortTitle, item: url },
      ] }} />
    </>
  );
}
