import Link from "next/link";
import type { ReactNode } from "react";

interface Crumb {
  label: string;
  href: string;
}

interface Props {
  eyebrow: string;
  title: string;
  lead?: ReactNode;
  /** Final, non-linked breadcrumb label. */
  crumb: string;
  /** Intermediate crumbs between Home and `crumb`. */
  trail?: Crumb[];
  /** Optional right-hand column: stat rail, schematic, photograph. */
  aside?: ReactNode;
}

export function PageHero({ eyebrow, title, lead, crumb, trail = [], aside }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-steel-700 bg-steel-900 plate">
      <div aria-hidden="true" className="absolute inset-0 bg-grid opacity-60" />
      <div
        aria-hidden="true"
        className="absolute -top-32 -right-24 h-[26rem] w-[26rem] rounded-full bg-moss-600/12 blur-[110px]"
      />

      <div className="relative mx-auto max-w-[88rem] px-4 pt-10 pb-14 sm:px-6 sm:pt-14 sm:pb-18 lg:px-10">
        <nav aria-label="Breadcrumb" className="font-mono text-[0.65rem] tracking-[0.16em] text-concrete uppercase">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="transition-colors hover:text-hazard">
                Home
              </Link>
            </li>
            {trail.map((c) => (
              <li key={c.href} className="flex items-center gap-2">
                <span aria-hidden="true" className="text-steel-500">
                  /
                </span>
                <Link href={c.href} className="transition-colors hover:text-hazard">
                  {c.label}
                </Link>
              </li>
            ))}
            <li aria-hidden="true" className="text-steel-500">
              /
            </li>
            <li className="text-hazard">{crumb}</li>
          </ol>
        </nav>

        <div className={aside ? "mt-10 grid gap-12 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-end" : "mt-10"}>
          <div>
            <p className="eyebrow flex items-center gap-3">
              <span className="inline-block h-2 w-2 rotate-45 bg-hazard" />
              {eyebrow}
            </p>
            <h1 className="display mt-5 max-w-4xl text-[2.35rem] leading-[0.95] text-bone sm:text-5xl lg:text-[4.1rem]">
              {title}
            </h1>
            {lead && <div className="mt-7 max-w-2xl text-lg leading-relaxed text-bone/80">{lead}</div>}
          </div>
          {aside}
        </div>
      </div>

      <div className="h-[3px] hazard-stripes-dim" />
    </section>
  );
}
