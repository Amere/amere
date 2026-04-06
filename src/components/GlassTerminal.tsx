'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'

const codeLines = [
  '<span class="text-zinc-500">;; A macro for those who build.</span>',
  '(<span class="text-pink-400">defmacro</span> <span class="text-blue-400">with-greetings</span>',
  '  <span class="text-emerald-400">"Injects a builder\'s greeting into the execution context."</span>',
  '  [visitor &amp; body]',
  '  `(<span class="text-pink-400">let</span> [t# (<span class="text-cyan-400">java.time.Instant/now</span>)]',
  '     (<span class="text-pink-400">println</span> (<span class="text-cyan-400">str</span> <span class="text-emerald-400">"Welcome to the system, "</span> ~visitor <span class="text-emerald-400">"!"</span>))',
  '     (<span class="text-pink-400">println</span> (<span class="text-cyan-400">str</span> <span class="text-emerald-400">"Bootstrapping context at "</span> t# <span class="text-emerald-400">"..."</span>))',
  '     ~@body))',
  '',
  '(<span class="text-blue-400">with-greetings</span> <span class="text-emerald-400">"Stranger"</span>',
  '  (<span class="text-cyan-400">build-systems!</span>)',
  '  (<span class="text-cyan-400">scale-to-infinity!</span>))',
]

export function GlassTerminal({ className }: { className?: string }) {
  const [displayedLines, setDisplayedLines] = useState<string[]>([])
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    if (currentLineIndex >= codeLines.length) {
      setIsTyping(false)
      // Optional: reset after a delay to loop
      const timeout = setTimeout(() => {
        setDisplayedLines([])
        setCurrentLineIndex(0)
        setCurrentCharIndex(0)
        setIsTyping(true)
      }, 10000)
      return () => clearTimeout(timeout)
    }

    if (!isTyping) return

    const fullLine = codeLines[currentLineIndex]
    
    // Quick typing simulation (handle HTML tags instantly, delay physical chars)
    const timeout = setTimeout(() => {
      // Find logical next character index considering HTML tags
      let nextCharIndex = currentCharIndex + 1
      while (
        fullLine[nextCharIndex - 1] === '<' || 
        (nextCharIndex > 1 && fullLine.substring(0, nextCharIndex).lastIndexOf('<') > fullLine.substring(0, nextCharIndex).lastIndexOf('>'))
      ) {
        nextCharIndex++
      }

      const rawContent = fullLine.slice(0, nextCharIndex)
      
      setDisplayedLines((prev) => {
        const newLines = [...prev]
        newLines[currentLineIndex] = rawContent
        return newLines
      })

      if (nextCharIndex >= fullLine.length) {
        setCurrentLineIndex((prev) => prev + 1)
        setCurrentCharIndex(0)
      } else {
        setCurrentCharIndex(nextCharIndex)
      }
    }, Math.random() * 20 + 10) // Fast typing speed

    return () => clearTimeout(timeout)
  }, [currentLineIndex, currentCharIndex, isTyping])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={clsx(
        'relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/50 p-4 shadow-2xl backdrop-blur-xl',
        className
      )}
    >
      {/* Terminal Title Bar */}
      <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex gap-2">
          <div className="h-3 w-3 rounded-full bg-rose-500/80" />
          <div className="h-3 w-3 rounded-full bg-amber-500/80" />
          <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
        </div>
        <div className="font-mono text-xs text-zinc-500">core.clj</div>
      </div>

      {/* Terminal Content */}
      <div className="font-mono text-sm leading-relaxed text-zinc-300 sm:text-base">
        {displayedLines.map((line, i) => (
          <div key={i} className="flex">
            <span className="w-8 shrink-0 select-none text-zinc-700">{i + 1}</span>
            <span dangerouslySetInnerHTML={{ __html: line }} />
            {i === currentLineIndex && isTyping && (
              <span className="ml-1 inline-block h-4 w-2 animate-pulse bg-cyan-400/80 align-middle" />
            )}
          </div>
        ))}
        {!isTyping && (
          <div className="flex mt-1">
             <span className="w-8 shrink-0 select-none text-zinc-700">{codeLines.length + 1}</span>
             <span className="ml-1 inline-block h-4 w-2 animate-pulse bg-cyan-400/80 align-middle" />
          </div>
        )}
      </div>

      {/* Subtle background glow */}
      <div className="pointer-events-none absolute -inset-px rounded-2xl border border-cyan-500/20 opacity-50 mix-blend-overlay shadow-[inset_0_0_20px_rgba(6,182,212,0.1)]" />
    </motion.div>
  )
}
