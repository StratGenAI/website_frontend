'use client'

import { motion } from 'framer-motion'
import { Tag, Zap, TrendingUp } from 'lucide-react'

export default function AnnouncementBar() {
  const announcements = [
    { text: '20% OFF New Year Special: Transform Your Business with AI - Limited Time Offer', icon: Tag },
    { text: 'Start 2026 with Intelligent Automation - Book Your Free Consultation Today', icon: Zap },
    { text: 'New Year, New AI Solutions - Get Started and Save 20%', icon: TrendingUp },
  ]

  // Create duplicate array for seamless loop
  const allAnnouncements = [...announcements, ...announcements]

  return (
    <div className="fixed top-16 md:top-20 lg:top-24 left-0 right-0 z-40 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 overflow-hidden shadow-lg">
      <div className="relative h-10 md:h-11 flex items-center overflow-hidden w-full">
        <motion.div
          className="flex items-center space-x-8 whitespace-nowrap"
          animate={{
            x: ['0%', '-50%'],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
            repeatType: 'loop',
          }}
        >
          {allAnnouncements.map((announcement, i) => {
            const Icon = announcement.icon
            return (
              <div key={i} className="flex items-center space-x-3 text-white text-sm md:text-base font-semibold px-8 flex-shrink-0">
                <Icon className="w-4 h-4 md:w-5 md:h-5" />
                <span>{announcement.text}</span>
              </div>
            )
          })}
        </motion.div>

        {/* Gradient Overlay for smooth edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-blue-600 to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-pink-600 to-transparent pointer-events-none z-10" />
      </div>
    </div>
  )
}
