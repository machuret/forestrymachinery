import Link from "next/link";
import { Photograph } from "@/components/Photograph";
import { categoryMeta } from "@/lib/categories";
import { COMPARISONS } from "@/lib/comparisons";
import type { GuidePage } from "@/lib/content";

/**
 * Related links built from real relationships rather than the flat "Next:" line
 * in the markdown: the comparisons this category appears in, then the guides the
 * author actually pointed at.
 */
export function RelatedGuides({ page }: { page: GuidePage }) {
  const comparisons = COMPARISONS.filter((c) => c.a.slug === page.slug || c.b.slug === page.slug);
  const next = page.nextLinks
    .map((l) => ({ link: l, meta: categoryMeta(l.href.replace(/\//g, "")) }))
    .filter((x) => x.meta);

  if (!comparisons.length && !next.length) return null;

  return (
    <section aria-labelledby="related" className="mt-16 border-t border-steel-700 pt-10">
      <h2 id="related" className="font-mono text-[0.65rem] tracking-[0.2em] text-concrete uppercase">
        Keep reading
      </h2>

      {comparisons.length > 0 && (
        <>
          <p className="mt-5 text-[0.92rem] text-concrete">
            This category is most often confused with{" "}
            {comparisons.length === 1 ? "one other" : `${comparisons.length} others`}:
          </p>
          <ul className="mt-4 flex flex-wrap gap-3">
            {comparisons.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/compare/${c.slug}/`}
                  className="inline-flex items-center gap-2 border border-hazard/50 bg-hazard/5 px-4 py-2.5 text-sm text-bone transition-colors hover:border-hazard hover:bg-hazard/10"
                >
                  {c.title.replace("?", "")}
                  <span aria-hidden="true" className="text-hazard">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}

      {next.length > 0 && (
        <div className="mt-8 grid gap-px bg-steel-700 sm:grid-cols-2 lg:grid-cols-3">
          {next.map(({ link, meta }) => (
            <Link key={link.href} href={link.href} className="group flex flex-col bg-steel-950 transition-colors hover:bg-steel-900">
              <Photograph photo={meta!.hero} ratio="16/9" bare sizes="(max-width: 640px) 100vw, 20rem" className="border-0 border-b" />
              <div className="p-4">
                <span className="font-mono text-[0.62rem] tracking-[0.16em] text-hazard">{meta!.code}</span>
                <span className="display mt-1.5 block text-lg leading-tight text-bone group-hover:text-hazard">
                  {link.label}
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
