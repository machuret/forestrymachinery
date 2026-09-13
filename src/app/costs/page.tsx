import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { JsonLd } from "@/components/JsonLd";
import { CapitalPerHourChart } from "@/components/diagrams/CapitalPerHourChart";
import { nodeToText } from "@/lib/node-text";
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
  title: { absolute: "What Forestry Attachments Cost in Australia | Cost Drivers Guide" },
  description:
    "What drives the price of an excavator forestry attachment in Australia: carrier class, steel, rotation, brackets, wear parts, freight and downtime.",
  alternates: { canonical: absoluteUrl("/costs/") },
  keywords: [
    "forestry attachment cost australia",
    "excavator attachment price",
    "stump grinder cost",
    "forestry mulcher price australia",
    "attachment running costs",
  ],
};

const FAQS: Qa[] = [
  {
    q: "How much does a forestry attachment cost in Australia?",
    a: (
      <>
        There is no single figure, and any site publishing one is quoting a number that was accurate on the day it was
        written. Attachment pricing moves with the exchange rate, the model within a range, rotation options and the
        carrier bracket, so a figure published today is routinely wrong within a quarter. What does not move is the
        structure underneath it: carrier class, steel grade, rotation, and whether you take a turnkey kit. Understand
        those four and you can interrogate any quote you are handed.
      </>
    ),
  },
  {
    q: "Why does the same attachment vary so much between quotes?",
    a: (
      <>
        Usually because the quotes are not for the same thing. The most common differences are the model inside a range
        (a BI300 and a BI500 are both &ldquo;a tree shear&rdquo;), whether rotation is included, whether the price
        carries a machine-specific mounting bracket and hose kit or leaves you to fabricate one, and whether freight to
        your depot is in or out. Ask for all four to be itemised and most of the gap explains itself.
      </>
    ),
  },
  {
    q: "What is the biggest running cost on a forestry attachment?",
    a: (
      <>
        Wear parts, by a wide margin, and it varies enormously by category. Mulcher teeth in abrasive or stony ground
        are a consumable you budget monthly. Shear blades are a periodic rebuild. Saw chains and bars on a grapple saw
        are a weekly conversation. Ask every supplier for wear-part pricing and lead time before you sign, not after —
        it is the number that decides your cost per hour, and it is the one most buyers never ask for.
      </>
    ),
  },
  {
    q: "Should I buy the cheapest attachment that fits my machine?",
    a: (
      <>
        Only if the utilisation is low enough that running cost barely matters. Above roughly 500 hours a year the
        purchase price stops being the dominant number and wear-part supply and parts availability take over. At that
        point a cheaper attachment with a six-week parts lead time costs more than a dearer one with stock in the
        country, because the difference is measured in lost days rather than dollars on the invoice.
      </>
    ),
  },
  {
    q: "Is a turnkey kit worth the extra cost?",
    a: (
      <>
        Nearly always. A turnkey kit is the machine-specific mounting bracket plus hose kit, supplied with the
        attachment. It costs more up front, and a workshop-fabricated bracket that does not sit right will cost you more
        in cracked steel than the kit ever saved. The exception is a workshop that regularly builds brackets for your
        exact machine and stands behind them.
      </>
    ),
  },
  {
    q: "Does an attachment increase my excavator's running costs?",
    a: (
      <>
        Mulching and grinding do, materially. Both put continuous load on a machine designed for intermittent load, and
        pumps, coolers and final drives feel it. If you intend to run a mulcher hard, budget for improved cooling and
        expect your carrier&rsquo;s service intervals to tighten. Handling attachments such as grabs are far gentler and
        barely move the carrier&rsquo;s cost line.
      </>
    ),
  },
  {
    q: "Can I claim a forestry attachment on the instant asset write-off?",
    a: (
      <>
        Usually not, because most forestry attachments cost well above the threshold. The instant asset write-off
        threshold is $20,000 per asset, and the 2026-27 Budget announced it would be made permanent from 1 July 2026 for
        small businesses with aggregated turnover under $10 million. As at mid-2026 the enabling legislation had not
        passed Parliament, and until it does the standing legislated threshold for assets first used from 1 July 2026 is
        $1,000. Above the threshold the asset joins the small business pool at 15% in the first year and 30% each year
        after. This is general information, not tax advice — confirm your position with your accountant.
      </>
    ),
  },
  {
    q: "Does freight to regional Australia change the number much?",
    a: (
      <>
        Enough to be worth asking about before you compare quotes. Forestry attachments are dense, heavy freight, and a
        quote that is competitive ex-Sydney may not be once it is on a truck to regional Queensland or across the
        Nullarbor. Ask whether the quoted figure is ex-works or delivered, and confirm who carries the risk in transit.
      </>
    ),
  },
  {
    q: "What is the real cost of an attachment sitting idle waiting for parts?",
    a: (
      <>
        For a contractor running 500 hours a year, a six-week parts wait in the middle of a season is not a parts
        problem, it is a revenue problem. This is the strongest argument for buying through a local distributor holding
        stock rather than importing direct on price. Ask what is held in Australia, what is air-freighted, and what the
        realistic lead time is on the parts that actually wear.
      </>
    ),
  },
  {
    q: "How do I compare two quotes that look completely different?",
    a: (
      <>
        Reduce both to a cost per hour over the hours you will actually run. Take the purchase price less realistic
        residual, divide by expected life in hours, then add wear parts per hour, carrier cost per hour, operator and
        fuel. The{" "}
        <Link href="/cost-per-stump-calculator/">cost per stump calculator</Link> and{" "}
        <Link href="/cost-per-hectare-calculator/">cost per hectare calculator</Link> do this arithmetic for the two
        categories where it matters most.
      </>
    ),
  },
];

