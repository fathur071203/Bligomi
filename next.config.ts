import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Situs lama punya menu Login; alamatnya diarahkan ke beranda agar tautan lama tidak mati.
  async redirects() {
    return [{ source: "/login", destination: "/", permanent: false }];
  },
};

export default nextConfig;
