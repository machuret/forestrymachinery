import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { CATEGORY_META } from "@/lib/categories";
import { SITE, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Forestry Attachment Compatibility Matrix by Carrier Size | Australia" },
  description:
    "Which forestry attachments suit a 1.5 t, 5 t, 8 t, 20 t or 40 t carrier. A single reference table covering tree shears, stump grinders, mulchers, grapple saws, grabs, pruning heads and tillage tools against carrier weight and hydraulic demand.",
  alternates: { canonical: absoluteUrl("/compatibility/") },
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
              <li aria-hidden="true" className="text-steel-500">
                /
              </li>
              <li className="text-hazard">Compatibility matrix</li>
            </ol>
          </nav>

          <p className="eyebrow mt-10 flex items-center gap-3">
            <span className="inline-block h-2 w-2 rotate-45 bg-hazard" />
            Reference table
          </p>
          <h1 className="display mt-5 max-w-4xl text-[2.35rem] leading-[0.95] text-bone sm:text-5xl lg:text-[4.1rem]">
            Attachment compatibility by carrier size
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-bone/80">
            Every forestry category in this guide against the carrier classes that actually run them. Published ranges
            are manufacturer figures for the widest model in the range — the right model inside that range is set by
            your routine stem diameter and lift capacity at working radius, not by machine weight alone.
          </p>
        </div>
        <div className="h-[3px] hazard-stripes-dim" />
      </section>

      <section className="mx-auto max-w-[88rem] px-4 py-14 sm:px-6 sm:py-20 lg:px-10">
        <div className="relative overflow-x-auto border border-steel-700 bg-steel-900">
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

        <div className="mt-16 grid gap-px bg-steel-700 md:grid-cols-3">
          {[
            {
              t: "Weight is not the whole test",
              b: "A machine inside the weight band still needs the flow and pressure. Auxiliary flow in L/min and working pressure in bar decide whether the tool runs at rated speed or crawls.",
            },
            {
              t: "Case drain is not optional",
              b: "Piston motors need drainage back to tank at low pressure. Running a grinder or cutter without it is the fastest way to kill motor seals inside a season.",
            },
            {
              t: "Take the turnkey bracket",
              b: "A machine-specific mounting bracket and hose kit costs more up front and is nearly always worth it. A workshop bracket that does not sit right costs more in cracked steel than the kit saved.",
            },
          ].map((n) => (
            <div key={n.t} className="bg-steel-950 p-7">
              <h2 className="display text-xl text-bone">{n.t}</h2>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-concrete">{n.b}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 border border-steel-700 bg-steel-900 p-8 sm:p-10">
          <p className="eyebrow">{SITE.phoneLabel}</p>
          <p className="display mt-3 text-2xl text-bone sm:text-3xl">
            Not sure which side of a band your machine sits on?
          </p>
          <Link
            href={SITE.quotePath}
            className="mt-6 inline-flex items-center gap-2 bg-hazard px-6 py-3.5 font-mono text-[0.7rem] font-semibold tracking-[0.14em] text-steel-950 uppercase transition-colors hover:bg-moss-400"
          >
            Send us your specs →
          </Link>
        </div>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
            { "@type": "ListItem", position: 2, name: "Compatibility matrix", item: absoluteUrl("/compatibility/") },
          ],
        }}
      />
    </>
  );
}
