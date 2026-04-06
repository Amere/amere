'use client'

import { useRef, useState } from 'react'

interface GlowCardProps {
  children: React.ReactNode
  className?: string
}

export function GlowCard({ children, className = '' }: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [glowPosition, setGlowPosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    setGlowPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-500 hover:border-white/20 hover:bg-white/[0.06] ${className}`}
      style={{
        boxShadow: isHovered
          ? '0 0 30px rgba(6, 182, 212, 0.1), 0 0 60px rgba(139, 92, 246, 0.05)'
          : 'none',
      }}
    >
      {/* Mouse-tracking glow */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: `radial-gradient(600px circle at ${glowPosition.x}px ${glowPosition.y}px, rgba(139, 92, 246, 0.1), transparent 40%)`,
          }}
        />
      )}

      {/* Star dust noise layer */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-screen transition-opacity duration-500 group-hover:opacity-[0.05]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
