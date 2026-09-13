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
  title: { absolute: "Forestry Attachment Parts and Support in Australia | Buyer's Guide" },
  description:
    "Freight, lead time, parts stock and service coverage for excavator forestry attachments across Australia, and what to ask before you commit.",
  alternates: { canonical: absoluteUrl("/support-and-parts-australia/") },
  keywords: [
    "forestry attachment parts australia",
    "excavator attachment freight",
    "attachment parts lead time",
    "forestry attachment supplier australia",
  ],
};

const STATES = [
  {
    state: "New South Wales and ACT",
    note: "Closest to the South Windsor supply base, so road freight is short and lead times are at their best. The Mid North Coast harvesting moratorium has shifted some contractor demand from native harvest support toward clearing and vegetation management.",
  },
  {
    state: "Victoria",
    note: "Well served by road freight from Sydney on established interstate routes. Strong plantation and utility vegetation activity, and the hazard-reduction season concentrates mulcher demand into a predictable window.",
  },
  {
    state: "Queensland",
    note: "Long freight legs north of Brisbane, and further again to the far north. Humidity and wet-season access both matter: plan parts holdings around a season where a six-week wait can cost an entire working window.",
  },
  {
    state: "South Australia",
    note: "Manageable road freight via the Melbourne or Broken Hill corridors. Abrasive, stony ground in many clearing areas makes tooth and blade consumption a larger share of running cost than buyers expect.",
  },
  {
    state: "Western Australia",
    note: "The longest freight leg in the country. Sea or rail freight to Perth adds real time, and anything beyond Perth adds more. Holding a spare wear-part set locally is worth more here than anywhere else in Australia.",
  },
  {
    state: "Tasmania",
    note: "Bass Strait adds a sea leg to every delivery, including parts. Significant plantation activity, and a contractor base that plans around shipping schedules as a matter of routine.",
  },
  {
    state: "Northern Territory",
    note: "Remote servicing and very long freight distances. Wet-season access windows compress the working year, which raises the cost of downtime well above the national average.",
  },
];

const FAQS: Qa[] = [
  {
    q: "Where are these forestry attachments supplied from?",
    a: (
      <>
        {SITE.name} supplies forestry attachments from {SITE.base}, delivering across {SITE.region}. That single point
        of supply is worth knowing when you compare quotes, because freight to your depot is a real line item and it
        varies enormously between the Hawkesbury and, say, the Pilbara.
      </>
    ),
  },
  {
    q: "How long do forestry attachment parts take to arrive in Australia?",
    a: (
      <>
        It depends on whether the part is held locally, air-freighted or on the water, and the only reliable way to
        know is to ask in those three parts rather than asking for a single number. Parts availability is the
        difference between a two-day repair and a six-week one, and on an attachment running 500 hours a year that gap
        outweighs any plausible difference on the purchase invoice.
      </>
    ),
  },
  {
    q: "Should I buy locally or import direct to save money?",
    a: (
      <>
        Importing direct on price transfers the entire support risk to you, and it arrives all at once at the moment
        something wears out. The saving is visible on day one; the cost is invisible until a rotor bearing fails in
        March. Buying through a distributor holding stock, wear parts and technical knowledge is the strongest argument
        against direct import, and it is an argument about downtime rather than about loyalty.
      </>
    ),
  },
  {
    q: "Do I need a local dealer in my state?",
    a: (
      <>
        Less than you might think for an attachment, more than you might think for parts. Attachments have no engine
        and few electronics, so most field repairs are mechanical and hydraulic work any competent local workshop can
        do. What you cannot improvise is the wear part itself. Judge a supplier on what they hold and how fast they
        ship it, not on whether there is a shopfront near you.
      </>
    ),
  },
  {
    q: "Is freight usually included in an attachment quote?",
    a: (
      <>
        Often not, and this is one of the most common reasons two quotes that look different are actually the same.
        Ask explicitly whether the figure is ex-works or delivered to your depot, and confirm who carries the risk in
        transit. Forestry attachments are dense, heavy freight and the difference is not trivial outside the eastern
        seaboard.
      </>
    ),
  },
  {
    q: "What spares should I keep on the shelf?",
    a: (
      <>
        At minimum, one full set of the primary wear item for whatever you run: teeth for a mulcher or grinder, chain
        and bar for a grapple saw, a blade set for a shear. The further you are from the supply base and the tighter
        your seasonal window, the stronger the case. In Western Australia, the Northern Territory and far north
        Queensland it is close to mandatory.
      </>
    ),
  },
  {
    q: "Does Australian climate affect attachment life?",
    a: (
      <>
        Indirectly, and mostly through ground rather than air. Abrasive soils, stone and drought-hardened material
        drive wear far more than temperature does. UV and coastal salt matter for hoses, seals and paint over long
        periods rather than for the steel. The thing that genuinely shortens attachment life in Australia is running
        the wrong rotor or the wrong tooth for the ground.
      </>
    ),
  },
  {
    q: "What warranty should I expect?",
    a: (
      <>
        Ask for the term in writing and, more importantly, ask what is excluded. Wear items are normally excluded by
        definition, and striking buried metal is a common exclusion that matters enormously in urban work. A warranty
        without a clear statement of exclusions is not a warranty you can plan around.
      </>
    ),
  },
];

