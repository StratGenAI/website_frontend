'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Target, Zap, Users } from 'lucide-react'
import { useRef } from 'react'
import ScrollReveal from '@/components/ScrollReveal'

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stats = [
    { number: '3', label: 'Co-Founders', icon: Users },
    { number: '2+', label: 'Products', icon: Zap },
    { number: '100%', label: 'AI-Powered', icon: Target },
  ]

  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  return (
    <section ref={sectionRef} id="about" className="py-32 bg-gradient-to-br from-white via-blue-50/30 to-pink-50/30 relative overflow-hidden">
      {/* Advanced Decorative Background with Parallax */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-pink-500 to-rose-500 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      </motion.div>

      <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal direction="scale" delay={0.2}>
          <motion.div
            className="text-center mb-20"
            style={{ y: textY }}
          >
            <motion.h2 
              className="text-5xl md:text-7xl font-display font-black mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, type: 'spring' }}
            >
              About <span className="gradient-text">StratgenAI</span>
            </motion.h2>
            <motion.p 
              className="text-2xl md:text-3xl text-gray-700 max-w-3xl mx-auto font-body font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Three passionate co-founders building the future of AI-powered business solutions
            </motion.p>
          </motion.div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <ScrollReveal direction="left" delay={0.3}>
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute -left-4 -top-4 w-32 h-32 bg-gradient-ai rounded-full blur-2xl opacity-30" />
              <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-white/20">
                <h3 className="text-4xl md:text-5xl font-heading font-bold mb-8 text-gray-800">
                  Who We Are
                </h3>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed font-body">
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 }}
                  >
                    StratgenAI is a <strong className="text-blue-600 font-bold">cutting-edge AI software company</strong> founded by three passionate co-founders. We specialize in developing intelligent software solutions that help businesses leverage the power of artificial intelligence to solve real-world problems and drive growth.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 }}
                  >
                    Our mission is to <strong className="text-pink-600 font-bold">democratize AI technology</strong> and make it accessible for businesses of all sizes. We combine technical expertise with business acumen to deliver solutions that not only work but truly transform how our clients operate.
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.4}>
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute -right-4 -bottom-4 w-40 h-40 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full blur-3xl opacity-30" />
              <div className="relative bg-gradient-to-br from-blue-100/80 via-pink-100/80 to-purple-100/80 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-white/30">
                {/* Animated Orbs */}
                <motion.div
                  className="absolute top-10 right-10 w-40 h-40 bg-blue-400 rounded-full opacity-20 blur-3xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    x: [0, 20, 0],
                    y: [0, -20, 0],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div
                  className="absolute bottom-10 left-10 w-32 h-32 bg-pink-400 rounded-full opacity-20 blur-3xl"
                  animate={{
                    scale: [1, 1.3, 1],
                    x: [0, -15, 0],
                    y: [0, 15, 0],
                  }}
                  transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                />
                
                <div className="relative z-10 grid grid-cols-3 gap-8">
                  {stats.map((stat, index) => {
                    const Icon = stat.icon
                    return (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, scale: 0, rotate: -180 }}
                        animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                        transition={{ 
                          duration: 0.6, 
                          delay: 0.6 + index * 0.15,
                          type: 'spring',
                          stiffness: 200
                        }}
                        whileHover={{ scale: 1.1, y: -10 }}
                        className="text-center"
                      >
                        <motion.div
                          className="w-20 h-20 bg-gradient-ai rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <Icon className="w-10 h-10 text-white" />
                        </motion.div>
                        <motion.h4
                          className="text-4xl md:text-5xl font-heading font-black mb-3 bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent"
                          initial={{ scale: 0 }}
                          animate={inView ? { scale: 1 } : {}}
                          transition={{ delay: 0.8 + index * 0.15, type: 'spring' }}
                        >
                          {stat.number}
                        </motion.h4>
                        <p className="text-sm font-body font-semibold text-gray-700 uppercase tracking-wider">{stat.label}</p>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

