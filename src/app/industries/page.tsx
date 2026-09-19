import type { Metadata } from "next";
import Link from "next/link";
import { IndustryGrid } from "@/components/IndustryGrid";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { INDUSTRY_PROFILES } from "@/lib/industries";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Forestry Machinery by Industry | Australia" },
  description: "Forestry attachment buying guides for Australian civil contractors, arborists, councils, utilities, infrastructure projects and agriculture.",
  alternates: { canonical: absoluteUrl("/industries/") },
  openGraph: { title: "Forestry Machinery by Industry | Australia", description: "Choose forestry attachments around each industry's work, carrier fleet, support risk and commercial production unit.", url: absoluteUrl("/industries/"), images: [INDUSTRY_PROFILES[0].image] },
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero eyebrow="Choose the operating model" title="The same attachment earns differently in every industry." crumb="Industries" lead="A civil contractor, arborist, council and utility crew may consider the same machine for entirely different reasons. These profiles connect the attachment to the contract, fleet and production unit that pays for it." />

      <section className="mx-auto max-w-[88rem] px-4 py-16 sm:px-6 sm:py-24 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_28rem] lg:items-end">
          <div>
            <p className="eyebrow">Industry buying logic</p>
            <h2 className="display mt-4 max-w-4xl text-4xl leading-none text-bone sm:text-5xl">Start with how the business wins work and supports the machine</h2>
          </div>
          <p className="text-[0.97rem] leading-relaxed text-concrete">The category guide explains what the attachment does. The industry profile explains why a particular buyer would own it, how it should be quoted and which risks belong in the rate.</p>
        </div>

        <div className="mt-12 grid gap-8 text-[0.98rem] leading-relaxed text-concrete lg:grid-cols-2">
          <div className="space-y-5">
            <p>Begin with the unit the client purchases. Civil projects buy released work fronts and completed hectares. Arborists sell controlled removals, pruning and finished sites. Councils manage dispersed public assets and response capability. Utility programs buy inspected corridor distance within an access window. Remote infrastructure projects buy production with support resilience, while agricultural buyers often value timing and the ability to carry one carrier into the next task.</p>
            <p>That production unit changes the attachment decision. A high-capacity shear has little value when handling or transport controls the work face. A compact grinder may beat a larger unit across scattered street sites because it mobilises quickly. A mulcher that performs strongly in clean demonstration material may lose its advantage in rock, wire or sustained summer heat. The industry context converts published capability into a commercial method.</p>
          </div>
          <div className="space-y-5">
            <p>Fleet fit matters as much as attachment fit. Identify which excavator is available when the work occurs, how it reaches site, what guarding and cooling it needs, and whether the crew can support the hydraulic functions. Include hitch, bracket, rotator, retained material and any counterweight in lift calculations. Confirm usable flow at working pressure and return restrictions rather than relying on maximum pump output.</p>
            <p>Support risk also changes by industry. A metropolitan tree contractor may obtain parts the same day, while a remote corridor crew needs critical inventory on the support vehicle. Councils may require a transparent whole-of-life procurement case. Seasonal agricultural work may favour hire unless timing has a high opportunity cost. The profiles below make those assumptions visible before a quote or tender rate is accepted.</p>
          </div>
        </div>

        <div className="mt-16"><IndustryGrid /></div>

        <section className="mt-16 border-t border-steel-700 pt-14">
          <p className="eyebrow">A common procurement method</p>
          <h2 className="display mt-4 max-w-3xl text-4xl text-bone">Compare complete working systems</h2>
          <div className="mt-8 grid gap-px bg-steel-700 md:grid-cols-3">
            <article className="bg-steel-900 p-7"><h3 className="display text-2xl text-bone">Define the work</h3><p className="mt-4 text-[0.94rem] leading-relaxed text-concrete">Provide representative material, terrain, access, retained assets, required finish and annual hours. State the production unit used for acceptance and tendering so supplier assumptions can be tested against the service actually sold.</p></article>
            <article className="bg-steel-900 p-7"><h3 className="display text-2xl text-bone">Define the carrier</h3><p className="mt-4 text-[0.94rem] leading-relaxed text-concrete">Provide make, model, configuration, lift chart, hitch, auxiliary flow, pressure, return and case drain. Require the ordered attachment mass and a written carrier assessment rather than a tonne-class statement.</p></article>
            <article className="bg-steel-900 p-7"><h3 className="display text-2xl text-bone">Define support</h3><p className="mt-4 text-[0.94rem] leading-relaxed text-concrete">Itemise installation, guarding, controls, commissioning, training, freight, initial wear stock, warranty and field response. Compare delivered-and-working cost with downtime exposure rather than choosing the lowest loose-head price.</p></article>
          </div>
          <p className="mt-8 max-w-4xl text-[0.98rem] leading-relaxed text-concrete">Keep the completed brief, supplier response and commissioning measurements with the machine record. Add production, fuel, wear and downtime by work type after deployment. Those results turn the next purchase from a fresh sales exercise into an evidence-based fleet decision. They also provide estimators with realistic rates for new material, site and mobilisation conditions instead of reusing one headline number across unrelated contracts.</p>
          <p className="mt-5 max-w-4xl text-[0.98rem] leading-relaxed text-concrete">If the industry profile identifies the commercial setting, the <Link href="/applications/" className="text-moss-400 underline decoration-moss-400/50 underline-offset-4 hover:text-hazard">application guides</Link> define the operating sequence and the <Link href="/forestry-machinery-guide/" className="text-moss-400 underline decoration-moss-400/50 underline-offset-4 hover:text-hazard">complete buyer’s guide</Link> covers the attachment categories, hydraulics and carrier match. Use all three layers before requesting comparable quotations.</p>
          <p className="mt-5 max-w-4xl text-[0.98rem] leading-relaxed text-concrete">The final decision should remain traceable. Record why a category was shortlisted, the carrier data supplied, every qualification in the quotation and the production assumptions used in the ownership model. Commission against representative work, then compare actual output, wear, fuel and downtime with that baseline. A clear record protects the procurement decision and gives the next estimator or fleet manager a stronger starting point.</p>
        </section>
      </section>

      <JsonLd data={{ "@context": "https://schema.org", "@type": "CollectionPage", name: "Forestry machinery by industry", url: absoluteUrl("/industries/"), hasPart: INDUSTRY_PROFILES.map((profile) => ({ "@type": "Article", name: profile.title, url: absoluteUrl(`/industries/${profile.slug}/`) })) }} />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") }, { "@type": "ListItem", position: 2, name: "Industries", item: absoluteUrl("/industries/") }] }} />
    </>
  );
}
