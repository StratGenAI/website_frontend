'use client'

import { motion } from 'framer-motion'
import { Tag, Zap, TrendingUp } from 'lucide-react'

export default function AnnouncementBar() {
  const announcements = [
    { text: '20% OFF New Year Special: Transform Your Business with AI - Limited Time Offer', icon: Tag },
    { text: 'Start 2026 with Intelligent Automation - Book Your Free Consultation Today', icon: Zap },
    { text: 'New Year, New AI Solutions - Get Started and Save 20%', icon: TrendingUp },
  ]

  return (
    <div className="fixed top-16 md:top-20 lg:top-24 left-0 right-0 z-40 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 overflow-hidden shadow-md">
      <div className="relative h-7 md:h-8 flex items-center">
        {/* Scrolling Text */}
        <motion.div
          className="flex items-center space-x-8 whitespace-nowrap"
          animate={{
            x: ['0%', '-100%'],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {[...Array(3)].map((_, i) => {
            const announcement = announcements[i % announcements.length]
            const Icon = announcement.icon
            return (
              <div key={i} className="flex items-center space-x-2 text-white text-xs md:text-sm font-heading font-semibold">
                <Icon className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                <span>{announcement.text}</span>
              </div>
            )
          })}
        </motion.div>

        {/* Gradient Overlay for smooth edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-blue-600 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-pink-600 to-transparent pointer-events-none" />
      </div>
    </div>
  )
}

