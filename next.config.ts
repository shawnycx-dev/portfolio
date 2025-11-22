import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/**",
      },
    ],
  },
  serverExternalPackages: ["jose", "pino", "pino-pretty", "thread-stream"],
} satisfies NextConfig;

export default withPayload(nextConfig, { devBundleServerPackages: false });

import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
