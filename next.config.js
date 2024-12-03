
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash:true,
  images: {
    unoptimized: true,
  },
  typescript:{
    ignoreBuildErrors: true
  },
  eslint:{
    ignoreDuringBuilds: true
  },
  // publicPath: "/", // Or set this to your actual subdirectory path if needed
};

module.exports = nextConfig;


