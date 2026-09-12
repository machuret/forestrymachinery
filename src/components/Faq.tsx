import type { FaqItem } from "@/lib/content";

export function Faq({ items }: { items: FaqItem[] }) {
  if (!items.length) return null;

  return (
    <section id="faq" className="mt-20 scroll-mt-28">
      <div className="rule-heavy" />
      <h2 className="display mt-6 text-3xl text-bone sm:text-4xl">Frequently asked questions</h2>

      <div className="mt-8 border-t border-steel-700">
        {items.map((item, i) => (
          <details key={item.question} className="faq group border-b border-steel-700" open={i === 0}>
            <summary className="flex cursor-pointer list-none items-start gap-4 py-5 transition-colors hover:bg-steel-900">
              <span className="mt-1 font-mono text-[0.7rem] text-hazard">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="display flex-1 text-lg leading-tight text-bone sm:text-xl">{item.question}</span>
              <span
                aria-hidden="true"
                className="faq-sign mt-0.5 shrink-0 text-xl leading-none text-hazard transition-transform duration-200"
              >
                +
              </span>
            </summary>
            <div
              className="prose-industrial pb-6 pl-10 text-[1rem] sm:pr-10"
              dangerouslySetInnerHTML={{ __html: item.answerHtml }}
            />
          </details>
        ))}
      </div>
    </section>
  );
}
