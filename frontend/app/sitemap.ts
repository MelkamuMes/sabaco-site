import { MetadataRoute } from 'next'
import { sanityFetch } from '@/sanity/lib/live'
import { sitemapData } from '@/sanity/lib/queries'
import { headers } from 'next/headers'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const sitemap: MetadataRoute.Sitemap = []
  
  try {
    const allPostsAndPages = await sanityFetch({
      query: sitemapData,
    })
    
    const headersList = await headers()
    const domain: string = headersList.get('host') as string || 'sabaco.com' // Fallback just in case
    
    sitemap.push({
      url: domain as string,
      lastModified: new Date(),
      priority: 1,
      changeFrequency: 'monthly',
    })

    if (allPostsAndPages != null && allPostsAndPages.data.length != 0) {
      let priority: number
      let changeFrequency:
        | 'monthly'
        | 'always'
        | 'hourly'
        | 'daily'
        | 'weekly'
        | 'yearly'
        | 'never'
        | undefined
      let url: string

      for (const p of allPostsAndPages.data) {
        switch (p._type) {
          case 'page':
            priority = 0.8
            changeFrequency = 'monthly'
            url = `${domain}/${p.slug}`
            break
          case 'post':
            priority = 0.5
            changeFrequency = 'never'
            url = `${domain}/posts/${p.slug}`
            break
        }
        sitemap.push({
          lastModified: p._updatedAt || new Date(),
          priority,
          changeFrequency,
          url,
        })
      }
    }
  } catch (error) {
    // This prevents the build from failing if Sanity env vars are missing
    console.error("Sitemap generation skipped due to missing env vars or network error:", error)
  }

  return sitemap
}