import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { JsonLd } from "@/components/JsonLd";
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
  title: { absolute: "Hire or Buy a Forestry Attachment? | Australian Decision Guide" },
  description:
    "When to hire a forestry attachment, when to buy and when to subcontract. Utilisation thresholds, the hidden costs on both sides, and how to test it.",
  alternates: { canonical: absoluteUrl("/hire-vs-buy/") },
  keywords: [
    "excavator attachment hire australia",
    "forestry mulcher hire or buy",
    "stump grinder hire",
    "attachment utilisation",
    "should i buy a forestry attachment",
  ],
};

const FAQS: Qa[] = [
  {
    q: "How many hours a year justify buying a forestry attachment?",
    a: (
      <>
        As rough guidance: below about 200 hours a year, hire or subcontract. Between 200 and 500, buy if the tool
        unlocks work you currently turn away. Above 500 hours, ownership almost always wins and wear-part supply becomes
        more important than purchase price. Count the hours you have actually run over the last two years, not the hours
        you hope to run — optimistic utilisation is the most common cause of an attachment sitting idle in a yard.
      </>
    ),
  },
  {
    q: "Is hiring an attachment expensive compared with owning one?",
    a: (
      <>
        Per hour, almost always. Per year at low utilisation, almost never. A hire rate carries the hire company&rsquo;s
        capital, wear parts, maintenance, insurance and margin, so it is several times the marginal cost of running your
        own. That is irrelevant if you only need it three weeks a year: what matters is the annual total, not the
        hourly rate.
      </>
    ),
  },
  {
    q: "What does an attachment hire rate usually include?",
    a: (
      <>
        This is the question to ask before comparing rates. Confirm whether wear parts are included or charged on
        return, who carries damage, whether the rate assumes a machine-specific bracket for your carrier, whether
        freight both ways is in or out, and whether the meter runs on calendar days or engine hours. Two hire rates
        quoted on different bases are not comparable.
      </>
    ),
  },
  {
    q: "Should I subcontract instead of hiring or buying?",
    a: (
      <>
        Subcontracting is the right answer more often than contractors like to admit, particularly for one-off packages
        outside your normal scope. You pay a margin but you carry no capital, no wear, no learning curve and no
        utilisation risk, and the subcontractor brings an operator who has done it before. The case for owning is
        strongest when the work is recurring and you can keep the tool busy.
      </>
    ),
  },
  {
    q: "Can I hire an attachment to test it before buying?",
    a: (
      <>
        Where it is available, this is the single most useful thing you can do. A fortnight on your own material, your
        own ground and your own carrier tells you more about productivity and wear rates than any brochure figure. Ask
        whether a trial or demonstration is available, and whether hire costs can be credited against a purchase.
      </>
    ),
  },
  {
    q: "Does hiring avoid the carrier wear problem?",
    a: (
      <>
        No. The attachment is hired, the carrier is yours. Mulching and grinding put continuous load on a machine
        designed for intermittent load, and pumps, coolers and final drives feel it regardless of who owns the tool. If
        you are hiring a mulcher for a long package, budget for tighter service intervals on your own machine.
      </>
    ),
  },
  {
    q: "What if the work is seasonal?",
    a: (
      <>
        Seasonal work is the classic hire case, because the annual hours can look respectable while being concentrated
        into three months. The risk with buying is that the tool is idle for three quarters of the year while the
        capital is committed. The risk with hiring is availability: if every contractor in your region wants a mulcher
        in the same window, the hire fleet is empty when you need it. Where seasonality is sharp and availability is
        tight, owning can win at lower utilisation than the general thresholds suggest.
      </>
    ),
  },
  {
    q: "Is a used attachment a middle path between hiring and buying new?",
    a: (
      <>
        Sometimes, and it turns on parts. A used attachment from a current series with parts held in Australia can be a
        sound way to test a category at lower capital risk. A used attachment from a discontinued series, or an
        imported one with no local parts support, transfers the whole risk to you at the moment something wears out.
        Check what is still supported before you check the price.
      </>
    ),
  },
];

