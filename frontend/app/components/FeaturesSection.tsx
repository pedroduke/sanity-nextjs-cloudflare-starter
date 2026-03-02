export const FeaturesSection = () => {
  return (
    <section className="bg-[#1a1c27] border-t border-b border-gray-600">
      <div className="container px-12 py-16">
        <div className="mb-10">
          <p className="text-xs font-mono text-gray-400 mb-2">// features</p>
          <h2 className="text-3xl font-semibold text-gray-50">Built to be extended.</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              title: 'Page builder',
              body: 'Compose pages from reusable content blocks defined in your Sanity schema. Add new section types without touching layout code.',
              icon: '▦',
              iconColor: 'text-brand',
            },
            {
              title: 'Live preview & draft mode',
              body: 'Edit in Sanity Studio and see changes reflected instantly in a preview of your live site before publishing.',
              iconBorder: 'border-gray-600',
              icon: '◎',
              iconColor: 'text-brand',
            },
            {
              title: 'One-command deploy',
              body: 'Run pnpm run deploy and your site is live globally. No platform dashboard required.',
              iconBorder: 'border-gray-600',
              icon: '>_',
              iconColor: 'text-brand',
            },
            {
              title: 'TypeScript end-to-end',
              body: 'Types generated from your Sanity schema flow through to your components. No type mismatches between content and UI.',
              iconBorder: 'border-gray-600',
              icon: '{}',
              iconColor: 'text-brand',
            },
          ].map(feat => (
            <div
              key={feat.title}
              className="flex flex-col gap-4 p-7 bg-[#1e2030] border border-gray-600 rounded-md"
            >
              <div
                className={`w-8 h-8 flex items-center justify-center rounded bg-[#252837] border border-brand font-mono text-xs ${feat.iconColor}`}
              >
                {feat.icon}
              </div>
              <p className="text-lg font-mono font-semibold text-gray-50">{feat.title}</p>
              <p className="text-md text-gray-400 leading-relaxed">{feat.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
