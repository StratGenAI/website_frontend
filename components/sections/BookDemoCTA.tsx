'use client'

import Link from 'next/link'
import { Calendar, Mail } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'

export default function BookDemoCTA() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal direction="up">
          <h2 className="text-3xl md:text-4xl font-display font-black text-white mb-4">
            Ready to see StratgenAI in action?
          </h2>
          <p className="text-white/90 font-body max-w-xl mx-auto mb-8">
            Book a strategy session or send us your requirements — we typically respond within 1–2 business days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-purple-700 rounded-xl font-heading font-bold shadow-lg hover:bg-gray-50 transition-colors"
            >
              <Calendar className="w-5 h-5" />
              Contact us
            </Link>
            <a
              href="mailto:hello@stratgenai.in"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/80 text-white rounded-xl font-heading font-bold hover:bg-white/10 transition-colors"
            >
              <Mail className="w-5 h-5" />
              hello@stratgenai.in
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
