/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" },
    ],
  },
  // Old routes → new architecture (preserve any inbound links / SEO).
  async redirects() {
    return [
      { source: "/work", destination: "/portfolio", permanent: true },
      { source: "/services", destination: "/advertising", permanent: true },
    ];
  },
};

export default nextConfig;
