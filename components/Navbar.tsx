'use client'

import { useState, useEffect, useRef } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false)
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)
  const [skillsDropdownOpen, setSkillsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const aboutDropdownRef = useRef<HTMLDivElement>(null)
  const servicesDropdownRef = useRef<HTMLDivElement>(null)
  const skillsDropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      
      // Only close if click is truly outside and not on any dropdown button
      const isProductsButton = dropdownRef.current?.querySelector('button')?.contains(target)
      const isAboutButton = aboutDropdownRef.current?.querySelector('button')?.contains(target)
      const isServicesButton = servicesDropdownRef.current?.querySelector('button')?.contains(target)
      const isSkillsButton = skillsDropdownRef.current?.querySelector('button')?.contains(target)
      
      // Don't close if clicking on any dropdown button
      if (isProductsButton || isAboutButton || isServicesButton || isSkillsButton) {
        return
      }
      
      // Close dropdowns if clicking outside
      if (dropdownRef.current && !dropdownRef.current.contains(target)) {
        setProductsDropdownOpen(false)
      }
      if (aboutDropdownRef.current && !aboutDropdownRef.current.contains(target)) {
        setAboutDropdownOpen(false)
      }
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(target)) {
        setServicesDropdownOpen(false)
      }
      if (skillsDropdownRef.current && !skillsDropdownRef.current.contains(target)) {
        setSkillsDropdownOpen(false)
      }
    }
    
    // Use setTimeout to ensure this runs after button click handlers
    setTimeout(() => {
      document.addEventListener('click', handleClickOutside, true)
    }, 0)
    
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [])

  const handleProductClick = (productId: string) => {
    // Navigate to home page first if not already there
    if (window.location.pathname !== '/') {
      window.location.href = '/#products'
      return
    }
    
    const productsSection = document.getElementById('products')
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' })
      setTimeout(() => {
        const productElement = document.getElementById(`product-${productId}`)
        if (productElement) {
          productElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }
      }, 500)
    }
    setProductsDropdownOpen(false)
    setIsOpen(false)
  }

  const handleHashLink = (href: string) => {
    // If href starts with #, navigate to home page with hash
    if (href.startsWith('#')) {
      if (window.location.pathname !== '/') {
        window.location.href = `/${href}`
      } else {
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }
  }

  const products = [
    { id: '1', name: 'Keirō' },
    { id: '2', name: 'Stratflow' },
  ]

  const aboutItems = [
    { href: '#founders', label: 'Founders' },
    { href: '#culture', label: 'Our Culture' },
  ]

  const servicesItems = [
    { href: '/services', label: 'Services' },
    { href: '/industry-vertical', label: 'Industry Vertical' },
  ]

  const handleAboutClick = (href: string) => {
    handleHashLink(href)
    setAboutDropdownOpen(false)
    setIsOpen(false)
  }

  const handleServicesClick = (href: string) => {
    if (href.startsWith('/')) {
      window.location.href = href
    } else {
      handleHashLink(href)
    }
    setServicesDropdownOpen(false)
    setIsOpen(false)
  }

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#products', label: 'Our Products' },
    { href: '#skills', label: 'Skills' },
    { href: '/services', label: 'Services' },
    { href: '/experiences', label: 'Experiences' },
    { href: '/ai-maturity-model', label: 'AI Maturity Model' },
    { href: '#about', label: 'About Us' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-200/50'
          : 'bg-white/80 backdrop-blur-md'
      }`}
      style={{ overflow: 'visible' }}
    >
    <div className="container mx-auto px-2 sm:px-3 md:px-4 lg:px-6">
      <div className="flex items-center justify-between h-14 sm:h-16 md:h-20 lg:h-24 w-full gap-1 md:gap-2">
  
        {/* Logo - More Left Aligned */}
        <Link
          href="/"
          className="flex items-center flex-shrink-0 z-10 -ml-1 sm:-ml-2 md:-ml-3 lg:-ml-4"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            {/* Company Logo */}
            <div
              className="relative"
              style={{ overflow: 'visible', zIndex: 10, lineHeight: 0 }}
            >
              <Image
                src="/single_s.png"
                alt="StratgenAI Logo"
                width={1200}
                height={1400}
                priority
                unoptimized
                className="object-contain"
                style={{
                  backgroundColor: 'transparent',
                  height: '60px',
                  width: 'auto',
                  maxWidth: '120px',
                  display: 'block'
                }}
              />
            </div>
          </motion.div>
        </Link>

          {/* Desktop Menu - Right Side */}
          <div className="hidden md:flex items-center space-x-0.5 lg:space-x-1 xl:space-x-2 flex-shrink-0 ml-auto">
            {navItems.map((item) => {
              if (item.label === 'About Us') {
                return (
                  <div key={item.href} className="relative" ref={aboutDropdownRef}>
                    <motion.button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation()
                        e.preventDefault()
                        const newState = !aboutDropdownOpen
                        setAboutDropdownOpen(newState)
                      }}
                      className="relative px-2 py-2 md:px-3 md:py-2 lg:px-4 text-gray-700 hover:text-gray-900 transition-all font-heading font-medium text-xs md:text-sm lg:text-base xl:text-lg rounded-lg hover:bg-gray-50 border border-transparent hover:border-gray-200 flex items-center space-x-1"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${aboutDropdownOpen ? 'rotate-180' : ''}`} />
                    </motion.button>
                    
                    <AnimatePresence>
                      {aboutDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden z-50"
                        >
                          {aboutItems.map((aboutItem) => (
                            <motion.button
                              key={aboutItem.href}
                              onClick={() => handleAboutClick(aboutItem.href)}
                              className="w-full px-5 py-3 text-left text-gray-700 hover:bg-gray-50 transition-all font-heading font-medium text-sm border-b border-gray-100 last:border-b-0"
                              whileHover={{ x: 5 }}
                            >
                              {aboutItem.label}
                            </motion.button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              }
              if (item.label === 'Services') {
                return (
                  <div key={item.href} className="relative" ref={servicesDropdownRef}>
                    <div className="flex items-center">
                      <Link
                        href="/services"
                        className="relative px-2 py-2 md:px-3 md:py-2 lg:px-4 text-gray-700 hover:text-gray-900 transition-all font-heading font-medium text-xs md:text-sm lg:text-base xl:text-lg rounded-lg hover:bg-gray-50 border border-transparent hover:border-gray-200"
                      >
                        {item.label}
                      </Link>
                      <motion.button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation()
                          e.preventDefault()
                          const newState = !servicesDropdownOpen
                          setServicesDropdownOpen(newState)
                        }}
                        className="px-2 py-2 text-gray-700 hover:text-gray-900 transition-all rounded-lg hover:bg-gray-50"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ChevronDown className={`w-4 h-4 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                      </motion.button>
                    </div>
                    
                    <AnimatePresence>
                      {servicesDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute top-full right-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden z-50"
                        >
                          {servicesItems.map((serviceItem) => (
                            <motion.button
                              key={serviceItem.href}
                              onClick={() => handleServicesClick(serviceItem.href)}
                              className="w-full px-5 py-3 text-left text-gray-700 hover:bg-gray-50 transition-all font-heading font-medium text-sm border-b border-gray-100 last:border-b-0"
                              whileHover={{ x: 5 }}
                            >
                              {serviceItem.label}
                            </motion.button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              }
              if (item.label === 'Our Products') {
                return (
                  <div key={item.href} className="relative" ref={dropdownRef}>
                    <motion.button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation()
                        e.preventDefault()
                        const newState = !productsDropdownOpen
                        setProductsDropdownOpen(newState)
                      }}
                      className="relative px-2 py-2 md:px-3 md:py-2 lg:px-4 text-gray-700 hover:text-gray-900 transition-all font-heading font-medium text-xs md:text-sm lg:text-base xl:text-lg rounded-lg hover:bg-gray-50 border border-transparent hover:border-gray-200 flex items-center space-x-1"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${productsDropdownOpen ? 'rotate-180' : ''}`} />
                    </motion.button>
                    
                    <AnimatePresence>
                      {productsDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden z-50"
                        >
                          {products.map((product) => (
                            <motion.button
                              key={product.id}
                              onClick={() => handleProductClick(product.id)}
                              className="w-full px-5 py-3 text-left text-gray-700 hover:bg-gray-50 transition-all font-heading font-medium text-sm border-b border-gray-100 last:border-b-0"
                              whileHover={{ x: 5 }}
                            >
                              {product.name}
                            </motion.button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              }
              if (item.label === 'Skills') {
                return (
                  <div key={item.href} className="relative" ref={skillsDropdownRef}>
                    <motion.button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation()
                        e.preventDefault()
                        const newState = !skillsDropdownOpen
                        setSkillsDropdownOpen(newState)
                      }}
                      className="relative px-2 py-2 md:px-3 md:py-2 lg:px-4 text-gray-700 hover:text-gray-900 transition-all font-heading font-medium text-xs md:text-sm lg:text-base xl:text-lg rounded-lg hover:bg-gray-50 border border-transparent hover:border-gray-200 flex items-center space-x-1"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${skillsDropdownOpen ? 'rotate-180' : ''}`} />
                    </motion.button>
                    
                    <AnimatePresence>
                      {skillsDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden z-50"
                        >
                          <Link
                            href="/area-of-expertise"
                            onClick={() => setSkillsDropdownOpen(false)}
                            className="block w-full px-5 py-3 text-left text-gray-700 hover:bg-gray-50 transition-all font-heading font-medium text-sm border-b border-gray-100"
                          >
                            <span>Area of Expertise</span>
                          </Link>
                          <Link
                            href="/technologies"
                            onClick={() => setSkillsDropdownOpen(false)}
                            className="block w-full px-5 py-3 text-left text-gray-700 hover:bg-gray-50 transition-all font-heading font-medium text-sm"
                          >
                            <span>Technologies</span>
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              }
              if (item.href.startsWith('/') && item.label !== 'Services') {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="relative px-4 py-2 text-gray-700 hover:text-gray-900 transition-all font-heading font-medium text-base lg:text-lg rounded-lg hover:bg-gray-50 border border-transparent hover:border-gray-200"
                  >
                    {item.label}
                  </Link>
                )
              }
              
              return (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleHashLink(item.href)
                  }}
                  className="relative px-2 py-2 md:px-3 md:py-2 lg:px-4 text-gray-700 hover:text-gray-900 transition-all font-heading font-medium text-xs md:text-sm lg:text-base xl:text-lg rounded-lg hover:bg-gray-50 border border-transparent hover:border-gray-200 cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item.label}
                </motion.a>
              )
            })}
          </div>

          {/* Let's Collaborate Button - Right Aligned */}
          <motion.a
            href="/contact"
            className="hidden md:flex items-center justify-center px-3 py-2 md:px-4 md:py-2.5 lg:px-5 lg:py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-heading font-bold text-xs md:text-sm lg:text-base xl:text-lg rounded-lg md:rounded-xl shadow-lg hover:shadow-xl transition-all overflow-hidden group ml-1 md:ml-2 whitespace-nowrap"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Animated Background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              animate={{
                backgroundPosition: ['0%', '100%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{
                backgroundSize: '200% auto',
              }}
            />
            <span className="relative z-10">Let's Collaborate</span>
          </motion.a>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-1.5 sm:space-x-2 flex-shrink-0">
            {/* Mobile Collaborate Button */}
            <motion.a
              href="/contact"
              className="px-2.5 py-1.5 sm:px-3 sm:py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-heading font-semibold text-[10px] sm:text-xs rounded-lg shadow-md whitespace-nowrap"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Collaborate
            </motion.a>
            <motion.button
              className="p-1.5 sm:p-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors border border-gray-200 flex-shrink-0"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <X size={18} className="sm:w-5 sm:h-5 text-gray-700" /> : <Menu size={18} className="sm:w-5 sm:h-5 text-gray-700" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200 shadow-lg"
          >
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navItems.map((item, index) => {
                if (item.label === 'About Us') {
                  return (
                    <div key={item.href}>
                      <motion.button
                        onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                        className="w-full py-3 px-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all font-heading font-medium border border-gray-200 flex items-center justify-between"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.02, x: 5 }}
                      >
                        <span>{item.label}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${aboutDropdownOpen ? 'rotate-180' : ''}`} />
                      </motion.button>
                      <AnimatePresence>
                        {aboutDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-2 space-y-1 pl-4"
                          >
                            {aboutItems.map((aboutItem) => (
                              <motion.button
                                key={aboutItem.href}
                                onClick={() => handleAboutClick(aboutItem.href)}
                                className="w-full py-2 px-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all font-heading font-medium text-sm text-gray-700"
                                whileHover={{ x: 5 }}
                              >
                                {aboutItem.label}
                              </motion.button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                }
                if (item.label === 'Services') {
                  return (
                    <div key={item.href}>
                      <motion.button
                        onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                        className="w-full py-3 px-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all font-heading font-medium border border-gray-200 flex items-center justify-between"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.02, x: 5 }}
                      >
                        <span>{item.label}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                      </motion.button>
                      <AnimatePresence>
                        {servicesDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-2 space-y-1 pl-4"
                          >
                            {servicesItems.map((serviceItem) => (
                              <motion.button
                                key={serviceItem.href}
                                onClick={() => handleServicesClick(serviceItem.href)}
                                className="w-full py-2 px-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all font-heading font-medium text-sm text-gray-700"
                                whileHover={{ x: 5 }}
                              >
                                {serviceItem.label}
                              </motion.button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                }
                if (item.label === 'Our Products') {
                  return (
                    <div key={item.href}>
                      <motion.button
                        onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                        className="w-full py-3 px-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all font-heading font-medium border border-gray-200 flex items-center justify-between"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.02, x: 5 }}
                      >
                        <span>{item.label}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${productsDropdownOpen ? 'rotate-180' : ''}`} />
                      </motion.button>
                      <AnimatePresence>
                        {productsDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-2 space-y-1 pl-4"
                          >
                            {products.map((product) => (
                              <motion.button
                                key={product.id}
                                onClick={() => handleProductClick(product.id)}
                                className="w-full py-2 px-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all font-heading font-medium text-sm text-gray-700"
                                whileHover={{ x: 5 }}
                              >
                                {product.name}
                              </motion.button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                }
                if (item.label === 'Skills') {
                  return (
                    <div key={item.href}>
                      <motion.button
                        onClick={() => setSkillsDropdownOpen(!skillsDropdownOpen)}
                        className="w-full py-3 px-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all font-heading font-medium border border-gray-200 flex items-center justify-between"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.02, x: 5 }}
                      >
                        <span>{item.label}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${skillsDropdownOpen ? 'rotate-180' : ''}`} />
                      </motion.button>
                      <AnimatePresence>
                        {skillsDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-2 space-y-1 pl-4"
                          >
                            <Link
                              href="/area-of-expertise"
                              onClick={() => {
                                setIsOpen(false)
                                setSkillsDropdownOpen(false)
                              }}
                              className="block w-full py-2 px-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all font-heading font-medium text-sm text-gray-700"
                            >
                              Area of Expertise
                            </Link>
                            <Link
                              href="/technologies"
                              onClick={() => {
                                setIsOpen(false)
                                setSkillsDropdownOpen(false)
                              }}
                              className="block w-full py-2 px-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all font-heading font-medium text-sm text-gray-700"
                            >
                              Technologies
                            </Link>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                }
                if (item.href.startsWith('/') && item.label !== 'Services') {
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block py-3 px-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all font-heading font-medium border border-gray-200"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )
                }
                
                return (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault()
                      setIsOpen(false)
                      handleHashLink(item.href)
                    }}
                    className="block py-3 px-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all font-heading font-medium border border-gray-200 cursor-pointer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    {item.label}
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

