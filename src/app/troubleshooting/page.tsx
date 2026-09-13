import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { JsonLd } from "@/components/JsonLd";
import { DiagnosticTree } from "@/components/diagrams/DiagnosticTree";
import { nodeToText } from "@/lib/node-text";
import {
  Section,
  Prose,
  ShortAnswer,
  Callout,
  NumberedGrid,
  Checklist,
  FaqBlock,
  NextSteps,
  type Qa,
} from "@/components/content";
import { SITE, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Forestry Attachment Troubleshooting | Slow, Stalling or Wearing Fast" },
  description:
    "Why an excavator forestry attachment runs slow, stalls, overheats, wears out early or cracks its bracket, and how to tell flow from pressure.",
  alternates: { canonical: absoluteUrl("/troubleshooting/") },
  openGraph: { url: absoluteUrl("/troubleshooting/") },
  keywords: [
    "excavator attachment running slow",
    "mulcher not cutting properly",
    "attachment stalling hard material",
    "hydraulic motor failure attachment",
  ],
};

interface Symptom {
  id: string;
  symptom: string;
  firstCheck: string;
  causes: Array<{ cause: string; test: string }>;
}

const SYMPTOMS: Symptom[] = [
  {
    id: "slow",
    symptom: "The attachment runs, but slowly",
    firstCheck: "Auxiliary flow at the machine, measured rather than assumed.",
    causes: [
      {
        cause: "Insufficient auxiliary flow",
        test: "Compare the measured flow at the coupler against the model's requirement. Flow sets speed, so a tool supplied under its window runs proportionally slow. This is the most common cause by a wide margin.",
      },
      {
        cause: "Flow restricted by fittings or hoses",
        test: "Undersized couplers or hose runs choke flow even when the pump delivers it. Check the internal diameter of every fitting between the valve and the tool, especially on a retrofitted circuit.",
      },
      {
        cause: "Flow diverted or shared",
        test: "Some machines split auxiliary flow between functions. Confirm the tool is getting the full circuit rather than a share of it.",
      },
      {
        cause: "Worn wear parts",
        test: "Blunt teeth or a worn chain make the tool work harder for the same result, which presents as slowness. Inspect before diagnosing hydraulics.",
      },
    ],
  },
  {
    id: "stall",
    symptom: "It stalls in hard material",
    firstCheck: "Working pressure in bar, and the material you are actually cutting.",
    causes: [
      {
        cause: "Insufficient working pressure",
        test: "Flow sets speed; pressure sets force. A tool starved of pressure will stall in hard timber even when flow is correct, and operators routinely misread this as an undersized attachment.",
      },
      {
        cause: "Exceeding rated capacity",
        test: "Published maximums are best case in favourable material. Derate for dense, fibrous or buttressed Australian hardwood, and check what you are asking of the tool against its rating.",
      },
      {
        cause: "Relief valve set low",
        test: "A relief setting below the tool's requirement caps the force available. Have it checked against the manufacturer's specification.",
      },
    ],
  },
  {
    id: "seals",
    symptom: "Hydraulic motor seals failing early",
    firstCheck: "Whether a case drain line is fitted, and whether it returns to tank at low pressure.",
    causes: [
      {
        cause: "No case drain",
        test: "Piston motors usually need drainage back to tank. Running without it builds case pressure and kills motor seals, often inside a season. This is rarely covered by warranty.",
      },
      {
        cause: "Case drain plumbed into a pressurised return",
        test: "A drain line must return to tank at low pressure. Teeing it into a pressurised return achieves nothing and fails in the same way as having no drain at all.",
      },
      {
        cause: "Contaminated oil",
        test: "Forestry work is dirty and attachment circuits are exposed. Check filtration and service intervals, which tighten under continuous load.",
      },
    ],
  },
  {
    id: "heat",
    symptom: "The carrier overheats under sustained work",
    firstCheck: "Whether the work is continuous-load work the machine was not specified for.",
    causes: [
      {
        cause: "Continuous load on an intermittent-duty machine",
        test: "Mulching and grinding put continuous load on a machine designed for intermittent load. Pumps, coolers and final drives feel it. If you intend to run hard, improved cooling is a specification item rather than an accessory.",
      },
      {
        cause: "Radiator and cooler fouling",
        test: "Mulching throws fine debris. Coolers block faster than operators expect, and the first symptom is heat under load rather than a warning light.",
      },
      {
        cause: "Undersized circuit generating heat",
        test: "Oil forced through restrictions turns pressure into heat. If the tool is also running slow, these two symptoms usually share a cause.",
      },
    ],
  },
  {
    id: "wear",
    symptom: "Wear parts are lasting nowhere near expectation",
    firstCheck: "The ground, not the timber.",
    causes: [
      {
        cause: "Abrasive soil",
        test: "On a stump grinder, rate of wear is driven almost entirely by soil. Sandy and rocky ground eat teeth; clean clay is gentle. Decomposed granite and builder's rubble are in a category of their own.",
      },
      {
        cause: "Wrong rotor for the ground",
        test: "Fixed teeth cut faster and finer in clean conditions and are less tolerant of impact. A fixed-tooth rotor on a site full of ironstone is a very expensive lesson.",
      },
      {
        cause: "Buried metal",
        test: "Old fencing, reinforcement and services destroy teeth and can void warranty. Confirm service locations before grinding in urban fill.",
      },
      {
        cause: "Running parts past their replacement point",
        test: "Worn teeth transfer load into the rotor and bearings. The consumable bill you avoided returns as a repair bill.",
      },
    ],
  },
  {
    id: "cracks",
    symptom: "Cracking around the mount or bracket",
    firstCheck: "Whether the bracket is machine-specific or workshop-fabricated.",
    causes: [
      {
        cause: "Bracket that does not sit correctly",
        test: "A workshop-fabricated bracket that is out by a small margin concentrates load where the designer did not intend. This is the single most common cause of cracked steel on an otherwise sound attachment.",
      },
      {
        cause: "Carrier above the published range",
        test: "A larger machine develops more force through the same mounting. The top of a published carrier range is a limit, not a suggestion.",
      },
      {
        cause: "Side loading",
        test: "Using an attachment to push, rake or lever applies load in directions it was not designed for. Grabs used to rake are the classic case.",
      },
    ],
  },
  {
    id: "cut",
    symptom: "Cut quality has deteriorated",
    firstCheck: "Blade or chain condition, then alignment.",
    causes: [
      {
        cause: "Blunt or damaged cutting edge",
        test: "The obvious cause, and worth eliminating before anything else. A torn cut on a pruning head will fail inspection on compliance-specified work.",
      },
      {
        cause: "Jaw tracking out of line",
        test: "On a shear, pin and bush wear is normal, and ignoring it lets the jaw track out of line — which is how blades get destroyed. Check pin wear before replacing another blade.",
      },
      {
        cause: "Chain tension incorrect",
        test: "Slack or over-tight chain wears the bar, sprocket and chain together and degrades the cut. Check tension before replacing consumables.",
      },
      {
        cause: "Material above rated capacity",
        test: "Feeding a 200 mm branch into a tool rated for 100 mm damages the tool and produces a torn cut. Capacity limits are firm.",
      },
    ],
  },
];

