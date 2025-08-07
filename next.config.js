/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['localhost', 'blob.v0.dev', 'sjc.microlink.io'],
    unoptimized: true
  },
  experimental: {
    appDir: true
  },
  swcMinify: true,
  reactStrictMode: true
}

module.exports = nextConfig
