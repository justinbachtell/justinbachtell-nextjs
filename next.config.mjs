import "./src/env.js";

/** @type {import('next').NextConfig} */

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */

const nextConfig = {
  images: {
    // Configure image optimization to resolve headers warnings
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: false,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    contentDispositionType: "attachment",
    // Disable image optimization in development to avoid headers warnings
    unoptimized: process.env.NODE_ENV === "development",
  },
};

export default nextConfig;
