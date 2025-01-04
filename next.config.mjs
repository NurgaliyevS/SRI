/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'res.cloudinary.com',
          pathname: '/dp5ules9k/image/upload/**',
        },
      ],
    },
  };
  
  export default nextConfig;