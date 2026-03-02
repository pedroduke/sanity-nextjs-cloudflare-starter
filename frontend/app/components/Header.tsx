import Link from 'next/link'
import { Github } from 'lucide-react'

export const Header = async () => {
  return (
    <header className="fixed z-50 h-18 inset-0 bg-[#14151f]/90 flex items-center backdrop-blur-md border-b border-gray-600">
      <div className="container py-0 px-12">
        <div className="flex items-center justify-end md:justify-between gap-5">
          <Link className="items-center gap-2 hidden md:flex" href="/">
            <span className="w-2 h-2 rounded-full bg-brand inline-block" />
            <span className="text-sm font-semibold font-mono text-gray-50">
              sanity-nextjs-cloudflare-starter
            </span>
          </Link>

          <nav>
            <ul role="list" className="flex items-center gap-6 leading-5 text-sm font-mono">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-gray-50 transition-colors">
                  About
                </Link>
              </li>
              <li className="w-px h-4 bg-gray-600" />
              <li>
                <a
                  href="https://github.com/pedroduke/sanity-nextjs-cloudflare-starter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-50 text-[#14151f] rounded px-3 py-1.5 font-semibold hover:bg-gray-200 transition-colors"
                >
                  <Github size={13} />
                  <span>View on GitHub</span>
                </a>
              </li>
              <li className="hidden lg:block">
                <a
                  href="https://deploy.workers.cloudflare.com/?url=https://github.com/pedroduke/sanity-nextjs-cloudflare-starter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://deploy.workers.cloudflare.com/button"
                    alt="Deploy to Cloudflare"
                    className="h-8"
                  />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
