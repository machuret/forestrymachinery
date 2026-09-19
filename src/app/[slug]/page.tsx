import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Faq } from "@/components/Faq";
import { Toc } from "@/components/Toc";
import { CategoryGrid } from "@/components/CategoryGrid";
import { JsonLd } from "@/components/JsonLd";
import { Photograph } from "@/components/Photograph";
import { BrandLogo } from "@/components/BrandLogo";
import { References } from "@/components/References";
import { RelatedGuides } from "@/components/RelatedGuides";
import { RelatedApplications } from "@/components/RelatedApplications";
import { RelatedIndustries } from "@/components/RelatedIndustries";
import { CircuitDiagram } from "@/components/diagrams/CircuitDiagram";
import { CarrierBandChart } from "@/components/diagrams/CarrierBandChart";
import { GrindVsCutDiagram } from "@/components/diagrams/GrindVsCutDiagram";
import { getAllPages, getPageBySlug } from "@/lib/content";
import { categoryMeta } from "@/lib/categories";
import { PHOTOS, photo } from "@/lib/media";
import { SITE, absoluteUrl } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPages().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getPageBySlug(slug);
  if (!page) return {};

  const { meta_title, meta_description, primary_keyword, secondary_keywords } = page.frontmatter;
  const meta = categoryMeta(page.slug);

  return {
    title: { absolute: meta_title },
    description: meta_description,
    keywords: [primary_keyword, ...secondary_keywords.split(",").map((k) => k.trim())],
    alternates: { canonical: absoluteUrl(page.href) },
    openGraph: {
      title: meta_title,
      description: meta_description,
      url: absoluteUrl(page.href),
      type: "article",
      // og:image is supplied by the generated card in opengraph-image.tsx.
    },
  };
}

