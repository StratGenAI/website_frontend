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

