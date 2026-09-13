"use client";

import { useCallback, useEffect, useState } from "react";

/**
 * Calculator state lives in the query string so a result can be pasted into an
 * email or a tender note and come back identical.
 */
export function useUrlState<T extends Record<string, string | number | boolean>>(initial: T) {
  const [state, setState] = useState<T>(initial);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if ([...params.keys()].length) {
      const next = { ...initial };
      for (const key of Object.keys(initial) as Array<keyof T>) {
        const raw = params.get(String(key));
        if (raw === null) continue;
        const current = initial[key];
        next[key] = (
          typeof current === "number" ? Number(raw) : typeof current === "boolean" ? raw === "1" : raw
        ) as T[keyof T];
      }
      setState(next);
    }
    setHydrated(true);
    // Initial values are a literal defined at module scope; re-running on it is not wanted.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    const params = new URLSearchParams();
    for (const [k, v] of Object.entries(state)) {
      params.set(k, typeof v === "boolean" ? (v ? "1" : "0") : String(v));
    }
    window.history.replaceState(null, "", `?${params.toString()}`);
  }, [state, hydrated]);

  const set = useCallback(<K extends keyof T>(key: K, value: T[K]) => {
    setState((s) => ({ ...s, [key]: value }));
  }, []);

  return { state, set, hydrated };
}

const fieldBase =
  "mt-2 w-full min-w-0 border border-steel-600 bg-steel-950 px-4 py-3 font-mono text-[0.95rem] text-bone outline-none transition-colors placeholder:text-muted focus:border-hazard";

export function NumberField({
  label,
  unit,
  value,
  onChange,
  step = 1,
  min = 0,
  hint,
}: {
  label: string;
  unit?: string;
  value: number;
  onChange: (n: number) => void;
  step?: number;
  min?: number;
  hint?: string;
}) {
  const id = label.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  return (
    <div>
      <label htmlFor={id} className="flex items-baseline justify-between gap-2">
        <span className="font-mono text-[0.62rem] tracking-[0.16em] text-concrete uppercase">{label}</span>
        {unit && <span className="font-mono text-[0.6rem] text-muted">{unit}</span>}
      </label>
      <input
        id={id}
        type="number"
        inputMode="decimal"
        step={step}
        min={min}
        value={Number.isFinite(value) ? value : ""}
        onChange={(e) => onChange(e.target.value === "" ? 0 : Number(e.target.value))}
        className={fieldBase}
      />
      {hint && <p className="mt-2 text-[0.78rem] leading-relaxed text-muted">{hint}</p>}
    </div>
  );
}

export function ToggleField({
  label,
  checked,
  onChange,
  hint,
}: {
  label: string;
  checked: boolean;
  onChange: (b: boolean) => void;
  hint?: string;
}) {
  return (
    <label className="flex cursor-pointer items-start gap-3 border border-steel-700 bg-steel-950 p-4 transition-colors hover:border-steel-600">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-0.5 h-4 w-4 shrink-0 accent-[#f5a623]"
      />
      <span>
        <span className="block font-mono text-[0.68rem] tracking-[0.1em] text-bone uppercase">{label}</span>
        {hint && <span className="mt-1 block text-[0.8rem] leading-relaxed text-concrete">{hint}</span>}
      </span>
    </label>
  );
}

export function Readout({ label, value, unit, emphasis }: { label: string; value: string; unit?: string; emphasis?: boolean }) {
  return (
    <div className={`p-5 ${emphasis ? "bg-hazard text-steel-950" : "bg-steel-850"}`}>
      <p
        className={`font-mono text-[0.6rem] tracking-[0.18em] uppercase ${emphasis ? "text-steel-950/70" : "text-concrete"}`}
      >
        {label}
      </p>
      <p className={`display mt-2 text-3xl ${emphasis ? "text-steel-950" : "text-bone"}`}>
        {value}
        {unit && <span className="ml-1 text-lg opacity-70">{unit}</span>}
      </p>
    </div>
  );
}

export function money(n: number): string {
  if (!Number.isFinite(n)) return "—";
  return n >= 100
    ? `$${Math.round(n).toLocaleString("en-AU")}`
    : `$${n.toFixed(2)}`;
}
