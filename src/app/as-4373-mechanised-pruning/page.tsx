import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { JsonLd } from "@/components/JsonLd";
import { nodeToText } from "@/lib/node-text";
import { Photograph } from "@/components/Photograph";
import {
  Section,
  Prose,
  ShortAnswer,
  Callout,
  NumberedGrid,
  Checklist,
  RedFlags,
  FaqBlock,
  NextSteps,
  type Qa,
} from "@/components/content";
import { SITE, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "AS 4373 and Mechanised Pruning | Australian Contractor's Guide" },
  description:
    "What AS 4373 means when pruning with an excavator attachment, why utility and council contracts specify it, and how to pick a compliant tool.",
  alternates: { canonical: absoluteUrl("/as-4373-mechanised-pruning/") },
  openGraph: { url: absoluteUrl("/as-4373-mechanised-pruning/") },
  keywords: [
    "as 4373 pruning",
    "mechanised pruning compliance",
    "utility vegetation management australia",
    "council pruning tender",
  ],
};

const FAQS: Qa[] = [
  {
    q: "What is AS 4373?",
    a: (
      <>
        AS 4373 is the Australian Standard for the pruning of amenity trees. It sets out how pruning should be carried
        out on trees in the built and managed landscape, and it is routinely written into council and utility
        vegetation contracts as a specification rather than a guideline. The standard itself is published by Standards
        Australia and must be obtained from them — this page explains what it means for tool selection and tendering,
        not what its clauses say.
      </>
    ),
  },
  {
    q: "Does AS 4373 apply to mechanised pruning?",
    a: (
      <>
        Where a contract specifies AS 4373, it applies to the outcome regardless of how the cut was made. The standard
        governs the cut, not the method. Mechanised pruning still has to produce a compliant cut, and a machine is
        perfectly capable of producing a non-compliant one.
      </>
    ),
  },
  {
    q: "Whose responsibility is compliance — mine or the equipment supplier's?",
    a: (
      <>
        Yours. Compliance is the contractor&rsquo;s responsibility, not the tool&rsquo;s. No attachment is
        &ldquo;AS 4373 certified&rdquo;, because the standard governs the work rather than the machine. Confirm the
        tool suits the specification before you quote utility or council work, and treat any supplier claiming their
        attachment is certified to the standard with caution.
      </>
    ),
  },
  {
    q: "Why do electricity networks specify it?",
    a: (
      <>
        Distribution businesses run continuous, regulated vegetation programs to maintain clearances and reduce
        bushfire ignition risk. Those programs are audited and contracted, and compliance is specified because the
        network operator carries the regulatory obligation. Trimming is generally carried out to meet AS 4373, which
        can require branches be cut back to growth points. That is a technical specification, not a preference, and it
        constrains which tools are acceptable.
      </>
    ),
  },
  {
    q: "Which pruning attachments can produce a compliant cut?",
    a: (
      <>
        It depends on the specification and the material. Finish quality varies by system: star-knife shredding,
        comb-blade shearing and rotating discs all leave different results. Match the system to what the contract
        specifies rather than assuming any pruning head will satisfy any clause. The{" "}
        <Link href="/mechanical-pruning-guide/">mechanical pruning guide</Link> sets out the three tool types and what
        each produces.
      </>
    ),
  },
  {
    q: "Can I use mechanised pruning on any tree?",
    a: (
      <>
        No. Mechanical pruning is not arboriculturally appropriate everywhere. Heritage trees, significant trees and
        specimen plantings generally require hand pruning, and tendering mechanised pruning for work that specifies
        otherwise is a fast way to lose a contract and a reputation at once. Read the scope before you price the plant.
      </>
    ),
  },
  {
    q: "What happens if a cut fails inspection?",
    a: (
      <>
        On an audited program, rectification at your cost, and in a competitive panel it affects your standing at
        renewal. The most common mechanical cause is exceeding the tool&rsquo;s rated capacity: feeding a 200&nbsp;mm
        branch into a tool rated for 100&nbsp;mm damages the tool and produces a torn cut that will fail inspection.
        Capacity limits are firm, not indicative.
      </>
    ),
  },
  {
    q: "Are other standards relevant to this work?",
    a: (
      <>
        Two are worth knowing. ISO 8084 covers operator protective structures for forestry machinery — the guarding
        that stops objects entering the cabin. AS 4772-2008, or an equivalent such as ISO 13031-2016, covers quick
        hitch devices and requires a safety system so the attachment cannot unintentionally disconnect if primary
        retention fails. Both matter when a pruning head is working at height beside a road.
      </>
    ),
  },
  {
    q: "How do I demonstrate compliance in a tender?",
    a: (
      <>
        Show the chain: the specification you are working to, the tool selected and why its cut suits that
        specification, the capacity limits you will work within, operator competency, and how you will handle material
        outside the mechanised scope. Tenders are not usually lost on plant selection alone — they are lost on being
        unable to show that the plant was selected deliberately.
      </>
    ),
  },
];

