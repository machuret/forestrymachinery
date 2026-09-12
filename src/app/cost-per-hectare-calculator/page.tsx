import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { JsonLd } from "@/components/JsonLd";
import { Photograph } from "@/components/Photograph";
import { Calc } from "./Calc";
import { SITE, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Cost Per Hectare Calculator | Forestry Mulching and Clearing Rates" },
  description:
    "Price mulching and clearing work properly: hectares per hour, machine and operator cost, teeth, fuel, mobilisation, overhead and margin, resolved into a defensible tender rate per hectare.",
  alternates: { canonical: absoluteUrl("/cost-per-hectare-calculator/") },
};

export default function CostPerHectarePage() {
  return (
    <>
      <PageHero
        eyebrow="Calculator"
        title="Pricing mulching work by the hectare"
        crumb="Cost per hectare"
        lead="Fuel reduction, roadside and vegetation management tenders are priced per hectare, so a productivity figure you have not measured is a margin you have not got. Enter your own numbers and the rate falls out."
      />

      <section className="mx-auto max-w-[88rem] px-4 py-14 sm:px-6 sm:py-20 lg:px-10">
        <Calc />
      </section>

      <section className="mx-auto max-w-[88rem] px-4 pb-20 sm:px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_24rem] lg:items-start">
          <div>
            <div className="rule-heavy" />
            <h2 className="display mt-5 text-3xl text-bone sm:text-4xl">Where hectare pricing goes wrong</h2>
            <ol className="mt-8 space-y-6">
              {[
                {
                  t: "Brochure hectares",
                  b: "Published productivity is a best case: light material, flat ground, an experienced operator and no interruptions. Measure your own output on your own material before you commit to a rate, because the difference between 0.5 and 0.25 hectares an hour doubles your cost base.",
                },
                {
                  t: "Dig-rate fuel",
                  b: "Mulching is continuous load on a machine designed for intermittent load. Fuel burn, cooling demand and service intervals all move. Costing a mulching hour at your excavation hourly rate understates it every time.",
                },
                {
                  t: "Teeth treated as a spare",
                  b: "In abrasive or stony ground, teeth are a monthly budget line, not an occasional order. Put a real hourly figure in above — including the downtime to change them — rather than absorbing it in overhead.",
                },
                {
                  t: "Mobilisation spread thin",
                  b: "Float on, float off and set-up are fixed per job, so they hit small jobs hardest. A twelve hectare job carries mobilisation comfortably; a two hectare job does not, and pricing both at the same per-hectare rate loses money on one of them.",
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

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/forestry-mulcher-guide/"
                className="inline-flex items-center gap-2 border border-steel-600 px-6 py-3.5 font-mono text-[0.7rem] tracking-[0.14em] text-bone uppercase transition-colors hover:border-hazard hover:text-hazard"
              >
                Forestry mulcher guide →
              </Link>
              <Link
                href="/compare/tree-shear-vs-forestry-mulcher/"
                className="inline-flex items-center gap-2 border border-steel-600 px-6 py-3.5 font-mono text-[0.7rem] tracking-[0.14em] text-bone uppercase transition-colors hover:border-hazard hover:text-hazard"
              >
                Shear or mulcher? →
              </Link>
            </div>
          </div>

          <div className="space-y-8">
            <Photograph photo="mulcherTe" />
            <div className="border border-steel-700 bg-steel-900 p-6">
              <p className="eyebrow">{SITE.phoneLabel}</p>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-concrete">
                Rotor choice is the decision, not the model number. Tell us the material you are clearing and we will
                tell you which rotor suits it.
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
          name: "Cost per hectare calculator",
          url: absoluteUrl("/cost-per-hectare-calculator/"),
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
              name: "Cost per hectare calculator",
              item: absoluteUrl("/cost-per-hectare-calculator/"),
            },
          ],
        }}
      />
    </>
  );
}
