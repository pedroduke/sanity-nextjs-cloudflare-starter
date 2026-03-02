import type { Metadata } from 'next'

import { PageBuilder } from '@/app/components/PageBuilder'
import { sanityFetch } from '@/sanity/lib/live'
import { getPageQuery, pagesPathnames } from '@/sanity/lib/queries'
import { GetPageQueryResult } from '@/sanity.types'
import { notFound } from 'next/navigation'

type Props = {
  params: Promise<{ path: string[] }>
}

export async function generateStaticParams() {
  const { data } = await sanityFetch({
    query: pagesPathnames,
    perspective: 'published',
    stega: false,
  })
  return data
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params
  const pathname = '/' + params.path.join('/')
  const { data: page } = await sanityFetch({
    query: getPageQuery,
    params: { pathname },
    stega: false,
  })

  return {
    title: page?.name,
    description: page?.heading,
  } satisfies Metadata
}

export default async function Page(props: Props) {
  const params = await props.params
  const pathname = '/' + params.path.join('/')
  const { data: page } = await sanityFetch({ query: getPageQuery, params: { pathname } })

  if (!page?._id) {
    return notFound()
  }

  return (
    <div className="my-12 lg:my-24 text-gray-50">
      <PageBuilder page={page as GetPageQueryResult} />
    </div>
  )
}
