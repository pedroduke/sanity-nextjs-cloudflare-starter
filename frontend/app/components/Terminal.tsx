'use client'

import { useEffect, useState } from 'react'

const lines: TerminalLine[] = [
  { type: 'command', text: 'npx degit pedroduke/sanity-nextjs-cloudflare-starter my-site' },
  { type: 'command', text: 'cd my-site' },
  {
    type: 'command',
    text: 'cp frontend/.env.example frontend/.env.local && cp studio/.env.example studio/.env.local',
  },
  { type: 'command', text: 'pnpm install' },
  { type: 'output', text: '✓ Installing dependencies...' },
  { type: 'output', text: '✓ Linking Sanity project...' },
  { type: 'command', text: 'cd frontend && pnpm run deploy' },
  { type: 'success', text: '✓ Deployed → https://my-site.workers.dev' },
  { type: 'command', text: 'cd studio && pnpm run deploy' },
  { type: 'success', text: '✓ Success! Studio deployed to https://my-site.sanity.studio/' },
]

type TerminalLine = {
  type: 'command' | 'output' | 'success'
  text: string
}

const TerminalLine = ({ line, isTyping }: { line: TerminalLine; isTyping: boolean }) => {
  const color =
    line.type === 'command'
      ? 'text-gray-50'
      : line.type === 'success'
        ? 'text-[#cdea19]'
        : 'text-gray-500'

  return (
    <div className={`flex gap-2 ${line.type !== 'command' ? 'pl-4' : ''}`}>
      {line.type === 'command' && <span className="text-brand font-semibold">~</span>}
      <span className={color}>
        {line.text}
        {isTyping && <span className="w-2 h-3 bg-gray-50 inline-block ml-1 animate-pulse" />}
      </span>
    </div>
  )
}

export const Terminal = () => {
  const [displayedLines, setDisplayedLines] = useState<TerminalLine[]>([])
  const [currentLine, setCurrentLine] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const typingSpeed = 10

  useEffect(() => {
    if (currentLine >= lines.length) return

    const current: TerminalLine = lines[currentLine]

    if (current.type !== 'command') {
      const timeout = setTimeout(() => {
        setDisplayedLines((prev: TerminalLine[]) => [...prev, current])
        setCurrentLine(prev => prev + 1)
      }, 300)

      return () => clearTimeout(timeout)
    }

    const fullText = current.text

    if (currentText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setCurrentText(fullText.slice(0, currentText.length + 1))
      }, typingSpeed)

      return () => clearTimeout(timeout)
    } else {
      setDisplayedLines((prev: TerminalLine[]) => [...prev, current])
      setCurrentText('')
      setCurrentLine(prev => prev + 1)
    }
  }, [currentText, currentLine])

  return (
    <div className="bg-[#13141b] border border-gray-700 rounded-md overflow-hidden mb-4">
      {/* Terminal bar */}
      <div className="flex items-center gap-1.5 bg-[#1e2030] border-b border-[#2d3045] px-4 py-2.5">
        <span className="w-2.5 h-2.5 rounded-full bg-gray-500" />
        <span className="w-2.5 h-2.5 rounded-full bg-gray-500" />
        <span className="w-2.5 h-2.5 rounded-full bg-gray-500" />
        <span className="ml-auto text-[10px] font-mono text-gray-400">bash</span>
      </div>

      {/* Terminal body */}
      <div className="p-5 font-mono text-xs space-y-1.5">
        {displayedLines.map((line, index) => (
          <TerminalLine key={index} line={line} isTyping={false} />
        ))}

        {/* Currently typing line */}
        {currentLine < lines.length && (
          <TerminalLine
            line={{
              type: lines[currentLine].type as 'command' | 'output' | 'success',
              text: currentText,
            }}
            isTyping
          />
        )}
        {/* Final idle prompt */}
        {currentLine >= lines.length && (
          <div className="flex gap-2 mt-1">
            <span className="text-brand font-semibold">~</span>
            <span className="w-2 h-3 bg-gray-50 inline-block animate-pulse" />
          </div>
        )}
      </div>
    </div>
  )
}
