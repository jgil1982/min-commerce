import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    "/api/**/*": ["./lib/prisma-client/**/*"],
  },
};

export default nextConfig;
