'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star, Quote, Sparkles, CheckCircle2 } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'
import { useRef } from 'react'

const reviews = [
  {
    id: 1,
    company: 'Rumi Energizer',
    name: 'Rumi Energizer Team',
    role: 'Client',
    location: 'Dubai, UAE',
    content: 'StratgenAI transformed our business operations by building a complete automated pipeline that streamlined our entire workflow. Their intelligent AI solutions eliminated manual processes and significantly improved our efficiency. The automated pipeline they created handles everything seamlessly, allowing us to focus on growth. Highly professional and innovative approach!',
    rating: 5,
    gradient: 'from-blue-500 via-cyan-500 to-teal-500',
    bgGradient: 'from-blue-50 via-cyan-50 to-teal-50',
  },
  {
    id: 2,
    company: 'D&G Consultant',
    name: 'D&G Consultant Team',
    role: 'Client',
    location: 'Ahmedabad, India',
    content: 'Working with StratgenAI has been a game-changer for our consultancy. They implemented an intelligent AI chatbot that handles client inquiries 24/7, and their AI-powered solutions helped us streamline our workflows and deliver better results to our clients. The chatbot integration was seamless and has significantly improved our customer engagement. Outstanding service and cutting-edge technology!',
    rating: 5,
    gradient: 'from-purple-500 via-pink-500 to-rose-500',
    bgGradient: 'from-purple-50 via-pink-50 to-rose-50',
  },
]

export default function Reviews() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  return (
    <section 
      ref={containerRef}
      id="reviews" 
      className="py-32 bg-gradient-to-br from-white via-gray-50/50 to-blue-50/30 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-[500px] h-[500px] bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"
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
          className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
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
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="scale" delay={0.2}>
          <div className="text-center mb-24">
            <motion.h2
              className="text-5xl md:text-6xl lg:text-7xl font-display font-black mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Let's Hear From Our <span className="gradient-text">Clients</span>
            </motion.h2>
            
            <motion.p
              className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-body leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Real stories from companies that transformed their business with our AI solutions
            </motion.p>
          </div>
        </ScrollReveal>

        {/* Reviews - Asymmetric Modern Layout */}
        <motion.div 
          style={{ y }}
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {reviews.map((review, index) => {
            const isLarge = false // No large cards for 2 reviews
            
            return (
              <ScrollReveal 
                key={review.id} 
                direction={index % 2 === 0 ? 'left' : 'right'} 
                delay={0.3 + index * 0.15}
              >
                <motion.div
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.3 + index * 0.15,
                    type: "spring",
                    stiffness: 100
                  }}
                  className="relative group"
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  {/* Main Card with Glassmorphism */}
                  <div className={`
                    relative h-full rounded-2xl md:rounded-3xl p-6 sm:p-8 lg:p-10
                    bg-gradient-to-br ${review.bgGradient}
                    backdrop-blur-xl border border-white/60
                    shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)]
                    transition-all duration-500
                    overflow-hidden
                  `}>
                    {/* Animated Gradient Border */}
                    <div className={`
                      absolute inset-0 rounded-3xl
                      bg-gradient-to-r ${review.gradient}
                      opacity-0 group-hover:opacity-20
                      transition-opacity duration-500
                      blur-xl
                    `} />
                    
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                      <div className={`w-full h-full bg-gradient-to-br ${review.gradient} rounded-full blur-2xl`} />
                    </div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 opacity-5">
                      <div className={`w-full h-full bg-gradient-to-br ${review.gradient} rounded-full blur-2xl`} />
                    </div>

                    {/* Quote Icon - Floating */}
                    <motion.div
                      className={`absolute top-6 right-6 w-20 h-20 rounded-2xl bg-gradient-to-br ${review.gradient} opacity-10 flex items-center justify-center`}
                      animate={{
                        rotate: [0, 5, -5, 0],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    >
                      <Quote className="w-10 h-10 text-white" />
                    </motion.div>

                    {/* Rating Stars */}
                    <div className="flex items-center space-x-1 mb-6 relative z-10">
                      {[...Array(review.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0, rotate: -180 }}
                          animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                          transition={{ 
                            delay: 0.5 + index * 0.15 + i * 0.1,
                            type: "spring",
                            stiffness: 200
                          }}
                          whileHover={{ scale: 1.2, rotate: 15 }}
                        >
                          <Star className="w-6 h-6 text-yellow-400 fill-yellow-400 drop-shadow-lg" />
                        </motion.div>
                      ))}
                    </div>

                    {/* Review Content */}
                    <motion.p
                      className={`text-base sm:text-lg ${isLarge ? 'lg:text-xl' : ''} text-gray-800 leading-relaxed font-body mb-6 md:mb-8 relative z-10 font-medium`}
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : {}}
                      transition={{ delay: 0.6 + index * 0.15 }}
                    >
                      <span className="text-3xl sm:text-4xl leading-none text-gray-400 font-serif mr-1 sm:mr-2">"</span>
                      {review.content}
                      <span className="text-3xl sm:text-4xl leading-none text-gray-400 font-serif ml-1 sm:ml-2">"</span>
                    </motion.p>

                    {/* Company Info */}
                    <div className="flex items-center space-x-3 sm:space-x-4 relative z-10">
                      <motion.div
                        className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${review.gradient} flex items-center justify-center shadow-xl flex-shrink-0 relative overflow-hidden`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <div className="absolute inset-0 bg-white/20" />
                        <span className="text-white font-bold text-lg sm:text-xl relative z-10">
                          {review.company.charAt(0)}
                        </span>
                      </motion.div>
                      <div>
                        <h4 className="text-lg sm:text-xl font-heading font-black text-gray-900 mb-0.5 sm:mb-1">
                          {review.company}
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-600 font-body font-medium">
                          {review.location}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Gradient Accent */}
                    <motion.div
                      className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${review.gradient} rounded-b-3xl`}
                      initial={{ scaleX: 0 }}
                      animate={inView ? { scaleX: 1 } : {}}
                      transition={{ delay: 1 + index * 0.15, duration: 0.8 }}
                    />
                  </div>

                  {/* Floating Shadow Effect */}
                  <div className={`
                    absolute -inset-1 rounded-3xl
                    bg-gradient-to-r ${review.gradient}
                    opacity-0 group-hover:opacity-30
                    blur-xl -z-10
                    transition-opacity duration-500
                  `} />
                </motion.div>
              </ScrollReveal>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
