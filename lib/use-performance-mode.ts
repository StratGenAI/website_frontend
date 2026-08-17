'use client'

import { useEffect, useState } from 'react'

/**
 * Detect mobile / reduced-motion AFTER mount so we don't flip animation
 * modes mid-render (that left hero text stuck at opacity: 0).
 */
export function usePerformanceMode() {
  const [mode, setMode] = useState({
    isMobile: false,
    reduceMotion: false,
    /** Start false on desktop SSR guess; refine after mount */
    lowPower: false,
    ready: false,
  })

  useEffect(() => {
    const mqMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => {
      const isMobile = window.innerWidth < 1024
      const reduceMotion = mqMotion.matches
      setMode({
        isMobile,
        reduceMotion,
        lowPower: isMobile || reduceMotion,
        ready: true,
      })
    }
    update()
    window.addEventListener('resize', update, { passive: true })
    mqMotion.addEventListener('change', update)
    return () => {
      window.removeEventListener('resize', update)
      mqMotion.removeEventListener('change', update)
    }
  }, [])

  return mode
}
