import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BrandLogo } from "@/components/BrandLogo";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { Photograph } from "@/components/Photograph";
import { BRAND_PROFILES, brandProfile } from "@/lib/brands";
import { categoryMeta } from "@/lib/categories";
import { photo } from "@/lib/media";
import { absoluteUrl, SITE } from "@/lib/site";

const TOPICS = ["range-guide", "carrier-compatibility"] as const;
type Topic = (typeof TOPICS)[number];

function isTopic(value: string): value is Topic { return TOPICS.includes(value as Topic); }

export const dynamicParams = false;
export function generateStaticParams() { return BRAND_PROFILES.flatMap((brand) => TOPICS.map((topic) => ({ brand: brand.slug, topic }))); }

export async function generateMetadata({ params }: { params: Promise<{ brand: string; topic: string }> }): Promise<Metadata> {
  const { brand, topic } = await params;
  const profile = brandProfile(brand);
  if (!profile || !isTopic(topic)) return {};
  const range = topic === "range-guide";
  const title = range ? `${profile.name} Forestry Attachment Range Guide | Australia` : `${profile.name} Carrier Compatibility & Excavator Setup`;
  const description = range
    ? `${profile.name} forestry attachment range guide covering series, jobs, carrier classes, limitations, parts and the questions Australian buyers should ask.`
    : `${profile.name} attachment carrier compatibility guide covering lift capacity, hydraulic circuits, installation, guarding and commissioning in Australia.`;
  const url = absoluteUrl(`/brands/${profile.slug}/${topic}/`);
  const hero = categoryMeta(profile.series[0].guide)?.hero;
  return { title: { absolute: title }, description, alternates: { canonical: url }, openGraph: { title, description, url, type: "article", images: hero ? [absoluteUrl(photo(hero).src)] : undefined } };
}

