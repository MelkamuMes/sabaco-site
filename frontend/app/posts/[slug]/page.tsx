import type { Metadata, ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation'
import { type PortableTextBlock } from 'next-sanity'
import Link from 'next/link'

// Use the template's built-in image component
import Image from '@/app/components/SanityImage'
import PortableText from '@/app/components/PortableText'
import { sanityFetch } from '@/sanity/lib/live'
import { postPagesSlugs, postQuery } from '@/sanity/lib/queries'
import Reveal from '@/app/components/ui/Reveal'

export async function generateStaticParams() {
  const { data } = await sanityFetch({
    query: postPagesSlugs,
    perspective: 'published',
    stega: false,
  })
  return data
}

export async function generateMetadata(
  props: any,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const params = await props.params
  const { data: post } = await sanityFetch({
    query: postQuery,
    params,
    stega: false,
  })

  return {
    title: post?.title,
    description: post?.excerpt,
  } satisfies Metadata
}

export default async function PostPage(props: any) {
  const params = await props.params
  const { data: post } = await sanityFetch({ query: postQuery, params })

  if (!post?._id) {
    return notFound()
  }

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)] pt-24 pb-20">
      <div className="max-w-[1140px] mx-auto px-6">
        
        {/* Back Button */}
        <Reveal>
          <Link href="/posts" className="inline-flex items-center text-sm font-bold text-[var(--gold)] hover:text-[var(--acc)] transition-colors mb-8">
            ← Back to all articles
          </Link>
        </Reveal>

        {/* Header */}
        <Reveal className="max-w-3xl mb-12">
          <h1 className="text-[clamp(32px,5vw,56px)] font-extrabold font-[var(--f-head)] leading-[1.1] tracking-tight mb-6">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-4 text-[var(--muted)] text-sm">
            {post.date && (
              <time>
                {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
              </time>
            )}
          </div>
        </Reveal>

        {/* Main Image */}
        {post.mainImage && (
          <Reveal delay={0.1} className="mb-14">
            <div className="relative w-full h-[40vh] md:h-[60vh] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(16,44,66,.15)] border border-[var(--line)]">
              <Image
                id={post.mainImage.asset?._ref || ''}
                alt={post.mainImage.alt || post.title}
                className="object-cover w-full h-full"
                width={1200}
                height={600}
                mode="cover"
                hotspot={post.mainImage.hotspot}
                crop={post.mainImage.crop}
              />
            </div>
          </Reveal>
        )}

        {/* Rich Text Body */}
        <Reveal delay={0.2} className="max-w-3xl mx-auto">
          <article className="prose prose-lg dark:prose-invert prose-headings:font-[var(--f-head)] prose-headings:font-bold prose-a:text-[var(--gold)] prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl prose-img:shadow-lg">
            {post.body?.length && (
              <PortableText
                value={post.body as PortableTextBlock[]}
              />
            )}
          </article>
        </Reveal>

      </div>
    </main>
  )
}