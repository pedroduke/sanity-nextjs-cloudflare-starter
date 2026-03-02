const chips = [
  { value: 'Global CDN', label: 'Cloudflare Workers' },
  { value: 'Live preview', label: 'Sanity Studio' },
  { value: 'Page builder', label: 'included' },
]

export const StatChips = () => {
  return (
    <div className="flex flex-wrap gap-2.5 mt-2">
      {chips.map(chip => (
        <div
          key={chip.value}
          className="flex items-center gap-2 bg-gray-800 border border-gray-600 rounded px-3 py-1.5"
        >
          <span className="text-xs font-mono font-semibold text-brand">{chip.value}</span>
          <span className="text-xs font-mono text-gray-400">{chip.label}</span>
        </div>
      ))}
    </div>
  )
}
