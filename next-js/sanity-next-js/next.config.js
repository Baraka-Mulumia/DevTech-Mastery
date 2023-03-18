/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // allowed image domains
  images: {
    domains: ['cdn.sanity.io'],
  },
};

module.exports = nextConfig;
