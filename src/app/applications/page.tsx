import type { Metadata } from "next";
import { ApplicationGrid } from "@/components/ApplicationGrid";
import { PageHero } from "@/components/PageHero";
import { JsonLd } from "@/components/JsonLd";
import { APPLICATION_GUIDES } from "@/lib/applications";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Forestry Machinery by Application | Australian Field Guide",
  description:
    "Choose forestry machinery by the work: land clearing, utility vegetation management, bushfire fuel reduction, and farm rehabilitation in Australia.",
  alternates: { canonical: absoluteUrl("/applications/") },
};

export default function ApplicationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Start with the work"
        title="One carrier. Different jobs. A deliberate attachment sequence."
        crumb="Applications"
        lead="Brochures organise machinery by product. Contractors make money by outcome. These field guides begin with the site, the specification and the material left behind."
      />
      <section className="mx-auto max-w-[88rem] px-4 py-16 sm:px-6 sm:py-24 lg:px-10">
        <div className="mb-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_28rem] lg:items-end">
          <div>
            <p className="eyebrow">Choose the operating environment</p>
            <h2 className="display mt-4 max-w-3xl text-4xl text-bone sm:text-5xl">Plan the whole job, not just the first cut</h2>
          </div>
          <p className="text-[0.97rem] leading-relaxed text-concrete">
            Each guide connects job conditions to attachment type, carrier constraints, material handling and the next productive step.
          </p>
        </div>
        <ApplicationGrid />
      </section>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Forestry machinery by application",
          url: absoluteUrl("/applications/"),
          hasPart: APPLICATION_GUIDES.map((guide) => ({
            "@type": "Article",
            name: guide.title,
            url: absoluteUrl(`/applications/${guide.slug}/`),
          })),
        }}
      />
    </>
  );
}
