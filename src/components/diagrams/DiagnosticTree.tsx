const LINE = "var(--color-steel-600)";
const MONO = "var(--font-mono)";

/**
 * The first fork in diagnosing an underperforming attachment. Slow means flow;
 * stalling means pressure. Getting this wrong is how a buyer ends up replacing
 * an attachment that was never the problem.
 */
export function DiagnosticTree() {
  const box = (
    x: number,
    y: number,
    w: number,
    h: number,
    stroke: string,
    fill = "none",
  ) => <rect x={x} y={y} width={w} height={h} fill={fill} stroke={stroke} strokeWidth="1.5" />;

  return (
    <figure className="border border-steel-700 bg-steel-900">
      <div className="overflow-x-auto" tabIndex={0} role="region" aria-label="Diagnostic decision tree, scrollable">
        <svg
          viewBox="0 0 860 430"
          className="w-full min-w-[42rem]"
          role="img"
          aria-labelledby="dt-title dt-desc"
        >
          <title id="dt-title">Diagnostic decision tree for an underperforming forestry attachment</title>
          <desc id="dt-desc">
            Start by asking whether the tool runs slowly or stalls under load. Slow but completing the work points to
            insufficient flow: check measured flow at the coupler, then fitting and hose diameter, then whether flow is
            shared between functions. Stalling in hard material points to insufficient pressure: check working
            pressure under load, then the relief valve setting, then whether the material exceeds the tool&apos;s rated
            capacity. If neither fits, inspect wear parts and the mounting before suspecting the attachment.
          </desc>

          {/* Root */}
          {box(278, 16, 304, 46, "var(--color-hazard)")}
          <text x="430" y="44" textAnchor="middle" fill="var(--color-hazard)" fontFamily={MONO} fontSize="13" letterSpacing="1.2">
            DOES IT RUN SLOWLY, OR STALL?
          </text>

          {/* Split */}
          <line x1="430" y1="62" x2="430" y2="82" stroke={LINE} strokeWidth="1.5" />
          <line x1="180" y1="82" x2="680" y2="82" stroke={LINE} strokeWidth="1.5" />
          <line x1="180" y1="82" x2="180" y2="104" stroke={LINE} strokeWidth="1.5" />
          <line x1="680" y1="82" x2="680" y2="104" stroke={LINE} strokeWidth="1.5" />

          {/* Two branches */}
          {[
            {
              cx: 180,
              head: "RUNS SLOWLY",
              sub: "Completes the work, just slowly",
              verdict: "FLOW",
              steps: [
                "Measure flow at the coupler",
                "Check fitting and hose diameter",
                "Confirm flow is not shared",
                "Inspect wear parts before hydraulics",
              ],
            },
            {
              cx: 680,
              head: "STALLS UNDER LOAD",
              sub: "Runs at speed, stops in hard material",
              verdict: "PRESSURE",
              steps: [
                "Measure working pressure under load",
                "Check the relief valve setting",
                "Derate for dense hardwood",
                "Confirm material is within rating",
              ],
            },
          ].map((b) => (
            <g key={b.head}>
              {box(b.cx - 168, 104, 336, 52, "var(--color-moss-500)")}
              <text x={b.cx} y={126} textAnchor="middle" fill="var(--color-bone)" fontFamily={MONO} fontSize="13" letterSpacing="1.2">
                {b.head}
              </text>
              <text x={b.cx} y={144} textAnchor="middle" fill="var(--color-concrete)" fontFamily={MONO} fontSize="11">
                {b.sub}
              </text>

              <line x1={b.cx} y1="156" x2={b.cx} y2="178" stroke={LINE} strokeWidth="1.5" />
              <polygon points={`${b.cx - 5},172 ${b.cx},182 ${b.cx + 5},172`} fill={LINE} />

              {box(b.cx - 70, 182, 140, 34, "var(--color-hazard)", "rgba(245,166,35,0.12)")}
              <text x={b.cx} y={204} textAnchor="middle" fill="var(--color-hazard)" fontFamily={MONO} fontSize="14" letterSpacing="2">
                {b.verdict}
              </text>

              {b.steps.map((s, i) => (
                <g key={s}>
                  <text
                    x={b.cx - 150}
                    y={252 + i * 26}
                    fill="var(--color-muted)"
                    fontFamily={MONO}
                    fontSize="11"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </text>
                  <text x={b.cx - 126} y={252 + i * 26} fill="var(--color-concrete)" fontFamily={MONO} fontSize="12">
                    {s}
                  </text>
                </g>
              ))}
            </g>
          ))}

          {/* Fallthrough */}
          <line x1="430" y1="360" x2="430" y2="380" stroke={LINE} strokeWidth="1.5" strokeDasharray="4 5" />
          {box(250, 380, 360, 36, "var(--color-steel-600)")}
          <text x="430" y="403" textAnchor="middle" fill="var(--color-concrete)" fontFamily={MONO} fontSize="12" letterSpacing="1">
            NEITHER? CHECK WEAR PARTS AND THE MOUNTING FIRST
          </text>
        </svg>
      </div>
    </figure>
  );
}
