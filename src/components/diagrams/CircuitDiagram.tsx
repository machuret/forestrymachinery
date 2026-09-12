const LINE = "var(--color-steel-500)";
const ACCENT = "var(--color-moss-500)";
const DIM = "var(--color-hazard)";
const BONE = "var(--color-bone)";

const MONO = "var(--font-mono)";

interface Circuit {
  id: string;
  name: string;
  lines: number;
  drain: boolean;
  note: string;
  users: string;
}

const CIRCUITS: Circuit[] = [
  {
    id: "single",
    name: "Single-acting",
    lines: 1,
    drain: false,
    note: "Oil out, oil back, one direction",
    users: "Mulchers, most trimmers",
  },
  {
    id: "drain",
    name: "Hammer line + case drain",
    lines: 1,
    drain: true,
    note: "Third low-pressure line returns motor leakage to tank",
    users: "Grinders, cutters, piston-motor tools",
  },
  {
    id: "double",
    name: "Double-acting",
    lines: 2,
    drain: false,
    note: "Powered both ways, so the tool opens and closes",
    users: "Grabs, shears, pruners",
  },
  {
    id: "dual",
    name: "Dual circuit",
    lines: 3,
    drain: false,
    note: "Saw line plus a separate grapple and rotation supply",
    users: "Grapple saws",
  },
];

function Panel({ c, x }: { c: Circuit; x: number }) {
  const total = c.lines + (c.drain ? 1 : 0);
  const top = 70;
  const gap = 26;

  return (
    <g transform={`translate(${x} 0)`}>
      {/* Pump / carrier block */}
      <rect x="8" y="28" width="52" height="150" fill="none" stroke={LINE} strokeWidth="1.5" />
      <text x="34" y="20" textAnchor="middle" fill={LINE} fontFamily={MONO} fontSize="9" letterSpacing="1.5">
        CARRIER
      </text>

      {/* Attachment block */}
      <rect x="188" y="28" width="56" height="150" fill="none" stroke={ACCENT} strokeWidth="2" />
      <text x="216" y="20" textAnchor="middle" fill={ACCENT} fontFamily={MONO} fontSize="9" letterSpacing="1.5">
        TOOL
      </text>

      {/* Supply and return lines */}
      {Array.from({ length: total }).map((_, i) => {
        const y = top + i * gap;
        const isDrain = c.drain && i === total - 1;
        return (
          <g key={i}>
            <line
              x1="60"
              y1={y}
              x2="188"
              y2={y}
              stroke={isDrain ? DIM : BONE}
              strokeWidth={isDrain ? 1.5 : 2.5}
              strokeDasharray={isDrain ? "6 4" : undefined}
            />
            <polygon
              points={i % 2 === 0 ? `182,${y - 4} 190,${y} 182,${y + 4}` : `66,${y - 4} 58,${y} 66,${y + 4}`}
              fill={isDrain ? DIM : BONE}
            />
            {isDrain && (
              <text x="124" y={y - 7} textAnchor="middle" fill={DIM} fontFamily={MONO} fontSize="8.5" letterSpacing="1">
                CASE DRAIN
              </text>
            )}
          </g>
        );
      })}

      <text x="126" y="204" textAnchor="middle" fill={BONE} fontFamily={MONO} fontSize="11" letterSpacing="1.5">
        {c.name.toUpperCase()}
      </text>
    </g>
  );
}

/**
 * The four attachment circuit types, drawn to the same scale so the difference
 * between them is line count rather than prose.
 */
export function CircuitDiagram() {
  return (
    <figure className="border border-steel-700 bg-steel-900">
      <div className="overflow-x-auto">
        <svg viewBox="0 0 1040 250" role="img" aria-labelledby="circuit-title circuit-desc" className="w-full min-w-[46rem]">
          <title id="circuit-title">The four forestry attachment hydraulic circuit types</title>
          <desc id="circuit-desc">
            Single-acting runs one line between carrier and tool. Hammer line plus case drain adds a third,
            low-pressure return that takes motor leakage back to tank. Double-acting runs two lines so the tool can be
            powered open and closed. Dual circuit runs three, separating the saw supply from the grapple and rotation
            supply.
          </desc>
          {CIRCUITS.map((c, i) => (
            <Panel key={c.id} c={c} x={i * 260} />
          ))}
        </svg>
      </div>
      <figcaption className="grid gap-px border-t border-steel-700 bg-steel-700 sm:grid-cols-2 lg:grid-cols-4">
        {CIRCUITS.map((c) => (
          <div key={c.id} className="bg-steel-900 p-4">
            <p className="font-mono text-[0.6rem] tracking-[0.14em] text-hazard uppercase">{c.name}</p>
            <p className="mt-2 text-[0.85rem] leading-relaxed text-concrete">{c.note}</p>
            <p className="mt-2 font-mono text-[0.6rem] tracking-[0.1em] text-steel-500 uppercase">{c.users}</p>
          </div>
        ))}
      </figcaption>
    </figure>
  );
}
