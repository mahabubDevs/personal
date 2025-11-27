/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/:path*',           // সব route capture করবে
        has: [{ type: 'host', value: 'mrbitx.com' }], // non-www
        destination: 'https://www.mrbitx.com/:path*', // www তে redirect
        permanent: true,
      },
    ]
  },
}

export default nextConfig
