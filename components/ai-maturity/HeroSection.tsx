'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowDown, Sparkles, Crown, Target, TrendingUp, Zap, Users, BookOpen } from 'lucide-react'
import { useState } from 'react'

const levels = [
  { number: 5, name: 'AI-First', color: '#006400', icon: Crown },
  { number: 4, name: 'AI Integrated', color: '#228B22', icon: Target },
  { number: 3, name: 'AI Adopting', color: '#90EE90', icon: TrendingUp },
  { number: 2, name: 'AI Experimenting', color: '#FFD700', icon: Zap },
  { number: 1, name: 'AI Curious', color: '#FF8C00', icon: Users },
  { number: 0, name: 'AI Unaware', color: '#FF4444', icon: BookOpen },
]

export default function HeroSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const scrollToQuiz = () => {
    const quizSection = document.getElementById('assessment-quiz')
    if (quizSection) {
      quizSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-32">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full blur-3xl opacity-30"
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
          className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-3xl opacity-30"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100/80 via-purple-100/80 to-pink-100/80 backdrop-blur-sm border border-white/50 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
              >
                <Sparkles className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-heading font-semibold text-gray-700">AI Maturity Assessment</span>
              </motion.div>

              <motion.h1
                className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-black mb-6 leading-tight px-2 sm:px-0"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
              >
                Where Does Your{' '}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Business Stand
                </span>{' '}
                on the AI Journey?
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed font-body"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
              >
                Discover your AI maturity level and get a personalized roadmap to AI transformation
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.button
                  onClick={scrollToQuiz}
                  className="group px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-xl font-heading font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Take the Assessment</span>
                  <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                </motion.button>
                <motion.a
                  href="#overview"
                  className="px-8 py-4 bg-white text-gray-800 rounded-xl font-heading font-semibold text-lg border-2 border-gray-300 shadow-lg hover:shadow-xl hover:border-blue-500 transition-all duration-300 flex items-center justify-center"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right: Interactive Pyramid */}
            <motion.div
              className="flex flex-col items-center justify-center mt-8 lg:mt-0"
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative w-full max-w-md px-4 sm:px-0">
                {levels.map((level, index) => {
                  const Icon = level.icon
                  const width = 100 - (index * 12) // Decreasing width for pyramid effect
                  return (
                    <motion.div
                      key={level.number}
                      className="relative mb-2"
                      initial={{ opacity: 0, x: -50 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div
                        className="rounded-xl p-4 shadow-2xl border-2 border-white/50 backdrop-blur-sm flex items-center space-x-4 transition-all duration-300 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)]"
                        style={{
                          backgroundColor: level.color,
                          width: `${width}%`,
                          marginLeft: `${(100 - width) / 2}%`,
                        }}
                      >
                        <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-white font-heading font-black text-2xl">
                            Level {level.number}
                          </div>
                          <div className="text-white/90 font-body text-sm">
                            {level.name}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

