import Link from "next/link";
import { CATEGORY_META, type CategoryMeta } from "@/lib/categories";
import { Photograph } from "@/components/Photograph";

/**
 * The whole card is clickable, but only the heading is inside the anchor.
 *
 * Wrapping the entire card in a link concatenates the code, carrier range,
 * heading, description and call to action into one anchor text — which reads to
 * a crawler and a screen reader as "012-50 ttree shearsfell and hold standing
 * timber...". An inset pseudo-element restores the full click target without
 * polluting the link text.
 */
function Card({ c }: { c: CategoryMeta }) {
  return (
    <div className="group relative flex flex-col overflow-hidden bg-steel-900 transition-colors duration-200">
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 z-20 h-[3px] origin-left scale-x-0 bg-hazard transition-transform duration-300 group-hover:scale-x-100"
      />
      <Photograph
        photo={c.hero}
        ratio="16/10"
        bare
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 22rem"
        className="border-0"
      />
      <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
        <div>
          <div className="flex items-start justify-between gap-4">
            <span className="font-mono text-[0.7rem] tracking-[0.18em] text-hazard">{c.code}</span>
            <span className="font-mono text-[0.65rem] tracking-[0.12em] text-muted uppercase">{c.carrier}</span>
          </div>
          <h3 className="display mt-5 text-2xl leading-none text-bone transition-colors group-hover:text-hazard sm:text-[1.75rem]">
            <Link href={`/${c.slug}/`} className="after:absolute after:inset-0 after:z-10">
              {c.label}
            </Link>
          </h3>
          <p className="mt-3 text-[0.92rem] leading-relaxed text-concrete">{c.job}</p>
        </div>
        <span
          aria-hidden="true"
          className="mt-7 inline-flex items-center gap-2 font-mono text-[0.65rem] tracking-[0.16em] text-bone/70 uppercase transition-colors group-hover:text-hazard"
        >
          Read the guide
          <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
        </span>
      </div>
    </div>
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
        <div className="group relative hidden flex-col justify-between bg-steel-850 p-7 transition-colors hover:bg-steel-800 lg:flex">
          <span className="font-mono text-[0.7rem] tracking-[0.18em] text-hazard">00</span>
          <span>
            <span className="display block text-2xl leading-none text-bone group-hover:text-hazard">
              <Link href="/forestry-machinery-guide/" className="after:absolute after:inset-0">
                The full guide
              </Link>
            </span>
            <span className="mt-3 block text-[0.92rem] leading-relaxed text-concrete">
              Start at the hub: carrier match, hydraulics, total cost, compliance.
            </span>
          </span>
          <span
            aria-hidden="true"
            className="mt-7 inline-flex items-center gap-2 font-mono text-[0.65rem] tracking-[0.16em] text-bone/70 uppercase group-hover:text-hazard"
          >
            Back to the hub
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </span>
        </div>
      )}
    </div>
  );
}
