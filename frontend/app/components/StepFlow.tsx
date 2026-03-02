const steps = [
  {
    number: '01',
    title: 'Clone & configure',
    body: 'Clone the repo and add your Sanity project ID and dataset to the environment variables. The schema is already set up.',
    command: 'git clone ... && cp .env.example .env.local',
    commandColor: 'text-gray-400',
  },
  {
    number: '02',
    title: 'Build your content',
    body: 'Open Sanity Studio and start creating pages using the page builder. Create and arrange content blocks as you need.',
    command: 'pnpm dev',
    commandColor: 'text-gray-400',
  },
  {
    number: '03',
    title: 'Deploy to Cloudflare',
    body: "Run pnpm run deploy and your site is live globally across Cloudflare's network.",
    command: 'pnpm run deploy',
    commandColor: 'text-[#cdea19]',
  },
]

export const StepFlow = () => {
  return (
    <section className="bg-[#14151f] border-t border-b border-gray-600">
      <div className="container px-12 py-16">
        <div className="mb-10">
          <p className="text-xs font-mono text-gray-400 mb-2">// how to use it</p>
          <h2 className="text-3xl font-semibold text-gray-50">From first clone to live site.</h2>
          <p className="mt-2 text-lg text-gray-400 max-w-lg">
            Three steps is all it takes. Clone the repo, write your content in Sanity Studio, and
            deploy with a single command.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-700 border border-gray-600 rounded-md overflow-hidden">
          {steps.map(step => (
            <div key={step.number} className="flex flex-col gap-4 p-8 bg-[#1e2030]">
              <span className="text-sm font-mono font-semibold text-brand">{step.number}</span>
              <h3 className="text-lg font-semibold text-gray-50">{step.title}</h3>
              <p className="text-md text-gray-400 leading-relaxed flex-1">{step.body}</p>
              <div className="flex items-center gap-2 bg-[#14151f] rounded px-3 py-2 mt-2">
                <span className="text-brand font-mono text-sm font-semibold">~</span>
                <code className={`text-sm font-mono ${step.commandColor}`}>{step.command}</code>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
