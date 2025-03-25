import { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/introduce-myself",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;