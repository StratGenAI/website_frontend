'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Check, ArrowRight, Sparkles, FlaskConical } from 'lucide-react'
import Link from 'next/link'
import { useRef, useState } from 'react'
import ScrollReveal from '@/components/ScrollReveal'
import { usePerformanceMode } from '@/lib/use-performance-mode'
import Image from 'next/image'
import ProductModal from '@/components/ProductModal'
import BioCopilotVisual from '@/components/products/BioCopilotVisual'
import { products, type Product } from '@/lib/products-data'

export default function Products() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const sectionRef = useRef<HTMLElement>(null)
  const { lowPower } = usePerformanceMode()
  const { scrollYProgress } = useScroll({
    target: sectionRef as React.RefObject<HTMLElement>,
    offset: ['start end', 'end start'],
  })
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  const handleExploreMore = (product: Product) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  return (
    <section ref={sectionRef} id="products" className="py-32 relative overflow-hidden">
      {lowPower ? (
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/40 to-pink-50/40" />
        </div>
      ) : (
        <motion.div className="absolute inset-0" style={{ y: backgroundY }}>
          <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/40 to-pink-50/40" />
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(14,165,233,0.1),transparent_50%)]" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.1),transparent_50%)]" />
        </motion.div>
      )}

      <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal direction="scale" delay={0.2}>
          <div className="text-center mb-20 relative">
            <div className="absolute inset-0 -mx-8 -my-12 rounded-3xl overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-100/40 via-purple-100/40 to-pink-100/40 backdrop-blur-2xl"
                animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                style={{ backgroundSize: '200% auto' }}
              />
            </div>

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
                Business AI and research AI — built to move from insight to impact, faster
              </motion.p>
            </div>
          </div>
        </ScrollReveal>

        <div className="space-y-24 max-w-7xl mx-auto">
          {products.map((product, index) => {
            const isEven = index % 2 === 0
            const isBioCopilot = product.visual === 'biocopilot'

            return (
              <ScrollReveal
                key={product.id}
                direction={isEven ? 'left' : 'right'}
                delay={0.3 + index * 0.2}
              >
                <motion.div
                  id={`product-${product.id}`}
                  className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 lg:gap-16`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
                >
                  <motion.div
                    className={`flex-1 w-full ${isEven ? 'md:text-right' : 'md:text-left'}`}
                  >
                    {isBioCopilot ? (
                      <BioCopilotVisual size="lg" />
                    ) : (
                      <div className="relative inline-block">
                        <div className="w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] flex items-center justify-center relative">
                          <Image
                            src={product.logo!}
                            alt={product.name}
                            width={600}
                            height={600}
                            className="w-full h-full object-contain"
                            priority
                            unoptimized
                          />
                        </div>
                      </div>
                    )}
                  </motion.div>

                  <div className="flex-1 w-full">
                    <motion.div
                      className="bg-white/80 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-gray-100"
                      whileHover={{ y: -5 }}
                    >
                      <div className="flex flex-wrap items-center gap-2 mb-4">
                        {product.status === 'early-access' && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-heading font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md">
                            <FlaskConical className="w-3.5 h-3.5" />
                            Early Access
                          </span>
                        )}
                        {product.status === 'live' && (
                          <span className="px-3 py-1 rounded-full text-xs font-heading font-bold bg-blue-500/10 text-blue-600 border border-blue-200">
                            Available Now
                          </span>
                        )}
                      </div>

                      <motion.p
                        className={`text-sm font-heading font-bold uppercase tracking-wider mb-4 bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent`}
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.4 + index * 0.2 }}
                      >
                        {product.tagline}
                      </motion.p>

                      <motion.h3
                        className="text-4xl md:text-5xl font-display font-black mb-6 text-gray-900"
                        initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.5 + index * 0.2 }}
                      >
                        {product.name}
                      </motion.h3>

                      <motion.p
                        className="text-lg leading-relaxed mb-6 font-body text-gray-700"
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.6 + index * 0.2 }}
                      >
                        {product.intro}
                      </motion.p>

                      {product.capabilityPills && (
                        <div className="flex flex-wrap gap-2 mb-6">
                          {product.capabilityPills.map((pill) => (
                            <span
                              key={pill}
                              className="px-3 py-1 text-xs font-heading font-semibold rounded-lg bg-gradient-to-r from-blue-50 to-pink-50 text-purple-700 border border-purple-200/60"
                            >
                              {pill}
                            </span>
                          ))}
                        </div>
                      )}

                      {product.disclaimer && (
                        <p className="text-xs text-gray-500 mb-6 font-body italic border-l-2 border-purple-300 pl-3">
                          {product.disclaimer}
                        </p>
                      )}

                      <div className={`grid gap-4 mb-8 ${isBioCopilot ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-2'}`}>
                        {product.features.map((feature, idx) => (
                          <motion.div
                            key={idx}
                            className="flex items-center space-x-3"
                            initial={{ opacity: 0, x: -10 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.7 + index * 0.2 + idx * 0.1 }}
                            whileHover={{ x: 5 }}
                          >
                            <div
                              className={`w-6 h-6 rounded-lg bg-gradient-to-br ${product.gradient} flex items-center justify-center flex-shrink-0`}
                            >
                              <Check className="w-4 h-4 text-white" />
                            </div>
                            <span className="font-body text-sm md:text-base text-gray-700">
                              {feature}
                            </span>
                          </motion.div>
                        ))}
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <Link
                          href={product.id === 1 ? '/products/keiro' : '/products/biocopilot'}
                          className={`inline-flex items-center justify-center space-x-2 px-6 py-4 border-2 border-purple-200 text-purple-700 rounded-xl font-heading font-bold hover:bg-purple-50 transition-all flex-1`}
                        >
                          <span>Full details</span>
                        </Link>
                        <motion.button
                          onClick={() => handleExploreMore(product)}
                          className={`inline-flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r ${product.gradient} text-white rounded-xl font-heading font-bold shadow-xl hover:shadow-2xl transition-all duration-300 group flex-1`}
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          initial={{ opacity: 0, y: 20 }}
                          animate={inView ? { opacity: 1, y: 0 } : {}}
                          transition={{ delay: 0.9 + index * 0.2 }}
                        >
                          <span>{product.ctaLabel ?? 'Explore More'}</span>
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </ScrollReveal>
            )
          })}
        </div>

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
                Whether you need Keirō for intelligent engagement or early access to BioCopilot AI for
                research — we&apos;re here to help.
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
            visual: selectedProduct.visual,
            description: selectedProduct.modalDescription,
            gradient: selectedProduct.gradient,
            status: selectedProduct.status,
          }}
        />
      )}
    </section>
  )
}
