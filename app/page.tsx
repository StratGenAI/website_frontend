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
import HowWeWork from '@/components/sections/HowWeWork'
import Integrations from '@/components/sections/Integrations'
import TrustSecurity from '@/components/sections/TrustSecurity'
import HomeCaseStudies from '@/components/sections/HomeCaseStudies'
import BookDemoCTA from '@/components/sections/BookDemoCTA'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'StratgenAI - AI Solutions for Your Business | Intelligent Automation',
  description: 'StratgenAI - Transform your business with Keirō AI chatbot and accelerate research with BioCopilot AI for genomics and multi-omics teams.',
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
      <HowWeWork />
      <FoundersPanel />
      <OurCulture />
      <Products />
      <Integrations />
      <TrustSecurity />
      <UseCases />
      <HomeCaseStudies />
      <Solutions />
      <Reviews />
      <FAQ />
      <BookDemoCTA />
      <Contact />
    </div>
  )
}

