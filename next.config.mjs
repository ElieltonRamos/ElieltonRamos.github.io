/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**/readme-typing-svg.demolab.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
