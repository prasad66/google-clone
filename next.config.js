/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.google.co.uk']
  },env: {
    API_KEY: process.env.API_KEY,
  }
}

module.exports = nextConfig
