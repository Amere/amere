'use client'

import { type ReactNode } from 'react'

interface OrbitItem {
  icon: ReactNode
  label: string
}

interface OrbitRingProps {
  items: OrbitItem[]
  radius: number
  mobileRadius: number
  duration: number
  reverse?: boolean
}

function OrbitRing({ items, radius, mobileRadius, duration, reverse = false }: OrbitRingProps) {
  return (
    <>
      {/* Desktop ring */}
      <div
        className="absolute left-1/2 top-1/2 rounded-full border border-white/[0.06] hidden sm:block"
        style={{
          width: `${radius * 2}px`,
          height: `${radius * 2}px`,
          marginLeft: `-${radius}px`,
          marginTop: `-${radius}px`,
          animation: `orbit ${duration}s linear infinite ${reverse ? 'reverse' : ''}`,
        }}
      >
        {items.map((item, i) => {
          const angle = (360 / items.length) * i
          const rad = (angle * Math.PI) / 180
          const x = Number((Math.cos(rad) * radius).toFixed(2))
          const y = Number((Math.sin(rad) * radius).toFixed(2))
          return (
            <div
              key={item.label}
              className="group absolute left-1/2 top-1/2"
              style={{
                transform: `translate(${x - 18}px, ${y - 18}px)`,
              }}
            >
              <div
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-zinc-900/80 text-xs font-bold text-white backdrop-blur-sm transition-all duration-300 hover:scale-125 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-400/20"
                style={{
                  animation: `orbit ${duration}s linear infinite ${reverse ? '' : 'reverse'}`,
                }}
                title={item.label}
              >
                {item.icon}
              </div>
            </div>
          )
        })}
      </div>

      {/* Mobile ring */}
      <div
        className="absolute left-1/2 top-1/2 rounded-full border border-white/[0.06] sm:hidden"
        style={{
          width: `${mobileRadius * 2}px`,
          height: `${mobileRadius * 2}px`,
          marginLeft: `-${mobileRadius}px`,
          marginTop: `-${mobileRadius}px`,
          animation: `orbit ${duration}s linear infinite ${reverse ? 'reverse' : ''}`,
        }}
      >
        {items.map((item, i) => {
          const angle = (360 / items.length) * i
          const rad = (angle * Math.PI) / 180
          const x = Number((Math.cos(rad) * mobileRadius).toFixed(2))
          const y = Number((Math.sin(rad) * mobileRadius).toFixed(2))
          return (
            <div
              key={item.label}
              className="group absolute left-1/2 top-1/2"
              style={{
                transform: `translate(${x - 14}px, ${y - 14}px)`,
              }}
            >
              <div
                className="flex h-7 w-7 items-center justify-center rounded-md border border-white/10 bg-zinc-900/80 text-[10px] font-bold text-white backdrop-blur-sm"
                style={{
                  animation: `orbit ${duration}s linear infinite ${reverse ? '' : 'reverse'}`,
                }}
                title={item.label}
              >
                {item.icon}
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

const techStacks = {
  inner: [
    { icon: 'Ts', label: 'TypeScript' },
    { icon: 'Jv', label: 'Java' },
    { icon: 'Py', label: 'Python' },
    { icon: 'Cj', label: 'Clojure' },
    { icon: 'C#', label: 'C#' },
  ],
  middle: [
    { icon: 'Re', label: 'React' },
    { icon: 'Nx', label: 'Next.js' },
    { icon: 'Nd', label: 'Node.js' },
    { icon: 'GQ', label: 'GraphQL' },
    { icon: 'Rd', label: 'Redux' },
    { icon: 'C+', label: 'C++' },
  ],
  outer: [
    { icon: 'Aw', label: 'AWS' },
    { icon: 'Tf', label: 'Terraform' },
    { icon: 'Dk', label: 'Docker' },
    { icon: 'Mg', label: 'MongoDB' },
    { icon: 'N4', label: 'Neo4j' },
    { icon: 'Pg', label: 'PostgreSQL' },
    { icon: 'Dt', label: 'Datomic' },
    { icon: 'An', label: 'Ansible' },
  ],
}

export function OrbitalCircles({ className = '' }: { className?: string }) {
  return (
    <div className={`relative w-full max-w-[500px] aspect-square mx-auto ${className}`}>
      {/* Center label */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full border border-cyan-400/30 bg-gradient-to-br from-cyan-500/20 to-violet-500/20 backdrop-blur-sm">
          <span className="text-base sm:text-lg font-bold text-white">AA</span>
        </div>
      </div>

      {/* Orbit rings */}
      <OrbitRing
        items={techStacks.inner.map((t) => ({ ...t, icon: <span>{t.icon}</span> }))}
        radius={100}
        mobileRadius={60}
        duration={25}
      />
      <OrbitRing
        items={techStacks.middle.map((t) => ({ ...t, icon: <span>{t.icon}</span> }))}
        radius={170}
        mobileRadius={110}
        duration={35}
        reverse
      />
      <OrbitRing
        items={techStacks.outer.map((t) => ({ ...t, icon: <span>{t.icon}</span> }))}
        radius={240}
        mobileRadius={155}
        duration={50}
      />
    </div>
  )
}
