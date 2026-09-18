const LABEL = "var(--color-concrete)";
const RULE = "var(--color-steel-600)";
const BAR = "var(--color-hazard)";
const LINE = "var(--color-bone)";
const MONO = "var(--font-mono)";

/**
 * How a small business pool deduction arrives, as a share of the attachment's
 * cost. The only inputs are the two rates the page already states — 15% in the
 * first year, then 30% of the closing balance — so nothing here is a price, a
 * projection or a number the page does not support.
 */
function schedule() {
  const rows: { year: string; annual: number; cumulative: number }[] = [];
  let balance = 100;
  let cumulative = 0;
  for (let y = 1; y <= 5; y += 1) {
    const annual = balance * (y === 1 ? 0.15 : 0.3);
    balance -= annual;
    cumulative += annual;
    rows.push({ year: `Year ${y}`, annual, cumulative });
  }
  return rows;
}

const ROWS = schedule();

const W = 760;
const H = 300;
const PAD = { top: 26, right: 104, bottom: 58, left: 52 };
const PLOT_W = W - PAD.left - PAD.right;
const PLOT_H = H - PAD.top - PAD.bottom;
const MAX = 100;
const BAND = PLOT_W / ROWS.length;

const y = (v: number) => PAD.top + PLOT_H - (v / MAX) * PLOT_H;

export function PoolDeclineChart() {
  const path = ROWS.map((r, i) => `${i === 0 ? "M" : "L"}${PAD.left + BAND * (i + 0.5)} ${y(r.cumulative)}`).join(" ");

  return (
    <figure className="border border-steel-700 bg-steel-900">
      <div
        className="overflow-x-auto"
        tabIndex={0}
        role="region"
        aria-label="Pool deduction chart, scrollable"
      >
        <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-labelledby="pd-title pd-desc" className="w-full min-w-[40rem]">
          <title id="pd-title">How a pooled deduction arrives over five years</title>
          <desc id="pd-desc">
            At 15% in the first year and 30% of the closing balance each year after, a single asset in its own pool is
            deducted at 15% of cost in year one, 25.5% in year two, 17.9% in year three, 12.5% in year four and 8.7% in
            year five. Cumulatively that reaches 40.5% by the end of year two and 79.6% by the end of year five, so
            roughly a fifth of the cost is still undeducted after five years.
          </desc>

          {/* Gridlines */}
          {[0, 25, 50, 75, 100].map((v) => (
            <g key={v}>
              <line x1={PAD.left} y1={y(v)} x2={PAD.left + PLOT_W} y2={y(v)} stroke={RULE} strokeWidth="1" opacity={v === 0 ? 1 : 0.45} />
              <text x={PAD.left - 10} y={y(v) + 4} fill={LABEL} fontFamily={MONO} fontSize="9.5" textAnchor="end">
                {v}%
              </text>
            </g>
          ))}

          {/* Annual deduction bars */}
          {ROWS.map((r, i) => {
            const bw = BAND * 0.46;
            const bx = PAD.left + BAND * (i + 0.5) - bw / 2;
            return (
              <g key={r.year}>
                <rect x={bx} y={y(r.annual)} width={bw} height={PAD.top + PLOT_H - y(r.annual)} fill={BAR} opacity="0.9" />
                <text x={bx + bw / 2} y={y(r.annual) - 7} fill={BAR} fontFamily={MONO} fontSize="10" textAnchor="middle">
                  {r.annual.toFixed(1)}
                </text>
                <text
                  x={PAD.left + BAND * (i + 0.5)}
                  y={PAD.top + PLOT_H + 20}
                  fill={LABEL}
                  fontFamily={MONO}
                  fontSize="9.5"
                  textAnchor="middle"
                  letterSpacing="0.8"
                >
                  {r.year.toUpperCase()}
                </text>
              </g>
            );
          })}

          {/* Cumulative line */}
          <path d={path} fill="none" stroke={LINE} strokeWidth="1.8" strokeDasharray="6 4" />
          {ROWS.map((r, i) => (
            <circle key={r.year} cx={PAD.left + BAND * (i + 0.5)} cy={y(r.cumulative)} r="3" fill={LINE} />
          ))}
          <text
            x={PAD.left + PLOT_W + 10}
            y={y(ROWS[ROWS.length - 1].cumulative) + 4}
            fill={LINE}
            fontFamily={MONO}
            fontSize="9.5"
            letterSpacing="0.6"
          >
            {ROWS[ROWS.length - 1].cumulative.toFixed(1)}% CUMULATIVE
          </text>

          {/* Legend */}
          <rect x={PAD.left} y={H - 24} width="11" height="11" fill={BAR} />
          <text x={PAD.left + 18} y={H - 15} fill={LABEL} fontFamily={MONO} fontSize="9.5" letterSpacing="0.6">
            DEDUCTED THAT YEAR
          </text>
          <line x1={PAD.left + 188} y1={H - 19} x2={PAD.left + 214} y2={H - 19} stroke={LINE} strokeWidth="1.8" strokeDasharray="6 4" />
          <text x={PAD.left + 222} y={H - 15} fill={LABEL} fontFamily={MONO} fontSize="9.5" letterSpacing="0.6">
            DEDUCTED IN TOTAL
          </text>
        </svg>
      </div>
      <figcaption className="border-t border-steel-700 px-5 py-4 font-mono text-[0.62rem] leading-relaxed tracking-[0.08em] text-concrete uppercase">
        Percentage of cost, from the 15% and 30% pool rates alone. Illustrates a single asset with no other pool
        movements; your pool holds other assets and your accountant works the real figure.
      </figcaption>
    </figure>
  );
}
