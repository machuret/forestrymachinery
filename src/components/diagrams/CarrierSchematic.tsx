const LINE = "var(--color-steel-600)";
const LABEL = "var(--color-concrete)";
const BONE = "var(--color-bone)";
const HAZARD = "var(--color-hazard)";
const MOSS = "var(--color-moss-500)";
const MONO = "var(--font-mono)";

/**
 * A labelled carrier-and-attachment schematic for the glossary. Every label is
 * a link to the term's own entry further down the page, so the drawing works as
 * an index rather than as decoration.
 */
const CALLOUTS: { id: string; label: string; x: number; y: number; to: [number, number] }[] = [
  { id: "carrier", label: "Carrier", x: 30, y: 56, to: [126, 196] },
  { id: "operating-weight", label: "Operating weight", x: 30, y: 292, to: [126, 232] },
  { id: "auxiliary-flow", label: "Auxiliary flow · L/min", x: 236, y: 44, to: [300, 128] },
  { id: "valve-block", label: "Valve block", x: 236, y: 300, to: [268, 206] },
  { id: "case-drain", label: "Case drain", x: 424, y: 300, to: [462, 214] },
  { id: "quick-hitch", label: "Quick hitch", x: 424, y: 44, to: [486, 150] },
  { id: "lift-capacity-at-radius", label: "Lift capacity at radius", x: 592, y: 44, to: [614, 122] },
  { id: "wear-parts", label: "Wear parts", x: 592, y: 300, to: [636, 250] },
];

export function CarrierSchematic() {
  return (
    <figure className="border border-steel-700 bg-steel-900">
      <div className="overflow-x-auto" tabIndex={0} role="region" aria-label="Labelled carrier schematic, scrollable">
        <svg viewBox="0 0 760 336" role="img" aria-labelledby="cs-title cs-desc" className="w-full min-w-[44rem]">
          <title id="cs-title">Where each term sits on the machine</title>
          <desc id="cs-desc">
            A tracked carrier with boom, stick, quick hitch and attachment. Labels mark the carrier and its operating
            weight, the auxiliary flow supplied along the boom, the valve block, the case drain returning to tank, the
            quick hitch at the stick end, lift capacity measured at working radius, and the wear parts at the cutting
            edge. Each label links to that term&rsquo;s definition below.
          </desc>

          {/* Ground */}
          <line x1="16" y1="266" x2="744" y2="266" stroke={LINE} strokeWidth="1.5" />

          {/* Tracks and body */}
          <rect x="78" y="238" width="132" height="26" rx="13" fill="none" stroke={BONE} strokeWidth="1.8" />
          <rect x="96" y="186" width="98" height="50" fill="none" stroke={BONE} strokeWidth="1.8" />
          <rect x="112" y="196" width="38" height="26" fill="none" stroke={LINE} strokeWidth="1.2" />

          {/* Boom and stick */}
          <path d="M194 198 L300 128 L436 168" fill="none" stroke={BONE} strokeWidth="2.4" strokeLinejoin="bevel" />
          <path d="M436 168 L496 152" fill="none" stroke={BONE} strokeWidth="2.4" />

          {/* Hydraulic runs along the boom: supply and case drain */}
          <path d="M206 202 L302 136 L434 174" fill="none" stroke={HAZARD} strokeWidth="1.4" strokeDasharray="7 5" />
          <path d="M268 206 L296 146 L440 182 L470 214" fill="none" stroke={MOSS} strokeWidth="1.4" strokeDasharray="3 4" />

          {/* Quick hitch and attachment */}
          <rect x="484" y="140" width="34" height="26" fill="none" stroke={HAZARD} strokeWidth="1.8" />
          <path d="M518 152 L586 122 L664 158 L640 250 L560 236 Z" fill="none" stroke={BONE} strokeWidth="2" />
          <path d="M560 236 L640 250" fill="none" stroke={HAZARD} strokeWidth="5" strokeLinecap="round" />

          {/* Radius measure */}
          <line x1="145" y1="286" x2="614" y2="286" stroke={LINE} strokeWidth="1" strokeDasharray="5 5" />
          <line x1="145" y1="280" x2="145" y2="292" stroke={LINE} strokeWidth="1" />
          <line x1="614" y1="280" x2="614" y2="292" stroke={LINE} strokeWidth="1" />

          {/* Callouts */}
          {CALLOUTS.map((c) => (
            <g key={c.id}>
              <line x1={c.x + 6} y1={c.y + 4} x2={c.to[0]} y2={c.to[1]} stroke={LINE} strokeWidth="1" />
              <circle cx={c.to[0]} cy={c.to[1]} r="3" fill={HAZARD} />
              <text x={c.x} y={c.y} fill={BONE} fontFamily={MONO} fontSize="10.5" letterSpacing="0.9">
                {c.label.toUpperCase()}
              </text>
            </g>
          ))}

          {/* Legend */}
          <line x1="16" y1="318" x2="40" y2="318" stroke={HAZARD} strokeWidth="1.4" strokeDasharray="7 5" />
          <text x="48" y="322" fill={LABEL} fontFamily={MONO} fontSize="9.5" letterSpacing="0.6">
            SUPPLY LINE
          </text>
          <line x1="150" y1="318" x2="174" y2="318" stroke={MOSS} strokeWidth="1.4" strokeDasharray="3 4" />
          <text x="182" y="322" fill={LABEL} fontFamily={MONO} fontSize="9.5" letterSpacing="0.6">
            CASE DRAIN, BACK TO TANK
          </text>
        </svg>
      </div>
      <figcaption className="border-t border-steel-700 px-5 py-4">
        {/* The links live here rather than inside the SVG: an element with
            role="img" must not contain focusable children. */}
        <p className="font-mono text-[0.62rem] tracking-[0.08em] text-concrete uppercase">
          Schematic, not to scale. Jump to a definition:
        </p>
        <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
          {CALLOUTS.map((c) => (
            <li key={c.id}>
              <a
                href={`#${c.id}`}
                className="font-mono text-[0.62rem] tracking-[0.08em] text-moss-400 uppercase hover:text-hazard"
              >
                {c.label} →
              </a>
            </li>
          ))}
        </ul>
      </figcaption>
    </figure>
  );
}
