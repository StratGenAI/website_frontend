'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Sparkles, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import ScrollReveal from '@/components/ScrollReveal'

// Culture media - videos and photos
const cultureMedia = [
  {
    id: 1,
    src: '/culture/WhatsApp Video 2025-12-09 at 19.17.14_39765c5a.mp4',
    type: 'video',
    alt: 'Team event',
  },
  {
    id: 2,
    src: '/culture/WhatsApp Video 2025-12-09 at 19.17.15_fc8f3454.mp4',
    type: 'video',
    alt: 'Team event',
  },
  {
    id: 3,
    src: '/culture/WhatsApp Video 2025-12-09 at 19.45.28_feddc042.mp4',
    type: 'video',
    alt: 'Team event',
  },
  {
    id: 4,
    src: '/culture/WhatsApp Video 2025-12-09 at 19.17.13_623cf1d1.mp4',
    type: 'video',
    alt: 'Team event',
  },
  {
    id: 5,
    src: '/culture/WhatsApp Video 2025-10-29 at 12.06.31_547d0244.mp4',
    type: 'video',
    alt: 'Team event',
  },
  {
    id: 6,
    src: '/culture/WhatsApp Video 2025-12-09 at 20.53.56_8be3dec7.mp4',
    type: 'video',
    alt: 'Team event',
  },
]

export default function OurCulture() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % cultureMedia.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + cultureMedia.length) % cultureMedia.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cultureMedia.length)
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(interval)
  }, [cultureMedia.length])

  return (
    <section id="culture" ref={ref} className="py-32 bg-gradient-to-br from-white via-blue-50/30 to-pink-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-10"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-96 h-96 bg-pink-400 rounded-full blur-3xl opacity-10"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="scale" delay={0.2}>
          <div className="text-center mb-16">
            <motion.div
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-pink-100 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <Sparkles className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-heading font-semibold text-gray-700">Our Culture</span>
            </motion.div>
            
            <motion.h2
              className="text-5xl md:text-6xl lg:text-7xl font-display font-black mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Our <span className="gradient-text">Culture</span>
            </motion.h2>
            
            <motion.p
              className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-body leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Casual conversations, social events, and friendships that make working here enjoyable
            </motion.p>
          </div>
        </ScrollReveal>

        {/* Unique Carousel - Reference Style */}
        <div className="max-w-7xl mx-auto">
          <div className="relative h-[300px] sm:h-[400px] md:h-[600px] lg:h-[700px]">
            {/* Carousel Container */}
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Left Blurred Media - Hidden on mobile */}
              <div className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 items-center space-x-4 z-0">
                {[-2, -1].map((offset) => {
                  const index = (currentIndex + offset + cultureMedia.length) % cultureMedia.length
                  const media = cultureMedia[index]
                  const isVideo = media.type === 'video'
                  return (
                    <motion.div
                      key={`left-${offset}`}
                      className="w-48 md:w-64 lg:w-80 h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden opacity-30"
                      style={{ filter: 'blur(12px)' }}
                      animate={{
                        x: offset === -1 ? -20 : -60,
                        scale: offset === -1 ? 0.6 : 0.4,
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="relative w-full h-full bg-gradient-to-br from-gray-200 to-gray-300">
                        {isVideo ? (
                          <video
                            src={media.src}
                            className="w-full h-full object-cover"
                            muted
                            loop
                            playsInline
                          />
                        ) : (
                          <Image
                            src={media.src}
                            alt={media.alt}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 192px, (max-width: 1024px) 256px, 320px"
                          />
                        )}
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              {/* Center Focused Media */}
              <motion.div
                className="relative z-20 w-full max-w-4xl h-full"
                initial={false}
                animate={{
                  scale: 1,
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                  <div className="relative w-full h-full bg-gradient-to-br from-gray-200 to-gray-300">
                    {cultureMedia[currentIndex].type === 'video' ? (
                      <video
                        src={cultureMedia[currentIndex].src}
                        className="w-full h-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                      />
                    ) : (
                      <Image
                        src={cultureMedia[currentIndex].src}
                        alt={cultureMedia[currentIndex].alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 80vw"
                      />
                    )}
                  </div>
                </div>
              </motion.div>

              {/* Right Blurred Media - Hidden on mobile */}
              <div className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 items-center space-x-4 z-0">
                {[1, 2].map((offset) => {
                  const index = (currentIndex + offset) % cultureMedia.length
                  const media = cultureMedia[index]
                  const isVideo = media.type === 'video'
                  return (
                    <motion.div
                      key={`right-${offset}`}
                      className="w-48 md:w-64 lg:w-80 h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden opacity-30"
                      style={{ filter: 'blur(12px)' }}
                      animate={{
                        x: offset === 1 ? 20 : 60,
                        scale: offset === 1 ? 0.6 : 0.4,
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="relative w-full h-full bg-gradient-to-br from-gray-200 to-gray-300">
                        {isVideo ? (
                          <video
                            src={media.src}
                            className="w-full h-full object-cover"
                            muted
                            loop
                            playsInline
                          />
                        ) : (
                          <Image
                            src={media.src}
                            alt={media.alt}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 192px, (max-width: 1024px) 256px, 320px"
                          />
                        )}
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm shadow-xl hover:bg-white transition-all flex items-center justify-center group"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700 group-hover:text-blue-600" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm shadow-xl hover:bg-white transition-all flex items-center justify-center group"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 text-gray-700 group-hover:text-pink-600" />
            </button>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center items-center space-x-3 mt-8">
            {cultureMedia.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-purple-600 w-8'
                    : 'bg-purple-200 w-3 hover:bg-purple-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