export default function CostsPage() {
  return (
    <>
      <PageHero
        eyebrow="Costs"
        title="What forestry attachments actually cost"
        crumb="Costs"
        trail={[{ label: "Forestry Machinery Guide", href: "/forestry-machinery-guide/" }]}
        lead="Purchase price is the number buyers focus on and the smallest part of the decision. This page covers the five costs that make up an attachment, what moves each of them, and how to compare two quotes that look nothing alike."
      />

      <article className="mx-auto max-w-[88rem] px-4 py-14 sm:px-6 sm:py-20 lg:px-10">
        <ShortAnswer>
          There is no honest single price for a forestry attachment in Australia, because the figure moves with the
          exchange rate, the model inside a range, rotation options and the carrier bracket. What is stable is the
          structure: four things drive the purchase price, and five separate costs make up what you actually pay to own
          and run the tool. Learn those and you can read any quote you are handed.
        </ShortAnswer>

        <Section id="no-prices" title="Why this page has no price list">
          <Prose>
            <p>
              Most sites in this category publish a price range. It is good for traffic and bad for buyers, because
              attachment pricing in Australia moves with the exchange rate, specification, rotation options and the
              carrier bracket. A figure published this quarter is routinely wrong by the next one, and a buyer who
              anchors on it arrives at a quote convinced they are being overcharged when they are not.
            </p>
            <p>
              The more useful thing is the structure underneath the number. If you know what moves the price, you can
              interrogate a quote properly, work out why two suppliers are $8,000 apart, and tell the difference between
              a genuinely competitive offer and one that has quietly left the bracket, the hose kit and the freight out.
            </p>
            <p>
              Where a figure is genuinely stable — tax thresholds, depreciation rates, utilisation thresholds — this
              page states it and cites the source.
            </p>
          </Prose>
        </Section>

        <Section
          id="five-costs"
          title="An attachment has five costs, not one"
          lead="The invoice is the only one most buyers plan for. The other four are where ownership economics are actually decided."
        >
          <NumberedGrid
            columns={3}
            items={[
              {
                title: "Purchase",
                body: "Driven by carrier class, steel grade, rotation, and whether you take a turnkey kit. The largest single number and the one that stops mattering fastest as hours climb.",
              },
              {
                title: "Wear parts",
                body: "The dominant running cost, and it varies enormously by category. Teeth, blades, chains, bars and tips. Budget it monthly, not annually.",
              },
              {
                title: "Carrier wear",
                body: "Mulching and grinding put continuous load on a machine built for intermittent load. Pumps, coolers and final drives feel it, and service intervals tighten.",
              },
              {
                title: "Downtime",
                body: "Parts availability in Australia is the difference between a two-day repair and a six-week one. On a machine earning daily, this is the largest hidden cost in the category.",
              },
              {
                title: "Capital",
                body: "What the money would otherwise have earned, and what the attachment is worth when you are done with it. Rarely modelled, and it moves the answer on marginal purchases.",
              },
            ]}
          />
        </Section>

        <Section
          id="utilisation-effect"
          title="Why the invoice stops mattering"
          lead="The same attachment, the same wear rate, five different levels of use. Only one line moves."
        >
          <CapitalPerHourChart />
        </Section>

        <Section
          id="purchase-drivers"
          title="What moves the purchase price"
          lead="Four variables explain most of the gap between two quotes for what looks like the same attachment."
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
                  {["Driver", "What it changes", "What to ask for"].map((h) => (
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
                    "Carrier class",
                    "The single biggest step. A model built for a 20 tonne machine carries more steel, bigger bearings and a larger motor than one built for 5 tonnes.",
                    "The exact model, not the series. A BI300 and a BI500 are both tree shears.",
                  ],
                  [
                    "Steel grade",
                    "Abrasion-resistant steels such as Hardox on tines, blades and wear plates cost more and deform less. Mild steel in a wear position is a false economy.",
                    "Which components are abrasion-resistant steel and which are not.",
                  ],
                  [
                    "Rotation",
                    "Continuous 360° rotation, and the rotator specified to deliver it, is often the largest single option on the quote. On some categories it is most of the productivity difference.",
                    "Whether rotation is included, which rotator, and what it costs to replace.",
                  ],
                  [
                    "Turnkey kit",
                    "Machine-specific mounting bracket plus hose kit. Costs more up front and is nearly always worth it.",
                    "Whether the bracket is machine-specific and who warrants it.",
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

          <Callout label="The bracket is not where to save money">
            A workshop-fabricated bracket that does not sit right will cost you more in cracked steel than the turnkey
            kit saved. The load path from a forestry attachment into the stick is not forgiving, and a bracket that is
            5mm out concentrates it somewhere the designer did not intend.
          </Callout>
        </Section>

        <Section
          id="wear-parts"
          title="Wear parts by category"
          lead="The dominant running cost, and the one buyers price last. These are the patterns by category — the figures themselves are specific to your ground and your supplier, which is exactly why you should ask for them in writing."
        >
          <div
            className="relative overflow-x-auto border border-steel-700 bg-steel-900"
            tabIndex={0}
            role="region"
            aria-label="Scrollable table"
          >
            <table className="w-full min-w-[48rem] border-collapse text-sm">
              <thead>
                <tr>
                  {["Category", "Main consumable", "Replacement rhythm", "What accelerates it"].map((h) => (
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
                  ["Forestry mulchers", "Teeth and tips", "Monthly budget line in abrasive ground", "Stony or sandy soil, ground contact, working below grade"],
                  ["Stump grinders", "Teeth", "Monthly in abrasive ground", "Sandy or stony soil, buried metal, urban fill"],
                  ["Grapple saws", "Chains and bars", "Weekly conversation", "Dirty timber, ground contact, incorrect chain tension"],
                  ["Tree shears", "Blade rebuild", "Periodic", "Hardwood, buttressed stems, oversize diameter"],
                  ["Stump cutters", "Blade and jaw rebuild", "Periodic", "Oversize material, embedded stone"],
                  ["Log and forestry grabs", "Tine wear, rotator service", "Low", "Ground scraping, side loading"],
                  ["Mechanical pruning", "Blades and cutting bars", "Varies by tool", "Dirty bark, wire, dead hardwood"],
                  ["Tillage and compaction", "Flighting, teeth, plate", "Low to moderate", "Rocky ground, reactive clay"],
                ].map(([a, b, c, d]) => (
                  <tr key={a} className="border-t border-steel-800 transition-colors hover:bg-hazard/5">
                    <th scope="row" className="px-4 py-4 text-left align-top font-semibold text-bone">
                      {a}
                    </th>
                    <td className="border-l border-steel-800 px-4 py-4 align-top text-concrete">{b}</td>
                    <td className="border-l border-steel-800 px-4 py-4 align-top text-concrete">{c}</td>
                    <td className="border-l border-steel-800 px-4 py-4 align-top text-concrete">{d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Prose className="mt-8">
            <p>
              <Link href="/wear-parts/">The wear parts guide</Link> covers each category in detail, including why
              ground rather than timber decides tooth life. The useful question is not &ldquo;what does a set of teeth
              cost&rdquo; but &ldquo;what does a set of teeth
              cost, how many hours does a set last in ground like mine, and how long does a replacement set take to
              arrive&rdquo;. A cheaper set that lasts half as long is more expensive, and a cheap set that takes six
              weeks to land is not a set at all.
            </p>
          </Prose>
        </Section>

        <Section
          id="scenarios"
          title="Three buyers, three different answers"
          lead="The same attachment category produces completely different economics depending on how hard it runs and what it runs in."
        >
          <div className="grid gap-px bg-steel-700 lg:grid-cols-3">
            {[
              {
                label: "Entry level",
                who: "Arborist running 150–200 hours a year",
                body: "At this utilisation the purchase price dominates and wear parts barely register. Hire or subcontract is usually the right answer, and if you do buy, buy for resale value and simplicity rather than for the lowest cost per hour. A tool that sits in the yard eleven months a year does not repay a premium specification.",
                cost: "Purchase price dominates",
              },
              {
                label: "Mid range",
                who: "Civil contractor running 300–500 hours a year",
                body: "The crossover band. Buy if the tool unlocks work you currently turn away, because the marginal revenue matters more than the marginal cost per hour. Wear parts start to show up in the monthly figures and parts lead time starts to matter. This is where the turnkey kit argument is strongest, because downtime now costs real money.",
                cost: "Wear parts become visible",
              },
              {
                label: "High utilisation",
                who: "Vegetation or clearing contractor above 500 hours a year",
                body: "Ownership almost always wins, and the purchase price becomes a secondary consideration. Wear-part pricing, parts availability in Australia and the service network decide the total cost. At this level a six-week parts wait is a revenue event, and buying on invoice price alone is the most expensive decision available.",
                cost: "Parts supply decides the total",
              },
            ].map((s) => (
              <div key={s.label} className="bg-steel-950 p-6 sm:p-7">
                <span className="font-mono text-[0.62rem] tracking-[0.18em] text-hazard uppercase">{s.label}</span>
                <h3 className="display mt-3 text-xl leading-tight text-bone">{s.who}</h3>
                <p className="mt-4 text-[0.95rem] leading-relaxed text-concrete">{s.body}</p>
                <p className="mt-5 border-t border-steel-800 pt-4 font-mono text-[0.6rem] tracking-[0.14em] text-moss-400 uppercase">
                  {s.cost}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="utilisation"
          title="The utilisation test"
          lead="Attachments are cheap compared to carriers, but they are not free, and hours a year is the number that decides whether you should own one at all."
        >
          <Prose>
            <p>
              Rough guidance, and it is guidance rather than gospel. Below about 200 hours a year, hire or subcontract.
              Between 200 and 500, buy if the tool unlocks work you currently turn away. Above 500, ownership almost
              always wins, and wear-part supply becomes more important than purchase price.
            </p>
            <p>
              The trap is counting the hours you hope to run rather than the hours you have actually run in the last two
              years. An attachment bought on optimistic utilisation is the most common bad purchase in this category,
              and it is usually visible in the yard within a season.{" "}
              <Link href="/hire-vs-buy/">The hire versus buy page</Link> works through the decision properly.
            </p>
          </Prose>
        </Section>

        <Section
          id="tax"
          title="Tax treatment, stated accurately"
          lead="Most forestry attachments cost well above the instant asset write-off threshold, so the write-off is usually not the relevant mechanism."
        >
          <Prose>
            <p>
              The instant asset write-off threshold is $20,000 per asset, and in the 2026-27 Budget it was announced to
              be made permanent from 1 July 2026 for small businesses with aggregated turnover under $10 million. As at
              mid-2026 the enabling legislation had not passed Parliament, and until it does the standing legislated
              threshold for assets first used from 1 July 2026 is $1,000.
            </p>
            <p>
              For an attachment costing more than the threshold, the asset joins the small business pool and depreciates
              at 15% in the first year and 30% in each year after. There is a timing trap worth knowing: the test is
              that the asset is first used or installed ready for use within the income year, not ordered or paid for.
              An imported attachment sitting on a wharf on 30 June does not qualify.
            </p>
          </Prose>

          <Callout label="General information, not advice" tone="warn">
            This is a summary of publicly available Australian Taxation Office guidance, written as general information.
            It is not tax advice and does not account for your circumstances. Confirm your own position with your
            accountant before you time a purchase around it. Thresholds and legislation status change — see the{" "}
            <Link href="/sources/">sources page</Link> for what this is based on.
          </Callout>
        </Section>

        <Section
          id="comparing-quotes"
          title="Making two quotes comparable"
          lead="Most quote comparisons fail because the two documents describe different scopes. Reduce both to the same list before you look at the totals."
        >
          <Checklist
            title="Itemise before you compare"
            items={[
              "Exact model, not the series name",
              "Carrier make, model and operating weight the quote is built for",
              "Rotation: included or optional, and which rotator",
              "Mounting bracket: machine-specific or generic",
              "Hose kit and fittings, or supply-only",
              "Case drain line where the motor requires one",
              "Freight: ex-works or delivered to your depot",
              "Installation and commissioning labour",
              "Warranty term, and what it covers on wear items",
              "Wear-part pricing in writing",
              "Wear-part lead time and what is held in Australia",
              "Whether a trial or demonstration is available",
            ]}
          />
        </Section>

        <Section
          id="red-flags"
          title="Red flags in an attachment quote"
          lead="Not all of these are deal-breakers. All of them are worth a direct question before you sign."
        >
          <RedFlags
            items={[
              {
                flag: "A quote materially below the others",
                why: "Usually scope, not generosity. Check the model inside the range, whether rotation is included, and whether the bracket and hose kit are in or out.",
              },
              {
                flag: "No wear-part pricing offered",
                why: "Wear parts are the dominant running cost. A supplier who will not quote them before the sale is unlikely to be sharper about them afterwards.",
              },
              {
                flag: "Vague carrier compatibility",
                why: "\"Suits 5 to 20 tonne\" is a range, not a match. Ask for the specific model against your machine's operating weight, auxiliary flow and pressure.",
              },
              {
                flag: "No case drain where the motor needs one",
                why: "Piston motors usually need drainage back to tank. Skipping it kills motor seals, often inside a season, and it is rarely covered by warranty.",
              },
              {
                flag: "Generic mounting bracket on a heavy attachment",
                why: "The load path from a forestry attachment into the stick is unforgiving. A bracket that does not sit right cracks steel that is expensive to repair.",
              },
              {
                flag: "Parts held only overseas",
                why: "The difference between a two-day repair and a six-week one. On a machine running 500 hours a year this outweighs a difference on the invoice.",
              },
              {
                flag: "Quick hitch not to standard",
                why: "Quick hitches should comply with AS 4772-2008 or an equivalent such as ISO 13031-2016. Heavy attachments swung at height make this a live risk, not paperwork.",
              },
              {
                flag: "Price valid for an unusually long period",
                why: "Attachment pricing moves with the exchange rate. A price held for six months is either carrying a margin buffer or is about to be revised.",
              },
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
                href: "/wear-parts/",
                label: "Wear parts in detail",
                why: "The dominant running cost, category by category, and what drives the rate.",
              },
              {
                href: "/hire-vs-buy/",
                label: "Hire, buy or subcontract",
                why: "Work the utilisation decision properly before you price anything.",
              },
              {
                href: "/finance-and-tax/",
                label: "Finance and tax",
                why: "Depreciation, the write-off threshold and the first-use timing trap.",
              },
              {
                href: "/support-and-parts-australia/",
                label: "Parts and support",
                why: "Freight, lead time and what to hold on your own shelf.",
              },
              {
                href: "/cost-per-stump-calculator/",
                label: "Cost per stump calculator",
                why: "Turn these cost lines into a figure per stump for grinding work.",
              },
              {
                href: "/cost-per-hectare-calculator/",
                label: "Cost per hectare calculator",
                why: "The same arithmetic for mulching and clearing, priced by area.",
              },
              {
                href: "/compatibility/",
                label: "What suits your carrier",
                why: "Before costing anything, confirm the categories your machine can actually run.",
              },
              {
                href: "/forestry-machinery-guide/",
                label: "The full buyer's guide",
                why: "Start at the hub if you are still choosing between categories.",
              },
              {
                href: SITE.quotePath,
                label: "Request a quote",
                why: "Bring operating weight, auxiliary flow and working pressure.",
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
          headline: "What forestry attachments actually cost in Australia",
          description:
            "The five costs that make up a forestry attachment, what moves each of them, and how to compare two quotes.",
          inLanguage: "en-AU",
          mainEntityOfPage: absoluteUrl("/costs/"),
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
            { "@type": "ListItem", position: 3, name: "Costs", item: absoluteUrl("/costs/") },
          ],
        }}
      />
    </>
  );
}
