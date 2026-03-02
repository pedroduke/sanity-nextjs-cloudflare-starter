import { Suspense } from 'react'
import { AllPosts } from './Posts'

export const BlogPostsSection = async () => {
  return (
    <section className="bg-[#14151f] border-t border-gray-600">
      <div className="container px-12 py-16">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs font-mono text-gray-400 mb-2">// latest posts</p>
            <h2 className="text-3xl font-semibold text-gray-50">From the blog</h2>
            <p className="mt-2 text-lg leading-7 text-gray-400">
              This blog post is populated from your Sanity Studio.
            </p>
          </div>
        </div>
        <Suspense>{await AllPosts()}</Suspense>
      </div>
    </section>
  )
}
