/** @type {import('next').NextConfig} */

const configuredBasePath = process.env.BASE_PATH?.trim() ?? ""
const normalizedBasePath = configuredBasePath.replace(/^\/+|\/+$/g, "")
const basePath = normalizedBasePath ? `/${normalizedBasePath}` : ""

const nextConfig = {
  distDir: process.env.NODE_ENV === "development" ? ".next-dev" : ".next",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

if (basePath) {
  nextConfig.basePath = basePath
  nextConfig.assetPrefix = basePath
}

module.exports = nextConfig
