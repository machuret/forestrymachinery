import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { JsonLd } from "@/components/JsonLd";
import { nodeToText } from "@/lib/node-text";
import {
  Section,
  Prose,
  ShortAnswer,
  Callout,
  NumberedGrid,
  Checklist,
  FaqBlock,
  NextSteps,
  type Qa,
} from "@/components/content";
import { SITE, absoluteUrl } from "@/lib/site";
import { sourceById } from "@/lib/sources";

export const metadata: Metadata = {
  title: { absolute: "Forestry Attachment Tax and Depreciation | Australian Guide" },
  description:
    "How an excavator forestry attachment is treated for tax in Australia: the write-off threshold, the small business pool, and the timing trap that catches importers.",
  alternates: { canonical: absoluteUrl("/finance-and-tax/") },
  keywords: [
    "instant asset write off equipment",
    "excavator attachment depreciation",
    "small business pool depreciation",
    "plant and equipment tax australia",
  ],
};

const FAQS: Qa[] = [
  {
    q: "Can I instantly write off a forestry attachment?",
    a: (
      <>
        Usually not, because most forestry attachments cost well above the threshold. The instant asset write-off
        threshold is $20,000 per asset, and the 2026-27 Budget announced it would be made permanent from 1 July 2026 for
        small businesses with aggregated turnover under $10 million. As at mid-2026 the enabling legislation had not
        passed Parliament, and until it does the standing legislated threshold for assets first used from 1 July 2026 is
        $1,000.
      </>
    ),
  },
  {
    q: "What happens if the attachment costs more than the threshold?",
    a: (
      <>
        It joins the small business pool and depreciates at 15% in the first year and 30% in each year after. For most
        forestry attachments this, rather than an immediate write-off, is the relevant mechanism — which is worth
        knowing before you plan a purchase around an expected deduction.
      </>
    ),
  },
  {
    q: "Does the deduction depend on when I pay for it?",
    a: (
      <>
        No, and this is the trap. The test is that the asset is first used or installed ready for use within the income
        year, not that it was ordered or paid for. An imported attachment sitting on a wharf on 30 June does not
        qualify, however long ago the deposit was paid.
      </>
    ),
  },
  {
    q: "Is a turnkey kit part of the asset cost?",
    a: (
      <>
        Generally the cost of getting an asset ready for use forms part of its cost for depreciation purposes, which
        would typically include a machine-specific mounting bracket and hose kit supplied with the attachment. How that
        applies to your purchase is a question for your accountant, and it is worth asking because it can affect
        whether a purchase sits above or below a threshold.
      </>
    ),
  },
  {
    q: "Should I time a purchase around the end of the financial year?",
    a: (
      <>
        Only if the tool is one you were going to buy anyway. The deduction reduces the cost of an asset; it does not
        make an unnecessary asset free. If the utilisation case is not there, a tax-driven purchase is an attachment
        sitting idle in the yard with a smaller invoice attached. Work{" "}
        <Link href="/hire-vs-buy/">the utilisation decision</Link> first and let the tax treatment follow it.
      </>
    ),
  },
  {
    q: "Are wear parts treated differently to the attachment?",
    a: (
      <>
        Consumables and repairs are generally revenue expenses rather than capital, and are typically deductible in the
        year incurred rather than depreciated. Teeth, chains and blades normally fall in that category. Where a rebuild
        is substantial enough to be an improvement rather than a repair, the treatment can differ — another one for
        your accountant.
      </>
    ),
  },
  {
    q: "Does hiring change the tax position?",
    a: (
      <>
        Hire charges are generally an operating expense deductible as incurred, with no asset to depreciate and no
        threshold question. That simplicity is a genuine, if secondary, argument for hiring at low utilisation, and it
        sits alongside the commercial case rather than replacing it.
      </>
    ),
  },
  {
    q: "Where can I check the current thresholds myself?",
    a: (
      <>
        The Australian Taxation Office publishes current guidance on the instant asset write-off and simplified
        depreciation for small business. Thresholds and legislation status change, so check the current position rather
        than relying on any summary, including this one. The link is on the{" "}
        <Link href="/sources/">sources page</Link>.
      </>
    ),
  },
];

