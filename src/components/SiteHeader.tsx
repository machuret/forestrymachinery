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
        <Link href="/" className="group min-w-0 shrink">
          <Mark />
        </Link>

        <nav className="hidden items-center gap-5 xl:flex 2xl:gap-7" aria-label="Primary">
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
            href="/applications/"
            className="font-mono text-[0.7rem] tracking-[0.16em] text-concrete uppercase transition-colors hover:text-hazard"
          >
            Applications
          </Link>
          <Link
            href="/industries/"
            className="font-mono text-[0.7rem] tracking-[0.16em] text-concrete uppercase transition-colors hover:text-hazard"
          >
            Industries
          </Link>
          <Link
            href="/compare/"
            className="font-mono text-[0.7rem] tracking-[0.16em] text-concrete uppercase transition-colors hover:text-hazard"
          >
            Compare
          </Link>
          <details className="group relative">
            <summary className="flex cursor-pointer list-none items-center gap-1.5 font-mono text-[0.7rem] tracking-[0.16em] text-concrete uppercase transition-colors hover:text-hazard">
              Tools
              <span aria-hidden="true" className="text-[0.6rem]">▾</span>
            </summary>
            <div className="absolute top-full right-0 mt-3 w-72 border border-steel-700 bg-steel-900 shadow-2xl shadow-black/60">
              {[
                ["/tutorials/", "Field tutorials", "Setup, commissioning and estimating"],
                ["/operations/", "Operations guides", "Inspection, transport and hardwood"],
                ["/costs/", "What they cost", "Cost drivers and quote comparison"],
                ["/hire-vs-buy/", "Hire or buy?", "The utilisation decision"],
                ["/compatibility/", "Carrier size guide", "What fits your excavator"],
                ["/hydraulic-flow-calculator/", "Flow calculator", "Will your machine run it?"],
                ["/cost-per-stump-calculator/", "Cost per stump", "Grinder economics"],
                ["/cost-per-hectare-calculator/", "Cost per hectare", "Mulching tender rates"],
              ].map(([href, label, note]) => (
                <Link
                  key={href}
                  href={href}
                  className="block border-b border-steel-800 px-4 py-3 last:border-b-0 hover:bg-steel-800"
                >
                  <span className="display block text-[0.9rem] text-bone">{label}</span>
                  <span className="mt-0.5 block text-[0.78rem] text-concrete">{note}</span>
                </Link>
              ))}
            </div>
          </details>
          <Link
            href="/brands/"
            className="font-mono text-[0.7rem] tracking-[0.16em] text-concrete uppercase transition-colors hover:text-hazard"
          >
            Brands
          </Link>
        </nav>

        <div className="flex shrink-0 items-center gap-2 xl:hidden">
          <details className="group">
            <summary className="flex h-9 cursor-pointer list-none items-center gap-2 border border-steel-600 px-3 font-mono text-[0.65rem] tracking-[0.14em] text-bone uppercase transition-colors hover:border-hazard hover:text-hazard [&::-webkit-details-marker]:hidden">
              <span className="relative h-3.5 w-4" aria-hidden="true">
                <span className="absolute top-0 left-0 h-px w-4 bg-current transition-transform group-open:top-[0.4rem] group-open:rotate-45" />
                <span className="absolute top-[0.4rem] left-0 h-px w-4 bg-current group-open:opacity-0" />
                <span className="absolute bottom-0 left-0 h-px w-4 bg-current transition-transform group-open:bottom-[0.4rem] group-open:-rotate-45" />
              </span>
              <span className="sr-only sm:not-sr-only">Menu</span>
            </summary>
            <div className="fixed top-[4.15rem] right-4 left-4 max-h-[calc(100dvh-5.15rem)] overflow-y-auto border border-steel-700 bg-steel-950 shadow-2xl shadow-black/70 sm:right-6 sm:left-auto sm:w-[38rem]">
              <nav aria-label="Mobile and tablet" className="grid sm:grid-cols-2">
                <div className="border-b border-steel-700 p-3 sm:border-r sm:border-b-0">
                  <p className="px-3 py-2 font-mono text-[0.58rem] tracking-[0.2em] text-hazard uppercase">Explore</p>
                  {[
                    ["/forestry-machinery-guide/", "The buyer’s guide"],
                    ["/applications/", "Machinery by application"],
                    ["/industries/", "Machinery by industry"],
                    ["/compare/", "Attachment comparisons"],
                    ["/brands/", "Manufacturers"],
                    ["/tutorials/", "Field tutorials"],
                    ["/operations/", "Operations guides"],
                    ["/costs/", "Costs and ownership"],
                    ["/compatibility/", "Carrier compatibility"],
                  ].map(([href, label]) => (
                    <Link
                      key={href}
                      href={href}
                      className="display block border-t border-steel-800 px-3 py-3 text-lg text-bone transition-colors hover:bg-steel-900 hover:text-hazard"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
                <div className="p-3">
                  <p className="px-3 py-2 font-mono text-[0.58rem] tracking-[0.2em] text-hazard uppercase">Attachment categories</p>
                  {CATEGORY_META.map((category) => (
                    <Link
                      key={category.slug}
                      href={`/${category.slug}/`}
                      className="flex items-center gap-3 border-t border-steel-800 px-3 py-2.5 transition-colors hover:bg-steel-900"
                    >
                      <span className="font-mono text-[0.6rem] text-hazard">{category.code}</span>
                      <span className="display text-base text-bone">{category.label}</span>
                    </Link>
                  ))}
                </div>
              </nav>
            </div>
          </details>
          <Link
            href={SITE.quotePath}
            className="flex shrink-0 items-center bg-hazard px-3 py-2 font-mono text-[0.65rem] font-semibold tracking-[0.12em] text-steel-950 uppercase transition-colors hover:bg-moss-400"
          >
            Quote
          </Link>
        </div>

        <Link
          href={SITE.quotePath}
          className="hidden shrink-0 items-center gap-2 bg-hazard px-4 py-2.5 font-mono text-[0.7rem] font-semibold tracking-[0.14em] text-steel-950 uppercase transition-colors hover:bg-moss-400 xl:flex"
        >
          Request a quote
        </Link>
      </div>
      <div className="h-[3px] hazard-stripes-dim" />
    </header>
  );
}
