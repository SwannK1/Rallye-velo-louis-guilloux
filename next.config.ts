import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // AVIF d'abord (mieux compressé, sans perte visible sur les photos
    // patrimoniales), WebP en repli pour les navigateurs qui ne le
    // supportent pas encore.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
