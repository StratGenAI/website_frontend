import type { Metadata } from 'next'
import { Space_Grotesk, Playfair_Display, Poppins, Outfit } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingButton from '@/components/FloatingButton'
import AnimatedGradient from '@/components/AnimatedGradient'
import Chatbot from '@/components/Chatbot'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

const outfit = Outfit({ 
  subsets: ['latin'],
  variable: '--font-outfit',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'StratgenAI - AI Solutions for Your Business',
  description: 'Transform your business with cutting-edge AI software solutions. We help businesses automate processes, enhance productivity, and drive innovation.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${spaceGrotesk.variable} ${playfair.variable} ${poppins.variable} ${outfit.variable} font-sans`}>
        <Navbar />
        <main className="min-h-screen relative z-10">
          {children}
        </main>
        <Footer />
        <FloatingButton />
        <Chatbot />
      </body>
    </html>
  )
}

