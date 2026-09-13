#!/usr/bin/env node
/**
 * Accessibility audit with axe-core, at desktop and phone widths.
 *
 *   node scripts/a11y.mjs [baseUrl]
 *
 * Fails on any serious or critical violation. Moderate and minor issues are
 * reported so they can be judged rather than silently accumulating.
 */
import { chromium } from "playwright";
import AxeBuilder from "@axe-core/playwright";

const BASE = (process.argv[2] ?? "http://localhost:3000").replace(/\/$/, "");

const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined });
const page = await browser.newPage();

const sitemap = await (await page.goto(`${BASE}/sitemap.xml`)).text();
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname);

const blocking = [];
const advisory = new Map();

for (const width of [1440, 390]) {
  // axe-core/playwright requires a page from an explicit context.
  const context = await browser.newContext({
    viewport: { width, height: width === 390 ? 844 : 1000 },
  });
  const view = await context.newPage();
  for (const url of urls) {
    await view.goto(BASE + url, { waitUntil: "domcontentloaded" });
    const { violations } = await new AxeBuilder({ page: view })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    for (const v of violations) {
      const where = `${url} @${width}`;
      if (v.impact === "serious" || v.impact === "critical") {
        blocking.push(
          `${v.impact.toUpperCase()} ${v.id} — ${where}\n      ${v.help}\n      ${v.nodes[0]?.target?.join(" ") ?? ""}`,
        );
      } else {
        const key = `${v.impact} ${v.id} — ${v.help}`;
        advisory.set(key, (advisory.get(key) ?? 0) + 1);
      }
    }
  }
  await view.close();
  await context.close();
}

await browser.close();

console.log(`Checked ${urls.length} pages at 1440px and 390px.`);

if (advisory.size) {
  console.log(`\n⚠  advisory:`);
  for (const [k, n] of advisory) console.log(`   ${k} (${n} pages)`);
}

if (blocking.length) {
  console.log(`\n✖  ${blocking.length} serious or critical violations:`);
  for (const b of blocking) console.log("   " + b);
  process.exit(1);
}

console.log("\n✓  no serious or critical accessibility violations");
