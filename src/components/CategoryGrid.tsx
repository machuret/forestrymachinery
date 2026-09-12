import Link from "next/link";
import { CATEGORY_META, type CategoryMeta } from "@/lib/categories";

function Card({ c }: { c: CategoryMeta }) {
  return (
    <Link
      href={`/${c.slug}/`}
      className="group relative flex flex-col justify-between overflow-hidden border border-steel-700 bg-steel-900 p-6 transition-colors duration-200 hover:border-hazard sm:p-7"
    >
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-hazard transition-transform duration-300 group-hover:scale-x-100"
      />
      <div>
        <div className="flex items-start justify-between gap-4">
          <span className="font-mono text-[0.7rem] tracking-[0.18em] text-hazard">{c.code}</span>
          <span className="font-mono text-[0.65rem] tracking-[0.12em] text-steel-500 uppercase">{c.carrier}</span>
        </div>
        <h3 className="display mt-5 text-2xl leading-none text-bone transition-colors group-hover:text-hazard sm:text-[1.75rem]">
          {c.label}
        </h3>
        <p className="mt-3 text-[0.92rem] leading-relaxed text-concrete">{c.job}</p>
      </div>
      <span className="mt-7 inline-flex items-center gap-2 font-mono text-[0.65rem] tracking-[0.16em] text-bone/70 uppercase transition-colors group-hover:text-hazard">
        Read the guide
        <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">
          →
        </span>
      </span>
    </Link>
  );
}

export function CategoryGrid({ exclude }: { exclude?: string }) {
  const items = CATEGORY_META.filter((c) => c.slug !== exclude);
  return (
    <div className="grid gap-px bg-steel-700 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((c) => (
        <Card key={c.slug} c={c} />
      ))}
      {items.length % 4 !== 0 && (
        <Link
          href="/forestry-machinery-guide/"
          className="group hidden flex-col justify-between bg-steel-850 p-6 transition-colors hover:bg-steel-800 sm:p-7 lg:flex"
        >
          <span className="font-mono text-[0.7rem] tracking-[0.18em] text-hazard">00</span>
          <span>
            <span className="display block text-2xl leading-none text-bone group-hover:text-hazard">
              The full guide
            </span>
            <span className="mt-3 block text-[0.92rem] leading-relaxed text-concrete">
              Start at the hub: carrier match, hydraulics, total cost, compliance.
            </span>
          </span>
          <span className="mt-7 inline-flex items-center gap-2 font-mono text-[0.65rem] tracking-[0.16em] text-bone/70 uppercase group-hover:text-hazard">
            Back to the hub
            <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </span>
        </Link>
      )}
    </div>
  );
}
