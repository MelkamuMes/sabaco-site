import type {NextConfig} from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL('https://cdn.sanity.io/**'),
      new URL('https://images.unsplash.com/**'),
    ],
  },

   typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
