'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { usePerformanceMode } from '@/lib/use-performance-mode'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const { lowPower } = usePerformanceMode()
  const [videoReady, setVideoReady] = useState(false)

  useEffect(() => {
    if (lowPower || !videoRef.current) return
    videoRef.current.play().catch(() => {})
  }, [lowPower])

  // Always end visible — never gate hero copy on intersection (caused blank homepage)
  const motionProps = lowPower
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
      }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0">
        {!lowPower ? (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${videoReady ? 'opacity-100' : 'opacity-0'}`}
            onLoadedData={() => setVideoReady(true)}
          >
            <source src="/BACKGROUND.mp4" type="video/mp4" />
          </video>
        ) : null}
        <div
          className={`absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50/80 to-pink-50 ${lowPower ? 'opacity-100' : 'opacity-90'}`}
          style={{ zIndex: 1 }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pt-32 md:pt-36 lg:pt-40 flex items-center min-h-[calc(100vh-120px)]">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            {...motionProps}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black mb-4 sm:mb-6 leading-tight"
          >
            <span className="block mb-2 text-gray-900">Transform Your Business</span>
            <span className="block bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
              with Intelligent AI
            </span>
          </motion.h1>

          <motion.p
            {...(lowPower ? {} : { ...motionProps, transition: { duration: 0.5, delay: 0.15 } })}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-800 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed font-body font-medium px-2"
          >
            We build{' '}
            <span className="font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              cutting-edge AI
            </span>{' '}
            software solutions that help businesses{' '}
            <span className="font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
              automate processes
            </span>
            ,{' '}
            <span className="font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              enhance productivity
            </span>
            , and{' '}
            <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              drive innovation
            </span>
            .
          </motion.p>

          <motion.div
            {...(lowPower ? {} : { ...motionProps, transition: { duration: 0.5, delay: 0.25 } })}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <a
              href="#products"
              className="group px-8 py-3 md:px-10 md:py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-heading font-semibold text-base md:text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200 flex items-center space-x-2"
            >
              <span>Explore Products</span>
              <ArrowRight className="w-6 h-6" />
            </a>
            <a
              href="#contact"
              className="px-8 py-3 md:px-10 md:py-4 bg-white text-gray-800 rounded-lg font-heading font-semibold text-base md:text-lg border-2 border-gray-300 shadow-lg hover:border-blue-500 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              Get Started
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
