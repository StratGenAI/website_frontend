'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  // Social media links - Update these with your actual links
  const socialLinks = {
    facebook: 'https://facebook.com/yourpage', // Replace with your Facebook link
    instagram: 'https://instagram.com/yourpage', // Replace with your Instagram link
    linkedin: 'https://linkedin.com/company/yourpage', // Replace with your LinkedIn link
    twitter: 'https://twitter.com/yourpage', // Replace with your Twitter link
  }

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-heading font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              StratgenAI
            </h3>
            <p className="text-gray-400 mb-4 text-sm leading-relaxed">
              AI Solutions for Your Business
            </p>
            <p className="text-gray-500 text-xs leading-relaxed">
              Transforming businesses with cutting-edge AI technology
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="#home" 
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform inline-block">Home</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="#about" 
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform inline-block">About Us</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="#products" 
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform inline-block">Our Products</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/services" 
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform inline-block">Services</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="#contact" 
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform inline-block">Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4 text-white">Products</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="#products" 
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform inline-block">Keirō</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="#products" 
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform inline-block">Stratflow</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4 text-white">Follow Us</h4>
            <div className="flex items-center space-x-4">
              <motion.a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-blue-600 text-gray-400 hover:text-white flex items-center justify-center transition-all"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 text-gray-400 hover:text-white flex items-center justify-center transition-all"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-blue-700 text-gray-400 hover:text-white flex items-center justify-center transition-all"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-blue-500 text-gray-400 hover:text-white flex items-center justify-center transition-all"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
            </div>
            <p className="text-gray-500 text-xs mt-6">
              Connect with us on social media
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} StratgenAI. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm font-medium bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              From Silent Gen to Gen Alpha - AI that speaks your language
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
