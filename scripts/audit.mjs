#!/usr/bin/env node
/**
 * Content and quality audit. Crawls the built site and fails on the problems
 * that are easy to ship without noticing: thin pages, broken internal links,
 * structured data that misrepresents the page, missing alt text, meta
 * descriptions outside the useful range, and horizontal overflow on a phone.
 *
 *   node scripts/audit.mjs [baseUrl]
 *
 * Exits non-zero if any ERROR-level check fails, so it can gate a release.
 */
import { chromium } from "playwright";

const BASE = (process.argv[2] ?? "http://localhost:3000").replace(/\/$/, "");

/** Pages where depth is not the job. Everything else must clear the minimum. */
const THIN_ALLOWED = new Set(["/request-quote/", "/sources/"]);
const MIN_WORDS = 700;
const DESC_MIN = 130;
const DESC_MAX = 165;
const TITLE_MAX = 70;
const MIN_INBOUND = 3;
/** Internal paths that intentionally live outside this site. */
const EXTERNAL_PREFIXES = [
  "/tree-shears/", "/stump-cutter/", "/stump-grinder/", "/forestry-mulchers/",
  "/forestry-grapple-saw/", "/forestry-log-grabs-forestry-grabs/",
  "/mechanical-pruning/", "/tillage/",
];

const errors = [];
const warnings = [];
const err = (u, m) => errors.push(`${u}  ${m}`);
const warn = (u, m) => warnings.push(`${u}  ${m}`);

const browser = await chromium.launch({
  executablePath: process.env.CHROMIUM_PATH || undefined,
});
const page = await browser.newPage();

const sitemap = await (await page.goto(`${BASE}/sitemap.xml`)).text();
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname);
if (urls.length === 0) {
  console.error("No URLs found in sitemap. Is the server running?");
  process.exit(1);
}

const inbound = new Map(urls.map((u) => [u, new Set()]));
const rows = [];

