import type { NextConfig } from "next";

const isGithubPages = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  assetPrefix: isGithubPages ? "/free-nextjs-admin-dashboard-main/" : "",
  images: {
    unoptimized: true,
  },
  output: "export", // ✅ enables static export

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default nextConfig;
