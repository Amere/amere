'use client'

import { useRef } from 'react'
import {
  motion,
  useInView,
  type Variants,
} from 'framer-motion'

interface BlurFadeProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  yOffset?: number
  blur?: string
  inView?: boolean
}

const variants: Variants = {
  hidden: (custom: { yOffset: number; blur: string }) => ({
    y: custom.yOffset,
    opacity: 0,
    filter: `blur(${custom.blur})`,
  }),
  visible: {
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
  },
}

export function BlurFade({
  children,
  className,
  delay = 0,
  duration = 0.4,
  yOffset = 12,
  blur = '6px',
  inView = true,
}: BlurFadeProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const shouldAnimate = inView ? isInView : true

  return (
    <motion.div
      ref={ref}
      custom={{ yOffset, blur }}
      initial="hidden"
      animate={shouldAnimate ? 'visible' : 'hidden'}
      variants={variants}
      transition={{
        delay,
        duration,
        ease: 'easeOut',
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
