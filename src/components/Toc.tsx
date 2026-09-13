import type { TocItem } from "@/lib/content";

export function Toc({ items }: { items: TocItem[] }) {
  if (items.length < 3) return null;

  return (
    <nav aria-label="On this page" className="lg:sticky lg:top-28">
      <p className="font-mono text-[0.65rem] tracking-[0.2em] text-concrete uppercase">On this page</p>
      <ol className="mt-4 space-y-0 border-l border-steel-700">
        {items.map((item, i) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="group flex gap-3 border-l-2 border-transparent py-2 pl-4 text-[0.82rem] leading-snug text-concrete transition-colors hover:border-hazard hover:text-bone"
            >
              <span className="font-mono text-[0.62rem] text-muted group-hover:text-hazard">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>{item.title}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
