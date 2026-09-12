import type { Metadata } from "next";
import Link from "next/link";
import { CategoryGrid } from "@/components/CategoryGrid";
import { HeroSchematic } from "@/components/HeroSchematic";
import { JsonLd } from "@/components/JsonLd";
import { SITE, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Forestry Attachments Australia | Buyer's Guide & Category Index" },
  description:
    "Match a forestry attachment to the excavator you already own. Eight category guides covering tree shears, stump grinders, mulchers, grapple saws, grabs, pruning heads and tillage tools, written for Australian contractors.",
  alternates: { canonical: absoluteUrl("/") },
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

const BRANDS = ["OMEF", "Trevi Benne", "Dipperfox", "Powerhand"];

export default function HomePage() {
  return (
    <>
      {/* ---------------------------------------------------------- Hero */}
      <section className="relative overflow-hidden border-b border-steel-700 bg-steel-950 plate">
        <div aria-hidden="true" className="absolute inset-0 bg-grid opacity-70" />
        <div
          aria-hidden="true"
          className="absolute -top-40 left-1/3 h-[34rem] w-[34rem] rounded-full bg-moss-600/14 blur-[130px]"
        />
        <div
          aria-hidden="true"
          className="absolute right-0 -bottom-24 h-[22rem] w-[22rem] rounded-full bg-hazard/8 blur-[120px]"
        />

        <div className="relative mx-auto max-w-[88rem] px-4 pt-16 pb-0 sm:px-6 sm:pt-24 lg:px-10">
          <p className="eyebrow flex items-center gap-3">
            <span className="inline-block h-2 w-2 rotate-45 bg-hazard" />
            Australian buyer&rsquo;s guide · {new Date().getFullYear()} edition
          </p>

          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_24rem] lg:items-center">
            <div>
              <h1 className="display mt-7 text-[2.75rem] leading-[0.92] text-bone sm:text-6xl lg:text-[5rem]">
                Forestry attachments,
                <br />
                matched to the machine
                <br />
                <span className="text-hazard">already on your float.</span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-bone/80 sm:text-xl">
                Most businesses buying forestry machinery in Australia are not forestry companies. They are civil
                contractors, arborists, councils, utility crews and farmers. The question is never &ldquo;which
                attachment is best&rdquo;. It is which one turns an existing carrier into a second revenue line without
                blowing up the maintenance bill.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
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

            <HeroSchematic className="hidden h-auto w-full opacity-80 lg:block" />
          </div>

          <dl className="mt-16 grid grid-cols-2 gap-px border-t border-l border-steel-700 bg-steel-700 sm:grid-cols-4">
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

      {/* ------------------------------------------------------- Brands */}
      <section className="border-y border-steel-700 bg-steel-900">
        <div className="mx-auto flex max-w-[88rem] flex-col gap-8 px-4 py-12 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <p className="font-mono text-[0.65rem] tracking-[0.2em] text-concrete uppercase">
            Ranges referenced in these guides
          </p>
          <ul className="flex flex-wrap items-center gap-x-10 gap-y-4">
            {BRANDS.map((b) => (
              <li key={b} className="display text-2xl tracking-wide text-steel-500 sm:text-3xl">
                {b}
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
