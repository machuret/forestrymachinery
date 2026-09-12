import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { JsonLd } from "@/components/JsonLd";
import { CircuitDiagram } from "@/components/diagrams/CircuitDiagram";
import { CarrierBandChart } from "@/components/diagrams/CarrierBandChart";
import { Matcher } from "./Matcher";
import { SITE, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Hydraulic Flow and Attachment Matching Calculator | Australia" },
  description:
    "Enter your carrier's operating weight, auxiliary flow and fitted circuits, and see which forestry attachment categories actually suit it. Covers shears, grinders, mulchers, grapple saws, grabs, pruners and tillage tools.",
  alternates: { canonical: absoluteUrl("/hydraulic-flow-calculator/") },
};

export default function FlowCalculatorPage() {
  return (
    <>
      <PageHero
        eyebrow="Calculator"
        title="Which attachments will your machine actually run?"
        crumb="Flow calculator"
        lead="Most disappointing attachment purchases trace back to a buyer who knew the machine weight and guessed the other two numbers. Enter all three and the shortlist writes itself."
      />

      <section className="mx-auto max-w-[88rem] px-4 py-14 sm:px-6 sm:py-20 lg:px-10">
        <Matcher />
      </section>

      <section className="mx-auto max-w-[88rem] px-4 pb-16 sm:px-6 lg:px-10">
        <div className="rule-heavy" />
        <h2 className="display mt-5 text-3xl text-bone sm:text-4xl">The circuit is the constraint, not the weight</h2>
        <p className="mt-5 max-w-3xl text-[1.02rem] leading-relaxed text-concrete">
          Forestry attachments differ sharply in what they demand from the hydraulic circuit, and a machine inside the
          published weight band still cannot run a tool whose circuit it does not have. These are the four
          configurations, drawn to the same scale.
        </p>
        <div className="mt-9">
          <CircuitDiagram />
        </div>
      </section>

      <section className="mx-auto max-w-[88rem] px-4 pb-16 sm:px-6 lg:px-10">
        <div className="rule-heavy" />
        <h2 className="display mt-5 text-3xl text-bone sm:text-4xl">Every published carrier range on one axis</h2>
        <div className="mt-9">
          <CarrierBandChart />
        </div>
      </section>

      {/* Methodology — makes this a page, not just a widget */}
      <section className="mx-auto max-w-[88rem] px-4 pb-20 sm:px-6 lg:px-10">
        <div className="rule-heavy" />
        <h2 className="display mt-5 text-3xl text-bone sm:text-4xl">How this is calculated</h2>
        <div className="mt-8 grid gap-px bg-steel-700 md:grid-cols-3">
          {[
            {
              t: "Carrier range is the hard gate",
              b: "Published operating machine ranges come from the manufacturer figures quoted in each category guide. Outside the range means outside the range: undersize the carrier and you get tip-over risk, hydraulic starvation and a slow tool; oversize it and you overload the attachment structure until something cracks.",
            },
            {
              t: "Circuit availability is the second gate",
              b: "Each category needs a specific circuit — single-acting, hammer line plus case drain, double-acting, or dual. If you have not listed that circuit on the machine, the category is excluded rather than flagged, because fitting one is a workshop job with a real cost.",
            },
            {
              t: "Flow windows are indicative",
              b: "Flow narrows the shortlist, it does not replace a spec sheet. The one figure published in these guides is the OMEF GS grapple saw range, which runs from 15 to 50 L/min on the smallest model up to 160 L/min on the largest. Confirm the model-specific figure before you sign.",
            },
          ].map((n) => (
            <div key={n.t} className="bg-steel-950 p-6 sm:p-7">
              <h3 className="display text-xl text-bone">{n.t}</h3>
              <p className="mt-3 text-[0.93rem] leading-relaxed text-concrete">{n.b}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href={SITE.quotePath}
            className="inline-flex items-center gap-2 bg-hazard px-6 py-3.5 font-mono text-[0.7rem] font-semibold tracking-[0.14em] text-steel-950 uppercase transition-colors hover:bg-moss-400"
          >
            Send these numbers for a shortlist →
          </Link>
          <Link
            href="/compatibility/"
            className="inline-flex items-center gap-2 border border-steel-600 px-6 py-3.5 font-mono text-[0.7rem] tracking-[0.14em] text-bone uppercase transition-colors hover:border-hazard hover:text-hazard"
          >
            Full compatibility matrix
          </Link>
        </div>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "Forestry attachment compatibility calculator",
          url: absoluteUrl("/hydraulic-flow-calculator/"),
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          inLanguage: "en-AU",
          offers: { "@type": "Offer", price: "0", priceCurrency: "AUD" },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
            {
              "@type": "ListItem",
              position: 2,
              name: "Flow calculator",
              item: absoluteUrl("/hydraulic-flow-calculator/"),
            },
          ],
        }}
      />
    </>
  );
}
