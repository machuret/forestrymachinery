import Link from "next/link";
import { INDUSTRY_PROFILES } from "@/lib/industries";

export function RelatedIndustries({ categorySlug }: { categorySlug: string }) {
  const matches = INDUSTRY_PROFILES.filter((profile) => profile.categories.includes(categorySlug)).slice(0, 3);
  if (!matches.length) return null;
  return (
    <section aria-labelledby="industry-paths" className="mb-14 border border-steel-700 bg-steel-900 p-6 sm:p-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="eyebrow">Who uses this attachment</p>
          <h2 id="industry-paths" className="display mt-3 text-3xl text-bone">Industry buying paths</h2>
        </div>
        <Link href="/industries/" className="font-mono text-[0.62rem] tracking-[0.14em] text-hazard uppercase">All industries →</Link>
      </div>
      <div className="mt-7 grid gap-px bg-steel-700 sm:grid-cols-3">
        {matches.map((profile) => (
          <div key={profile.slug} className="relative bg-steel-950 p-5">
            <span className="font-mono text-[0.62rem] text-hazard">{profile.code}</span>
            <h3 className="display mt-3 text-xl text-bone hover:text-hazard">
              <Link href={`/industries/${profile.slug}/`} className="after:absolute after:inset-0">{profile.shortTitle}</Link>
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-concrete">{profile.priorities[0].body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
