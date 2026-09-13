"use client";

import { useUrlState, NumberField, Readout, money } from "@/components/calc/kit";

const INITIAL = {
  price: 45000,
  life: 4000,
  residual: 20,
  stumpsPerHour: 6,
  machineRate: 85,
  operatorRate: 65,
  teethSet: 900,
  teethLife: 120,
  fuel: 22,
  utilisation: 450,
};

export function Calc() {
  const { state, set } = useUrlState(INITIAL);

  const capitalToRecover = state.price * (1 - state.residual / 100);
  const attachmentPerHour = state.life > 0 ? capitalToRecover / state.life : 0;
  const teethPerHour = state.teethLife > 0 ? state.teethSet / state.teethLife : 0;
  const hourly = attachmentPerHour + teethPerHour + state.machineRate + state.operatorRate + state.fuel;
  const perStump = state.stumpsPerHour > 0 ? hourly / state.stumpsPerHour : NaN;
  const perYear = hourly * state.utilisation;
  const stumpsPerYear = state.stumpsPerHour * state.utilisation;

  const rows: Array<[string, number]> = [
    ["Attachment capital", attachmentPerHour],
    ["Teeth and tips", teethPerHour],
    ["Carrier", state.machineRate],
    ["Operator", state.operatorRate],
    ["Fuel", state.fuel],
  ];

  return (
    <div className="grid gap-12 lg:grid-cols-[22rem_minmax(0,1fr)]">
      <form className="min-w-0 lg:sticky lg:top-28 lg:self-start" onSubmit={(e) => e.preventDefault()}>
        <div className="border border-steel-700 bg-steel-900 p-6">
          <p className="eyebrow">The attachment</p>
          <div className="mt-6 space-y-5">
            <NumberField label="Purchase price" unit="AUD" step={1000} value={state.price} onChange={(v) => set("price", v)} />
            <NumberField label="Expected life" unit="hours" step={250} value={state.life} onChange={(v) => set("life", v)} />
            <NumberField label="Residual value" unit="%" step={5} value={state.residual} onChange={(v) => set("residual", v)} />
          </div>

          <p className="eyebrow mt-9">Hourly costs</p>
          <div className="mt-6 space-y-5">
            <NumberField label="Carrier" unit="$/hr" step={5} value={state.machineRate} onChange={(v) => set("machineRate", v)} hint="Own-cost or hire rate for the excavator." />
            <NumberField label="Operator" unit="$/hr" step={5} value={state.operatorRate} onChange={(v) => set("operatorRate", v)} />
            <NumberField label="Fuel" unit="$/hr" step={1} value={state.fuel} onChange={(v) => set("fuel", v)} />
          </div>

          <p className="eyebrow mt-9">Wear and output</p>
          <div className="mt-6 space-y-5">
            <NumberField label="Teeth set cost" unit="AUD" step={50} value={state.teethSet} onChange={(v) => set("teethSet", v)} />
            <NumberField label="Teeth set life" unit="hours" step={10} value={state.teethLife} onChange={(v) => set("teethLife", v)} hint="Falls sharply in stony or sandy ground." />
            <NumberField label="Stumps per hour" step={0.5} value={state.stumpsPerHour} onChange={(v) => set("stumpsPerHour", v)} />
            <NumberField label="Annual hours" unit="hours" step={50} value={state.utilisation} onChange={(v) => set("utilisation", v)} />
          </div>
        </div>
      </form>

      <div className="min-w-0">
        <div className="grid gap-px bg-steel-700 sm:grid-cols-3">
          <Readout label="Cost per stump" value={money(perStump)} emphasis />
          <Readout label="Cost per hour" value={money(hourly)} />
          <Readout label="Stumps per year" value={Math.round(stumpsPerYear).toLocaleString("en-AU")} />
        </div>

        <div
            className="relative mt-8 overflow-x-auto border border-steel-700 bg-steel-900"
            tabIndex={0}
            role="region"
            aria-label="Scrollable table"
          >
          <table className="w-full min-w-[30rem] border-collapse text-sm">
            <thead>
              <tr>
                {["Cost line", "$/hour", "$/stump", "Share"].map((h) => (
                  <th
                    key={h}
                    className="border-l border-steel-700 bg-steel-800 px-4 py-3.5 text-left font-mono text-[0.62rem] tracking-[0.14em] text-hazard uppercase first:border-l-0"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map(([label, v]) => {
                const share = hourly > 0 ? (v / hourly) * 100 : 0;
                return (
                  <tr key={label} className="border-t border-steel-800">
                    <th scope="row" className="px-4 py-3.5 text-left font-semibold text-bone">
                      {label}
                    </th>
                    <td className="border-l border-steel-800 px-4 py-3.5 font-mono text-concrete">{money(v)}</td>
                    <td className="border-l border-steel-800 px-4 py-3.5 font-mono text-concrete">
                      {state.stumpsPerHour > 0 ? money(v / state.stumpsPerHour) : "—"}
                    </td>
                    <td className="border-l border-steel-800 px-4 py-3.5">
                      <span className="flex items-center gap-3">
                        <span className="h-2 w-24 bg-steel-800">
                          <span className="block h-full bg-hazard" style={{ width: `${Math.min(100, share)}%` }} />
                        </span>
                        <span className="font-mono text-[0.72rem] text-concrete">{share.toFixed(0)}%</span>
                      </span>
                    </td>
                  </tr>
                );
              })}
              <tr className="border-t-2 border-steel-600 bg-steel-850">
                <th scope="row" className="px-4 py-4 text-left font-semibold text-bone">
                  Total
                </th>
                <td className="border-l border-steel-800 px-4 py-4 font-mono text-bone">{money(hourly)}</td>
                <td className="border-l border-steel-800 px-4 py-4 font-mono text-hazard">{money(perStump)}</td>
                <td className="border-l border-steel-800 px-4 py-4 font-mono text-concrete">
                  {money(perYear)} / year
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-5 text-[0.88rem] leading-relaxed text-muted">
          Every figure above is yours to enter. No attachment prices are published on this site, because attachment
          pricing moves with exchange rate, spec and carrier bracket — a published number would be wrong within a
          quarter.
        </p>
      </div>
    </div>
  );
}
