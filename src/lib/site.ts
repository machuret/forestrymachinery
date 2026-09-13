/**
 * The production origin. Every canonical, Open Graph URL, sitemap entry and
 * JSON-LD identifier is built from this, so getting it wrong tells Google the
 * real site lives somewhere else.
 *
 * It defaults to the live domain rather than a preview host on purpose: a
 * missing environment variable should degrade to "correct", not to "silently
 * canonicalise the whole site onto a Vercel preview URL".
 *
 * Use the www host. The apex redirects to it, and a canonical that points at a
 * redirecting URL wastes the signal.
 */
const PRODUCTION_ORIGIN = "https://www.forestrymachinery.com.au";

function resolveOrigin(): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!configured) return PRODUCTION_ORIGIN;

  try {
    const url = new URL(configured);
    // Strip any path, query or trailing slash: this is an origin, not a URL.
    return url.origin;
  } catch {
    return PRODUCTION_ORIGIN;
  }
}

export const SITE = {
  name: "Machinery Specialist",
  shortName: "Forestry Guide",
  tagline: "Forestry attachments, matched to the machine you already own.",
  url: resolveOrigin(),
  locale: "en_AU",
  region: "Australia",
  base: "South Windsor, NSW",
  phoneLabel: "Talk to a specialist",
  quotePath: "/request-quote/",
} as const;

/**
 * Absolute URL for an internal path.
 *
 * The site is built with `trailingSlash: true`, so every path except the root
 * must end in a slash. A canonical that omits it points at a URL that redirects,
 * which is the same mistake as pointing at the wrong host, just quieter.
 */
export function absoluteUrl(path: string): string {
  if (!path.startsWith("/")) throw new Error(`absoluteUrl expects a rooted path, got "${path}"`);

  // File paths keep their exact form. A sitemap declared as "sitemap.xml/" is
  // not the sitemap.
  const lastSegment = path.split("/").filter(Boolean).at(-1) ?? "";
  const isFile = lastSegment.includes(".");

  const normalised = path === "/" || isFile || path.endsWith("/") ? path : `${path}/`;
  return `${SITE.url}${normalised}`;
}
