'use client'

import { motion, useInView, useAnimation } from 'framer-motion'
import { useEffect, useRef, ReactNode } from 'react'
import { usePerformanceMode } from '@/lib/use-performance-mode'

interface ScrollRevealProps {
  children: ReactNode
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale'
  delay?: number
  duration?: number
  className?: string
}

export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  className = '',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref as React.RefObject<Element>, { once: true, margin: '0px 0px -10% 0px' })
  const controls = useAnimation()
  const { lowPower } = usePerformanceMode()

  useEffect(() => {
    if (lowPower) {
      controls.set('visible')
      return
    }
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls, lowPower])

  if (lowPower) {
    return <div className={className}>{children}</div>
  }

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 24 : direction === 'down' ? -24 : 0,
      x: direction === 'left' ? 24 : direction === 'right' ? -24 : 0,
      scale: direction === 'scale' ? 0.96 : 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: Math.min(duration, 0.45),
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  )
}
