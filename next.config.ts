import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [70],

    remotePatterns: [
      {
        protocol: "https",
        hostname: "rwatggvmjanptoxqwdqu.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
      {
        protocol: "https",
        hostname: "sdeirkuuvtttfxftgpdc.supabase.co", // <-- add this
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
};

export default nextConfig;
