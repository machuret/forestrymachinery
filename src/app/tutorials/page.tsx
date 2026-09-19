import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { TutorialGrid } from "@/components/TutorialGrid";
import { TUTORIALS } from "@/lib/tutorials";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Forestry Attachment Tutorials | Excavator Setup & Operation" },
  description: "Practical forestry attachment tutorials covering excavator hydraulics, carrier sizing, commissioning, case drains, used inspections and tender rates.",
  alternates: { canonical: absoluteUrl("/tutorials/") },
  openGraph: { title: "Forestry Attachment Tutorials", description: "Field procedures for specifying, installing, operating and costing excavator forestry attachments.", url: absoluteUrl("/tutorials/"), images: [TUTORIALS[0].image] },
};

export default function TutorialsPage() {
  return (
    <>
      <PageHero eyebrow="Field procedures" title="Do the checks that turn an attachment into a working system." crumb="Tutorials" lead="Practical, ordered procedures for the work between choosing a category and putting it into production: measuring hydraulics, matching the carrier, commissioning the installation, controlling wear and building a rate." />
      <main className="mx-auto max-w-[88rem] px-4 py-16 sm:px-6 sm:py-24 lg:px-10">
        <section className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_28rem] lg:items-start">
          <div>
            <p className="eyebrow">Use evidence, not assumptions</p>
            <h2 className="display mt-4 max-w-4xl text-4xl leading-none text-bone sm:text-5xl">Eight procedures for the decisions that commonly fail after purchase</h2>
          </div>
          <p className="text-[0.98rem] leading-relaxed text-concrete">The category guides explain what each attachment does. These tutorials explain how to gather the carrier data, inspect the equipment, commission the complete installation and measure the commercial result.</p>
        </section>

        <div className="mt-12 grid gap-8 text-[1rem] leading-relaxed text-concrete lg:grid-cols-2">
          <div className="space-y-5">
            <p>Most attachment problems begin outside the attachment. A quotation is prepared from a carrier tonne class instead of an actual lift chart. Pump output is mistaken for usable auxiliary flow. A pair of couplers is assumed to provide every function. The head arrives, and the missing bracket, drain, controller, guard or hose route becomes an urgent workshop problem.</p>
            <p>The first four tutorials prevent that chain. Measure flow under pressure with hot oil. Trace the installed circuit and identify what can operate simultaneously. Build attachment, hitch, rotator and retained material into the lift calculation. Commission the delivered combination under representative load and preserve a baseline for future diagnosis.</p>
          </div>
          <div className="space-y-5">
            <p>The next four procedures protect the operating result. A dedicated case drain keeps motor leakage from becoming a seal failure. A used-equipment inspection converts wear, missing fitment and support risk into a delivered-and-working cost. A tender-rate method connects completed production to paid hours, while a planned field kit turns parts availability into an uptime control.</p>
            <p>Each tutorial is written as a field sequence rather than a product recommendation. It states the short answer first, identifies the checks in order, explains why they matter, lists failure patterns and finishes with a recordable checklist. Use the relevant procedure as part of supplier briefing, commissioning, operator training or estimating.</p>
          </div>
        </div>

        <div className="mt-16"><TutorialGrid /></div>

        <section className="mt-16 border-t border-steel-700 pt-14">
          <p className="eyebrow">How to use the library</p>
          <h2 className="display mt-4 text-4xl text-bone">Keep the outputs with the machine record</h2>
          <div className="mt-8 grid gap-px bg-steel-700 md:grid-cols-3">
            {[
              ["Before the quote", "Complete the circuit, flow and carrier checks, then send the recorded results to every supplier. Quotations become comparable because they start from the same installed machine and required work."],
              ["At delivery", "Use the installation and commissioning procedure to verify what was ordered, save machine settings and record a working baseline before wear or site conditions change performance."],
              ["During production", "Record completed units, hours, wear, temperature and downtime. Feed the evidence into the tender-rate and parts-kit procedures so the next job is based on observed work rather than memory."],
            ].map(([title, body]) => <article key={title} className="bg-steel-900 p-7"><h3 className="display text-2xl text-bone">{title}</h3><p className="mt-4 text-[0.95rem] leading-relaxed text-concrete">{body}</p></article>)}
          </div>
          <p className="mt-8 max-w-4xl text-[1rem] leading-relaxed text-concrete">These procedures do not replace the excavator or attachment manufacturer’s instructions, a lift study, competent hydraulic testing or a site-specific safe-work method. They make the information needed for those decisions visible. Where the result is uncertain, stop and involve the relevant supplier, engineer or technician rather than increasing a setting or improvising a connection.</p>
          <p className="mt-5 max-w-4xl text-[1rem] leading-relaxed text-concrete">Use the <Link href="/forestry-machinery-guide/" className="text-moss-400 underline decoration-moss-400/50 underline-offset-4 hover:text-hazard">complete buyer’s guide</Link> to select a category, the <Link href="/industries/" className="text-moss-400 underline decoration-moss-400/50 underline-offset-4 hover:text-hazard">industry profiles</Link> to define the commercial setting, and these tutorials to verify and document the system that will perform the work. Once the machine is deployed, continue with the <Link href="/operations/" className="text-moss-400 underline decoration-moss-400/50 underline-offset-4 hover:text-hazard">operation and maintenance guides</Link>.</p>
        </section>
      </main>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "CollectionPage", name: "Forestry attachment tutorials", url: absoluteUrl("/tutorials/"), hasPart: TUTORIALS.map((item) => ({ "@type": "HowTo", name: item.title, url: absoluteUrl(`/tutorials/${item.slug}/`) })) }} />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") }, { "@type": "ListItem", position: 2, name: "Tutorials", item: absoluteUrl("/tutorials/") }] }} />
    </>
  );
}
