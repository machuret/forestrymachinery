import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  poweredByHeader: false,
  async redirects() {
    return [
      // /guides/ duplicated the pillar's job as an index of the same nine
      // guides. One strong hub, not two competing for the same intent.
      // Destination carries the trailing slash so this resolves in one hop.
      // Without it, trailingSlash adds a second redirect and the chain wastes crawl.
      { source: "/guides", destination: "/forestry-machinery-guide/", permanent: true },
      { source: "/guides/", destination: "/forestry-machinery-guide/", permanent: true },
      // Older production HTML pointed crawlers at this filename. Keep it as a
      // one-hop permanent alias while /sitemap.xml remains the canonical feed.
      { source: "/sitemap-index.xml", destination: "/sitemap.xml", permanent: true },
    ];
  },
};

export default nextConfig;
