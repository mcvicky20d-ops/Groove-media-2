/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disabled: StrictMode double-invokes effects in dev, which replayed the
  // one-shot intro animation (Preloader) twice. Production never double-invokes,
  // so this only affects the dev experience. Turning it off makes dev match prod.
  reactStrictMode: false,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" },
    ],
  },
  // Retired routes → live pages (preserve any inbound links / SEO).
  async redirects() {
    return [
      { source: "/work", destination: "/advertising", permanent: true },
      { source: "/services", destination: "/advertising", permanent: true },
      { source: "/portfolio", destination: "/advertising", permanent: true },
      { source: "/collaborate", destination: "/contact", permanent: true },
    ];
  },
};

export default nextConfig;