/** Diagrams that belong to specific guides, keyed by slug. */
function Diagrams({ slug }: { slug: string }) {
  if (slug === "forestry-machinery-guide") {
    return (
      <>
        <section className="mt-16">
          <h2 className="display text-2xl text-bone sm:text-3xl">The four circuit types, side by side</h2>
          <p className="mt-4 max-w-3xl text-[1rem] leading-relaxed text-concrete">
            This is where deals go wrong. A machine inside the published weight band still cannot run a tool whose
            circuit it does not have.
          </p>
          <div className="mt-7">
            <CircuitDiagram />
          </div>
        </section>
        <section className="mt-16">
          <h2 className="display text-2xl text-bone sm:text-3xl">Every carrier range on one axis</h2>
          <div className="mt-7">
            <CarrierBandChart />
          </div>
        </section>
      </>
    );
  }
  if (slug === "stump-grinder-guide" || slug === "stump-cutter-guide") {
    return (
      <section className="mt-16">
        <h2 className="display text-2xl text-bone sm:text-3xl">Grinding and cutting are opposite jobs</h2>
        <p className="mt-4 max-w-3xl text-[1rem] leading-relaxed text-concrete">
          The most common category error in this market, drawn rather than described.
        </p>
        <div className="mt-7">
          <GrindVsCutDiagram />
        </div>
        <Link
          href="/compare/stump-grinder-vs-stump-cutter/"
          className="mt-6 inline-flex items-center gap-2 font-mono text-[0.68rem] tracking-[0.14em] text-moss-400 uppercase hover:text-hazard"
        >
          Full comparison →
        </Link>
      </section>
    );
  }
  if (slug === "grapple-saw-guide") {
    return (
      <section className="mt-16">
        <h2 className="display text-2xl text-bone sm:text-3xl">Why a grapple saw needs two circuits</h2>
        <div className="mt-7">
          <CircuitDiagram />
        </div>
      </section>
    );
  }
  return null;
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getPageBySlug(slug);
  if (!page) notFound();

  const isPillar = page.frontmatter.page_type === "pillar";
  const meta = categoryMeta(page.slug);

  return (
    <>
      {/* ---------------------------------------------------------- Hero */}
      <section className="relative overflow-hidden border-b border-steel-700 bg-steel-900 plate">
        <div aria-hidden="true" className="absolute inset-0 bg-grid opacity-60" />
        <div
          aria-hidden="true"
          className="absolute -top-32 -right-24 h-[26rem] w-[26rem] rounded-full bg-moss-600/12 blur-[110px]"
        />

        <div className="relative mx-auto max-w-[88rem] px-4 pt-10 pb-14 sm:px-6 sm:pt-14 sm:pb-16 lg:px-10">
          <nav aria-label="Breadcrumb" className="font-mono text-[0.65rem] tracking-[0.16em] text-concrete uppercase">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="transition-colors hover:text-hazard">
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-muted">
                /
              </li>
              {isPillar ? (
                <li className="text-hazard">Forestry Machinery Guide</li>
              ) : (
                <>
                  <li>
                    <Link href="/forestry-machinery-guide/" className="transition-colors hover:text-hazard">
                      Forestry Machinery Guide
                    </Link>
                  </li>
                  <li aria-hidden="true" className="text-muted">
                    /
                  </li>
                  <li className="text-hazard">{meta?.label ?? page.frontmatter.primary_keyword}</li>
                </>
              )}
            </ol>
          </nav>

          <div className="mt-9 grid gap-10 lg:grid-cols-[minmax(0,1fr)_26rem] lg:items-end">
            <div>
              <p className="eyebrow flex items-center gap-3">
                <span className="inline-block h-2 w-2 rotate-45 bg-hazard" />
                {isPillar ? "Pillar guide" : `Category ${meta?.code} of 08`}
              </p>
              <h1 className="display mt-5 max-w-4xl text-[2.35rem] leading-[0.95] text-bone sm:text-5xl lg:text-[3.9rem]">
                {page.title}
              </h1>
              <div
                className="prose-industrial mt-7 max-w-2xl text-[1.1rem] text-bone/85"
                dangerouslySetInnerHTML={{ __html: page.leadHtml }}
              />

              <dl className="mt-9 flex flex-wrap gap-3">
                {[
                  ["Carrier range", meta?.carrier ?? "1.5–50 t"],
                  ["Read time", `${page.readingMinutes} min`],
                  ["Sources cited", String(page.citations.length)],
                ].map(([k, v]) => (
                  <div key={k} className="border border-steel-700 bg-steel-850 px-5 py-4">
                    <dt className="font-mono text-[0.58rem] tracking-[0.18em] text-concrete uppercase">{k}</dt>
                    <dd className="display mt-1.5 text-xl text-hazard">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {meta && <Photograph photo={meta.hero} ratio="4/3" priority sizes="(max-width: 1024px) 100vw, 26rem" />}
          </div>
        </div>

        <div className="h-[3px] hazard-stripes-dim" />
      </section>

      {/* ------------------------------------------------------- Article */}
      <div className="mx-auto max-w-[88rem] px-4 py-14 sm:px-6 sm:py-20 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-16">
          <aside className="order-2 lg:order-1">
            <Toc items={page.toc} />

            {meta && (
              <div className="mt-10 border border-steel-700 bg-steel-900 p-5">
                <p className="font-mono text-[0.6rem] tracking-[0.18em] text-concrete uppercase">Ready to buy</p>
                <p className="display mt-2 text-lg leading-tight text-bone">See the {meta.shortLabel} range</p>
                <a
                  href={meta.productHref}
                  className="mt-4 inline-flex items-center gap-2 border border-hazard px-4 py-2.5 font-mono text-[0.65rem] tracking-[0.14em] text-hazard uppercase transition-colors hover:bg-hazard hover:text-steel-950"
                >
                  View products →
                </a>
              </div>
            )}

            <div className="mt-6 border border-steel-700 bg-steel-900 p-5">
              <p className="font-mono text-[0.6rem] tracking-[0.18em] text-concrete uppercase">Work the numbers</p>
              <ul className="mt-4 space-y-2.5">
                {[
                  ["/costs/", "What it costs to own"],
                  ["/hire-vs-buy/", "Hire, buy or subcontract"],
                  ["/compatibility/", "Will it fit your carrier?"],
                  ["/wear-parts/", "What it costs to run"],
                  ["/troubleshooting/", "When it stops performing"],
                ].map(([href, label]) => (
                  <li key={href}>
                    <Link href={href} className="text-[0.88rem] leading-snug text-moss-400 hover:text-hazard">
                      {label} →
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {meta && meta.brands.length > 0 && (
              <div className="mt-6 border border-steel-700 bg-steel-900 p-5">
                <p className="font-mono text-[0.6rem] tracking-[0.18em] text-concrete uppercase">Ranges covered</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {meta.brands.map((b) => (
                    <BrandLogo key={b} slug={b} href={`/brands/${b}/`} />
                  ))}
                </div>
              </div>
            )}
          </aside>

          <article className="order-1 min-w-0 lg:order-2">
            {/* Key takeaways, above the fold of the article */}
            {meta && (
              <section aria-labelledby="takeaways" className="mb-14 border border-steel-700 bg-steel-900">
                <div className="h-[3px] hazard-stripes-dim" />
                <div className="p-6 sm:p-8">
                  <h2 id="takeaways" className="font-mono text-[0.62rem] tracking-[0.2em] text-hazard uppercase">
                    What to take away
                  </h2>
                  <ol className="mt-5 space-y-4">
                    {meta.takeaways.map((t, i) => (
                      <li key={t} className="flex gap-4">
                        <span className="font-mono text-[0.72rem] text-hazard">{String(i + 1).padStart(2, "0")}</span>
                        <span className="text-[1rem] leading-relaxed text-bone/90">{t}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </section>
            )}

            {meta && (
              <figure className="mb-14 overflow-hidden border border-steel-700 bg-steel-900">
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={meta.fieldImage.src}
                    alt={meta.fieldImage.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 62rem"
                    className="field-image object-cover"
                  />
                  <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-steel-950/55 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 bg-steel-950/85 px-3 py-2 font-mono text-[0.58rem] tracking-[0.16em] text-hazard uppercase backdrop-blur-sm">
                    Field context · editorial scene
                  </span>
                </div>
                <figcaption className="flex gap-3 border-t border-steel-700 px-5 py-4 font-mono text-[0.64rem] leading-relaxed tracking-[0.08em] text-concrete uppercase">
                  <span aria-hidden="true" className="text-hazard">◆</span>
                  {meta.fieldImage.caption}
                </figcaption>
              </figure>
            )}

            <div className="prose-industrial" dangerouslySetInnerHTML={{ __html: page.bodyHtml }} />

            {meta && <RelatedApplications categorySlug={page.slug} />}

            {meta && <RelatedIndustries categorySlug={page.slug} />}

            {/* Gallery */}
            {meta && meta.gallery.length > 0 && (
              <section className="mt-16">
                <h2 className="display text-2xl text-bone sm:text-3xl">
                  {meta.gallery.every((g) => photo(g).cutout) ? "The range, up close" : "In the field"}
                </h2>
                <div className={`mt-7 grid gap-4 ${meta.gallery.length > 1 ? "sm:grid-cols-2" : ""}`}>
                  {meta.gallery.map((g) => (
                    <Photograph key={g} photo={g} sizes="(max-width: 640px) 100vw, 30rem" />
                  ))}
                </div>
              </section>
            )}

            <Diagrams slug={page.slug} />

            <Faq items={page.faqs} />

            <References items={page.citations} />

            <RelatedGuides page={page} />
          </article>
        </div>
      </div>

      {/* ----------------------------------------------------------- CTA */}
      <section className="border-y border-steel-700 bg-steel-900 plate">
        <div className="mx-auto max-w-[88rem] px-4 py-16 sm:px-6 lg:px-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow">{SITE.phoneLabel}</p>
              <p className="display mt-4 text-3xl leading-none text-bone sm:text-4xl">
                Ten minutes and three numbers gets you a shortlist.
              </p>
              <p className="mt-4 text-[0.98rem] leading-relaxed text-concrete">
                {SITE.name} supplies forestry attachments across {SITE.region} from {SITE.base}. Bring your
                carrier&rsquo;s operating weight, auxiliary flow and working pressure.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3">
              <Link
                href={SITE.quotePath}
                className="inline-flex items-center gap-2 bg-hazard px-7 py-4 font-mono text-[0.72rem] font-semibold tracking-[0.16em] text-steel-950 uppercase transition-colors hover:bg-moss-400"
              >
                Request a quote →
              </Link>
              <Link
                href="/hydraulic-flow-calculator/"
                className="inline-flex items-center gap-2 border border-steel-600 px-7 py-4 font-mono text-[0.72rem] tracking-[0.16em] text-bone uppercase transition-colors hover:border-hazard hover:text-hazard"
              >
                Check your machine first
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------- More guides */}
      <section className="mx-auto max-w-[88rem] px-4 py-16 sm:px-6 sm:py-20 lg:px-10">
        <p className="eyebrow">The full cluster</p>
        <h2 className="display mt-4 text-3xl text-bone sm:text-4xl">Every category, one system</h2>
        <div className="mt-9">
          <CategoryGrid exclude={page.slug} />
        </div>
      </section>

      {/* -------------------------------------------------------- Schema */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: page.title,
          description: page.frontmatter.meta_description,
          inLanguage: "en-AU",
          mainEntityOfPage: absoluteUrl(page.href),
          image: meta ? absoluteUrl(PHOTOS[meta.hero].src) : undefined,
          author: { "@type": "Organization", name: SITE.name },
          publisher: { "@type": "Organization", name: SITE.name },
          about: page.frontmatter.primary_keyword,
          citation: page.citations.map((c) => ({
            "@type": "CreativeWork",
            name: c.title,
            publisher: c.publisher,
            url: c.url,
          })),
        }}
      />
      {page.faqs.length > 0 && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: page.faqs.map((f) => ({
              "@type": "Question",
              name: f.question,
              acceptedAnswer: { "@type": "Answer", text: f.answerText },
            })),
          }}
        />
      )}
      {isPillar && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Forestry attachment categories",
            itemListElement: getAllPages()
              .filter((p) => p.frontmatter.page_type !== "pillar")
              .map((p, i) => ({
                "@type": "ListItem",
                position: i + 1,
                name: categoryMeta(p.slug)?.label ?? p.title,
                url: absoluteUrl(p.href),
              })),
          }}
        />
      )}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
            {
              "@type": "ListItem",
              position: 2,
              name: "Forestry Machinery Guide",
              item: absoluteUrl("/forestry-machinery-guide/"),
            },
            ...(isPillar
              ? []
              : [
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: meta?.label ?? page.title,
                    item: absoluteUrl(page.href),
                  },
                ]),
          ],
        }}
      />
    </>
  );
}
