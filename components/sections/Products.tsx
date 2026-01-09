'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Check, ArrowRight, Sparkles } from 'lucide-react'
import { useRef, useState } from 'react'
import ScrollReveal from '@/components/ScrollReveal'
import Image from 'next/image'
import ProductModal from '@/components/ProductModal'

const products = [
  {
    id: 1,
    name: 'Keirō',
    logo: '/chatbot_logo.png',
    tagline: 'Intelligent Conversations, Anytime',
    intro: 'Transform your customer experience with our intelligent conversational AI chatbot. Enhance customer service, automate support, and engage users 24/7. Our chatbot understands context, learns from interactions, and provides personalized responses that feel natural and human-like.',
    features: [
      'Natural Language Processing',
      'Multi-language Support',
      'Customizable Workflows',
      'Analytics & Insights',
      'Easy Integration',
    ],
    gradient: 'from-blue-500 to-purple-500',
    bgColor: 'blue',
  },
  {
    id: 2,
    name: 'Stratflow',
    logo: '/fashion_logo.png',
    tagline: 'Style Meets Intelligence',
    intro: 'Revolutionize your fashion business with our AI-driven marketing platform. Designed specifically for the fashion industry, it helps you analyze trends, optimize campaigns, personalize recommendations, and boost sales with intelligent, data-driven insights.',
    features: [
      'Trend Analysis & Prediction',
      'Personalized Recommendations',
      'Campaign Optimization',
      'Customer Segmentation',
      'Real-time Analytics',
    ],
    gradient: 'from-pink-500 to-rose-500',
    bgColor: 'pink',
  },
]

