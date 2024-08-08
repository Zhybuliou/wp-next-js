/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'admin-taxes.x10.mx',
      },
    ],
  },
};

export default nextConfig;
