import type {NextConfig} from "next";

const nextConfig: NextConfig = {
  images: {unoptimized: true},
  devIndicators: {position: "bottom-left"},
  experimental: {
    optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
  },
};

export default nextConfig;
