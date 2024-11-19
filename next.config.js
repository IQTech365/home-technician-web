
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  publicPath: "/", // Or set this to your actual subdirectory path if needed
};

module.exports = nextConfig;


