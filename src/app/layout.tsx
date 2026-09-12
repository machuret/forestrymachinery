import type { Metadata, Viewport } from "next";
import { Inter, Oswald, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { JsonLd } from "@/components/JsonLd";
import { SITE, absoluteUrl } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Forestry Machinery Guide | Excavator Attachments Australia",
    template: "%s | Machinery Specialist",
  },
  description:
    "A commercial buyer's guide to forestry attachments in Australia. Tree shears, stump grinders, mulchers, grapple saws, grabs, pruners and tillage tools matched to carrier size, hydraulic flow and job type.",
  openGraph: {
    type: "website",
    locale: SITE.locale,
    siteName: SITE.name,
    url: SITE.url,
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#08090a",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU" className={`${inter.variable} ${oswald.variable} ${plexMono.variable}`}>
      <body className="min-h-screen antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] focus:bg-hazard focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:text-steel-950"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            name: SITE.name,
            url: SITE.url,
            areaServed: SITE.region,
            address: {
              "@type": "PostalAddress",
              addressLocality: "South Windsor",
              addressRegion: "NSW",
              addressCountry: "AU",
            },
            knowsAbout: [
              "forestry machinery",
              "excavator attachments",
              "tree shears",
              "stump grinders",
              "forestry mulchers",
              "grapple saws",
            ],
          }}
        />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: `${SITE.name} — Forestry Attachment Guide`,
            url: absoluteUrl("/"),
            inLanguage: "en-AU",
          }}
        />
      </body>
    </html>
  );
}
