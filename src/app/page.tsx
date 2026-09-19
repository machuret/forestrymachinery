import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CategoryGrid } from "@/components/CategoryGrid";
import { Photograph } from "@/components/Photograph";
import { BrandLogo } from "@/components/BrandLogo";
import { CarrierBandChart } from "@/components/diagrams/CarrierBandChart";
import { COMPARISONS } from "@/lib/comparisons";
import { BRAND_PROFILES } from "@/lib/brands";
import { JsonLd } from "@/components/JsonLd";
import { ApplicationGrid } from "@/components/ApplicationGrid";
import { IndustryGrid } from "@/components/IndustryGrid";
import { SITE, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Forestry Attachments Australia | Buyer's Guide & Category Index" },
  description:
    "Match a forestry attachment to the excavator you already own. Eight category guides, costs, carrier sizing and comparisons for Australian contractors.",
  alternates: { canonical: absoluteUrl("/") },
  openGraph: {
    title: "Forestry Attachments Australia | Excavator Buying Guides",
    description: "Match forestry attachments to carrier weight, hydraulic flow and the work your crew actually performs.",
    url: absoluteUrl("/"),
    images: ["/images/editorial/forestry-attachments-australia-hero.webp"],
  },
};

const STATS = [
  { value: "08", label: "Attachment categories" },
  { value: "1.5–50 t", label: "Carrier range covered" },
  { value: "15–160", label: "L/min flow window" },
  { value: "AU", label: "Supplied nationwide" },
];

const DEMAND = [
  {
    code: "A",
    title: "Utility vegetation management",
    body: "Distribution network operators run continuous, regulated, multi-year clearance programs. Trimming is generally carried out to meet AS 4373. Recurring revenue with a compliance floor, and it rewards mechanisation.",
  },
  {
    code: "B",
    title: "Bushfire fuel reduction",
    body: "State hazard-reduction programs commit to treated-hectare targets rather than project budgets. The NSW Enhanced Bushfire Management Program was built around roughly 135,000 hectares a year. Area targets favour mulchers and shears over hand crews.",
  },
  {
    code: "C",
    title: "Development and civil clearing",
    body: "Site preparation, road corridors, solar and wind projects, subdivision. Lumpy and competitive, and the reason most contractors buy their first forestry attachment.",
  },
];

