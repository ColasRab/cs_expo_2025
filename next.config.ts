import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Fixes quality warnings (Next.js 16 requirement)
    qualities: [70],

    // Supabase bucket image pattern
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rwatggvmjanptoxqwdqu.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
    ],

    // Optional: skip Next.js Image Optimizer entirely if images fail
    // Set to true if 500 errors persist
    // unoptimized: true,
  },
};

export default nextConfig;
