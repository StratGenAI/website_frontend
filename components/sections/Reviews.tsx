'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star, Quote } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'

const reviews = [
  {
    id: 1,
    company: 'Rumi Energizer',
    name: 'Rumi Energizer Team',
    role: 'Client',
    content: 'StratgenAI transformed our business operations with their intelligent AI solutions. Their team delivered exceptional results, helping us automate processes and improve efficiency significantly. Highly professional and innovative approach!',
    rating: 5,
    gradient: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
  },
  {
    id: 2,
    company: 'D&G Consultant',
    name: 'D&G Consultant Team',
    role: 'Client',
    content: 'Working with StratgenAI has been a game-changer for our consultancy. Their AI-powered solutions helped us streamline our workflows and deliver better results to our clients. Outstanding service and cutting-edge technology!',
    rating: 5,
    gradient: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50',
  },
]

export default function Reviews() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} id="reviews" className="py-32 bg-gradient-to-br from-white via-gray-50 to-blue-50/30 relative overflow-hidden">
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
          className="absolute bottom-20 left-10 w-96 h-96 bg-purple-400 rounded-full blur-3xl opacity-10"
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
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <Star className="w-5 h-5 text-blue-600 fill-blue-600" />
              <span className="text-sm font-heading font-semibold text-gray-700">Client Reviews</span>
            </motion.div>
            
            <motion.h2
              className="text-5xl md:text-6xl lg:text-7xl font-display font-black mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              What Our <span className="gradient-text">Clients Say</span>
            </motion.h2>
            
            <motion.p
              className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-body leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Trusted by leading companies who have transformed their business with our AI solutions
            </motion.p>
          </div>
        </ScrollReveal>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <ScrollReveal key={review.id} direction={index % 2 === 0 ? 'left' : 'right'} delay={0.3 + index * 0.2}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
                className="relative group"
              >
                {/* Card */}
                <div className={`relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 h-full ${review.bgColor}/30`}>
                  {/* Quote Icon */}
                  <div className="absolute top-6 right-6 opacity-10">
                    <Quote className={`w-16 h-16 text-gray-400`} />
                  </div>

                  {/* Rating Stars */}
                  <div className="flex items-center space-x-1 mb-6">
                    {[...Array(review.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.5 + index * 0.2 + i * 0.1 }}
                      >
                        <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Review Content */}
                  <motion.p
                    className="text-lg text-gray-700 leading-relaxed font-body mb-8 relative z-10"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.6 + index * 0.2 }}
                  >
                    "{review.content}"
                  </motion.p>

                  {/* Company Info */}
                  <div className="flex items-center space-x-4 relative z-10">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${review.gradient} flex items-center justify-center shadow-lg flex-shrink-0`}>
                      <span className="text-white font-bold text-xl">
                        {review.company.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-xl font-heading font-bold text-gray-900 mb-1">
                        {review.company}
                      </h4>
                      <p className="text-sm text-gray-600 font-body">
                        {review.role}
                      </p>
                    </div>
                  </div>

                  {/* Gradient Accent */}
                  <div className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r ${review.gradient} rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
