import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { EditorialImage } from "@/components/EditorialImage";
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
  title: { absolute: "Forestry Attachment Wear Parts | Teeth, Blades, Chains and Tips" },
  description:
    "What wears on a forestry attachment, what accelerates it, and how to budget for it. Mulcher teeth, grinder teeth, harvester chain, shear blades and grapple tines.",
  alternates: { canonical: absoluteUrl("/wear-parts/") },
  openGraph: { url: absoluteUrl("/wear-parts/") },
  keywords: [
    "mulcher teeth cost",
    "stump grinder teeth",
    "harvester chain australia",
    "forestry attachment wear parts",
    "excavator attachment running costs",
  ],
};

const FAQS: Qa[] = [
  {
    q: "What wears fastest on a forestry attachment?",
    a: (
      <>
        It depends entirely on the category. On a grapple saw, chain and bar are a weekly conversation. On a mulcher or
        a stump grinder, teeth are a monthly budget line in the wrong ground. On a shear or a stump cutter, blades are a
        periodic rebuild rather than a constant spend. On a grab, tine tips wear slowly unless the operator uses the
        grab to rake, which is faster than they think and more expensive than they think.
      </>
    ),
  },
  {
    q: "Does hardwood wear teeth faster than softwood?",
    a: (
      <>
        On a stump grinder, far less than most buyers expect. Rate of wear is driven almost entirely by soil, not by
        wood. Sandy and rocky ground eat teeth; clean clay is gentle. If you work in decomposed granite or fill full of
        builder&rsquo;s rubble, price teeth accordingly and do not be surprised. On a mulcher the same logic applies
        once the rotor touches ground.
      </>
    ),
  },
  {
    q: "How do I budget for mulcher teeth?",
    a: (
      <>
        Track tooth cost per hour as its own line item from day one, and track it per site type rather than as a single
        average. In clean ground it is a rounding error. In stony or debris-filled ground it can exceed your fuel cost.
        Contractors who separate it by site type find their second year of quoting is dramatically more accurate than
        their first, because they stop averaging two conditions that behave nothing alike.
      </>
    ),
  },
  {
    q: "Can I use ordinary chainsaw chain on a grapple saw?",
    a: (
      <>
        No. Forestry grapple saws run harvester chain, typically in 0.404&Prime; or 3/4&Prime; pitch, and pricing
        reflects that. It is a different product to hardware-store chainsaw chain and is engineered for the loads a
        mechanised head puts through it. Substituting is a false economy and a safety question rather than a
        procurement one.
      </>
    ),
  },
  {
    q: "Does automatic chain lubrication remove the wear problem?",
    a: (
      <>
        It reduces it, it does not remove it. Automatic chain tensioning and lubrication — fitted on the Powerhand units
        — meaningfully extend chain and bar life, but chain remains the dominant consumable on a grapple saw and should
        still be budgeted weekly rather than annually.
      </>
    ),
  },
  {
    q: "Which rotor should I choose to reduce tooth cost?",
    a: (
      <>
        Pick the rotor for the worst ground you will work in regularly, not the best. Fixed teeth cut faster and finer
        in clean conditions and produce better mulch quality, but they are less tolerant of impact. A fixed-tooth rotor
        on a site full of ironstone is a very expensive lesson, and it is one that gets learnt in the first season. The{" "}
        <Link href="/forestry-mulcher-guide/">forestry mulcher guide</Link> covers the rotor decision in full.
      </>
    ),
  },
  {
    q: "Are aftermarket wear parts worth it?",
    a: (
      <>
        Sometimes, and the honest test is hours rather than price. A cheaper set that lasts half as long is more
        expensive, and a cheaper set that damages the rotor or the bar carrier is very much more expensive. Where an
        aftermarket part has a track record in your conditions it can be sound; where it does not, the saving is small
        relative to the downtime risk. Check what it does to your warranty before you fit it.
      </>
    ),
  },
  {
    q: "How long should wear parts take to arrive in Australia?",
    a: (
      <>
        Ask, rather than assume, and ask the question in three parts: what is held in Australia right now, what is
        air-freighted, and what is on the water. <Link href="/support-and-parts-australia/">Parts and support across
        Australia</Link> covers what differs by state, and how much you should hold on your own shelf. Parts availability is the difference between a two-day repair and a
        six-week one, and on an attachment running 500 hours a year that gap outweighs any plausible difference on the
        purchase invoice.
      </>
    ),
  },
  {
    q: "Can worn parts damage the attachment itself?",
    a: (
      <>
        Yes, and this is the cost buyers miss. On a tree shear, pin and bush wear is normal, and ignoring it lets the
        jaw track out of line — which is how blades get destroyed. Running teeth well past their replacement point
        transfers load into the rotor and its bearings. Wear parts are designed to be sacrificial, and letting them
        stop being sacrificial is how a consumable bill becomes a repair bill.
      </>
    ),
  },
  {
    q: "Does Hardox construction mean the tool will not wear?",
    a: (
      <>
        No. Abrasion-resistant steel slows wear down; it does not stop it. Stumps carry soil, grit and often rock
        lodged in the root plate, and that is abrasive work whatever the wear surfaces are made of. Treat Hardox as a
        reason the rebuild interval is longer, not a reason there is no rebuild.
      </>
    ),
  },
];

