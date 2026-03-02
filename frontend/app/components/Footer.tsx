import { Github } from 'lucide-react'

export const Footer = () => {
  return (
    <footer className="bg-[#1a1c27] border-t border-[#2d3045]">
      <div className="container px-12 py-14">
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-4 max-w-xs">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-sm bg-brand inline-block" />
              <span className="text-sm font-semibold font-mono text-gray-50">
                sanity-nextjs-cloudflare-starter
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Sanity · Next.js · Cloudflare Workers. The stack that runs at the edge.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-16">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-mono font-semibold text-gray-50 uppercase tracking-wide">
                Template
              </span>
              <a
                href="https://github.com/pedroduke/sanity-nextjs-cloudflare-starter"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 hover:text-gray-200 transition-colors"
              >
                GitHub
              </a>
              <a
                href="/about"
                className="text-sm text-gray-400 hover:text-gray-200 transition-colors"
              >
                Documentation
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-xs font-mono font-semibold text-gray-50 uppercase tracking-wide">
                Stack
              </span>
              <a
                href="https://sanity.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 hover:text-gray-200 transition-colors"
              >
                Sanity.io
              </a>
              <a
                href="https://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 hover:text-gray-200 transition-colors"
              >
                Next.js
              </a>
              <a
                href="https://developers.cloudflare.com/workers/framework-guides/web-apps/nextjs/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 hover:text-gray-200 transition-colors"
              >
                Cloudflare Workers
              </a>
              <a
                href="https://opennext.js.org/cloudflare"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 hover:text-gray-200 transition-colors"
              >
                OpenNext
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-gray-700 flex items-center justify-between">
          <span className="text-xs font-mono text-gray-400">
            Sanity + Next.js + Cloudflare Workers
          </span>
          <a
            href="https://github.com/pedroduke/sanity-nextjs-cloudflare-starter"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-gray-50 transition-colors"
          >
            <Github size={12} />
            View source
          </a>
        </div>
      </div>
    </footer>
  )
}
