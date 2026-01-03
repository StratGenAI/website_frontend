import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Products from '@/components/sections/Products'
import UseCases from '@/components/sections/UseCases'
import Solutions from '@/components/sections/Solutions'
import Contact from '@/components/sections/Contact'
import FoundersPanel from '@/components/sections/FoundersPanel'

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <About />
      <FoundersPanel />
      <Products />
      <UseCases />
      <Solutions />
      <Contact />
    </div>
  )
}