const BY_CATEGORY = [
  {
    cat: "Forestry mulchers",
    href: "/forestry-mulcher-guide/",
    part: "Rotor teeth, hammers or knives",
    rhythm: "Monthly budget line in abrasive ground; a rounding error in clean ground",
    driver: "Ground contact, stone, ironstone, buried debris. Rotor choice matters more than model choice.",
  },
  {
    cat: "Stump grinders",
    href: "/stump-grinder-guide/",
    part: "Cutting teeth",
    rhythm: "Monthly in abrasive ground",
    driver: "Soil, almost entirely — not wood. Sandy and rocky ground eat teeth; clean clay is gentle.",
  },
  {
    cat: "Grapple saws",
    href: "/grapple-saw-guide/",
    part: "Harvester chain and bar",
    rhythm: "Weekly conversation",
    driver: "Dirty timber, ground contact, incorrect tensioning. Auto lubrication reduces wear, it does not remove it.",
  },
  {
    cat: "Tree shears",
    href: "/tree-shears-guide/",
    part: "Blade, plus pins and bushes",
    rhythm: "Periodic rebuild",
    driver: "Hardwood, buttressed stems, oversize diameter. Ignored pin wear lets the jaw track out and destroys blades.",
  },
  {
    cat: "Stump cutters",
    href: "/stump-cutter-guide/",
    part: "Jaw and blade wear surfaces",
    rhythm: "Periodic rebuild",
    driver: "Soil, grit and rock lodged in the root plate. Hardox slows it down; it does not stop it.",
  },
  {
    cat: "Log and forestry grabs",
    href: "/log-grab-guide/",
    part: "Tine tips, rotator service",
    rhythm: "Low, unless the grab is used to rake",
    driver: "Ground contact and side loading. Raking with a grab is faster than operators think and dearer than they think.",
  },
  {
    cat: "Mechanical pruning",
    href: "/mechanical-pruning-guide/",
    part: "Blades and knives",
    rhythm: "Varies sharply by system",
    driver: "Dirty bark, wire, dead hardwood. Star knives, comb blades and discs wear differently and cost differently.",
  },
  {
    cat: "Tillage and ground prep",
    href: "/tillage-guide/",
    part: "Auger teeth and pilot bits",
    rhythm: "Ground-dependent",
    driver: "Rock and gravel are brutal. Replaceable wear parts are the design answer, so confirm stock before relying on it.",
  },
];

