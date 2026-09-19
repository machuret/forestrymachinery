import Image from "next/image";
import Link from "next/link";
import { APPLICATION_GUIDES } from "@/lib/applications";

export function RelatedApplications({ categorySlug }: { categorySlug: string }) {
  const matches = APPLICATION_GUIDES.filter((guide) => guide.categories.includes(categorySlug)).slice(0, 2);
  if (matches.length === 0) return null;

  return (
    <section aria-labelledby="field-applications" className="mb-14">
      <div className="flex items-end justify-between gap-5">
        <div>
          <p className="eyebrow">See it in context</p>
          <h2 id="field-applications" className="display mt-3 text-3xl text-bone">Where this attachment earns its keep</h2>
        </div>
        <Link href="/applications/" className="hidden font-mono text-[0.62rem] tracking-[0.14em] text-hazard uppercase sm:block">All applications →</Link>
      </div>
      <div className={`mt-7 grid gap-4 ${matches.length > 1 ? "sm:grid-cols-2" : ""}`}>
        {matches.map((guide) => (
          <Link key={guide.slug} href={`/applications/${guide.slug}/`} className="group relative min-h-64 overflow-hidden border border-steel-700">
            <Image src={guide.image} alt={guide.imageAlt} fill sizes="(max-width: 640px) 100vw, 30rem" className="field-image object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
            <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-steel-950 via-steel-950/25 to-transparent" />
            <span className="absolute inset-x-0 bottom-0 p-5">
              <span className="font-mono text-[0.6rem] tracking-[0.16em] text-hazard">{guide.code}</span>
              <span className="display mt-2 block text-2xl text-bone group-hover:text-hazard">{guide.shortTitle}</span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
