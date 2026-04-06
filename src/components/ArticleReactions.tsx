'use client'

import { useState, useEffect } from 'react'
import clsx from 'clsx'

function ThumbUpIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
    </svg>
  )
}

function ThumbDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.367 13.5c-.806 0-1.533.446-2.031 1.08a9.041 9.041 0 01-2.861 2.4c-.723.384-1.35.956-1.653 1.715a4.498 4.498 0 00-.322 1.672V21a.75.75 0 01-.75.75 2.25 2.25 0 01-2.25-2.25c0-1.152.26-2.243.723-3.218.266-.558-.107-1.282-.725-1.282H4.375c-1.026 0-1.945-.694-2.054-1.715-.045-.422-.068-.85-.068-1.285a11.95 11.95 0 012.649-7.521c.388-.482.987-.729 1.605-.729H9.52c.483 0 .964.078 1.423.23l3.114 1.04a4.501 4.501 0 001.423.23h1.616M9.75 15h-2.25m8.596-9.75c-.083-.205-.173-.405-.27-.602-.197-.4.078-.898.523-.898h.908c.889 0 1.713.518 1.972 1.368.324 1.066.521 2.244.521 3.507 0 1.553-.295 3.036-.831 4.398-.28.718-1.06 1.17-1.893 1.17h-1.053c-.472 0-.745-.556-.5-.96a8.958 8.958 0 001.302-4.665c0-1.194-.232-2.333-.654-3.375z" />
    </svg>
  )
}

export function ArticleReactions({ slug }: { slug: string }) {
  const [counts, setCounts] = useState({ up: 0, down: 0 })
  const [voted, setVoted] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`/api/reactions?slug=${slug}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) setCounts(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))

    const stored = localStorage.getItem(`reaction_${slug}`)
    if (stored) setVoted(stored)
  }, [slug])

  const handleVote = async (action: 'up' | 'down') => {
    // Prevent double voting globally
    if (voted) return

    // Optimistic UI update
    setVoted(action)
    setCounts((prev) => ({ ...prev, [action]: prev[action] + 1 }))
    localStorage.setItem(`reaction_${slug}`, action)

    try {
      await fetch('/api/reactions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug, action }),
      })
    } catch (err) {
      console.error('Failed to register vote', err)
    }
  }

  if (loading) return null

  return (
    <div className="mt-16 flex flex-col items-center justify-center border-t border-white/5 py-10">
      <p className="font-mono text-sm uppercase tracking-widest text-zinc-500 mb-6">
        Did you find this valuable?
      </p>
      <div className="flex items-center gap-6">
        <button
          onClick={() => handleVote('up')}
          disabled={voted !== null}
          className={clsx(
            'group flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300',
            voted === 'up'
              ? 'border-cyan-400/50 bg-cyan-400/10 text-cyan-400 glow-effect-cyan'
              : voted !== null
              ? 'border-transparent text-zinc-600 opacity-50 cursor-not-allowed'
              : 'border-white/10 bg-white/5 text-zinc-400 hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-400'
          )}
        >
          <ThumbUpIcon
            className={clsx(
              'h-5 w-5 transition-transform duration-300',
              voted !== null ? '' : 'group-hover:-translate-y-0.5'
            )}
          />
          <span className="font-mono">{counts.up}</span>
        </button>

        <button
          onClick={() => handleVote('down')}
          disabled={voted !== null}
          className={clsx(
            'group flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300',
            voted === 'down'
              ? 'border-red-400/50 bg-red-400/10 text-red-400 glow-effect-red'
              : voted !== null
              ? 'border-transparent text-zinc-600 opacity-50 cursor-not-allowed'
              : 'border-white/10 bg-white/5 text-zinc-400 hover:border-red-400/30 hover:bg-red-400/10 hover:text-red-400'
          )}
        >
          <span className="font-mono">{counts.down}</span>
          <ThumbDownIcon
            className={clsx(
              'h-5 w-5 transition-transform duration-300',
              voted !== null ? '' : 'group-hover:translate-y-0.5'
            )}
          />
        </button>
      </div>
      {voted && (
        <p className="mt-4 font-mono text-xs text-zinc-500 animate-in fade-in slide-in-from-bottom-2">
          Vote registered.
        </p>
      )}
    </div>
  )
}
