import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { JsonLd } from "@/components/JsonLd";
import { nodeToText } from "@/lib/node-text";
import { Section, Prose, ShortAnswer, NumberedGrid, FaqBlock, NextSteps, type Qa } from "@/components/content";
import { Photograph } from "@/components/Photograph";
import { COMPARISONS } from "@/lib/comparisons";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Forestry Attachment Comparisons | Which One Your Job Needs" },
  description:
    "Four head-to-head comparisons of the forestry attachment categories Australian buyers most often confuse, with costs, scenarios and checklists.",
  alternates: { canonical: absoluteUrl("/compare/") },
  openGraph: { url: absoluteUrl("/compare/") },
};

const FAQS: Qa[] = [
  {
    q: "Why do buyers confuse these attachment categories?",
    a: "Because the names describe the tool rather than the job. A stump grinder and a stump cutter both have \u201cstump\u201d in the name and do opposite things. A tree shear and a forestry mulcher both clear vegetation and produce completely different outputs. The brochure language does not separate them, so the confusion is structural rather than careless.",
  },
  {
    q: "What is the most expensive category mistake?",
    a: "Buying a stump cutter expecting it to remove stumps from the ground. It cannot — it works on stumps that are already out. It is the most common error in the Australian market and it produces an attachment that is functionally useless for the job it was bought to do.",
  },
  {
    q: "Can one attachment cover two of these jobs?",
    a: "Rarely, and the exceptions are narrow. A grapple saw both cuts and holds, which genuinely replaces two operations. Beyond that, the categories exist because the mechanisms are different: grinding is not cutting, mulching is not felling, and holding is not sawing. Contractors who try to make one tool do two jobs usually end up buying the second tool anyway.",
  },
  {
    q: "Should I buy the more versatile option?",
    a: "Only if the versatility maps to work you actually have. Versatility usually costs money up front, adds hydraulic complexity and adds consumables. An attachment that does one job well at high utilisation beats one that does two jobs adequately at low utilisation, every time.",
  },
  {
    q: "How do I decide when both options fit my machine?",
    a: "Stop looking at the machine and look at the work: what you are producing, whether the material has value, and whether you are pricing per stem, per stump or per hectare. Those three questions settle most of these comparisons faster than any specification table.",
  },
];

export default function ComparePage() {
  return (
    <>
      <PageHero
        eyebrow="Head to head"
        title="The four comparisons buyers actually get wrong"
        crumb="Comparisons"
        lead="Two attachments with similar names doing entirely different jobs is the most expensive mistake in this category. Each comparison below answers the question first, then shows the working."
      />

      <section className="mx-auto max-w-[88rem] px-4 py-14 sm:px-6 sm:py-20 lg:px-10">
        <ShortAnswer>
          Four pairings account for most of the wrong purchases in this category. In every case the two tools sound
          similar, fit the same machines and do materially different jobs. Each comparison below gives the answer in a
          sentence, then shows the reasoning, the running costs and three worked buyer situations.
        </ShortAnswer>

        <div className="mt-12 grid gap-px bg-steel-700 md:grid-cols-2">
          {COMPARISONS.map((c) => (
            <div
              key={c.slug}
              className="group relative flex flex-col bg-steel-950 p-6 transition-colors hover:bg-steel-900 sm:p-8"
            >
              <div className="grid grid-cols-2 gap-3">
                <Photograph photo={c.a.photo} ratio="4/3" bare sizes="(max-width: 768px) 45vw, 20rem" />
                <Photograph photo={c.b.photo} ratio="4/3" bare sizes="(max-width: 768px) 45vw, 20rem" />
              </div>
              <h2 className="display mt-6 text-2xl leading-tight text-bone transition-colors group-hover:text-hazard sm:text-3xl">
                <Link href={`/compare/${c.slug}/`} className="after:absolute after:inset-0">
                  {c.title}
                </Link>
              </h2>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-concrete">{c.verdict.split(". ")[0]}.</p>
              <span
                aria-hidden="true"
                className="mt-6 inline-flex items-center gap-2 font-mono text-[0.65rem] tracking-[0.16em] text-bone/70 uppercase group-hover:text-hazard"
              >
                Read the comparison
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </span>
            </div>
          ))}
        </div>
      </section>

      <Section
        id="how-to-compare"
        title="How to compare two attachment categories"
        lead="The specification sheet is the last thing to look at, not the first. These four questions settle most comparisons before you open a brochure."
        className="mx-auto max-w-[88rem] px-4 sm:px-6 lg:px-10"
      >
        <NumberedGrid
          columns={2}
          items={[
            {
              title: "What are you producing?",
              body: "Whole stems, mulch, chip, sized material or a cleared area. The output is the job, and two tools that produce different outputs are not alternatives regardless of how similar they look.",
            },
            {
              title: "Does the material have value?",
              body: "If the timber is worth something, tools that destroy it are excluded immediately. If it is waste, tools that carefully preserve and place it are doing expensive work for no return.",
            },
            {
              title: "How are you pricing the work?",
              body: "Per stem, per stump or per hectare. The unit you quote in tells you which tool's economics you need to model, and the two calculators on this site cover the two hardest cases.",
            },
            {
              title: "What does your carrier already have?",
              body: "Circuits are a real cost to add. Where two categories otherwise tie, the one your machine can already run today usually wins on total cost.",
            },
          ]}
        />
      </Section>

      <Section
        id="beyond"
        title="Comparisons this site deliberately does not make"
        lead="Impartial buyer advice means saying where a comparison is not useful."
        className="mx-auto max-w-[88rem] px-4 sm:px-6 lg:px-10"
      >
        <Prose>
          <p>
            You will not find brand-versus-brand shoot-outs here, because this site has not independently tested this
            equipment and pretending otherwise would be dishonest. What the{" "}
            <Link href="/brands/">manufacturer profiles</Link> do instead is set out each range&rsquo;s published
            specification, what it suits, where it does not fit and what the parts situation looks like in Australia —
            which is the part of a brand decision that actually costs money.
          </p>
          <p>
            You will also not find price comparisons, because attachment pricing moves with the exchange rate,
            specification, rotation options and the carrier bracket. The{" "}
            <Link href="/costs/">costs page</Link> covers what drives the number instead, which stays true for longer
            than a figure does.
          </p>
        </Prose>
      </Section>

      <Section id="faq" title="Frequently asked questions" className="mx-auto max-w-[88rem] px-4 sm:px-6 lg:px-10">
        <FaqBlock items={FAQS} />
      </Section>

      <Section id="next" title="Where to go next" className="mx-auto max-w-[88rem] px-4 pb-8 sm:px-6 lg:px-10">
        <NextSteps
          items={[
            { href: "/forestry-machinery-guide/", label: "The full buyer's guide", why: "All eight categories and what separates them, from the top." },
            { href: "/compatibility/", label: "What suits your carrier", why: "Narrow the field by machine before you compare anything." },
            { href: "/costs/", label: "What attachments cost", why: "The five cost lines, and how to compare two quotes properly." },
            { href: "/as-4373-mechanised-pruning/", label: "AS 4373 and mechanised pruning", why: "Where a compliance specification, not a comparison, decides the tool." },
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
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
            { "@type": "ListItem", position: 2, name: "Comparisons", item: absoluteUrl("/compare/") },
          ],
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Forestry attachment comparisons",
          url: absoluteUrl("/compare/"),
          inLanguage: "en-AU",
          hasPart: COMPARISONS.map((c) => ({
            "@type": "WebPage",
            name: c.title,
            url: absoluteUrl(`/compare/${c.slug}/`),
          })),
        }}
      />
    </>
  );
}
