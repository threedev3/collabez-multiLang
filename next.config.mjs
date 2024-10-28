/** @type {import('next').NextConfig} */

import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  reactStrictMode: true,
  distDir: "build",
  // output: "export",
  images: {
    unoptimized: true, // Disable image optimization
  },
};

export default withNextIntl(nextConfig);
