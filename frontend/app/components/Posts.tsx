import Link from 'next/link'

import { sanityFetch } from '@/sanity/lib/live'
import { morePostsQuery, allPostsQuery } from '@/sanity/lib/queries'
import { AllPostsQueryResult, MorePostsQueryResult } from '@/sanity.types'
import { DateComponent } from '@/app/components/Date'
import { Avatar } from '@/app/components/Avatar'
import { dataAttr } from '@/sanity/lib/utils'

const Post = ({ post }: { post: MorePostsQueryResult[number] }) => {
  const { _id, title, pathname, excerpt, date, author } = post

  return (
    <article
      data-sanity={dataAttr({ id: _id, type: 'post', path: 'title' }).toString()}
      key={_id}
      className="border border-gray-600 rounded-md p-6 bg-[#1e2030] flex flex-col justify-between transition-colors hover:border-gray-500 hover:bg-[#252837] relative"
    >
      <Link className="hover:text-brand underline transition-colors" href={pathname ?? '#'}>
        <span className="absolute inset-0 z-10" />
      </Link>
      <div>
        <h3 className="text-lg font-semibold text-gray-50 mb-3">{title}</h3>

        <p className="line-clamp-3 text-sm leading-6 text-gray-400 max-w-[70ch]">{excerpt}</p>
      </div>
      <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-600">
        {author && author.firstName && author.lastName && (
          <div className="flex items-center">
            <Avatar person={author} small={true} />
          </div>
        )}
        <time className="text-gray-500 text-xs font-mono tabular-nums" dateTime={date}>
          <DateComponent dateString={date} />
        </time>
      </div>
    </article>
  )
}

const Posts = ({ children }: { children: React.ReactNode }) => (
  <div>
    <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">{children}</div>
  </div>
)

export const MorePosts = async ({ skip, limit }: { skip: string; limit: number }) => {
  const { data } = await sanityFetch({
    query: morePostsQuery,
    params: { skip, limit },
  })

  if (!data || data.length === 0) {
    return null
  }

  return (
    <Posts>
      {data?.map(post => (
        <Post key={post._id} post={post} />
      ))}
    </Posts>
  )
}

export const AllPosts = async () => {
  const { data } = await sanityFetch({ query: allPostsQuery })

  return (
    <Posts>
      {data.map(post => (
        <Post key={post._id} post={post} />
      ))}
    </Posts>
  )
}
