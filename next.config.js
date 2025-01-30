/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-inline' 'unsafe-eval' https://js.stripe.com;
              style-src 'self' 'unsafe-inline';
              img-src 'self' data: https://*.stripe.com;
              frame-src 'self' https://*.stripe.com https://js.stripe.com;
              connect-src 'self' https://*.stripe.com https://api.stripe.com;
            `.replace(/\s+/g, ' ').trim()
          }
        ]
      }
    ]
  },
  trailingSlash: true,
}

module.exports = nextConfig