for (const url of urls) {
  const res = await page.goto(BASE + url, { waitUntil: "domcontentloaded" });
  if (res.status() !== 200) {
    err(url, `HTTP ${res.status()}`);
    continue;
  }

  const d = await page.evaluate(() => {
    const main = document.querySelector("main");
    const clone = main.cloneNode(true);
    clone.querySelectorAll("nav, footer, script, style").forEach((n) => n.remove());
    const text = clone.innerText.replace(/\s+/g, " ").trim();

    const headings = [...main.querySelectorAll("h1,h2,h3,h4,h5,h6")].map((h) =>
      Number(h.tagName[1]),
    );

    const ld = [...document.querySelectorAll('script[type="application/ld+json"]')].map((s) => {
      try {
        return JSON.parse(s.textContent);
      } catch {
        return { __parseError: true };
      }
    });

    return {
      words: text.split(" ").filter(Boolean).length,
      h1: main.querySelectorAll("h1").length,
      headings,
      title: document.title,
      desc: document.querySelector('meta[name="description"]')?.content ?? "",
      canonical: document.querySelector('link[rel="canonical"]')?.href ?? "",
      ogImage: document.querySelector('meta[property="og:image"]')?.content ?? "",
      imgs: [...main.querySelectorAll("img")].map((i) => ({
        src: i.getAttribute("src"),
        alt: i.getAttribute("alt"),
        w: i.getAttribute("width"),
        h: i.getAttribute("height"),
      })),
      links: [...document.querySelectorAll("a[href]")].map((a) => ({
        href: a.getAttribute("href"),
        text: (a.textContent || "").trim(),
        // An icon or logo link is fine as long as it carries an accessible name.
        label: a.getAttribute("aria-label") || a.querySelector("img")?.getAttribute("alt") || "",
      })),
      ld,
      lang: document.documentElement.lang,
    };
  });

  rows.push({ url, ...d });

  // --- content depth
  if (d.words < MIN_WORDS && !THIN_ALLOWED.has(url)) {
    err(url, `thin: ${d.words} words (minimum ${MIN_WORDS})`);
  }

  // --- head
  if (d.h1 !== 1) err(url, `${d.h1} h1 elements (expected exactly 1)`);
  if (!d.canonical) err(url, "no canonical");
  if (!d.desc) err(url, "no meta description");
  else if (d.desc.length < DESC_MIN || d.desc.length > DESC_MAX) {
    err(url, `meta description ${d.desc.length} chars (want ${DESC_MIN}-${DESC_MAX})`);
  }
  if (d.title.length > TITLE_MAX) warn(url, `title ${d.title.length} chars`);
  if (!d.ogImage) warn(url, "no og:image");
  if (d.lang !== "en-AU") warn(url, `lang="${d.lang}"`);

  // --- heading hierarchy: no skipped levels
  for (let i = 1; i < d.headings.length; i++) {
    if (d.headings[i] - d.headings[i - 1] > 1) {
      warn(url, `heading jumps h${d.headings[i - 1]} to h${d.headings[i]}`);
      break;
    }
  }

  // --- images
  for (const img of d.imgs) {
    if (!img.alt) err(url, `img without alt: ${img.src}`);
    else if (img.alt.length < 15) warn(url, `very short alt: "${img.alt}"`);
    if (!img.w || !img.h) warn(url, `img without dimensions: ${img.src}`);
  }

  // --- links
  for (const l of d.links) {
    if (!l.text && !l.label) err(url, `link with no accessible name: ${l.href}`);
    if (/^(click here|read more|here|link)$/i.test(l.text)) {
      warn(url, `non-descriptive anchor: "${l.text}"`);
    }
    if (l.href?.startsWith("/")) {
      const path = l.href.split("#")[0].split("?")[0];
      if (inbound.has(path) && path !== url) inbound.get(path).add(url);
      else if (!inbound.has(path) && !EXTERNAL_PREFIXES.includes(path) && path !== "") {
        err(url, `internal link to unknown path: ${path}`);
      }
    }
  }

  // --- structured data
  for (const block of d.ld) {
    if (block.__parseError) {
      err(url, "unparseable JSON-LD");
      continue;
    }
    if (block["@type"] === "FAQPage") {
      for (const q of block.mainEntity ?? []) {
        const a = q.acceptedAnswer?.text ?? "";
        if (!a) err(url, `FAQ with no answer text: "${q.name}"`);
        else if (a === q.name) err(url, `FAQ answer duplicates question: "${q.name}"`);
        else if (a.length < 40) err(url, `FAQ answer too short (${a.length}): "${q.name}"`);
      }
    }
    if (block["@type"] === "BreadcrumbList") {
      const items = block.itemListElement ?? [];
      items.forEach((i, idx) => {
        if (i.position !== idx + 1) err(url, `breadcrumb position out of order at ${idx}`);
        if (!i.item) err(url, `breadcrumb without item url: ${i.name}`);
      });
    }
  }
}

// --- inbound links
for (const [url, from] of inbound) {
  if (from.size < MIN_INBOUND) warn(url, `only ${from.size} inbound internal links`);
}

// --- mobile overflow, on every page
const mobile = await browser.newPage({ viewport: { width: 390, height: 844 } });
for (const { url } of rows) {
  await mobile.goto(BASE + url, { waitUntil: "domcontentloaded" });
  const o = await mobile.evaluate(() => ({
    scroll: document.documentElement.scrollWidth,
    client: document.documentElement.clientWidth,
  }));
  if (o.scroll > o.client + 1) err(url, `horizontal overflow at 390px (${o.scroll}px)`);
}
await mobile.close();
await browser.close();

// --- report
rows.sort((a, b) => a.words - b.words);
console.log("\nWORDS   IN   URL");
for (const r of rows) {
  console.log(
    String(r.words).padStart(5),
    String(inbound.get(r.url)?.size ?? 0).padStart(4),
    " ",
    r.url,
  );
}

const total = rows.reduce((s, r) => s + r.words, 0);
console.log(`\n${rows.length} pages, ${total.toLocaleString("en-AU")} words of main content`);

if (warnings.length) {
  console.log(`\n⚠  ${warnings.length} warnings`);
  for (const w of warnings) console.log("   " + w);
}

if (errors.length) {
  console.log(`\n✖  ${errors.length} errors`);
  for (const e of errors) console.log("   " + e);
  process.exit(1);
}

console.log("\n✓  no errors");
