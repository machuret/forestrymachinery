/**
 * Why utilisation decides whether purchase price matters.
 *
 * Emphasis form: capital is the series that moves and carries the accent hue;
 * wear parts are flat context in the de-emphasis grey. The pair was checked for
 * colour-vision separation rather than eyeballed (ΔE 16.8 protan, 20.5 normal).
 *
 * Every value is printed on the chart, so no data sits behind a hover state and
 * the figure needs no client JavaScript.
 */
import Link from "next/link";

/** Worked example. Inputs are stated on the figure so the reader can vary them. */
const PURCHASE = 45_000;
const RESIDUAL = 0.2;
const YEARS = 5;
const TEETH_SET = 900;
const TEETH_LIFE_HOURS = 120;

const CAPITAL_TO_RECOVER = PURCHASE * (1 - RESIDUAL);
const TEETH_PER_HOUR = TEETH_SET / TEETH_LIFE_HOURS;

const ROWS = [150, 300, 500, 750, 1000].map((hours) => {
  const capital = CAPITAL_TO_RECOVER / (hours * YEARS);
  return { hours, capital, teeth: TEETH_PER_HOUR, total: capital + TEETH_PER_HOUR };
});

const MAX = Math.max(...ROWS.map((r) => r.total));

/** Geometry, in SVG user units. */
const W = 900;
const LABEL_W = 132;
const VALUE_W = 96;
const PLOT_W = W - LABEL_W - VALUE_W;
const ROW_H = 52;
const BAR_H = 22;
const TOP = 54;
const GAP = 2; // surface gap between stacked fills
const H = TOP + ROWS.length * ROW_H + 40;

const x = (v: number) => (v / MAX) * PLOT_W;

const money = (n: number) => `$${n.toFixed(2)}`;

export function CapitalPerHourChart() {
  return (
    <figure className="border border-steel-700 bg-steel-900">
      <figcaption className="border-b border-steel-700 p-5 sm:p-6">
        <h3 className="display text-xl text-bone sm:text-2xl">
          What the attachment itself costs per hour
        </h3>
        <p className="mt-2 max-w-2xl text-[0.93rem] leading-relaxed text-concrete">
          Capital collapses as hours rise; wear parts do not move. Above roughly 500 hours a year the purchase price
          has stopped being the number that decides anything, which is the whole argument for costing by the hour
          rather than by the invoice.
        </p>
      </figcaption>

      <div className="overflow-x-auto" tabIndex={0} role="region" aria-label="Chart, scrollable">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="w-full min-w-[40rem]"
          role="img"
          aria-labelledby="cph-title cph-desc"
        >
          <title id="cph-title">Attachment cost per hour against annual operating hours</title>
          <desc id="cph-desc">
            {ROWS.map(
              (r) =>
                `At ${r.hours} hours a year, capital is ${money(r.capital)} per hour and wear parts ${money(
                  r.teeth,
                )}, totalling ${money(r.total)}. `,
            ).join("")}
            Based on a $45,000 attachment at 20 per cent residual over five years, and a $900 tooth set lasting 120
            hours.
          </desc>

          {/* Legend — required for two series */}
          <g transform={`translate(${LABEL_W} 20)`}>
            <rect width="11" height="11" rx="2" fill="var(--color-hazard)" />
            <text x="18" y="10" fill="var(--color-concrete)" fontFamily="var(--font-mono)" fontSize="12">
              Capital
            </text>
            <rect x="92" width="11" height="11" rx="2" fill="var(--color-concrete)" />
            <text x="110" y="10" fill="var(--color-concrete)" fontFamily="var(--font-mono)" fontSize="12">
              Wear parts
            </text>
          </g>

          {/* Recessive baseline */}
          <line
            x1={LABEL_W}
            y1={TOP - 12}
            x2={LABEL_W}
            y2={TOP + ROWS.length * ROW_H - 10}
            stroke="var(--color-steel-700)"
            strokeWidth="1"
          />

          {ROWS.map((r, i) => {
            const y = TOP + i * ROW_H;
            const capW = x(r.capital);
            const teethW = x(r.teeth);
            return (
              <g key={r.hours}>
                <text
                  x={LABEL_W - 12}
                  y={y + BAR_H / 2 + 4}
                  textAnchor="end"
                  fill="var(--color-bone)"
                  fontFamily="var(--font-mono)"
                  fontSize="13"
                >
                  {r.hours.toLocaleString("en-AU")} hr/yr
                </text>

                {/* Capital: the series that is the point */}
                <rect x={LABEL_W} y={y} width={Math.max(capW, 3)} height={BAR_H} fill="var(--color-hazard)" rx="0" />
                {/* 4px rounded data-end on the outer segment only */}
                <rect
                  x={LABEL_W + capW + GAP}
                  y={y}
                  width={Math.max(teethW, 3)}
                  height={BAR_H}
                  fill="var(--color-concrete)"
                  rx="4"
                />

                <text
                  x={LABEL_W + capW + teethW + GAP + 14}
                  y={y + BAR_H / 2 + 4}
                  fill="var(--color-bone)"
                  fontFamily="var(--font-mono)"
                  fontSize="13"
                >
                  {money(r.total)}
                </text>
              </g>
            );
          })}

          {/* The utilisation thresholds this guide uses */}
          {[
            { after: 0, label: "200 hr — hire below this" },
            { after: 1, label: "500 hr — ownership wins above this" },
          ].map(({ after, label }) => {
            const y = TOP + (after + 1) * ROW_H - 12;
            return (
              <g key={label}>
                <line
                  x1={LABEL_W}
                  y1={y}
                  x2={W - VALUE_W - 190}
                  y2={y}
                  stroke="var(--color-steel-600)"
                  strokeWidth="1"
                  strokeDasharray="4 5"
                />
                <text
                  x={W - VALUE_W + 56}
                  y={y + 4}
                  textAnchor="end"
                  fill="var(--color-muted)"
                  fontFamily="var(--font-mono)"
                  fontSize="11"
                  letterSpacing="0.5"
                >
                  {label}
                </text>
              </g>
            );
          })}

          <text
            x={LABEL_W}
            y={H - 14}
            fill="var(--color-muted)"
            fontFamily="var(--font-mono)"
            fontSize="11"
            letterSpacing="0.4"
          >
            Worked example: $45,000 attachment, 20% residual, 5 years, $900 tooth set lasting 120 hours
          </text>
        </svg>
      </div>

      <figcaption className="border-t border-steel-700 px-5 py-4 sm:px-6">
        <p className="text-[0.88rem] leading-relaxed text-concrete">
          Carrier, operator and fuel are excluded here on purpose — you carry those whether or not you own this
          attachment. Change any of the inputs in the{" "}
          <Link href="/cost-per-stump-calculator/">cost per stump calculator</Link> and the same arithmetic runs on your own
          figures.
        </p>
      </figcaption>
    </figure>
  );
}
