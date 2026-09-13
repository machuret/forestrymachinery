import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { JsonLd } from "@/components/JsonLd";
import { nodeToText } from "@/lib/node-text";
import { Section, Prose, FaqBlock, NextSteps, Checklist, type Qa } from "@/components/content";
import { GrindVsCutDiagram } from "@/components/diagrams/GrindVsCutDiagram";
import { Photograph } from "@/components/Photograph";
import { Calc } from "./Calc";
import { SITE, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Cost Per Stump Calculator | Excavator Stump Grinder Economics" },
  description:
    "Work out what a stump costs you to remove: attachment capital, teeth, carrier, operator and fuel, divided by the stumps you complete in an hour.",
  alternates: { canonical: absoluteUrl("/cost-per-stump-calculator/") },
  openGraph: { url: absoluteUrl("/cost-per-stump-calculator/") },
};

const FAQS: Qa[] = [
  {
    q: "How much does stump grinding cost per stump in Australia?",
    a: "It varies too widely to publish a figure honestly, because the inputs that decide it are yours: what you paid for the attachment, how many hours it will run, what teeth cost in your ground, and how many stumps an hour you actually achieve. What is consistent is the structure. Enter your own numbers above and the result is defensible in a way a published average is not.",
  },
  {
    q: "What stump count per hour should I assume?",
    a: "Use your own measured figure, not a brochure one. Stumps per hour is set by diameter, species, root plate and access, and it is the single biggest lever in the calculation. If you have never measured it, hire for a package and count, because an optimistic assumption here quietly halves your margin.",
  },
  {
    q: "How long do stump grinder teeth last?",
    a: "Entirely dependent on ground. In clean soil a set lasts well; in sandy, stony or metal-contaminated urban fill they become a monthly budget line. Halve the teeth-life figure in the calculator above and watch the total move — that sensitivity is the reason to ask a supplier how many hours a set lasts in ground like yours rather than what a set costs.",
  },
  {
    q: "Should I include the excavator in the cost per stump?",
    a: "Yes. Whether you own the carrier or hire it, the machine is committed to the stump for as long as the attachment is working, and leaving it out produces a number that looks good and cannot be quoted from. Use your internal hourly rate if you own it, or the hire rate if you do not.",
  },
  {
    q: "Why does the calculator ask for residual value?",
    a: "Because you are unlikely to run the attachment to zero. Capital to recover is the purchase price less what the tool is worth when you are finished with it, and on a well-supported current-series attachment that residual is not trivial. Setting it to zero overstates your cost per stump.",
  },
  {
    q: "Does this calculator work for a stump cutter?",
    a: "No, and that is deliberate. A cutter processes stumps that have already been extracted, so the meaningful metric is cost per tonne processed rather than cost per stump. The grinder-versus-cutter comparison explains why the two economics do not translate.",
  },
  {
    q: "What is not included in this calculation?",
    a: "Float and mobilisation between sites, insurance, administration, and the cost of the excavator sitting idle while you wait for parts. For a per-job quote add mobilisation explicitly; for an annual view, add a realistic downtime allowance, because parts lead time is the largest hidden cost in this category.",
  },
];

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

      <Section
        id="method"
        title="How the calculation works"
        lead="Every figure is yours to enter. Nothing is assumed, and no prices are published anywhere on this site."
        className="mx-auto max-w-[88rem] px-4 sm:px-6 lg:px-10"
      >
        <Prose>
          <p>
            The calculator builds an hourly cost from five lines and then divides it by the stumps you complete in an
            hour. Attachment capital is the purchase price less residual value, spread across expected life in hours.
            Teeth are the set cost divided by the hours a set lasts. Carrier, operator and fuel are entered directly as
            hourly figures.
          </p>
          <p>
            That total hourly figure is the number you can quote from. Cost per stump is simply that divided by output,
            which is why the stumps-per-hour field moves the result more than any other input and deserves the most
            honest number you have.
          </p>
          <p>
            Deliberately excluded: mobilisation, insurance, administration and downtime. Mobilisation belongs in a
            per-job quote rather than an hourly rate, and downtime is better handled as a realistic allowance once you
            know your parts lead time. Both are covered on the{" "}
            <Link href="/costs/">attachment costs page</Link>.
          </p>
        </Prose>
      </Section>

      <Section
        id="checklist"
        title="Getting honest inputs"
        className="mx-auto max-w-[88rem] px-4 sm:px-6 lg:px-10"
      >
        <Checklist
          title="Before you trust the output"
          items={[
            "Stumps per hour measured on your own sites, not estimated",
            "Teeth set cost quoted in writing by your supplier",
            "Teeth life in hours, in ground like yours",
            "Teeth lead time in Australia",
            "Carrier hourly rate, own-cost or hire",
            "Realistic annual hours from last year's records",
            "Residual value based on a current, supported series",
            "Whether buried metal is likely on your typical sites",
          ]}
        />
      </Section>

      <Section id="faq" title="Frequently asked questions" className="mx-auto max-w-[88rem] px-4 sm:px-6 lg:px-10">
        <FaqBlock items={FAQS} />
      </Section>

      <Section id="next" title="Where to go next" className="mx-auto max-w-[88rem] px-4 pb-8 sm:px-6 lg:px-10">
        <NextSteps
          items={[
            { href: "/costs/", label: "What attachments cost", why: "The five cost lines behind this calculation, and what moves each one." },
            { href: "/hire-vs-buy/", label: "Hire, buy or subcontract", why: "Whether you should own a grinder at your stump volume at all." },
            { href: "/stump-grinder-guide/", label: "Stump grinder guide", why: "Carrier match, hydraulics, limitations and what to ask before signing." },
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