export default function SupportPage() {
  return (
    <>
      <PageHero
        eyebrow="Supply and support"
        title="Parts, freight and support across Australia"
        crumb="Parts and support"
        trail={[{ label: "Forestry Machinery Guide", href: "/forestry-machinery-guide/" }]}
        lead="Parts availability is the difference between a two-day repair and a six-week one. On a machine earning daily, that gap outweighs any plausible difference on the purchase invoice — and it is the question buyers ask last."
      />

      <article className="mx-auto max-w-[88rem] px-4 py-14 sm:px-6 sm:py-20 lg:px-10">
        <ShortAnswer>
          Attachments break down in predictable ways and almost all of it is mechanical and hydraulic work a competent
          local workshop can handle. What you cannot improvise is the wear part itself. Judge a supplier on what is
          held in Australia and how fast it ships, not on whether there is a shopfront in your state.
        </ShortAnswer>

        <Section
          id="why-parts"
          title="Why parts supply outranks almost everything else"
          lead="It is the one variable that converts directly into lost revenue rather than into a higher invoice."
        >
          <Prose>
            <p>
              A forestry attachment is a simple object compared with the machine carrying it. There is no engine, very
              little electronics, and the failure modes are mechanical: wear surfaces reach their limit, seals fail,
              bearings go, pins and bushes wear out of tolerance. Almost all of that is work an ordinary engineering
              workshop can do, anywhere in the country.
            </p>
            <p>
              What no workshop can improvise is the consumable. Harvester chain in the correct pitch, a rotor tooth set,
              a matched blade — these either exist in the country or they do not, and if they do not you are waiting on
              freight from Europe while the machine sits. For a contractor running 500 hours a year, a six-week wait in
              the middle of a season is not a parts problem. It is a revenue problem, and it is the reason buying on
              invoice price alone is the most expensive decision available.
            </p>
          </Prose>

          <Callout label="Ask the question in three parts">
            Not &ldquo;how long do parts take?&rdquo; but: what is held in Australia right now, what is air-freighted,
            and what is on the water. A supplier who answers all three precisely is telling you something real about the
            support behind the sale. A single averaged number tells you nothing.
          </Callout>
        </Section>

        <Section
          id="freight"
          title="Freight is a line item, not a rounding error"
          lead="Forestry attachments are dense, heavy freight, and a quote that is competitive ex-Sydney may not be once it is on a truck west or north."
        >
          <NumberedGrid
            columns={3}
            items={[
              {
                title: "Ex-works or delivered?",
                body: "The single most common reason two quotes that look different turn out to be identical. Ask explicitly, and confirm who carries the risk in transit.",
              },
              {
                title: "Distance changes the answer",
                body: "Road freight within the eastern seaboard is a modest addition. Sea freight to Tasmania, rail or road to Perth, and anything into the Territory are a different order of cost and time.",
              },
              {
                title: "Parts freight, not just the attachment",
                body: "You pay the attachment freight once and the parts freight forever. If you are remote, that recurring cost belongs in your hourly rate rather than in a surprise invoice.",
              },
            ]}
          />
        </Section>

        <Section
          id="states"
          title="What differs by state"
          lead="Not marketing geography — the things that genuinely change how you should plan parts and freight where you work."
        >
          <div className="grid gap-px bg-steel-700 md:grid-cols-2 [&>*:last-child:nth-child(odd)]:md:col-span-2">
            {STATES.map((s) => (
              <div key={s.state} className="bg-steel-950 p-6 sm:p-7">
                <h3 className="display text-xl leading-tight text-bone">{s.state}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-concrete">{s.note}</p>
              </div>
            ))}
          </div>

          <Callout label="Why there are no city pages on this site" tone="note">
            There is one supply base, at {SITE.base}, freighting nationally. That means there is no honest difference
            between a &ldquo;Sydney&rdquo; page and a &ldquo;Brisbane&rdquo; page beyond the freight leg and the ground
            conditions, both of which are covered above. Publishing a page per city with the name swapped would add
            nothing a buyer could use.
          </Callout>
        </Section>

        <Section
          id="stock"
          title="What to keep on your own shelf"
          lead="Distance from the supply base and the tightness of your season decide how much you should hold yourself."
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
                  {["Your situation", "Hold on site", "Why"].map((h) => (
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
                    "Eastern seaboard, year-round work",
                    "One set of the primary wear item",
                    "Freight is short. A single spare set covers the gap between failure and delivery.",
                  ],
                  [
                    "Regional, seasonal working window",
                    "One to two sets, plus common seals",
                    "A wait that would be an inconvenience in February can cost the whole window in the wrong month.",
                  ],
                  [
                    "Western Australia, NT, far north Queensland",
                    "Two sets, seals, and the fast-moving hydraulic fittings",
                    "The longest freight legs in the country. Holding stock locally is worth more here than anywhere else.",
                  ],
                  [
                    "High utilisation, above 500 hours a year",
                    "Rolling stock of wear parts as standing inventory",
                    "At this level wear is continuous and predictable. Treat consumables as inventory, not as purchases.",
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
          <Prose className="mt-6">
            <p>
              What counts as the primary wear item depends on the category — teeth for a mulcher or grinder, chain and
              bar for a grapple saw, a blade set for a shear. The{" "}
              <Link href="/wear-parts/">wear parts guide</Link> sets out what wears on each and what drives the rate.
            </p>
          </Prose>
        </Section>

        <Section id="checklist" title="Questions that separate real support from a sales promise">
          <Checklist
            title="Supplier support checklist"
            items={[
              "What wear parts are held in Australia right now",
              "Realistic lead time on the parts that actually wear",
              "What is air-freighted versus on the water",
              "Whether the quote is ex-works or delivered",
              "Who carries the risk in transit",
              "Warranty term, in writing",
              "Warranty exclusions, especially buried metal",
              "Whether technical support is available by phone",
              "Whether a machine-specific bracket exists for your carrier",
              "What happens if the attachment arrives and does not fit",
            ]}
          />
        </Section>

        <Section id="faq" title="Frequently asked questions">
          <FaqBlock items={FAQS} />
        </Section>

        <Section id="next" title="Where to go next">
          <NextSteps
            items={[
              { href: "/wear-parts/", label: "Wear parts guide", why: "What wears on each category and what drives the rate." },
              { href: "/costs/", label: "What attachments cost", why: "Where freight and downtime sit among the five cost lines." },
              { href: "/brands/", label: "Manufacturer profiles", why: "Parts and support notes for each of the four ranges." },
              { href: "/compatibility/", label: "Carrier size guide", why: "Confirm the tool fits before you worry about supporting it." },
              { href: SITE.quotePath, label: "Request a quote", why: "Ask for delivered pricing to your depot, not ex-works." },
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
          headline: "Forestry attachment parts and support across Australia",
          description: "Freight, lead time, parts stock and what to ask a supplier before you commit.",
          inLanguage: "en-AU",
          mainEntityOfPage: absoluteUrl("/support-and-parts-australia/"),
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
            {
              "@type": "ListItem",
              position: 3,
              name: "Parts and support",
              item: absoluteUrl("/support-and-parts-australia/"),
            },
          ],
        }}
      />
    </>
  );
}
