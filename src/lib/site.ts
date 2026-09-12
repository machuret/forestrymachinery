export const SITE = {
  name: "Machinery Specialist",
  shortName: "Forestry Guide",
  tagline: "Forestry attachments, matched to the machine you already own.",
  url: process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://forestry-machinery-guide.vercel.app",
  locale: "en_AU",
  region: "Australia",
  base: "South Windsor, NSW",
  phoneLabel: "Talk to a specialist",
  quotePath: "/request-quote/",
} as const;

export function absoluteUrl(path: string): string {
  return `${SITE.url}${path}`;
}
