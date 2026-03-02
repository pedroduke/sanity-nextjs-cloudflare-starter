import type { Metadata } from 'next'

import { sanityFetch } from '@/sanity/lib/live'
import { postQuery, postPathnames } from '@/sanity/lib/queries'
import { notFound } from 'next/navigation'
import { CustomPortableText } from '@/app/components/PortableText'
import { Avatar } from '@/app/components/Avatar'
import { SanityImage } from '@/app/components/SanityImage'
import { PortableTextBlock } from 'next-sanity'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const { data } = await sanityFetch({
    query: postPathnames,
    perspective: 'published',
    stega: false,
  })
  return data
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params
  const pathname = `/posts/${params.slug}`
  const { data: post } = await sanityFetch({
    query: postQuery,
    params: { pathname },
    stega: false,
  })

  return {
    title: post?.title,
    description: post?.excerpt || undefined,
  } satisfies Metadata
}

export default async function PostPage(props: Props) {
  const params = await props.params
  const pathname = `/posts/${params.slug}`
  const { data: post } = await sanityFetch({ query: postQuery, params: { pathname } })

  if (!post?._id) {
    return notFound()
  }

  return (
    <div className="my-12 lg:my-24 text-gray-50">
      <article className="max-w-4xl mx-auto px-6">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-50 mb-4">{post.title}</h1>
          {post.excerpt && <p className="text-xl text-gray-400 mb-6">{post.excerpt}</p>}
          {post.author && (
            <div className="flex items-center mb-6">
              <Avatar person={post.author} date={post.date} />
            </div>
          )}
        </header>

        {post.coverImage?.asset?._ref && (
          <div className="mb-8">
            <SanityImage
              id={post.coverImage.asset._ref}
              alt={post.coverImage.alt || post.title}
              width={1200}
              height={600}
              crop={post.coverImage.crop}
              hotspot={post.coverImage.hotspot}
              mode="cover"
              className="w-full rounded-lg"
            />
          </div>
        )}

        {post.content && post.content.length > 0 && (
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <CustomPortableText value={post.content as PortableTextBlock[]} />
          </div>
        )}
      </article>
    </div>
  )
}
