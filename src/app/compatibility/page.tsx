import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { nodeToText } from "@/lib/node-text";
import { Section, Prose, ShortAnswer, Callout, FaqBlock, NextSteps, Checklist, type Qa } from "@/components/content";
import { CATEGORY_META, categoryMeta } from "@/lib/categories";
import { CARRIER_BANDS } from "@/lib/carrier-bands";
import { SITE, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "What Forestry Attachments Fit Your Excavator? | Size Guide Australia" },
  description:
    "What forestry attachments suit a 3, 5, 8, 13, 20 or 30 tonne excavator. Carrier class by carrier class, with the circuit each tool actually needs.",
  alternates: { canonical: absoluteUrl("/compatibility/") },
  keywords: [
    "attachments for 5 tonne excavator",
    "excavator attachment compatibility",
    "what attachments fit my excavator",
    "mini excavator forestry attachments",
    "excavator carrier range",
  ],
};

type Fit = "yes" | "edge" | "no";

const BANDS = [
  { label: "1.5–3 t", note: "Micro / mini" },
  { label: "3–6 t", note: "Mini" },
  { label: "6–13 t", note: "Midi" },
  { label: "13–20 t", note: "Standard" },
  { label: "20–30 t", note: "Large" },
  { label: "30–50 t", note: "Heavy" },
] as const;

const MATRIX: Record<string, { fits: Fit[]; circuit: string; published: string }> = {
  "tree-shears-guide": {
    fits: ["edge", "yes", "yes", "yes", "yes", "yes"],
    circuit: "Double-acting",
    published: "2–50 t",
  },
  "stump-cutter-guide": {
    fits: ["no", "no", "edge", "yes", "yes", "no"],
    circuit: "Hammer line + drain",
    published: "11.5–28 t",
  },
  "stump-grinder-guide": {
    fits: ["yes", "yes", "yes", "yes", "yes", "no"],
    circuit: "Hammer line + drain",
    published: "1.5–30 t",
  },
  "forestry-mulcher-guide": {
    fits: ["yes", "yes", "yes", "yes", "yes", "no"],
    circuit: "Single-acting",
    published: "1–30 t",
  },
  "grapple-saw-guide": {
    fits: ["no", "yes", "yes", "yes", "yes", "no"],
    circuit: "Dual circuit",
    published: "3–30 t",
  },
  "log-grab-guide": {
    fits: ["no", "no", "edge", "yes", "yes", "no"],
    circuit: "Double-acting + rotation",
    published: "13–25 t typical",
  },
  "mechanical-pruning-guide": {
    fits: ["edge", "yes", "yes", "yes", "edge", "no"],
    circuit: "Varies by tool",
    published: "Excavator / telehandler",
  },
  "tillage-guide": {
    fits: ["edge", "yes", "yes", "yes", "no", "no"],
    circuit: "Hammer line / double-acting",
    published: "2–20 t",
  },
};

const LEGEND: Record<Fit, { mark: string; label: string; className: string }> = {
  yes: { mark: "●", label: "Core range", className: "text-moss-400" },
  edge: { mark: "◐", label: "Edge of range — confirm model", className: "text-hazard" },
  no: { mark: "—", label: "Outside published range", className: "text-steel-600" },
};

