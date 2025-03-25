import { NextConfig } from "next";
/**@type {import('next').NextConfig} */


const nextConfig: NextConfig = {
  output: "export",
  basePath: "/introduce-myself",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

