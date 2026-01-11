'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import { useEffect, useRef, useState } from 'react'

export default function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      const isMobileDevice = window.innerWidth < 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      setIsMobile(isMobileDevice)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    // Pause video on mobile or when not in viewport
    if (videoRef.current) {
      if (isMobile) {
        videoRef.current.pause()
      } else if (inView) {
        videoRef.current.play().catch(() => {
          // Handle autoplay restrictions
        })
      } else {
        videoRef.current.pause()
      }
    }
  }, [isMobile, inView])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Static Gradient Background for Mobile */}
      <div className="absolute inset-0 w-full h-full z-0 md:hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/20 to-pink-50/30" />
      </div>

      {/* Video Background - Hidden on Mobile */}
      <div className="absolute inset-0 w-full h-full z-0 hidden md:block">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: 0 }}
        >
          <source src="/BACKGROUND.mp4" type="video/mp4" />
        </video>
        {/* Simple Overlay for better text readability - No animations */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/20 to-pink-50/30" style={{ zIndex: 1 }} />
      </div>
      
      {/* Gradient Overlay for Depth - Static only */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/20" />


      {/* Main Content - Centered, No Overlapping */}
      <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pt-32 md:pt-36 lg:pt-40 flex items-center min-h-[calc(100vh-120px)]">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Headline - Professional Typography */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black mb-4 sm:mb-6 leading-tight"
          >
            <motion.span
              className="block mb-2 text-gray-900"
            >
              Transform Your Business
            </motion.span>
            <motion.span
              className="block bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent"
            >
              with Intelligent AI
            </motion.span>
          </motion.h1>

          {/* Sub-headline with highlighted text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-800 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed font-body font-medium px-2"
          >
            We build{' '}
            <motion.span
              className="inline-block font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"
              whileHover={{ scale: 1.1 }}
            >
              cutting-edge AI
            </motion.span>{' '}
            software solutions that help businesses{' '}
            <motion.span
              className="inline-block font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent"
              whileHover={{ scale: 1.1 }}
            >
              automate processes
            </motion.span>
            ,{' '}
            <motion.span
              className="inline-block font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
              whileHover={{ scale: 1.1 }}
            >
              enhance productivity
            </motion.span>
            , and{' '}
            <motion.span
              className="inline-block font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              whileHover={{ scale: 1.1 }}
            >
              drive innovation
            </motion.span>
            .
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            {/* Primary Button */}
            <motion.a
              href="#products"
              className="group relative px-8 py-3 md:px-10 md:py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-heading font-semibold text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex items-center space-x-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
              <span className="relative z-10">Explore Products</span>
              <motion.div
                className="relative z-10"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-6 h-6" />
              </motion.div>
            </motion.a>

            {/* Secondary Button */}
            <motion.a
              href="#contact"
              className="px-8 py-3 md:px-10 md:py-4 bg-white text-gray-800 rounded-lg font-heading font-semibold text-base md:text-lg border-2 border-gray-300 shadow-lg hover:shadow-xl hover:border-blue-500 transition-all duration-300 relative overflow-hidden group"
              whileHover={{ scale: 1.08, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity"
              />
              <span className="relative z-10">Get Started</span>
            </motion.a>
          </motion.div>
        </div>
      </div>

    </section>
  )
}
