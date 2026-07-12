import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "iamstivai.com" }],
        destination: "https://www.iamstivai.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
