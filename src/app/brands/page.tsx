import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { BrandLogo } from "@/components/BrandLogo";
import { JsonLd } from "@/components/JsonLd";
import { Section, Prose, ShortAnswer, NumberedGrid, FaqBlock, NextSteps, type Qa } from "@/components/content";
import { BRAND_PROFILES } from "@/lib/brands";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Forestry Attachment Brands in Australia | OMEF, Dipperfox, Powerhand, Trevi Benne" },
  description:
    "OMEF, Dipperfox, Powerhand and Trevi Benne forestry attachments in Australia: what each range suits, parts support and honest limitations.",
  alternates: { canonical: absoluteUrl("/brands/") },
};

const FAQS: Qa[] = [
  {
    q: "Which brand of forestry attachment is best?",
    a: "There is no single answer, and any site giving you one is guessing. The four manufacturers here occupy different positions: OMEF is broad, Dipperfox is a specific stump grinding mechanism, Powerhand is built around retention and fitment flexibility, and Trevi Benne supplies one stump cutter series. The right question is which range covers the category you need on the carrier you own, with parts held in Australia.",
  },
  {
    q: "Does the brand matter more than the model?",
    a: "The model matters more for whether the tool works. The brand matters more for what happens when it breaks. A correctly specified model from any of these ranges will do the job; the difference between a two-day repair and a six-week one is a parts and distribution question.",
  },
  {
    q: "Should I buy the brand my dealer stocks?",
    a: "Often, yes, and it is a more defensible reason than it sounds. A distributor holding stock, wear parts and technical knowledge for a range is worth real money once the attachment is working for a living. Importing direct on price transfers all of that risk to you at the moment something wears out.",
  },
  {
    q: "Are European attachments suited to Australian conditions?",
    a: "Structurally yes, with one caveat worth taking seriously: published cutting and processing capacities assume favourable material. Dense, fibrous and buttressed Australian hardwood is not favourable material, and derating published maximums is standard practice rather than pessimism.",
  },
  {
    q: "How do I check parts availability before buying?",
    a: "Ask three specific questions rather than one general one. What wear parts are held in Australia right now? What is the realistic lead time on the items that actually wear on this tool? And what is air-freighted versus sea-freighted? A supplier who answers all three precisely is telling you something useful about the support behind the sale.",
  },
];

export default function BrandsPage() {
  return (
    <>
      <PageHero
        eyebrow="Manufacturers"
        title="Four brands, sixteen series, one parts conversation"
        crumb="Brands"
        lead="Which manufacturer sits behind a category matters less for badge reasons than for parts: wear-part supply and lead time in Australia is the difference between a two-day repair and a six-week one."
      />

      <section className="mx-auto max-w-[88rem] px-4 py-14 sm:px-6 sm:py-20 lg:px-10">
        <ShortAnswer>
          Four manufacturers cover the eight categories in this guide. Which one you end up with matters less for
          whether the tool works — a correctly specified model from any of them will — and more for what happens when
          something wears out. Parts held in Australia, and a distributor who knows the range, is the part of a brand
          decision that costs real money.
        </ShortAnswer>

        <div className="mt-12 grid gap-px bg-steel-700 md:grid-cols-2">
          {BRAND_PROFILES.map((b) => (
            <Link
              key={b.slug}
              href={`/brands/${b.slug}/`}
              className="group flex flex-col bg-steel-950 p-6 transition-colors hover:bg-steel-900 sm:p-8"
            >
              <BrandLogo slug={b.slug} className="self-start" />
              <div className="mt-6 flex items-baseline gap-3">
                <h2 className="display text-2xl text-bone transition-colors group-hover:text-hazard sm:text-3xl">
                  {b.name}
                </h2>
                <span className="font-mono text-[0.62rem] tracking-[0.14em] text-concrete uppercase">{b.origin}</span>
              </div>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-concrete">{b.positioning}</p>
              <p className="mt-5 font-mono text-[0.62rem] tracking-[0.14em] text-steel-500 uppercase">
                {b.series.length} series ·{" "}
                {[...new Set(b.series.map((s) => s.guide))].length} categories
              </p>
              <span className="mt-6 inline-flex items-center gap-2 font-mono text-[0.65rem] tracking-[0.16em] text-bone/70 uppercase group-hover:text-hazard">
                See the range
                <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <Section
        id="how-to-choose"
        title="What actually separates one range from another"
        lead="Four things, in the order they affect you. Country of manufacture is not one of them."
        className="mx-auto max-w-[88rem] px-4 sm:px-6 lg:px-10"
      >
        <NumberedGrid
          columns={2}
          items={[
            {
              title: "Does it cover your category on your carrier?",
              body: "The first filter, and it eliminates most of the field immediately. Trevi Benne makes stump cutters for 11.5 to 28 tonne machines and nothing else in this range. If you have a 5 tonne excavator, that decision is already made for you.",
            },
            {
              title: "What is held in Australia?",
              body: "Wear-part availability is the difference between a two-day repair and a six-week one. On a machine running 500 hours a year this outweighs any plausible difference on the invoice, and it is the question buyers ask last.",
            },
            {
              title: "Is the mechanism genuinely different?",
              body: "Sometimes a brand difference is a badge and sometimes it is engineering. Dipperfox destroying a stump and root plate in place rather than grinding a surface flat is a real mechanical difference with a real commercial consequence.",
            },
            {
              title: "How specific is the specification?",
              body: "A range that names the rotator, the steel grade and the circuit requirement is telling you it has thought about the installation. A range quoting only a weight band is leaving the hard parts for you to discover.",
            },
          ]}
        />
      </Section>

      <Section
        id="editorial"
        title="How these profiles are written"
        className="mx-auto max-w-[88rem] px-4 sm:px-6 lg:px-10"
      >
        <Prose>
          <p>
            These are not reviews. This site has not independently tested this equipment, and writing as though it had
            would be dishonest. Each profile is assembled from published manufacturer specifications and the live
            product range, then given the context a buyer needs: what the range suits, where it does not fit, what the
            parts situation looks like in Australia, and the limitations worth knowing before committing.
          </p>
          <p>
            Where a figure could not be verified it is omitted rather than estimated, and no prices appear anywhere on
            this site because attachment pricing moves with the exchange rate, specification and carrier bracket. See{" "}
            <Link href="/sources/">sources and editorial standards</Link> for how that is handled, and{" "}
            <Link href="/costs/">the costs page</Link> for what drives the number instead.
          </p>
        </Prose>
      </Section>

      <Section id="faq" title="Frequently asked questions" className="mx-auto max-w-[88rem] px-4 sm:px-6 lg:px-10">
        <FaqBlock items={FAQS} />
      </Section>

      <Section id="next" title="Where to go next" className="mx-auto max-w-[88rem] px-4 pb-8 sm:px-6 lg:px-10">
        <NextSteps
          items={[
            { href: "/compatibility/", label: "What suits your carrier", why: "Narrow by machine size before you narrow by manufacturer." },
            { href: "/compare/", label: "Category comparisons", why: "Settle which category you need before choosing a range within it." },
            { href: "/costs/", label: "What attachments cost", why: "What drives price, and how to make two quotes comparable." },
          ]}
        />
      </Section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: typeof f.a === "string" ? f.a : f.q },
          })),
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Forestry attachment brands",
          url: absoluteUrl("/brands/"),
          inLanguage: "en-AU",
          hasPart: BRAND_PROFILES.map((b) => ({
            "@type": "Brand",
            name: b.name,
            url: absoluteUrl(`/brands/${b.slug}/`),
          })),
        }}
      />
    </>
  );
}
