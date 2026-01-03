'use client'

import { useState, useEffect, useRef } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProductsDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
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

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#products', label: 'Products' },
    { href: '/services', label: 'Services' },
    { href: '#use-cases', label: 'Use Cases' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-gradient-to-r from-blue-50/90 via-white/90 to-pink-50/90 backdrop-blur-xl shadow-2xl border-b border-white/30'
          : 'bg-gradient-to-br from-blue-50/70 via-white/60 to-pink-50/70 backdrop-blur-lg'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24 lg:h-28 w-full">
          {/* Logo - Very Big Size - Left Side */}
          <Link
            href="/"
            className="flex items-center flex-shrink-0 bg-transparent"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src="/company_logo.png"
                alt="Company Logo"
                width={900}
                height={900}
                className="h-52 w-auto md:h-96 md:w-auto lg:h-[28rem] lg:w-auto object-contain max-w-[400px] bg-transparent"
                priority
                unoptimized
                style={{ backgroundColor: 'transparent' }}
              />
            </motion.div>
          </Link>

          {/* Desktop Menu - Right Side, Parallel to Logo */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-4 flex-shrink-0">
            {navItems.map((item) => {
              if (item.label === 'Products') {
                return (
                  <div key={item.href} className="relative" ref={dropdownRef}>
                    <motion.button
                      onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                      className="relative px-5 py-2.5 text-gray-800 transition-all font-heading font-semibold text-sm lg:text-base rounded-lg bg-gradient-to-r from-blue-200/60 via-purple-200/60 to-pink-200/60 backdrop-blur-sm border border-white/20 shadow-sm hover:shadow-md flex items-center space-x-1"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
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
                              className="w-full px-5 py-3 text-left text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-pink-50 transition-all font-heading font-medium text-sm border-b border-gray-100 last:border-b-0"
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
              if (item.href.startsWith('/')) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="relative px-5 py-2.5 text-gray-800 transition-all font-heading font-semibold text-sm lg:text-base rounded-lg bg-gradient-to-r from-blue-200/60 via-purple-200/60 to-pink-200/60 backdrop-blur-sm border border-white/20 shadow-sm hover:shadow-md hover:scale-105 active:scale-95"
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
                  className="relative px-5 py-2.5 text-gray-800 transition-all font-heading font-semibold text-sm lg:text-base rounded-lg bg-gradient-to-r from-blue-200/60 via-purple-200/60 to-pink-200/60 backdrop-blur-sm border border-white/20 shadow-sm hover:shadow-md cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.a>
              )
            })}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-3 rounded-xl bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-colors shadow-lg border border-white/20"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X size={24} className="text-gray-700" /> : <Menu size={24} className="text-gray-700" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/90 backdrop-blur-xl border-t border-white/20 shadow-2xl"
          >
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navItems.map((item, index) => {
                if (item.label === 'Products') {
                  return (
                    <div key={item.href}>
                      <motion.button
                        onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                        className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-blue-50/50 to-pink-50/50 hover:from-blue-100/50 hover:to-pink-100/50 transition-all font-heading font-semibold border border-white/30 shadow-sm flex items-center justify-between"
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
                                className="w-full py-2 px-4 rounded-lg bg-gradient-to-r from-blue-40/30 to-pink-40/30 hover:from-blue-50/50 hover:to-pink-50/50 transition-all font-heading font-medium text-sm text-gray-700"
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
                if (item.href.startsWith('/')) {
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block py-3 px-4 rounded-xl bg-gradient-to-r from-blue-50/50 to-pink-50/50 hover:from-blue-100/50 hover:to-pink-100/50 transition-all font-heading font-semibold border border-white/30 shadow-sm hover:scale-102 hover:translate-x-1"
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
                    className="block py-3 px-4 rounded-xl bg-gradient-to-r from-blue-50/50 to-pink-50/50 hover:from-blue-100/50 hover:to-pink-100/50 transition-all font-heading font-semibold border border-white/30 shadow-sm cursor-pointer"
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

