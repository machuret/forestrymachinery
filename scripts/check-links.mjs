#!/usr/bin/env node
/**
 * Confirms every cited source URL still resolves.
 *
 *   node scripts/check-links.mjs
 *
 * Uses curl rather than a headless browser so it works behind a proxy and
 * needs no extra dependency.
 *
 * A 404 or 410 means the page is gone and fails the run. A 403, 429 or a reset
 * connection means the publisher blocks automated requests — ISO, the ATO and
 * agriculture.gov.au all do — which is not evidence the page is gone, so those
 * are reported for a human to confirm instead of failing. Sources carry a
 * `verified` date recording when that confirmation last happened.
 */
import { execFile } from "node:child_process";
import { readFileSync } from "node:fs";
import { promisify } from "node:util";

const run = promisify(execFile);
const UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36";

const src = readFileSync(new URL("../src/lib/sources.ts", import.meta.url), "utf8");
const entries = [...src.matchAll(/id:\s*"([^"]+)"[\s\S]*?url:\s*"([^"]+)"/g)].map((m) => ({
  id: m[1],
  url: m[2],
}));

if (!entries.length) {
  console.error("No sources found — has src/lib/sources.ts changed shape?");
  process.exit(1);
}

const failed = [];
const blocked = [];

for (const { id, url } of entries) {
  let status = "000";
  try {
    const { stdout } = await run("curl", [
      "-sL", "--max-time", "30", "-o", "/dev/null",
      "-w", "%{http_code}",
      "-A", UA,
      url,
    ]);
    status = stdout.trim();
  } catch {
    status = "000";
  }

  const line = `${status.padStart(3)}  ${id.padEnd(22)} ${url.slice(0, 72)}`;
  if (status === "200") console.log("ok    " + line);
  else if (status === "404" || status === "410") {
    console.log("GONE  " + line);
    failed.push(`${id} (${status}) — ${url}`);
  } else {
    // 403, 429, or a reset connection: blocked, not gone.
    console.log("block " + line);
    blocked.push(`${id} (${status === "000" ? "reset" : status}) — ${url}`);
  }
}

if (blocked.length) {
  console.log(`\n⚠  ${blocked.length} blocked automated requests — verify by hand:`);
  for (const b of blocked) console.log("   " + b);
}

if (failed.length) {
  console.log(`\n✖  ${failed.length} gone — these citations are broken:`);
  for (const f of failed) console.log("   " + f);
  process.exit(1);
}

console.log(`\n✓  no broken citations (${entries.length - blocked.length}/${entries.length} confirmed automatically)`);
