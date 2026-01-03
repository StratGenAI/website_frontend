'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Puzzle, Clock, CheckCircle } from 'lucide-react'

const solutions = [
  {
    icon: Puzzle,
    title: 'Problem-Specific Solutions',
    description: 'We analyze your business challenges and create AI solutions that address your specific pain points.',
    color: 'blue',
  },
  {
    icon: Clock,
    title: 'Custom Feature Development',
    description: 'Add custom features to our existing products (Chatbot or Fashion Marketing Platform) to match your unique requirements.',
    color: 'pink',
  },
  {
    icon: CheckCircle,
    title: 'Seamless Integration',
    description: 'Our solutions integrate smoothly with your existing systems and workflows for maximum efficiency.',
    color: 'purple',
  },
]

export default function Solutions() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="solutions" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-pink-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-pink-400 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Solutions Built <span className="gradient-text">for You</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tailored AI solutions designed specifically for your unique business challenges and requirements
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold mb-6 text-gray-800">Solutions Built for Your Business</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Every business is unique, and so are its challenges. At StratgenAI, we understand that off-the-shelf solutions don't always fit perfectly. That's why we offer <strong className="text-gray-800">customized AI solutions</strong> designed specifically around your business problems and requirements.
              </p>
              <p>
                Whether you need a complete custom AI system, additional features for our existing products, or a hybrid solution combining multiple technologies, we work closely with you to understand your needs and deliver exactly what your business requires.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-100/50 to-pink-100/50 opacity-50" />
              
              <div className="relative z-10 space-y-6">
                {solutions.map((solution, index) => {
                  const Icon = solution.icon
                  const colorClasses = {
                    blue: 'from-blue-500 to-cyan-500',
                    pink: 'from-pink-500 to-rose-500',
                    purple: 'from-purple-500 to-pink-500',
                  }
                  
                  return (
                    <motion.div
                      key={solution.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                      className="flex items-start space-x-4"
                    >
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${colorClasses[solution.color as keyof typeof colorClasses]} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-800 mb-2">{solution.title}</h4>
                        <p className="text-gray-600">{solution.description}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