const QUESTIONS = [
  {
    n: "01",
    q: "What carrier are you putting it on?",
    a: "Operating weight, auxiliary flow in L/min, and available working pressure in bar. Most disappointing purchases trace back to a buyer who knew the first number and guessed the other two.",
  },
  {
    n: "02",
    q: "Does your hydraulic circuit support it?",
    a: "Single-acting hammer line, hammer line plus case drain, double-acting, or a dual circuit. A 5 t excavator with a basic breaker circuit will not run a large grapple saw no matter how the invoice is worded.",
  },
  {
    n: "03",
    q: "What does the work actually look like?",
    a: "Stem diameter, stem density per hectare, terrain, proximity to assets, and how much material you are allowed to leave behind. These decide the category more reliably than any sales conversation.",
  },
  {
    n: "04",
    q: "How many hours a year will it run?",
    a: "Below about 200 hours, hire. Between 200 and 500, buy if the tool unlocks work you currently turn away. Above 500, ownership almost always wins and wear-part supply beats purchase price.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ---------------------------------------------------------- Hero */}
      <section className="relative overflow-hidden border-b border-steel-700 bg-steel-950">
        <Image
          src="/images/editorial/forestry-attachments-australia-hero.webp"
          alt="Tracked forestry excavator handling a cut eucalyptus section in Australian bushland"
          fill
          priority
          sizes="100vw"
          className="field-image object-cover object-[64%_center]"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-steel-950 via-steel-950/90 to-steel-950/15" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-steel-950 via-transparent to-steel-950/35" />
        <div aria-hidden="true" className="absolute inset-0 bg-grid opacity-20" />

        <div className="relative mx-auto flex min-h-[42rem] max-w-[88rem] flex-col px-4 pt-12 pb-0 sm:px-6 lg:px-10">
          <p className="eyebrow flex items-center gap-3">
            <span className="inline-block h-2 w-2 rotate-45 bg-hazard" />
            Australian buyer&rsquo;s guide · {new Date().getFullYear()} edition
          </p>

          <div className="my-auto grid gap-10 py-8 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-center">
            <div>
              <h1 className="display mt-6 max-w-4xl text-[2.8rem] leading-[0.9] text-bone sm:text-6xl lg:text-[4.25rem]">
                Forestry attachments,
                <br />
                matched to the machine
                <br />
                <span className="text-hazard">already on your float.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-bone/85">
                Most businesses buying forestry machinery in Australia are not forestry companies. They are civil
                contractors, arborists, councils, utility crews and farmers. The question is never &ldquo;which
                attachment is best&rdquo;. It is which one turns an existing carrier into a second revenue line without
                blowing up the maintenance bill.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/forestry-machinery-guide/"
                  className="inline-flex items-center gap-2 bg-hazard px-7 py-4 font-mono text-[0.72rem] font-semibold tracking-[0.16em] text-steel-950 uppercase transition-colors hover:bg-moss-400"
                >
                  Read the full guide →
                </Link>
                <Link
                  href="/compatibility/"
                  className="inline-flex items-center gap-2 border border-steel-600 px-7 py-4 font-mono text-[0.72rem] tracking-[0.16em] text-bone uppercase transition-colors hover:border-hazard hover:text-hazard"
                >
                  Carrier compatibility
                </Link>
              </div>
            </div>

            <div className="hidden self-end border-l border-bone/20 pl-6 lg:block">
              <p className="font-mono text-[0.62rem] tracking-[0.18em] text-hazard uppercase">Field rule 01</p>
              <p className="display mt-3 text-2xl leading-tight text-bone">Start with the carrier. Finish with the job.</p>
              <p className="mt-3 text-sm leading-relaxed text-bone/65">Weight, flow, pressure and circuit decide what is possible. Terrain and the required finish decide what is profitable.</p>
            </div>
          </div>

          <dl className="mt-8 grid grid-cols-2 gap-px border-t border-l border-steel-700 bg-steel-700 sm:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="bg-steel-950 px-5 py-7">
                <dt className="font-mono text-[0.6rem] tracking-[0.18em] text-concrete uppercase">{s.label}</dt>
                <dd className="display mt-2 text-3xl text-hazard sm:text-4xl">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-0 h-3 hazard-stripes opacity-90" />
      </section>

      {/* --------------------------------------------------- Categories */}
      <section className="mx-auto max-w-[88rem] px-4 py-20 sm:px-6 sm:py-28 lg:px-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow">The eight categories</p>
            <h2 className="display mt-4 max-w-2xl text-4xl leading-none text-bone sm:text-5xl">
              What each one actually earns its keep doing
            </h2>
          </div>
          <p className="max-w-sm text-[0.95rem] leading-relaxed text-concrete">
            Read the category page before you read any brochure. Each one covers the carrier match, the hydraulic
            demand, the running cost and the honest limitations.
          </p>
        </div>

        <div className="mt-12">
          <CategoryGrid />
        </div>
      </section>

      {/* ------------------------------------------------ Field work */}
      <section className="border-y border-steel-700 bg-steel-900 plate">
        <div className="mx-auto max-w-[88rem] px-4 py-20 sm:px-6 sm:py-28 lg:px-10">
          <div className="mb-12 grid gap-6 lg:grid-cols-[minmax(0,1fr)_27rem] lg:items-end">
            <div>
              <p className="eyebrow">Start with the site</p>
              <h2 className="display mt-4 max-w-3xl text-4xl leading-none text-bone sm:text-5xl">Machinery makes sense in the field, not in a catalogue</h2>
            </div>
            <p className="text-[0.97rem] leading-relaxed text-concrete">The operating environment, required finish and material stream decide the attachment sequence.</p>
          </div>
          <ApplicationGrid />
          <div className="mt-8 text-right">
            <Link href="/applications/" className="font-mono text-[0.68rem] tracking-[0.16em] text-hazard uppercase hover:text-moss-400">
              Explore machinery by application →
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------- Industry profiles */}
      <section className="border-b border-steel-700 bg-steel-950">
        <div className="mx-auto max-w-[88rem] px-4 py-20 sm:px-6 sm:py-28 lg:px-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="eyebrow">Built around the business</p>
              <h2 className="display mt-4 max-w-3xl text-4xl leading-none text-bone sm:text-5xl">
                Different industries make the same attachment pay in different ways
              </h2>
            </div>
            <div className="max-w-md">
              <p className="text-[0.97rem] leading-relaxed text-concrete">
                Choose your operating model to connect machinery, carrier fleet, contract risk, production units and
                support requirements before you compare quotations.
              </p>
              <Link
                href="/industries/"
                className="mt-5 inline-flex font-mono text-[0.68rem] tracking-[0.16em] text-hazard uppercase hover:text-moss-400"
              >
                View all industry profiles →
              </Link>
            </div>
          </div>
          <div className="mt-12">
            <IndustryGrid compact />
          </div>
        </div>
      </section>

      {/* ------------------------------------------ Four questions band */}
      <section className="border-y border-steel-700 bg-steel-900 plate">
        <div className="mx-auto max-w-[88rem] px-4 py-20 sm:px-6 sm:py-28 lg:px-10">
          <p className="eyebrow">Selection logic</p>
          <h2 className="display mt-4 max-w-3xl text-4xl leading-none text-bone sm:text-5xl">
            Four questions decide the purchase. Everything else is detail.
          </h2>

          <div className="mt-14 grid gap-px bg-steel-700 md:grid-cols-2">
            {QUESTIONS.map((q) => (
              <div key={q.n} className="bg-steel-900 p-7 sm:p-9">
                <span className="font-mono text-[0.72rem] tracking-[0.2em] text-hazard">{q.n}</span>
                <h3 className="display mt-4 text-2xl leading-tight text-bone">{q.q}</h3>
                <p className="mt-4 text-[0.97rem] leading-relaxed text-concrete">{q.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------- Demand drivers */}
      <section className="mx-auto max-w-[88rem] px-4 py-20 sm:px-6 sm:py-28 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[22rem_minmax(0,1fr)]">
          <div>
            <p className="eyebrow">Market</p>
            <h2 className="display mt-4 text-4xl leading-none text-bone sm:text-5xl">
              Where the demand actually comes from
            </h2>
            <p className="mt-6 text-[0.97rem] leading-relaxed text-concrete">
              Australia has roughly 1.71 million hectares of commercial plantation. That estate is the visible forestry
              market. It is not where most attachment demand comes from.
            </p>
            <Link
              href="/forestry-machinery-guide/"
              className="mt-7 inline-flex items-center gap-2 font-mono text-[0.68rem] tracking-[0.16em] text-hazard uppercase transition-colors hover:text-moss-400"
            >
              Read the market section →
            </Link>
          </div>

          <div className="grid gap-px bg-steel-700">
            {DEMAND.map((d) => (
              <div key={d.code} className="flex gap-6 bg-steel-950 py-7 sm:gap-8">
                <span className="display shrink-0 text-4xl text-steel-600 sm:text-5xl">{d.code}</span>
                <div>
                  <h3 className="display text-xl text-bone sm:text-2xl">{d.title}</h3>
                  <p className="mt-3 max-w-2xl text-[0.97rem] leading-relaxed text-concrete">{d.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------- Tools */}
      <section className="border-t border-steel-700 bg-steel-900 plate">
        <div className="mx-auto max-w-[88rem] px-4 py-20 sm:px-6 sm:py-28 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-[24rem_minmax(0,1fr)]">
            <div>
              <p className="eyebrow">Tools</p>
              <h2 className="display mt-4 text-4xl leading-none text-bone sm:text-5xl">
                Work the numbers before you call anyone
              </h2>
              <p className="mt-6 text-[0.97rem] leading-relaxed text-concrete">
                Nothing here needs an email address. Enter your own figures, and the result is a URL you can paste into
                a tender note or send to your accountant.
              </p>
            </div>

            <div className="grid gap-px bg-steel-700 sm:grid-cols-2">
              {[
                {
                  href: "/costs/",
                  code: "T1",
                  title: "What they actually cost",
                  body: "The five cost lines behind an attachment, what moves each one, and how to make two quotes that look nothing alike comparable.",
                },
                {
                  href: "/hire-vs-buy/",
                  code: "T2",
                  title: "Hire, buy or subcontract",
                  body: "Utilisation thresholds, the hidden costs on both sides, and four steps that turn the decision into arithmetic.",
                },
                {
                  href: "/hydraulic-flow-calculator/",
                  code: "T3",
                  title: "Will your machine run it?",
                  body: "Operating weight, auxiliary flow and the circuits you have fitted, against every published carrier range in the guide.",
                },
                {
                  href: "/cost-per-stump-calculator/",
                  code: "T4",
                  title: "Cost per stump",
                  body: "Attachment capital, teeth, carrier, operator and fuel, divided by stumps per hour. The only honest comparison against a crew.",
                },
                {
                  href: "/cost-per-hectare-calculator/",
                  code: "T5",
                  title: "Cost per hectare",
                  body: "Mulching and clearing priced properly: productivity, wear, mobilisation, overhead and margin resolved into a tender rate.",
                },
                {
                  href: "/compatibility/",
                  code: "T6",
                  title: "Carrier size guide",
                  body: "What a 3, 5, 8, 13, 20 or 30 tonne excavator can actually run, carrier class by carrier class.",
                },
              ].map((t) => (
                <div key={t.href} className="group relative bg-steel-900 p-7 transition-colors hover:bg-steel-850">
                  <span className="font-mono text-[0.7rem] tracking-[0.2em] text-hazard">{t.code}</span>
                  <h3 className="display mt-4 text-2xl leading-tight text-bone group-hover:text-hazard">
                    <Link href={t.href} className="after:absolute after:inset-0">
                      {t.title}
                    </Link>
                  </h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-concrete">{t.body}</p>
                  <span
                    aria-hidden="true"
                    className="mt-5 inline-flex items-center gap-2 font-mono text-[0.62rem] tracking-[0.16em] text-bone/70 uppercase group-hover:text-hazard"
                  >
                    Open
                    <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------- Comparisons */}
      <section className="mx-auto max-w-[88rem] px-4 py-20 sm:px-6 sm:py-28 lg:px-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow">Head to head</p>
            <h2 className="display mt-4 max-w-2xl text-4xl leading-none text-bone sm:text-5xl">
              Two names, one job, entirely different machines
            </h2>
          </div>
          <Link
            href="/compare/"
            className="shrink-0 font-mono text-[0.68rem] tracking-[0.16em] text-hazard uppercase hover:text-moss-400"
          >
            All comparisons →
          </Link>
        </div>

        <ul className="mt-12 grid gap-px bg-steel-700 sm:grid-cols-2">
          {COMPARISONS.map((c) => (
            <li key={c.slug}>
              <div className="group relative flex h-full flex-col bg-steel-950 p-6 transition-colors hover:bg-steel-900 sm:p-8">
                <span className="grid grid-cols-2 gap-3">
                  <Photograph photo={c.a.photo} ratio="4/3" bare sizes="(max-width: 640px) 45vw, 18rem" />
                  <Photograph photo={c.b.photo} ratio="4/3" bare sizes="(max-width: 640px) 45vw, 18rem" />
                </span>
                <h3 className="display mt-6 text-2xl leading-tight text-bone group-hover:text-hazard">
                  <Link href={`/compare/${c.slug}/`} className="after:absolute after:inset-0">
                    {c.title}
                  </Link>
                </h3>
                <p className="mt-3 text-[0.93rem] leading-relaxed text-concrete">{c.verdict.split(". ")[0]}.</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* ---------------------------------------------------- Band chart */}
      <section className="border-t border-steel-700">
        <div className="mx-auto max-w-[88rem] px-4 py-20 sm:px-6 lg:px-10">
          <p className="eyebrow">Carrier match</p>
          <h2 className="display mt-4 max-w-3xl text-4xl leading-none text-bone sm:text-5xl">
            Find your machine on the axis and read down
          </h2>
          <div className="mt-10">
            <CarrierBandChart />
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------- Brands */}
      <section className="border-y border-steel-700 bg-steel-900">
        <div className="mx-auto flex max-w-[88rem] flex-col gap-8 px-4 py-12 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div>
            <p className="font-mono text-[0.65rem] tracking-[0.2em] text-concrete uppercase">
              Ranges referenced in these guides
            </p>
            <Link
              href="/brands/"
              className="mt-3 inline-flex items-center gap-2 font-mono text-[0.65rem] tracking-[0.14em] text-hazard uppercase hover:text-moss-400"
            >
              Compare the manufacturers →
            </Link>
          </div>
          <ul className="flex flex-wrap items-center gap-4">
            {BRAND_PROFILES.map((b) => (
              <li key={b.slug}>
                <BrandLogo slug={b.slug} href={`/brands/${b.slug}/`} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ----------------------------------------------------------- CTA */}
      <section className="relative overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 bg-grid opacity-50" />
        <div className="relative mx-auto max-w-[88rem] px-4 py-24 sm:px-6 lg:px-10">
          <div className="border border-steel-700 bg-steel-900 plate">
            <div className="h-[3px] hazard-stripes-dim" />
            <div className="flex flex-col gap-8 p-8 sm:p-12 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="eyebrow">{SITE.phoneLabel}</p>
                <p className="display mt-4 text-4xl leading-none text-bone sm:text-5xl">
                  Bring three numbers.
                  <br />
                  Leave with a shortlist.
                </p>
                <p className="mt-5 text-[0.98rem] leading-relaxed text-concrete">
                  Operating weight, auxiliary flow in litres per minute, working pressure in bar. {SITE.name} supplies
                  forestry attachments across {SITE.region} from {SITE.base}.
                </p>
              </div>
              <Link
                href={SITE.quotePath}
                className="inline-flex shrink-0 items-center gap-2 bg-hazard px-8 py-5 font-mono text-[0.75rem] font-semibold tracking-[0.16em] text-steel-950 uppercase transition-colors hover:bg-moss-400"
              >
                Request a quote →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Forestry Attachments Australia — Buyer's Guide",
          url: absoluteUrl("/"),
          inLanguage: "en-AU",
        }}
      />
    </>
  );
}
