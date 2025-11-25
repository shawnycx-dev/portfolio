import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

const nextConfig = {
  webpack: ( webpackConfig: any ) => {
    webpackConfig.resolve.extensionAlias = {
      ".cjs": [".cts", ".cjs"],
      ".js": [".ts", ".tsx", ".js", ".jsx"],
      ".mjs": [".mts", ".mjs"],
    };

    return webpackConfig;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "assets.shawnycx.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "shawnycx-portfolio.shawnycx-dev.workers.dev",
        pathname: "/media/**",
      },
      {
        protocol: "https",
        hostname: "6f574ff2acf661d91f5dd0629c8f574e.r2.cloudflarestorage.com",
        pathname: "/shawnycx-portfolio/**",
      }
    ],
  },
  serverExternalPackages: [
    "jose",
    "pino",
    "pino-pretty",
    "thread-stream",
  ],
} satisfies NextConfig;

export default withPayload( nextConfig );

initOpenNextCloudflareForDev();