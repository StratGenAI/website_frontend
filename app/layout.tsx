import type { Metadata } from 'next'
import { Space_Grotesk, Playfair_Display, Poppins, Outfit } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import AnnouncementBar from '@/components/AnnouncementBar'
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
  title: {
    default: 'StratgenAI - AI Solutions for Your Business | Intelligent Automation',
    template: '%s | StratgenAI'
  },
  description: 'Transform your business with cutting-edge AI software solutions. We help businesses automate processes, enhance productivity, and drive innovation. Specializing in AI chatbots, machine learning, and intelligent automation.',
  keywords: ['AI solutions', 'artificial intelligence', 'machine learning', 'AI chatbot', 'business automation', 'AI consulting', 'StratgenAI', 'Keirō', 'Stratflow', 'AI software', 'digital transformation', 'AI maturity model'],
  authors: [{ name: 'StratgenAI' }],
  creator: 'StratgenAI',
  publisher: 'StratgenAI',
  applicationName: 'StratgenAI',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://stratgenai.in'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/single_s.png',
    shortcut: '/single_s.png',
    apple: '/single_s.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://stratgenai.in',
    title: 'StratgenAI - AI Solutions for Your Business | Intelligent Automation',
    description: 'Transform your business with cutting-edge AI software solutions. We help businesses automate processes, enhance productivity, and drive innovation.',
    siteName: 'StratgenAI',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'StratgenAI - AI Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'StratgenAI - AI Solutions for Your Business',
    description: 'Transform your business with cutting-edge AI software solutions.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_VERIFICATION,
    yandex: process.env.YANDEX_VERIFICATION,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'StratgenAI',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://stratgenai.in',
    logo: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://stratgenai.in'}/single_s.png`,
    description: 'AI software company specializing in intelligent business solutions, AI chatbots, and machine learning.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Ahmedabad',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'hello@stratgenai.in',
      contactType: 'Customer Service',
    },
    sameAs: [
      'https://www.linkedin.com/company/stratgenai',
      'https://twitter.com/stratgenai',
    ],
  }

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${spaceGrotesk.variable} ${playfair.variable} ${poppins.variable} ${outfit.variable} font-sans`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Navbar />
        <AnnouncementBar />
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

