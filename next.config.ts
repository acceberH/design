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
        source: "/:path*",
        headers: noIndexHeaders,
      },
    ];
  },
};

export default nextConfig;
