import Image from "next/image";
import Link from "next/link";
import { APPLICATION_GUIDES } from "@/lib/applications";

export function ApplicationGrid({ compact = false, exclude }: { compact?: boolean; exclude?: string }) {
  const guides = APPLICATION_GUIDES.filter((guide) => guide.slug !== exclude);
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {guides.map((guide) => (
        <div
          key={guide.slug}
          className="group relative min-h-[22rem] overflow-hidden border border-steel-700 bg-steel-900"
        >
          <Image
            src={guide.image}
            alt={guide.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="field-image object-cover transition-transform duration-700 group-hover:scale-[1.035]"
          />
          <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-steel-950 via-steel-950/45 to-transparent" />
          <span className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
            <span className="flex items-center justify-between gap-4">
              <span className="font-mono text-[0.65rem] tracking-[0.18em] text-hazard">{guide.code}</span>
              <span className="font-mono text-[0.58rem] tracking-[0.14em] text-bone/65 uppercase">Field application</span>
            </span>
            <span className="display mt-3 block text-3xl leading-none text-bone group-hover:text-hazard sm:text-4xl">
              <Link href={`/applications/${guide.slug}/`} className="after:absolute after:inset-0 after:z-10">
                {guide.shortTitle}
              </Link>
            </span>
            {!compact && <span className="mt-3 block max-w-xl text-sm leading-relaxed text-bone/75">{guide.description}</span>}
            <span className="mt-5 inline-flex font-mono text-[0.62rem] tracking-[0.16em] text-hazard uppercase">Plan the job →</span>
          </span>
        </div>
      ))}
    </div>
  );
}
