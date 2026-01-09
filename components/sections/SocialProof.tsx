'use client'

import { motion } from 'framer-motion'
import { Shield, Award, CheckCircle2, Lock, Verified, Star, TrendingUp, Users } from 'lucide-react'

const trustBadges = [
  {
    icon: Shield,
    title: 'ISO Certified',
    description: 'Quality Assured',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Lock,
    title: 'GDPR Compliant',
    description: 'Data Protected',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Verified,
    title: 'SOC 2 Type II',
    description: 'Security Verified',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Award,
    title: 'Industry Leader',
    description: 'AI Excellence',
    color: 'from-pink-500 to-pink-600'
  }
]

const securityBadges = [
  {
    icon: Shield,
    text: '256-bit SSL Encryption',
    color: 'text-blue-600'
  },
  {
    icon: Lock,
    text: 'End-to-End Security',
    color: 'text-green-600'
  },
  {
    icon: CheckCircle2,
    text: 'Regular Security Audits',
    color: 'text-purple-600'
  },
  {
    icon: Verified,
    text: 'Compliance Certified',
    color: 'text-pink-600'
  }
]

const mediaMentions = [
  {
    name: 'TechCrunch',
    logo: 'TC',
    color: 'from-orange-500 to-orange-600'
  },
  {
    name: 'Forbes',
    logo: 'F',
    color: 'from-blue-500 to-blue-700'
  },
  {
    name: 'AI News',
    logo: 'AI',
    color: 'from-purple-500 to-purple-600'
  },
  {
    name: 'Business Insider',
    logo: 'BI',
    color: 'from-pink-500 to-pink-600'
  },
  {
    name: 'VentureBeat',
    logo: 'VB',
    color: 'from-green-500 to-green-600'
  },
  {
    name: 'The Verge',
    logo: 'TV',
    color: 'from-red-500 to-red-600'
  }
]

const stats = [
  {
    icon: Users,
    number: '500+',
    label: 'Happy Clients',
    color: 'from-blue-500 to-purple-500'
  },
  {
    icon: Star,
    number: '4.9/5',
    label: 'Client Rating',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: TrendingUp,
    number: '98%',
    label: 'Satisfaction Rate',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Award,
    number: '50+',
    label: 'Projects Delivered',
    color: 'from-purple-500 to-pink-500'
  }
]

export default function SocialProof() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-center text-gray-900 mb-8">
            Trusted & Certified
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
            {trustBadges.map((badge, index) => {
              const Icon = badge.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 text-center"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${badge.color} mb-4`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-heading font-semibold text-gray-900 text-sm md:text-base mb-1">
                    {badge.title}
                  </h4>
                  <p className="text-xs md:text-sm text-gray-600">
                    {badge.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Security Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-center text-gray-900 mb-8">
            Enterprise-Grade Security
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
            {securityBadges.map((badge, index) => {
              const Icon = badge.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center space-x-3 bg-white px-6 py-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                >
                  <Icon className={`w-6 h-6 ${badge.color}`} />
                  <span className="font-heading font-medium text-gray-700 text-sm md:text-base">
                    {badge.text}
                  </span>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* As Seen In */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <p className="text-sm md:text-base text-gray-500 uppercase tracking-wider font-heading font-semibold mb-4">
              As Seen In
            </p>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto"></div>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-6 max-w-5xl mx-auto">
            {mediaMentions.map((media, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-center justify-center group"
              >
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${media.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                  <span className="text-white font-heading font-bold text-lg">
                    {media.logo}
                  </span>
                </div>
                <p className="text-xs md:text-sm font-heading font-medium text-gray-700 text-center">
                  {media.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-2xl p-8 md:p-12 border border-gray-100"
        >
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-center text-gray-900 mb-10">
            Our Impact in Numbers
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r ${stat.color} mb-4`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className={`text-3xl md:text-4xl font-heading font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                    {stat.number}
                  </div>
                  <p className="text-sm md:text-base text-gray-600 font-heading font-medium">
                    {stat.label}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

      </div>
    </section>
  )
}