const FAQS: Qa[] = [
  {
    q: "What forestry attachments can a 5 tonne excavator run?",
    a: "Six of the eight categories are within published range for a 5 tonne machine: stump grinders, forestry mulchers, grapple saws, tree shears, mechanical pruning heads and tillage tools. Log grabs and stump cutters are not — both start well above this weight. The real constraint at 5 tonnes is rarely weight. It is whether the machine has the auxiliary flow and the circuit the tool needs, and whether the lift chart supports the load at the reach you actually work at.",
  },
  {
    q: "What can a 3 tonne excavator run?",
    a: "Stump grinders and forestry mulchers sit in their core range, and grapple saws become available from 3 tonnes. Tree shears, pruning heads and tillage tools are at the edge of their published ranges. The practical limit at this size is hydraulic: many 3 tonne machines leave the factory with a basic breaker circuit and no case drain, and several of these categories need one.",
  },
  {
    q: "Is machine weight the only thing that matters?",
    a: "No, and treating it that way is the most common reason an attachment purchase disappoints. Weight tells you whether the attachment is structurally appropriate. Auxiliary flow in litres per minute tells you whether it will run at rated speed. Working pressure in bar tells you whether it will develop the force it is rated for. Lift capacity at working radius tells you whether you can hold the load where you actually work. All four have to line up.",
  },
  {
    q: "What happens if I put an attachment on a machine that is too small?",
    a: "Three things, in roughly this order. The tool runs slowly because the circuit cannot feed it. The machine becomes unstable at reach, because the attachment weight is a bigger share of the lift chart than the designer assumed. And in the worst case the machine tips, which is a safety event rather than a productivity one. Undersizing is more dangerous than oversizing; oversizing is more expensive.",
  },
  {
    q: "What happens if the machine is too big for the attachment?",
    a: "You overload the attachment structure until something cracks. A larger carrier develops more force through the same mounting, and the attachment was engineered for the published range. This is why the top of a published range is a limit rather than a suggestion, and why several categories in this guide stop at 30 tonnes.",
  },
  {
    q: "Where do I find my machine's auxiliary flow?",
    a: "The machine plate, or the operator's manual for the specific configuration — not the sales brochure, which often quotes the maximum available rather than what is plumbed to the auxiliary circuit on your machine. If the figure is not available, a hydraulic technician can measure it with a flow meter in under an hour, and it is worth doing before a purchase rather than after.",
  },
  {
    q: "Can I add a circuit to a machine that does not have one?",
    a: "Usually yes, and it is a workshop job with a real cost that belongs in your purchase comparison. Adding a second auxiliary circuit with solenoid control is more involved than adding a simple hammer line, and retrofitting a case drain is generally straightforward. Get the quote before you commit to the attachment, not after.",
  },
  {
    q: "Does a quick hitch change what I can run?",
    a: "It changes how quickly you can change tools, not what the machine can carry. It does add a safety consideration: quick hitch devices should comply with AS 4772-2008 or an equivalent such as ISO 13031-2016, which requires a safety system ensuring the attachment cannot unintentionally disconnect if the primary retention system fails. With heavy forestry attachments swung at height this is a live risk rather than a paperwork item.",
  },
  {
    q: "I am between two size bands. Which way should I go?",
    a: "Toward the larger machine, if the site access allows it. A machine at the bottom of an attachment's published range will do the work but will do it slowly and close to its limits, and it will feel marginal on the hardest jobs rather than the easiest. A machine mid-range does the same work with margin. Access is the only good reason to go the other way, and on tight urban sites it is a very good reason.",
  },
];

