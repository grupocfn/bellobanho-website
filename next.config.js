/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['www.bellobanho.com.br', 'grupocfn-bellobanho.netlify.app']
  }
}

module.exports = nextConfig
