/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.wallex.ir",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
