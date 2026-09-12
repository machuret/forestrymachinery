import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { JsonLd } from "@/components/JsonLd";
import { GrindVsCutDiagram } from "@/components/diagrams/GrindVsCutDiagram";
import { Photograph } from "@/components/Photograph";
import { Calc } from "./Calc";
import { SITE, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Cost Per Stump Calculator | Excavator Stump Grinder Economics" },
  description:
    "Work out what a stump actually costs you to remove: attachment capital, teeth, carrier, operator and fuel, divided by stumps per hour. The only metric that compares a grinder against a crew honestly.",
  alternates: { canonical: absoluteUrl("/cost-per-stump-calculator/") },
};

export default function CostPerStumpPage() {
  return (
    <>
      <PageHero
        eyebrow="Calculator"
        title="Cost per stump is the only metric that matters"
        crumb="Cost per stump"
        lead="Purchase price is the number buyers focus on and the smallest part of the decision. Cost per stump absorbs machine, labour, wear and capital together, which is why it is the figure that decides whether the attachment pays."
      />

      <section className="mx-auto max-w-[88rem] px-4 py-14 sm:px-6 sm:py-20 lg:px-10">
        <Calc />
      </section>

      <section className="mx-auto max-w-[88rem] px-4 pb-16 sm:px-6 lg:px-10">
        <div className="rule-heavy" />
        <h2 className="display mt-5 text-3xl text-bone sm:text-4xl">Make sure you are costing the right tool</h2>
        <p className="mt-5 max-w-3xl text-[1.02rem] leading-relaxed text-concrete">
          This calculator assumes grinding: destroying the stump in place, leaving chip and no spoil. If you are pulling
          stumps anyway and the problem is transporting and processing what comes out, you want a cutter, and the metric
          becomes cost per tonne processed rather than cost per stump.
        </p>
        <div className="mt-9">
          <GrindVsCutDiagram />
        </div>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/compare/stump-grinder-vs-stump-cutter/"
            className="inline-flex items-center gap-2 border border-steel-600 px-6 py-3.5 font-mono text-[0.7rem] tracking-[0.14em] text-bone uppercase transition-colors hover:border-hazard hover:text-hazard"
          >
            Grinder vs cutter, in full →
          </Link>
          <Link
            href="/stump-grinder-guide/"
            className="inline-flex items-center gap-2 border border-steel-600 px-6 py-3.5 font-mono text-[0.7rem] tracking-[0.14em] text-bone uppercase transition-colors hover:border-hazard hover:text-hazard"
          >
            Stump grinder guide →
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-[88rem] px-4 pb-20 sm:px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_24rem] lg:items-start">
          <div>
            <div className="rule-heavy" />
            <h2 className="display mt-5 text-3xl text-bone sm:text-4xl">What moves the number most</h2>
            <ol className="mt-8 space-y-6">
              {[
                {
                  t: "Teeth life, not teeth price",
                  b: "A cheaper set that lasts half as long is more expensive. In abrasive or stony ground, tooth cost is a monthly line item you budget rather than a spare you order occasionally — halve the teeth-life figure above and watch what happens to the total.",
                },
                {
                  t: "Stumps per hour",
                  b: "The single biggest lever, and the one buyers estimate most optimistically. It is set by stump diameter, species, root plate and access, not by the attachment's rated capacity.",
                },
                {
                  t: "Annual hours",
                  b: "Below about 200 hours a year, hire or subcontract. Between 200 and 500, buy if the tool unlocks work you currently turn away. Above 500, ownership almost always wins and wear-part supply becomes more important than purchase price.",
                },
                {
                  t: "Carrier wear",
                  b: "Grinding puts continuous load on a machine designed for intermittent load. Pumps, coolers and final drives feel it. If you intend to run hard, raise the carrier rate above to reflect tighter service intervals.",
                },
              ].map((n, i) => (
                <li key={n.t} className="flex gap-5">
                  <span className="font-mono text-[0.75rem] text-hazard">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="display text-xl text-bone">{n.t}</h3>
                    <p className="mt-2 text-[0.95rem] leading-relaxed text-concrete">{n.b}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="space-y-8">
            <Photograph photo="stumpGrinderDipperfox" />
            <div className="border border-steel-700 bg-steel-900 p-6">
              <p className="eyebrow">{SITE.phoneLabel}</p>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-concrete">
                Bring your carrier&rsquo;s weight, flow and pressure and we will tell you which model in the range suits
                the stump counts you are quoting.
              </p>
              <Link
                href={SITE.quotePath}
                className="mt-5 inline-flex items-center gap-2 bg-hazard px-5 py-3 font-mono text-[0.68rem] font-semibold tracking-[0.14em] text-steel-950 uppercase transition-colors hover:bg-moss-400"
              >
                Request a quote →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "Cost per stump calculator",
          url: absoluteUrl("/cost-per-stump-calculator/"),
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
              name: "Cost per stump calculator",
              item: absoluteUrl("/cost-per-stump-calculator/"),
            },
          ],
        }}
      />
    </>
  );
}
