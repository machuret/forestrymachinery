import Image from "next/image";
import Link from "next/link";
import { INDUSTRY_PROFILES } from "@/lib/industries";

export function IndustryGrid({ compact = false, exclude }: { compact?: boolean; exclude?: string }) {
  const profiles = INDUSTRY_PROFILES.filter((profile) => profile.slug !== exclude);
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {profiles.map((profile) => (
        <div key={profile.slug} className="group relative min-h-[22rem] overflow-hidden border border-steel-700 bg-steel-900">
          <Image src={profile.image} alt={profile.imageAlt} fill sizes="(max-width: 768px) 100vw, 33vw" className="field-image object-cover transition-transform duration-700 group-hover:scale-[1.035]" />
          <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-steel-950 via-steel-950/55 to-steel-950/5" />
          <span className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
            <span className="flex items-center justify-between gap-4">
              <span className="font-mono text-[0.65rem] tracking-[0.18em] text-hazard">{profile.code}</span>
              <span className="font-mono text-[0.58rem] tracking-[0.14em] text-bone/65 uppercase">Industry profile</span>
            </span>
            <span className="display mt-3 block text-3xl leading-none text-bone group-hover:text-hazard">
              <Link href={`/industries/${profile.slug}/`} className="after:absolute after:inset-0 after:z-10">{profile.shortTitle}</Link>
            </span>
            {!compact && <span className="mt-3 block text-sm leading-relaxed text-bone/75">{profile.description}</span>}
            <span className="mt-5 inline-flex font-mono text-[0.62rem] tracking-[0.16em] text-hazard uppercase">Open industry guide →</span>
          </span>
        </div>
      ))}
    </div>
  );
}
