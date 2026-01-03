'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MapPin, Mail, Send } from 'lucide-react'
import { useState, useRef } from 'react'
import ScrollReveal from '@/components/ScrollReveal'

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', company: '', message: '' })
  }

  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  return (
    <section ref={sectionRef} id="contact" className="py-32 bg-gradient-to-br from-white via-blue-50/30 to-pink-50/30 relative overflow-hidden">
      {/* Advanced Background with Parallax */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-pink-500 to-rose-500 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      </motion.div>

      <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal direction="scale" delay={0.2}>
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, type: 'spring' }}
          >
            <h2 className="text-5xl md:text-7xl font-display font-black mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-2xl md:text-3xl text-gray-700 max-w-3xl mx-auto font-body font-medium">
              Let's discuss how AI can transform your business
            </p>
          </motion.div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Contact Info */}
          <ScrollReveal direction="left" delay={0.3}>
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute -left-4 -top-4 w-32 h-32 bg-gradient-ai rounded-full blur-2xl opacity-30" />
              <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-white/20">
                <h3 className="text-4xl md:text-5xl font-display font-black mb-8 text-gray-800">
                  Ready to Transform Your Business?
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-10 font-body">
                  Whether you're looking to <strong className="text-blue-600 font-bold">automate customer service</strong>, enhance your marketing strategy, or explore other AI solutions, we're here to help. Let's discuss how AI can revolutionize your business operations.
                </p>

                <div className="space-y-8">
                  <motion.div
                    className="flex items-start space-x-5"
                    whileHover={{ x: 10 }}
                  >
                    <motion.div
                      className="w-16 h-16 rounded-2xl bg-gradient-ai flex items-center justify-center flex-shrink-0 shadow-2xl"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <MapPin className="w-8 h-8 text-white" />
                    </motion.div>
                    <div>
                      <h4 className="font-heading font-bold text-xl text-gray-800 mb-2">Location</h4>
                      <p className="text-gray-600 font-body text-lg">Ahmedabad, India</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start space-x-5"
                    whileHover={{ x: 10 }}
                  >
                    <motion.div
                      className="w-16 h-16 rounded-2xl bg-gradient-ai flex items-center justify-center flex-shrink-0 shadow-2xl"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Mail className="w-8 h-8 text-white" />
                    </motion.div>
                    <div>
                      <h4 className="font-heading font-bold text-xl text-gray-800 mb-2">Email</h4>
                      <a href="mailto:hello@stratgenai.in" className="text-blue-600 hover:text-blue-700 transition-colors font-body text-lg font-semibold">
                        hello@stratgenai.in
                      </a>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal direction="right" delay={0.4}>
            <motion.form
              onSubmit={handleSubmit}
              className="bg-gradient-to-br from-blue-50/80 via-pink-50/80 to-purple-50/80 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-white/30 relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-ai opacity-0 hover:opacity-5 transition-opacity duration-500"
                animate={{
                  backgroundPosition: ['0%', '100%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                style={{
                  backgroundSize: '200% auto',
                }}
              />
              <div className="space-y-6 relative z-10">
                <div>
                  <label htmlFor="name" className="block text-sm font-heading font-bold text-gray-800 mb-3">
                    Your Name
                  </label>
                  <motion.input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-5 py-4 rounded-2xl border-2 border-gray-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-200 outline-none transition-all bg-white/90 backdrop-blur-sm font-body text-lg shadow-lg"
                    placeholder="John Doe"
                    whileFocus={{ scale: 1.02, borderColor: '#0ea5e9' }}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none bg-white"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full px-8 py-5 bg-gradient-ai text-white rounded-2xl font-heading font-bold text-lg shadow-2xl relative overflow-hidden flex items-center justify-center space-x-3 group/btn"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-20 transition-opacity"
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                  <span className="relative z-10">Send Message</span>
                  <motion.div
                    className="relative z-10"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Send className="w-6 h-6" />
                  </motion.div>
                </motion.button>
              </div>
            </motion.form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

