import { MetadataRoute } from 'next'

// Prefer Vercel environment to determine production vs non-production
const vercelEnv = process.env.VERCEL_ENV ?? process.env.NODE_ENV
const isProd = vercelEnv === 'production'

// Use the live domain in production; fall back to env/local in others
const siteUrl = isProd
  ? 'https://kansyl.juan-oclock.com'
  : process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: isProd
      ? { userAgent: '*', allow: '/' }
      : { userAgent: '*', disallow: '/' },
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}

