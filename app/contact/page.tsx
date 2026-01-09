import Contact from '@/components/sections/Contact'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - StratgenAI',
  description: 'Get in touch with StratgenAI. Contact us for AI solutions, consultations, and business inquiries.',
  openGraph: {
    title: 'Contact Us - StratgenAI',
    description: 'Get in touch with StratgenAI for AI solutions and consultations.',
    url: '/contact',
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-28 md:pt-36 lg:pt-40">
      <Contact />
    </div>
  )
}



