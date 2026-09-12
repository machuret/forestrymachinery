import type { Metadata } from "next";
import Link from "next/link";
import { QuoteForm } from "./QuoteForm";
import { JsonLd } from "@/components/JsonLd";
import { SITE, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Request a Forestry Attachment Quote | Machinery Specialist" },
  description:
    "Send your carrier's operating weight, auxiliary flow and working pressure and get a matched forestry attachment shortlist. Supplied across Australia.",
  alternates: { canonical: absoluteUrl(SITE.quotePath) },
  robots: { index: true, follow: true },
};

export default function RequestQuotePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-steel-700 bg-steel-900 plate">
        <div aria-hidden="true" className="absolute inset-0 bg-grid opacity-60" />
        <div className="relative mx-auto max-w-[88rem] px-4 pt-12 pb-16 sm:px-6 sm:pt-16 lg:px-10">
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
              <li className="text-hazard">Request a quote</li>
            </ol>
          </nav>

          <p className="eyebrow mt-10 flex items-center gap-3">
            <span className="inline-block h-2 w-2 rotate-45 bg-hazard" />
            {SITE.phoneLabel}
          </p>
          <h1 className="display mt-5 max-w-3xl text-[2.35rem] leading-[0.95] text-bone sm:text-5xl lg:text-[4.1rem]">
            Bring three numbers. Leave with a shortlist.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-bone/80">
            {SITE.name} supplies forestry attachments across {SITE.region} from {SITE.base}. Tell us what the carrier is
            and what the work looks like, and we will come back with the models that actually fit.
          </p>
        </div>
        <div className="h-[3px] hazard-stripes-dim" />
      </section>

      <section className="mx-auto max-w-[88rem] px-4 py-14 sm:px-6 sm:py-20 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_18rem]">
          <QuoteForm />

          <aside className="space-y-8">
            <div className="border border-steel-700 bg-steel-900 p-6">
              <p className="font-mono text-[0.62rem] tracking-[0.18em] text-concrete uppercase">Why no prices</p>
              <p className="mt-3 text-[0.92rem] leading-relaxed text-concrete">
                Attachment pricing moves with exchange rate, spec, rotation options and carrier bracket. A published
                number would be wrong within a quarter. The guides explain what drives the number so you can interrogate
                a quote properly.
              </p>
            </div>
            <div className="border border-steel-700 bg-steel-900 p-6">
              <p className="font-mono text-[0.62rem] tracking-[0.18em] text-concrete uppercase">Before you send</p>
              <ul className="mt-3 space-y-3 text-[0.92rem] leading-relaxed text-concrete">
                <li>Check the auxiliary flow on the machine plate, not the brochure.</li>
                <li>Note whether you have a case drain line fitted.</li>
                <li>Have a rough annual hours figure — it changes buy versus hire.</li>
              </ul>
            </div>
            <div className="border border-steel-700 bg-steel-900 p-6">
              <p className="font-mono text-[0.62rem] tracking-[0.18em] text-concrete uppercase">Still deciding</p>
              <Link
                href="/forestry-machinery-guide/"
                className="mt-3 inline-flex items-center gap-2 text-[0.92rem] text-moss-400 hover:text-hazard"
              >
                Read the buyer&rsquo;s guide →
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Request a forestry attachment quote",
          url: absoluteUrl(SITE.quotePath),
          inLanguage: "en-AU",
        }}
      />
    </>
  );
}
