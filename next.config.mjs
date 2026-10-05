/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { formats: ['image/avif', 'image/webp'] },
  async redirects() {
    return [{ source: '/atelier', destination: '/about', permanent: true }];
  },
};
export default nextConfig;
