import Link from "next/link";
import { CATEGORY_META } from "@/lib/categories";
import { SITE } from "@/lib/site";

function Mark() {
  return (
    <span className="flex items-center gap-2.5">
      <svg width="26" height="26" viewBox="0 0 26 26" aria-hidden="true" className="shrink-0">
        <rect x="0.5" y="0.5" width="25" height="25" fill="none" stroke="var(--color-hazard)" />
        <path d="M13 4.5 19.5 21h-13L13 4.5Z" fill="var(--color-moss-500)" />
        <path d="M13 10.5 16.8 21H9.2L13 10.5Z" fill="var(--color-steel-950)" />
        <rect x="11.8" y="17" width="2.4" height="5" fill="var(--color-hazard)" />
      </svg>
      <span className="leading-none">
        <span className="display block text-[0.95rem] tracking-wide text-bone">Machinery Specialist</span>
        <span className="mt-0.5 block font-mono text-[0.58rem] tracking-[0.2em] text-concrete uppercase">
          Forestry Attachment Guide
        </span>
      </span>
    </span>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-steel-700 bg-steel-950/92 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[88rem] items-center justify-between gap-4 px-4 sm:px-6 lg:px-10">
        <Link href="/" className="group">
          <Mark />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          <Link
            href="/forestry-machinery-guide/"
            className="font-mono text-[0.7rem] tracking-[0.16em] text-concrete uppercase transition-colors hover:text-hazard"
          >
            The Guide
          </Link>
          <details className="group relative">
            <summary className="flex cursor-pointer list-none items-center gap-1.5 font-mono text-[0.7rem] tracking-[0.16em] text-concrete uppercase transition-colors hover:text-hazard">
              Categories
              <span aria-hidden="true" className="text-[0.6rem]">▾</span>
            </summary>
            <div className="absolute top-full right-0 mt-3 w-80 border border-steel-700 bg-steel-900 shadow-2xl shadow-black/60">
              {CATEGORY_META.map((c) => (
                <Link
                  key={c.slug}
                  href={`/${c.slug}/`}
                  className="flex items-baseline gap-3 border-b border-steel-800 px-4 py-3 last:border-b-0 hover:bg-steel-800"
                >
                  <span className="font-mono text-[0.65rem] text-hazard">{c.code}</span>
                  <span className="display text-[0.9rem] text-bone">{c.label}</span>
                </Link>
              ))}
            </div>
          </details>
          <Link
            href="/compatibility/"
            className="font-mono text-[0.7rem] tracking-[0.16em] text-concrete uppercase transition-colors hover:text-hazard"
          >
            Compatibility
          </Link>
        </nav>

        <Link
          href={SITE.quotePath}
          className="hidden shrink-0 items-center gap-2 bg-hazard px-4 py-2.5 font-mono text-[0.7rem] font-semibold tracking-[0.14em] text-steel-950 uppercase transition-colors hover:bg-moss-400 sm:flex"
        >
          Request a quote
        </Link>

        <Link
          href={SITE.quotePath}
          className="flex shrink-0 items-center bg-hazard px-3 py-2 font-mono text-[0.65rem] font-semibold tracking-[0.12em] text-steel-950 uppercase sm:hidden"
        >
          Quote
        </Link>
      </div>
      <div className="h-[3px] hazard-stripes-dim" />
    </header>
  );
}
