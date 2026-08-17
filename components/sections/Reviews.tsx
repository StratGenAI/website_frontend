'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star, Quote, Sparkles } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'
import { usePerformanceMode } from '@/lib/use-performance-mode'

const reviews = [
  {
    id: 1,
    company: 'Rumi Energizer',
    name: 'Rumi Energizer Team',
    role: 'Client',
    location: 'Ahmedabad, India',
    content: 'StratgenAI built a complete automated pipeline for us that revolutionized our data processing workflow. Their AI-powered solutions transformed our operations, enabling us to process complex data efficiently and accurately. The automated pipeline they created has significantly improved our productivity and reduced manual errors. Highly professional team with exceptional technical expertise!',
    rating: 5,
    gradient: 'from-blue-500 via-blue-600 to-purple-600',
    bgGradient: 'from-blue-50 via-blue-100 to-purple-50',
  },
  {
    id: 2,
    company: 'D&G Consultant',
    name: 'D&G Consultant Team',
    role: 'Client',
    location: 'Ahmedabad, India',
    content: 'Working with StratgenAI has been a game-changer for our consultancy. Their AI-powered chatbot solutions helped us streamline customer interactions and deliver exceptional service to our clients. Outstanding service and cutting-edge technology that transformed how we engage with our customers!',
    rating: 4.5,
    gradient: 'from-purple-500 via-pink-500 to-rose-500',
    bgGradient: 'from-purple-50 via-pink-50 to-rose-50',
  },
  {
    id: 3,
    company: 'Indibloom',
    name: 'Zeeya Mehta',
    role: 'Founder',
    location: 'India',
    content: 'StratgenAI built our shopping website Indibloom for us and we couldn\'t be happier. The store looks beautiful, works smoothly, and our customers can browse and order without any hassle. The team listened to what we wanted and delivered a site that actually feels like our brand. Highly recommended!',
    rating: 5,
    gradient: 'from-rose-500 via-orange-500 to-amber-500',
    bgGradient: 'from-rose-50 via-orange-50 to-amber-50',
  },
]

export default function Reviews() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const { lowPower } = usePerformanceMode()

  return (
    <section
      id="reviews"
      className="py-20 md:py-24 bg-gradient-to-br from-white via-gray-50/50 to-blue-50/30 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {lowPower ? (
          <div className="absolute top-20 right-10 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl" />
        ) : (
          <>
            <motion.div
              className="absolute top-20 right-10 w-[500px] h-[500px] bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
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
          </>
        )}
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="scale" delay={0.2}>
          <div className="text-center mb-12">
            <motion.div
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-100/80 via-purple-100/80 to-pink-100/80 backdrop-blur-sm border border-white/50 mb-8 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <Sparkles className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-heading font-semibold text-gray-700">Client Testimonials</span>
            </motion.div>
            
            <motion.h2
              className="text-5xl md:text-6xl lg:text-7xl font-display font-black mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Let's Hear From <span className="gradient-text">Our Clients</span>
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto items-stretch">
          {reviews.map((review) => (
            <div key={review.id} className="relative group h-full">
              <div
                className={`
                  relative h-full flex flex-col rounded-2xl p-5
                  bg-gradient-to-br ${review.bgGradient}
                  border border-white/60 shadow-lg
                  overflow-hidden
                `}
              >
                <div
                  className={`absolute top-4 right-4 w-10 h-10 rounded-xl bg-gradient-to-br ${review.gradient} opacity-10 flex items-center justify-center`}
                >
                  <Quote className="w-5 h-5 text-white" />
                </div>

                <div className="flex items-center space-x-0.5 mb-3 relative z-10">
                  {[...Array(5)].map((_, i) => {
                    const starValue = i + 1
                    const isHalfStar = review.rating < starValue && review.rating > i
                    const isFilled = review.rating >= starValue

                    return (
                      <div key={i} className="relative">
                        {isHalfStar ? (
                          <div className="relative">
                            <Star className="w-4 h-4 text-gray-300 fill-gray-300" />
                            <div className="absolute inset-0 overflow-hidden" style={{ width: '50%' }}>
                              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                            </div>
                          </div>
                        ) : (
                          <Star
                            className={`w-4 h-4 ${isFilled ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300 fill-gray-300'}`}
                          />
                        )}
                      </div>
                    )
                  })}
                </div>

                <p className="text-sm text-gray-800 leading-relaxed font-body mb-4 relative z-10 font-medium flex-grow">
                  “{review.content}”
                </p>

                <div className="flex items-center space-x-3 relative z-10 mt-auto">
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${review.gradient} flex items-center justify-center shadow-md flex-shrink-0`}
                  >
                    <span className="text-white font-bold text-sm">{review.company.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="text-base font-heading font-bold text-gray-900 leading-tight">
                      {review.company}
                    </h4>
                    {(review.name || review.role) && (
                      <p className="text-xs text-gray-700 font-body">
                        {[review.name, review.role].filter(Boolean).join(' · ')}
                      </p>
                    )}
                    {review.location && (
                      <p className="text-xs text-gray-500 font-body">{review.location}</p>
                    )}
                  </div>
                </div>

                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${review.gradient} rounded-b-2xl`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
