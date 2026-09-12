import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { BrandLogo } from "@/components/BrandLogo";
import { Photograph } from "@/components/Photograph";
import { JsonLd } from "@/components/JsonLd";
import { BRAND_PROFILES, brandProfile } from "@/lib/brands";
import { CATEGORY_META, categoryMeta } from "@/lib/categories";
import { SITE, absoluteUrl } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return BRAND_PROFILES.map((b) => ({ brand: b.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ brand: string }> }): Promise<Metadata> {
  const { brand } = await params;
  const b = brandProfile(brand);
  if (!b) return {};
  const title = `${b.name} Forestry Attachments Australia | Range and Carrier Match`;
  return {
    title: { absolute: title },
    description: `${b.summary.slice(0, 150)}…`,
    alternates: { canonical: absoluteUrl(`/brands/${b.slug}/`) },
    openGraph: { title, description: b.positioning, type: "article" },
  };
}

export default async function BrandPage({ params }: { params: Promise<{ brand: string }> }) {
  const { brand } = await params;
  const b = brandProfile(brand);
  if (!b) notFound();

  const categories = CATEGORY_META.filter((c) => c.brands.includes(b.slug));

  return (
    <>
      <PageHero
        eyebrow={`Manufacturer · ${b.origin}`}
        title={b.name}
        crumb={b.name}
        trail={[{ label: "Brands", href: "/brands/" }]}
        lead={b.summary}
        aside={
          <div className="border border-steel-700 bg-steel-850 p-6">
            <BrandLogo slug={b.slug} />
            <dl className="mt-6 space-y-4">
              <div>
                <dt className="font-mono text-[0.6rem] tracking-[0.18em] text-concrete uppercase">Series</dt>
                <dd className="display mt-1 text-2xl text-hazard">{b.series.length}</dd>
              </div>
              <div>
                <dt className="font-mono text-[0.6rem] tracking-[0.18em] text-concrete uppercase">Categories covered</dt>
                <dd className="display mt-1 text-2xl text-bone">{categories.length}</dd>
              </div>
            </dl>
          </div>
        }
      />

      <div className="mx-auto max-w-[88rem] px-4 py-14 sm:px-6 sm:py-20 lg:px-10">
        {/* Series table */}
        <section>
          <div className="rule-heavy" />
          <h2 className="display mt-5 text-3xl text-bone sm:text-4xl">The range</h2>
          <div className="relative mt-8 overflow-x-auto border border-steel-700 bg-steel-900">
            <table className="w-full min-w-[44rem] border-collapse text-sm">
              <thead>
                <tr>
                  {["Series", "Name", "Category", "Detail"].map((h) => (
                    <th
                      key={h}
                      className="border-l border-steel-700 bg-steel-800 px-4 py-4 text-left font-mono text-[0.62rem] tracking-[0.14em] text-hazard uppercase first:border-l-0"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {b.series.map((s) => {
                  const cat = categoryMeta(s.guide);
                  return (
                    <tr key={s.code} className="border-t border-steel-800 transition-colors hover:bg-hazard/5">
                      <th scope="row" className="px-4 py-4 text-left align-top font-mono text-[0.8rem] text-hazard">
                        {s.code}
                      </th>
                      <td className="border-l border-steel-800 px-4 py-4 align-top font-semibold text-bone">{s.name}</td>
                      <td className="border-l border-steel-800 px-4 py-4 align-top">
                        <Link href={`/${s.guide}/`} className="text-moss-400 hover:text-hazard">
                          {cat?.label ?? s.guide}
                        </Link>
                      </td>
                      <td className="border-l border-steel-800 px-4 py-4 align-top text-concrete">{s.detail}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        {/* Notes */}
        <section className="mt-16">
          <div className="rule-heavy" />
          <h2 className="display mt-5 text-3xl text-bone sm:text-4xl">What actually distinguishes it</h2>
          <ol className="mt-8 grid gap-px bg-steel-700 md:grid-cols-3">
            {b.notes.map((n, i) => (
              <li key={n} className="bg-steel-950 p-6 sm:p-7">
                <span className="font-mono text-[0.7rem] tracking-[0.18em] text-hazard">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-4 text-[0.95rem] leading-relaxed text-concrete">{n}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Categories */}
        <section className="mt-16">
          <div className="rule-heavy" />
          <h2 className="display mt-5 text-3xl text-bone sm:text-4xl">Where {b.name} appears in the guide</h2>
          <div className="mt-8 grid gap-px bg-steel-700 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c) => (
              <Link key={c.slug} href={`/${c.slug}/`} className="group flex flex-col bg-steel-950 transition-colors hover:bg-steel-900">
                <Photograph photo={c.hero} ratio="16/10" bare sizes="(max-width: 1024px) 100vw, 24rem" className="border-0 border-b" />
                <div className="p-5">
                  <span className="font-mono text-[0.65rem] tracking-[0.18em] text-hazard">{c.code}</span>
                  <h3 className="display mt-2 text-xl text-bone group-hover:text-hazard">{c.label}</h3>
                  <p className="mt-2 text-[0.88rem] leading-relaxed text-concrete">{c.job}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Other brands */}
        <nav aria-label="Other brands" className="mt-16 border-t border-steel-700 pt-8">
          <p className="font-mono text-[0.65rem] tracking-[0.2em] text-concrete uppercase">Other manufacturers</p>
          <ul className="mt-5 flex flex-wrap gap-3">
            {BRAND_PROFILES.filter((o) => o.slug !== b.slug).map((o) => (
              <li key={o.slug}>
                <Link
                  href={`/brands/${o.slug}/`}
                  className="inline-flex items-center gap-2 border border-steel-600 px-4 py-2.5 text-sm text-bone/85 transition-colors hover:border-hazard hover:text-hazard"
                >
                  {o.name}
                  <span aria-hidden="true">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Brand",
          name: b.name,
          url: absoluteUrl(`/brands/${b.slug}/`),
          description: b.summary,
          makesOffer: b.series.map((s) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Product", name: `${b.name} ${s.name}`, description: s.detail, brand: b.name },
            seller: { "@type": "Organization", name: SITE.name },
            availability: "https://schema.org/InStock",
            areaServed: SITE.region,
          })),
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
            { "@type": "ListItem", position: 2, name: "Brands", item: absoluteUrl("/brands/") },
            { "@type": "ListItem", position: 3, name: b.name, item: absoluteUrl(`/brands/${b.slug}/`) },
          ],
        }}
      />
    </>
  );
}