export default function Products() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  const handleExploreMore = (product: typeof products[0]) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  return (
    <section ref={sectionRef} id="products" className="py-32 relative overflow-hidden">
      {/* Beautiful Background */}
      <motion.div
        className="absolute inset-0"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/40 to-pink-50/40" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(14,165,233,0.1),transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.1),transparent_50%)]" />
      </motion.div>

      <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Unique Background */}
        <ScrollReveal direction="scale" delay={0.2}>
          <div className="text-center mb-20 relative">
            {/* Unique Background for Header */}
            <div className="absolute inset-0 -mx-8 -my-12 rounded-3xl overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-100/40 via-purple-100/40 to-pink-100/40 backdrop-blur-2xl"
                animate={{
                  backgroundPosition: ['0%', '100%', '0%'],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                style={{
                  backgroundSize: '200% auto',
                }}
              />
              {/* Animated orbs in background */}
              <motion.div
                className="absolute top-0 left-1/4 w-64 h-64 bg-blue-400 rounded-full blur-3xl opacity-20"
                animate={{
                  x: [0, 50, 0],
                  y: [0, 30, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                }}
              />
              <motion.div
                className="absolute bottom-0 right-1/4 w-64 h-64 bg-pink-400 rounded-full blur-3xl opacity-20"
                animate={{
                  x: [0, -50, 0],
                  y: [0, -30, 0],
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                }}
              />
              {/* Decorative pattern */}
              <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="headerPattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                      <circle cx="30" cy="30" r="2" fill="#0ea5e9" />
                      <circle cx="10" cy="20" r="1.5" fill="#ec4899" />
                      <circle cx="50" cy="40" r="1.5" fill="#8b5cf6" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#headerPattern)" />
                </svg>
              </div>
            </div>
            
            {/* Header Content */}
            <div className="relative z-10 pt-12 pb-12 px-8">
              <motion.h2
                className="text-5xl md:text-6xl lg:text-7xl font-display font-black mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                Our <span className="gradient-text">Products</span>
              </motion.h2>
              <motion.p
                className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-body font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Powerful AI solutions designed to transform your business
              </motion.p>
            </div>
          </div>
        </ScrollReveal>

        {/* Products - Unique Layout */}
        <div className="space-y-24 max-w-7xl mx-auto">
          {products.map((product, index) => {
            const isEven = index % 2 === 0
            
            return (
              <ScrollReveal key={product.id} direction={isEven ? 'left' : 'right'} delay={0.3 + index * 0.2}>
                <motion.div
                  id={`product-${product.id}`}
                  className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 lg:gap-16`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
                >
                  {/* Logo Section - Left/Right based on index */}
                  <motion.div
                    className={`flex-1 w-full ${isEven ? 'md:text-right' : 'md:text-left'}`}
                  >
                    <div className="relative inline-block">
                      <div className="w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] flex items-center justify-center relative">
                        <Image
                          src={product.logo}
                          alt={product.name}
                          width={600}
                          height={600}
                          className="w-full h-full object-contain"
                          priority
                          unoptimized
                        />
                      </div>
                    </div>
                  </motion.div>

                  {/* Content Section */}
                  <div className="flex-1 w-full">
                    <motion.div
                      className="bg-white/80 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-gray-100"
                      whileHover={{ y: -5 }}
                    >
                      {/* Tagline */}
                      <motion.p
                        className={`text-sm font-heading font-bold uppercase tracking-wider mb-4 bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent`}
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.4 + index * 0.2 }}
                      >
                        {product.tagline}
                      </motion.p>

                      {/* Product Name */}
                      <motion.h3
                        className="text-4xl md:text-5xl font-display font-black mb-6 text-gray-900"
                        initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.5 + index * 0.2 }}
                      >
                        {product.name}
                      </motion.h3>

                      {/* Intro */}
                      <motion.p
                        className="text-lg text-gray-700 leading-relaxed mb-8 font-body"
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.6 + index * 0.2 }}
                      >
                        {product.intro}
                      </motion.p>

                      {/* Features */}
                      <div className="grid grid-cols-2 gap-4 mb-8">
                        {product.features.map((feature, idx) => (
                          <motion.div
                            key={idx}
                            className="flex items-center space-x-3"
                            initial={{ opacity: 0, x: -10 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.7 + index * 0.2 + idx * 0.1 }}
                            whileHover={{ x: 5 }}
                          >
                            <div className={`w-6 h-6 rounded-lg bg-gradient-to-br ${product.gradient} flex items-center justify-center flex-shrink-0`}>
                              <Check className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-gray-700 font-body text-sm md:text-base">{feature}</span>
                          </motion.div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <motion.button
                        onClick={() => handleExploreMore(product)}
                        className={`inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r ${product.gradient} text-white rounded-xl font-heading font-bold shadow-xl hover:shadow-2xl transition-all duration-300 group w-full justify-center`}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.9 + index * 0.2 }}
                      >
                        <span>Explore More</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </motion.button>
                    </motion.div>
                  </div>
                </motion.div>
              </ScrollReveal>
            )
          })}
        </div>

        {/* Bottom CTA Section */}
        <ScrollReveal direction="up" delay={1}>
          <motion.div
            className="mt-24 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1 }}
          >
            <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-3xl p-12 border-2 border-white/50 shadow-2xl backdrop-blur-xl max-w-4xl mx-auto">
              <motion.div
                className="inline-block mb-4"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Sparkles className="w-12 h-12 text-blue-600" />
              </motion.div>
              <h3 className="text-3xl md:text-4xl font-display font-black mb-4 text-gray-900">
                Ready to Transform Your Business?
              </h3>
              <p className="text-lg text-gray-700 mb-8 font-body max-w-2xl mx-auto">
                Get in touch with us to learn more about how our AI solutions can help your business grow.
              </p>
              <motion.a
                href="#contact"
                className="inline-flex items-center space-x-2 px-10 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-2xl font-heading font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 group"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </motion.a>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false)
            setSelectedProduct(null)
          }}
          product={{
            name: selectedProduct.name,
            logo: selectedProduct.logo,
            description: selectedProduct.intro,
          }}
        />
      )}
    </section>
  )
}