const FAQS: Qa[] = [
  {
    q: "Why is my excavator attachment running slowly?",
    a: (
      <>
        Almost always insufficient auxiliary flow, or flow choked by undersized couplers and hoses between the valve and
        the tool. Flow sets speed, so a tool supplied below its window runs proportionally slow rather than failing
        outright. Measure the flow at the coupler before assuming the attachment is faulty — brochure figures for the
        machine are frequently maximum pump output rather than what reaches the auxiliary circuit.
      </>
    ),
  },
  {
    q: "What is the difference between a flow problem and a pressure problem?",
    a: (
      <>
        Flow sets speed; pressure sets force. If the tool runs slowly but completes cuts, suspect flow. If it runs at a
        reasonable speed but stalls in hard material, suspect pressure. Diagnosing the wrong one leads to buying a
        larger attachment that has exactly the same problem.
      </>
    ),
  },
  {
    q: "My motor seals keep failing. What is causing it?",
    a: (
      <>
        In the great majority of cases, a missing or incorrectly plumbed case drain. Piston motors need drainage back to
        tank at low pressure; without it, case pressure builds and takes the seals out, often inside a season. Teeing
        the drain into a pressurised return fails the same way as having no drain at all, and neither is usually covered
        by warranty.
      </>
    ),
  },
  {
    q: "Is it normal for a mulcher to make the excavator run hot?",
    a: (
      <>
        Running warmer under sustained mulching is expected, because it is continuous load on a machine designed for
        intermittent load. Overheating is not. Check cooler fouling first — mulching throws fine debris and coolers
        block faster than operators expect — then look at whether the circuit is generating heat through restriction.
      </>
    ),
  },
  {
    q: "My teeth are wearing out far faster than quoted. Was I misled?",
    a: (
      <>
        Possibly not. Tooth life quoted without a stated ground condition is close to meaningless, because rate of wear
        is driven almost entirely by soil rather than by timber. The useful conversation is about hours in ground like
        yours. That said, a supplier who quoted a life figure without asking about your conditions was not being
        careful with you.
      </>
    ),
  },
  {
    q: "Can I keep working with a cracked bracket?",
    a: (
      <>
        No. A crack in a mounting is a structural failure in progress on a heavy tool swung at height, and the failure
        mode is the attachment coming off. Stop, have it assessed, and find out why it cracked — because a repair that
        does not address a badly fitting bracket or an oversized carrier will crack again in the same place.
      </>
    ),
  },
  {
    q: "When is a problem a warranty claim?",
    a: (
      <>
        Wear items are normally excluded by definition, and damage from buried metal is a common exclusion. Failures
        traceable to a missing case drain, an out-of-range carrier or a non-standard bracket are usually treated as
        installation or application issues rather than defects. This is why the exclusions matter more than the term,
        and why it is worth reading them before purchase.
      </>
    ),
  },
  {
    q: "Should I diagnose this myself or call someone?",
    a: (
      <>
        Flow and pressure measurement needs a gauge and a flow meter, and a hydraulic technician can do both in under an
        hour. That hour is cheap compared with replacing an attachment that was never the problem. Do the visual checks
        first — wear parts, tension, alignment, cooler fouling — then measure rather than guess.
      </>
    ),
  },
];

