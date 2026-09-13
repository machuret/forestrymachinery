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
    ];
  },
};

export default nextConfig;
