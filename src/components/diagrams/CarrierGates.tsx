const RULE = "var(--color-steel-600)";
const LABEL = "var(--color-concrete)";
const PASS = "var(--color-moss-500)";
const FAIL = "var(--color-rust-text)";
const BONE = "var(--color-bone)";
const HAZARD = "var(--color-hazard)";
const MONO = "var(--font-mono)";

/**
 * The four checks a carrier has to pass, in the order they catch buyers out.
 * Every gate and every failure symptom is taken from the section above it —
 * nothing here introduces a figure the page does not already state.
 */
const GATES = [
  { n: "01", check: "Operating weight", unit: "tonnes", fail: "Tip-over risk, or cracked attachment structure" },
  { n: "02", check: "Auxiliary flow", unit: "L/min", fail: "Runs slowly enough to destroy the economics" },
  { n: "03", check: "Working pressure", unit: "bar", fail: "Stalls in hard timber at correct flow" },
  { n: "04", check: "Circuit type", unit: "and case drain", fail: "Motor seals fail, often inside a season" },
];

const X0 = 96;
const STEP = 178;
const LANE = 74;

export function CarrierGates() {
  return (
    <figure className="border border-steel-700 bg-steel-900">
      <div
        className="overflow-x-auto"
        tabIndex={0}
        role="region"
        aria-label="Carrier compatibility gate diagram, scrollable"
      >
        <svg viewBox="0 0 820 262" role="img" aria-labelledby="cg-title cg-desc" className="w-full min-w-[46rem]">
          <title id="cg-title">The four compatibility checks, in order</title>
          <desc id="cg-desc">
            A carrier passes four checks in sequence before an attachment fits it: operating weight in tonnes,
            auxiliary flow in litres per minute, working pressure in bar, and whether the circuit type and case drain
            exist. Failing the first risks tip-over or a cracked attachment; failing the second leaves the tool running
            too slowly to pay; failing the third stalls the tool in hard timber even at correct flow; failing the
            fourth destroys the motor seals, often inside a season.
          </desc>

          {/* Carrier, entering from the left */}
          <text x="8" y={LANE - 22} fill={LABEL} fontFamily={MONO} fontSize="10" letterSpacing="1.4">
            YOUR CARRIER
          </text>
          <rect x="8" y={LANE - 12} width="60" height="26" fill="none" stroke={BONE} strokeWidth="1.5" />
          <line x1="68" y1={LANE + 1} x2={X0 - 34} y2={LANE + 1} stroke={PASS} strokeWidth="2" />

          {GATES.map((g, i) => {
            const x = X0 + i * STEP;
            const last = i === GATES.length - 1;
            return (
              <g key={g.n}>
                {/* Pass lane through the gate */}
                <line x1={x - 34} y1={LANE + 1} x2={x + 118} y2={LANE + 1} stroke={PASS} strokeWidth="2" />
                {!last && (
                  <line x1={x + 118} y1={LANE + 1} x2={x + STEP - 34} y2={LANE + 1} stroke={PASS} strokeWidth="2" />
                )}

                {/* The gate itself */}
                <rect x={x} y={LANE - 30} width="118" height="62" fill="var(--color-steel-950)" stroke={HAZARD} strokeWidth="1.5" />
                <text x={x + 10} y={LANE - 13} fill={HAZARD} fontFamily={MONO} fontSize="10" letterSpacing="1.6">
                  {g.n}
                </text>
                <text x={x + 10} y={LANE + 4} fill={BONE} fontFamily={MONO} fontSize="11" letterSpacing="0.4">
                  {g.check}
                </text>
                <text x={x + 10} y={LANE + 21} fill={LABEL} fontFamily={MONO} fontSize="9.5" letterSpacing="0.8">
                  {g.unit}
                </text>

                {/* Failure branch, dropping away below */}
                <path
                  d={`M${x + 59} ${LANE + 32} L${x + 59} ${LANE + 58}`}
                  stroke={FAIL}
                  strokeWidth="1.5"
                  strokeDasharray="5 4"
                  fill="none"
                />
                <polygon
                  points={`${x + 54},${LANE + 54} ${x + 59},${LANE + 66} ${x + 64},${LANE + 54}`}
                  fill={FAIL}
                />
                <text x={x + 2} y={LANE + 84} fill={FAIL} fontFamily={MONO} fontSize="9" letterSpacing="0.9">
                  NO →
                </text>
                <foreignObject x={x} y={LANE + 90} width="130" height="70">
                  <span
                    // Wrapping a failure symptom by hand would break at the wrong words.
                    style={{
                      display: "block",
                      fontFamily: "var(--font-mono)",
                      fontSize: "9.5px",
                      lineHeight: 1.5,
                      letterSpacing: "0.03em",
                      color: "var(--color-concrete)",
                    }}
                  >
                    {g.fail}
                  </span>
                </foreignObject>
              </g>
            );
          })}

          {/* Outcome */}
          <line x1={X0 + 3 * STEP + 118} y1={LANE + 1} x2="786" y2={LANE + 1} stroke={PASS} strokeWidth="2" />
          <polygon points={`780,${LANE - 5} 792,${LANE + 1} 780,${LANE + 7}`} fill={PASS} />
          <text x="694" y={LANE - 22} fill={PASS} fontFamily={MONO} fontSize="10" letterSpacing="1.4">
            IT FITS
          </text>

          <line x1="8" y1="236" x2="812" y2="236" stroke={RULE} strokeWidth="1" />
          <text x="8" y="252" fill={LABEL} fontFamily={MONO} fontSize="9" letterSpacing="0.7">
            EACH GATE IS A SEPARATE CHECK. PASSING THE WEIGHT BAND SAYS NOTHING ABOUT THE OTHER THREE.
          </text>
        </svg>
      </div>
      <figcaption className="border-t border-steel-700 px-5 py-4 font-mono text-[0.62rem] leading-relaxed tracking-[0.08em] text-concrete uppercase">
        The order matters: flow and pressure failures are the ones buyers discover after the invoice.
      </figcaption>
    </figure>
  );
}