export default function FinanceTaxPage() {
  const ato = sourceById("ato-iawo");

  return (
    <>
      <PageHero
        eyebrow="Commercial"
        title="Tax treatment, stated accurately"
        crumb="Finance and tax"
        trail={[{ label: "Forestry Machinery Guide", href: "/forestry-machinery-guide/" }]}
        lead="Most forestry attachments cost well above the instant asset write-off threshold, which means the mechanism most buyers have in mind is usually not the one that applies. Here is what does, and the timing trap that catches importers every June."
      />

      <article className="mx-auto max-w-[88rem] px-4 py-14 sm:px-6 sm:py-20 lg:px-10">
        <Callout label="General information, not advice" tone="warn">
          This page summarises publicly available Australian Taxation Office guidance as general information. It is not
          tax advice, it does not account for your circumstances, and thresholds and legislation status change. Confirm
          your own position with your accountant before you time a purchase around any of it.
        </Callout>

        <div className="mt-10">
          <ShortAnswer>
            The instant asset write-off threshold is $20,000 per asset. Most forestry attachments cost more than that,
            so the asset joins the small business pool and depreciates at 15% in the first year and 30% each year
            after. The test for either is that the asset is first used or installed ready for use within the income
            year — not that it was ordered or paid for.
          </ShortAnswer>
        </div>

        <Section
          id="threshold"
          title="Where the threshold currently sits"
          lead="Stated with its legislative status, because the status is the part that keeps moving."
        >
          <Prose>
            <p>
              The instant asset write-off threshold is $20,000 per asset. In the 2026-27 Budget it was announced to be
              made permanent from 1 July 2026 for small businesses with aggregated turnover under $10 million. As at
              mid-2026 the enabling legislation had not passed Parliament, and until it does the standing legislated
              threshold for assets first used from 1 July 2026 is $1,000.
            </p>
            <p>
              That gap between announcement and legislation is why this page states the status rather than just the
              number. A budget announcement is a statement of intent; it is the legislation that determines what you can
              actually claim, and planning a June purchase around an unlegislated threshold is a risk your accountant
              should price rather than you.
            </p>
          </Prose>
          {ato && (
            <p className="mt-6 font-mono text-[0.65rem] tracking-[0.1em] text-muted uppercase">
              Source:{" "}
              <a href={ato.url} rel="nofollow noopener" target="_blank" className="text-moss-400 hover:text-hazard">
                {ato.publisher} — {ato.title}
              </a>
            </p>
          )}
        </Section>

        <Section
          id="pool"
          title="The small business pool, which is what usually applies"
          lead="For an attachment costing more than the threshold, this is the mechanism."
        >
          <div
            className="relative overflow-x-auto border border-steel-700 bg-steel-900"
            tabIndex={0}
            role="region"
            aria-label="Scrollable table"
          >
            <table className="w-full min-w-[36rem] border-collapse text-sm">
              <thead>
                <tr>
                  {["Year", "Pool rate", "What it means in practice"].map((h) => (
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
                {[
                  ["First year", "15%", "A part-year rate regardless of when in the year the asset entered the pool."],
                  ["Each year after", "30%", "Applied to the closing pool balance, so the deduction tapers over time."],
                ].map(([a, b, c]) => (
                  <tr key={a} className="border-t border-steel-800">
                    <th scope="row" className="px-4 py-4 text-left align-top font-semibold text-bone">
                      {a}
                    </th>
                    <td className="border-l border-steel-800 px-4 py-4 align-top font-mono text-hazard">{b}</td>
                    <td className="border-l border-steel-800 px-4 py-4 align-top text-concrete">{c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Prose className="mt-6">
            <p>
              The practical consequence for a buyer is that the deduction arrives over several years rather than in one.
              An attachment bought in the expectation of an immediate write-off, at a price above the threshold, will
              not produce the cash-flow effect the buyer had in mind — and that misunderstanding is common enough to be
              worth checking before the order goes in rather than after.
            </p>
          </Prose>
        </Section>

        <Section
          id="timing"
          title="The timing trap"
          lead="The single most expensive misunderstanding in this area, and it lands squarely on imported equipment."
        >
          <Callout label="Ordered is not installed" tone="warn">
            The test is that the asset is <strong>first used or installed ready for use</strong> within the income year,
            not ordered or paid for. An imported attachment sitting on a wharf on 30 June does not qualify.
          </Callout>

          <NumberedGrid
            columns={3}
            items={[
              {
                title: "Lead times are long",
                body: "European-manufactured attachments on sea freight are measured in weeks, not days. A June order is routinely a July or August asset, and the deduction moves with it.",
              },
              {
                title: "“Installed ready for use” includes the bracket",
                body: "An attachment that has arrived but has no machine-specific mounting bracket fitted is arguably not ready for use. Factor bracket lead time into the timing, not just the attachment.",
              },
              {
                title: "Plan backwards from the date",
                body: "If the timing genuinely matters to you, work backwards from 30 June through installation, freight and manufacturing, and have your accountant confirm the position before you commit.",
              },
            ]}
          />
        </Section>

        <Section
          id="hire"
          title="How hiring compares"
          lead="Different mechanism, and at low utilisation often the better commercial answer regardless of tax."
        >
          <Prose>
            <p>
              Hire charges are generally an operating expense deductible as incurred. There is no asset to depreciate,
              no threshold question and no timing trap. That simplicity is a real advantage, but it is a secondary one:
              the primary question is still whether your annual hours justify ownership at all.
            </p>
            <p>
              The tax treatment should follow the commercial decision rather than drive it. A deduction reduces the cost
              of an asset; it does not make an unnecessary asset free. Work through{" "}
              <Link href="/hire-vs-buy/">hire, buy or subcontract</Link> first, then take the answer to your accountant.
            </p>
          </Prose>
        </Section>

        <Section id="checklist" title="Before you time a purchase around tax">
          <Checklist
            title="Questions for your accountant"
            items={[
              "Current threshold and its legislative status",
              "Your aggregated turnover and eligibility",
              "Whether the attachment sits above or below the threshold",
              "Whether bracket and hose kit form part of the asset cost",
              "Expected date of first use or installation ready for use",
              "Realistic freight and installation lead time",
              "Pool balance implications in later years",
              "Treatment of wear parts and rebuilds",
              "Whether hire would suit your position better",
              "Any state-based incentives that may apply",
            ]}
          />
        </Section>

        <Section id="faq" title="Frequently asked questions">
          <FaqBlock items={FAQS} />
        </Section>

        <Section id="next" title="Where to go next">
          <NextSteps
            items={[
              { href: "/hire-vs-buy/", label: "Hire, buy or subcontract", why: "The commercial decision that should come before the tax one." },
              { href: "/costs/", label: "What attachments cost", why: "The five cost lines the deduction applies against." },
              { href: "/sources/", label: "Sources", why: "Where the ATO guidance summarised here comes from." },
              { href: SITE.quotePath, label: "Request a quote", why: "Get a written figure to take to your accountant." },
            ]}
          />
        </Section>
      </article>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: nodeToText(f.a) },
          })),
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Forestry attachment tax treatment in Australia",
          description: "Write-off threshold, small business pool and the first-use timing test, stated accurately.",
          inLanguage: "en-AU",
          mainEntityOfPage: absoluteUrl("/finance-and-tax/"),
          author: { "@type": "Organization", name: SITE.name },
          publisher: { "@type": "Organization", name: SITE.name },
        }}
      />
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
            { "@type": "ListItem", position: 3, name: "Finance and tax", item: absoluteUrl("/finance-and-tax/") },
          ],
        }}
      />
    </>
  );
}
