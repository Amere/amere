'use client'

import { useEffect, useState } from 'react'

interface Meteor {
  id: number
  left: string
  top: string
  delay: string
  duration: string
  size: number
  trailHeight: number
}

export function MeteorShower({ count = 25 }: { count?: number }) {
  const [meteors, setMeteors] = useState<Meteor[]>([])

  useEffect(() => {
    setMeteors(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 50}%`,
        delay: `${Math.random() * 8}s`,
        duration: `${Math.random() * 5 + 3}s`,
        size: Math.random() * 1.5 + 0.5,
        trailHeight: 120 + Math.random() * 60,
      }))
    )
  }, [count])

  if (meteors.length === 0) return null

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {meteors.map((m) => (
        <div
          key={m.id}
          className="absolute"
          style={{
            left: m.left,
            top: m.top,
            width: `${m.size}px`,
            height: `${m.size}px`,
          }}
        >
          <div
            className="relative"
            style={{
              animation: `meteor ${m.duration} ${m.delay} linear infinite`,
            }}
          >
            <div
              className="absolute rounded-full"
              style={{
                width: `${m.size}px`,
                height: `${m.size}px`,
                background: 'linear-gradient(135deg, #06b6d4, #8b5cf6)',
                boxShadow: `0 0 ${m.size * 4}px rgba(6, 182, 212, 0.4)`,
              }}
            />
            <div
              className="absolute rounded-full"
              style={{
                width: `${m.size * 0.5}px`,
                height: `${m.trailHeight}px`,
                top: `${m.size}px`,
                left: `${m.size * 0.25}px`,
                background:
                  'linear-gradient(to bottom, rgba(6, 182, 212, 0.4), transparent)',
              }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
