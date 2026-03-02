const tools = [
  {
    name: 'Sanity CMS',
    description:
      'Manage all your content in Sanity Studio. Create pages, posts, and structured content with a flexible schema you own.',
    accentBorder: 'border-brand',
    accentFill: 'bg-brand',
    shape: 'square' as const,
  },
  {
    name: 'Next.js App Router',
    description:
      'Built on the App Router with React Server Components, TypeScript, and Tailwind CSS. Fast by default.',
    accentBorder: 'border-brand',
    accentFill: 'bg-brand',
    shape: 'circle' as const,
  },
  {
    name: 'Cloudflare Workers',
    description:
      'Deploy globally with a single command Powered by OpenNext — no custom server configuration needed.',
    accentBorder: 'border-brand',
    accentFill: 'bg-brand',
    shape: 'triangle' as const,
  },
]

export const TechTrio = () => {
  return (
    <section className="bg-[#1a1c27] border-t border-b border-gray-600">
      <div className="container px-12 py-16">
        <div className="mb-10">
          <p className="text-xs font-mono text-gray-400 mb-2">// what&apos;s included</p>
          <h2 className="text-3xl font-semibold text-gray-50">
            One template. Everything pre-configured.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-700">
          {tools.map((tool, i) => (
            <div
              key={tool.name}
              className={`flex flex-col gap-4 ${i === 0 ? 'md:pr-8' : i === 1 ? 'md:px-8' : 'md:pl-8'} py-6 md:py-0`}
            >
              <div
                className={`w-9 h-9 flex items-center justify-center rounded-md bg-[#252837] border ${tool.accentBorder}`}
              >
                <span
                  className={`w-4 h-4 ${tool.shape === 'circle' ? 'rounded-full' : tool.shape === 'square' ? 'rounded-sm' : 'rounded-none'} ${tool.accentFill}`}
                />
              </div>
              <p className="text-lg font-mono font-semibold text-gray-50">{tool.name}</p>
              <p className="text-md text-gray-400 leading-relaxed">{tool.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
