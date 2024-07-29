/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["docs.cms.org.in", "s3.ap-south-1.amazonaws.com"],
  },
}

export default nextConfig
