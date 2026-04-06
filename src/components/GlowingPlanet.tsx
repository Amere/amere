'use client'

import { motion } from 'framer-motion'
import clsx from 'clsx'

export function GlowingPlanet({
  className,
  color = 'cyan', // 'cyan' or 'violet' or 'fuchsia'
}: {
  className?: string
  color?: 'cyan' | 'violet' | 'fuchsia'
}) {
  const baseColor =
    color === 'cyan'
      ? 'from-cyan-500/40 to-blue-600/40 border-cyan-500/30'
      : color === 'violet'
      ? 'from-violet-500/40 to-purple-600/40 border-violet-500/30'
      : 'from-fuchsia-500/40 to-pink-600/40 border-fuchsia-500/30'

  const glowColor =
    color === 'cyan'
      ? 'shadow-[0_0_80px_20px_rgba(34,211,238,0.15)]'
      : color === 'violet'
      ? 'shadow-[0_0_80px_20px_rgba(139,92,246,0.15)]'
      : 'shadow-[0_0_80px_20px_rgba(217,70,239,0.15)]'

  const ringColor =
    color === 'cyan'
      ? 'border-cyan-500/20'
      : color === 'violet'
      ? 'border-violet-500/20'
      : 'border-fuchsia-500/20'

  return (
    <div className={clsx('relative flex items-center justify-center', className)}>
      {/* Central Sphere */}
      <motion.div
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className={clsx(
          'relative h-32 w-32 sm:h-48 sm:w-48 lg:h-64 lg:w-64 rounded-full',
          'bg-gradient-to-br border backdrop-blur-md',
          baseColor,
          glowColor
        )}
      >
        {/* Sphere Inner Glow / Surface detail */}
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent mix-blend-overlay" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 rounded-b-full bg-gradient-to-t from-black/60 to-transparent" />
      </motion.div>

      {/* Orbiting Ring 1 (Horizontal) */}
      <motion.div
        animate={{
          rotateX: [70, 70],
          rotateZ: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        className={clsx(
          'absolute h-48 w-48 sm:h-72 sm:w-72 lg:h-[24rem] lg:w-[24rem] rounded-full border border-dashed opacity-50',
          ringColor
        )}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Orbital Node on ring */}
        <div className={clsx("absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full", color === 'cyan' ? 'bg-cyan-400' : color === 'violet' ? 'bg-violet-400' : 'bg-fuchsia-400')} />
      </motion.div>

      {/* Orbiting Ring 2 (Tilted) */}
      <motion.div
        animate={{
          rotateX: [60, 60],
          rotateY: [30, 30],
          rotateZ: [360, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
        className={clsx(
          'absolute h-56 w-56 sm:h-80 sm:w-80 lg:h-[28rem] lg:w-[28rem] rounded-full border',
          ringColor
        )}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Segmented data lines on outer ring */}
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full opacity-30">
          <circle cx="50" cy="50" r="49" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" />
        </svg>
      </motion.div>

      {/* Floating Space Dust / Data Particles around the planet */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0"
      >
        <div className="absolute top-[10%] left-[20%] h-1 w-1 rounded-full bg-white/40 shadow-[0_0_10px_2px_rgba(255,255,255,0.5)]" />
        <div className="absolute bottom-[20%] right-[15%] h-1.5 w-1.5 rounded-full bg-white/30" />
        <div className="absolute top-[80%] left-[70%] h-0.5 w-0.5 rounded-full bg-cyan-300/50" />
      </motion.div>
    </div>
  )
}
