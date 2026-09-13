#!/usr/bin/env node
/**
 * Page-weight and paint timing on a throttled connection, because the audience
 * for this site reads it on a phone in a ute, not on office fibre.
 *
 *   node scripts/perf.mjs [baseUrl]
 */
import { chromium } from "playwright";

const BASE = (process.argv[2] ?? "http://localhost:3000").replace(/\/$/, "");
const SAMPLE = [
  "/", "/forestry-machinery-guide/", "/grapple-saw-guide/", "/costs/",
  "/compatibility/", "/wear-parts/", "/hydraulic-flow-calculator/", "/brands/omef/",
];

const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined });
const rows = [];

for (const path of SAMPLE) {
  const context = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const page = await context.newPage();

  const bytes = { doc: 0, css: 0, js: 0, img: 0, font: 0, other: 0 };
  page.on("response", async (res) => {
    try {
      const len = Number((await res.allHeaders())["content-length"] ?? 0);
      const type = res.request().resourceType();
      const key = { document: "doc", stylesheet: "css", script: "js", image: "img", font: "font" }[type] ?? "other";
      bytes[key] += len;
    } catch {
      /* response body gone; ignore */
    }
  });

  await page.goto(BASE + path, { waitUntil: "load" });
  const timing = await page.evaluate(
    () =>
      new Promise((resolve) => {
        const nav = performance.getEntriesByType("navigation")[0];
        const paints = Object.fromEntries(
          performance.getEntriesByType("paint").map((p) => [p.name, Math.round(p.startTime)]),
        );
        new PerformanceObserver((list) => {
          const last = list.getEntries().at(-1);
          resolve({
            fcp: paints["first-contentful-paint"] ?? 0,
            lcp: Math.round(last?.startTime ?? 0),
            dcl: Math.round(nav.domContentLoadedEventEnd),
            nodes: document.querySelectorAll("*").length,
          });
        }).observe({ type: "largest-contentful-paint", buffered: true });
        setTimeout(
          () =>
            resolve({
              fcp: paints["first-contentful-paint"] ?? 0,
              lcp: 0,
              dcl: Math.round(nav.domContentLoadedEventEnd),
              nodes: document.querySelectorAll("*").length,
            }),
          2500,
        );
      }),
  );

  const total = Object.values(bytes).reduce((a, b) => a + b, 0);
  rows.push({ path, total, ...bytes, ...timing });
  await context.close();
}

await browser.close();

const kb = (n) => (n / 1024).toFixed(0).padStart(5);
console.log("TOTAL   JS   IMG  FONT   CSS |  FCP   LCP  NODES | PAGE");
for (const r of rows) {
  console.log(
    `${kb(r.total)} ${kb(r.js)} ${kb(r.img)} ${kb(r.font)} ${kb(r.css)} |` +
      ` ${String(r.fcp).padStart(4)} ${String(r.lcp).padStart(5)} ${String(r.nodes).padStart(6)} | ${r.path}`,
  );
}
const worst = rows.reduce((a, b) => (b.total > a.total ? b : a));
console.log(`\nHeaviest page: ${worst.path} at ${(worst.total / 1024).toFixed(0)} KB`);
