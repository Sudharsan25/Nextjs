/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: {
          bodySizeLimit: '10mb' // Increase to 10MB (adjust as needed)
        }
      }
};

export default nextConfig;