function RangeGuide({ brand }: { brand: NonNullable<ReturnType<typeof brandProfile>> }) {
  const categories = [...new Set(brand.series.map((series) => series.guide))].map(categoryMeta).filter(Boolean);
  const hero = categories[0]?.hero;
  return (
    <>
      <PageHero eyebrow={`Range guide · ${brand.origin}`} title={`${brand.name} forestry attachment range`} crumb="Range guide" trail={[{ label: "Brands", href: "/brands/" }, { label: brand.name, href: `/brands/${brand.slug}/` }]} lead={`A series-by-series buying map: what ${brand.name} makes, which jobs each part of the range addresses, where the carrier boundaries sit and which commercial questions belong in the quotation.`} aside={<div className="border border-steel-700 bg-steel-850 p-6"><BrandLogo slug={brand.slug} /><p className="mt-6 font-mono text-[0.62rem] tracking-[0.16em] text-concrete uppercase">{brand.series.length} series · {categories.length} categories</p></div>} />
      <article className="mx-auto max-w-[88rem] px-4 py-16 sm:px-6 sm:py-24 lg:px-10">
        <section className="border-l-[3px] border-hazard bg-steel-900 p-6 sm:p-9"><p className="font-mono text-[0.62rem] tracking-[0.2em] text-hazard uppercase">The short answer</p><p className="mt-4 max-w-4xl text-lg leading-relaxed text-bone sm:text-xl">{brand.positioning}. Use this page to narrow the relevant series, then verify the individual model against measured carrier hydraulics, installed mass, lift capacity and the work’s required output. Range breadth is useful; it is not permission to treat every model as interchangeable.</p></section>

        {hero && <figure className="mt-12 max-w-5xl"><Photograph photo={hero} ratio="16/9" sizes="(max-width: 1024px) 100vw, 72rem" /><figcaption className="mt-3 font-mono text-[0.62rem] tracking-[0.1em] text-concrete uppercase">Representative category imagery · confirm the exact ordered model and configuration</figcaption></figure>}

        <section className="mt-16"><div className="rule-heavy" /><h2 className="display mt-5 text-3xl text-bone sm:text-4xl">Where the range sits</h2><div className="mt-7 max-w-3xl space-y-5 text-[1rem] leading-relaxed text-concrete">{brand.background.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></section>

        <section className="mt-16"><div className="rule-heavy" /><h2 className="display mt-5 text-3xl text-bone sm:text-4xl">Series by series</h2><div className="mt-8 grid gap-px bg-steel-700 md:grid-cols-2">
          {brand.series.map((series) => { const category = categoryMeta(series.guide); return <div key={series.code} className="group relative bg-steel-900 p-6"><div className="flex items-baseline justify-between gap-4"><span className="font-mono text-[0.68rem] text-hazard">{series.code}</span><span className="font-mono text-[0.58rem] tracking-[0.12em] text-concrete uppercase">{category?.label}</span></div><h3 className="display mt-4 text-2xl text-bone group-hover:text-hazard"><Link href={`/${series.guide}/`} className="after:absolute after:inset-0">{series.name}</Link></h3><p className="mt-4 text-[0.95rem] leading-relaxed text-concrete">{series.detail}. Treat this as a range position, then request the current model sheet and complete installed specification for the carrier being quoted.</p></div>; })}
        </div></section>

        <section className="mt-16 grid gap-12 lg:grid-cols-2">
          <div><div className="rule-heavy" /><h2 className="display mt-5 text-3xl text-bone">How to shortlist the range</h2><div className="mt-6 space-y-5 text-[1rem] leading-relaxed text-concrete"><p>Start with the output the contract purchases: a placed stem, processed residue, controlled section, handled log, maintained profile or prepared ground. Eliminate series that produce the wrong output even when they fit the excavator. Then screen the remaining models against operating weight, lift at working radius, measured auxiliary flow, working pressure, return limit and required circuit functions.</p><p>Request a quotation for the complete installed package: attachment, machine-specific bracket, hitch interface, rotator, hoses, couplers, controls, guarding, freight, commissioning, training and initial wear stock. Ask the supplier to state every carrier assumption and qualification. This keeps an apparently inexpensive loose head from being compared with a working system.</p><p>Finally, compare support around the series rather than the logo. Identify which wear and failure parts are physically held in Australia, realistic replenishment time, field-service coverage and warranty exclusions. Parts commonality across several {brand.name} attachments is valuable only when the relevant items are actually stocked and the fleet uses them often enough.</p></div></div>
          <div><div className="rule-heavy" /><h2 className="display mt-5 text-3xl text-bone">What distinguishes {brand.name}</h2><div className="mt-6 grid gap-px bg-steel-700">{brand.notes.map((note, index) => <div key={note} className="bg-steel-900 p-6"><span className="font-mono text-[0.65rem] text-hazard">{String(index + 1).padStart(2, "0")}</span><p className="mt-3 text-[0.95rem] leading-relaxed text-concrete">{note}</p></div>)}</div></div>
        </section>

        <section className="mt-16"><div className="rule-heavy" /><h2 className="display mt-5 text-3xl text-bone">Who should keep it on the shortlist</h2><div className="mt-8 grid gap-px bg-steel-700 md:grid-cols-2"><div className="bg-steel-900 p-7"><p className="font-mono text-[0.62rem] tracking-[0.16em] text-moss-400 uppercase">A good fit</p><ul className="mt-5 space-y-3">{brand.suitedTo.map((item) => <li key={item} className="flex gap-3 text-[0.95rem] leading-relaxed text-bone/85"><span className="text-moss-400">◆</span>{item}</li>)}</ul></div><div className="bg-steel-900 p-7"><p className="font-mono text-[0.62rem] tracking-[0.16em] text-hazard uppercase">Look elsewhere when</p><ul className="mt-5 space-y-3">{brand.notSuitedTo.map((item) => <li key={item} className="flex gap-3 text-[0.95rem] leading-relaxed text-bone/85"><span className="text-hazard">◆</span>{item}</li>)}</ul></div></div><div className="mt-8 max-w-4xl space-y-5 text-[1rem] leading-relaxed text-concrete"><p>Before removing another manufacturer from the shortlist, ask each supplier to respond to the same work and carrier brief. Compare the exact ordered model, installed mass, functions, hydraulic settings, included fitment, guarding, commissioning and wear stock. A broad series claim or an attractive loose-head price is not equivalent to a documented working package.</p><p>Keep the supplier response with the selection record and identify which assumptions still need a demonstration. Use representative material rather than a clean showcase item, record cycle and support requirements, and confirm the finished output is the one the contract accepts. This protects the decision from becoming a badge comparison and gives the crew a clear operating starting point.</p></div><Link href={`/brands/${brand.slug}/carrier-compatibility/`} className="mt-8 inline-flex border border-hazard px-5 py-3 font-mono text-[0.65rem] tracking-[0.14em] text-hazard uppercase hover:bg-hazard hover:text-steel-950">Check {brand.name} carrier compatibility →</Link></section>
        <section className="mt-16 border-t border-steel-700 pt-10">
          <p className="max-w-4xl text-[1rem] leading-relaxed text-concrete">Record why the selected {brand.name} series won and the conditions that would change that answer. Keep the carrier configuration, material sample, production assumption, supplier qualification and support promise with the decision. This gives the next buyer a usable starting point when the excavator, work type, support distance or annual hours change, and prevents a successful model on one job from becoming an automatic choice for a materially different one.</p>
        </section>
      </article>
    </>
  );
}

function CompatibilityGuide({ brand }: { brand: NonNullable<ReturnType<typeof brandProfile>> }) {
  const firstCategory = categoryMeta(brand.series[0].guide);
  return (
    <>
      <PageHero eyebrow="Carrier match · installed system" title={`${brand.name} carrier compatibility and excavator setup`} crumb="Carrier compatibility" trail={[{ label: "Brands", href: "/brands/" }, { label: brand.name, href: `/brands/${brand.slug}/` }]} lead={`A practical installation brief for matching ${brand.name} attachments to an excavator: lift, hydraulics, control functions, guarding, transport and commissioning evidence.`} aside={<div className="border border-steel-700 bg-steel-850 p-6"><BrandLogo slug={brand.slug} /><Link href={`/brands/${brand.slug}/range-guide/`} className="mt-6 block font-mono text-[0.62rem] tracking-[0.14em] text-hazard uppercase">View the complete range →</Link></div>} />
      <article className="mx-auto max-w-[88rem] px-4 py-16 sm:px-6 sm:py-24 lg:px-10">
        <section className="border-l-[3px] border-hazard bg-steel-900 p-6 sm:p-9"><p className="font-mono text-[0.62rem] tracking-[0.2em] text-hazard uppercase">The short answer</p><p className="mt-4 max-w-4xl text-lg leading-relaxed text-bone sm:text-xl">A published carrier range only opens the conversation. Approve the ordered {brand.name} model using installed attachment mass, lift capacity at the real radius, measured flow at working pressure, return and drain limits, simultaneous functions, machine protection and a loaded commissioning test.</p></section>

        {firstCategory && <div className="mt-12 max-w-5xl"><Photograph photo={firstCategory.hero} ratio="16/9" sizes="(max-width: 1024px) 100vw, 72rem" /></div>}

        <section className="mt-16"><p className="eyebrow">Five gates</p><h2 className="display mt-4 text-4xl text-bone">Approve the combination in this order</h2><ol className="mt-8 grid gap-px bg-steel-700 lg:grid-cols-5">{[
          ["Define the work", "State material, maximum representative size, required output, working radius, terrain, annual hours and whether the head retains material. The same model can be suitable for one controlled workflow and unstable or commercially wrong for another."],
          ["Build installed mass", "Add bracket, hitch, rotator, hoses, ordered options and retained material to the head. Compare the complete load with the exact boom, arm, counterweight, blade and undercarriage configuration on the excavator lift chart."],
          ["Measure hydraulics", "Record stable flow at the required pressure with hot oil, plus relief setting, return pressure and case-drain pressure where applicable. Confirm circuit direction and which functions must operate at the same time."],
          ["Protect and transport", "Specify cab, roof, belly, hose and cooler protection for the debris path. Calculate transport mass and dimensions with the installed package and establish whether the attachment travels fitted or on a stand."],
          ["Commission under load", "Test representative material through the intended working envelope. Record settings, pressure, temperature, stability, cycle time and operator limits. Keep the signed result with both carrier and attachment serial numbers."],
        ].map(([title, body], index) => <li key={title} className="bg-steel-900 p-6"><span className="font-mono text-[0.68rem] text-hazard">{String(index + 1).padStart(2, "0")}</span><h3 className="display mt-4 text-xl text-bone">{title}</h3><p className="mt-4 text-[0.93rem] leading-relaxed text-concrete">{body}</p></li>)}</ol></section>

        <section className="mt-16"><div className="rule-heavy" /><h2 className="display mt-5 text-3xl text-bone sm:text-4xl">Apply those gates to the {brand.name} series</h2><div className="mt-8 divide-y divide-steel-700 border-y border-steel-700">{brand.series.map((series) => <div key={series.code} className="grid gap-3 py-6 md:grid-cols-[7rem_18rem_minmax(0,1fr)]"><span className="font-mono text-[0.68rem] text-hazard">{series.code}</span><h3 className="display text-xl text-bone">{series.name}</h3><p className="text-[0.95rem] leading-relaxed text-concrete">{series.detail}. Verify the current model specification and every ordered option; the series description does not approve an individual carrier.</p></div>)}</div></section>

        <section className="mt-16 grid gap-12 lg:grid-cols-2"><div><div className="rule-heavy" /><h2 className="display mt-5 text-3xl text-bone">Installation risks to resolve</h2><div className="mt-7 space-y-5 text-[1rem] leading-relaxed text-concrete"><p>Fitment is a load path, not a hole pattern. Use a bracket and hitch interface designed for the carrier and ordered attachment, check pin engagement and clearances through the full articulation range, and confirm the hose sweep with tilt or rotation where fitted. Record the installed mass rather than repeating a dry catalogue figure.</p><p>Control logic must support the work cycle. List every function and identify which need to operate simultaneously. Diverter valves can make functions technically available while slowing production or interrupting grip. Confirm safe behaviour after an engine stop, hose failure or controller fault and document the recovery method for a disabled head.</p><p>Continuous tools place a different heat load on the excavator from an intermittent breaker. Test at operating temperature and monitor the cooling system. Return and case-drain restrictions can damage a motor even when supply flow appears correct, so pressure limits must be measured at the specified point.</p></div></div><div><div className="rule-heavy" /><h2 className="display mt-5 text-3xl text-bone">Known limits and support questions</h2><div className="mt-7 grid gap-px bg-steel-700">{brand.limitations.map((item) => <p key={item} className="bg-steel-900 p-6 text-[0.95rem] leading-relaxed text-concrete">{item}</p>)}</div></div></section>

        <section className="mt-16"><div className="rule-heavy" /><h2 className="display mt-5 text-3xl text-bone">Commissioning and support record</h2><div className="mt-7 max-w-3xl space-y-5 text-[1rem] leading-relaxed text-concrete">{brand.support.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<p>Keep the final quotation, carrier data, lift assessment, hydraulic test, installation drawings, saved monitor settings, commissioning readings, training record and wear-parts list together. That file becomes the baseline when production changes and protects the next operator from rediscovering the installation by trial and error.</p><p>After the first representative job, review completed production, paid hours, fuel, wear, hydraulic temperature, faults and changeover time against the buying assumptions. Update operator limits and the parts kit while the experience is current. Compatibility is not only a delivery-day pass; it is a working envelope that should become more accurate as the combination accumulates evidence.</p></div><div className="mt-8 flex flex-wrap gap-3"><Link href={`/brands/${brand.slug}/range-guide/`} className="border border-steel-600 px-5 py-3 font-mono text-[0.65rem] tracking-[0.14em] text-bone uppercase hover:border-hazard hover:text-hazard">{brand.name} range guide →</Link><Link href="/tutorials/size-forestry-attachment-to-excavator/" className="border border-hazard px-5 py-3 font-mono text-[0.65rem] tracking-[0.14em] text-hazard uppercase hover:bg-hazard hover:text-steel-950">Carrier-sizing tutorial →</Link><Link href={SITE.quotePath} className="bg-hazard px-5 py-3 font-mono text-[0.65rem] font-semibold tracking-[0.14em] text-steel-950 uppercase hover:bg-moss-400">Request a configured quote →</Link></div></section>
      </article>
    </>
  );
}

export default async function BrandTopicPage({ params }: { params: Promise<{ brand: string; topic: string }> }) {
  const { brand, topic } = await params;
  const profile = brandProfile(brand);
  if (!profile || !isTopic(topic)) notFound();
  const url = absoluteUrl(`/brands/${profile.slug}/${topic}/`);
  return (
    <>
      {topic === "range-guide" ? <RangeGuide brand={profile} /> : <CompatibilityGuide brand={profile} />}
      <JsonLd data={{ "@context": "https://schema.org", "@type": "Article", headline: topic === "range-guide" ? `${profile.name} forestry attachment range guide` : `${profile.name} carrier compatibility and excavator setup`, url, mainEntityOfPage: url, author: { "@type": "Organization", name: SITE.name }, publisher: { "@type": "Organization", name: SITE.name }, dateModified: "2026-09-19", inLanguage: "en-AU" }} />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") }, { "@type": "ListItem", position: 2, name: "Brands", item: absoluteUrl("/brands/") }, { "@type": "ListItem", position: 3, name: profile.name, item: absoluteUrl(`/brands/${profile.slug}/`) }, { "@type": "ListItem", position: 4, name: topic === "range-guide" ? "Range guide" : "Carrier compatibility", item: url }] }} />
    </>
  );
}
