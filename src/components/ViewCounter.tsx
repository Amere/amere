'use client'

import { useState, useEffect } from 'react'

function EyeIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}

export function ViewCounter({ slug }: { slug: string }) {
  const [views, setViews] = useState<number | null>(null)

  useEffect(() => {
    let isMounted = true

    // Always fire view increment asynchronously (No preceding GET call to avoid race conditions)

    // Always fire view increment asynchronously
    fetch('/api/reactions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ slug, action: 'view' }),
    })
    .then((res) => res.json())
    .then((data) => {
      if (!data.error && isMounted) {
        setViews(data.views)
      }
    })
    
    return () => { isMounted = false }
  }, [slug])

  if (views === null) {
    return <span className="animate-pulse w-8 h-4 rounded-sm bg-zinc-800"></span>
  }

  return (
    <span className="flex items-center gap-1.5 text-zinc-500 transition-colors hover:text-zinc-400">
      <EyeIcon className="h-4 w-4" />
      {views > 0 ? views.toLocaleString() : '1'} {views === 1 ? 'view' : 'views'}
    </span>
  )
}
