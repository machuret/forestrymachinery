import type { Source } from "@/lib/sources";

/**
 * The references block that pairs with the citation markers placed in the body.
 * Numbering follows marker order, so [3] in the prose is the third row here.
 */
export function References({ items }: { items: Source[] }) {
  if (!items.length) return null;

  return (
    <section aria-labelledby="references" className="mt-16 border-t border-steel-700 pt-8">
      <h2 id="references" className="font-mono text-[0.65rem] tracking-[0.2em] text-concrete uppercase">
        References
      </h2>
      <ol className="mt-5 space-y-3">
        {items.map((s, i) => (
          <li key={s.id} id={`ref-${s.id}`} className="flex gap-3 text-[0.85rem] leading-relaxed text-concrete">
            <span className="font-mono text-[0.7rem] text-hazard">{i + 1}</span>
            <span>
              <a
                href={s.url}
                rel="nofollow noopener"
                target="_blank"
                className="text-bone/90 underline decoration-steel-600 underline-offset-2 hover:text-hazard"
              >
                {s.publisher} — {s.title}
              </a>
              <span className="mt-0.5 block text-[0.78rem] text-muted">{s.supports}</span>
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}
