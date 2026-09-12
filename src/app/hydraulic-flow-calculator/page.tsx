import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { JsonLd } from "@/components/JsonLd";
import { Section, FaqBlock, NextSteps, type Qa } from "@/components/content";
import { CircuitDiagram } from "@/components/diagrams/CircuitDiagram";
import { CarrierBandChart } from "@/components/diagrams/CarrierBandChart";
import { Matcher } from "./Matcher";
import { SITE, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Hydraulic Flow and Attachment Matching Calculator | Australia" },
  description:
    "Enter your excavator's weight, auxiliary flow and fitted circuits and see which forestry attachment categories it can actually run. Free, no sign-up.",
  alternates: { canonical: absoluteUrl("/hydraulic-flow-calculator/") },
};

const FAQS: Qa[] = [
  {
    q: "What is auxiliary hydraulic flow on an excavator?",
    a: "The oil volume, in litres per minute, that the machine can send to an attachment circuit. It sets how fast a rotor, saw or motor actually runs. Flow sets speed; working pressure sets the force the tool can develop. An attachment supplied with too little flow does not fail dramatically, it just runs slowly enough to destroy the economics of the job.",
  },
  {
    q: "Where do I find my excavator's auxiliary flow figure?",
    a: "The machine plate, or the operator's manual for your specific configuration. Avoid the sales brochure, which often quotes maximum available pump flow rather than what is actually plumbed to the auxiliary circuit on your machine. If no reliable figure exists, a hydraulic technician can measure it with a flow meter in under an hour, and it is worth doing before a purchase rather than after.",
  },
  {
    q: "What is a case drain and do I need one?",
    a: "A third, low-pressure return line that takes internal leakage from a piston motor back to tank. Piston motors usually need one — grinders and cutters typically do. Running without it builds case pressure and kills motor seals, often inside a season, and it is rarely covered by warranty.",
  },
  {
    q: "Can I add a circuit to my machine?",
    a: "Usually yes, and it is a workshop job with a real cost that belongs in your purchase comparison. Adding a simple hammer line is straightforward; adding a second auxiliary circuit with solenoid control for a dual-circuit tool such as a grapple saw is more involved. Get that quote before you commit to the attachment.",
  },
  {
    q: "Why does the calculator exclude a category instead of warning about it?",
    a: "Because fitting a circuit is a real cost with a real lead time, not a footnote. If you have not listed a circuit on the machine, any attachment needing it is not available to you today, and treating that as a soft warning encourages buyers to discover the cost after they have committed.",
  },
  {
    q: "How accurate are the flow windows used here?",
    a: "They are indicative and labelled as such. The one flow figure published in these guides is the OMEF GS grapple saw range, which runs from 15 to 50 L/min on the smallest model up to 160 L/min on the largest. The windows narrow a shortlist; they do not replace a model-specific spec sheet, and nothing on this site invents a number to look more precise than it is.",
  },
  {
    q: "My machine is right at the edge of a published range. What should I do?",
    a: "Treat it as a model-selection question rather than a yes-or-no question. Inside a published range the correct model is set by your routine working diameter and your lift capacity at working radius, not by machine weight. At a boundary those two checks decide it, and a supplier who will not do that arithmetic with you is worth being cautious about.",
  },
];

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

      <Section id="faq" title="Frequently asked questions" className="mx-auto max-w-[88rem] px-4 sm:px-6 lg:px-10">
        <FaqBlock items={FAQS} />
      </Section>

      <Section id="next" title="Where to go next" className="mx-auto max-w-[88rem] px-4 pb-8 sm:px-6 lg:px-10">
        <NextSteps
          items={[
            { href: "/compatibility/", label: "Carrier size guide", why: "The same question answered band by band, with what opens up at each size." },
            { href: "/costs/", label: "What attachments cost", why: "Once you know what fits, what it costs to own and run." },
            { href: "/glossary/", label: "Glossary", why: "Case drain, hammer line, dual circuit and the rest, defined plainly." },
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
            acceptedAnswer: { "@type": "Answer", text: typeof f.a === "string" ? f.a : f.q },
          })),
        }}
      />
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
