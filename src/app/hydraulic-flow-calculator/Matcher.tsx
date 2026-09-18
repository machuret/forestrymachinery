"use client";

import Link from "next/link";
import { useUrlState, NumberField, ToggleField } from "@/components/calc/kit";
import { CATEGORY_META } from "@/lib/categories";

/**
 * Published carrier ranges and circuit requirements, taken from the guide
 * bodies. Flow windows are indicative only — they narrow the shortlist, they do
 * not replace the model-specific figure on a spec sheet.
 */
interface Requirement {
  slug: string;
  from: number;
  to: number;
  circuit: "hammerLine" | "caseDrain" | "doubleActing" | "dualCircuit";
  circuitLabel: string;
  indicativeFlow: [number, number];
}

const REQUIREMENTS: Requirement[] = [
  { slug: "tree-shears-guide", from: 2, to: 50, circuit: "doubleActing", circuitLabel: "Double-acting", indicativeFlow: [20, 120] },
  { slug: "stump-cutter-guide", from: 11.5, to: 28, circuit: "caseDrain", circuitLabel: "Hammer line + case drain", indicativeFlow: [60, 150] },
  { slug: "stump-grinder-guide", from: 1.5, to: 30, circuit: "caseDrain", circuitLabel: "Hammer line + case drain", indicativeFlow: [40, 150] },
  { slug: "forestry-mulcher-guide", from: 1, to: 30, circuit: "hammerLine", circuitLabel: "Single-acting hammer line", indicativeFlow: [30, 150] },
  { slug: "grapple-saw-guide", from: 3, to: 30, circuit: "dualCircuit", circuitLabel: "Dual circuit", indicativeFlow: [15, 160] },
  { slug: "log-grab-guide", from: 13, to: 25, circuit: "doubleActing", circuitLabel: "Double-acting + rotation", indicativeFlow: [25, 100] },
  { slug: "mechanical-pruning-guide", from: 2, to: 20, circuit: "hammerLine", circuitLabel: "Varies by tool", indicativeFlow: [20, 100] },
  { slug: "tillage-guide", from: 2, to: 20, circuit: "hammerLine", circuitLabel: "Hammer line / double-acting", indicativeFlow: [20, 110] },
];

const INITIAL = {
  weight: 8,
  flow: 70,
  pressure: 200,
  hammerLine: true,
  caseDrain: false,
  doubleActing: true,
  dualCircuit: false,
};

type Verdict = "fit" | "edge" | "weight" | "circuit" | "flow";

const VERDICTS: Record<Verdict, { label: string; tone: string; rank: number }> = {
  fit: { label: "Fits", tone: "border-moss-500 bg-moss-600/12", rank: 0 },
  edge: { label: "Edge of range", tone: "border-hazard bg-hazard/10", rank: 1 },
  flow: { label: "Flow is marginal", tone: "border-hazard bg-hazard/8", rank: 2 },
  circuit: { label: "Circuit not available", tone: "border-steel-600 bg-steel-900", rank: 3 },
  weight: { label: "Outside carrier range", tone: "border-steel-700 bg-steel-900", rank: 4 },
};

