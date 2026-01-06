'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, MessageSquare, Users, ArrowRight, Sparkles } from 'lucide-react'

export default function CTASection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const ctaOptions = [
    {
      title: 'Free Consultation',
      subtitle: 'Get Your Custom Roadmap',
      description: '30-minute call with AI strategist, detailed gap analysis, actionable 90-day plan',
      icon: Calendar,
      buttonText: 'Book Free Call',
      color: 'from-blue-600 to-cyan-600',
      href: '#contact',
    },
    {
      title: 'AI Strategy Session',
      subtitle: 'Get Expert Guidance',
      description: 'One-on-one session with our AI experts, discuss your challenges, get personalized recommendations and strategic insights',
      icon: MessageSquare,
      buttonText: 'Schedule Session',
      color: 'from-purple-600 to-pink-600',
      href: '#contact',
    },
    {
      title: 'Workshop',
      subtitle: 'AI Maturity Workshop for Your Team',
      description: 'Half-day workshop, assess your entire organization, create consensus and roadmap',
      icon: Users,
      buttonText: 'Request Workshop',
      color: 'from-pink-600 to-rose-600',
      href: '#contact',
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={ref} className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="w-5 h-5 text-white" />
              <span className="text-sm font-heading font-semibold text-white">Ready to Transform?</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black mb-6 text-white">
              Ready to Accelerate Your AI Journey?
            </h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-body">
              Choose the path that works best for your business
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {ctaOptions.map((option, index) => {
              const Icon = option.icon
              return (
                <motion.div
                  key={index}
                  className="bg-white/95 backdrop-blur-xl rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${option.color} flex items-center justify-center mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">
                    {option.title}
                  </h3>
                  <h4 className="text-lg font-heading font-semibold text-gray-700 mb-4">
                    {option.subtitle}
                  </h4>
                  <p className="text-gray-600 font-body mb-6">
                    {option.description}
                  </p>
                  <motion.a
                    href={option.href}
                    className={`block w-full px-6 py-4 bg-gradient-to-r ${option.color} text-white rounded-xl font-heading font-bold text-center shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>{option.buttonText}</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.a>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}


