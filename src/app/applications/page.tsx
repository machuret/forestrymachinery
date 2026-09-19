import type { Metadata } from "next";
import { ApplicationGrid } from "@/components/ApplicationGrid";
import { PageHero } from "@/components/PageHero";
import { JsonLd } from "@/components/JsonLd";
import { JobPath } from "@/components/JobPath";
import { APPLICATION_GUIDES } from "@/lib/applications";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Forestry Machinery by Application | Australia" },
  description:
    "Choose forestry machinery by the work: land clearing, utility vegetation management, bushfire fuel reduction, and farm rehabilitation in Australia.",
  alternates: { canonical: absoluteUrl("/applications/") },
  openGraph: {
    title: "Forestry Machinery by Application | Australia",
    description: "Choose forestry machinery by the job, site finish, carrier limits and material-handling sequence.",
    url: absoluteUrl("/applications/"),
    images: [APPLICATION_GUIDES[0].image],
  },
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
      <section className="mx-auto max-w-[88rem] px-4 pt-16 sm:px-6 sm:pt-24 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_28rem] lg:items-end">
          <div>
            <p className="eyebrow">The complete workflow</p>
            <h2 className="display mt-4 max-w-4xl text-4xl leading-none text-bone sm:text-5xl">The attachment is one station in a production line</h2>
          </div>
          <p className="text-[0.97rem] leading-relaxed text-concrete">
            A profitable method connects standing vegetation to the specified finish. Cutting faster has no value when handling, transport or ground preparation becomes the next queue.
          </p>
        </div>
        <div className="mt-10"><JobPath /></div>
        <div className="mt-12 grid gap-8 text-[0.98rem] leading-relaxed text-concrete lg:grid-cols-2">
          <div className="space-y-5">
            <p>Start by writing the handover condition in plain language. Does the client expect recoverable logs, material processed in place, a clear corridor, a pruned canopy or ground ready for another trade? A tree shear, mulcher, grapple saw and forestry grab can all work on the same vegetation, but each creates a different material stream and a different requirement for the machine behind it.</p>
            <p>Then quantify the material. Record diameter bands, density, species, moisture, terrain and obstacles across representative sections of the site. The largest stem proves whether the attachment can finish the job; the median stem and the number encountered per hectare determine production. A supplier demonstration in clean, evenly spaced material is useful only when those conditions resemble the contract.</p>
          </div>
          <div className="space-y-5">
            <p>Carrier selection is more than a tonne class. Check the lift chart at working radius with the hitch, bracket, rotator, attachment and retained section included. Confirm usable auxiliary flow at working pressure, return-line limits, circuit functions and cooling capacity. Continuous mulching, repeated saw cycles and controlled handling place very different demands on the same excavator.</p>
            <p>Finally, measure a completed unit rather than attachment cycles. Use hectares handed over, corridor metres reopened, stumps finished or tonnes sorted and loaded. Include travel, attachment changes, cleaning, wear-part service, refuelling and mobilisation. Those numbers reveal whether the next investment should increase cutting capacity, improve handling or reduce the time spent moving and supporting the carrier.</p>
          </div>
        </div>
      </section>
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
        <div className="mt-12 grid gap-8 text-[0.98rem] leading-relaxed text-concrete lg:grid-cols-2">
          <p>Use the application guides to prepare a common request for quotation before approaching suppliers. The same carrier data, site sample, required finish and annual-hour estimate should go to every respondent. Require each supplier to return the complete installed mass, hydraulic schedule, circuit functions, guarding, delivered price, commissioning scope, wear-part list and support assumptions in writing. That turns four attractive but incompatible offers into a comparison of working systems.</p>
          <p>Keep the site and machine evidence with the purchase file. Photos of representative vegetation, lift-chart pages, measured flow results and the accepted finish protect the decision when staff change or performance is questioned later. After commissioning, add real cycle time, fuel, wear and downtime against the same production unit used in the tender. The guide then becomes a feedback loop: field evidence improves the next rate, method and equipment choice instead of every project beginning from another brochure claim. Record the conditions beside every result so the number remains transferable.</p>
        </div>
        <div className="mt-16 border-t border-steel-700 pt-14">
          <p className="eyebrow">Before requesting prices</p>
          <h2 className="display mt-4 max-w-3xl text-4xl text-bone">Make every supplier quote the same working system</h2>
          <div className="mt-8 grid gap-px bg-steel-700 md:grid-cols-3">
            <article className="bg-steel-900 p-7">
              <h3 className="display text-2xl text-bone">Carrier schedule</h3>
              <p className="mt-4 text-[0.94rem] leading-relaxed text-concrete">Provide make, model, serial range, hitch, boom configuration, lift data, measured auxiliary flow, pressure, return arrangement and fitted case drain. Ask for attachment mass in the exact ordered configuration and the supplier’s written assessment of the pairing.</p>
            </article>
            <article className="bg-steel-900 p-7">
              <h3 className="display text-2xl text-bone">Site and outcome</h3>
              <p className="mt-4 text-[0.94rem] leading-relaxed text-concrete">Describe representative material, access, slope, contamination, retained assets and the finish used for acceptance. State expected annual hours and the production unit used in the tender so the recommendation reflects commercial duty rather than occasional capability.</p>
            </article>
            <article className="bg-steel-900 p-7">
              <h3 className="display text-2xl text-bone">Delivered package</h3>
              <p className="mt-4 text-[0.94rem] leading-relaxed text-concrete">Require bracket, hoses, couplers, controls, guarding, commissioning, training, freight, warranty exclusions and an initial wear-parts kit to be itemised. Compare delivered-and-working totals, regional parts support and the assumptions behind each recommendation.</p>
            </article>
          </div>
        </div>
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
      <JsonLd data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
        { "@type": "ListItem", position: 2, name: "Applications", item: absoluteUrl("/applications/") },
      ] }} />
    </>
  );
}
