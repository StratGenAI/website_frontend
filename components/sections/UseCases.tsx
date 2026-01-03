'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Search,
  Lightbulb,
  Code,
  Rocket,
  TrendingUp,
  ArrowRight,
  Sparkles
} from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'

const processSteps = [
  {
    step: 1,
    title: 'Discovery & Analysis',
    description: 'We analyze your business challenges, goals, and infrastructure to understand your unique needs',
    icon: Search,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    step: 2,
    title: 'Strategy & Planning',
    description: 'Our experts design a comprehensive AI strategy tailored to your business objectives',
    icon: Lightbulb,
    color: 'from-purple-500 to-pink-500',
  },
  {
    step: 3,
    title: 'Development & Customization',
    description: 'We build and customize AI solutions that seamlessly integrate with your systems',
    icon: Code,
    color: 'from-indigo-500 to-purple-500',
  },
  {
    step: 4,
    title: 'Deployment & Launch',
    description: 'We execute a smooth rollout with continuous monitoring and immediate support',
    icon: Rocket,
    color: 'from-orange-500 to-amber-500',
  },
  {
    step: 5,
    title: 'Optimization & Growth',
    description: 'Continuous improvement based on data insights and evolving business needs',
    icon: TrendingUp,
    color: 'from-teal-500 to-cyan-500',
  },
]

export default function UseCases() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="use-cases" ref={ref} className="py-32 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
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
          <div className="text-center mb-20">
            <motion.div
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-pink-100 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <Sparkles className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-heading font-semibold text-gray-700">Our Methodology</span>
            </motion.div>
            
            <motion.h2
              className="text-5xl md:text-6xl lg:text-7xl font-display font-black mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              How We <span className="gradient-text">Work</span>
            </motion.h2>
            
            <motion.p
              className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-body leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              A proven process from initial discovery to continuous optimization
            </motion.p>
          </div>
        </ScrollReveal>

        {/* Horizontal Timeline Flow */}
        <div className="relative max-w-7xl mx-auto">
          {/* Connecting Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 transform -translate-y-1/2">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 2, delay: 0.5 }}
              style={{ originX: 0 }}
            />
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4 relative">
            {processSteps.map((step, index) => {
              const Icon = step.icon
              
              return (
                <ScrollReveal key={step.step} direction="up" delay={0.3 + index * 0.15}>
                  <motion.div
                    className="relative flex flex-col items-center"
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.3 + index * 0.15 }}
                  >
                    {/* Step Number Circle */}
                    <div className="relative mb-6">
                      <motion.div
                        className={`w-20 h-20 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-2xl z-10 relative`}
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="w-10 h-10 text-white" />
                      </motion.div>
                      
                      {/* Step Number Badge */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white border-2 border-gray-900 flex items-center justify-center shadow-lg">
                        <span className="text-sm font-display font-black text-gray-900">{step.step}</span>
                      </div>
                      
                      {/* Connecting Line - Mobile/Tablet */}
                      {index < processSteps.length - 1 && (
                        <div className="lg:hidden absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-blue-500 to-pink-500 transform translate-x-4">
                          <motion.div
                            className="h-full bg-gradient-to-r from-blue-500 to-pink-500"
                            initial={{ scaleX: 0 }}
                            animate={inView ? { scaleX: 1 } : {}}
                            transition={{ duration: 0.8, delay: 0.5 + index * 0.15 }}
                            style={{ originX: 0 }}
                          />
                        </div>
                      )}
                    </div>

                    {/* Content Card */}
                    <motion.div
                      className={`w-full p-6 rounded-2xl bg-gradient-to-br ${step.color} bg-opacity-10 backdrop-blur-sm border-2 border-transparent hover:border-blue-300 transition-all`}
                      whileHover={{ scale: 1.05, y: -5 }}
                    >
                      <h3 className="text-xl md:text-2xl font-display font-black text-gray-900 mb-3 text-center">
                        {step.title}
                      </h3>
                      
                      <p className="text-sm md:text-base text-gray-700 font-body leading-relaxed text-center">
                        {step.description}
                      </p>
                    </motion.div>

                    {/* Arrow - Desktop */}
                    {index < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 left-full w-full transform -translate-y-1/2">
                        <motion.div
                          className="flex justify-end pr-4"
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.8, delay: 0.7 + index * 0.15 }}
                        >
                          <ArrowRight className="w-8 h-8 text-purple-500" />
                        </motion.div>
                      </div>
                    )}
                  </motion.div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>

        {/* CTA Section */}
        <ScrollReveal direction="up" delay={0.5}>
          <motion.div
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <motion.div
              className="inline-block p-8 md:p-12 rounded-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white shadow-2xl"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <h3 className="text-3xl md:text-4xl font-display font-black mb-4">
                Ready to Start This Journey?
              </h3>
              <p className="text-xl font-body mb-6 opacity-90">
                Let's transform your business with our proven methodology
              </p>
              <motion.a
                href="#contact"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-gray-900 rounded-xl font-heading font-bold shadow-lg hover:shadow-xl transition-all"
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  )
}
