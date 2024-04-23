import optimizeLocales from '@react-aria/optimize-locales-plugin'
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  experimental: {
    serverComponentsExternalPackages: [
      'rsc-mdx',
      '@shikijs/twoslash',
      '@shikijs/rehype',
    ],
  },
  webpack(config) {
    config.plugins.push(
      optimizeLocales.webpack({
        locales: ['en-US'],
      }),
    )
    return config
  },
}

export default nextConfig
