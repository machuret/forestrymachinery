import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Faq } from "@/components/Faq";
import { Toc } from "@/components/Toc";
import { CategoryGrid } from "@/components/CategoryGrid";
import { JsonLd } from "@/components/JsonLd";
import { getAllPages, getPageBySlug } from "@/lib/content";
import { categoryMeta, CATEGORY_META } from "@/lib/categories";
import { SITE, absoluteUrl } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPages().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getPageBySlug(slug);
  if (!page) return {};

  const { meta_title, meta_description, primary_keyword, secondary_keywords } = page.frontmatter;

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
    },
  };
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getPageBySlug(slug);
  if (!page) notFound();

  const isPillar = page.frontmatter.page_type === "pillar";
  const meta = categoryMeta(page.slug);
  const index = CATEGORY_META.findIndex((c) => c.slug === page.slug);

  return (
    <>
      {/* ---------------------------------------------------------- Hero */}
      <section className="relative overflow-hidden border-b border-steel-700 bg-steel-900 plate">
        <div aria-hidden="true" className="absolute inset-0 bg-grid opacity-60" />
        <div
          aria-hidden="true"
          className="absolute -top-32 -right-24 h-[26rem] w-[26rem] rounded-full bg-moss-600/12 blur-[110px]"
        />

        <div className="relative mx-auto max-w-[88rem] px-4 pt-10 pb-14 sm:px-6 sm:pt-14 sm:pb-20 lg:px-10">
          <nav aria-label="Breadcrumb" className="font-mono text-[0.65rem] tracking-[0.16em] text-concrete uppercase">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="transition-colors hover:text-hazard">
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-steel-500">
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
                  <li aria-hidden="true" className="text-steel-500">
                    /
                  </li>
                  <li className="text-hazard">{meta?.label ?? page.frontmatter.primary_keyword}</li>
                </>
              )}
            </ol>
          </nav>

          <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-end">
            <div>
              <p className="eyebrow flex items-center gap-3">
                <span className="inline-block h-2 w-2 rotate-45 bg-hazard" />
                {isPillar ? "Pillar guide" : `Category ${meta?.code ?? String(index + 1).padStart(2, "0")} of 08`}
              </p>
              <h1 className="display mt-5 max-w-4xl text-[2.35rem] leading-[0.95] text-bone sm:text-5xl lg:text-[4.1rem]">
                {page.title}
              </h1>
              <div
                className="prose-industrial mt-7 max-w-2xl text-[1.1rem] text-bone/85"
                dangerouslySetInnerHTML={{ __html: page.leadHtml }}
              />
            </div>

            <dl className="grid grid-cols-2 gap-px border border-steel-700 bg-steel-700 lg:grid-cols-1">
              <div className="bg-steel-850 p-5">
                <dt className="font-mono text-[0.6rem] tracking-[0.18em] text-concrete uppercase">Carrier range</dt>
                <dd className="display mt-2 text-2xl text-hazard">{meta?.carrier ?? "1.5–50 t"}</dd>
              </div>
              <div className="bg-steel-850 p-5">
                <dt className="font-mono text-[0.6rem] tracking-[0.18em] text-concrete uppercase">Read time</dt>
                <dd className="display mt-2 text-2xl text-bone">{page.readingMinutes} min</dd>
              </div>
              <div className="col-span-2 bg-steel-850 p-5 lg:col-span-1">
                <dt className="font-mono text-[0.6rem] tracking-[0.18em] text-concrete uppercase">Written for</dt>
                <dd className="mt-2 text-[0.95rem] leading-snug text-bone/85">
                  {isPillar
                    ? "Contractors, councils, arborists and utility crews"
                    : (meta?.job ?? "Commercial buyers comparing attachments")}
                </dd>
              </div>
            </dl>
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
              <div className="mt-10 border border-steel-700 bg-steel-900 p-5 lg:sticky lg:top-[28rem]">
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
          </aside>

          <article className="order-1 min-w-0 lg:order-2">
            <div className="prose-industrial" dangerouslySetInnerHTML={{ __html: page.bodyHtml }} />
            <Faq items={page.faqs} />

            {page.nextLinks.length > 0 && (
              <nav aria-label="Related guides" className="mt-16 border-t border-steel-700 pt-8">
                <p className="font-mono text-[0.65rem] tracking-[0.2em] text-concrete uppercase">Keep reading</p>
                <ul className="mt-5 flex flex-wrap gap-3">
                  {page.nextLinks.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="inline-flex items-center gap-2 border border-steel-600 px-4 py-2.5 text-sm text-bone/85 transition-colors hover:border-hazard hover:text-hazard"
                      >
                        {l.label}
                        <span aria-hidden="true">→</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
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
            <Link
              href={SITE.quotePath}
              className="inline-flex shrink-0 items-center gap-2 bg-hazard px-7 py-4 font-mono text-[0.72rem] font-semibold tracking-[0.16em] text-steel-950 uppercase transition-colors hover:bg-moss-400"
            >
              Request a quote →
            </Link>
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
          author: { "@type": "Organization", name: SITE.name },
          publisher: { "@type": "Organization", name: SITE.name },
          about: page.frontmatter.primary_keyword,
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
