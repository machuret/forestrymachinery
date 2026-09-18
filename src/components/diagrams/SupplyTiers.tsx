const LABEL = "var(--color-concrete)";
const RULE = "var(--color-steel-600)";
const BONE = "var(--color-bone)";
const HAZARD = "var(--color-hazard)";
const DIM = "var(--color-hazard-dim)";
const FAINT = "var(--color-steel-600)";
const MONO = "var(--font-mono)";

/**
 * The three-part supply question, drawn. The only durations shown are the two
 * the page already states — a two-day repair and a six-week one. Air freight
 * sits between them without a made-up number, because there isn't an honest
 * one to publish.
 */
const TIERS = [
  {
    n: "01",
    title: "Held in Australia now",
    body: "Wear parts you will need this season. A two-day repair.",
    fill: HAZARD,
    x: 0,
    w: 0.2,
  },
  {
    n: "02",
    title: "Air-freighted",
    body: "Available, at a cost, when the shelf is empty and the machine is earning.",
    fill: DIM,
    x: 0.2,
    w: 0.32,
  },
  {
    n: "03",
    title: "On the water",
    body: "Everything else. A six-week wait in the middle of a season.",
    fill: FAINT,
    x: 0.52,
    w: 0.48,
  },
];

const W = 780;
const ROW_H = 76;
const TOP = 52;
const LEFT = 150;
const TRACK = W - LEFT - 34;
const H = TOP + TIERS.length * ROW_H + 52;

export function SupplyTiers() {
  return (
    <figure className="border border-steel-700 bg-steel-900">
      <div className="overflow-x-auto" tabIndex={0} role="region" aria-label="Parts supply tier diagram, scrollable">
        <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-labelledby="st-title st-desc" className="w-full min-w-[42rem]">
          <title id="st-title">The three tiers a part can sit in</title>
          <desc id="st-desc">
            Parts sit in one of three tiers. Held in Australia now means a two-day repair and covers the wear parts you
            will need this season. Air-freighted parts are available at a cost when the shelf is empty. Everything else
            is on the water, which is a six-week wait in the middle of a season. Asking a supplier which tier each part
            sits in tells you more than any averaged lead time.
          </desc>

          {/* Axis */}
          <text x={LEFT} y="26" fill={LABEL} fontFamily={MONO} fontSize="9.5" letterSpacing="1.2">
            TWO-DAY REPAIR
          </text>
          <text x={LEFT + TRACK} y="26" fill={LABEL} fontFamily={MONO} fontSize="9.5" letterSpacing="1.2" textAnchor="end">
            SIX-WEEK REPAIR
          </text>
          <line x1={LEFT} y1="34" x2={LEFT + TRACK} y2="34" stroke={RULE} strokeWidth="1" />
          <polygon points={`${LEFT + TRACK},29 ${LEFT + TRACK + 11},34 ${LEFT + TRACK},39`} fill={RULE} />

          {TIERS.map((t, i) => {
            const yTop = TOP + i * ROW_H;
            return (
              <g key={t.n}>
                <text x="0" y={yTop + 18} fill={HAZARD} fontFamily={MONO} fontSize="10" letterSpacing="1.6">
                  {t.n}
                </text>
                <text x="26" y={yTop + 18} fill={BONE} fontFamily={MONO} fontSize="11.5" letterSpacing="0.3">
                  {t.title}
                </text>
                <foreignObject x="26" y={yTop + 26} width="118" height="46">
                  <span
                    style={{
                      display: "block",
                      fontFamily: "var(--font-mono)",
                      fontSize: "9px",
                      lineHeight: 1.55,
                      color: "var(--color-concrete)",
                    }}
                  >
                    {t.body}
                  </span>
                </foreignObject>

                <rect x={LEFT} y={yTop + 4} width={TRACK} height="26" fill="var(--color-steel-950)" stroke={RULE} strokeWidth="1" />
                <rect x={LEFT + TRACK * t.x} y={yTop + 4} width={TRACK * t.w} height="26" fill={t.fill} opacity={i === 0 ? 0.95 : 0.6} />
              </g>
            );
          })}

          <line x1="0" y1={H - 34} x2={W} y2={H - 34} stroke={RULE} strokeWidth="1" />
          <text x="0" y={H - 16} fill={LABEL} fontFamily={MONO} fontSize="9" letterSpacing="0.7">
            ASK WHICH TIER EACH PART SITS IN. A SINGLE AVERAGED LEAD TIME TELLS YOU NOTHING.
          </text>
        </svg>
      </div>
      <figcaption className="border-t border-steel-700 px-5 py-4 font-mono text-[0.62rem] leading-relaxed tracking-[0.08em] text-concrete uppercase">
        Bands are indicative of sequence, not measured lead times. Only the two end points are figures this page states.
      </figcaption>
    </figure>
  );
}