export default function HireVsBuyPage() {
  return (
    <>
      <PageHero
        eyebrow="Decision guide"
        title="Hire, buy or subcontract?"
        crumb="Hire vs buy"
        trail={[{ label: "Forestry Machinery Guide", href: "/forestry-machinery-guide/" }]}
        lead="Attachments are cheap compared with carriers, but they are not free, and an attachment running 150 hours a year is usually a hire decision wearing a purchase order. Here is how to tell which side of the line you are on."
      />

      <article className="mx-auto max-w-[88rem] px-4 py-14 sm:px-6 sm:py-20 lg:px-10">
        <ShortAnswer>
          Below roughly 200 hours a year, hire or subcontract. Between 200 and 500 hours, buy if the tool unlocks work
          you currently turn away. Above 500 hours, ownership almost always wins, and the decision shifts from purchase
          price to wear-part supply and parts availability. The number that decides it is the hours you have actually
          run, not the hours you plan to.
        </ShortAnswer>

        <Section
          id="thresholds"
          title="The three utilisation bands"
          lead="These are the bands that matter in practice. They are guidance rather than gospel, and the seasonality and availability notes further down move them."
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
                  {["Annual hours", "Default answer", "Why", "What would change it"].map((h) => (
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
                    "Below 200",
                    "Hire or subcontract",
                    "Capital sits idle most of the year and the purchase price dominates a small number of hours.",
                    "Sharp seasonality with a tight hire fleet, or work you cannot win without owning the tool.",
                  ],
                  [
                    "200 to 500",
                    "Buy if it unlocks work",
                    "The crossover band. Marginal revenue from work you currently turn away matters more than marginal cost per hour.",
                    "If the tool only replaces work you already do profitably, the case is weaker than it looks.",
                  ],
                  [
                    "Above 500",
                    "Buy",
                    "Ownership almost always wins. Purchase price becomes secondary to wear-part pricing and parts availability.",
                    "Very little. At this level the question is which supplier, not whether to own.",
                  ],
                ].map(([a, b, c, d]) => (
                  <tr key={a} className="border-t border-steel-800 transition-colors hover:bg-hazard/5">
                    <th scope="row" className="px-4 py-4 text-left align-top font-mono text-bone">
                      {a}
                    </th>
                    <td className="border-l border-steel-800 px-4 py-4 align-top font-semibold text-bone">{b}</td>
                    <td className="border-l border-steel-800 px-4 py-4 align-top text-concrete">{c}</td>
                    <td className="border-l border-steel-800 px-4 py-4 align-top text-concrete">{d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Callout label="Count backwards, not forwards" tone="warn">
            The most common bad purchase in this category is an attachment bought on forecast hours. Open the last two
            years of job records and count the hours the work would actually have used. If that number is not close to
            the forecast, hire for a season and measure it properly.
          </Callout>
        </Section>

        <Section
          id="three-options"
          title="What each option actually costs you"
          lead="Beyond the rate or the invoice, each route carries a different set of risks. These are the ones that decide the outcome."
        >
          <NumberedGrid
            columns={3}
            items={[
              {
                title: "Hiring",
                body: (
                  <>
                    Highest cost per hour, lowest commitment. You carry no capital and no wear-part risk, but you carry
                    availability risk: in a busy season the fleet is empty exactly when you need it. Check what the rate
                    includes, whether wear is charged on return, and whether a machine-specific bracket for your carrier
                    is available at all.
                  </>
                ),
              },
              {
                title: "Buying",
                body: (
                  <>
                    Lowest cost per hour at volume, highest commitment. You carry capital, wear parts, carrier wear,
                    downtime and resale risk — and you gain the ability to quote work at short notice without asking
                    anyone. Above 500 hours a year this is almost always the right answer.
                  </>
                ),
              },
              {
                title: "Subcontracting",
                body: (
                  <>
                    No capital, no wear, no learning curve, no utilisation risk, and someone else&rsquo;s experienced
                    operator. You pay a margin and you give up control of scheduling and quality. Frequently the correct
                    answer for one-off packages outside your normal scope, and frequently dismissed too quickly.
                  </>
                ),
              },
            ]}
          />
        </Section>

        <Section
          id="by-category"
          title="It differs by category"
          lead="The general thresholds hold, but some categories tip earlier than others because of what they cost to run or how hard they are to hire."
        >
          <div
            className="relative overflow-x-auto border border-steel-700 bg-steel-900"
            tabIndex={0}
            role="region"
            aria-label="Scrollable table"
          >
            <table className="w-full min-w-[44rem] border-collapse text-sm">
              <thead>
                <tr>
                  {["Category", "Tips toward", "Why"].map((h) => (
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
                    "Log and forestry grabs",
                    "Buying, early",
                    "The highest-utilisation attachment most contractors own. Almost every site has material to move, so the hours accumulate without being planned.",
                    "/log-grab-guide/",
                  ],
                  [
                    "Forestry mulchers",
                    "Hiring, until volume is proven",
                    "High wear cost and heavy carrier load. Hiring for a package lets you measure real hectares per hour before committing capital.",
                    "/forestry-mulcher-guide/",
                  ],
                  [
                    "Stump grinders",
                    "Buying once stump counts are steady",
                    "Cost per stump improves quickly with volume, and grinding work tends to be recurring rather than one-off.",
                    "/stump-grinder-guide/",
                  ],
                  [
                    "Grapple saws",
                    "Buying, if removals are core",
                    "Hard to hire at short notice, needs a dual circuit set up on your machine, and the operator learning curve rewards continuity.",
                    "/grapple-saw-guide/",
                  ],
                  [
                    "Mechanical pruning",
                    "Buying, on contract award",
                    "The recurring-revenue category. Utility and council programs are multi-year, which makes utilisation predictable.",
                    "/mechanical-pruning-guide/",
                  ],
                  [
                    "Stump cutters",
                    "Subcontracting or hiring",
                    "The narrowest audience in the set. Unless you are processing extracted stumps regularly, the hours rarely justify ownership.",
                    "/stump-cutter-guide/",
                  ],
                ].map(([a, b, c, href]) => (
                  <tr key={a} className="border-t border-steel-800 transition-colors hover:bg-hazard/5">
                    <th scope="row" className="px-4 py-4 text-left align-top">
                      <Link href={href} className="font-semibold text-moss-400 hover:text-hazard">
                        {a}
                      </Link>
                    </th>
                    <td className="border-l border-steel-800 px-4 py-4 align-top font-semibold text-bone">{b}</td>
                    <td className="border-l border-steel-800 px-4 py-4 align-top text-concrete">{c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section
          id="test"
          title="How to test the numbers before you commit"
          lead="Four steps that turn the decision from a judgement call into arithmetic."
        >
          <NumberedGrid
            columns={2}
            items={[
              {
                title: "Count the hours you have actually run",
                body: "Open the last two years of job records. Count the hours this work would have consumed, not the hours you expect next year. This is the number the whole decision rests on.",
              },
              {
                title: "Hire for one package and measure",
                body: "A fortnight on your own material, your own ground and your own carrier tells you your real productivity and your real wear rate. Both are inputs to the cost calculation and neither can be read off a brochure.",
              },
              {
                title: "Build the cost per unit, not per hour",
                body: (
                  <>
                    Cost per stump for grinding, cost per hectare for mulching. The{" "}
                    <Link href="/cost-per-stump-calculator/">stump</Link> and{" "}
                    <Link href="/cost-per-hectare-calculator/">hectare</Link> calculators do the arithmetic with your
                    own figures.
                  </>
                ),
              },
              {
                title: "Price the work you are turning away",
                body: "If the tool unlocks jobs you currently decline, that revenue belongs in the calculation. This is what moves a 300-hour purchase from marginal to obvious, and it is routinely left out.",
              },
            ]}
          />
        </Section>

        <Section
          id="checklist"
          title="Before you sign either way"
          lead="Whether the answer is a hire agreement or a purchase order, confirm these first."
        >
          <Checklist
            title="Hire or buy checklist"
            items={[
              "Hours actually run over the last two seasons",
              "Hours the tool would need to run to break even",
              "Revenue from work you currently turn away",
              "Whether your carrier has the circuit the tool needs",
              "Whether a machine-specific bracket exists for your carrier",
              "Wear-part pricing in writing",
              "Wear-part lead time, and what is held in Australia",
              "For hire: what the rate includes and excludes",
              "For hire: whether calendar days or engine hours are metered",
              "For hire: who carries damage and wear on return",
              "For purchase: warranty term and wear-item exclusions",
              "Whether a trial can be credited against a purchase",
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
                href: "/costs/",
                label: "What attachments actually cost",
                why: "The five cost lines behind the decision, and what moves each one.",
              },
              {
                href: "/compatibility/",
                label: "What suits your carrier",
                why: "There is no point costing a category your machine cannot run.",
              },
              {
                href: "/wear-parts/",
                label: "Wear parts guide",
                why: "If you buy, this is what it costs you every week it works.",
              },
              {
                href: "/finance-and-tax/",
                label: "Finance and tax",
                why: "How each route is treated, and why tax should follow the decision rather than drive it.",
              },
              {
                href: "/forestry-machinery-guide/",
                label: "The full buyer's guide",
                why: "Start here if you are still choosing between categories.",
              },
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
          headline: "Hire, buy or subcontract a forestry attachment",
          description: "Utilisation thresholds and the hidden costs on both sides of the hire versus buy decision.",
          inLanguage: "en-AU",
          mainEntityOfPage: absoluteUrl("/hire-vs-buy/"),
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
            { "@type": "ListItem", position: 3, name: "Hire vs buy", item: absoluteUrl("/hire-vs-buy/") },
          ],
        }}
      />
    </>
  );
}
