'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Linkedin, Mail, Sparkles } from 'lucide-react'
import Image from 'next/image'
import ScrollReveal from '@/components/ScrollReveal'

const founders = [
  {
    id: 1,
    name: 'Krisha Patel',
    role: 'Dimension of Intelligence',
    bio: 'A visionary leader with deep expertise in AI and machine learning. Krisha drives our technical innovation, transforming complex algorithms into intelligent solutions that solve real-world business challenges. Her strategic thinking and technical prowess make her the cornerstone of our intelligence-driven approach.',
    image: '/Krisha_patel.jpeg',
    email: 'krisha@stratgenai.in',
    linkedin: '#',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    name: 'Niyanta Meswaniya',
    role: 'Creative Lens and Content',
    bio: 'The creative force behind our brand and communications. Niyanta brings artistic vision and strategic content expertise, ensuring our solutions are not just powerful but also beautifully presented. Her ability to translate complex AI concepts into compelling narratives makes technology accessible and engaging.',
    image: '/niyanta-meswaniya.jpg',
    email: 'niyanta@stratgenai.in',
    linkedin: '#',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    id: 3,
    name: 'Sheefa Memon',
    role: 'Grown Lens',
    bio: 'Focused on growth, strategy, and scaling our impact. Sheefa combines business acumen with a growth mindset, driving our expansion and ensuring we deliver value at every stage. Her expertise in business development and strategic partnerships helps us reach new heights and transform more businesses.',
    image: '/sheefa-memon.jpg',
    email: 'sheefa@stratgenai.in',
    linkedin: '#',
    gradient: 'from-pink-500 to-rose-500',
  },
]

export default function FoundersPanel() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="founders" className="py-32 bg-gradient-to-br from-white via-blue-50/30 to-pink-50/30 relative overflow-hidden">
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

      <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              <span className="text-sm font-heading font-semibold text-gray-700">Our Leadership</span>
            </motion.div>
            
            <motion.h2
              className="text-5xl md:text-6xl lg:text-7xl font-display font-black mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Meet Our <span className="gradient-text">Founders</span>
            </motion.h2>
            
            <motion.p
              className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-body leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Three visionary leaders driving innovation and transforming businesses with AI
            </motion.p>
          </div>
        </ScrollReveal>

        {/* Founders - Unique Layout (Not Card-Based) */}
        <div className="space-y-24 max-w-6xl mx-auto">
          {founders.map((founder, index) => {
            const isEven = index % 2 === 0
            
            return (
              <ScrollReveal key={founder.id} direction={isEven ? 'left' : 'right'} delay={0.3 + index * 0.2}>
                <motion.div
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-16`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
                >
                  {/* Photo Section */}
                  <div className={`flex-shrink-0 relative ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <motion.div
                      className="relative"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Gradient Border */}
                      <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${founder.gradient} p-1`}>
                        <div className="w-full h-full rounded-3xl bg-white" />
                      </div>
                      
                      {/* Image Container */}
                      <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden">
                        <Image
                          src={founder.image}
                          alt={founder.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 256px, (max-width: 1024px) 328px, 384px"
                          style={founder.name === 'Krisha Patel' ? { 
                            objectPosition: 'center 15%',
                            transform: 'scale(1.3)',
                            transformOrigin: 'center center'
                          } : {}}
                        />
                        {/* Overlay Gradient */}
                        <div className={`absolute inset-0 bg-gradient-to-t ${founder.gradient} opacity-20`} />
                      </div>
                      
                      {/* Decorative Elements */}
                      <motion.div
                        className={`absolute -top-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-br ${founder.gradient} opacity-20 blur-2xl`}
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.2, 0.4, 0.2],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      />
                    </motion.div>
                  </div>

                  {/* Content Section */}
                  <div className={`flex-1 ${isEven ? 'lg:order-2 lg:text-left' : 'lg:order-1 lg:text-right'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                    >
                      {/* Role Badge */}
                      <motion.div
                        className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r ${founder.gradient} text-white mb-6 ${isEven ? '' : 'lg:ml-auto lg:flex-row-reverse lg:space-x-reverse'}`}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Sparkles className="w-4 h-4" />
                        <span className="text-sm font-heading font-semibold">{founder.role}</span>
                      </motion.div>
                      
                      {/* Name */}
                      <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-gray-900 mb-4">
                        {founder.name}
                      </h3>
                      
                      {/* Bio */}
                      <p className="text-lg md:text-xl text-gray-600 font-body leading-relaxed mb-8">
                        {founder.bio}
                      </p>
                      
                      {/* Social Links */}
                      <div className={`flex items-center space-x-4 ${isEven ? '' : 'lg:justify-end lg:flex-row-reverse lg:space-x-reverse'}`}>
                        <motion.a
                          href={`mailto:${founder.email}`}
                          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${founder.gradient} text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all`}
                          whileHover={{ scale: 1.15, rotate: 5 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Mail className="w-5 h-5" />
                        </motion.a>
                        <motion.a
                          href={founder.linkedin}
                          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${founder.gradient} text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all`}
                          whileHover={{ scale: 1.15, rotate: -5 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Linkedin className="w-5 h-5" />
                        </motion.a>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
