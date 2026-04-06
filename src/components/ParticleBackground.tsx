'use client'

import { useEffect, useRef, useCallback } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  pulseSpeed: number
  pulseOffset: number
}

export function ParticleBackground({
  quantity = 50,
  color = '6, 182, 212',
  secondaryColor = '139, 92, 246',
  className = '',
}: {
  quantity?: number
  color?: string
  secondaryColor?: string
  className?: string
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: -1000, y: -1000 })
  const particlesRef = useRef<Particle[]>([])
  const animationRef = useRef<number>(0)
  const timeRef = useRef<number>(0)

  const initParticles = useCallback(
    (width: number, height: number) => {
      const particles: Particle[] = []
      for (let i = 0; i < quantity; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          size: Math.random() * 2.5 + 0.5,
          opacity: Math.random() * 0.6 + 0.15,
          pulseSpeed: Math.random() * 0.02 + 0.005,
          pulseOffset: Math.random() * Math.PI * 2,
        })
      }
      particlesRef.current = particles
    },
    [quantity],
  )

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let dpr = window.devicePixelRatio || 1

    const handleResize = () => {
      dpr = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.scale(dpr, dpr)
      if (particlesRef.current.length === 0) {
        initParticles(window.innerWidth, window.innerHeight)
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)

    const animate = () => {
      if (!ctx || !canvas) return
      const w = window.innerWidth
      const h = window.innerHeight
      ctx.clearRect(0, 0, w, h)
      timeRef.current += 1

      const particles = particlesRef.current
      const mouse = mouseRef.current
      const t = timeRef.current

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        // Mouse attraction with glow ring
        const dx = mouse.x - p.x
        const dy = mouse.y - p.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 250) {
          const force = (250 - dist) / 250
          p.vx += (dx / dist) * force * 0.015
          p.vy += (dy / dist) * force * 0.015
        }

        // Dampen velocity
        p.vx *= 0.985
        p.vy *= 0.985

        p.x += p.vx
        p.y += p.vy

        // Wrap around edges
        if (p.x < 0) p.x = w
        if (p.x > w) p.x = 0
        if (p.y < 0) p.y = h
        if (p.y > h) p.y = 0

        // Pulsing opacity
        const pulse = Math.sin(t * p.pulseSpeed + p.pulseOffset) * 0.15 + 0.85
        const currentOpacity = p.opacity * pulse

        // Use secondary color for some particles
        const particleColor = i % 5 === 0 ? secondaryColor : color

        // Draw particle with glow
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${particleColor}, ${currentOpacity})`
        ctx.fill()

        // Subtle glow for larger particles
        if (p.size > 1.5) {
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(${particleColor}, ${currentOpacity * 0.08})`
          ctx.fill()
        }

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx2 = p.x - p2.x
          const dy2 = p.y - p2.y
          const dist2 = dx2 * dx2 + dy2 * dy2 // skip sqrt for perf

          if (dist2 < 22500) { // 150px squared
            const alpha = 0.15 * (1 - dist2 / 22500)
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(${color}, ${alpha})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      // Draw mouse attraction ring
      if (mouse.x > 0 && mouse.y > 0) {
        const gradient = ctx.createRadialGradient(
          mouse.x, mouse.y, 0,
          mouse.x, mouse.y, 200,
        )
        gradient.addColorStop(0, `rgba(${color}, 0.03)`)
        gradient.addColorStop(0.5, `rgba(${secondaryColor}, 0.01)`)
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)')
        ctx.beginPath()
        ctx.arc(mouse.x, mouse.y, 200, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationRef.current)
    }
  }, [color, secondaryColor, initParticles])

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none fixed inset-0 z-0 ${className}`}
    />
  )
}
