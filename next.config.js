/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove experimental.turbo entirely
  compiler: {
    // Optional: enable SWC minification
    removeConsole: true,
  },
};

module.exports = nextConfig;
