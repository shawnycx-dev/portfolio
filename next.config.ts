import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

const nextConfig = {
  webpack: (webpackConfig: any) => {
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
        hostname: "shawnycx.com",
        pathname: "/api/media/file/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: "/api/media/file/**",
      },
    ],
  },
  serverExternalPackages: ["jose", "pino", "pino-pretty", "thread-stream"],
} satisfies NextConfig;

export default withPayload(nextConfig);

initOpenNextCloudflareForDev();
