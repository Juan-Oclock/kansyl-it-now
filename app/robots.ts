import { MetadataRoute } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'
const host = (() => {
  try { return new URL(siteUrl).host } catch { return siteUrl }
})()
const isProd = host.includes('kansyl.juan-oclock.com')

export default function robots(): MetadataRoute.Robots {
  return {
    rules: isProd
      ? { userAgent: '*', allow: '/' }
      : { userAgent: '*', disallow: '/' },
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}