export default function TroubleshootingPage() {
  return (
    <>
      <PageHero
        eyebrow="Ownership"
        title="When the attachment is not performing"
        crumb="Troubleshooting"
        trail={[{ label: "Forestry Machinery Guide", href: "/forestry-machinery-guide/" }]}
        lead="Most forestry attachment problems are not defects. They are specification mismatches that only become visible under load — and the difference between a flow problem and a pressure problem decides whether the fix costs an hour or a new attachment."
      />

      <article className="mx-auto max-w-[88rem] px-4 py-14 sm:px-6 sm:py-20 lg:px-10">
        <ShortAnswer>
          Start with two questions before anything else. Does it run slowly, or does it stall? Slow generally means
          flow; stalling generally means pressure. Getting that distinction right is the difference between a fitting
          change and buying a larger tool that has exactly the same problem.
        </ShortAnswer>

        <Callout label="Safety first" tone="warn">
          Stop work on any cracked mounting, damaged quick hitch or failing retention system. A heavy forestry
          attachment swung at height is not something to nurse through the end of a job. Quick hitches should comply
          with AS 4772-2008 or an equivalent such as ISO 13031-2016, which requires a safety system so the attachment
          cannot unintentionally disconnect if primary retention fails.
        </Callout>

        <Section
          id="first-fork"
          title="Start here"
          lead="One question splits most of these problems in two, and the answer changes what you check next."
        >
          <DiagnosticTree />
        </Section>

        <Section
          id="symptoms"
          title="Symptom by symptom"
          lead="Work down each list in order. The first check is listed because it eliminates the most likely cause fastest."
        >
          <div className="space-y-px bg-steel-700">
            {SYMPTOMS.map((s) => (
              <div key={s.id} id={s.id} className="scroll-mt-28 bg-steel-950 p-6 sm:p-8">
                <h3 className="display text-2xl leading-tight text-bone">{s.symptom}</h3>
                <p className="mt-3 font-mono text-[0.65rem] tracking-[0.14em] text-hazard uppercase">
                  First check: {s.firstCheck}
                </p>
                <ol className="mt-6 space-y-4">
                  {s.causes.map((c, i) => (
                    <li key={c.cause} className="flex gap-4">
                      <span className="font-mono text-[0.7rem] text-hazard">{String(i + 1).padStart(2, "0")}</span>
                      <div>
                        <p className="font-semibold text-bone">{c.cause}</p>
                        <p className="mt-1.5 max-w-3xl text-[0.94rem] leading-relaxed text-concrete">{c.test}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="flow-vs-pressure"
          title="Flow or pressure? The distinction that matters most"
          lead="Two symptoms, two different causes, and a diagnosis that regularly sends buyers to the wrong solution."
        >
          <div
            className="relative overflow-x-auto border border-steel-700 bg-steel-900"
            tabIndex={0}
            role="region"
            aria-label="Scrollable table"
          >
            <table className="w-full min-w-[42rem] border-collapse text-sm">
              <thead>
                <tr>
                  {["", "Flow problem", "Pressure problem"].map((h) => (
                    <th
                      key={h}
                      className="border-l border-steel-700 bg-steel-800 px-4 py-4 text-left font-mono text-[0.62rem] tracking-[0.14em] text-hazard uppercase first:border-l-0"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["What it governs", "Speed", "Force"],
                  ["How it presents", "Runs slowly but completes the work", "Runs at speed but stalls in hard material"],
                  ["Typical cause", "Undersized circuit, restricted fittings, shared flow", "Low relief setting, insufficient pump pressure, oversize material"],
                  ["How to confirm", "Flow meter at the coupler", "Pressure gauge under load"],
                  ["Wrong conclusion to avoid", "Assuming the attachment is undersized", "Assuming the attachment is faulty"],
                ].map(([a, b, c]) => (
                  <tr key={a} className="border-t border-steel-800">
                    <th scope="row" className="px-4 py-4 text-left align-top font-semibold text-bone">
                      {a}
                    </th>
                    <td className="border-l border-steel-800 px-4 py-4 align-top text-concrete">{b}</td>
                    <td className="border-l border-steel-800 px-4 py-4 align-top text-concrete">{c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section
          id="prevent"
          title="Most of this is preventable at purchase"
          lead="Four decisions made before delivery account for the majority of the problems above."
        >
          <NumberedGrid
            columns={2}
            items={[
              {
                title: "Measure the circuit before you buy",
                body: (
                  <>
                    Operating weight, auxiliary flow and working pressure, verified rather than assumed. The{" "}
                    <Link href="/hydraulic-flow-calculator/">flow calculator</Link> checks those against every category
                    in the range.
                  </>
                ),
              },
              {
                title: "Take the turnkey bracket",
                body: "A machine-specific mounting bracket and hose kit costs more and prevents the cracking failure mode entirely. A workshop bracket that does not sit right costs more in steel than the kit saved.",
              },
              {
                title: "Fit the case drain",
                body: "Cheap at purchase, expensive when seals fail, and generally not a warranty claim. If the motor needs drainage, plumb it to tank at low pressure and nowhere else.",
              },
              {
                title: "Specify for your worst ground",
                body: "Rotor and tooth choice should suit the hardest conditions you meet regularly, not the site you are quoting today. Wear surprises are usually specification decisions in hindsight.",
              },
            ]}
          />
        </Section>

        <Section id="checklist" title="Before you call the supplier">
          <Checklist
            title="Have these ready"
            items={[
              "Attachment model and serial number",
              "Carrier make, model and operating weight",
              "Measured auxiliary flow at the coupler",
              "Measured working pressure under load",
              "Whether a case drain is fitted and where it returns",
              "Hours on the attachment",
              "Condition and age of wear parts",
              "Material and ground conditions when the problem appears",
              "Whether the bracket is machine-specific or fabricated",
              "Whether the symptom is constant or load-dependent",
            ]}
          />
        </Section>

        <Section id="faq" title="Frequently asked questions">
          <FaqBlock items={FAQS} />
        </Section>

        <Section id="next" title="Where to go next">
          <NextSteps
            items={[
              { href: "/hydraulic-flow-calculator/", label: "Flow calculator", why: "Check your machine against every category's circuit requirement." },
              { href: "/compatibility/", label: "Carrier size guide", why: "Whether the tool was the right size for the machine in the first place." },
              { href: "/wear-parts/", label: "Wear parts guide", why: "What drives wear rates, and when a consumable becomes a repair." },
              { href: "/glossary/", label: "Glossary", why: "Case drain, relief valve, hammer line and the rest, defined plainly." },
              { href: SITE.quotePath, label: "Talk to a specialist", why: "Bring the checklist above and the conversation is a short one." },
            ]}
          />
        </Section>
      </article>

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
          "@type": "Article",
          headline: "Forestry attachment troubleshooting",
          description: "Why an attachment runs slow, stalls, overheats, wears early or cracks, and how to diagnose it.",
          inLanguage: "en-AU",
          mainEntityOfPage: absoluteUrl("/troubleshooting/"),
          author: { "@type": "Organization", name: SITE.name },
          publisher: { "@type": "Organization", name: SITE.name },
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
            { "@type": "ListItem", position: 3, name: "Troubleshooting", item: absoluteUrl("/troubleshooting/") },
          ],
        }}
      />
    </>
  );
}
