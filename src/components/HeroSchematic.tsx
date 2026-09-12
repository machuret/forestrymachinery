/**
 * Blueprint-style schematic of a rotating grapple head, used as the hero's
 * visual anchor. Purely decorative — hidden from assistive technology.
 */
export function HeroSchematic({ className = "" }: { className?: string }) {
  const line = "var(--color-steel-500)";
  const accent = "var(--color-moss-500)";
  const dim = "var(--color-hazard)";

  return (
    <svg
      viewBox="0 0 482 404"
      role="presentation"
      aria-hidden="true"
      focusable="false"
      className={className}
      fill="none"
      strokeLinecap="square"
    >
      {/* Centre lines */}
      <g stroke={line} strokeWidth="1" strokeDasharray="10 6 2 6" opacity="0.55">
        <line x1="210" y1="8" x2="210" y2="396" />
        <line x1="18" y1="250" x2="466" y2="250" />
      </g>

      {/* Mounting bracket */}
      <g stroke={line} strokeWidth="2">
        <rect x="178" y="28" width="64" height="40" />
        <circle cx="194" cy="48" r="6" />
        <circle cx="226" cy="48" r="6" />
        <line x1="210" y1="68" x2="210" y2="96" />
      </g>

      {/* Rotator */}
      <g stroke={accent} strokeWidth="2.5">
        <circle cx="210" cy="116" r="22" />
        <circle cx="210" cy="116" r="11" />
        <path d="M188 116a22 22 0 0 1 22-22" strokeWidth="4" stroke={dim} />
      </g>

      {/* Head body */}
      <path d="M168 138h84l-14 44h-56z" stroke={accent} strokeWidth="2.5" />

      {/* Jaws */}
      <g stroke={accent} strokeWidth="7" strokeLinecap="round">
        <path d="M182 182c-52 18-70 82-30 126" />
        <path d="M238 182c52 18 70 82 30 126" />
      </g>
      <g stroke={accent} strokeWidth="3" strokeLinecap="round" opacity="0.6">
        <path d="M196 186c-40 20-54 72-24 108" />
        <path d="M224 186c40 20 54 72 24 108" />
      </g>

      {/* Load being held */}
      <circle cx="210" cy="266" r="46" stroke={dim} strokeWidth="1.5" strokeDasharray="7 7" opacity="0.8" />

      {/* Saw bar */}
      <g stroke={line} strokeWidth="2">
        <path d="M248 168 358 222l-6 13-110-54z" />
        <line x1="262" y1="180" x2="348" y2="222" strokeDasharray="4 5" />
      </g>

      {/* Horizontal dimension */}
      <g stroke={dim} strokeWidth="1.5">
        <line x1="152" y1="358" x2="268" y2="358" />
        <line x1="152" y1="348" x2="152" y2="368" />
        <line x1="268" y1="348" x2="268" y2="368" />
      </g>
      <text
        x="210"
        y="384"
        textAnchor="middle"
        fill={dim}
        fontFamily="var(--font-mono)"
        fontSize="13"
        letterSpacing="2"
      >
        JAW OPENING
      </text>

      {/* Vertical dimension */}
      <g stroke={dim} strokeWidth="1.5" opacity="0.75">
        <line x1="72" y1="28" x2="72" y2="308" />
        <line x1="62" y1="28" x2="82" y2="28" />
        <line x1="62" y1="308" x2="82" y2="308" />
      </g>
      <text
        x="56"
        y="172"
        textAnchor="middle"
        fill={dim}
        fontFamily="var(--font-mono)"
        fontSize="13"
        letterSpacing="2"
        opacity="0.75"
        transform="rotate(-90 56 172)"
      >
        OVERALL HEIGHT
      </text>

      {/* Callouts */}
      <g stroke={line} strokeWidth="1" opacity="0.8">
        <line x1="232" y1="116" x2="330" y2="96" />
        <circle cx="332" cy="95" r="3" fill={line} stroke="none" />
        <line x1="272" y1="284" x2="344" y2="318" />
        <circle cx="346" cy="319" r="3" fill={line} stroke="none" />
      </g>
      <text x="340" y="82" fill={line} fontFamily="var(--font-mono)" fontSize="12" letterSpacing="1.5">
        360° ROTATION
      </text>
      <text x="300" y="342" fill={line} fontFamily="var(--font-mono)" fontSize="12" letterSpacing="1.5">
        HARDOX TINE
      </text>
    </svg>
  );
}
