import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "github.com", // example for avatar from GitHub
      "example.com", // add your external image domain(s) here
      "res.cloudinary.com", // example for images from Cloudinary
    ],
  },
};

export default nextConfig;
