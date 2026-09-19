import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { TutorialGrid } from "@/components/TutorialGrid";
import { TUTORIALS, tutorial } from "@/lib/tutorials";
import { absoluteUrl, SITE } from "@/lib/site";

export const dynamicParams = false;
export function generateStaticParams() { return TUTORIALS.map((item) => ({ slug: item.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const item = tutorial((await params).slug);
  if (!item) return {};
  const url = absoluteUrl(`/tutorials/${item.slug}/`);
  return { title: { absolute: `${item.shortTitle} | Forestry Attachment Tutorial` }, description: item.metaDescription, alternates: { canonical: url }, openGraph: { title: item.title, description: item.metaDescription, type: "article", url, images: [item.image] } };
}

export default async function TutorialPage({ params }: { params: Promise<{ slug: string }> }) {
  const item = tutorial((await params).slug);
  if (!item) notFound();
  const url = absoluteUrl(`/tutorials/${item.slug}/`);
  return (
    <>
      <section className="relative min-h-[40rem] overflow-hidden border-b border-steel-700 bg-steel-950">
        <Image src={item.image} alt={item.imageAlt} fill priority sizes="100vw" className="field-image object-cover" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-steel-950 via-steel-950/90 to-steel-950/20" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-steel-950 via-transparent to-steel-950/35" />
        <div className="relative mx-auto flex min-h-[40rem] max-w-[88rem] flex-col px-4 pt-10 pb-14 sm:px-6 lg:px-10">
          <nav aria-label="Breadcrumb" className="font-mono text-[0.65rem] tracking-[0.16em] text-bone/65 uppercase"><Link href="/" className="hover:text-hazard">Home</Link><span className="px-2 text-bone/30">/</span><Link href="/tutorials/" className="hover:text-hazard">Tutorials</Link><span className="px-2 text-bone/30">/</span><span className="text-hazard">{item.shortTitle}</span></nav>
          <div className="mt-auto max-w-4xl pt-20">
            <p className="eyebrow">{item.code} · {item.eyebrow}</p>
            <h1 className="display mt-5 text-[2.6rem] leading-[0.94] text-bone sm:text-6xl lg:text-[4.25rem]">{item.title}</h1>
          </div>
        </div>
        <div className="h-2 hazard-stripes" />
      </section>

      <article className="mx-auto max-w-[88rem] px-4 py-16 sm:px-6 sm:py-24 lg:px-10">
        <section className="border-l-[3px] border-hazard bg-steel-900 p-6 sm:p-9"><p className="font-mono text-[0.62rem] tracking-[0.2em] text-hazard uppercase">The short answer</p><p className="mt-4 max-w-4xl text-lg leading-relaxed text-bone sm:text-xl">{item.answer}</p></section>

        <section className="mt-16">
          <p className="eyebrow">Procedure</p><h2 className="display mt-4 text-4xl text-bone">Complete the work in this order</h2>
          <ol className="mt-8 grid gap-px bg-steel-700 lg:grid-cols-5">
            {item.steps.map((step, index) => <li key={step.title} className="bg-steel-900 p-6"><span className="font-mono text-[0.68rem] text-hazard">{String(index + 1).padStart(2, "0")}</span><h3 className="display mt-4 text-xl text-bone">{step.title}</h3><p className="mt-4 text-[0.93rem] leading-relaxed text-concrete">{step.body}</p></li>)}
          </ol>
        </section>

        <div className="mt-16 grid gap-14 lg:grid-cols-[minmax(0,1fr)_22rem]">
          <div className="space-y-14">
            {item.sections.map((section) => <section key={section.title}><div className="rule-heavy" /><h2 className="display mt-5 text-3xl text-bone sm:text-4xl">{section.title}</h2><div className="mt-6 max-w-3xl space-y-5 text-[1rem] leading-relaxed text-concrete">{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></section>)}
            <section><div className="rule-heavy" /><h2 className="display mt-5 text-3xl text-bone sm:text-4xl">Common mistakes</h2><div className="mt-8 grid gap-px bg-steel-700 sm:grid-cols-2">{item.mistakes.map((mistake) => <div key={mistake.title} className="bg-steel-900 p-6"><h3 className="display text-xl text-bone">{mistake.title}</h3><p className="mt-3 text-[0.94rem] leading-relaxed text-concrete">{mistake.body}</p></div>)}</div></section>
            <section><div className="rule-heavy" /><h2 className="display mt-5 text-3xl text-bone sm:text-4xl">Continue the job</h2><div className="mt-8 grid gap-px bg-steel-700 sm:grid-cols-3">{item.related.map((link) => <div key={link.href} className="group relative bg-steel-900 p-6"><h3 className="display text-xl text-bone group-hover:text-hazard"><Link href={link.href} className="after:absolute after:inset-0">{link.label}</Link></h3><p className="mt-3 text-sm leading-relaxed text-concrete">{link.why}</p></div>)}</div></section>
          </div>
          <aside><div className="sticky top-24 border border-steel-700 bg-steel-900 p-6"><p className="font-mono text-[0.62rem] tracking-[0.18em] text-hazard uppercase">Field record</p><ul className="mt-5 space-y-3">{item.checklist.map((check) => <li key={check} className="flex gap-3 text-sm leading-relaxed text-bone/85"><span aria-hidden="true" className="mt-1 h-3.5 w-3.5 shrink-0 border border-hazard" />{check}</li>)}</ul><Link href={SITE.quotePath} className="mt-7 flex justify-center bg-hazard px-4 py-3 font-mono text-[0.65rem] font-semibold tracking-[0.14em] text-steel-950 uppercase hover:bg-moss-400">Use this in an enquiry →</Link></div></aside>
        </div>
      </article>

      <section className="border-t border-steel-700 bg-steel-900 px-4 py-16 sm:px-6 lg:px-10"><div className="mx-auto max-w-[88rem]"><p className="eyebrow">More field procedures</p><h2 className="display mt-4 mb-9 text-4xl text-bone">Keep building the machine record</h2><TutorialGrid /></div></section>

      <JsonLd data={{ "@context": "https://schema.org", "@type": "HowTo", name: item.title, description: item.metaDescription, image: absoluteUrl(item.image), url, step: item.steps.map((step, index) => ({ "@type": "HowToStep", position: index + 1, name: step.title, text: step.body })), author: { "@type": "Organization", name: SITE.name }, dateModified: "2026-09-19", inLanguage: "en-AU" }} />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "Article", headline: item.title, description: item.metaDescription, image: absoluteUrl(item.image), url, mainEntityOfPage: url, author: { "@type": "Organization", name: SITE.name }, publisher: { "@type": "Organization", name: SITE.name }, dateModified: "2026-09-19", inLanguage: "en-AU" }} />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") }, { "@type": "ListItem", position: 2, name: "Tutorials", item: absoluteUrl("/tutorials/") }, { "@type": "ListItem", position: 3, name: item.shortTitle, item: url }] }} />
    </>
  );
}
