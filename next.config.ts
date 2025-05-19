import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/redirect',
        destination: 'https://sacraltrack.space',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
