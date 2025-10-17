import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const vercelEnv = process.env.VERCEL_ENV ?? process.env.NODE_ENV
  const isProd = vercelEnv === 'production'
  const baseUrl = isProd
    ? 'https://kansyl.juan-oclock.com'
    : process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'
  
  // Get current date for lastModified
  const currentDate = new Date()
  
  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]
}

