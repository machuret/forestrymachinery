"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { CATEGORY_META } from "@/lib/categories";
import { submitQuote, type QuoteState } from "./actions";

const initialState: QuoteState = { status: "idle", message: "" };

const fieldClass =
  "mt-2 w-full border border-steel-600 bg-steel-950 px-4 py-3 text-[0.95rem] text-bone outline-none transition-colors placeholder:text-steel-500 focus:border-hazard";

const labelClass = "block font-mono text-[0.62rem] tracking-[0.18em] text-concrete uppercase";

function Submit() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center gap-2 bg-hazard px-7 py-4 font-mono text-[0.72rem] font-semibold tracking-[0.16em] text-steel-950 uppercase transition-colors hover:bg-moss-400 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {pending ? "Sending…" : "Send the request →"}
    </button>
  );
}

function Error({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-2 font-mono text-[0.68rem] text-rust">{message}</p>;
}

export function QuoteForm() {
  const [state, formAction] = useActionState(submitQuote, initialState);

  if (state.status === "success") {
    return (
      <div className="border border-moss-600 bg-steel-900 p-8 sm:p-10">
        <p className="eyebrow text-moss-400">Request received</p>
        <p className="display mt-4 text-3xl leading-tight text-bone">Thanks. We have your specs.</p>
        <p className="mt-4 max-w-lg text-[0.98rem] leading-relaxed text-concrete">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} noValidate className="border border-steel-700 bg-steel-900 p-6 sm:p-9">
      <fieldset className="border-0 p-0">
        <legend className="eyebrow">Step 01 — Who you are</legend>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div>
            <label className={labelClass} htmlFor="name">
              Name *
            </label>
            <input id="name" name="name" className={fieldClass} placeholder="Full name" autoComplete="name" />
            <Error message={state.fieldErrors?.name} />
          </div>
          <div>
            <label className={labelClass} htmlFor="company">
              Business
            </label>
            <input
              id="company"
              name="company"
              className={fieldClass}
              placeholder="Company or trading name"
              autoComplete="organization"
            />
          </div>
          <div>
            <label className={labelClass} htmlFor="email">
              Email *
            </label>
            <input id="email" name="email" type="email" className={fieldClass} placeholder="you@business.com.au" autoComplete="email" />
            <Error message={state.fieldErrors?.email} />
          </div>
          <div>
            <label className={labelClass} htmlFor="phone">
              Phone
            </label>
            <input id="phone" name="phone" type="tel" className={fieldClass} placeholder="04xx xxx xxx" autoComplete="tel" />
          </div>
        </div>
      </fieldset>

      <fieldset className="mt-12 border-0 p-0">
        <legend className="eyebrow">Step 02 — The three numbers</legend>
        <p className="mt-3 max-w-xl text-[0.92rem] leading-relaxed text-concrete">
          Operating weight, auxiliary flow and working pressure. With these, the shortlist takes about ten minutes.
          Without them, it takes a week of emails.
        </p>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <label className={labelClass} htmlFor="carrierMake">
              Carrier make / model
            </label>
            <input id="carrierMake" name="carrierMake" className={fieldClass} placeholder="e.g. Kubota U55" />
          </div>
          <div>
            <label className={labelClass} htmlFor="carrierWeight">
              Operating weight *
            </label>
            <input id="carrierWeight" name="carrierWeight" className={fieldClass} placeholder="tonnes" inputMode="decimal" />
            <Error message={state.fieldErrors?.carrierWeight} />
          </div>
          <div>
            <label className={labelClass} htmlFor="flow">
              Auxiliary flow
            </label>
            <input id="flow" name="flow" className={fieldClass} placeholder="L/min" inputMode="decimal" />
          </div>
          <div>
            <label className={labelClass} htmlFor="pressure">
              Working pressure
            </label>
            <input id="pressure" name="pressure" className={fieldClass} placeholder="bar" inputMode="decimal" />
          </div>
        </div>
      </fieldset>

      <fieldset className="mt-12 border-0 p-0">
        <legend className="eyebrow">Step 03 — The work</legend>
        <div className="mt-6 grid gap-6">
          <div>
            <label className={labelClass} htmlFor="category">
              Category of interest
            </label>
            <select id="category" name="category" defaultValue="" className={fieldClass}>
              <option value="">Not sure yet — help me choose</option>
              {CATEGORY_META.map((c) => (
                <option key={c.slug} value={c.label}>
                  {c.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelClass} htmlFor="notes">
              What does the work look like?
            </label>
            <textarea
              id="notes"
              name="notes"
              rows={5}
              className={fieldClass}
              placeholder="Stem diameter, site conditions, hours a year, whether material can be left behind."
            />
          </div>
        </div>
      </fieldset>

      {state.status === "error" && (
        <p className="mt-8 border border-rust/60 bg-rust/10 px-4 py-3 font-mono text-[0.7rem] tracking-[0.1em] text-rust uppercase">
          {state.message}
        </p>
      )}

      <div className="mt-10 flex flex-wrap items-center gap-5">
        <Submit />
        <p className="font-mono text-[0.62rem] tracking-[0.12em] text-steel-500 uppercase">
          No pricing is published. We quote against your configuration.
        </p>
      </div>
    </form>
  );
}