export function Matcher() {
  const { state, set } = useUrlState(INITIAL);

  const results = REQUIREMENTS.map((r) => {
    const meta = CATEGORY_META.find((c) => c.slug === r.slug)!;
    const hasCircuit = state[r.circuit];

    // Within 15% of a published bound counts as the edge of the range.
    const margin = (r.to - r.from) * 0.15;
    let verdict: Verdict;
    let reason: string;

    if (state.weight < r.from || state.weight > r.to) {
      verdict = "weight";
      reason = `Published range is ${r.from}–${r.to} t. A ${state.weight} t carrier sits outside it.`;
    } else if (!hasCircuit) {
      verdict = "circuit";
      reason = `Needs ${r.circuitLabel.toLowerCase()}, which you have not listed on this machine.`;
    } else if (state.flow < r.indicativeFlow[0]) {
      verdict = "flow";
      reason = `${state.flow} L/min is below the indicative ${r.indicativeFlow[0]}–${r.indicativeFlow[1]} L/min window. The tool will run slow, if at all.`;
    } else if (state.weight < r.from + margin || state.weight > r.to - margin) {
      verdict = "edge";
      reason = `Inside the ${r.from}–${r.to} t range but near a bound. Model choice matters more than usual here.`;
    } else {
      verdict = "fit";
      reason = `Carrier sits mid-range for ${r.from}–${r.to} t, and the circuit is available.`;
    }

    return { r, meta, verdict, reason };
  }).sort((a, b) => VERDICTS[a.verdict].rank - VERDICTS[b.verdict].rank);

  const fits = results.filter((x) => x.verdict === "fit" || x.verdict === "edge").length;

  return (
    <div className="grid gap-12 lg:grid-cols-[22rem_minmax(0,1fr)]">
      {/* Inputs */}
      <form className="min-w-0 lg:sticky lg:top-28 lg:self-start" onSubmit={(e) => e.preventDefault()}>
        <div className="border border-steel-700 bg-steel-900 p-6">
          <p className="eyebrow">The three numbers</p>
          <div className="mt-6 space-y-5">
            <NumberField
              label="Operating weight"
              unit="tonnes"
              step={0.5}
              value={state.weight}
              onChange={(v) => set("weight", v)}
            />
            <NumberField
              label="Auxiliary flow"
              unit="L/min"
              step={5}
              value={state.flow}
              onChange={(v) => set("flow", v)}
              hint="Read it off the machine plate, not the brochure."
            />
            <NumberField
              label="Working pressure"
              unit="bar"
              step={10}
              value={state.pressure}
              onChange={(v) => set("pressure", v)}
            />
          </div>

          <p className="eyebrow mt-9">Circuits fitted</p>
          <div className="mt-4 space-y-3">
            <ToggleField
              label="Hammer line"
              checked={state.hammerLine}
              onChange={(v) => set("hammerLine", v)}
              hint="Single-acting: oil out, oil back."
            />
            <ToggleField
              label="Case drain"
              checked={state.caseDrain}
              onChange={(v) => set("caseDrain", v)}
              hint="Third low-pressure return. Piston motors need it."
            />
            <ToggleField
              label="Double-acting"
              checked={state.doubleActing}
              onChange={(v) => set("doubleActing", v)}
              hint="Powered both ways, so the tool opens and closes."
            />
            <ToggleField
              label="Dual circuit"
              checked={state.dualCircuit}
              onChange={(v) => set("dualCircuit", v)}
              hint="Separate saw and grapple supplies."
            />
          </div>
        </div>
      </form>

      {/* Results */}
      <div className="min-w-0">
        <div className="flex flex-wrap items-baseline gap-4 border border-steel-700 bg-steel-900 p-6">
          <span className="display text-5xl text-hazard">{fits}</span>
          <span className="max-w-md text-[0.95rem] leading-relaxed text-concrete">
            of eight categories suit this {state.weight} t carrier at {state.flow} L/min with the circuits you have listed.
            Add a case drain or a second circuit and the list changes.
          </span>
        </div>

        <ul className="mt-6 space-y-3">
          {results.map(({ r, meta, verdict, reason }) => (
            <li key={r.slug}>
              <div
                className={`relative flex flex-col gap-3 border-y border-r border-l-[3px] border-y-steel-800 border-r-steel-800 p-5 transition-colors hover:border-r-hazard sm:flex-row sm:items-center sm:justify-between ${VERDICTS[verdict].tone}`}
              >
                <span className="min-w-0">
                  <span className="flex items-center gap-3">
                    <span className="font-mono text-[0.65rem] text-hazard">{meta.code}</span>
                    {/* Only the category name is the link text; the row stays clickable. */}
                    <span className="display text-xl text-bone">
                      <Link href={`/${r.slug}/`} className="after:absolute after:inset-0">
                        {meta.label}
                      </Link>
                    </span>
                  </span>
                  <span className="mt-2 block text-[0.9rem] leading-relaxed text-concrete">{reason}</span>
                </span>
                <span
                  aria-hidden="true"
                  className="shrink-0 font-mono text-[0.62rem] tracking-[0.14em] text-bone uppercase"
                >
                  {VERDICTS[verdict].label} →
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
