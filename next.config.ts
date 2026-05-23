import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    const noIndexHeaders = [
      {
        key: "X-Robots-Tag",
        value: "noindex, nofollow, noarchive, nosnippet, noimageindex",
      },
    ];

    return [
      {
        source: "/work/openpromo",
        headers: noIndexHeaders,
      },
      {
        source: "/design-dark.html",
        headers: noIndexHeaders,
      },
      {
        source: "/design-editorial.html",
        headers: noIndexHeaders,
      },
      {
        source: "/design-monet.html",
        headers: noIndexHeaders,
      },
      {
        source: "/design-monet2.html",
        headers: noIndexHeaders,
      },
      {
        source: "/design-taste.html",
        headers: noIndexHeaders,
      },
      {
        source: "/design-upgraded.html",
        headers: noIndexHeaders,
      },
      {
        source: "/reference-design.html",
        headers: noIndexHeaders,
      },
    ];
  },
};

export default nextConfig;
