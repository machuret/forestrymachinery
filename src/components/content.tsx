import Link from "next/link";
import type { ReactNode } from "react";

/** Section heading with the hazard rule used across long-form pages. */
export function Section({
  id,
  title,
  lead,
  children,
  className = "",
}: {
  id?: string;
  title: string;
  lead?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`mt-16 scroll-mt-28 ${className}`}>
      <div className="rule-heavy" />
      <h2 className="display mt-5 text-3xl leading-none text-bone sm:text-4xl">{title}</h2>
      {lead && <div className="mt-5 max-w-3xl text-[1.02rem] leading-relaxed text-concrete">{lead}</div>}
      <div className="mt-8">{children}</div>
    </section>
  );
}

export function Prose({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`max-w-3xl space-y-5 text-[1.02rem] leading-relaxed text-concrete ${className}`}>{children}</div>;
}

/** Answer-first block for a question heading, sized for a featured snippet. */
export function ShortAnswer({ children }: { children: ReactNode }) {
  return (
    <div className="border-l-[3px] border-hazard bg-steel-900 p-6 sm:p-8">
      <p className="font-mono text-[0.62rem] tracking-[0.2em] text-hazard uppercase">The short answer</p>
      <div className="mt-4 max-w-4xl text-lg leading-relaxed text-bone sm:text-xl">{children}</div>
    </div>
  );
}

export function Callout({
  label,
  tone = "note",
  children,
}: {
  label: string;
  tone?: "note" | "warn";
  children: ReactNode;
}) {
  const border = tone === "warn" ? "border-rust" : "border-moss-500";
  const text = tone === "warn" ? "text-rust-text" : "text-moss-400";
  return (
    <div className={`border-l-[3px] ${border} bg-steel-900 p-6`}>
      <p className={`font-mono text-[0.62rem] tracking-[0.2em] uppercase ${text}`}>{label}</p>
      <div className="mt-3 max-w-3xl text-[0.98rem] leading-relaxed text-concrete">{children}</div>
    </div>
  );
}

/** Numbered card grid — used for scenarios, cost drivers and mistakes. */
export function NumberedGrid({
  items,
  columns = 3,
}: {
  items: Array<{ title: ReactNode; body: ReactNode }>;
  columns?: 2 | 3;
}) {
  return (
    <ol
      className={`grid gap-px bg-steel-700 ${
        columns === 2
          ? "md:grid-cols-2 [&>*:last-child:nth-child(odd)]:md:col-span-2"
          : "md:grid-cols-3 [&>*:last-child:nth-child(3n+2)]:md:col-span-2"
      }`}
    >
      {items.map((n, i) => (
        <li key={i} className="bg-steel-950 p-6 sm:p-7">
          <span className="font-mono text-[0.7rem] tracking-[0.18em] text-hazard">
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="display mt-4 text-xl leading-tight text-bone">{n.title}</h3>
          <div className="mt-3 text-[0.95rem] leading-relaxed text-concrete">{n.body}</div>
        </li>
      ))}
    </ol>
  );
}

/** Buyer checklist. Deliberately actionable rather than a summary. */
export function Checklist({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="border border-steel-700 bg-steel-900">
      <div className="h-[3px] hazard-stripes-dim" />
      <div className="p-6 sm:p-8">
        <h3 className="font-mono text-[0.62rem] tracking-[0.2em] text-hazard uppercase">{title}</h3>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {items.map((i) => (
            <li key={i} className="flex gap-3 text-[0.95rem] leading-relaxed text-bone/85">
              <span aria-hidden="true" className="mt-1 h-3.5 w-3.5 shrink-0 border border-hazard" />
              {i}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function RedFlags({ items }: { items: Array<{ flag: string; why: string }> }) {
  return (
    <ul className="grid gap-px bg-steel-700 md:grid-cols-2">
      {items.map((f) => (
        <li key={f.flag} className="bg-steel-950 p-6">
          <p className="flex items-start gap-3">
            <span aria-hidden="true" className="mt-1 h-2 w-2 shrink-0 rotate-45 bg-rust" />
            <span className="display text-lg leading-tight text-bone">{f.flag}</span>
          </p>
          <p className="mt-3 pl-5 text-[0.93rem] leading-relaxed text-concrete">{f.why}</p>
        </li>
      ))}
    </ul>
  );
}

export interface Qa {
  q: string;
  a: ReactNode;
}

export function FaqBlock({ items, title = "Frequently asked questions" }: { items: Qa[]; title?: string }) {
  return (
    <div className="border-t border-steel-700">
      {items.map((f, i) => (
        <details key={f.q} className="faq group border-b border-steel-700" open={i === 0}>
          <summary className="flex cursor-pointer list-none items-start gap-4 py-5 transition-colors hover:bg-steel-900">
            <span className="mt-1 font-mono text-[0.7rem] text-hazard">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="display flex-1 text-lg leading-tight text-bone sm:text-xl">{f.q}</h3>
            <span
              aria-hidden="true"
              className="faq-sign mt-0.5 shrink-0 text-xl leading-none text-hazard transition-transform duration-200"
            >
              +
            </span>
          </summary>
          <div className="max-w-3xl pb-6 pl-10 text-[1rem] leading-relaxed text-concrete sm:pr-10">{f.a}</div>
        </details>
      ))}
      <span className="sr-only">{title}</span>
    </div>
  );
}

/** Contextual next-step links, with descriptive anchors. */
export function NextSteps({ items }: { items: Array<{ href: string; label: string; why: string }> }) {
  return (
    <div className="grid gap-px bg-steel-700 sm:grid-cols-2 lg:grid-cols-3 [&>*:last-child:nth-child(odd)]:sm:col-span-2 [&>*:last-child:nth-child(3n+2)]:lg:col-span-2 [&>*:last-child:nth-child(3n+1)]:sm:col-span-2 [&>*:last-child:nth-child(3n+1)]:lg:col-span-1">
      {items.map((l) => (
        <Link key={l.href} href={l.href} className="group bg-steel-950 p-6 transition-colors hover:bg-steel-900">
          <span className="display block text-lg leading-tight text-bone group-hover:text-hazard">{l.label}</span>
          <span className="mt-2 block text-[0.9rem] leading-relaxed text-concrete">{l.why}</span>
          <span aria-hidden="true" className="mt-4 block font-mono text-[0.62rem] tracking-[0.16em] text-hazard uppercase">
            Read next →
          </span>
        </Link>
      ))}
    </div>
  );
}
