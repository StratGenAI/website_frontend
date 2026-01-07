import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Products from '@/components/sections/Products'
import UseCases from '@/components/sections/UseCases'
import Solutions from '@/components/sections/Solutions'
import Contact from '@/components/sections/Contact'
import FoundersPanel from '@/components/sections/FoundersPanel'
import OurCulture from '@/components/sections/OurCulture'
import Reviews from '@/components/sections/Reviews'
import FAQ from '@/components/sections/FAQ'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'StratgenAI - AI Solutions for Your Business | Intelligent Automation',
  description: 'StratgenAI - Transform your business with cutting-edge AI software solutions. We help businesses automate processes, enhance productivity, and drive innovation with our AI chatbot Keirō and fashion AI platform Stratflow.',
  openGraph: {
    title: 'StratgenAI - AI Solutions for Your Business',
    description: 'Transform your business with cutting-edge AI software solutions.',
    url: '/',
  },
}

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <About />
      <FoundersPanel />
      <OurCulture />
      <Products />
      <UseCases />
      <Solutions />
      <Reviews />
      <FAQ />
      <Contact />
    </div>
  )
}

