/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ngwctajdniaxzgssivrb.supabase.co",
        // port: "",
        // pathname: "/storage/v1/object/public/cabin-images/**",
        // search: "",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        // port: "",
        // pathname: "/storage/v1/object/public/cabin-images/**",
        // search: "",
      },
    ],
  },
  // output: "export",
};

export default nextConfig;
