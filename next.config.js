const withPlugins = require('next-compose-plugins');
const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
};

module.exports = withPlugins([withContentlayer()], nextConfig);