export default function As4373Page() {
  return (
    <>
      <PageHero
        eyebrow="Compliance"
        title="AS 4373 and mechanised pruning"
        crumb="AS 4373"
        trail={[{ label: "Forestry Machinery Guide", href: "/forestry-machinery-guide/" }]}
        lead="Utility and council vegetation contracts routinely specify AS 4373. The standard governs the cut, not the method — which means a machine can meet it and a machine can fail it, and the difference is your responsibility rather than the attachment's."
      />

      <article className="mx-auto max-w-[88rem] px-4 py-14 sm:px-6 sm:py-20 lg:px-10">
        <ShortAnswer>
          AS 4373 is the Australian Standard for pruning amenity trees. Where a contract specifies it, it applies to the
          outcome regardless of how the cut was made. No attachment is certified to it, because it governs the work
          rather than the machine — so tool selection is about whether the finish that tool produces satisfies the
          specification in front of you.
        </ShortAnswer>

        <Callout label="What this page is, and is not" tone="warn">
          This is a contractor&rsquo;s orientation to how AS 4373 affects mechanised pruning work and equipment
          selection. It is not a reproduction or summary of the standard&rsquo;s clauses. The standard is published by
          Standards Australia and must be obtained from them — if you are tendering to it, buy it and read it.
        </Callout>

        <Section
          id="why-specified"
          title="Why the standard ends up in your contract"
          lead="It is rarely the contractor's choice. It arrives through the obligations sitting above them."
        >
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_24rem] lg:items-start">
            <Prose>
              <p>
                Electricity distribution businesses run continuous, regulated vegetation programs to maintain clearances
                and reduce bushfire ignition risk. Those programs are audited, contracted and renewed on multi-year
                cycles, and the network operator carries the regulatory obligation. Specifying AS 4373 is how that
                obligation is pushed down into the contract you are signing.
              </p>
              <p>
                Councils and road authorities do the same for sight lines, clearance envelopes, footpath access and
                fire trail maintenance. The work is scheduled, budgeted and tendered, and the specification is the
                mechanism by which a purchaser buys a consistent result from several different contractors.
              </p>
              <p>
                For a contractor, that is the whole commercial argument for the category. Compliance-specified work is
                recurring by design, and it rewards mechanisation precisely because the purchaser needs a repeatable
                outcome across a large program.
              </p>
            </Prose>
            <Photograph photo="prunerTgHedge" />
          </div>
        </Section>

        <Section
          id="cut-not-method"
          title="The standard governs the cut, not the method"
          lead="This single distinction explains almost every mistake contractors make when moving from hand crews to attachments."
        >
          <Prose>
            <p>
              A pruning specification describes the result required on the tree. It does not, in itself, prohibit
              mechanisation. What it does is constrain which tools are acceptable, because trimming to AS 4373 can
              require branches be cut back to growth points. That is a technical specification, not a preference, and
              a tool that cannot reliably produce that result is not suitable for that contract no matter how
              productive it is.
            </p>
            <p>
              The corollary matters just as much: no attachment is &ldquo;AS 4373 certified&rdquo;. Compliance is your
              responsibility, not the tool&rsquo;s. A machine can produce a non-compliant cut, and the fact that it was
              sold for pruning work is not a defence at inspection.
            </p>
          </Prose>
        </Section>

        <Section
          id="tool-choice"
          title="What this means for tool choice"
          lead="Three systems, three different finishes. Matching the finish to the specification is the whole job."
        >
          <div
            className="relative overflow-x-auto border border-steel-700 bg-steel-900"
            tabIndex={0}
            role="region"
            aria-label="Scrollable table"
          >
            <table className="w-full min-w-[46rem] border-collapse text-sm">
              <thead>
                <tr>
                  {["System", "How it cuts", "Compliance consideration"].map((h) => (
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
                  [
                    "Star-knife hedge trimmer",
                    "Rapidly rotating star-shaped knives shred material for a clean, even face with minimal residue",
                    "Suited to hedge and mass-vegetation faces. Check whether the contract wants a shredded face or discrete branch cuts.",
                  ],
                  [
                    "Comb-blade shearing bar",
                    "Comb-shaped blades cut in a shearing motion",
                    "Produces a discrete cut rather than a shredded face, which suits specifications written around branch cuts.",
                  ],
                  [
                    "Rotating disc trimmer",
                    "Disc-mounted blades at speed",
                    "Fast on volume. Finish is coarser, so confirm it against what the specification will accept.",
                  ],
                  [
                    "Forestry pruner",
                    "Cutting bar at the limb",
                    "Best control over an individual cut, which is what a growth-point specification generally implies.",
                  ],
                ].map(([a, b, c]) => (
                  <tr key={a} className="border-t border-steel-800 transition-colors hover:bg-hazard/5">
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

          <Callout label="Capacity limits are firm, not indicative">
            Feeding a 200&nbsp;mm branch into a tool rated for 100&nbsp;mm damages the tool and produces a torn cut that
            will fail inspection. Specify the head for the largest material you will routinely meet, and plan how
            oversize material will be handled outside the mechanised scope.
          </Callout>
        </Section>

        <Section
          id="not-everywhere"
          title="Where mechanised pruning is not appropriate"
          lead="Knowing when not to tender mechanised is part of being credible on the work where you do."
        >
          <NumberedGrid
            columns={3}
            items={[
              {
                title: "Heritage and significant trees",
                body: "Generally require hand pruning. Tendering mechanised pruning for work that specifies otherwise is a fast way to lose the contract and the relationship.",
              },
              {
                title: "Specimen plantings",
                body: "Where the individual form of the tree is the point, a mechanised finish will not satisfy the purchaser even if it satisfies a clearance.",
              },
              {
                title: "Oversize material",
                body: "Beyond the head's rated capacity the cut degrades and the tool suffers. Plan a hand or saw component into the methodology rather than pushing the machine.",
              },
            ]}
          />
        </Section>

        <Section
          id="tender"
          title="Demonstrating compliance in a tender"
          lead="Most contractors lose these on documentation rather than on capability."
        >
          <NumberedGrid
            columns={2}
            items={[
              {
                title: "State the specification you are working to",
                body: "Name it, and name the version the contract references. A methodology that says \\u201cindustry best practice\\u201d where the contract says AS 4373 is already behind.",
              },
              {
                title: "Justify the plant selection",
                body: "Say which head you will use and why the finish it produces satisfies the specification. This is the step that separates a deliberate choice from whatever was on the truck.",
              },
              {
                title: "State your capacity limits",
                body: "Give the rated cutting capacity of the head and explain how material above it will be handled. Purchasers read this as competence rather than as a limitation.",
              },
              {
                title: "Cover operator competency and safety",
                body: "Operator training, plus the guarding and coupling standards relevant to working at height beside a road: ISO 8084 for operator protective structures, AS 4772 or ISO 13031 for quick hitches.",
              },
            ]}
          />
        </Section>

        <Section
          id="red-flags"
          title="Red flags when equipping for compliance-specified work"
        >
          <RedFlags
            items={[
              {
                flag: "A supplier claiming an attachment is “AS 4373 certified”",
                why: "The standard governs the work, not the machine. There is no such certification, and a supplier offering it either misunderstands the standard or is hoping you do.",
              },
              {
                flag: "Choosing a head on productivity alone",
                why: "Throughput is worthless if the finish fails inspection. Match the system to the specified result first, then compare productivity among the heads that qualify.",
              },
              {
                flag: "No stated cutting capacity",
                why: "Capacity limits are firm. A quote without a rated diameter gives you nothing to write into a methodology and nothing to hold the supplier to.",
              },
              {
                flag: "Assuming one circuit suits the category",
                why: "Hydraulic requirements vary sharply between pruning tools — some need a drainage line, some do not, and some need two double-acting lines. Check before assuming the tool will fit your machine.",
              },
            ]}
          />
        </Section>

        <Section id="checklist" title="Before you tender mechanised pruning">
          <Checklist
            title="Compliance readiness checklist"
            items={[
              "The specification named in the contract, and its version",
              "A copy of the standard, obtained from Standards Australia",
              "Head type matched to the specified finish",
              "Rated cutting capacity of the head, in writing",
              "Method for handling oversize material",
              "Scope exclusions for heritage and significant trees",
              "Operator training and competency records",
              "Quick hitch compliance with AS 4772 or ISO 13031",
              "Operator protective structure per ISO 8084 where relevant",
              "Blade and knife availability in Australia",
              "Traffic management for roadside works",
              "Rectification process if a cut is queried",
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
                href: "/mechanical-pruning-guide/",
                label: "Mechanical pruning guide",
                why: "The three tool types, hydraulic requirements and the recurring-revenue argument.",
              },
              {
                href: "/wear-parts/",
                label: "Wear parts guide",
                why: "Blade and knife consumption differs sharply between pruning systems.",
              },
              {
                href: "/compatibility/",
                label: "Carrier size guide",
                why: "Pruning heads sit in a narrower carrier band than most of the range.",
              },
              { href: "/glossary/#as-4373", label: "Glossary", why: "AS 4373, AS 4772, ISO 8084 and the rest, defined plainly." },
              { href: SITE.quotePath, label: "Request a quote", why: "Tell us the specification and we will match the head to it." },
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
          headline: "AS 4373 and mechanised pruning",
          description: "What AS 4373 means for contractors pruning with excavator attachments in Australia.",
          inLanguage: "en-AU",
          mainEntityOfPage: absoluteUrl("/as-4373-mechanised-pruning/"),
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
            { "@type": "ListItem", position: 3, name: "AS 4373", item: absoluteUrl("/as-4373-mechanised-pruning/") },
          ],
        }}
      />
    </>
  );
}
