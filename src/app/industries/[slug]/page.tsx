import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { IndustryGrid } from "@/components/IndustryGrid";
import { JsonLd } from "@/components/JsonLd";
import { INDUSTRY_PROFILES, industryProfile } from "@/lib/industries";
import { absoluteUrl, SITE } from "@/lib/site";

export const dynamicParams = false;
export function generateStaticParams() { return INDUSTRY_PROFILES.map((profile) => ({ slug: profile.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const profile = industryProfile((await params).slug);
  if (!profile) return {};
  const url = absoluteUrl(`/industries/${profile.slug}/`);
  return { title: { absolute: `${profile.shortTitle} Forestry Machinery | Australia` }, description: profile.description, alternates: { canonical: url }, openGraph: { title: profile.title, description: profile.description, type: "article", url, images: [profile.image] } };
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const profile = industryProfile((await params).slug);
  if (!profile) notFound();
  const url = absoluteUrl(`/industries/${profile.slug}/`);
  return (
    <>
      <section className="relative min-h-[42rem] overflow-hidden border-b border-steel-700 bg-steel-950">
        <Image src={profile.image} alt={profile.imageAlt} fill priority sizes="100vw" className="field-image object-cover" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-steel-950 via-steel-950/88 to-steel-950/15" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-steel-950 via-transparent to-steel-950/30" />
        <div className="relative mx-auto flex min-h-[42rem] max-w-[88rem] flex-col px-4 pt-10 pb-14 sm:px-6 lg:px-10">
          <nav aria-label="Breadcrumb" className="font-mono text-[0.65rem] tracking-[0.16em] text-bone/65 uppercase"><Link href="/" className="hover:text-hazard">Home</Link><span className="px-2 text-bone/30">/</span><Link href="/industries/" className="hover:text-hazard">Industries</Link><span className="px-2 text-bone/30">/</span><span className="text-hazard">{profile.shortTitle}</span></nav>
          <div className="mt-auto max-w-4xl pt-24">
            <p className="eyebrow flex items-center gap-3"><span className="h-2 w-2 rotate-45 bg-hazard" />{profile.code} · {profile.eyebrow}</p>
            <h1 className="display mt-5 text-[2.7rem] leading-[0.92] text-bone sm:text-6xl lg:text-[4.5rem]">{profile.title}</h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-bone/85 sm:text-xl">{profile.description}</p>
          </div>
        </div>
        <div className="h-2 hazard-stripes" />
      </section>

      <section className="mx-auto max-w-[88rem] px-4 py-16 sm:px-6 sm:py-24 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_22rem]">
          <div>
            <p className="eyebrow">The commercial outcome</p>
            <h2 className="display mt-4 max-w-4xl text-4xl leading-none text-bone sm:text-5xl">{profile.outcome}</h2>
            <div className="mt-12 grid gap-px bg-steel-700 md:grid-cols-3">
              {profile.priorities.map((priority, index) => <article key={priority.title} className="bg-steel-900 p-7"><span className="font-mono text-[0.68rem] text-hazard">{String(index + 1).padStart(2, "0")}</span><h3 className="display mt-5 text-2xl text-bone">{priority.title}</h3><p className="mt-4 text-[0.95rem] leading-relaxed text-concrete">{priority.body}</p></article>)}
            </div>
            <div className="mt-16 space-y-14">
              {profile.sections.map((section) => <section key={section.title}><h2 className="display text-3xl text-bone sm:text-4xl">{section.title}</h2><div className="mt-6 space-y-5 text-[1rem] leading-relaxed text-concrete">{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></section>)}
              <section>
                <h2 className="display text-3xl text-bone sm:text-4xl">Prove the case with field evidence</h2>
                <p className="mt-6 text-[1rem] leading-relaxed text-concrete">{profile.evidence}</p>
              </section>
            </div>
            <section className="mt-16">
              <p className="eyebrow">Continue the decision</p>
              <h2 className="display mt-4 text-3xl text-bone sm:text-4xl">Relevant guides and tools</h2>
              <div className="mt-8 divide-y divide-steel-700 border-y border-steel-700">
                {profile.recommended.map((item) => <div key={item.href} className="group relative grid gap-3 py-6 sm:grid-cols-[15rem_minmax(0,1fr)_auto] sm:items-center"><span className="display text-2xl text-bone group-hover:text-hazard"><Link href={item.href} className="after:absolute after:inset-0">{item.label}</Link></span><span className="text-[0.95rem] leading-relaxed text-concrete">{item.reason}</span><span className="font-mono text-xs text-hazard">VIEW →</span></div>)}
              </div>
            </section>
          </div>
          <aside><div className="sticky top-24 border border-steel-700 bg-steel-900 p-6"><p className="font-mono text-[0.62rem] tracking-[0.18em] text-hazard uppercase">Before requesting a quote</p><ol className="mt-5 space-y-4">{profile.checklist.map((item, index) => <li key={item} className="flex gap-3 text-sm leading-relaxed text-bone/85"><span className="font-mono text-hazard">{String(index + 1).padStart(2, "0")}</span>{item}</li>)}</ol><Link href={SITE.quotePath} className="mt-7 flex justify-center bg-hazard px-4 py-3 font-mono text-[0.65rem] font-semibold tracking-[0.14em] text-steel-950 uppercase hover:bg-moss-400">Prepare an enquiry →</Link></div></aside>
        </div>
      </section>

      <section className="border-t border-steel-700 bg-steel-900 px-4 py-16 sm:px-6 lg:px-10"><div className="mx-auto max-w-[88rem]"><p className="eyebrow">Other industries</p><h2 className="display mt-4 mb-9 text-4xl text-bone">Compare operating models</h2><IndustryGrid compact exclude={profile.slug} /></div></section>

      <JsonLd data={{ "@context": "https://schema.org", "@type": "Article", headline: profile.title, description: profile.description, image: absoluteUrl(profile.image), url, mainEntityOfPage: url, inLanguage: "en-AU", dateModified: "2026-09-19", author: { "@type": "Organization", name: SITE.name }, publisher: { "@type": "Organization", name: SITE.name }, about: profile.categories }} />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") }, { "@type": "ListItem", position: 2, name: "Industries", item: absoluteUrl("/industries/") }, { "@type": "ListItem", position: 3, name: profile.shortTitle, item: url }] }} />
    </>
  );
}
