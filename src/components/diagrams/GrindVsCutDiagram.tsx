const LINE = "var(--color-steel-500)";
const SOIL = "var(--color-steel-700)";
const WOOD = "var(--color-hazard)";
const ACCENT = "var(--color-moss-500)";
const MONO = "var(--font-mono)";

function Ground({ x }: { x: number }) {
  return (
    <g transform={`translate(${x} 0)`}>
      <rect x="0" y="150" width="360" height="80" fill={SOIL} opacity="0.5" />
      <line x1="0" y1="150" x2="360" y2="150" stroke={LINE} strokeWidth="1.5" />
    </g>
  );
}

/**
 * Why grinding and cutting are different jobs, not different brands: one
 * destroys the stump below grade and leaves no spoil, the other sizes a stump
 * that has already been pulled.
 */
export function GrindVsCutDiagram() {
  return (
    <figure className="border border-steel-700 bg-steel-900">
      <div className="overflow-x-auto">
        <svg viewBox="0 0 820 274" role="img" aria-labelledby="gc-title gc-desc" className="w-full min-w-[40rem]">
          <title id="gc-title">Stump grinding compared with stump cutting</title>
          <desc id="gc-desc">
            A grinder works downward into the ground, destroying the stump and root plate in place and leaving chip and
            no spoil heap. A cutter works on a stump that has already been extracted, splitting it above ground into
            pieces small enough to transport or chip.
          </desc>

          <Ground x={0} />
          <Ground x={440} />

          {/* --- Grinding --- */}
          <g>
            <text x="12" y="26" fill={ACCENT} fontFamily={MONO} fontSize="12" letterSpacing="2">
              GRINDING — IN PLACE
            </text>
            {/* Remaining root plate below grade */}
            <path d="M120 150 L120 196 Q160 214 200 196 L200 150 Z" fill={WOOD} opacity="0.28" />
            <path d="M120 150 L120 196 Q160 214 200 196 L200 150" fill="none" stroke={WOOD} strokeWidth="1.5" strokeDasharray="5 4" />
            {/* Tool */}
            <rect x="140" y="60" width="40" height="52" fill="none" stroke={ACCENT} strokeWidth="2.5" />
            <path d="M140 112 L180 112 L172 140 L148 140 Z" fill={ACCENT} opacity="0.35" stroke={ACCENT} strokeWidth="2" />
            <line x1="160" y1="36" x2="160" y2="60" stroke={LINE} strokeWidth="2" />
            {/* Downward motion */}
            <g stroke={WOOD} strokeWidth="2">
              <line x1="228" y1="70" x2="228" y2="150" strokeDasharray="6 5" />
              <polygon points="222,144 228,156 234,144" fill={WOOD} stroke="none" />
            </g>
            <text x="240" y="112" fill={WOOD} fontFamily={MONO} fontSize="10" letterSpacing="1.2">
              BELOW GRADE
            </text>
            {/* Chip */}
            {[60, 78, 96, 232, 250, 268, 286].map((cx, i) => (
              <rect key={cx} x={cx} y={138 + (i % 3) * 4} width="14" height="5" fill={WOOD} opacity="0.75" transform={`rotate(${i * 24} ${cx} 140)`} />
            ))}
            <text x="12" y="252" fill={LINE} fontFamily={MONO} fontSize="9" letterSpacing="0.6">
              OUTPUT: CHIP · NO SPOIL · NO STUMP TO MOVE
            </text>
          </g>

          {/* --- Cutting --- */}
          <g transform="translate(440 0)">
            <text x="12" y="26" fill={ACCENT} fontFamily={MONO} fontSize="12" letterSpacing="2">
              CUTTING — AFTER EXTRACTION
            </text>
            {/* Extracted stump sitting on the surface */}
            <path d="M108 150 Q128 104 160 100 Q196 100 212 150 Z" fill={WOOD} opacity="0.3" stroke={WOOD} strokeWidth="1.5" />
            <path d="M160 100 L160 150" stroke={WOOD} strokeWidth="1.2" strokeDasharray="4 4" />
            {/* Jaw */}
            <path d="M112 58 L208 58 L208 78 L112 78 Z" fill="none" stroke={ACCENT} strokeWidth="2.5" />
            <path d="M118 78 Q132 106 150 96" fill="none" stroke={ACCENT} strokeWidth="6" strokeLinecap="round" />
            <path d="M202 78 Q188 106 170 96" fill="none" stroke={ACCENT} strokeWidth="6" strokeLinecap="round" />
            <line x1="160" y1="34" x2="160" y2="58" stroke={LINE} strokeWidth="2" />
            {/* Split pieces */}
            <g stroke={WOOD} strokeWidth="1.5" fill={WOOD} fillOpacity="0.22">
              <path d="M250 150 l30 -22 l22 22 z" />
              <path d="M290 150 l26 -30 l24 30 z" />
            </g>
            <text x="238" y="112" fill={WOOD} fontFamily={MONO} fontSize="9" letterSpacing="0.6">
              SIZED FOR TRANSPORT
            </text>
            <text x="12" y="252" fill={LINE} fontFamily={MONO} fontSize="9" letterSpacing="0.6">
              OUTPUT: SPLIT STUMP · CHIP-READY · SPOIL REMAINS
            </text>
          </g>

          {/* Divider */}
          <line x1="400" y1="16" x2="400" y2="258" stroke={LINE} strokeWidth="1" strokeDasharray="8 6" opacity="0.6" />
        </svg>
      </div>
    </figure>
  );
}
