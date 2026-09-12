import Link from "next/link";
import { CATEGORY_META } from "@/lib/categories";

/** Published carrier range per category, in tonnes, from the guide bodies. */
const RANGES: Record<string, { from: number; to: number; label: string }> = {
  "tree-shears-guide": { from: 2, to: 50, label: "2–50 t" },
  "stump-cutter-guide": { from: 11.5, to: 28, label: "11.5–28 t" },
  "stump-grinder-guide": { from: 1.5, to: 30, label: "1.5–30 t" },
  "forestry-mulcher-guide": { from: 1, to: 30, label: "1–30 t" },
  "grapple-saw-guide": { from: 3, to: 30, label: "3–30 t" },
  "log-grab-guide": { from: 13, to: 25, label: "13–25 t" },
  "mechanical-pruning-guide": { from: 2, to: 20, label: "2–20 t" },
  "tillage-guide": { from: 2, to: 20, label: "2–20 t" },
};

const MIN = 1;
const MAX = 50;
const TICKS = [1, 2, 5, 10, 20, 30, 50];

/** Log scale, because the useful detail is all below 10 tonnes. */
function pos(t: number): number {
  return (Math.log(t / MIN) / Math.log(MAX / MIN)) * 100;
}

/**
 * Every category's published carrier range on one axis. Reading down a vertical
 * line at your machine's weight gives the categories that fit it.
 */
export function CarrierBandChart() {
  return (
    <figure className="border border-steel-700 bg-steel-900 p-5 sm:p-7">
      <figcaption className="mb-6">
        <p className="font-mono text-[0.62rem] tracking-[0.18em] text-hazard uppercase">Carrier weight, tonnes</p>
        <p className="mt-2 max-w-2xl text-[0.9rem] leading-relaxed text-concrete">
          Published operating machine ranges, plotted on a log scale so the detail below ten tonnes stays readable.
          Find your machine on the axis and read down.
        </p>
      </figcaption>

      <div className="relative">
        {/* Axis ticks */}
        <div className="relative mb-3 h-5">
          {TICKS.map((t) => (
            <span
              key={t}
              className="absolute -translate-x-1/2 font-mono text-[0.62rem] text-concrete"
              style={{ left: `${pos(t)}%` }}
            >
              {t}
            </span>
          ))}
        </div>

        <ul className="space-y-px">
          {CATEGORY_META.map((c) => {
            const r = RANGES[c.slug];
            const left = pos(r.from);
            const width = pos(r.to) - left;
            return (
              <li key={c.slug} className="group relative">
                <Link
                  href={`/${c.slug}/`}
                  className="relative flex h-11 items-center bg-steel-950 transition-colors hover:bg-steel-800"
                >
                  {/* Gridlines */}
                  {TICKS.map((t) => (
                    <span
                      key={t}
                      aria-hidden="true"
                      className="absolute top-0 bottom-0 w-px bg-steel-800"
                      style={{ left: `${pos(t)}%` }}
                    />
                  ))}
                  <span
                    className="absolute top-1/2 h-5 -translate-y-1/2 bg-moss-600/70 transition-colors group-hover:bg-hazard"
                    style={{ left: `${left}%`, width: `${width}%` }}
                  />
                  <span className="relative z-10 pl-3 font-mono text-[0.62rem] tracking-[0.12em] text-bone uppercase">
                    {c.shortLabel}
                  </span>
                  <span className="absolute right-3 z-10 font-mono text-[0.62rem] text-concrete">{r.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </figure>
  );
}
