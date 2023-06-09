/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["https://images.unsplash.com"],
  },
};

module.exports = nextConfig;