export default function CompatibilityPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-steel-700 bg-steel-900 plate">
        <div aria-hidden="true" className="absolute inset-0 bg-grid opacity-60" />
        <div className="relative mx-auto max-w-[88rem] px-4 pt-12 pb-16 sm:px-6 sm:pt-16 lg:px-10">
          <nav aria-label="Breadcrumb" className="font-mono text-[0.65rem] tracking-[0.16em] text-concrete uppercase">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="transition-colors hover:text-hazard">
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-muted">
                /
              </li>
              <li>
                <Link href="/forestry-machinery-guide/" className="transition-colors hover:text-hazard">
                  Forestry Machinery Guide
                </Link>
              </li>
              <li aria-hidden="true" className="text-muted">
                /
              </li>
              <li className="text-hazard">Carrier size guide</li>
            </ol>
          </nav>

          <p className="eyebrow mt-10 flex items-center gap-3">
            <span className="inline-block h-2 w-2 rotate-45 bg-hazard" />
            Carrier size guide
          </p>
          <h1 className="display mt-5 max-w-4xl text-[2.35rem] leading-[0.95] text-bone sm:text-5xl lg:text-[4.1rem]">
            What forestry attachments fit your excavator?
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-bone/80">
            Find your machine&rsquo;s operating weight below and read what opens up, what sits at the edge of its range
            and what is out of reach. Published ranges are manufacturer figures for the widest model in a series — the
            right model inside that range is set by your routine work and your lift chart, not by machine weight alone.
          </p>
        </div>
        <div className="h-[3px] hazard-stripes-dim" />
      </section>

      <section className="mx-auto max-w-[88rem] px-4 py-14 sm:px-6 sm:py-20 lg:px-10">
        <div
            className="relative overflow-x-auto border border-steel-700 bg-steel-900"
            tabIndex={0}
            role="region"
            aria-label="Scrollable table"
          >
          <table className="w-full min-w-[52rem] border-collapse text-sm">
            <thead>
              <tr>
                <th className="sticky left-0 z-10 bg-steel-800 px-4 py-4 text-left font-mono text-[0.65rem] tracking-[0.14em] text-hazard uppercase">
                  Category
                </th>
                {BANDS.map((b) => (
                  <th
                    key={b.label}
                    className="border-l border-steel-700 bg-steel-800 px-3 py-4 text-center font-mono text-[0.65rem] tracking-[0.12em] text-hazard uppercase"
                  >
                    {b.label}
                    <span className="mt-1 block text-[0.58rem] text-concrete">{b.note}</span>
                  </th>
                ))}
                <th className="border-l border-steel-700 bg-steel-800 px-4 py-4 text-left font-mono text-[0.65rem] tracking-[0.14em] text-hazard uppercase">
                  Circuit
                </th>
              </tr>
            </thead>
            <tbody>
              {CATEGORY_META.map((c) => {
                const row = MATRIX[c.slug];
                return (
                  <tr key={c.slug} className="border-t border-steel-800 transition-colors hover:bg-hazard/5">
                    <th scope="row" className="sticky left-0 z-10 bg-steel-900 px-4 py-4 text-left align-top">
                      <Link href={`/${c.slug}/`} className="display text-base text-bone hover:text-hazard">
                        {c.label}
                      </Link>
                      <span className="mt-1 block font-mono text-[0.6rem] tracking-[0.1em] text-concrete uppercase">
                        Published {row.published}
                      </span>
                    </th>
                    {row.fits.map((fit, i) => (
                      <td
                        key={BANDS[i].label}
                        className={`border-l border-steel-800 px-3 py-4 text-center text-lg ${LEGEND[fit].className}`}
                      >
                        <span aria-hidden="true">{LEGEND[fit].mark}</span>
                        <span className="sr-only">{LEGEND[fit].label}</span>
                      </td>
                    ))}
                    <td className="border-l border-steel-800 px-4 py-4 align-top font-mono text-[0.7rem] text-concrete">
                      {row.circuit}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
          {(Object.keys(LEGEND) as Fit[]).map((k) => (
            <li key={k} className="flex items-center gap-2.5 font-mono text-[0.68rem] tracking-[0.1em] text-concrete uppercase">
              <span aria-hidden="true" className={`text-base ${LEGEND[k].className}`}>
                {LEGEND[k].mark}
              </span>
              {LEGEND[k].label}
            </li>
          ))}
        </ul>

        <ShortAnswer>
          Machine weight tells you which attachments are structurally appropriate. It does not tell you whether your
          machine will actually run them. Four numbers decide that: operating weight, auxiliary flow in litres per
          minute, working pressure in bar, and lift capacity at the radius you actually work at. Find your weight band
          below, then check the other three before you shortlist anything.
        </ShortAnswer>

        <Section
          id="bands"
          title="Carrier class by carrier class"
          lead="What opens up at each size, what sits at the edge of its published range, and the constraint that decides it in practice."
        >
          <div className="space-y-px bg-steel-700">
            {CARRIER_BANDS.map((b) => (
              <div key={b.id} id={b.id} className="scroll-mt-28 bg-steel-950 p-6 sm:p-8">
                <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2">
                  <span className="display text-3xl text-hazard sm:text-4xl">{b.label}</span>
                  <h3 className="display text-xl text-bone sm:text-2xl">{b.name}</h3>
                </div>

                <p className="mt-5 max-w-3xl text-[1rem] leading-relaxed text-concrete">{b.commentary}</p>

                <dl className="mt-7 grid gap-6 md:grid-cols-2">
                  <div>
                    <dt className="font-mono text-[0.6rem] tracking-[0.18em] text-concrete uppercase">
                      Typical work at this size
                    </dt>
                    <dd className="mt-2 text-[0.94rem] leading-relaxed text-bone/85">{b.typicalWork}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[0.6rem] tracking-[0.18em] text-concrete uppercase">
                      The real constraint
                    </dt>
                    <dd className="mt-2 text-[0.94rem] leading-relaxed text-bone/85">{b.constraint}</dd>
                  </div>
                </dl>

                <div className="mt-7 grid gap-px bg-steel-800 sm:grid-cols-3">
                  {(
                    [
                      ["In range", b.core, "text-moss-400"],
                      ["Edge of range", b.edge, "text-hazard"],
                      ["Outside range", b.out, "text-muted"],
                    ] as const
                  ).map(([label, slugs, tone]) => (
                    <div key={label} className="bg-steel-950 p-4">
                      <p className={`font-mono text-[0.58rem] tracking-[0.16em] uppercase ${tone}`}>
                        {label} ({slugs.length})
                      </p>
                      <ul className="mt-3 space-y-1.5">
                        {slugs.length === 0 && <li className="text-[0.85rem] text-steel-600">&mdash;</li>}
                        {slugs.map((slug) => {
                          const c = categoryMeta(slug);
                          if (!c) return null;
                          return (
                            <li key={slug}>
                              <Link
                                href={`/${slug}/`}
                                className={`text-[0.88rem] leading-snug hover:text-hazard ${
                                  label === "Outside range" ? "text-muted line-through" : "text-bone/85"
                                }`}
                              >
                                {c.label}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="four-numbers"
          title="Weight is one of four numbers"
          lead="A machine inside the published weight band can still be the wrong machine. These are the other three checks, in the order they catch people out."
        >
          <div className="grid gap-px bg-steel-700 md:grid-cols-2">
            {[
              {
                t: "Auxiliary flow, in litres per minute",
                b: "Sets how fast the tool actually runs. Read it from the machine plate or the manual for your specific configuration, not the sales brochure, which often quotes the maximum available rather than what is plumbed. Undersupplied tools do not fail dramatically — they just run slowly enough to destroy the economics.",
              },
              {
                t: "Working pressure, in bar",
                b: "Flow sets speed; pressure sets the force the tool can develop. A shear starved of pressure will stall in hard timber even when flow is correct, and the operator will assume the attachment is undersized when the circuit is the problem.",
              },
              {
                t: "Lift capacity at working radius",
                b: "What the machine can safely hold at the reach it will actually work at, not against the tracks. This is what decides which model inside a published range is correct, and it is the check most often skipped on mini excavators.",
              },
              {
                t: "Circuit type, and whether it exists",
                b: "Single-acting hammer line, hammer line plus case drain, double-acting, or a dual circuit. Adding one is a workshop job with a real cost that belongs in your purchase comparison rather than discovered afterwards.",
              },
            ].map((n) => (
              <div key={n.t} className="bg-steel-950 p-6 sm:p-7">
                <h3 className="display text-xl text-bone">{n.t}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-concrete">{n.b}</p>
              </div>
            ))}
          </div>

          <Callout label="Case drain is not optional">
            Piston motors need drainage back to tank at low pressure. Stump grinders and cutters generally require it.
            Running one without a case drain builds case pressure and kills the motor seals, often inside a season, and
            it is rarely covered by warranty.
          </Callout>
        </Section>

        <Section
          id="reading-ranges"
          title="How to read a published carrier range"
          lead="Manufacturer ranges are precise about something specific, and buyers routinely read them as something broader."
        >
          <Prose>
            <p>
              A published range such as &ldquo;2 to 50 tonnes&rdquo; describes the series, not a model. It means the
              range contains models suitable for machines from 2 tonnes up to 50 tonnes — not that any single unit
              covers that span. The OMEF BIG INCH tree shear range spans six models to cover that width, and matching
              the wrong one to your machine produces exactly the problems the range was designed to avoid.
            </p>
            <p>
              Inside a range, the correct model is set by your routine work rather than your machine&rsquo;s weight
              alone. For a shear that means your routine stem diameter and your lift capacity at working radius. For a
              mulcher it means your material and the width you can afford to push. For a grapple saw it means the
              diameter you cut most often, not the maximum you will ever cut.
            </p>
            <p>
              Treat published maximums as best-case figures in favourable material, and derate them for dense, fibrous
              or buttressed Australian hardwood. A shear rated to 600&nbsp;mm in European softwood is not a 600&nbsp;mm
              shear in ironbark.
            </p>
          </Prose>
        </Section>

        <Section
          id="mistakes"
          title="Five ways this goes wrong"
          lead="Every one of these is recoverable before purchase and expensive afterwards."
        >
          <div className="grid gap-px bg-steel-700 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["Buying on weight alone", "The machine fits the range, the circuit does not feed the tool, and the attachment runs at half speed for the rest of its life."],
              ["Reading the range as a model", "A series spanning 2 to 50 tonnes contains six models. Buying \u201cthe series\u201d and hoping is how the wrong unit arrives."],
              ["Ignoring the lift chart", "The attachment is well within the weight band and well outside the lift capacity at the reach the operator actually uses."],
              ["Skipping the case drain", "Cheap to fit at purchase, expensive when the motor seals fail, and generally not a warranty claim."],
              ["Fabricating the bracket", "A workshop bracket that does not sit right concentrates load where the designer did not intend, and cracks steel."],
              ["Trusting brochure maximums", "Published capacities assume favourable material. Australian hardwood is not favourable material."],
            ].map(([t, b]) => (
              <div key={t} className="bg-steel-950 p-6">
                <h3 className="display text-lg leading-tight text-bone">{t}</h3>
                <p className="mt-3 text-[0.92rem] leading-relaxed text-concrete">{b}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="checklist" title="Before you shortlist anything">
          <Checklist
            title="Carrier match checklist"
            items={[
              "Operating weight, from the machine plate",
              "Auxiliary flow in L/min, measured or from the manual",
              "Working pressure in bar",
              "Lift capacity at the radius you actually work at",
              "Which circuits are currently plumbed",
              "Whether a case drain line is fitted",
              "Quick hitch type and standard compliance",
              "Whether a machine-specific bracket exists for your carrier",
              "Your routine working diameter, not your maximum",
              "The material you cut most often",
            ]}
          />
        </Section>

        <Section id="faq" title="Frequently asked questions">
          <FaqBlock items={FAQS} />
        </Section>

        <Section id="next" title="Where to go next">
          <NextSteps
            items={[
              {
                href: "/hydraulic-flow-calculator/",
                label: "Check your machine against every category",
                why: "Enter weight, flow and the circuits you have fitted, and see what qualifies.",
              },
              {
                href: "/costs/",
                label: "What attachments actually cost",
                why: "Once you know what fits, work out what it costs to own and run.",
              },
              {
                href: "/hire-vs-buy/",
                label: "Hire, buy or subcontract",
                why: "The utilisation decision, before you commit capital to anything.",
              },
              {
                href: "/forestry-machinery-guide/",
                label: "The full buyer's guide",
                why: "Category selection from the top, if you are still deciding.",
              },
              {
                href: "/glossary/",
                label: "Glossary",
                why: "Case drain, hammer line, dual circuit and the rest, defined plainly.",
              },
              {
                href: SITE.quotePath,
                label: "Send us your specs",
                why: "Three numbers and we will tell you which models suit the machine.",
              },
            ]}
          />
        </Section>
      </section>

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
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
            {
              "@type": "ListItem",
              position: 2,
              name: "Forestry Machinery Guide",
              item: absoluteUrl("/forestry-machinery-guide/"),
            },
            { "@type": "ListItem", position: 3, name: "Carrier size guide", item: absoluteUrl("/compatibility/") },
          ],
        }}
      />
    </>
  );
}
