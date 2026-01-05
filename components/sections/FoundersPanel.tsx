'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Linkedin, Mail, Sparkles, Copy, Check } from 'lucide-react'
import Image from 'next/image'
import ScrollReveal from '@/components/ScrollReveal'
import { useState } from 'react'

const founders = [
  {
    id: 1,
    name: 'Krisha Patel',
    role: 'Dimension of Intelligence',
    bio: 'A visionary leader with deep expertise in AI and machine learning. Krisha drives our technical innovation, transforming complex algorithms into intelligent solutions that solve real-world business challenges. Her strategic thinking and technical prowess make her the cornerstone of our intelligence-driven approach.',
    image: '/krisha_patel.jpeg',
    email: 'patelkrisha011@gmail.com',
    linkedin: 'https://www.linkedin.com/in/krisha-patel-59a4b2337',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    name: 'Sheefa Memon',
    role: 'Grown Lens',
    bio: 'Focused on growth, strategy, and scaling our impact. Sheefa combines business acumen with a growth mindset, driving our expansion and ensuring we deliver value at every stage. Her expertise in business development and strategic partnerships helps us reach new heights and transform more businesses.',
    image: '/sheefa-memon.jpg',
    email: 'sheefamemon2112@gmail.com',
    linkedin: 'https://www.linkedin.com/in/sheefa-memon-8b845a340',
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    id: 3,
    name: 'Niyanta Meswaniya',
    role: 'Quantitative Strategy Lead',
    bio: 'A strategic thinker with strong foundations in mathematics and physics. Niyanta leverages her analytical expertise to develop data-driven strategies and quantitative solutions. Her ability to apply mathematical models and scientific principles to complex business problems enables us to create innovative, evidence-based approaches that drive measurable results.',
    image: '/niyanta-meswaniya.jpg',
    email: 'niyantameswaniya@gmail.com',
    linkedin: 'https://www.linkedin.com/in/meswaniya-niyanta-67880031a',
    gradient: 'from-purple-500 to-pink-500',
  },
]

export default function FoundersPanel() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null)
  const [showEmail, setShowEmail] = useState<string | null>(null)

  const handleEmailClick = (e: React.MouseEvent, email: string) => {
    e.preventDefault()
    setShowEmail(email)
    navigator.clipboard.writeText(email).then(() => {
      setCopiedEmail(email)
      setTimeout(() => {
        setCopiedEmail(null)
        setShowEmail(null)
      }, 2000)
    })
  }

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

        {/* Founders - Simple Alternating Layout */}
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
                  {/* Photo Section - Static */}
                  <div className={`flex-shrink-0 relative ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="relative">
                      {/* Gradient Border */}
                      <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${founder.gradient} p-1`}>
                        <div className="w-full h-full rounded-3xl bg-white" />
                      </div>
                      
                      {/* Image Container - Static, No 3D */}
                      <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden">
                        <Image
                          src={founder.image}
                          alt={founder.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
                          style={founder.name === 'Krisha Patel' ? { 
                            objectPosition: 'center 30%',
                            transform: 'scale(1.05)',
                            transformOrigin: 'center center'
                          } : {}}
                        />
                      </div>
                    </div>
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
                      
                      {/* Contact Information */}
                      <div className={`space-y-4 ${isEven ? '' : 'lg:text-right'}`}>
                        {/* Email Address - Visible */}
                        <div className={`flex items-center space-x-3 ${isEven ? '' : 'lg:justify-end lg:flex-row-reverse lg:space-x-reverse'}`}>
                          <motion.a
                            href={`mailto:${founder.email}`}
                            className="text-gray-700 hover:text-gray-900 font-medium text-base md:text-lg transition-colors flex items-center space-x-2 group"
                            whileHover={{ scale: 1.02 }}
                          >
                            <Mail className="w-5 h-5 text-gray-500 group-hover:text-gray-700" />
                            <span className="break-all">{founder.email}</span>
                          </motion.a>
                          <motion.button
                            onClick={(e) => handleEmailClick(e, founder.email)}
                            className={`p-2 rounded-lg bg-gradient-to-br ${founder.gradient} text-white flex items-center justify-center shadow-md hover:shadow-lg transition-all`}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            title="Copy email"
                          >
                            {copiedEmail === founder.email ? (
                              <Check className="w-4 h-4" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                          </motion.button>
                        </div>
                        
                        {/* Social Links */}
                        <div className={`flex items-center space-x-4 ${isEven ? '' : 'lg:justify-end lg:flex-row-reverse lg:space-x-reverse'}`}>
                          <motion.a
                            href={founder.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${founder.gradient} text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all`}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            title="View LinkedIn Profile"
                          >
                            <Linkedin className="w-5 h-5" />
                          </motion.a>
                        </div>
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
