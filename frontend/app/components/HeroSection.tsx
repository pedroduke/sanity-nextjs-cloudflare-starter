import { ArrowRight, Github } from 'lucide-react'
import { StatChips } from './StatChips'
import { Terminal } from './Terminal'

export const HeroSection = () => {
  return (
    <section className="bg-[#14151f] border-b border-gray-800">
      <div className="container px-12 py-20 xl:py-28">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div className="flex flex-col gap-6">
            <span className="inline-block font-mono text-xs text-gray-400 bg-gray-800 border border-gray-600 rounded px-3 py-1 w-fit">
              Sanity · Next.js · Cloudflare
            </span>
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-gray-50 leading-[1.1]">
              A starter template for Sanity, Next.js, and Cloudflare.
            </h1>
            <div className="w-16 h-0.5 bg-brand rounded" />
            <p className="text-xl text-gray-400 leading-relaxed max-w-lg">
              A scalable starter template combining Sanity CMS, Next.js, and Cloudflare for building
              high-performance, content-first web applications.
            </p>
            <div className="flex items-center gap-3 flex-wrap">
              <a
                href="https://github.com/pedroduke/sanity-nextjs-cloudflare-starter"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gray-800 border border-gray-600 text-gray-400 font-mono text-sm rounded px-4 py-2.5 hover:text-gray-50 hover:border-gray-500 transition-all"
              >
                <Github size={15} />
                View on GitHub
              </a>
              <a
                href="https://developers.cloudflare.com/workers/framework-guides/web-apps/nextjs/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand text-white font-mono text-sm font-semibold rounded px-4 py-2.5 hover:bg-orange-600 transition-colors"
              >
                Cloudflare docs
                <ArrowRight size={13} />
              </a>
            </div>
          </div>

          {/* Right — terminal */}
          <div className="hidden xl:block">
            <Terminal />
            <StatChips />
          </div>
        </div>
      </div>
    </section>
  )
}
