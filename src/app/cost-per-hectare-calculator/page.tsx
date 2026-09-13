import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { JsonLd } from "@/components/JsonLd";
import { nodeToText } from "@/lib/node-text";
import { Section, Prose, FaqBlock, NextSteps, Checklist, type Qa } from "@/components/content";
import { Photograph } from "@/components/Photograph";
import { Calc } from "./Calc";
import { SITE, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Cost Per Hectare Calculator | Forestry Mulching and Clearing Rates" },
  description:
    "Price mulching and clearing by the hectare: productivity, wear, mobilisation, overhead and margin, resolved into a tender rate you can defend.",
  alternates: { canonical: absoluteUrl("/cost-per-hectare-calculator/") },
  openGraph: { url: absoluteUrl("/cost-per-hectare-calculator/") },
};

const FAQS: Qa[] = [
  {
    q: "How much does forestry mulching cost per hectare in Australia?",
    a: "The honest answer is that it depends on inputs only you have: your hectares per hour on the material in front of you, your machine and operator rates, your teeth spend and your mobilisation. Rates quoted in the market vary by a factor of several because the work does. Enter your own figures above and you get a rate you can defend in a tender, rather than an average you cannot.",
  },
  {
    q: "What hectares per hour should I assume?",
    a: "Whatever you have measured. Published productivity is a best case: light material, flat ground, an experienced operator and no interruptions. The sensitivity table above shows what halving the figure does to your margin, and that gap is why measuring one package beats estimating ten.",
  },
  {
    q: "Why is mulching fuel higher than excavation fuel?",
    a: "Because mulching is continuous load on a machine designed for intermittent load. The rotor is drawing power constantly rather than in bursts, cooling demand rises, and service intervals tighten. Costing a mulching hour at your excavation hourly rate understates it every time.",
  },
  {
    q: "How should I handle mobilisation on small jobs?",
    a: "Explicitly, and never inside a per-hectare rate. Float on, float off and set-up are fixed per job, so they hit small jobs hardest. A twelve hectare job carries mobilisation comfortably; a two hectare job does not, and pricing both at the same per-hectare rate loses money on one of them.",
  },
  {
    q: "What teeth cost should I put in?",
    a: "An hourly figure from your own records if you have them, or a supplier's written quote divided by realistic tooth life in your ground if you do not. In abrasive or stony conditions this is a monthly budget line, not an occasional order, and leaving it in overhead hides the number that decides whether the work is profitable.",
  },
  {
    q: "Does this work for clearing that is not mulching?",
    a: "The structure works for any area-priced vegetation work, including shear-based clearing, as long as you enter the right productivity and wear figures. It does not translate to stem-priced or stump-priced work — use the cost per stump calculator for grinding.",
  },
  {
    q: "Should margin sit inside or outside the rate?",
    a: "Inside, and stated separately in your own model so you can see it. The calculator separates cost, overhead and margin deliberately: it lets you see what happens to your margin when productivity disappoints, which is the scenario that actually occurs on site.",
  },
];

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

      <Section
        id="method"
        title="How the calculation works"
        lead="Direct cost first, then the job costs that sit on top of it, then margin. Every figure is yours."
        className="mx-auto max-w-[88rem] px-4 sm:px-6 lg:px-10"
      >
        <Prose>
          <p>
            Direct hourly cost is the sum of carrier, operator, fuel, teeth and attachment capital. Multiply by the
            hours the job takes at your productivity and you have the direct cost for the whole job. Mobilisation is
            added as a fixed amount because it does not scale with area, then overhead as a percentage, then margin.
          </p>
          <p>
            The tender rate per hectare is the total divided by job size. The break-even figure below it strips out
            mobilisation, overhead and margin entirely, so it tells you the absolute floor at which the machine and
            operator are paid for and nothing else is.
          </p>
          <p>
            The sensitivity table is the most useful part of the page. It holds your quoted rate fixed and varies
            productivity, which is what actually happens on site: you quote at one figure and the material turns out to
            be heavier than the walkover suggested. If your margin goes negative at 0.75× productivity, the rate is too
            thin regardless of how the headline number looks.
          </p>
        </Prose>
      </Section>

      <Section
        id="checklist"
        title="Getting honest inputs"
        className="mx-auto max-w-[88rem] px-4 sm:px-6 lg:px-10"
      >
        <Checklist
          title="Before you quote from this"
          items={[
            "Hectares per hour measured on comparable material",
            "Site walkover confirming material type and density",
            "Terrain and slope, which change productivity sharply",
            "Fuel burn under continuous mulching load, not dig load",
            "Teeth cost per hour from your own records",
            "Mobilisation quoted for this specific site",
            "Whether mulch depth is specified in the contract",
            "Whether the rate is per treated hectare or per titled hectare",
          ]}
        />
      </Section>

      <Section id="faq" title="Frequently asked questions" className="mx-auto max-w-[88rem] px-4 sm:px-6 lg:px-10">
        <FaqBlock items={FAQS} />
      </Section>

      <Section id="next" title="Where to go next" className="mx-auto max-w-[88rem] px-4 pb-8 sm:px-6 lg:px-10">
        <NextSteps
          items={[
            { href: "/costs/", label: "What attachments cost", why: "The five cost lines behind the hourly figure you just entered." },
            { href: "/hire-vs-buy/", label: "Hire, buy or subcontract", why: "Whether owning a mulcher makes sense at your annual hectares." },
            { href: "/forestry-mulcher-guide/", label: "Forestry mulcher guide", why: "Rotor choice, carrier load and the limitations worth knowing." },
          ]}
        />
      </Section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: nodeToText(f.a) },
          })),
        }}
      />
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
