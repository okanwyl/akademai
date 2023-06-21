/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["avatars.githubusercontent.com", "avatar.vercel.sh", "scholar.google.com"],
  },
  experimental: {
    serverComponentsExternalPackages: ["@tremor/react"],
  },
};

module.exports = nextConfig;