export default function WearPartsPage() {
  return (
    <>
      <PageHero
        eyebrow="Ownership"
        title="Wear parts: the cost that decides your hourly rate"
        crumb="Wear parts"
        trail={[{ label: "Forestry Machinery Guide", href: "/forestry-machinery-guide/" }]}
        lead="Purchase price is a one-off. Mulcher teeth, grinder teeth, saw chain and shear blades are what the attachment costs you every week it works, and their cost is the number buyers ask for last — usually after the first invoice arrives."
        aside={<EditorialImage src="/images/field/wear-parts-workbench.webp" alt="Worn and replacement mulcher teeth, chain, pins, bushings and hydraulic hose on a workshop bench" caption="The hourly rate lives in the gap between worn parts and stocked replacements." />}
      />

      <article className="mx-auto max-w-[88rem] px-4 py-14 sm:px-6 sm:py-20 lg:px-10">
        <ShortAnswer>
          Wear parts are the dominant running cost on a forestry attachment, and the rate varies enormously by category
          and by ground. On a grapple saw, chain is a weekly conversation. On a mulcher or grinder in stony ground,
          teeth can exceed your fuel bill. Ask every supplier for wear-part pricing <em>and</em> lead time before you
          sign, not after.
        </ShortAnswer>

        <Section
          id="why"
          title="Why this outranks purchase price"
          lead="Above roughly 500 hours a year, what you paid for the attachment stops being the number that matters."
        >
          <Prose>
            <p>
              An attachment is bought once and consumed continuously. At low utilisation the purchase price dominates,
              which is why an occasional-use tool can be bought on invoice price without much harm. Past a few hundred
              hours a year that reverses: the sum of every tooth, chain and blade you fit over the life of the tool
              comfortably exceeds what you paid for it, and it is the number that decides whether your quoted rate holds.
            </p>
            <p>
              The mulcher case states it most plainly. A mulcher is not bought on cutting capacity. It is bought on
              hectares per day at an acceptable tooth cost, and two machines with identical brochures can produce
              completely different economics depending on rotor choice and the ground you put them in.
            </p>
          </Prose>

          <Callout label="Track it per site type, not as an average">
            Tooth cost per hour is the term most contractors get wrong. In clean ground it is a rounding error; in stony
            or debris-filled ground it can exceed fuel. Averaging the two produces a figure that is wrong for both.
            Track it as its own line item from day one, separated by site type, and your second year of quoting will be
            dramatically more accurate than your first.
          </Callout>
        </Section>

        <Section
          id="by-category"
          title="What wears, by category"
          lead="The pattern is stable even though the figures are specific to your ground and your supplier — which is exactly why you should ask for them in writing."
        >
          <div
            className="relative overflow-x-auto border border-steel-700 bg-steel-900"
            tabIndex={0}
            role="region"
            aria-label="Scrollable table"
          >
            <table className="w-full min-w-[52rem] border-collapse text-sm">
              <thead>
                <tr>
                  {["Category", "Main consumable", "Replacement rhythm", "What drives the rate"].map((h) => (
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
                {BY_CATEGORY.map((r) => (
                  <tr key={r.cat} className="border-t border-steel-800 transition-colors hover:bg-hazard/5">
                    <th scope="row" className="px-4 py-4 text-left align-top">
                      <Link href={r.href} className="font-semibold text-moss-400 hover:text-hazard">
                        {r.cat}
                      </Link>
                    </th>
                    <td className="border-l border-steel-800 px-4 py-4 align-top font-semibold text-bone">{r.part}</td>
                    <td className="border-l border-steel-800 px-4 py-4 align-top text-concrete">{r.rhythm}</td>
                    <td className="border-l border-steel-800 px-4 py-4 align-top text-concrete">{r.driver}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section
          id="teeth"
          title="Teeth: the ground decides, not the timber"
          lead="The most common misconception in the category, and the one that produces the worst budget surprises."
        >
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_24rem] lg:items-start">
            <Prose>
              <p>
                Buyers reliably assume that hard timber wears teeth and soft timber does not. On a stump grinder that is
                close to backwards. Rate of wear is driven almost entirely by soil. Sandy and rocky ground eat teeth.
                Clean clay is gentle. Decomposed granite, or fill full of builder&rsquo;s rubble, is in a category of
                its own and should be priced that way before you quote the job rather than after.
              </p>
              <p>
                Mulchers follow the same logic the moment the rotor touches ground, which on most clearing work is
                constantly. This is why rotor choice is the real decision rather than the model number. Fixed teeth cut
                faster and finer in clean conditions and produce better mulch quality, but they are less tolerant of
                impact. Hammers and knives behave differently again.
              </p>
              <p>
                The rule that follows is simple and routinely ignored: pick the rotor for the worst ground you will work
                in regularly, not the best. A fixed-tooth rotor on a site full of ironstone is a very expensive lesson.
              </p>
            </Prose>
            <Photograph photo="stumpGrinderDipperfox" />
          </div>
        </Section>

        <Section
          id="chain"
          title="Chain and bar: not chainsaw chain"
          lead="The consumable with the shortest cycle in the whole range, and the one most often bought wrong."
        >
          <Prose>
            <p>
              Forestry grapple saws run harvester chain, typically in 0.404&Prime; or 3/4&Prime; pitch. It is not
              hardware-store chainsaw chain, pricing reflects that, and substituting is a safety question rather than a
              procurement one. Pitch also determines which chain and bar will fit, so confirm it before ordering — and
              be wary of any specification quoting a pitch that is not a standard size.
            </p>
            <p>
              Automatic chain tensioning and lubrication, fitted on the Powerhand units, meaningfully extend chain and
              bar life. They reduce wear; they do not remove it. Budget chain weekly on a saw that is working, and treat
              a supplier who cannot quote chain and bar pricing from stock as a supply risk rather than a price
              difference.
            </p>
          </Prose>
        </Section>

        <Section
          id="hidden"
          title="When a consumable bill becomes a repair bill"
          lead="Wear parts are designed to be sacrificial. The expensive failures happen when they stop being sacrificial."
        >
          <NumberedGrid
            columns={3}
            items={[
              {
                title: "Pins and bushes on a shear",
                body: "A shear does its work through one high-force cylinder, and pin and bush wear is normal. Ignoring it lets the jaw track out of line, which is how blades get destroyed. The cheap part fails first for a reason.",
              },
              {
                title: "Teeth run past replacement",
                body: "Worn teeth transfer load into the rotor and its bearings rather than into the material. The tooth bill you avoided arrives later as a rotor bill, with downtime attached.",
              },
              {
                title: "Chain tension neglected",
                body: "A slack or over-tight chain wears the bar, the sprocket and the chain together. Three consumables degrade at once, and the bar carrier can go with them.",
              },
              {
                title: "Using a grab to rake",
                body: "Ground contact wears tine tips, and some operators use grabs to rake and scrape. It is faster than they think and more expensive than they think.",
              },
              {
                title: "Rock in the root plate",
                body: "Stumps carry soil, grit and often rock lodged in the root plate. Hardox slows that down; it does not stop it, and a lodged rock can take a blade out in one cut.",
              },
              {
                title: "Buried metal in urban fill",
                body: "Old fencing, reinforcement and services destroy teeth and can void warranty. Ask what the warranty says about striking metal before you buy, not after.",
              },
            ]}
          />
        </Section>

        <Section
          id="budgeting"
          title="How to build a wear-parts budget"
          lead="Four steps that turn a surprise invoice into a line in your rate."
        >
          <NumberedGrid
            columns={2}
            items={[
              {
                title: "Get pricing in writing before purchase",
                body: "A supplier who will not quote wear parts before the sale is unlikely to be sharper about them afterwards. Ask for a full set price, not a per-item price, because a full set is what you actually buy.",
              },
              {
                title: "Ask for hours, not just price",
                body: "The useful question is how many hours a set lasts in ground like yours. A cheaper set that lasts half as long is more expensive, and the only way to see that is to divide by hours.",
              },
              {
                title: "Separate your site types",
                body: "Clean ground and stony ground are not the same job and should not share a figure. Two lines in your costing beats one average that is wrong for both.",
              },
              {
                title: "Fold it into cost per unit",
                body: (
                  <>
                    Wear cost per hour belongs inside cost per stump and cost per hectare, not in overhead. The{" "}
                    <Link href="/cost-per-stump-calculator/">stump</Link> and{" "}
                    <Link href="/cost-per-hectare-calculator/">hectare</Link> calculators both take it as an input for
                    exactly this reason.
                  </>
                ),
              },
            ]}
          />
        </Section>

        <Section
          id="red-flags"
          title="Red flags when buying wear parts"
          lead="None of these are automatically disqualifying. All of them are worth a direct question."
        >
          <RedFlags
            items={[
              {
                flag: "No wear-part pricing offered before the sale",
                why: "This is the number that decides your hourly rate. A supplier unwilling to quote it before you commit is telling you something about the support behind the sale.",
              },
              {
                flag: "Price quoted without lead time",
                why: "A cheap set that takes six weeks to land is not a set. Ask what is held in Australia, what is air-freighted and what is on the water.",
              },
              {
                flag: "Chain quoted without a pitch",
                why: "Pitch determines what fits. Harvester chain is typically 0.404 inch or 3/4 inch, and a quote that omits it, or quotes a non-standard size, has not been checked.",
              },
              {
                flag: "“Hardox, so it does not wear”",
                why: "Abrasion-resistant steel slows wear; it does not stop it. A supplier making this claim is overselling a real advantage into a false one.",
              },
              {
                flag: "Aftermarket parts with no track record in your conditions",
                why: "The saving is usually small relative to the downtime and rotor-damage risk, and fitting them may affect your warranty. Check both before you switch.",
              },
              {
                flag: "Rotor recommended for your best ground",
                why: "Fixed teeth are excellent in clean conditions and intolerant of impact. Specify for the worst ground you work in regularly, not the site you are quoting today.",
              },
            ]}
          />
        </Section>

        <Section id="checklist" title="Questions to ask before you sign">
          <Checklist
            title="Wear-parts checklist"
            items={[
              "Full set price for every wear item, in writing",
              "Expected life in hours, in ground like yours",
              "What is held in Australian stock right now",
              "Lead time on the items that actually wear",
              "What is air-freighted versus sea-freighted",
              "Chain pitch and bar specification, if buying a saw",
              "Rotor type specified for your worst regular ground",
              "What the warranty says about striking buried metal",
              "Whether aftermarket parts affect the warranty",
              "Whether a wear-part kit can be supplied with the attachment",
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
                label: "What attachments cost",
                why: "Wear parts are one of five cost lines. This is the whole picture.",
              },
              {
                href: "/cost-per-stump-calculator/",
                label: "Cost per stump calculator",
                why: "Put your teeth cost and teeth life in and see what it does to the number.",
              },
              {
                href: "/cost-per-hectare-calculator/",
                label: "Cost per hectare calculator",
                why: "The same for mulching, where tooth cost can exceed fuel.",
              },
              {
                href: "/forestry-mulcher-guide/",
                label: "Forestry mulcher guide",
                why: "Rotor choice in full: hammers, knives and fixed teeth compared.",
              },
              {
                href: "/hire-vs-buy/",
                label: "Hire, buy or subcontract",
                why: "At low utilisation, wear parts may not be your problem at all.",
              },
              {
                href: SITE.quotePath,
                label: "Ask for wear-part pricing",
                why: "Bring your carrier specs and the ground you work in.",
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
          headline: "Forestry attachment wear parts: what they cost you",
          description: "What wears on a forestry attachment, what accelerates it, and how to budget for it.",
          inLanguage: "en-AU",
          mainEntityOfPage: absoluteUrl("/wear-parts/"),
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
            { "@type": "ListItem", position: 3, name: "Wear parts", item: absoluteUrl("/wear-parts/") },
          ],
        }}
      />
    </>
  );
}
