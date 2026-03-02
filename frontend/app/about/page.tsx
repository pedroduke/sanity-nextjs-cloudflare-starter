import type { Metadata } from 'next'
import { ArrowUpRight, Github, BookOpen, Cloud, Package } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Documentation and resources for every part of the sanity-nextjs-cloudflare-starter stack.',
}

const docs = [
  {
    name: 'Sanity',
    url: 'https://sanity.io/docs',
    urlLabel: 'sanity.io/docs',
    description:
      'The headless CMS at the core of this template. Covers schema design, GROQ queries, the page builder pattern, real-time live preview, and the Sanity Studio UI.',
    icon: null,
    accentBorder: 'border-brand',
    accentIcon: 'text-brand',
    sanityIcon: true,
    nextIcon: false,
  },
  {
    name: 'Next.js',
    url: 'https://nextjs.org/docs',
    urlLabel: 'nextjs.org/docs',
    description:
      'The React framework behind the frontend. Learn about the App Router, Server Components, image optimisation, Tailwind CSS integration, and TypeScript support.',
    icon: null,
    accentBorder: 'border-brand',
    accentIcon: 'text-brand',
    sanityIcon: false,
    nextIcon: true,
  },
  {
    name: 'Cloudflare Workers',
    url: 'https://developers.cloudflare.com/workers/framework-guides/web-apps/nextjs/',
    urlLabel: 'developers.cloudflare.com',
    description:
      'The runtime powering this template. Learn about Workers, Wrangler CLI, KV storage, R2, D1, and every Cloudflare primitive you can bind to your application.',
    icon: Cloud,
    accentBorder: 'border-brand',
    accentIcon: 'text-brand',
    sanityIcon: false,
    nextIcon: false,
  },
  {
    name: 'OpenNext',
    url: 'https://opennext.js.org/cloudflare',
    urlLabel: 'opennext.js.org',
    description:
      'The open-source adapter that compiles Next.js for deployment outside Vercel. This template uses the Cloudflare adapter to produce a Worker-compatible build.',
    icon: Package,
    accentBorder: 'border-brand',
    accentIcon: 'text-brand',
    sanityIcon: false,
    nextIcon: false,
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#14151f] border-b border-gray-600">
        <div className="container px-12 py-20">
          <p className="text-xs font-mono text-gray-400 mb-4">// about this template</p>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-gray-50 leading-[1.1] max-w-3xl">
            Modern Web Development Powered by Sanity, Next.js, and Cloudflare
          </h1>
          <div className="w-14 h-0.5 bg-brand rounded mt-5" />
          <p className="mt-6 text-xl text-gray-400 leading-relaxed max-w-2xl">
            Build faster, smarter websites with Sanity CMS, Next.js, and Cloudflare. This starter
            template is optimized for content-first, high-performance applications, with
            comprehensive docs to guide you every step of the way.
          </p>
        </div>
      </section>

      {/* Docs grid */}
      <section className="bg-[#1a1c27] border-b border-gray-600">
        <div className="container px-12 py-16">
          <p className="text-xs font-mono text-gray-400 mb-2">// documentation</p>
          <h2 className="text-3xl font-semibold text-gray-50 mb-10">
            Documentation for Every Part of the Stack
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {docs.map(doc => (
              <div
                key={doc.name}
                className="flex flex-col gap-5 p-8 bg-[#1e2030] border border-gray-600 rounded-md"
              >
                {/* Card top */}
                <div className="flex items-center justify-between">
                  <div
                    className={`w-9 h-9 flex items-center justify-center rounded-md bg-[#252837] border border-brand`}
                  >
                    {doc.sanityIcon && (
                      <span className="w-4 h-4 rounded-sm bg-brand inline-block" />
                    )}
                    {doc.nextIcon && (
                      <span className="w-4 h-4 rounded-full bg-brand inline-block" />
                    )}
                    {doc.icon && <doc.icon size={16} className={doc.accentIcon} />}
                  </div>
                  <span className="text-[10px] font-mono text-gray-400 bg-gray-800 border border-gray-600 rounded-full px-2.5 py-1">
                    {doc.urlLabel}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-50">{doc.name}</h3>
                <p className="text-md text-gray-400 leading-relaxed flex-1">{doc.description}</p>
                <a
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-mono text-brand hover:text-[#cdea19] transition-colors"
                >
                  Read documentation <ArrowUpRight size={12} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#14151f] border-b border-gray-600">
        <div className="container px-12 py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex flex-col gap-3 max-w-xl">
            <p className="text-xs font-mono text-gray-400">// get started</p>
            <h2 className="text-3xl font-bold text-gray-50">Clone it. It&apos;s yours.</h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              Use the GitHub template, connect your Sanity project, and deploy. The README walks
              through each step.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="https://github.com/pedroduke/sanity-nextjs-cloudflare-starter#readme"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#1e2030] border border-gray-600 text-gray-400 font-mono text-sm rounded px-4 py-2.5 hover:text-gray-50 hover:border-gray-500 transition-all"
            >
              <BookOpen size={15} />
              Read the README
            </a>
            <a
              href="https://github.com/pedroduke/sanity-nextjs-cloudflare-starter"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gray-50 text-[#14151f] font-mono text-sm font-semibold rounded px-4 py-2.5 hover:bg-white transition-colors"
            >
              <Github size={15} />
              View on GitHub
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
