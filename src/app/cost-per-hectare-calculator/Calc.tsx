"use client";

import { useUrlState, NumberField, Readout, money } from "@/components/calc/kit";

const INITIAL = {
  haPerHour: 0.35,
  machineRate: 110,
  operatorRate: 65,
  fuel: 38,
  teethPerHour: 18,
  attachmentPerHour: 14,
  mobilisation: 1200,
  jobSize: 12,
  overhead: 18,
  margin: 20,
};

export function Calc() {
  const { state, set } = useUrlState(INITIAL);

  const directHourly =
    state.machineRate + state.operatorRate + state.fuel + state.teethPerHour + state.attachmentPerHour;
  const hoursForJob = state.haPerHour > 0 ? state.jobSize / state.haPerHour : NaN;
  const directJob = directHourly * hoursForJob;
  const withMob = directJob + state.mobilisation;
  const withOverhead = withMob * (1 + state.overhead / 100);
  const sell = withOverhead * (1 + state.margin / 100);

  const costPerHa = state.jobSize > 0 ? withOverhead / state.jobSize : NaN;
  const sellPerHa = state.jobSize > 0 ? sell / state.jobSize : NaN;
  const breakEvenHa = state.haPerHour > 0 ? directHourly / state.haPerHour : NaN;

  return (
    <div className="grid gap-12 lg:grid-cols-[22rem_minmax(0,1fr)]">
      <form className="min-w-0 lg:sticky lg:top-28 lg:self-start" onSubmit={(e) => e.preventDefault()}>
        <div className="border border-steel-700 bg-steel-900 p-6">
          <p className="eyebrow">Productivity</p>
          <div className="mt-6 space-y-5">
            <NumberField
              label="Hectares per hour"
              unit="ha/hr"
              step={0.05}
              value={state.haPerHour}
              onChange={(v) => set("haPerHour", v)}
              hint="Measure it on your own site. Brochure figures are best-case, in light material, on flat ground."
            />
            <NumberField label="Job size" unit="hectares" step={1} value={state.jobSize} onChange={(v) => set("jobSize", v)} />
          </div>

          <p className="eyebrow mt-9">Hourly costs</p>
          <div className="mt-6 space-y-5">
            <NumberField label="Carrier" unit="$/hr" step={5} value={state.machineRate} onChange={(v) => set("machineRate", v)} />
            <NumberField label="Operator" unit="$/hr" step={5} value={state.operatorRate} onChange={(v) => set("operatorRate", v)} />
            <NumberField label="Fuel" unit="$/hr" step={2} value={state.fuel} onChange={(v) => set("fuel", v)} hint="Mulching burns more than general excavation. Do not use your dig rate." />
            <NumberField label="Teeth and tips" unit="$/hr" step={2} value={state.teethPerHour} onChange={(v) => set("teethPerHour", v)} />
            <NumberField label="Attachment capital" unit="$/hr" step={2} value={state.attachmentPerHour} onChange={(v) => set("attachmentPerHour", v)} />
          </div>

          <p className="eyebrow mt-9">Job costs</p>
          <div className="mt-6 space-y-5">
            <NumberField label="Mobilisation" unit="AUD" step={100} value={state.mobilisation} onChange={(v) => set("mobilisation", v)} />
            <NumberField label="Overhead" unit="%" step={1} value={state.overhead} onChange={(v) => set("overhead", v)} />
            <NumberField label="Margin" unit="%" step={1} value={state.margin} onChange={(v) => set("margin", v)} />
          </div>
        </div>
      </form>

      <div className="min-w-0">
        <div className="grid gap-px bg-steel-700 sm:grid-cols-3">
          <Readout label="Tender rate per hectare" value={money(sellPerHa)} emphasis />
          <Readout label="Your cost per hectare" value={money(costPerHa)} />
          <Readout label="Break-even, direct only" value={money(breakEvenHa)} />
        </div>

        <div className="mt-8 grid gap-px bg-steel-700 sm:grid-cols-2">
          {[
            ["Hours on site", Number.isFinite(hoursForJob) ? `${hoursForJob.toFixed(1)} hr` : "—"],
            ["Direct cost, whole job", money(directJob)],
            ["Plus mobilisation", money(withMob)],
            ["Plus overhead", money(withOverhead)],
            ["Quoted total", money(sell)],
            ["Margin, dollars", money(sell - withOverhead)],
          ].map(([k, v]) => (
            <div key={k} className="flex items-baseline justify-between gap-4 bg-steel-950 px-5 py-4">
              <span className="font-mono text-[0.62rem] tracking-[0.14em] text-concrete uppercase">{k}</span>
              <span className="font-mono text-[0.95rem] text-bone">{v}</span>
            </div>
          ))}
        </div>

        {/* Sensitivity: the whole argument for measuring your own output */}
        <div className="relative mt-8 overflow-x-auto border border-steel-700 bg-steel-900">
          <table className="w-full min-w-[32rem] border-collapse text-sm">
            <caption className="border-b border-steel-700 bg-steel-800 px-4 py-3 text-left font-mono text-[0.62rem] tracking-[0.16em] text-hazard uppercase">
              If your real productivity is not {state.haPerHour} ha/hr
            </caption>
            <thead>
              <tr>
                {["Productivity", "Hours on site", "Your cost / ha", "Tender rate / ha", "Margin held"].map((h) => (
                  <th
                    key={h}
                    className="border-l border-steel-800 px-4 py-3 text-left font-mono text-[0.6rem] tracking-[0.12em] text-concrete uppercase first:border-l-0"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[0.5, 0.75, 1, 1.25].map((factor) => {
                const ha = state.haPerHour * factor;
                const hrs = ha > 0 ? state.jobSize / ha : NaN;
                const cost = (directHourly * hrs + state.mobilisation) * (1 + state.overhead / 100);
                const costHa = state.jobSize > 0 ? cost / state.jobSize : NaN;
                // Margin held if the rate stays at the quote you just calculated.
                const held = sellPerHa > 0 ? ((sellPerHa - costHa) / sellPerHa) * 100 : NaN;
                return (
                  <tr key={factor} className={`border-t border-steel-800 ${factor === 1 ? "bg-hazard/8" : ""}`}>
                    <th scope="row" className="px-4 py-3 text-left font-mono text-bone">
                      {ha.toFixed(2)} ha/hr
                      {factor === 1 && <span className="ml-2 text-[0.62rem] text-hazard">YOURS</span>}
                    </th>
                    <td className="border-l border-steel-800 px-4 py-3 font-mono text-concrete">
                      {Number.isFinite(hrs) ? `${hrs.toFixed(1)} hr` : "—"}
                    </td>
                    <td className="border-l border-steel-800 px-4 py-3 font-mono text-concrete">{money(costHa)}</td>
                    <td className="border-l border-steel-800 px-4 py-3 font-mono text-concrete">{money(sellPerHa)}</td>
                    <td
                      className={`border-l border-steel-800 px-4 py-3 font-mono ${
                        held < 0 ? "text-rust" : held < 10 ? "text-hazard" : "text-moss-400"
                      }`}
                    >
                      {Number.isFinite(held) ? `${held.toFixed(0)}%` : "—"}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="mt-8 border-l-[3px] border-hazard bg-steel-900 p-6">
          <p className="font-mono text-[0.62rem] tracking-[0.2em] text-hazard uppercase">Read the productivity claim honestly</p>
          <p className="mt-3 text-[0.95rem] leading-relaxed text-concrete">
            Halve the hectares-per-hour figure and watch the tender rate move. That sensitivity is the whole argument
            for measuring your own output on your own material before you price a job, rather than pricing from a
            brochure figure and discovering the difference on site.
          </p>
        </div>
      </div>
    </div>
  );
}
