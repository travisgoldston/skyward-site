import type { NextConfig } from "next";

const legacyPages = [
  "ai-assisted-precision",
  "brand-strategy",
  "case-study",
  "content-creation",
  "data-driven-velocity",
  "google-ads",
  "meta-ads",
  "performance-marketing",
  "seo",
  "services",
  "web-design",
];

const cityPages = [
  "allen",
  "anna",
  "celina",
  "frisco",
  "mckinney",
  "melissa",
  "plano",
  "prosper",
];

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      ...legacyPages.map((page) => ({
        source: `/${page}`,
        destination: `/${page}.html`,
      })),
      ...cityPages.map((city) => ({
        source: `/${city}`,
        destination: `/${city}/index.html`,
      })),
      { source: "/blog", destination: "/blog/index.html" },
    ];
  },
};

export default nextConfig;
