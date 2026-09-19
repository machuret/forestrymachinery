import Image from "next/image";
import Link from "next/link";
import { TUTORIALS } from "@/lib/tutorials";

export function TutorialGrid({ limit }: { limit?: number }) {
  const items = typeof limit === "number" ? TUTORIALS.slice(0, limit) : TUTORIALS;
  return (
    <div className="grid gap-px bg-steel-700 md:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <article key={item.slug} className="group relative flex min-h-[26rem] flex-col overflow-hidden bg-steel-900">
          <div className="relative h-44 overflow-hidden">
            <Image src={item.image} alt={item.imageAlt} fill sizes="(max-width: 768px) 100vw, 25vw" className="field-image object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
            <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-steel-900 to-transparent" />
          </div>
          <div className="flex flex-1 flex-col p-6">
            <span className="font-mono text-[0.62rem] tracking-[0.18em] text-hazard">{item.code}</span>
            <h2 className="display mt-4 text-2xl leading-tight text-bone group-hover:text-hazard">
              <Link href={`/tutorials/${item.slug}/`} className="after:absolute after:inset-0">{item.shortTitle}</Link>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-concrete">{item.answer}</p>
            <span className="mt-auto pt-6 font-mono text-[0.62rem] tracking-[0.14em] text-hazard uppercase">Open tutorial →</span>
          </div>
        </article>
      ))}
    </div>
  );
}
