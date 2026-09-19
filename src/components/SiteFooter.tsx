import Link from "next/link";
import { CATEGORY_META } from "@/lib/categories";
import { SITE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-steel-700 bg-steel-900">
      <div className="h-[3px] hazard-stripes-dim" />
      <div className="mx-auto max-w-[88rem] px-4 py-16 sm:px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <p className="eyebrow">Machinery Specialist</p>
            <p className="display mt-4 text-2xl text-bone sm:text-3xl">
              Bring three numbers.
              <br />
              Leave with a shortlist.
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-concrete">
              Operating weight, auxiliary flow in litres per minute, working pressure in bar. With those, matching an
              attachment to your carrier takes about ten minutes.
            </p>
            <Link
              href={SITE.quotePath}
              className="mt-6 inline-flex items-center gap-2 bg-hazard px-5 py-3 font-mono text-[0.7rem] font-semibold tracking-[0.14em] text-steel-950 uppercase transition-colors hover:bg-moss-400"
            >
              Request a quote →
            </Link>
          </div>

          <div>
            <p className="font-mono text-[0.65rem] tracking-[0.2em] text-concrete uppercase">Category guides</p>
            <ul className="mt-5 space-y-2.5">
              {CATEGORY_META.map((c) => (
                <li key={c.slug}>
                  <Link href={`/${c.slug}/`} className="text-sm text-bone/80 transition-colors hover:text-hazard">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[0.65rem] tracking-[0.2em] text-concrete uppercase">Tools and reference</p>
            <ul className="mt-5 space-y-2.5">
              {[
                ["/forestry-machinery-guide/", "The buyer\u2019s guide"],
                ["/applications/", "Machinery by application"],
                ["/industries/", "Machinery by industry"],
                ["/tutorials/", "Field tutorials"],
                ["/operations/", "Operation and maintenance guides"],
                ["/costs/", "What attachments cost"],
                ["/hire-vs-buy/", "Hire, buy or subcontract"],
                ["/hydraulic-flow-calculator/", "Flow calculator"],
                ["/cost-per-stump-calculator/", "Cost per stump calculator"],
                ["/cost-per-hectare-calculator/", "Cost per hectare calculator"],
                ["/compatibility/", "Carrier size guide"],
                ["/wear-parts/", "Wear parts"],
                ["/troubleshooting/", "Troubleshooting"],
                ["/support-and-parts-australia/", "Parts and support in Australia"],
                ["/finance-and-tax/", "Finance and tax"],
                ["/as-4373-mechanised-pruning/", "AS 4373 and mechanised pruning"],
                ["/compare/", "Attachment comparisons"],
                ["/brands/", "Manufacturers"],
                ["/glossary/", "Glossary"],
                ["/sources/", "Sources and editorial standards"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-bone/80 transition-colors hover:text-hazard">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-8 font-mono text-[0.65rem] tracking-[0.2em] text-concrete uppercase">Supplied from</p>
            <p className="mt-3 text-sm text-bone/80">
              {SITE.base}
              <br />
              Delivered across {SITE.region}
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-steel-700 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[0.65rem] tracking-[0.14em] text-muted uppercase">
            © {new Date().getFullYear()} {SITE.name}. Specifications are indicative and subject to configuration.
          </p>
          <p className="max-w-md font-mono text-[0.65rem] leading-relaxed tracking-[0.08em] text-muted uppercase">
            Tax and compliance content is general information, not advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
